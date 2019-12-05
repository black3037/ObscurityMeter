import React from 'react';
import { 
  Statistic,
  Progress,
  Item,
  Grid,
  Segment
} from 'semantic-ui-react';

function StatNumbers(props) {

    const statStyle = {
      display: 'flex',
      justifyContent: 'space-between',
      flexWrap: 'wrap'
    }

    return(
      <Grid.Column>
        <Segment loading={props.isLoading}>
          <h3>Obscurity Score Breakdown</h3>
          <div>
          <div style={statStyle}>
          <Statistic.Group size='small'>
          <Statistic>
            <Statistic.Value>31</Statistic.Value>
            <Statistic.Label>Playlists Analyzed</Statistic.Label>
          </Statistic>
          <Statistic>
            <Statistic.Value>22</Statistic.Value>
            <Statistic.Label>Songs Analyzed</Statistic.Label>
          </Statistic>
          </Statistic.Group>
        </div>
      <br></br>
      <Progress progress='value' value={35} total={50}>
        Average Song Popularity
      </Progress>
      <Progress progress='value' value={35} total={50}>
        Median Song Popularity
      </Progress>

      <Item>
      <Item.Image size='tiny' src='' />

      <Item.Content>
        <Item.Header>Most Obscure Song</Item.Header>
        <Item.Meta>
          <span>Artist</span>
          <span>Song</span>
        </Item.Meta>
        <Item.Description>My Text</Item.Description>
      </Item.Content>
      <br></br>
      <Item.Content>
        <Item.Header>Least Obscure Song</Item.Header>
        <Item.Meta>
        <span>Artist</span>
        <span>Song</span>
        </Item.Meta>
        <Item.Description>My Text</Item.Description>
      </Item.Content>

    </Item>
    </div>
        </Segment>
      </Grid.Column>
    )
}

export default StatNumbers;