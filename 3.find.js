
Array.prototype.myfind= function (cb){

for (let index = 0; index < this.length; index++) {
    if(cb(this[index])){
    return this[index];
}
}
}
const pls =[
    { name:"klasen", age:30},
    { name:"Makram", age:29},
    { name:"head", age:25},
    { name:"samad", age:22,}
]
function cb(a){
 return a.age<29;
}
    const data = pls.find(cb);
    console.log(data);
 const myfinddata = pls.myfind(cb);
 console.log(myfinddata);
 