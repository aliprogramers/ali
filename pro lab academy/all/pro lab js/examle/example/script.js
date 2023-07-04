console.log(Math.floor(2.1));
let t = [1,2,3,4];
let y = t.reduceRight((acc,item) => {
   return acc + item
})
console.log(y);