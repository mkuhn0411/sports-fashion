import { NavLink } from 'react-router-dom';

import classes from './MainNavigation.module.css';

const MainNavigation = () => {
    return (
        <header className={classes.header}>
            <nav>
                <ul>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            end
                        >
                            Players
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/add-player'
                            className={({ isActive }) => isActive ? classes.active : undefined}
                            end
                        >
                            Add Player
                        </NavLink>
                    </li>
                </ul>
            </nav>

        </header>
    )
}

export default MainNavigation;