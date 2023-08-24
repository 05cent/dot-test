import { ButtonProps } from "./types";

import './index.css';

const DotButton = ({ children, style, onPositionChange, active }: ButtonProps) => {
    console.log(active);
    return (
        <button
            className={"button"}
            style={{ background: active ? '#ffffff' : '#f64900', ...style }}
            onClick={onPositionChange}
        >
            {children}
        </button>
    );
}

export default DotButton;