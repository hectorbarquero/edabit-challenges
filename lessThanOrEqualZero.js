//Create a function that takes a number as its only argument and returns true if it's less than or equal to zero, otherwise return false.

function lessThanOrEqualZero(n){
    let flag = false;

    if (n <= 0) {
        flag = true;
    }

    else flag = false;

    return flag;
}

console.log(lessThanOrEqualZero(5));
console.log(lessThanOrEqualZero(0));
console.log(lessThanOrEqualZero(-2));
