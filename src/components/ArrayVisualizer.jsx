import React from 'react';

const ArrayVisualizer = ({ array, comparing, swapping, pivot, sorted }) => {
    const barWidth = Math.max(1000 / array.length, 4); // minimum width 4px

    return (
        <div className="array-container">
            {array.map((value, index) => {
                let className = 'array-bar';
                if (sorted.includes(index)) className += ' sorted';
                else if (pivot === index) className += ' pivot';
                else if (swapping.includes(index)) className += ' swapping';
                else if (comparing.includes(index)) className += ' comparing';

                return (
                    <div key={index} className="bar-wrapper">
                        <div className="bar-label">{value}</div>
                        <div
                            className={className}
                            style={{
                                height: `${value}px`,
                                width: `${barWidth}px`,
                            }}
                        ></div>
                    </div>
                );
            })}
        </div>
    );
};

export default ArrayVisualizer;
