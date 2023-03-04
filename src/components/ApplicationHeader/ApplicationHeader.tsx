import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Logo from '@/assets/icons/logo-writty.svg';
import { AccountMenu } from '@/components/AccountMenu/AccountMenu';
import { ConnectWalletButton } from '@/components/ConnectWalletButton/ConnectWalletButton';
import { useMount } from '@/hooks/useMount';
import { selectAuthLoading } from '@/store/loader/LoaderSelectors';
import { selectIsLoggedIn, selectUserInfo } from '@/store/user/UserSelectors';
import { createWebsocket } from '@/utils/WebsocketHelper';

import * as UI from './ApplicationHeader.styles';

const ApplicationHeader = () => {
  const dispatch = useDispatch();
  const accountInfo = useSelector(selectUserInfo);
  const isLoading = useSelector(selectAuthLoading);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useMount(() => {
    const init = async () => {
      await createWebsocket({ dispatch });
    };

    init();
  });

  return (
    <UI.Header>
      <UI.StyledLogoSearch>
        <UI.Logo src={Logo} />
      </UI.StyledLogoSearch>
      <UI.StyledProfileUpload>
        {isLoggedIn ? (
          <AccountMenu accountInfo={accountInfo} />
        ) : (
          <ConnectWalletButton loading={isLoading} />
        )}
      </UI.StyledProfileUpload>
    </UI.Header>
  );
};

export { ApplicationHeader };
