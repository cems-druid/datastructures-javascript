//1-Any numeric characters /\d+/
var reg = /\d+/;
reg.test("123"); //true
reg.test("abcd"); //false

//2-Only numeric characters /^\d+$/
var reg = /^\d+$/;
reg.test("123"); //true;
reg.test("123a"); //false;

//3-Floating numeric characters /^[0-9]*.[0-9]*[1-9]+$/
var reg = /^[0-9]*.[0-9]*[1-9]+$/;
reg.test("12.2"); //true
reg.test("12"); //false

//4-Only alphanumeric characters /[a-zA-Z0-9]/
var reg = /[a-zA-Z0-9]/;
reg.test("abc"); //true
reg.test("123"); //true;
reg.test("^"); //false

//5-Query string /([^?=&]+)(=([^&]*))/
