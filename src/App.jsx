import { useEffect, useState } from 'react';
import ArrayVisualizer from './components/ArrayVisualizer';
import Controls from './components/Controls';
import Stats from './components/Stats';
import AlgorithmInfo from './components/AlgorithmInfo';
import {
  bubbleSort,
  selectionSort,
  insertionSort,
  mergeSortWrapper,
  quickSortWrapper,
  heapSort,
  shellSort,
  radixSort
} from './utils/sortingAlgorithms';
import './index.css';

function App() {
  const [array, setArray] = useState([]);
  const [size, setSize] = useState(50);
  const [speed, setSpeed] = useState(5);
  const [algorithm, setAlgorithm] = useState('bubble');

  const [sorting, setSorting] = useState(false);
  const [comparisons, setComparisons] = useState(0);
  const [accesses, setAccesses] = useState(0);

  const [comparing, setComparing] = useState([]);
  const [swapping, setSwapping] = useState([]);
  const [pivot, setPivot] = useState(null);
  const [sorted, setSorted] = useState([]);

  useEffect(() => {
    generateArray();
  }, [size]);

  const generateArray = () => {
    const temp = Array.from({ length: size }, () => Math.floor(Math.random() * 300) + 10);
    setArray(temp);
    setComparisons(0);
    setAccesses(0);
    setComparing([]);
    setSwapping([]);
    setPivot(null);
    setSorted([]);
  };

  const startSorting = async () => {
    setSorting(true);
    let resultArray = [];

    switch (algorithm) {
      case 'bubble':
        resultArray = await bubbleSort(array, speed, setArray, setComparing, setSwapping, setComparisons, setAccesses);
        break;
      case 'selection':
        resultArray = await selectionSort(array, speed, setArray, setComparing, setSwapping, setComparisons, setAccesses);
        break;
      case 'insertion':
        resultArray = await insertionSort(array, speed, setArray, setComparing, setSwapping, setComparisons, setAccesses);
        break;
      case 'merge':
        resultArray = await mergeSortWrapper(array, speed, setArray, setComparing, setComparisons, setAccesses);
        break;
      case 'quick':
        resultArray = await quickSortWrapper(array, speed, setArray, setComparing, setSwapping, setComparisons, setAccesses);
        break;
      case 'heap':
        resultArray = await heapSort(array, speed, setArray, setComparing, setSwapping, setComparisons, setAccesses);
        break;
      case 'shell':
        resultArray = await shellSort(array, speed, setArray, setComparing, setSwapping, setComparisons, setAccesses);
        break;
      case 'radix':
        resultArray = await radixSort(array, speed, setArray, setAccesses);
        break;
      default:
        alert('Algorithm not implemented!');
    }

    setSorted([...Array(resultArray.length).keys()]);
    setComparing([]);
    setSwapping([]);
    setSorting(false);
  };

  const stopSorting = () => {
    window.location.reload();
  };

  return (
    <div className="container">
      <header className="header">
        <h1>SortX Engine</h1>
      </header>

      <Controls
        algorithm={algorithm}
        setAlgorithm={setAlgorithm}
        size={size}
        setSize={setSize}
        speed={speed}
        setSpeed={setSpeed}
        generateArray={generateArray}
        startSorting={startSorting}
        stopSorting={stopSorting}
        sorting={sorting}
      />
      <Stats comparisons={comparisons} accesses={accesses} algorithm={algorithm} />

      <ArrayVisualizer
        array={array}
        comparing={comparing}
        swapping={swapping}
        pivot={pivot}
        sorted={sorted}
      />

      <AlgorithmInfo algorithm={algorithm} />
    </div>
  );
}

export default App;
