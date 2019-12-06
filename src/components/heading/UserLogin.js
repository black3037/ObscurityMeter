import React from 'react';
import { 
    Segment,
    Button,
    Header,
    Icon
 } from 'semantic-ui-react';

function UserLogin(props) {
    return(
        <Segment placeholder>
            <Header icon>
            <h1>&#128075;</h1>
            <h2>Hey there!</h2>
            <Header.Subheader>
            To get started you first have to login with Spotify
            </Header.Subheader>
            </Header>
            <Segment.Inline>
                <Button  
                    positive 
                    icon 
                    labelPosition='left'
                    onClick={()=> {window.location.href = 'http://localhost:8888/login'}}
                    >
                <Icon name='spotify' size='large'/>
                &nbsp;Login with Spotify
                </Button>
            </Segment.Inline>
        </Segment>
    )
}

export default UserLogin;