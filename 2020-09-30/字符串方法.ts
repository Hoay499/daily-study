var str:string = 'heiihaoyewoiidjsfsdfwe';
//字符串是不可变的：字符串不能更改，只能替换。
//#region  数组的属性
console.log('数组长度',str.length);  
//#endregion

//#region  字符串的方法--查找

//indexof 查找字符串中指定文本首次出现的索引,不存在则返回-1,从前往后,可以指定第二个参数,作为查找开始的起始位置
console.log(str.indexOf('u',0))
//search  和indexof相同，但search无法指定起始位置
console.log(str.search('i'))
//lastIndexof 查找字符串中指定文本最后一次出现的索引,不存在则返回-1，从后往前,可以指定第二个参数,作为查找开始的起始位置
console.log(str.lastIndexOf('i',4))

//#endregion

//#region  字符串的方法--提取字符串,可以是负数
   //slice(start,end) 指定起始位置，截取子字符串,不包含结束位置
   console.log('slice:',str.slice(2,5));

   //substring(start,end)  指定起始位置，截取子字符串,不包含结束位置
   console.log('substring',str.substring(2,5))
   //substr(start,length)  指定起始位置,子字符串长度
   console.log('substr',str.substr(2,5))
//#endregion 


//#region  字符串的方法---字符串替换

//replace (a,b) 用b替代字符串中的a,默认只替换第一个匹配，且对大小写 敏感,不改变原来的字符串
var bstr =str.replace('i','a');
console.log('replace',bstr,str);
//如果需要进行全局匹配 要用 正则匹配 /g/i
console.log(str.replace(/i/gi,'a'))
//#endregion

//#region 字符串大小写转换 ，不改变原字符串
var strt1 = str.toUpperCase();
console.log('toUpperCase',strt1,str);
console.log('toLowerCase',strt1.toLowerCase())
//#endregion

//#region 
//concat   字符串连接
//trim    去除字符串首尾空格,ie8不支持，需要使用正则代替
var t1 ="hello"
var t3=" , "
var t2 = "world"
console.log('trim+concat',t1.concat(t3.trim(),t2))
// str.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
//如果没有可以将该方法挂载到字符原型上
if (!String.prototype.trim) {
    String.prototype.trim = function () {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
  };
}

//字符串转数组  指定分隔字符
var str="iloveyoumyworld"
console.log('字符串转数组',str.split(''))
//#endregion
 
//#region   提取字符串字符
//charAt  根据下标获取指定字符

//charCodeAt 根据下标获取指定字符的ASCII编码
//#endregion




