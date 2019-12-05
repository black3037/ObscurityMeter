import React, { useState, useEffect } from 'react';
import { 
    Grid,
    Segment,
    Sticky,
    Container,
    Search
 } from 'semantic-ui-react';
import Track from './Track';
import _ from 'lodash/core';

function TrackDisplay(props) {

    // Local state
    const searchInitText =  'Search for a song or aritst';
    const [searchLoading,setSearchLoading] = useState(false);
    const [searchValue,setSearchValue] = useState('');
    const [displayTracks,setDisplayTracks] = useState([]);

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
        console.log(propTracks)
        setDisplayTracks(propTracks)
        console.log('Used Effect')

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
    }

    function handleSearchChange(e,{value}) {
        
        setSearchValue(value);
        debounce(500,value,filterTracks);
    }

    function debounce(time,input,handle) {
        setTimeout(() => {
            handle(input);
        },time)
    }

    let results = [];
    
    return(
        <Grid.Column>
            <Segment loading={props.isLoading}>
                <h3>Track Breakdown</h3>
                <Search 
                size='small' 
                loading={searchLoading}
                onResultSelect=''
                onSearchChange={handleSearchChange}
                results={results}
                value={searchValue}/>
                <br></br>
                {displayTracks}
            </Segment>
        </Grid.Column>
    )
}

export default TrackDisplay;
