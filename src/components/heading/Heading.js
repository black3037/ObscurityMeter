import React, { useContext } from 'react';
import { 
    Grid,
    Segment,
    Sticky,
    Container,
    Dimmer,
    Loader,
    Button
 } from 'semantic-ui-react';
import Score from './Score';
import RunTest from './RunTest';
import UserLogin from './UserLogin';
import { UserInfoContext } from '../../store/Store';


function Heading(props) {

    const scoreStyle = {
        fontSize: 20,
        color: 'black'
    }

    const [userInfo,setUserInfo] = useContext(UserInfoContext);

    const welcomeMsg = 'Welcome to Obscurity Meter'
    // Determine what component is displayed to the user based on login and
    // test statuses
    let displayState = <UserLogin />;
    if (!userInfo.isLoggedIn) {
        displayState = <UserLogin />;
    } else if (userInfo.isLoggedIn && !userInfo.hasTestBeenRun) {
        displayState = <RunTest name={userInfo.name} setUserInfo={setUserInfo}/>;
    } else if (userInfo.isLoggedIn && userInfo.hasTestBeenRun) {
        let score = <><span>{userInfo.obscurityScore}</span><span style={scoreStyle}>/100</span></>
        displayState = <Score 
            score={userInfo.obscurityScore === null ? 'Not Rated' : score} 
            hasTestBeenRun={userInfo.hasTestBeenRun}/>;
    } else {
        displayState = <UserLogin />;
    }

    return(
        <Container>
            <Grid columns={1}>
                <Grid.Column centered>
                    <h2>{welcomeMsg}</h2>
                    {displayState}
                </Grid.Column>
            </Grid>
        </Container>
    )
}

export default Heading;