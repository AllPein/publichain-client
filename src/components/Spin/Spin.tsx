import React from 'react';

import { Spin as AntdSpin } from 'antd';

type Props = {
  children?: React.ReactNode;
  spinning?: boolean;
};

const Spin: React.FC<Props> = ({ children, spinning = false }) => (
  <AntdSpin spinning={spinning}>{children}</AntdSpin>
);

export { Spin };
