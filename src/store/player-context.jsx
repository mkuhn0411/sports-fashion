import React, { useState, useEffect } from 'react';
import { getPlayers } from '../util/api';

const PlayerContext = React.createContext({
    players: [],
    setPlayerData: () => {},
    sortPlayer: () => {},
    setRating: () => {}
});

export const PlayerContextProvider = props => {
    const [players, setPlayers] = useState([]);

    async function setPlayerData() {
        const allPlayers = await getPlayers();
        console.log(allPlayers)
        setPlayers(allPlayers);
    }

    const setRating = (newAvgRating, playerName) => {
        const playersData = [...players];
        const playerInd = playersData.findIndex((player => player.name === playerName));
        playersData[playerInd].rating = newAvgRating;
        setPlayers(playersData);
    }

    const sortPlayers = sortMethod => {
        let currPlayers = [...players];
        let sortedPlayers;

        if (sortMethod === 'ascending') {
            sortedPlayers = currPlayers.sort(function(a,b){return a.rating-b.rating});
        } else if (sortMethod === 'descending') {
            sortedPlayers = currPlayers.sort(function(a,b){return b.rating-a.rating});
        } 

        setPlayers(sortedPlayers);
    }

    return (
        <PlayerContext.Provider 
            value={{ players, setPlayerData, setRating, sortPlayers}}
        >
        {props.children}</PlayerContext.Provider>
    )
}

export default PlayerContext;