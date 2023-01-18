import React, { useState, useEffect } from 'react';
import { getPlayers } from '../util/api';

const PlayerContext = React.createContext({
    players: [],
    setPlayerData: () => {},
    setRating: () => {}
});

export const PlayerContextProvider = props => {
    const [players, setPlayers] = useState([]);

    async function setPlayerData() {
        const allPlayers = await getPlayers();
        setPlayers(allPlayers);
    }

    const setRating = (newAvgRating, playerName) => {
        const playersData = [...players];
        const playerInd = playersData.findIndex((player => player.name === playerName));
        playersData[playerInd].rating = newAvgRating;
        setPlayers(playersData);
    }

    return (
        <PlayerContext.Provider 
            value={{ players, setPlayerData, setRating}}
        >
        {props.children}</PlayerContext.Provider>
    )
}

export default PlayerContext;