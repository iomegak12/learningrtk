import { configureStore } from '@reduxjs/toolkit';
import { CounterSlice } from '../slices/counter-slice';

const store = configureStore({
    reducer: {
        counterState: CounterSlice.reducer
    }
});

export default store;
