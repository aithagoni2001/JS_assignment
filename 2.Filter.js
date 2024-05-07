
Array.prototype.myfilter= function(cb){
const final =[];
for (let index = 0; index < this.length; index++) {
    if(cb(this[index],index,this)){
final.push(this[index])
    }
    
}
return final;
}


const arr =[15,30,21,6,35,25,9];

function cb(value,index,array){
return value <20;
}

const filterdata = arr.filter(cb);
console.log(filterdata);

const myfilterdata =arr.filter(cb);
console.log(myfilterdata);