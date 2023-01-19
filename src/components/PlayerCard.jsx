import { useState, useEffect, useContext } from 'react';

import classes from './PlayerCard.module.css';
import RatingContainer from './RatingContainer';
import { saveRating, getRatings } from '../util/api';
import PlayerContext from '../store/player-context';

const PlayerCard = ({ name, image, league, rating }) => {
    const ctx = useContext(PlayerContext);
  
    const [averageRating, setAverageRating] = useState(rating);

    const handleRatingChange = async ratingData => {
        const newRating = await saveRating(ratingData);
        ctx.setRating(newRating, name);
        setAverageRating(newRating);
    }

    // useEffect(() => {
    //     (async () => {
    //         const playerRating = await getRatings(name);
    //         setAverageRating(playerRating);
    //     })();
    //  }, [setAverageRating]);

    let logo;

    switch(league) {
        case 'nba':
            logo = 'https://cdn.nba.com/logos/leagues/logo-nba.svg';
          break;
        case 'nfl':
            logo = 'https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg';
          break;
        case 'mlb':
            logo = 'https://www.mlbstatic.com/team-logos/league-on-dark/1.svg'
        case 'nhl':
            logo = 'https://www-league.nhlstatic.com/images/logos/league-dark/133-flat.svg'
        default:
          // code block
      }
    return (
        <>
            <div className={classes.card}>
                <p className={classes.playerName}>{name}</p>
                <div 
                    className={classes.playerImage}
                    style={{backgroundImage: `url(${(image)})`}}
                ></div>
                <div className={classes['league-logo-container']}>
                    <div 
                        className={classes.leagueLogo}
                        style={{backgroundImage: `url(${(logo)})`}}
                    >
                    </div>
                </div>
                <p>Rating: {averageRating}</p>
                <RatingContainer playerName={name} onRatingChange={handleRatingChange}/>
            </div>
        </>
    )
}

export default PlayerCard;