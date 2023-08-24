import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { PluginOptions } from './types';

const options: PluginOptions = {
    initializedOptions: [],
    onPositionChange(positions: string[]) {
        console.log(positions, 'onpositionchange');
    },
    onComplete(positions: string[]) {
        console.log(positions, 'onComplete');

    },
    onInit() {
        console.log('onInit');
    },
};

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <App options={options} />
    </React.StrictMode>
);
