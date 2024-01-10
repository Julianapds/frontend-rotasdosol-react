import React from 'react';

interface BootstrapButtonProps {
    text: string;
    onClick?: () => void;
    className?: string;
    href?: string;
}

const Button: React.FC<BootstrapButtonProps> = ({ text, onClick, className = '', href }) => {
    if (href) {
        return (
            <a href={href} className={`btn ${className}`}>
                {text}
            </a>
        );
    } else {
        return (
            <button onClick={onClick} className={`btn ${className}`}>
                {text}
            </button>
        );
    }
};

export default Button;