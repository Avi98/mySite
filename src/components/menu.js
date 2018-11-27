import React from 'react';
import styled from 'styled-components';

import { Menu } from 'semantic-ui-react';

const StyleMenu = styled.div`
    position: relative;
    top: -35px;
    justifyContent: space-around;

   * {
        font-size: 1rem;
        font-family: cursive; 
    }

`
const HeaderMenu = () => {
    return (
    <StyleMenu>
        <Menu pointing secondary style={{color:"red"}} >
            <Menu.Item name='home'
             active= 'Home'
             style={{color:"ivory"}}
            //  onClick={this.handleItemClick} 
            />
            <Menu.Item
                style={{color:"ivory"}}
                name='Blogs'
            // active={activeItem === 'messages'}
            // onClick={this.handleItemClick}
            />
            <Menu.Item
                style={{color:"ivory"}}
                name='About me'
            // active={activeItem === 'friends'}
            // onClick={this.handleItemClick}
            />
        </Menu>
    </StyleMenu>
);
}

export default HeaderMenu;