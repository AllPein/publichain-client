import React from 'react';

import Logo from '@/assets/icons/logo-3.svg';
import { ConnectWalletButton } from '@/components/ConnectWalletButton/ConnectWalletButton';

import * as UI from './ApplicationHeader.styles';

const ApplicationHeader = () => (
  <UI.Header>
    <UI.StyledLogoSearch>
      <img src={Logo} />
    </UI.StyledLogoSearch>
    <UI.StyledProfileUpload>
      <ConnectWalletButton />
    </UI.StyledProfileUpload>
  </UI.Header>
);

export { ApplicationHeader };
