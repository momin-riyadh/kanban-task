import React from 'react';

function Card({ children, className = "" }) {
    return (
        <div
            className={`bg-white rounded-lg shadow-[0_4px_6px_-1px_rgba(54,78,126,0.1015)]  p-4 ${className}`}>
            {children}
        </div>
    );
}

export default Card;
