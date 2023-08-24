import { ButtonProps } from "./type";

import './index.css';

const DotButton = ({ children, style, onComplete, className, active }: ButtonProps) => (
    <button
        className={className || "button"}
        style={{ background: active === undefined ? '#0050a2' : active ? '#ffffff' : '#f64900', ...style }}
        onClick={active ? onComplete : undefined}
    >
        {children}
    </button>
);

export default DotButton;
