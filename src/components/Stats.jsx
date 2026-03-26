import React from 'react';

const Stats = ({ comparisons, accesses, algorithm }) => {
    const algorithmDetails = {
        bubble: { name: 'Bubble Sort', time: 'O(n²)', space: 'O(1)' },
        selection: { name: 'Selection Sort', time: 'O(n²)', space: 'O(1)' },
        insertion: { name: 'Insertion Sort', time: 'O(n²)', space: 'O(1)' },
        merge: { name: 'Merge Sort', time: 'O(n log n)', space: 'O(n)' },
        quick: { name: 'Quick Sort', time: 'O(n log n)', space: 'O(log n)' },
        heap: { name: 'Heap Sort', time: 'O(n log n)', space: 'O(1)' },
        radix: { name: 'Radix Sort', time: 'O(nk)', space: 'O(n+k)' },
        shell: { name: 'Shell Sort', time: 'O(n log n)', space: 'O(1)' },
    };

    const info = algorithmDetails[algorithm];

    return (
        <div className="stats">
            <div className="stat-item">
                <span className="stat-label">Comparisons:</span>
                <span className="stat-value">{comparisons}</span>
            </div>
            <div className="stat-item">
                <span className="stat-label">Array Accesses:</span>
                <span className="stat-value">{accesses}</span>
            </div>
            <div className="stat-item">
                <span className="stat-label">Time Complexity:</span>
                <span className="stat-value">{info.time}</span>
            </div>
            <div className="stat-item">
                <span className="stat-label">Space Complexity:</span>
                <span className="stat-value">{info.space}</span>
            </div>
        </div>
    );
};

export default Stats;
