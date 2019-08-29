import React from 'react';
import Pt from 'prop-types';

import { CheckboxStyled, Wrapper } from './Checkbox.styled';

const Checkbox = ({ options, checked, onChange }) => {
  return (
    <Wrapper>
      {
        options.map(value => {
          const isChecked = checked.includes(value);
          return (
            <CheckboxStyled
              key={value}
              checked={isChecked}
              name={value}
              onChange={onChange}
            >
              {value}
            </CheckboxStyled>
          );
        }
        )
      }
    </Wrapper>
  );
};

Checkbox.propTypes = {
  checked: Pt.array.isRequired,
  onChange: Pt.func.isRequired,
  options: Pt.array.isRequired,
};

export default Checkbox;
