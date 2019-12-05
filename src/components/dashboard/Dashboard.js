import React, { useContext, createRef } from 'react';
import { 
    Grid,
    Segment,
    Sticky,
    Container,
    Dimmer,
    Loader
 } from 'semantic-ui-react';

// Import custom components
import Stats from './stats/Stats';
import TrackDisplay from './tracks/TrackDisplay';
import { UserInfoContext } from '../../store/Store';
import spotify from '../../api/Spotify'

function Dashboard(props) {

    const [userInfo,setUserInfo] = useContext(UserInfoContext);
    let contextRef = createRef();

    let displayState = <div></div>
    if (userInfo.hasTestBeenRun) {
        displayState = 
        <>
        <Stats 
            isLoading={userInfo.isLoading} 
            totalPlaylists={userInfo.playlists.length}
            totalSongs={userInfo.tracks.length}
            avgSongPop={userInfo.mean}
            medSongPop={userInfo.median}
            tracks={userInfo.tracks}
            ref={contextRef}
        />
        <TrackDisplay 
            isLoading={userInfo.isLoading}
            tracks={userInfo.tracks}
        />
        </>
    }

    return(
        <Container>
            <Grid stackable columns={2}>
                {displayState}
            </Grid>
        </Container>
    )
}

export default Dashboard;