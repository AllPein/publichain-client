import React from 'react';
import { useDispatch } from 'react-redux';

import { DownOutlined } from '@ant-design/icons';
import { Dropdown, MenuProps, Space } from 'antd';

import { UserAction } from '@/store/user/UserAction';

const AccountMenu = ({ accountInfo }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('XummPkceJwt');
    localStorage.removeItem('pkce_state');
    localStorage.removeItem('pkce_code_verifier');

    dispatch(UserAction.setAccountInfo(null));
    dispatch(UserAction.setIsLoggedIn(false));
  };
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
      onClick: handleLogout,
      key: '3',
    },
  ];

  return (
    <Dropdown menu={{ items }} trigger={['click']}>
      <Space>
        {accountInfo?.account.slice(10)}...
        <DownOutlined />
      </Space>
    </Dropdown>
  );
};

export { AccountMenu };
