import React from 'react';
import styled from 'styled-components';

import { Menu } from 'semantic-ui-react';

const StyleMenu = styled.div`
    position: relative;
    top: -35px;
    justifyContent: space-around;

   * {
        color: ivory;
        font-weight: 400;
        font-color: #ffff;
        font-size: 1.2rem;
        font-family: cursive; 
    }

`
const HeaderMenu = () => {
    return (
    <StyleMenu>
        <Menu pointing secondary >
            <Menu.Item name='home'
             active= 'home'
            //  onClick={this.handleItemClick} 
            />
            <Menu.Item
                name='messages'
            // active={activeItem === 'messages'}
            // onClick={this.handleItemClick}
            />
            <Menu.Item
                name='friends'
            // active={activeItem === 'friends'}
            // onClick={this.handleItemClick}
            />
            <Menu.Menu position='right'>
                <Menu.Item
                    name='logout'
                // active={activeItem === 'logout'}
                // onClick={this.handleItemClick}
                />
            </Menu.Menu>
        </Menu>
    </StyleMenu>
);
}

export default HeaderMenu;