import { createSlice } from '@reduxjs/toolkit';

import { getPlayers, savePlayer } from '../util/api';

const playersSlice = createSlice({
    name: 'players',
    initialState: {
        players: []
    },
    reducers: {
        getPlayers(state, action) {
           
        }
    }
});