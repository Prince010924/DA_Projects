function fizzBuzz(n: number){
    if (n%3==0 && n%5==0) {
        return "Fizz-Buzz!";
        
    }
    else if (n%5==0) {
        return "Buzz!";
        
    } 
    else if (n%3==0) {
        return "Fizz!"
        
    } else {
        return n 
    }

}

console.log(fizzBuzz(10))
console.log(fizzBuzz(15))
console.log(fizzBuzz(6))