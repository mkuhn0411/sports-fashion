import { useRef, useContext } from 'react';

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
        <>
            <select id='sort' ref={sortRef} name='sort' onChange={handleFormChange} required>
                <option value='value' selected disabled>Sort</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
            </select>
        </>
    )
}

export default SortDropdown;