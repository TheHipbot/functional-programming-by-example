var x = 5;

function expr () {
    return (x + 3);
}

console.log((x + 3) + 6 === 14);
// x = 7; // change to x
console.log((x + 3) + 3 === 11);

console.log(expr() === 8);
