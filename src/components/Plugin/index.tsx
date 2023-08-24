import React, { useEffect } from 'react';
import { useStore } from 'effector-react';
import { dotsStore, updateDots, saveDots, getDots } from '../../api';
import DotButton from '../DotButton';
import { PluginProps } from "./types";

import './index.css';

const dotsTexts = {
    a: ['A1', 'A2', 'A3', 'A4'],
    b: ['B1', 'B2', 'B3', 'B4', 'B5'],
    c: ['C1', 'C2', 'C3', 'C4']
};

const dotIsActive = (dots: string[], dotID: string) => dots.includes(dotID);

const Plugin: React.FC = ({ options }: PluginProps) => {
    const dots: string[] = useStore(dotsStore);

    const onPositionChange = (dotID: string) => {
        const activeDots = dotIsActive(dots, dotID)
            ? dots.filter((dotPosition) => dotPosition !== dotID)
            : [...dots, dotID];
        updateDots(activeDots);
        options.onPositionChange(activeDots);
    };

    const onComplete = async (activeDots: string[]) => {
        if (activeDots.length > 0) await saveDots(activeDots);
    };

    useEffect(() => {
        (async () => {
            const dots = await getDots();
            if (!dots.length && options.initializedOptions.length) updateDots(options.initializedOptions);
        })();
        options.onInit();
    }, []);

    return (
        <>
            {Object.keys(dotsTexts).map((key: string) => (
                <React.Fragment key={key}>
                    {key === 'b' &&
                        <div>
                            <img src="../../../public/image/car.png" alt="car" width={700} />
                        </div>}
                    <div className={key}>
                        {dotsTexts[key].map((dotID: string) =>
                            <DotButton
                                key={dotID}
                                active={!dotIsActive(dots, dotID)}
                                onPositionChange={() => onPositionChange(dotID)}
                            ></DotButton>
                        )}
                    </div>
                </React.Fragment>
            ))}

            <button className="save-dots-btn" onClick={() => onComplete(dots)}>
                Rapporto danni
            </button>
        </>
    );
};

export default Plugin;
