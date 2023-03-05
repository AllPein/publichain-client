import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '@/components/Modal/Modal';
import { ModalActions, ModalData } from '@/store/Modal/ModalActions';
import { selectRegisterModal } from '@/store/Modal/ModalSelectors';
import { LoaderAction } from '@/store/loader/LoaderActions';
import { WebsocketAction } from '@/store/websocket/websocketActions';

import { Label, StyledInput, Text } from './RegisterModal.styles';

export const RegisterModal: FC = () => {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');

  /** Store */
  const dispatch = useDispatch();
  const modalData: ModalData<{ address: string }> =
    useSelector(selectRegisterModal);

  if (!modalData || !modalData?.payload) {
    return null;
  }

  /** Methods */
  const onClose = () => {
    dispatch(ModalActions.closeModal('register'));
    dispatch(LoaderAction.setLoaded('auth'));
  };

  const onConfirm = () => {
    if (modalData.payload) {
      dispatch(
        WebsocketAction.sendMessage({
          event: 'REGISTER',
          data: {
            name,
            bio,
            address: modalData.payload.address,
          },
        }),
      );
      onClose();

      if (modalData.confirmCallback) {
        modalData.confirmCallback();
      }
    }
  };

  const handleChangeName = (e) => {
    setName(e.target.value);
  };

  const handleChangeBio = (e) => {
    setBio(e.target.value);
  };

  const body = (
    <div>
      <p className="text-slate-500 text-xl leading-relaxed">
        Looks like You are not signed up to Writty yet. Let's change that!
      </p>
      <form className="space-y-8 mt-8" action="#">
        <div>
          <label className="block my-2 text-xl font-medium text-gray-900 dark:text-white">
            Your full name
          </label>
          <input
            type="name"
            name="name"
            id="name"
            onChange={handleChangeName}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
            placeholder="Jane Doe"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
            Tell everyone about yourself
          </label>
          <textarea
            rows={2}
            name="description"
            onChange={handleChangeBio}
            id="description"
            placeholder="Your bio here"
            className="bg-gray-50 border max-h-64 border-gray-300 text-gray-900 text-xl rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
          />
        </div>
      </form>
    </div>
  );

  const footer = (
    <button
      type="button"
      onClick={onConfirm}
      className="text-white bg-indigo-600 hover:bg-indigo-500  focus:outline-none font-medium rounded-lg text-xl px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      Create account
    </button>
  );

  return (
    <Modal
      title="Sign Up to Writty"
      onClose={onClose}
      closable
      isOpen={modalData.isOpen}
      footer={footer}
    >
      {body}
    </Modal>
  );
};
