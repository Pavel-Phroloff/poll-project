import React from 'react';
import Pt from 'prop-types';

import HeaderStyled from './Header.styled';

const Header = ({ title }) => {
  return (
    <HeaderStyled>
      {title || ''}
    </HeaderStyled>
  );
};

Header.propTypes = {
  title: Pt.string
}
export default Header;