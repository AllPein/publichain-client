import React from 'react';

import { AddNftModal } from '@/components/Modals/AddNft/AddNftModal';
import { LoginModal } from '@/components/Modals/Login/LoginModal';
import { PublicationResultModal } from '@/components/Modals/PublicationResult/PublicationResultModal';
import { SignatureModal } from '@/components/Modals/Signature/SignatureModal';

import { RegisterModal } from './Register/RegisterModal';

const modals = [
  <RegisterModal />,
  <LoginModal />,
  <SignatureModal />,
  <PublicationResultModal />,
  <AddNftModal />,
];

export const Modals = () => (
  <div>
    {modals.map((modal, i) => (
      <div key={i}>{modal}</div>
    ))}
  </div>
);
