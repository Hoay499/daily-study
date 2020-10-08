import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from "constants";

var arr2:string[] = ['1','2','3','4','5'];
//#region  for：使用临时变量存储数组，当数组长度较大时，优化效果才比较明显

// for(var i=arr2.length-1;i>=0;i--){
//     console.log(arr2[i]);
// }
//#endregion

//#region foreach：没有返回值,不会修改原数组

// arr2.forEach((item,index)=>{//item,index位置先后不影响
//     console.log(item,index)
// })
//#endregion

//#region  map :有返回值，返回一个数组，不改变原数组
var res = arr2.map((value,index,array)=>{ //可以接收三个参数,array表示原数组
    //  console.log(value,index,array)
     return array;
})
// console.log('res',res);
//#endregion


//forin
for(var index in arr2){ //根据下标遍历
    // console.log(arr2[index]);
}

//#region forof 
for(let item of arr2){ //元素遍历
    // console.log(item)
}
//es6
for(let i of arr2.keys()){ //需要在tsconfig中配置 compilerOption
    console.log('key:',i) 
} 
for(let t of arr2.values()){
console.log('values',t)
}
for(let [index,item] of arr2.entries()){
    console.log('entries:',index,item)
}
//#endregion

//#region filter    过滤数组,返回符合条件的值,不改变原数组
var res1 = arr2.filter((item)=>{
    // console.log(item);
    return parseInt(item)>1;
})
// console.log('原数组：',arr2,'遍历返回数组：',res1)
//#endregion

//#region  every 对数组中每一项运行指定函数,全真才真，有假为假
var res2 = arr2.every((value,index,array)=>{
    // console.log(typeof Object.prototype.toString.call(value));//string
    return  Object.prototype.toString.call(value) === '[object String]'
})
// console.log(res2);
//#endregion

//#region  some  对数组中每一项运行指定函数，有一项为真，即为真
var res3 = arr2.some((value,index,array)=>{
    return  parseInt(value)>3
})
// console.log(res3)
//#endregion


//#region  reduce  对数组中的元素从左到右进行累加,reduce 接收两个参数,一个累加函数，一个初始值
var res9 ='begin';
var res10=arr2.reduce((previousValue,currentValue,currentIndex,array)=>{
        //    console.log(previousValue,currentValue,currentIndex)
           return previousValue+currentValue;
},res9)
// console.log(res9,res10);

//#endregion

//#region  reduceRight  对数组的元素从右到左进行累加
var res11=arr2.reduceRight((previousValue,currentValue,currentIndex,array)=>{
    //    console.log(previousValue,currentValue,currentIndex)
       return previousValue+currentValue;
},res9)
console.log(res11)
//#endregion

//#region  find  查找数组中符合条件的元素，如果找不到返回undefined,只找到第一个符合条件的元素
function getnum(num){
    return parseInt(num)>3
}
console.log(arr2.find(getnum))

//#endregion

//#region  findIndex  查找数组中符合条件的元素下标，如果找不到返回-1,只找到第一个符合条件的元素
function getnum2(num,index,obj){
    console.log(num,index,obj)
    return parseInt(num)>10
}
console.log(arr2.findIndex(getnum2))

//#endregion


//数组，伪数组  可迭代对象,枚举,数据劫持