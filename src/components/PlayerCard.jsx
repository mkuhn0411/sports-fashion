import { useCallback, useState, useEffect } from 'react';

import classes from './PlayerCard.module.css';

import RatingContainer from './RatingContainer';

import { saveRating, getRatings } from '../util/api';


const PlayerCard = ({ name, image, league }) => {
  
    const [averageRating, setAverageRating] = useState();

    const handleRatingChange = async ratingData => {
        const newRating = await saveRating(ratingData);
        setAverageRating(newRating);
        
    }

    useEffect(() => {
        (async () => {
            const rating = await getRatings(name);
            setAverageRating(rating);
        })();
     }, [averageRating]);

    let logo;

    switch(league) {
        case 'nba':
            logo = 'https://cdn.nba.com/logos/leagues/logo-nba.svg';
          break;
        case 'nfl':
            logo = 'https://static.www.nfl.com/image/upload/v1554321393/league/nvfr7ogywskqrfaiu38m.svg';
          break;
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