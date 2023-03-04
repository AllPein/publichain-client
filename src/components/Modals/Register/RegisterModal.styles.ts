import { Input } from 'antd';
import styled from 'styled-components';

export const Text = styled.p`
  margin: 20px 0;
  text-align: center;
`;

export const StyledInput = styled(Input)``;

export const Label = styled.p`
  color: ${(props) => props.theme.color.grayscale5};
  font-size: 14px;
  margin: 10px 0;
`;
