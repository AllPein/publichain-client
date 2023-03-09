import React from 'react';

import { LoginModal } from '@/components/Modals/Login/LoginModal';
import { PublicationResultModal } from '@/components/Modals/PublicationResult/PublicationResultModal';
import { SignatureModal } from '@/components/Modals/Signature/SignatureModal';

import { RegisterModal } from './Register/RegisterModal';

const modals = [
  <RegisterModal />,
  <LoginModal />,
  <SignatureModal />,
  <PublicationResultModal />,
];

export const Modals = () => (
  <div>
    {modals.map((modal, i) => (
      <div key={i}>{modal}</div>
    ))}
  </div>
);
