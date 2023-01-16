import React, { useContext } from 'react';
// import { useLoaderData } from 'react-router-dom';

import PlayerCard from '../components/PlayerCard';
import classes from './Players.module.css';
import PlayerContext from '../store/player-context';

const Players = () => {
    // const loaderData = useLoaderData();
    const ctx = useContext(PlayerContext);
    const players = ctx.players;

    return (
        <div className={classes['player-card-container']}>  
            {players.map(player => (
                <PlayerCard key={player.id} name={player.name} image={player.image} league={player.league} rating={player.rating}/>
            ))}
        </div>
    )
}

export default Players;
