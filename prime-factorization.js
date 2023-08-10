//Prime-factorization = numbers prime number dividors, O(sqrt(n)) because we check by square increments.
function primeFactors(n){
    //Divide by 2, as many as it can
    while(n%2 == 0){
        console.log(2);
        n = n/2;
    }

    //i=3, 5, 7, 9 consequently condition 9, 25, 49, 81
    //i=i+2 because we handled evens 
    for (let i = 3; i*i <= n; i=i+2) {
        while(n%i == 0){
            console.log(i);
            n = n/i;
        }
        
    }
    if(n>2) console.log(n);
}

