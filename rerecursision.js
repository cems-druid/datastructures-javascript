//Good ol' nth Fibonacci Sequence: Time: O(2^n)
function getNthFib(n){
    if (n<=1) return n;
    else return getNthFib(n-1) + getNthFib(n-2);
}

//A bit improvement. Time: O(n), space: O(n)
function improvedGetNthFib(n, prevPrevNum, prevNum){
    if(n==0) return prevPrevNum;
    if(n==1) return prevNum;
    return improvedGetNthFib(n-1, prevNum, prevNum+prevPrevNum);
}

//Pascal Triange
function pascalTriange(row, col){
    if(col == 1) return 1;
    else if(row == 0) return 0;
    else pascalTriange(row-1, col) + pascalTriange(row-1, col-1);
}

/*
Some notes on Master Theorem:
T(n) = aT(n/b) + O(n^c) where a (coefficient multiplied when recursive calls) and b (logarithmic term) is equal or bigger than 1, there are three cases.

1) c<logb(a), then T(n) = O(n^logb(a))

2) c=logb(a), then T(n) = O(n^c*logb(a))

3) c>logb(a), then T(n) = O(f(n))
*/

//Converting decimal number to binary number, Time: O(log2(n)), Space: O(log2(n))
function convertDecToBi(number){
    let binary = "";

    function doIt(b){
        if(b<2) {
            binary += b;
            return;
        }
        else{
            doIt(Math.floor(n/2));
            doIt(n%2);
        }
    }
    doIt(number);
    return binary;
}

//Permutation of an array of elements: Time: O(n!), Size: O(n!)
function swap(arr, idx1, idx2){
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

function permute(arr, start, end){
    if(start === end) console.log(arr);
    else {
        for(let i=start; i<end+1; i++){
            swap(arr, start, i);
            permute(arr, start+1, end);
            swap(arr, start, i);
        }
    }
}

function permuteStrArray(arr){
    permute(arr, 0, arr.length-1);
}

//Checking Palindrome Time: O(n), Size: O(n)
function isPalindrome(word){
    return isPalindromeChecker(word, 0, word.length-1);
}

function isPalindromeChecker(word, startIdx, endIdx){
    if(startIdx>=endIdx) return true;
    if(word.charAt(startIdx) != word.charAt(endIdx)) return false;
    else return isPalindromeChecker(word, startIdx+1, endIdx-1);
}