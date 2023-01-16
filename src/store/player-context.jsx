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
        const players = await getPlayers();
        setPlayers(players);
    }

    const setRating = ratingData => {
        console.log(ratingData)
    }

    return (
        <PlayerContext.Provider 
            value={{ players: players, setPlayerData, setRating}}
        >
        {props.children}</PlayerContext.Provider>
    )
}

export default PlayerContext;