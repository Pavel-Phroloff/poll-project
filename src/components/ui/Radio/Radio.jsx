import React from 'react';
import Pt from 'prop-types';

import { RadioStyled, Wrapper } from './Radio.styled';

const Radio = ({ options, checked, onChange }) => {
  return (
    <Wrapper>
      {
        options.map(value => (
          <RadioStyled
            key={value}
            checked={value === checked}
            name={value}
            onChange={onChange}
          >
            {value}
          </RadioStyled>
        ))
      }
    </Wrapper>
  );
};

Radio.propTypes = {
  checked: Pt.string.isRequired,
  onChange: Pt.func.isRequired,
  options: Pt.array.isRequired,
};

export default Radio;
