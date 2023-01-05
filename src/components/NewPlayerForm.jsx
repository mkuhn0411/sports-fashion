import { useReducer, useRef } from 'react';
import { Form } from 'react-router-dom';

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
    LEAGUE_INPUT: 'league'
}

const initialFormState = {imageUrl: '', validImage: null, password: '', validPassword: null, dropdownInvalid: null};

const formReducer = (state, action) => {
    console.log(state)
    switch (action.type) {
        case ACTIONS.IMAGE_INPUT:
            return {...state, imageUrl: action.value, validImage: checkURL(action.value) && action.value.length > 0}
        case ACTIONS.PASSWORD_INPUT:
            return {...state, password: action.value , validPassword: checkPassword(action.value) && action.value.length > 0}
        case ACTIONS.LEAGUE_INPUT:
            return {...state, validDropdown: action.value !== 'league'}
        default:
            return initialFormState;
    }
}

const PlayerForm = ({ onCancel, submitting}) => {

    const [formState, dispatch] = useReducer(formReducer, initialFormState);

    const handleFormChange = event => {
        const { name, value } = event.target;
        dispatch({type: name, value});
    }

    const  buttonEnabled = formState.validPassword && formState.validImage && formState.validDropdown;

    return (
        <section>
            <h1>Know a player with good fashion? Add them!</h1>
            <Form className={classes.form} method='post'>
                <fieldset>
                    <label htmlFor='playerName'>Player Name</label>
                    <input id='playerName' type='text' name='playerName' required />
                </fieldset>
                <fieldset>
                <label htmlFor='league'>Choose a league:</label>
                    <select id='league' name='league' onChange={handleFormChange} required>
                        <option value='value' selected disabled>League</option>
                        <option value="nba">NBA</option>
                        <option value="mlb">MLB</option>
                        <option value="nfl">NBA</option>
                        <option value="nhl">NHL</option>
                        <option value="nfl">NFL</option>
                        <option value="other">Other</option>
                    </select>
                    {formState.dropdownInvalid && <p className={classes.error}>Please select a league</p>}
                </fieldset>
                <fieldset>
                    <label htmlFor='imageUrl'>Image Url</label>
                    <input id='imageUrl' type='text' name='imageUrl' onChange={handleFormChange} required />
                    {formState.invalidImage && <p className={classes.error}>Please enter a valid image url</p>}
                </fieldset>
                <fieldset>
                    <label htmlFor='password'>Password</label>
                    <input id='password' type='text' name='password' onChange={handleFormChange}required />
                    {formState.invalidPassword && <p className={classes.error}>Please enter the correct password (Contact Mel for PW).</p>}
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