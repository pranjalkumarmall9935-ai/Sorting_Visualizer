import React from 'react';

const AlgorithmInfo = ({ algorithm }) => {
    const algorithmDetails = {
        bubble: {
            name: 'Bubble Sort',
            description: 'Bubble Sort repeatedly compares adjacent elements and swaps them if they are in the wrong order. It is simple but inefficient for large datasets.',
        },
        selection: {
            name: 'Selection Sort',
            description: 'Selection Sort selects the smallest (or largest) element from the unsorted part and moves it to the correct position. Simple but not optimal.',
        },
        insertion: {
            name: 'Insertion Sort',
            description: 'Insertion Sort builds the final sorted array one item at a time by comparing and inserting elements into their correct position.',
        },
        merge: {
            name: 'Merge Sort',
            description: 'Merge Sort is a divide and conquer algorithm that divides the array, sorts each part, and merges them. It is efficient and stable.',
        },
        quick: {
            name: 'Quick Sort',
            description: 'Quick Sort picks a pivot element and partitions the array into subarrays, then sorts them recursively. It is efficient but not stable.',
        },
        heap: {
            name: 'Heap Sort',
            description: 'Heap Sort converts the array into a heap data structure and repeatedly extracts the maximum element to sort the array.',
        },
        radix: {
            name: 'Radix Sort',
            description: 'Radix Sort sorts numbers by processing individual digits. It is a non-comparison-based sorting algorithm ideal for integers.',
        },
        shell: {
            name: 'Shell Sort',
            description: 'Shell Sort improves insertion sort by comparing elements far apart. The gap is reduced until the array is fully sorted.',
        },
    };

    const info = algorithmDetails[algorithm];

    return (
        <div className="algorithm-info">
            <h3>{info.name}</h3>
            <p>{info.description}</p>
        </div>
    );
};

export default AlgorithmInfo;
