import { Form } from 'react-router-dom';

import classes from './NewPlayerForm.module.css';

const PlayerForm = ({ onCancel, submitting}) => {
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
                    <select id='league' name='league' required>
                        <option value='value' selected disabled>League</option>
                        <option value="nba">NBA</option>
                        <option value="mlb">MLB</option>
                        <option value="nfl">NBA</option>
                        <option value="nhl">NHL</option>
                        <option value="nfl">NFL</option>
                        <option value="other">Other</option>
                    </select>
                </fieldset>
                <fieldset>
                    <label htmlFor='imageUrl'>Image Url</label>
                    <input id='imageUrl' type='text' name='imageUrl' required />
                </fieldset>
                <div className={classes.buttonContainer}>
                    <button type='button' onClick={onCancel} disabled={submitting}>Cancel</button>
                    <button disabled={submitting}>
                        {submitting ? 'Submitting...':'Add Player'}
                    </button>
                </div>
            </Form>
        </section>
    )
}

export default PlayerForm;