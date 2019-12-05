import React, { useContext, useState, useEffect } from 'react';
import Spotify from '../api/Spotify';
import { FaInfo } from 'react-icons/fa';

function useTokens(userInfo,setUserInfo) {
    
    let tokens = getHashParams();
    let loggedIn = tokens[0] !== null ? true : false;
    useEffect(() => {
        setUserInfo(prevState => ({ 
            ...prevState,                
            access_token: tokens[0],                 
            refresh_token: tokens[1],                   
            isLoggedIn: loggedIn
        }));
        if (loggedIn) { Spotify.setAccessToken(tokens[0]) };
    },[tokens[0]]) 
}

function getHashParams() {
    var hashParams = {};
    let tokens = [null, null];
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    while ( e = r.exec(q)) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
    }
    // Sanitize returned values
    if(typeof hashParams.access_token !== "undefined" && typeof hashParams.refresh_token !== "undefined") 
    {
        tokens[0] = hashParams.access_token;
        tokens[1] = hashParams.refresh_token;
        return tokens;
    } 
    else 
    {
        return tokens;
    }
}

export default useTokens;
