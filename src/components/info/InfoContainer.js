import React, { useContext } from 'react';
import ImagePreview from '../../assets/ObscurityScorePreview.png';
import Widget from './Widget'

import { 
    Grid,
    Segment,
    Sticky,
    Container,
    Dimmer,
    Loader,
    Image,
    Step,
    Label,
    Header,
    Icon,
    List
} from 'semantic-ui-react';
import { UserInfoContext } from '../../store/Store';

function InfoContainer(props) {

    const [userInfo,setUserInfo] = useContext(UserInfoContext);
    let visibility = userInfo.hasTestBeenRun ? 'none': 'flex'
    const hideInfo = {
        display: visibility,
        justifyContent: 'center',
    }
    const centerImage = {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    }

    return(
        <Container style={hideInfo}>
            <Widget 
                enum
                var={'hello'}
            />
            <Grid centered>
                <Grid.Column>
                    <br></br>
                    <Header size='huge'>Welcome to Obscurity Meter</Header>
                    <Header.Subheader>
                    A simple web application that links to your Spotify account and determines how obscure your musical taste is based on
                    what songs you have in your playlists.
                    </Header.Subheader>
                    <Header size='large'>How it works</Header>
                    <Header.Subheader>
                    We request any and all playlists that are attached to your acccount (excluding collaborative playlists) and collect all the tracks
                    in those playlists. We use the Spotify web API to collect information about each individual track to determine its popularity. Using that information we then
                    calculate your score. After you run the test, a dashboard will appear that will give you your overall score and a breakdown of the tracks used to calculate your score.
                    </Header.Subheader>
                    <Image style={centerImage} src={ImagePreview} />
                    <Header size='large'>FAQ</Header>
                    <List>
                    <List.Item as='a'>
                    <Icon name='right triangle' />
                    <List.Content>
                        <List.Header>What information do you store on this site?</List.Header>
                        <List.Description>
                            We don't store any of your personal information aside from your spotify user name and the score we gave you. We keep that information so you can see how you rank against others who use this site.
                            Spotify client credientials are NOT stored on our servers. You login through Spotify through their web portal and the application uses an access token provided from Spotify
                            to poll information from your account. We don't store those access tokens and they expire after an hour.
                        </List.Description>
                        </List.Content>
                    </List.Item>
                    </List>
                    <List>
                    <List.Item as='a'>
                    <Icon name='right triangle' />
                    <List.Content>
                        <List.Header>What was this site built with?</List.Header>
                        <List.Description>
                           This site is built with React for the browser view (what you are seeing now) and Node (using express) to perform third party
                           authentication with spotify to access web resources.
                        </List.Description>
                        </List.Content>
                    </List.Item>
                    </List>
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default InfoContainer;