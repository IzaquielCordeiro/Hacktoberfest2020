const Array = [1,2,3,4,5];

const summation = (arr) => arr.reduce((acc, el) => acc += el,0);
const a = summation(Array);
console.log(a);