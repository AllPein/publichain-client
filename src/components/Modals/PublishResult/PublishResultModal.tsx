import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Modal } from '@/components/Modal/Modal';
import { ModalActions, ModalData } from '@/store/Modal/ModalActions';
import { selectPublishModal } from '@/store/Modal/ModalSelectors';
import { LoaderAction } from '@/store/loader/LoaderActions';

export const PublishResultModal: FC = () => {
  /** Store */
  const dispatch = useDispatch();
  const modalData: ModalData<boolean> = useSelector(selectPublishModal);

  if (!modalData || !modalData?.payload) {
    return null;
  }

  const body = (
    <>
      <p className="mt-6 text-center text-slate-500 text-md leading-relaxed">
        {modalData.payload === true
          ? 'Your publication has been successfuly created. Please, sign the transaction via your Xumm applictaion.'
          : 'There has been an error on the server. Please, try again later.'}
      </p>
    </>
  );

  /** Methods */
  const onClose = () => {
    dispatch(ModalActions.closeModal('publishResult'));
    dispatch(LoaderAction.setLoaded('publish'));
  };

  return (
    <Modal
      onClose={onClose}
      closable
      title="Publication result"
      isOpen={modalData.isOpen}
      footer={null}
    >
      {body}
    </Modal>
  );
};
