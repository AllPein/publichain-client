import React from 'react';
import { useDispatch } from 'react-redux';

import { UserAction } from '@/store/user/UserAction';

import * as UI from './ConnectWalletButton.styles';

const ConnectWalletButton = ({ loading }) => {
  const dispatch = useDispatch();

  const handleConnectWalletClick = () => {
    dispatch(UserAction.initConnect());
  };

  return (
    <UI.StyledButton
      loading={loading}
      type="primary"
      onClick={handleConnectWalletClick}
    >
      Connect Wallet
    </UI.StyledButton>
  );
};

export { ConnectWalletButton };
