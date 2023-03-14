import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import { AddNftModal } from '@/components/Modals/AddNft/AddNftModal';
import { LoginModal } from '@/components/Modals/Login/LoginModal';
import { PublicationResultModal } from '@/components/Modals/PublicationResult/PublicationResultModal';
import { SignatureModal } from '@/components/Modals/Signature/SignatureModal';
import {
  selectLoginModal,
  selectNftModal,
  selectPublicationResultModal,
  selectRegisterModal,
  selectSignatureModal,
} from '@/store/Modal/ModalSelectors';

import { RegisterModal } from './Register/RegisterModal';

const modals = [
  {
    key: 'register',
    renderer: <RegisterModal />,
  },
  {
    key: 'login',
    renderer: <LoginModal />,
  },
  {
    key: 'nft',
    renderer: <AddNftModal />,
  },
  {
    key: 'signature',
    renderer: <SignatureModal />,
  },
  {
    key: 'publicationResult',
    renderer: <PublicationResultModal />,
  },
];

export const Modals = () => {
  const nftModal = useSelector(selectNftModal);
  const registerModal = useSelector(selectRegisterModal);
  const loginModal = useSelector(selectLoginModal);
  const signatureModal = useSelector(selectSignatureModal);
  const publicationResultModal = useSelector(selectPublicationResultModal);

  const modalOpen = useCallback(
    (key) => {
      switch (key) {
        case 'register':
          return registerModal.isOpen;
        case 'login':
          return loginModal.isOpen;
        case 'nft':
          return nftModal.isOpen;
        case 'signature':
          return signatureModal.isOpen;
        case 'publicationResult':
          return publicationResultModal.isOpen;
      }

      return false;
    },
    [
      registerModal,
      loginModal,
      nftModal,
      signatureModal,
      publicationResultModal,
    ],
  );

  return (
    <div>
      {modals.map((modal, i) => (
        <div key={modal.renderer.toString() + i}>
          {modalOpen(modal.key) && modal.renderer}
        </div>
      ))}
    </div>
  );
};
