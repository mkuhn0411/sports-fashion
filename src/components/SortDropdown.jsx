import { useRef, useContext } from 'react';

import classes from './SortDropdown.module.css';
import PlayerContext from '../store/player-context';

const SortDropdown = ({ handleSortMethod }) => {
    const sortRef = useRef();
    const ctx = useContext(PlayerContext);
    // const [sortMetod, setSortMetod] = useState();

    const handleFormChange = event => {
        event.preventDefault();
        ctx.sortPlayers(sortRef.current.value)
        // handleSortMethod(sortRef.current.value);    
    }

    return (  
        <div className={classes.sortContainer}>
            <label htmlFor='sort'>Sort by:</label>
            <select id='sort' ref={sortRef} name='sort' onChange={handleFormChange} required>
                <option value='value' selected disabled></option>
                <option value="all">ALL</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
                <option value="nba">NBA</option>
                <option value="nfl">NFL</option>
                <option value="nhl">NHL</option>
                <option value="mlb">MLB</option>
            </select>
        </div>   
    )
}

export default SortDropdown;