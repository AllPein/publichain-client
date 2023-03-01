import React, { useEffect, useMemo } from 'react';
import { useSelector } from 'react-redux';

import { DownOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Space } from 'antd';

import Logo from '@/assets/icons/logo-writty.svg';
import { ConnectWalletButton } from '@/components/ConnectWalletButton/ConnectWalletButton';
import { projectService } from '@/services/ProjectService';
import { selectUserInfo } from '@/store/user/UserSelectors';
import { xrpl } from '@/xrpl';

import * as UI from './ApplicationHeader.styles';

const ApplicationHeader = () => {
  const accountInfo = useSelector(selectUserInfo);
  useEffect(() => {
    projectService.init(new xrpl.Client('wss://s.altnet.rippletest.net:51233'));
  }, []);

  const items: MenuProps['items'] = [
    {
      label: 'Аккаунт',
      key: '0',
    },
    {
      label: 'Мои статьи',
      key: '1',
    },
    {
      type: 'divider',
    },
    {
      label: 'Выйти',
      key: '3',
    },
  ];

  const renderAccountMenu = useMemo(() => {
    return (
      <Dropdown menu={{ items }} trigger={['click']}>
        <Space>
          {accountInfo?.account_data.Account.slice(10)}...
          <DownOutlined />
        </Space>
      </Dropdown>
    );
  }, [accountInfo]);

  return (
    <UI.Header>
      <UI.StyledLogoSearch>
        <UI.Logo src={Logo} />
      </UI.StyledLogoSearch>
      <UI.StyledProfileUpload>
        {accountInfo ? renderAccountMenu : <ConnectWalletButton />}
      </UI.StyledProfileUpload>
    </UI.Header>
  );
};

export { ApplicationHeader };
