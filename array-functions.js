//Finding sum of two numbers in an array
//Time: O(n^2), Space: O(1)
function findSum(arr, sum){
    let arrLength = arr.length;
    for(let i=0; i<arrLength; i++){
        for(let j=i+1; j<arrLength; j++){
            if(arr[i]+arr[j]==sum){
                return [i,j];
            }
        }
    }
    return -1
}

//A bit better implementation, Time: O(n), Space: O(n)
function improvedFindSum(arr, sum){
    var hashTable = {};
    let arrLength = arr.length;
    for(let i=0; i<arrLength; i++){
        let currentElement = arr[i];
        let difference = sum - currentElement;

        if(hashTable[currentElement] != undefined){
            return [i, hashTable[difference]];
        }
        else{
            hashTable[difference] = i;
        }
    }
    return -1;
}

//Implementation of array.slice() function. Time: O(n), Space: O(n)
function selfSplice(arr, startIndex, endIndex){
    if(!startIndex && !endIndex) return arr;

    let splicedArray = [];

    endIndex = arr.length;

    for(let i=startIndex; i<endIndex; i++){
        splicedArray.push(arr[i]);
    }

    return splicedArray;
}