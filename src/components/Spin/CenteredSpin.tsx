import { Spin } from '@/components/Spin/Spin';

import React from 'react';

import { StyledCenteredSpinWrapper } from './CenteredSpin.styles';

const CenteredSpin = ({ spinning = false }) => (
  <StyledCenteredSpinWrapper>
    <Spin data-automation="spinner" spinning={spinning} />
  </StyledCenteredSpinWrapper>
);

export { CenteredSpin };
