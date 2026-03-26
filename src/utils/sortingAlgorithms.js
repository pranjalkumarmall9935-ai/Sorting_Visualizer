export const sleep = (ms) => new Promise((res) => setTimeout(res, ms));

export async function bubbleSort(
    arr,
    speed,
    setArray,
    setComparing,
    setSwapping,
    setComparisons,
    setAccesses
) {
    const n = arr.length;
    const a = [...arr];

    for (let i = 0; i < n - 1; i++) {
        for (let j = 0; j < n - i - 1; j++) {
            setComparing([j, j + 1]);
            setComparisons((prev) => prev + 1);
            await sleep(201 - speed * 20);

            if (a[j] > a[j + 1]) {
                setSwapping([j, j + 1]);
                [a[j], a[j + 1]] = [a[j + 1], a[j]];
                setArray([...a]);
                setAccesses((prev) => prev + 4);
                await sleep(201 - speed * 20);
            }
        }
    }

    setComparing([]);
    setSwapping([]);
    return a;
}

export async function selectionSort(
    arr,
    speed,
    setArray,
    setComparing,
    setSwapping,
    setComparisons,
    setAccesses
) {
    const n = arr.length;
    const a = [...arr];

    for (let i = 0; i < n - 1; i++) {
        let min = i;

        for (let j = i + 1; j < n; j++) {
            setComparing([min, j]);
            setComparisons((prev) => prev + 1);
            await sleep(201 - speed * 20);

            if (a[j] < a[min]) min = j;
        }

        if (min !== i) {
            setSwapping([i, min]);
            [a[i], a[min]] = [a[min], a[i]];
            setArray([...a]);
            setAccesses((prev) => prev + 4);
            await sleep(201 - speed * 20);
        }
    }

    setComparing([]);
    setSwapping([]);
    return a;
}

export async function insertionSort(
    arr,
    speed,
    setArray,
    setComparing,
    setSwapping,
    setComparisons,
    setAccesses
) {
    const n = arr.length;
    const a = [...arr];

    for (let i = 1; i < n; i++) {
        let key = a[i];
        let j = i - 1;

        while (j >= 0 && a[j] > key) {
            setComparing([j, j + 1]);
            setComparisons((prev) => prev + 1);
            await sleep(201 - speed * 20);

            a[j + 1] = a[j];
            setArray([...a]);
            setAccesses((prev) => prev + 2);
            j--;
        }

        a[j + 1] = key;
        setArray([...a]);
        setAccesses((prev) => prev + 1);
        await sleep(201 - speed * 20);
    }

    setComparing([]);
    return a;
}

export async function mergeSortWrapper(
    arr,
    speed,
    setArray,
    setComparing,
    setComparisons,
    setAccesses
) {
    const a = [...arr];
    await mergeSort(a, 0, a.length - 1, speed, setArray, setComparing, setComparisons, setAccesses);
    return a;
}

async function mergeSort(
    a,
    left,
    right,
    speed,
    setArray,
    setComparing,
    setComparisons,
    setAccesses
) {
    if (left >= right) return;
    const mid = Math.floor((left + right) / 2);
    await mergeSort(a, left, mid, speed, setArray, setComparing, setComparisons, setAccesses);
    await mergeSort(a, mid + 1, right, speed, setArray, setComparing, setComparisons, setAccesses);
    await merge(a, left, mid, right, speed, setArray, setComparing, setComparisons, setAccesses);
}

async function merge(
    a,
    left,
    mid,
    right,
    speed,
    setArray,
    setComparing,
    setComparisons,
    setAccesses
) {
    const leftArr = a.slice(left, mid + 1);
    const rightArr = a.slice(mid + 1, right + 1);

    let i = 0,
        j = 0,
        k = left;

    while (i < leftArr.length && j < rightArr.length) {
        setComparing([k]);
        setComparisons((prev) => prev + 1);
        await sleep(201 - speed * 20);

        if (leftArr[i] <= rightArr[j]) {
            a[k++] = leftArr[i++];
        } else {
            a[k++] = rightArr[j++];
        }
        setArray([...a]);
        setAccesses((prev) => prev + 2);
    }

    while (i < leftArr.length) {
        a[k++] = leftArr[i++];
        setArray([...a]);
        await sleep(201 - speed * 20);
    }

    while (j < rightArr.length) {
        a[k++] = rightArr[j++];
        setArray([...a]);
        await sleep(201 - speed * 20);
    }
}

export async function quickSortWrapper(
    arr,
    speed,
    setArray,
    setComparing,
    setSwapping,
    setComparisons,
    setAccesses
) {
    const a = [...arr];
    await quickSort(a, 0, a.length - 1, speed, setArray, setComparing, setSwapping, setComparisons, setAccesses);
    return a;
}

async function quickSort(
    a,
    low,
    high,
    speed,
    setArray,
    setComparing,
    setSwapping,
    setComparisons,
    setAccesses
) {
    if (low < high) {
        const pi = await partition(a, low, high, speed, setArray, setComparing, setSwapping, setComparisons, setAccesses);
        await quickSort(a, low, pi - 1, speed, setArray, setComparing, setSwapping, setComparisons, setAccesses);
        await quickSort(a, pi + 1, high, speed, setArray, setComparing, setSwapping, setComparisons, setAccesses);
    }
}

async function partition(
    a,
    low,
    high,
    speed,
    setArray,
    setComparing,
    setSwapping,
    setComparisons,
    setAccesses
) {
    const pivot = a[high];
    let i = low - 1;

    for (let j = low; j <= high - 1; j++) {
        setComparing([j, high]);
        setComparisons((prev) => prev + 1);
        await sleep(201 - speed * 20);

        if (a[j] < pivot) {
            i++;
            setSwapping([i, j]);
            [a[i], a[j]] = [a[j], a[i]];
            setArray([...a]);
            setAccesses((prev) => prev + 4);
            await sleep(201 - speed * 20);
        }
    }

    setSwapping([i + 1, high]);
    [a[i + 1], a[high]] = [a[high], a[i + 1]];
    setArray([...a]);
    setAccesses((prev) => prev + 4);
    await sleep(201 - speed * 20);

    return i + 1;
}

export async function heapSort(
    arr,
    speed,
    setArray,
    setComparing,
    setSwapping,
    setComparisons,
    setAccesses
) {
    const n = arr.length;
    const a = [...arr];

    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        await heapify(a, n, i, speed, setArray, setComparing, setSwapping, setComparisons, setAccesses);
    }

    for (let i = n - 1; i > 0; i--) {
        setSwapping([0, i]);
        [a[0], a[i]] = [a[i], a[0]];
        setArray([...a]);
        setAccesses((prev) => prev + 4);
        await sleep(201 - speed * 20);

        await heapify(a, i, 0, speed, setArray, setComparing, setSwapping, setComparisons, setAccesses);
    }

    setComparing([]);
    setSwapping([]);
    return a;
}

async function heapify(
    a,
    n,
    i,
    speed,
    setArray,
    setComparing,
    setSwapping,
    setComparisons,
    setAccesses
) {
    let largest = i;
    const left = 2 * i + 1;
    const right = 2 * i + 2;

    if (left < n) {
        setComparing([largest, left]);
        setComparisons((prev) => prev + 1);
        await sleep(201 - speed * 20);
        if (a[left] > a[largest]) largest = left;
    }

    if (right < n) {
        setComparing([largest, right]);
        setComparisons((prev) => prev + 1);
        await sleep(201 - speed * 20);
        if (a[right] > a[largest]) largest = right;
    }

    if (largest !== i) {
        setSwapping([i, largest]);
        [a[i], a[largest]] = [a[largest], a[i]];
        setArray([...a]);
        setAccesses((prev) => prev + 4);
        await sleep(201 - speed * 20);

        await heapify(a, n, largest, speed, setArray, setComparing, setSwapping, setComparisons, setAccesses);
    }
}

export async function shellSort(
    arr,
    speed,
    setArray,
    setComparing,
    setSwapping,
    setComparisons,
    setAccesses
) {
    const a = [...arr];
    const n = a.length;

    for (let gap = Math.floor(n / 2); gap > 0; gap = Math.floor(gap / 2)) {
        for (let i = gap; i < n; i++) {
            const temp = a[i];
            let j;

            for (j = i; j >= gap && a[j - gap] > temp; j -= gap) {
                setComparing([j, j - gap]);
                setComparisons((prev) => prev + 1);
                await sleep(201 - speed * 20);

                a[j] = a[j - gap];
                setArray([...a]);
                setAccesses((prev) => prev + 2);
            }

            a[j] = temp;
            setArray([...a]);
            await sleep(201 - speed * 20);
        }
    }

    setComparing([]);
    return a;
}

export async function radixSort(
    arr,
    speed,
    setArray,
    setAccesses
) {
    const a = [...arr];
    const max = Math.max(...a);
    let exp = 1;

    while (Math.floor(max / exp) > 0) {
        await countingSort(a, exp, speed, setArray, setAccesses);
        exp *= 10;
    }

    return a;
}

async function countingSort(a, exp, speed, setArray, setAccesses) {
    const n = a.length;
    const output = Array(n).fill(0);
    const count = Array(10).fill(0);

    for (let i = 0; i < n; i++) {
        count[Math.floor(a[i] / exp) % 10]++;
        setAccesses((prev) => prev + 1);
    }

    for (let i = 1; i < 10; i++) count[i] += count[i - 1];

    for (let i = n - 1; i >= 0; i--) {
        const index = Math.floor(a[i] / exp) % 10;
        output[count[index] - 1] = a[i];
        count[index]--;
        setAccesses((prev) => prev + 2);
        setArray([...output]);
        await sleep(201 - speed * 20);
    }

    for (let i = 0; i < n; i++) {
        a[i] = output[i];
        setAccesses((prev) => prev + 1);
        setArray([...a]);
        await sleep(201 - speed * 20);
    }
}
