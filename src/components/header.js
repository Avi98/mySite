import React from 'react';
import styled from 'styled-components';

import Menu from './menu'
import {HeaderImg} from '../image'
import {FlexContainer} from './commonStyles';

const HeaderBg = styled.div`
    height: 15rem;
    color: aliceblue;
    background-image: url(${HeaderImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const HeaderTitle = styled(FlexContainer)`
  color: aliceblue;
  padding: 9vh 0;
`

const Header = () => {
  return ( 
    <HeaderBg>
      <HeaderTitle>
        <h1>
          Avinash
        </h1>
        <h2>
          React developer
        </h2>
      </HeaderTitle>
        <Menu /> 
    </HeaderBg>
   );
}
 
export {Header};

