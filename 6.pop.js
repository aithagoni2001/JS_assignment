
const arr =[2,"pavan",2001,"aithagoni",23,"lenkalapally",508245]
//  console.log(arr.pop());
// console.log(arr);

Array.prototype.mypop = function(){

    let lastelement = this[this.length-1]
    this.length = this.length-1;

return lastelement;

}
console.log(arr.mypop());

console.log(arr);

