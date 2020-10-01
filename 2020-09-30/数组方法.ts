//"runts":"ts-node 数组方法.ts"

//#region 1.创建数组对象
var array1 = new Array();
var array2 = new Array<string>(3);
var array3 = new Array<string>('2', '3', '4', '4');
var array4: string[] = ['1', '2'];
// console.log(array3)
//#endregion

//#region 2.数组的属性
//1.length 返回数组的长度
console.log(array4.length)
//2. prototype 可以通过该属性向对象添加属性和方法
//实例化的对象没有prototype属性
//#endregion



//#region 数组的方法 

//#region  concat方法 合并多个数组并返回
array2 = array2.concat(array3, array4);
array1 = new Array().concat(array3, array4);
// console.log('array2', array2, 'array1', array1)
//#endregion 

//#region  join方法  把数组的所有元素放入一个字符串。元素通过指定的分隔符进行分隔。返回一个字符串
var stringarray2 = array2.join('-')
console.log(stringarray2)
//#endregion


//#region pop方法 删除并返回数组末尾元素
var delValue:string = array2.pop()
// console.log(delValue);
//#endregion

//#region push方法 在数组末尾插入多个元素并返回数组长度
var newlength:number = array2.push('10','11','12')
console.log(newlength);
//#endregion

//#region shift方法 删除并返回数组第一个元素
var delValue2:string = array2.shift()
// console.log(delValue2);
//#endregion

//#region unshift方法 向数组开头插入多个元素并返回数组长度
var newLength2:number = array2.unshift('1','2')
console.log(array2)
// console.log(delValue2);
//#endregion

//#region reverse方法 翻转数组
 array2.reverse()
// console.log(array2);
//#endregion

//#region slice(start,end)方法 从一个数组中选取元素 start代表选取元素的起始位置 end代表结束位置
//start和end  可以是负数，代表从数组末尾开始,如果未指定end 则会默认结束位置在数组结尾

var subArray2 = array2.reverse().splice(-2,);
console.log('subarray',subArray2)

//#endregion


//#region  sort 方法  对数组进行排序，改变原数组
//默认按照字符编码的顺序进行排序，如果有必要可以先将数组元素转成字符串方便进行排序 
 var array:number[] =[1,2,323,4,1,2,0,2,1]
//  console.log(array.sort()) ==>[ '0', '1',   '1','1', '2',   '2','2', '323', '4']
// 需要按照其他标准排序的需要传入比较函数,返回两个比较值相对顺序
//如果a,b相等则返回0，a排在b之前则返回一个负数，a排在b之后则返回一个正数
console.log(array.sort(function(a,b){
    return a-b;
}))
//#endregion


//#region  splice(index,howmany,...newitems) 函数 向数组中插入和删除项目，然后返回包含被删除元素的数组

console.log(array.splice(0,0,0,0))
console.log(array)
//#endregion

//#region tostring 数组转字符串
console.log(array.toString())
//#endregion
//#region  toLocalString 使用地区特定的分隔符把生成的字符串连接起来，形成一个字符串。
 //不同地区会根据本地环境的变化而使用不同的分隔符，
//  如果是为了返回时间类型的数据，推荐使用LocaleString()。若是在后台处理字符串，请务必使用toString()。
console.log('localstring',array.toLocaleString())
//#endregion



//#endregion

