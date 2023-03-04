import React from 'react';

import { LoginModal } from '@/components/Modals/Login/LoginModal';

import { RegisterModal } from './Register/RegisterModal';

const modals = [<RegisterModal />, <LoginModal />];

export const Modals = () => (
  <div>
    {modals.map((modal, i) => (
      <div key={i}>{modal}</div>
    ))}
  </div>
);
