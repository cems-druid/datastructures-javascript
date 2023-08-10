//Linear search Time O(n)
function linearSearch(arr, n) {
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === n) {
      console.log("The element is: ", n);
      return n;
    }
  }
}

//Binary search, the arr must be sorted first. O(log2n)
function binarySearch(arr, n) {
  let lowIdx = 0;
  let highIdx = arr.length - 1;

  while (lowIdx <= highIdx) {
    let midIdx = Math.floor((highIdx + lowIdx) / 2);
    if (arr[midIdx] === n) {
      console.log("The element n is: ", midIdx);
      return midIdx;
    } else if (n > arr[midIdx]) lowIdx = midIdx;
    else highIdx = midIdx;
  }
  return -1;
}

//Bubble sorting, Time: O(n^2), Size: O(1)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (arr[i] < arr[j]) {
        let tmp = arr[i];
        arr[i] = arr[j];
        arr[j] = tmp;
      }
    }
  }
  return arr;
}

//Selection sort: Time: O(n^2), Size: O(1)
function selectionSort(arr) {
  let length = arr.length;
  let minIdx;

  for (let i = 0; i < length; i++) {
    minIdx = i;
    for (j = i + 1; j < length; j++) {
      if (arr[j] < arr[minIdx]) {
        minIdx = j;
      }
    }
    if (i !== minIdx) {
      let temp = arr[minIdx];
      arr[minIdx] = arr[i];
      arr[i] = temp;
    }
  }
  return arr;
}

//Insertion Sort Time: O(n^2) Size: O(1)
function insertionSort(arr) {
  let length = arr.length;
  let currentVal, unsortedIdx, sortedIdx;

  for (unsortedIdx = 0; unsortedIdx < length; unsortedIdx++) {
    currentVal = arr[unsortedIdx];
    for (
      sortedIdx = unsortedIdx - 1;
      sortedIdx > -1 && arr[sortedIdx] > currentVal;
      sortedIdx--
    ) {
      arr[sortedIdx + 1] = arr[sortedIdx];
    }
    arr[sortedIdx + 1] = currentVal;
  }
  return arr;
}

//Quicksort Time: best-O(nlog2n) | worst-O(n^2), Size: O(log2n)
function quickSort(arr) {
  return doQuickSort(arr, 0, arr.length - 1);
}

function doQuickSort(arr, left, right) {
  let idx;
  if (arr.length > 1) {
    idx = partition(arr, left, right);

    if (left < idx - 1) doQuickSort(arr, left, idx - 1);
    if (idx < right) doQuickSort(arr, idx, right);
  }
  return arr;
}

function partition(arr, left, right) {
  let pivot = arr[Math.floor(left + right) / 2];
  while (left <= right) {
    while (pivot > arr[left]) {
      left++;
    }
    while (pivot < arr[right]) {
      right--;
    }
    if (left <= right) {
      let tmp = arr[left];
      arr[left] = arr[right];
      arr[right] = tmp;
      left++;
      right--;
    }
  }
  return left;
}

//Quickselect: best-O(n)
function quickSelect(arr, kth) {
  return doQuickSelect(arr, 0, arr.length - 1, kth);
}

function doQuickSelect(arr, left, length, kth) {
  let partition = partition(arr, left, length);

  if (partition == kth - 1) return arr[partition];
  else if (partition > kth - 1)
    return doQuickSelect(arr, left, partition - 1, kth);
  else return doQuickSelect(arr, partition + 1, length, kth);
}

//Mergesort: Time: O(nlog2n) Space: O(n)
function merge(leftArr, rightArr) {
  let resultArr = [];
  let leftIdx,
    rightIdx = 0;

  while (leftIdx < leftArr.length && rightIdx < rightArr.length) {
    if (leftArr[leftIdx] < rightArr[rightIdx])
      resultArr.push(leftArr[leftIdx++]);
    else resultArr.push(rightArr[rightIdx++]);
  }

  let leftRest = leftArr.slice(leftIdx);
  let rightRest = rightArr.slice(rightIdx);
  return resultArr.concat(leftRest).concat(rightRest);
}

function mergeSort(arr) {
  if (arr.length < 2) return arr;

  let median = Math.floor(arr.length / 2);
  let leftArr = arr.slice(0, median);
  let rightArr = arr.slice(0, median);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

//Countsort: Time: O(n)
function countSort(arr) {
  let hash = {};
  let countArr = [];

  for (let i = 0; arr.length; i++) {
    if (!hash[arr[i]]) hash[arr[i]] = 1;
    else hash[arr[i]]++;
  }

  for (let key in hash) {
    for (let i = 0; i < hash[key]; i++) {
      countArr.push(parseInt(key));
    }
  }
  return countArr;
}
