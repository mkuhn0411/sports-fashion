import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
    reducer: {
        players: playersSlice.reducer
    }
});

export default store;