import React, { useContext } from 'react';
import { 
    Segment,
    Button,
    Header,
    Icon
} from 'semantic-ui-react';
import spotify from '../../api/Spotify';
import { UserInfoContext } from '../../store/Store';
import ErrorModal from './ErrorModal';

function RunTest(props) {
    
    const [userInfo,setUserInfo] = useContext(UserInfoContext);

    function AnalyticsCallBack() {
        spotify.getUserPlaylists()
        .then(data => {
            // Write the user playlists to state
            let playlists = data.items;
            setUserInfo(prevState => ({ ...prevState, 
                playlists: playlists
            }))

            // Return playlist ids so we can extract the individual tracks
            return data.items.map(item => {
                return item.id
            });
        })
        .then(playlists => {
            let playlistPromises = playlists.map(playlist => {
                return spotify.getPlaylistTracks(playlist)
            });
            Promise.all(playlistPromises)
                .then(allPlaylists => {
                    let tracks = [];
                    let i = 0;
                    allPlaylists.forEach(playlistData => {
                        playlistData.items.forEach(item => {
                            tracks[i] = {
                                id: item.track.id,
                                name: item.track.name,
                                image: item.track.album.images[0].url,
                                popularity: item.track.popularity,
                                artist: item.track.artists[0].name
                            };
                            i++;
                        })
                    })
                    return tracks
                })
                .then(tracks => {
                    let [mean, median, mode] = calculateArrayStatistics(tracks)
                    setUserInfo(prevState => ({ ...prevState, 
                        tracks: tracks,
                        isLoading: false,
                        mean: mean,
                        median: median,
                        obscurityScore: median
                    }))
                })
        })
        .catch(err => {
            console.log(err);
        })
        
    }

    function calculateArrayStatistics(arr) {
        let mean = 0; let median = 0; let mode = 0; let total = 0;
        // Calculate the mean
        for (let i = 0; i < arr.length; i++) {
            total = total + arr[i].popularity
        }
        mean = arr.length !== 0 ? Math.round(total/arr.length) : 0;
    
        // Calculate the median
        let half = Math.floor(arr.length / 2);
        median = arr.map(item => {
            return item.popularity
        })
        median.sort(function(a,b){
        return a-b;
        });
        median = arr.length !== 0 ? 
        arr.length % 2 ? median[half] : (median[half-1]+median[half]/ 2.0) : 0 ;
    
        return [mean, median, mode]
    }

    function runTestCallback() {

        props.setUserInfo(prevState => ({ 
            ...prevState, 
            hasTestBeenRun: true,
            isLoading: true
        }))

        AnalyticsCallBack();
    }

    return(
        <Segment placeholder>
            <Header icon>
            <Icon name='music' />
            Welcome {props.name}, click the button below to calculate your score.
            </Header>
            <Segment.Inline>
                <Button fluid
                    size ='massive' 
                    color='teal'
                    onClick={runTestCallback}>
                    Test My Obscurity
                </Button>
            </Segment.Inline>
        </Segment>
    )
}

export default RunTest;