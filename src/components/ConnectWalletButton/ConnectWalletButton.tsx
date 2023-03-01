import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { UserAction } from '@/store/user/UserAction';

import * as UI from './ConnectWalletButton.styles';

const ConnectWalletButton = () => {
  const dispatch = useDispatch();


  const handleConnectWalletClick = () => {
    dispatch(UserAction.initConnect());
  };

  return (
    <UI.StyledButton type="primary" onClick={handleConnectWalletClick}>
      Connect Wallet
    </UI.StyledButton>
  );
};

export { ConnectWalletButton };
