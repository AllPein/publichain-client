import React from 'react';

import { Spin } from '@/components/Spin/Spin';
import { StyledCenteredSpinWrapper } from './CenteredSpin.styles';

const CenteredSpin = ({ spinning = false }) => (
  <StyledCenteredSpinWrapper>
    <Spin data-automation="spinner" spinning={spinning} />
  </StyledCenteredSpinWrapper>
);

export { CenteredSpin };
