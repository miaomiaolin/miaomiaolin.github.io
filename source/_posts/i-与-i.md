---
title: i++与++i
date: 2019-09-20 16:43:54
tags: js
---

1. 概念

单独运算时i++ = ++i

区别：在赋值上不同

```javascript
var a = 1
var e = a++
console.log(e, a) // e = 1; a = 2
var b = 1
var f = ++b
console.log(f, b) // f = 2; b = 2
```

两者的不同在于e是先拿到a的值，再让a去加1；f则是先让b去加1，再去拿新的b的值

<!-- more -->

2. 例题

```javascript
// 第一题
i = 0 求下列a,b的值
a = (i++)+(i++)+(i++)
b = (++i)+(++i)+(++i)
// a = 3; b = 15; i = 6
// 第二题
a = 10; b = 20; c = 30 求e的值
++a;
a++;
e = ++a+(++b)+(c++)+a++
// a = 14; b = 21; c = 31; e = 77
// 第三题
a = 10; b = 20; c = 4 求++b+c+a++的值
// ++b+c+a++ = 
```

