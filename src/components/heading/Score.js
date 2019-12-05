import React from 'react';
import { 
    Segment,
    Button,
    Header,
    Icon,
    Statistic
 } from 'semantic-ui-react';
import { FaBlackTie } from 'react-icons/fa';

const scoreStyle = {
    fontSize: 20,
    color: 'black'
}

function Score(props) {
    return(
        <Segment placeholder>
            <Header icon>
            <Statistic size='huge' color='pink'>
                <Statistic.Value>
                    {props.score}
                    <span style={scoreStyle}>
                        {props.hasTestBeenRun ? '' : '/100'}
                    </span>
                </Statistic.Value>
                <Statistic.Label>Obscurity Score</Statistic.Label>
            </Statistic>
            </Header>
            <Segment.Inline>
            </Segment.Inline>
        </Segment>
    )
}

export default Score;