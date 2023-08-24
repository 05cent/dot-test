import React, { useEffect } from "react";
import { useStore } from 'effector-react';
import { fetchData, fetchedDataStore } from "../api";

const Plugin: React.FC = () => {
    const fetchedData: string[] | null = useStore(fetchedDataStore);
    useEffect(() => {
        console.log(fetchedData);
    }, [fetchedData]);

    return <>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <button>asd</button>
        <div>
            <img src="../../public/image/car.png" alt="car" width={700} />
        </div>
    </>;
};

export default Plugin;