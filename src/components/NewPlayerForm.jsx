import { useReducer, useRef, useContext } from 'react';
import { Form, redirect, useNavigate } from 'react-router-dom';

import { savePlayer } from '../util/api';
import PlayerContext from '../store/player-context';
import classes from './NewPlayerForm.module.css';

function checkURL(url) {
    return(url.match(/\.(jpeg|jpg|gif|png|webp)$/) != null);
}

function checkPassword(password) {
    return password.toLowerCase() === 'potato';
}

const ACTIONS = {
    IMAGE_INPUT: 'imageUrl',
    PASSWORD_INPUT: 'password',
    LEAGUE_INPUT: 'league',
    NAME_INPUT: 'playerName'
}

const initialFormState = {name: '', imageUrl: '', validImage: null, password: '', validPassword: null,  league: '', validLeague: null};

const formReducer = (state, action) => {
    switch (action.type) {
        case ACTIONS.IMAGE_INPUT:
            return {...state, imageUrl: action.value, validImage: checkURL(action.value) && action.value.length > 0}
        case ACTIONS.PASSWORD_INPUT:
            return {...state, password: action.value , validPassword: checkPassword(action.value) && action.value.length > 0}
        case ACTIONS.LEAGUE_INPUT:
            return {...state, league: action.value, validLeague: action.value !== 'league'}
        case ACTIONS.NAME_INPUT:
            return {...state, name: action.value}
        default:
            return initialFormState;
    }
}

const PlayerForm = ({ onCancel, submitting}) => {
    const navigate = useNavigate();
    const ctx = useContext(PlayerContext);

    const [formState, dispatch] = useReducer(formReducer, initialFormState);

    const handleFormChange = event => {
        const { name, value } = event.target;
        dispatch({type: name, value});
    }

    async function addPlayerHandler(event) {
        event.preventDefault();
        const response = await savePlayer({name: formState.name, league: formState.league, image: formState.imageUrl});
    
        if (response.ok) {
            ctx.setPlayerData();
            navigate("/");
        }
    }

    const  buttonEnabled = formState.validPassword && formState.validImage && formState.validLeague;

    return (
        <section>
            <h1>Know a player with good fashion? Add them!</h1>
            <Form className={classes.form} method='post' onSubmit={addPlayerHandler}>
                <fieldset>
                    <label htmlFor='playerName'>Player Name</label>
                    <input id='playerName' type='text' name='playerName' onChange={handleFormChange} required />
                </fieldset>
                <fieldset>
                <label htmlFor='league'>Choose a league:</label>
                    <select id='league' name='league' onChange={handleFormChange} required>
                        <option value='value' selected disabled>League</option>
                        <option value="nba">NBA</option>
                        <option value="mlb">MLB</option>
                        <option value="nba">NBA</option>
                        <option value="nhl">NHL</option>
                        <option value="nfl">NFL</option>
                        <option value="other">Other</option>
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor='imageUrl'>Image Url</label>
                    <input id='imageUrl' type='text' name='imageUrl' onChange={handleFormChange} required />
                    {!formState.validImage && formState.imageUrl.length > 0 && <p className={classes.error}>Please enter a valid image url</p>}
                </fieldset>
                <fieldset>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='text' name='password' onChange={handleFormChange}required />
                    {/* {!formState.validPassword && <p className={classes.error}>Please enter the correct password (Contact Mel for PW).</p>} */}
                </fieldset>
                <div className={classes.buttonContainer}>
                    <button type='button' onClick={onCancel} disabled={submitting}>Cancel</button>
                    <button disabled={submitting} className={`${buttonEnabled ? undefined : classes.disabled}`}>
                        {submitting ? 'Submitting...':'Add Player'}
                    </button>
                </div>
            </Form>
        </section>
    )
}

export default PlayerForm;