let a=4
while(a<=40){
    console.log(a)
    a +=4
}

let i=1
while(i<=10){
    console.log("6*",i,"=",i*6)
    i++
}


let number = 24;
let j = 1;

console.log(`Factors of ${number} are:`);

while (j <= number) {
    if (number % j === 0) {
        console.log(j);
    }
    j++;
}
//reverse number
var n = 352, reverse = 0, remainder;

while (n>0) {
    remainder = n%10;
    reverse = reverse * 10 + remainder;
    n = Math.floor(n / 10);
}

console.log(reverse);

//fibanocii series
let t = 10; // Change this value to generate the first n Fibonacci numbers
let firstNumber = 0;
let secondNumber = 1;
let count = 0;

console.log(`Fibonacci series for first ${n} numbers:`);

while (count < t) {
    console.log(firstNumber);

    let nextNumber = firstNumber + secondNumber;
    firstNumber = secondNumber;
    secondNumber = nextNumber;

    count++;
}
//armstrong
let e, x, d = 0;
let b =153;
x=b;

while (x > 0) {
  e = x % 10;
  x = parseInt(x/10);
  d = d + (e*e*e);
}

if (b==d)
   console.log("given number is an armstrong number");
else
   console.log("given number is not an armstrong number");


   //palindrome number
   let k=1211,sum=0,m,z=k
while(k>0)
{
  m=k%10
  sum=sum*10+m
  k=parseInt(k/10)
}
console.log(sum)
if(z==sum){
    console.log("palindrome number",sum)
  }
  else{
    console.log("not a palindrome number",sum)
  }
