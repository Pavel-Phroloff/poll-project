import styled from 'styled-components';
import { Button } from 'antd';

export const ButtonStyled = styled(Button)`
  min-width: 100px;
  background: rgb(103, 58, 183);
  color: white;
  &:hover {
    color: rgb(103, 58, 183);
    border-color: rgb(103, 58, 183);
  }
`;
