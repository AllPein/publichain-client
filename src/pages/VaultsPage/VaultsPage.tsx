import React from 'react';
import { useDispatch } from 'react-redux';

import { Button } from 'antd';

import { UserAction } from '@/store/user/UserAction';

const VaultsPage: React.FC = () => {
  const dispatch = useDispatch();
  const mintNft = () => {
    dispatch(UserAction.initMint());
  };
  return <Button onClick={mintNft}>Mint</Button>;
};

export { VaultsPage };
