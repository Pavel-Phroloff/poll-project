import React from 'react';
import Pt from 'prop-types';

import InputStyled from './Input.styled';

const Input = (props) => {
  return (
    <InputStyled {...props} />
  );
};

Input.propTypes = {
  disabled: Pt.bool,
  onChange: Pt.func.isRequired,
  placeholder: Pt.string,
  value: Pt.string.isRequired,
};

export default Input;
