import React, { Component } from 'react';
import {Container} from 'semantic-ui-react'

import {Header} from '../components/header'
class Home extends Component {
    state = {  }
    render() { 
        return (
          
            <Container>
               <Header />
            </Container> 
         );
    }
}
 
export default Home;