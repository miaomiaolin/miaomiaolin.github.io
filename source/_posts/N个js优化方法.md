---
title: N个js优化方法
date: 2019-09-20 16:37:57
tags: js
---

## 1.三元操作符

当想写if...else语句时，使用三元操作符来代替。

> ```
> const x = 20;let answer;if (x > 10) {
>     answer = 'is greater';
> } else {
>     answer = 'is lesser';
> }
> ```

简写：`const answer = x > 10 ? 'is greater' : 'is lesser';`

也可以嵌套if语句：`const big = x > 10 ? " greater 10" : x`

多条件格式：`const big = x > 10 ? 1 : (x < 0 ? 2 : 3)`

<!-- more -->

## 2.短路求值简写方式

当给一个变量分配另一个值时，想确定源始值不是null，undefined或空值。可以写撰写一个多重条件的if语句。

> ```
> if (variable1 !== null || variable1 !== undefined || variable1 !== '') {     let variable2 = variable1;
> }
> ```

或者可以使用短路求值方法：`const variable2 = variable1 || 'new';`

## 3.声明变量简写方法

> ```
> let x;let y;let z = 3;
> ```

简写方法：`let x, y, z=3;`

## 4.if存在条件简写方法

> `if (likeJavaScript === true)`

简写：`if (likeJavaScript)`

只有likeJavaScript是真值时，二者语句才相等

如果判断值不是真值，则可以这样：

> ```
> let a;if ( a !== true ) {// do something...
> }
> ```

简写：

> ```
> let a;if ( !a ) {// do something...
> }
> ```

## 5.JavaScript循环简写方法

> `for (let i = 0; i < allImgs.length; i++)`

简写：`for (let index in allImgs)`也可以使用Array.forEach：

> ```
> function logArrayElements(element, index, array) {  console.log("a[" + index + "] = " + element);
> }
> [2, 5, 9].forEach(logArrayElements);// logs:// a[0] = 2// a[1] = 5// a[2] = 9
> ```

## 6.短路评价

给一个变量分配的值是通过判断其值是否为null或undefined，则可以：

> ```
> let dbHost;if (process.env.DB_HOST) {
>   dbHost = process.env.DB_HOST;
> } else {
>   dbHost = 'localhost';
> }
> ```

简写：`const dbHost = process.env.DB_HOST || 'localhost';`

## 7.十进制指数

当需要写数字带有很多零时（如10000000），可以采用指数（1e7）来代替这个数字：`for (let i = 0; i < 10000; i++) {}`简写：

> ```
> for (let i = 0; i < 1e7; i++) {}// 下面都是返回true1e0 === 1;1e1 === 10;1e2 === 100;1e3 === 1000;1e4 === 10000;1e5 === 100000;
> ```

## 8.对象属性简写

如果属性名与key名相同，则可以采用ES6的方法：`const obj = { x:x, y:y };`

简写：`const obj = { x, y };`

## 9.箭头函数简写

传统函数编写方法很容易让人理解和编写，但是当嵌套在另一个函数中，则这些优势就荡然无存。

> ```
> function sayHello(name) {  console.log('Hello', name);
> }
> 
> setTimeout(function() {  console.log('Loaded')
> }, 2000);
> 
> list.forEach(function(item) {  console.log(item);
> });
> ```

简写：

> ```
> sayHello = name => console.log('Hello', name);setTimeout(() => console.log('Loaded'), 2000);
> 
> list.forEach(item => console.log(item));
> ```

## 10.隐式返回值简写

经常使用return语句来返回函数最终结果，一个单独语句的箭头函数能隐式返回其值（函数必须省略{}为了省略return关键字）

为返回多行语句（例如对象字面表达式），则需要使用()包围函数体。

> ```
> function calcCircumference(diameter) {  return Math.PI * diameter
> }var func = function func() {  return { foo: 1 };
> };
> ```

简写：

> ```
> calcCircumference = diameter => (  Math.PI * diameter;
> )var func = () => ({ foo: 1 });
> ```

## 11.默认参数值

为了给函数中参数传递默认值，通常使用if语句来编写，但是使用ES6定义默认值，则会很简洁：

> ```
> function volume(l, w, h) {  if (w === undefined)
>     w = 3;  if (h === undefined)
>     h = 4;  return l * w * h;
> }
> ```

简写：

> ```
> volume = (l, w = 3, h = 4 ) => (l * w * h);
> 
> volume(2) //output: 24
> ```

## 12.模板字符串

传统的JavaScript语言，输出模板通常是这样写的。

> ```
> const welcome = 'You have logged in as ' + first + ' ' + last + '.'const db = 'http://' + host + ':' + port + '/' + database;
> ```

ES6可以使用反引号和${}简写：

> ```
> const welcome = `You have logged in as ${first} ${last}`;const db = `http://${host}:${port}/${database}`;
> ```

## 13.解构赋值简写方法

在web框架中，经常需要从组件和API之间来回传递数组或对象字面形式的数据，然后需要解构它

> ```
> const observable = require('mobx/observable');const action = require('mobx/action');const runInAction = require('mobx/runInAction');const store = this.props.store;const form = this.props.form;const loading = this.props.loading;const errors = this.props.errors;const entity = this.props.entity;
> ```

简写：

> ```
> import { observable, action, runInAction } from 'mobx';const { store, form, loading, errors, entity } = this.props;
> ```

也可以分配变量名：

```
const { store, form, loading, errors, entity:contact } = this.props;//最后一个变量名为contact
```

## 14.多行字符串简写

需要输出多行字符串，需要使用+来拼接：

> ```
> const lorem = 'Lorem ipsum dolor sit amet, consectetur\n\t'
>     + 'adipisicing elit, sed do eiusmod tempor incididunt\n\t'
>     + 'ut labore et dolore magna aliqua. Ut enim ad minim\n\t'
>     + 'veniam, quis nostrud exercitation ullamco laboris\n\t'
>     + 'nisi ut aliquip ex ea commodo consequat. Duis aute\n\t'
>     + 'irure dolor in reprehenderit in voluptate velit esse.\n\t'
> ```

使用反引号，则可以达到简写作用：

> ```
> const lorem = `Lorem ipsum dolor sit amet, consectetur
>     adipisicing elit, sed do eiusmod tempor incididunt
>     ut labore et dolore magna aliqua. Ut enim ad minim
>     veniam, quis nostrud exercitation ullamco laboris
>     nisi ut aliquip ex ea commodo consequat. Duis aute
>     irure dolor in reprehenderit in voluptate velit esse.`
> ```

## 15.扩展运算符简写

扩展运算符有几种用例让JavaScript代码更加有效使用，可以用来代替某个数组函数。

> ```
> // joining arraysconst odd = [1, 3, 5];const nums = [2 ,4 , 6].concat(odd);// cloning arraysconst arr = [1, 2, 3, 4];const arr2 = arr.slice()
> ```

简写：

> ```
> // joining arraysconst odd = [1, 3, 5 ];const nums = [2 ,4 , 6, ...odd];console.log(nums); // [ 2, 4, 6, 1, 3, 5 ]// cloning arraysconst arr = [1, 2, 3, 4];const arr2 = [...arr];
> ```

不像concat()函数，可以使用扩展运算符来在一个数组中任意处插入另一个数组。

> ```
> const odd = [1, 3, 5 ];const nums = [2, ...odd, 4 , 6];
> ```

也可以使用扩展运算符解构：

> ```
> const { a, b, ...z } = { a: 1, b: 2, c: 3, d: 4 };console.log(a) // 1console.log(b) // 2console.log(z) // { c: 3, d: 4 }
> ```

## 16.强制参数简写

JavaScript中如果没有向函数参数传递值，则参数为undefined。为了增强参数赋值，可以使用if语句来抛出异常，或使用强制参数简写方法。

> ```
> function foo(bar) {  if(bar === undefined) {    throw new Error('Missing parameter!');
>   }  return bar;
> }
> ```

简写：

> ```
> mandatory = () => {  throw new Error('Missing parameter!');
> }
> 
> foo = (bar = mandatory()) => {  return bar;
> }
> ```

## 17.Array.find简写

想从数组中查找某个值，则需要循环。在ES6中，find()函数能实现同样效果。

> ```
> return pets[i];
>     }
>   }
> }
> ```

简写：

> ```
> pet = pets.find(pet => pet.type ==='Dog' && pet.name === 'Tommy');console.log(pet); // { type: 'Dog', name: 'Tommy' }
> ```

## 18.Object[key]简写

考虑一个验证函数

> ```
> function validate(values) {  if(!values.first)    return false;  if(!values.last)    return false;  return true;
> }console.log(validate({first:'Bruce',last:'Wayne'})); // true
> ```

假设当需要不同域和规则来验证，能否编写一个通用函数在运行时确认？

```
// true

```

现在可以有适用于各种情况的验证函数，不需要为了每个而编写自定义验证函数了

## 19.双重非位运算简写

有一个有效用例用于双重非运算操作符。可以用来代替Math.floor()，其优势在于运行更快，可以阅读此文章了解更多位运算。`Math.floor(4.9) === 4 //true`

简写：`~~4.9 === 4 //true`

## 20.向数组中插入元素

```
  var arr = [1,2,3,4,5];
  //old method
  arr.push(6);
  //new method 快43%
  arr[arr.length] = 6;
      
  var arr = [1,2,3,4,5];
  //old method
  arr.unshift(0);
  //new method 快98%
  [0].concat(arr);

```

## 21.优化嵌套语句

```
    //method1
    if (color) {
       if (color === 'black') {
           printBlackBackground();
       } else if (color === 'red') {
           printRedBackground();
       } else if (color === 'blue') {
           printBlueBackground();
       } else if (color === 'green') {
          printGreenBackground();
       } else {
          printYellowBackground();
       }
    }
      
  	//method2
    switch(color) {
      case 'black':
          printBlackBackground();
          break;
      case 'red':
          printRedBackground();
          break;
      case 'blue':
          printBlueBackground();
          break;
      case 'green':
          printGreenBackground();
          break;
      default:
          printYellowBackground();
    }
     
  	//method3
    var colorObj = {
      'black': printBlackBackground,
      'red': printRedBackground,
      'blue': printBlueBackground,
      'green': printGreenBackground,
      'yellow': printYellowBackground
    };
    if (color in colorObj) {
    	colorObj[color]();
    }

```

## 22.js测试代码运行时间

```
  console.time('Array initialize')
  var arr = new Array(100),
      len = arr.length,
      i;
  
  for (i = 0; i < len; i++) {
      arr[i] = new Object();
  };
  console.timeEnd('Array initialize')

```

## 23.快速去除小数

```
   // 数字输入
   console.log(~~47.11)  // -> 47
   console.log(~~-12.88) // -> -12
   console.log(~~1.9999) // -> 1
   console.log(~~3)      // -> 3

```

## 24.转换为数字的更快方法

将字符串转换为数字是极为常见的。最简单和快速的方法是使用`+`(加号) 来实现。

```
  var one = '1';
  var numberOne = +one; // Number 1
  var one = '1';
  var negativeNumberOne = -one; // Number -1

```

## 25.对象属性名不确定，需要动态的传入

```
// 一般的写法
const makeMap = (key, value) => {
  const obj = {};
  obj[key] = value;
  return obj;
};

// 简洁的写法
const makeMap = (key, value) => ({[key]: value});

```

## 26.复制一个对象，并重写其中的一些属性

```
const source = {hello: 'hello', hi: 'hi'};

// 一般的写法
const target = Object.assign({}, source);
target.hello = 'hello everyone';

// 简洁的写法
const target = {...source, hello: 'hello everyone'};

```

## 27.多级箭头函数 `=>`

```
// 一般的写法
const makeTimesFunc = times => {
  return value => {
    return value * times;
  };
};

// 简洁的写法
const makeTimesFunc = times => value => value * times;

```

## 28.数组去重的方法

```
let arr = [1, 1, 2, 2, 3, 3];
let deduped = [...new Set(arr)] // [1, 2, 3]

```

