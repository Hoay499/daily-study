//具有length 属性
//用下标存储数据
//没有数组的方法

//伪数组：HtmlCollection，jQuery中的$()对象

//枚举 ， 下一个成员 是上一个成员的值加1
//枚举变量的值是常量,不能是变量，不能对其再进行赋值，多个枚举变量的值可以相同，如果该变量未指定值，则默认为前一个变量值加1，
//如果第一个变量未指定值，则默认为0
//Symbol 值作为对象属性名时，不能用点运算符。
const week =Symbol('man')  //这里不能使用 let声明
var enum1 = Object.freeze({
    [week]:'男'
})
console.log(enum1[week])
// console.log(enum1.[Symbol('man')]);
//symbol

//数据劫持
var test ={
    attr:1
}
console.log(test);
function watch(obj,attr){
    let nvalue = obj.attr;
    Object.defineProperty(test,'attr',{
        enumerable:true,//是否可以枚举
         configurable:true,//是否可以修改
        set:function(value){
            nvalue=value
            console.log('a的值修改了');  
        },
        get:function(){
            console.log('a的值获取了')
            return nvalue;
        }
    
    })
}

watch(test,'attr');
console.log(test);
console.log(test.attr);
test.attr =11;
console.log(test.attr)