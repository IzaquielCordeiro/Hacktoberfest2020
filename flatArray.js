const Array = [[1,2,3],4,5,[],6,[7],[8,9]];

const flatArray = (arr) => arr.reduce((acc,el)=>acc.concat(el),[])
const a=flatArray(Array);
console.log(a);