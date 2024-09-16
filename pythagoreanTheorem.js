// create a function that finds the max range of a triangles third edge, given two sides only

function nextEdge(x, y){
    return x + y - 1;
}

console.log(nextEdge(8,10));
console.log(nextEdge(5,7));
console.log(nextEdge(9,2));
