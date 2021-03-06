/**
 
1.JS内存空间分为栈(stack)、堆(heap)、池(一般也会归类为栈中)。 
  栈：存变量
  堆：存复杂对象（闭包中的变量是存这里的）
  池：存常量，也叫常量池

2.内存回收
js自动垃圾收集机制：垃圾收集器会每隔一段时间就执行一次释放操作，找出那些不再继续使用的值，然后释放其占用的内存。

局部变量：函数执行完毕局部变量便没啥用了，因此垃圾收集器很容易做出判断并回收。
全局变量：全局变量什么时候需要自动释放内存空间则很难判断，所以在开发中尽量避免使用全局变量。


以Google的V8引擎为例，V8引擎中所有的JS对象都是通过堆来进行内存分配的

初始分配：当声明变量并赋值时，V8引擎就会在堆内存中分配给这个变量。
继续申请：当已申请的内存不足以存储这个变量时，V8引擎就会继续申请内存，直到堆的大小达到了V8引擎的内存上限为止。


V8引擎对堆内存中的JS对象进行分代管理

新生代：存活周期较短的JS对象，如临时变量、字符串等。
老生代：经过多次垃圾回收仍然存活，存活周期较长的对象，如主控制器、服务器对象等。


 */