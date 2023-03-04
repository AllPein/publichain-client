import React from 'react';
import { useDispatch } from 'react-redux';

import { LoaderAction } from '@/store/loader/LoaderActions';
import { WebsocketAction } from '@/store/websocket/websocketActions';

import * as UI from './ConnectWalletButton.styles';

const ConnectWalletButton = ({ loading }) => {
  const dispatch = useDispatch();

  const handleConnectWalletClick = () => {
    dispatch(LoaderAction.setLoading('auth')),
      dispatch(
        WebsocketAction.sendMessage({
          event: 'LOGIN',
        }),
      );
  };

  return (
    <UI.StyledButton
      loading={loading}
      type="primary"
      size="large"
      onClick={handleConnectWalletClick}
    >
      Connect Wallet
    </UI.StyledButton>
  );
};

export { ConnectWalletButton };
