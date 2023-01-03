import React, { useState } from 'react'
import { Rating } from 'react-simple-star-rating'

import classes from './RatingContainer.module.css';

const RatingContainer = ({ playerName, onRatingChange }) => {
    const [rating, setRating] = useState(0);

    const handleRating = rate => {
        setRating(rate);

        if (rate > 0) {
            onRatingChange({name: playerName, rating: rate});
        }
    }

    const onPointerEnter = () => {}
    const onPointerLeave = () => {
        
    }
    const onPointerMove = (value, index) => {}

    return (
        <div className={classes['star-container']}>
            <p>How do you rate this outfit?</p>
            <Rating
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
                /* Available Props */
            />
        </div>
    )

}

export default RatingContainer;