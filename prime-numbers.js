//Basic one which has O(n)
function isPrime(n){
    if(n <= 1 )
    return false;

    for (let i = 2; i < n ; i++) {
        if(n%i == 0)
            return false;
    }
    
    return true;
}

//Improved prime check which has O(sqrt(n))
function improvedIsPrime(n){
    if(n <= 1) return false;
    if(n <= 3) return true;

    if(n%2 == 0 & n%3 == 0) return false;

    //checking prime number's square root
    //25, 49, 121, etc 
    for (let i = 5; i*i <= n; i=i+6) {
        if(n%i == 0 || n%(i+2) == 0) 
            return false;
    }
    return true;
}

