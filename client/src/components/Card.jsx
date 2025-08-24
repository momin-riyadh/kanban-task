import React from 'react';

function Card({ children, className = "" }) {
    return (
        <div className={`bg-white rounded-lg shadow-sm border border-gray-100 p-4 ${className}`}>
            {children}
        </div>
    );
}

export default Card;
