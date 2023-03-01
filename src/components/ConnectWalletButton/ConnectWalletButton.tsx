import React from 'react';
import { useDispatch } from 'react-redux';

import { UserAction } from '@/store/user/UserAction';

import * as UI from './ConnectWalletButton.styles';

const ConnectWalletButton = () => {
  const dispatch = useDispatch();

  const handleConnectWalletClick = () => {
    dispatch(UserAction.initConnect('sEdVQSP17n42nBXcV5a1eGqAPycNvuo'));
  };

  return (
    <UI.StyledButton type="primary" onClick={handleConnectWalletClick}>
      Connect Wallet
    </UI.StyledButton>
  );
};

export { ConnectWalletButton };
