import React from 'react';
import { useDispatch } from 'react-redux';

import { DownOutlined } from '@ant-design/icons';
import { Button, Dropdown, MenuProps, Space } from 'antd';

import { UserAction } from '@/store/user/UserAction';

const AccountMenu = ({ accountInfo }) => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    localStorage.removeItem('token');

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
      <Button size="large">
        <Space>
          {accountInfo?.name}
          <DownOutlined />
        </Space>
      </Button>
    </Dropdown>
  );
};

export { AccountMenu };
