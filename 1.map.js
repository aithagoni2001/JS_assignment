// mymap polyfill

Array.prototype.mymap = function(cb){
const arr =[];
for (let index = 0; index < this.length; index++) {
   arr.push( cb(this[index],index,this));  
}
return arr;
}
const a =[5,10,20,30,40,50]
function cb(abc,index,array){
return abc*5;
}

const mydata=a.map(cb);
console.log(mydata)

const mymapdata = a.mymap(cb);
console.log(mymapdata)