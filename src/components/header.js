import React from 'react';
import styled from 'styled-components';

import Menu from './menu'
import {HeaderImg} from '../image'
import {FlexContainer} from './commonStyles';

const HeaderBg = styled.div`
    height: 15rem;
    color: aliceblue;
    position: absolute;
    top:0;
    right:0;
    left:0;
    z-index: 10;
    background-image: url(${HeaderImg});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;

const HeaderTitle = styled(FlexContainer)`
  color: aliceblue;
  align-items: center;
  min-height: 200px;
  max-height: 450px;
  text-align: center;
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

