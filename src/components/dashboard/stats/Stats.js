import React from 'react';
import { 
    Statistic,
    Progress,
    Item,
    Grid,
    Segment,
    Sticky
  } from 'semantic-ui-react';
import _ from 'lodash/core';

function Stats(props) {

    const statStyle = {
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap'
      }
      
      // Find most obscure and least obscure songs
      let popularityArray = props.tracks.map(track => {
        return track.popularity
      })

      let leastPopularTrack = _.indexOf(popularityArray,Math.min(...popularityArray));
      let leastPopularTrackImage = leastPopularTrack === -1 ? '' : props.tracks[leastPopularTrack].image;
      let leastPopularTrackName = leastPopularTrack === -1 ? '' : props.tracks[leastPopularTrack].name;
      let leastPopularTrackArtist = leastPopularTrack === -1 ? '' : props.tracks[leastPopularTrack].artist;
      let mostPopularTrack = _.indexOf(popularityArray,Math.max(...popularityArray));
      let mostPopularTrackImage = mostPopularTrack === -1 ? '' : props.tracks[mostPopularTrack].image;
      let mostPopularTrackName = mostPopularTrack === -1 ? '' : props.tracks[mostPopularTrack].name;
      let mostPopularTrackArtist = mostPopularTrack === -1 ? '' : props.tracks[mostPopularTrack].artist;

      console.log('least',leastPopularTrack)
      console.log('most',mostPopularTrack)
      return(
        <Grid.Column>
          <Sticky context={props.ref}>
          <Segment loading={props.isLoading}>
            <h3>Obscurity Score Breakdown</h3>
            <div>
            <div style={statStyle}>
            <Statistic.Group size='small'>
            <Statistic>
              <Statistic.Value>{props.totalPlaylists}</Statistic.Value>
              <Statistic.Label>Playlists Analyzed</Statistic.Label>
            </Statistic>
            <Statistic>
            <Statistic.Value>{props.totalSongs}</Statistic.Value>
              <Statistic.Label>Songs Analyzed</Statistic.Label>
            </Statistic>
            </Statistic.Group>
          </div>
        <br></br>
        <Progress progress={props.avgSongPop} value={props.avgSongPop} total={100}>
          Average Song Popularity
        </Progress>
        <Progress progress={props.medSongPop} value={props.medSongPop} total={100}>
          Median Song Popularity
        </Progress>
  
        <Item>
  
        <Item.Content>
          <Item.Header>Most Obscure Song</Item.Header>
          <Item.Image size='tiny' src={leastPopularTrackImage} />
          <Item.Meta>
            <div>{leastPopularTrackArtist}</div>
          </Item.Meta>
          <Item.Description><b>{leastPopularTrackName}</b></Item.Description>
        </Item.Content>
        <br></br>
        <Item.Content>
          <Item.Header>Least Obscure Song</Item.Header>
          <Item.Image size='tiny' src={mostPopularTrackImage} />
          <Item.Meta>
          <div>{mostPopularTrackArtist}</div>
          </Item.Meta>
          <Item.Description><b>{mostPopularTrackName}</b></Item.Description>
        </Item.Content>
  
      </Item>
      </div>
          </Segment>
          </Sticky>
        </Grid.Column>
      )
}

export default Stats;