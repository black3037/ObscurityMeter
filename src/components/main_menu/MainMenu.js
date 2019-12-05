import React, { useContext, useState, useEffect } from 'react';
import { Menu, Button, Icon, Image } from 'semantic-ui-react';
import Spotify from '../../api/Spotify';
import { UserInfoContext } from '../../store/Store'

function MainMenu(props) {

  const [userInfo,setUserInfo] = useContext(UserInfoContext);

  const [userImage,setUserImage] = useState(<Icon name='user circle' size='large' />)

  useEffect(() => {
    if (userInfo.isLoggedIn) {
      Spotify.getMe()
      .then(info => {
        setUserInfo(prevState => ({ ...prevState, 
          image: info.images[0].url,
          name: info.display_name,
          id: info.id,
          email: info.email
      }))
        setUserImage(<><Image src={info.images[0].url} avatar/><span>{info.display_name}</span></>)
      })
      .catch(err => {
        console.log(err)
      })
    }
  },[userInfo.isLoggedIn])

  let addSpotifyLoginButton = <></>;
  if (!userInfo.isLoggedIn) {
    addSpotifyLoginButton = 
    <><Menu.Item>
        <Button 
          positive 
          icon 
          labelPosition='left'
          onClick={()=> {window.location.href = 'http://localhost:8888/login'}}>
          <Icon name='spotify' size='large'/>
          &nbsp;Login with Spotify
        </Button>
      </Menu.Item>
    </>;
  }

  let addTwitterButton = <></>;
  if (userInfo.hasTestBeenRun) {
    let baseUri = 'https://twitter.com/intent/tweet?text='
    let displayStr = encodeURI('My music taste is ' + userInfo.obscurityScore + '%' + ' obscure. How obscure is your taste');
    let formedUrl = baseUri + displayStr;
    addTwitterButton = 
    <><Menu.Item>
        <a target="_blank" href={formedUrl}>
        <Button color='twitter'>
          <Icon name='twitter' /> Tweet Score
        </Button>
        </a>
      </Menu.Item>
    </>;
  }

  return(
      <Menu size='tiny'>
        <Menu.Item
          name='Obscurity Meter'
          active=''
          onClick='#'
        />
        {addTwitterButton}
        <Menu.Menu position='right'>
          {addSpotifyLoginButton}
          <Menu.Item>
            {userImage}
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
}

export default MainMenu;