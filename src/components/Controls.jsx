import React from 'react';

const Controls = ({
    algorithm, setAlgorithm,
    size, setSize,
    speed, setSpeed,
    generateArray, startSorting, stopSorting,
    sorting
}) => {
    return (
        <div className="controls">
            <div className="control-group">
                <label>Algorithm:</label>
                <select value={algorithm} onChange={(e) => setAlgorithm(e.target.value)}>
                    <option value="bubble">Bubble Sort</option>
                    <option value="selection">Selection Sort</option>
                    <option value="insertion">Insertion Sort</option>
                    <option value="merge">Merge Sort</option>
                    <option value="quick">Quick Sort</option>
                    <option value="heap">Heap Sort</option>
                    <option value="radix">Radix Sort</option>
                    <option value="shell">Shell Sort</option>
                </select>
            </div>

            <div className="control-group">
                <label>Array Size:</label>
                <input type="range" min="10" max="100" value={size}
                    onChange={(e) => setSize(Number(e.target.value))} />
                <span>{size}</span>
            </div>

            <div className="control-group">
                <label>Speed:</label>
                <input type="range" min="1" max="10" value={speed}
                    onChange={(e) => setSpeed(Number(e.target.value))} />
                <span>{speed}</span>
            </div>

            <div className="button-group">
                <button onClick={generateArray} className="generate-array" disabled={sorting}>Generate Array</button>
                <button onClick={startSorting} className="sort" disabled={sorting}>Start Sorting</button>
                <button onClick={stopSorting} className="stop" disabled={!sorting}>Stop</button>
            </div>
        </div>
    );
};

export default Controls;
