
Array.prototype.myreduce = function (cb,acc){

    if (acc) {
    acc = acc;
    StartIndex=0;
        
    } else {
        StartIndex =1;
        acc =this[0];
    }
for (let index = StartIndex; index < this.length; index++) {
     acc = cb(acc,this[index])
}
    return acc;
}
const arr =[100,150,200,350,300,350];

function cb(pval,cval,index,array){
return pval+cval;
}

const cbdata = arr.reduce(cb,500);
console.log(cbdata);

const finaldata= arr.myreduce(cb,500);
console.log(finaldata);



