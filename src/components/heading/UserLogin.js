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
            <br></br> 
            In order to get your score you must first login to Spotify. Click the login to Spotify button below to get started.
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