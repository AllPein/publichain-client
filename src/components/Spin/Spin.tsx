import { Spin as AntdSpin } from 'antd';
import React from 'react';

type Props = {
  children?: React.ReactNode;
  spinning?: boolean;
};

const Spin: React.FC<Props> = ({ children, spinning = false }) => (
  <AntdSpin spinning={spinning}>{children}</AntdSpin>
);

export { Spin };
