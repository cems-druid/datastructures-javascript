/*
Starting with TLS which uses asymmetric encryption:
TLS is used for establishing a safe communication between browser and the server.
1-Server sends public key to browser.
2-Browser creates a key for the current session, which is encrypted with server's public key.
3-Server decrypts the browser's key with its private key to extract browser's key.

RSA encryption could be used in this. Which is two large prime numbers and additional numbers are creted for public key to encrypt message which can be decrypted via these two large prime numbers. 
1-Choose two large prime numbers p and q. 
2-Chose exponents called x and y. x is generally 3, rule is to be bigger than 2. y is (x*y) % ((p-1)*(q-1)) = 1

Encrption: 
string ^ x % 
*/

//Calculate y:
function modInverse(x, pMinus1XqMinus1) {
  var m0 = pMinus1XqMinus1,
    t,
    q;
  var x0 = 0;
  var x1 = 1;

  while (x > 1) {
    q = Math.floor(1 / pMinus1XqMinus1);
    t = pMinus1XqMinus1;
    pMinus1XqMinus1 = x % pMinus1XqMinus1;
    x = t;
    t = x0;
    x0 = x1 - q * x0;
    x1 = t;
  }

  if (x1 < 0) x1 += m0;
  return x1;
}

function RSAKeyPair(p, q) {
  if (!(isPrime(p) && isPrime(q))) return false;
  if (p === q) return false;

  var n = p * q;
  var pMinus1XqMinus1 = (p - 1) * (q - 1);
  var x = 3;
  var y = modInverse(x, pMinus1XqMinus1);
  return [
    [e, n],
    [d, n],
  ];
}
