import React, { useContext, useState, useEffect, useReducer } from 'react';
import 'semantic-ui-css/semantic.min.css';

// Component imports
import MainMenu from './components/main_menu/MainMenu';
import Dashboard from './components/dashboard/Dashboard';
import Heading from './components/heading/Heading';
import InfoContainer from './components/info/InfoContainer'
import useTokens from './hooks/useTokens';
import { UserInfoContext } from './store/Store';

function App() {

  // Main store for the application
  const [userInfo,setUserInfo] = useState({
    access_token: null,
    refresh_token: null,
    isLoggedIn: false,
    hasTestBeenRun: false,
    isLoading: false,
    playlists: [],
    tracks: [],
    image: null,
    name: null,
    id: null,
    email: null,
    obscurityScore: null,
    mean: null,
    median: null
  })

  // Startup hook to collect user tokens after login
  useTokens(userInfo,setUserInfo);

  return (
    <UserInfoContext.Provider value={[userInfo,setUserInfo]}>
      <MainMenu />
      <Heading />
      <Dashboard />
      <InfoContainer />
    </UserInfoContext.Provider>
  );
}

export default App;
