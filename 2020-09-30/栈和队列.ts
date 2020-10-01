//"runts":"ts-node 栈和队列.ts"
/* 设计一个有返回最小元素的栈
  题目：实现一个特殊的栈,在实现栈的基本功能上,再实现返回栈中最小元素的操作
  
  要求：
  1.pop,push,getMin操作的时间复杂度都是O(1)
  2.设计的栈类型可以使用现成的栈结构 

  栈可以用来在函数调用的时候存储断点，做递归时要用到栈

   时间复杂度为O(1) 不可能用到遍历的方式,需要用空间存储最小值，空间复杂度为O(n)
   使用一个栈记录数据栈中的最小值   
   方法1  当入栈的数据小于等于最小值栈的栈顶元素时,压入最小值栈,否则不压入
   方法2  当入栈的数据小于等于最小值栈的栈顶元素时,压入最小值栈,否则重新压入当前最小值

   方法1: 获取最小值时操作稍微费时
   方法2： 数据入栈时稍微费时


 */
class Stack<T>{
  private stack = null;
  constructor() {
    this.stack = new Array<T>();
  }
  push(data: T): void {
    this.stack.push(data);
  }
  pop(): T {
    return this.stack.pop()
  }
  top(): T {
    return this.stack[this.stack.length - 1]
  }
  isEmpty(): boolean {
    return this.stack.length === 0
  }
  getLength(): number {
    return this.stack.length;
  }
  clear(): void {
    this.stack = new Array<T>();
  }
}

class myStack<T>{
  private dataStack = new Stack<T>();
  private minStack = new Stack<T>();
  push(data: T): void {
    if (this.minStack.isEmpty() || this.minStack.top() >= data) {
      this.minStack.push(data);
    }
    this.dataStack.push(data);
  }
  pop(): T {
    if (this.minStack.isEmpty()) {
      throw new Error('minStack is Empty')
    } else {
      var value: T = this.dataStack.pop();
      if (value == this.minStack.top()) {
        this.minStack.pop();
      }
      return value;
    }
  }
  getMin(): T {
    return this.minStack.top();
  }
}

var stack = new Stack<number>();
console.log(stack.isEmpty())
// stack.push('1');
for (var i: number = 0; i < 10; i++) {
  var a: number = Math.random();

  stack.push(a)
}
console.log(stack)
