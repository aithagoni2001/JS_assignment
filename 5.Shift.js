
Array.prototype.myshift = function (){
   let firstelement =this[0]
   for (let index = 0 ; index < this.length; index++) {
   this[index]=this[index+1];
}
this.length =this.length-1;
console.log(this);
return firstelement;
} 
const arr = [10,32,65,98,5,3];
// console.log(arr.shift());

const myshiftdata = arr.myshift();
console.log(myshiftdata);
console.log(arr);