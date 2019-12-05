import React, { useContext, useState } from 'react'
import spotify from './Spotify'
import { UserTracksContext } from '../store/Store'
import { string } from 'prop-types';

export default function PerformAnalytics(me) {
    getAllUserTracks()
}

function getAllUserTracks() {

    spotify.getUserPlaylists()
        .then(data => {
            console.log('First Promise', data)
            return data.items.map((item) => {
                return item.id
            })
        })
        .then(playlists => {
            console.log('Second Promise', playlists)
            let playlistPromises = playlists.map(playlist => {
                return spotify.getPlaylistTracks(playlist)
            });
            Promise.all(playlistPromises)
                .then(allPlaylists => {
                    let trackNames = [];
                    let i = 0;
                    allPlaylists.forEach(playlistData => {
                        playlistData.items.forEach(item => {
                            trackNames[i] = item.track.name;
                            i++;
                        })
                    })
                    return trackNames
                })
                .then(tracks => {
                    console.log('Third Promise', tracks)
                })
        })
        .catch(err => {
            console.log(err)
        })
}

