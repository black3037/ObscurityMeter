import React, { useState, useEffect } from 'react';
import { 
    Grid,
    Segment,
    Search,
    Radio,
    Rail
 } from 'semantic-ui-react';
import Track from './Track';
import _ from 'lodash/core';

function TrackDisplay(props) {

    // Local state
    const [searchLoading,setSearchLoading] = useState(false);
    const [searchValue,setSearchValue] = useState('');
    const [displayTracks,setDisplayTracks] = useState([]);
    const [toggleButton,setToggleButton] = useState(true);

    useEffect(()=>{
        let propTracks = props.tracks.map(track => {
            return(
                <Track 
                    name={track.name} 
                    artist={track.artist} 
                    popularity={track.popularity} 
                    image={track.image}
                />
            );
        });
        setDisplayTracks(toggleButton ? propTracks.slice(0,100) : propTracks)

    },[props.tracks])

    // Search callback routines
    function filterTracks(textInput) {

       setDisplayTracks(props.tracks.filter(track => {
        if (track.name.toLowerCase().includes(textInput.toLowerCase()) ||
            track.artist.toLowerCase().includes(textInput.toLowerCase())) {
            return(track);
        }
        }).map(track => {
            return(
                <Track 
                    name={track.name} 
                    artist={track.artist} 
                    popularity={track.popularity} 
                    image={track.image}
                />
            );
        }))
        setSearchLoading(false);
    }

    function handleSearchChange(e,{value}) {
        setSearchValue(value);
        setSearchLoading(true);
        debounce(500,value,filterTracks);
    }

    function debounce(time,input,handle) {
        setTimeout(() => {
            handle(input);
        },time)
    }

    function trackResultsSizeHandler() {
        let propTracks = props.tracks.map(track => {
            return(
                <Track 
                    name={track.name} 
                    artist={track.artist} 
                    popularity={track.popularity} 
                    image={track.image}
                />
            );
        });
        setToggleButton(toggleButton ? false : true)
        setDisplayTracks(toggleButton ? propTracks : propTracks.slice(0,100))
    }

    return(
        <Grid.Column>
            <Segment loading={props.isLoading}>
                <h3>Track Breakdown</h3>
                <Radio 
                    toggle
                    onChange={trackResultsSizeHandler}
                    checked={toggleButton}
                    label='Display only the first 100 results'
                />
                <br></br>
                <br></br>
                <Search 
                size='small' 
                loading={searchLoading}
                onSearchChange={handleSearchChange}
                results=''
                value={searchValue}
                open={false}/>
                <br></br>
                {displayTracks}
            </Segment>
        </Grid.Column>
    )
}

export default TrackDisplay;
