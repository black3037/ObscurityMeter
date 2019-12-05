import React from 'react';
import { 
    Segment,
    Button,
    Header,
    Icon,
    Statistic
 } from 'semantic-ui-react';

function Score(props) {
    return(
        <Segment placeholder>
            <Header icon>
            <Statistic size='huge' color='pink'>
                <Statistic.Value>{props.score}</Statistic.Value>
                <Statistic.Label>Obscurity Score</Statistic.Label>
            </Statistic>
            </Header>
            <Segment.Inline>
            </Segment.Inline>
        </Segment>
    )
}

export default Score;