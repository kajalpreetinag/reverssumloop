const input= require("readline-sync")
let n = input.questionInt("enter the number: ")
let sum = 0;
let i = 1;
while(n>=i){
    p=n%10;
    sum=sum+p;
    n=Math.floor(n/10)

}
console.log("sum = ",sum)