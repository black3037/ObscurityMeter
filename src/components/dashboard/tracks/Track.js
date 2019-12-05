import React from 'react';
import { 
    List,
    Label,
    Progress
 } from 'semantic-ui-react';

function Track(props) {

    let color = 'black';
    if (props.popularity >= 70) {
        color = 'green';
    } else if (props.popularity < 70 && props.popularity >= 50) {
        color = 'violet';
    } else if (props.popularity < 50 && props.popularity >= 30) {
        color = 'pink'
    }
    else if (props.popularity < 30 && props.popularity >= 10) {
        color = 'grey'
    }

    return(
        <List.Item>
                <Label as='a' color='' image>
                    <img src={props.image} />
                    {props.artist}
                    <Label.Detail>{props.name}</Label.Detail>
                </Label>
                <br></br>
                <br></br>
                <Progress percent={props.popularity} color={color} progress/>    
        </List.Item>
    )
}

export default Track;