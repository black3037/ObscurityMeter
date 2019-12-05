import React, { useContext, useState, useEffect } from 'react';
import { Menu, Button, Icon, Image } from 'semantic-ui-react';
import { FaUserAstronaut, FaSpotify } from 'react-icons/fa';
import Spotify from '../../api/Spotify';
import { UserInfoContext } from '../../store/Store'

function MainMenu(props) {

  const [userInfo,setUserInfo] = useContext(UserInfoContext);

  const [userImage,setUserImage] = useState(<Icon name='user circle' size='large' />)

  useEffect(() => {
    console.log('MainMenu',userInfo.isLoggedIn)
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

  let addSpotifyLoginButton = <></>
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

  return(
      <Menu size='tiny'>
        <Menu.Item
          name='Obscurity Meter'
          active=''
          onClick='#'
        />
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