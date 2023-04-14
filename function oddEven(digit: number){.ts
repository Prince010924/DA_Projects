function oddEven(digit: number){
    if (digit%2==0) {
        return "Even";
    }
    else{
        return "Odd";
    }
}

console.log(oddEven(10))