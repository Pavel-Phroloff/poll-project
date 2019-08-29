import React from 'react';
import Pt from 'prop-types';

import { ButtonStyled } from './Button.styled';

const Button = (props) => {
  return (
    <ButtonStyled {...props} />
  );
};

Button.propTypes = {
  disabled: Pt.bool,
  name: Pt.string,
  onClick: Pt.func,
  value: Pt.string,
};

export default Button;
