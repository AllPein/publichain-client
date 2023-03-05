import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '@/components/Modal/Modal';
import { ModalActions, ModalData } from '@/store/Modal/ModalActions';
import { selectLoginModal } from '@/store/Modal/ModalSelectors';
import { LoaderAction } from '@/store/loader/LoaderActions';

export const LoginModal: FC = () => {
  /** Store */
  const dispatch = useDispatch();
  const modalData: ModalData<{ src: string }> = useSelector(selectLoginModal);

  if (!modalData || !modalData?.payload) {
    return null;
  }

  const body = (
    <>
      <p className="my-5 text-center text-slate-500 text-2xl leading-relaxed">
        Scan QR code with your Xumm mobile application
      </p>
      <img src={modalData.payload.src} />
    </>
  );

  /** Methods */
  const onClose = () => {
    dispatch(ModalActions.closeModal('login'));
    dispatch(LoaderAction.setLoaded('auth'));
  };

  return (
    <Modal
      onClose={onClose}
      closable
      title="Connect to Writty"
      isOpen={modalData.isOpen}
      footer={null}
    >
      {body}
    </Modal>
  );
};
