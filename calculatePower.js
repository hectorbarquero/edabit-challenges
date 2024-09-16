// create a function that takes voltage and current to return power

function calculatePower (voltage, current){
    return voltage * current;
}

console.log(calculatePower(230,10));
console.log(calculatePower(110,3));
console.log(calculatePower(480,20));