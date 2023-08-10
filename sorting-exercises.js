//1-Square root of an integer, without using math libraries
//By using linear search O(n)
function takeSquareRoot(num){
    
    let idx, square = 1;

    while(square < num){
        if(square == num){
            return square;
        }

        idx++;
        square = idx*idx;
    }
    return idx;
}

//By using binary search O(log2(n))
function takeSquareRoot2(num){
    let start = 1;
    let end = num;
    let result;

    while(start <= end) {
        let middle = parseInt((start+end)/2);

        if(middle*middle == num) return middle;
        if(middle*middle < num){
            start = middle + 1;
            result = middle;
        }else{
            end = middle - 1;
        }
    }
    return result

}

//2-Finding if two element in an array is equal to a given number
//This two linear search O(n^2)
function sumTwoElementsInArr(arr, sum){
    for(let i=0; i<arr.length; i++){
        for(let j=i+1; j<arr.length; j++){
            if(arr[i]+arr[j] == sum) return true;
        }
    }
    return false;
}

//A better solution, hash tables
function sumTwoElementsInArr2(arr, sum){
    let table = {};

    for(let i=0; i<arr.length; i++){
        if(table[arr[i]]) return true;
        else table[sum-arr[i]] = arr[i];
    }
    return false;

}