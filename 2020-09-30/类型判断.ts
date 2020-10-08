import { mainModule } from "process";

var flag:boolean =true;
var arr:number[]=[1,2,3];
var  str:string ='123string';
var  obj={};
var  undif =undefined;
var  nullstr =null;
var num:number=1;
var  fun = function(){

}
var date = new Date()
//es6 新增数据类型
var array =[1,2,3,4,12,22,2,2]
var set = new Set([1,2,3]) // new set 中没有重复的数据，数组去重
console.log(set);
console.log(new Set(array));
var map = new Map()//键值对
map.set('a','avalue');
console.log(map,map.get('a'))


console.log('boolean:',typeof flag);
console.log('arr:',typeof arr);//无法判断
console.log('arr-instanceof-array:',arr instanceof Array);//true
console.log('arr-constructor-array:',arr.constructor=== Array);//true
console.log('arr-prototype-array:',Object.prototype.toString.call(arr));//true
console.log('str:',typeof str);
console.log('obj:',typeof obj);
console.log('undif:',typeof undif);
console.log('nullstr:',typeof nullstr);//无法正确判断
console.log('nullstr-instanceof:',nullstr instanceof Object)
// console.log('nullstr-instanceof-null:',nullstr instanceof null)
console.log(nullstr===null,nullstr===undefined,nullstr==undefined)
// console.log('nullstr-constructor:',nullstr.constructor===null);//会报错,can't read property of null
// console.log('nullstr-propertytostring:',nullstr.prototype.toString)
console.log('arr-prototype-null:',Object.prototype.toString.call(nullstr));//true
console.log('num:',typeof num);
console.log('fun:',typeof fun);
console.log('date:',typeof date);