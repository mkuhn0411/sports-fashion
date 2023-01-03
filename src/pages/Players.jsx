import { useLoaderData } from 'react-router-dom';

import PlayerCard from '../components/PlayerCard';
import classes from './Players.module.css';

const Players = () => {
    const loaderData = useLoaderData();

    return (
        <div className={classes['player-card-container']}>  
            {loaderData.map(player => (
                <PlayerCard key={player.id} name={player.name} image={player.image} league={player.league}/>
            ))}; 
        </div>
    )
}

export default Players;
