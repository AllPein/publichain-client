import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';

import { UserAction } from '@/store/user/UserAction';

import * as UI from './ConnectWalletButton.styles';

const ConnectWalletButton = () => {
  const [user, setUser] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      console.log(user);
      dispatch(UserAction.setUserInfo(null));
    }
  }, []);

  const handleConnectWalletClick = () => {};

  return (
    <UI.StyledButton type="primary" onClick={handleConnectWalletClick}>
      Connect Wallet
    </UI.StyledButton>
  );
};

export { ConnectWalletButton };
