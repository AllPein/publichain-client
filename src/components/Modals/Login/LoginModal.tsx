import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from 'antd';

import { ModalActions, ModalData } from '@/store/Modal/ModalActions';
import { selectLoginModal } from '@/store/Modal/ModalSelectors';
import { LoaderAction } from '@/store/loader/LoaderActions';

import { Text } from './LoginModal.styles';

export const LoginModal: FC = () => {
  /** Store */
  const dispatch = useDispatch();
  const modalData: ModalData<{ src: string }> = useSelector(selectLoginModal);

  if (!modalData || !modalData?.payload) {
    return null;
  }

  const body = (
    <>
      <Text>Scan QR code with your Xumm mobile application</Text>
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
      onCancel={onClose}
      closable
      bodyStyle={{ textAlign: 'center' }}
      title={<Text>Connect to Writty</Text>}
      open={modalData.isOpen}
      footer={null}
    >
      {body}
    </Modal>
  );
};
