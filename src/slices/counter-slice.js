import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    count: 0
};

const DEFAULT_INCREMENT_VALUE = 1;

const CounterSlice = createSlice({
    name: 'counter',
    reducers: {
        increment(state, { payload }) {
            const parsedPayload = payload ? parseInt(payload) : DEFAULT_INCREMENT_VALUE;

            state.count = state.count + parsedPayload;
        },
        decrement(state) {
            state.count = state.count - 1
        },
        reset(state) {
            state.count = 0;
        }
    },
    initialState
});

const CounterActions = CounterSlice.actions;

export {
    CounterActions,
    CounterSlice
};