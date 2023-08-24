import axios from 'axios';
import { createEffect, createEvent, createStore } from 'effector';

const baseURL = 'https://myfailemtions.npkn.net/b944ff/';

export const getDots = createEffect<void, string[], Error>(async () => {
    try {
        const response = await axios.get(baseURL);
        return response.data ?? [];
    } catch (error) {
        throw error;
    }
});

export const saveDots = createEffect<string[], any, Error>(async (data) => {
    try {
        const response = await axios.post(baseURL, data);
        return response.data;
    } catch (error) {
        throw error;
    }
});

export const updateDots = createEvent();

export const dotsStore = createStore<string[]>([]).on(updateDots, (state, payload) => payload);

dotsStore.on(getDots.doneData, (_, data) => data);
