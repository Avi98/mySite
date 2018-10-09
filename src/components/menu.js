import React from 'react';

import { Menu } from 'semantic-ui-react'

const HeaderMenu = () => {
    return (<Menu pointing secondary style={{display: 'flex',justifyContent: 'space-around', fontFamily: 'cursive' }}>
        <Menu.Item name='home'
        //  active={activeItem === 'home'} 
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
    </Menu>);
}

export default HeaderMenu;