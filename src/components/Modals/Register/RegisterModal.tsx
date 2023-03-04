import React, { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Button, Modal } from 'antd';

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
    <>
      <Text>
        Looks like You are not registered on Writty yet. Let's change that!
      </Text>
      <Label>Your full name</Label>
      <StyledInput
        name="name"
        placeholder="Enter Your full name"
        value={name}
        onChange={handleChangeName}
      />
      <Label>About Yourself</Label>
      <StyledInput
        name="name"
        placeholder="Enter bio"
        value={bio}
        onChange={handleChangeBio}
      />
    </>
  );

  return (
    <Modal
      // bodyStyle={{ textAlign: 'center' }}
      title={<Text>Sign Up to Writty</Text>}
      onOk={onConfirm}
      onCancel={onClose}
      open={modalData.isOpen}
      footer={[
        <Button key="cancel" onClick={onClose}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={onConfirm}>
          Create account
        </Button>,
      ]}
    >
      {body}
    </Modal>
  );
};
