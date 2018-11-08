## css-doodle

### 设置网格的行列
```html
<!--1. 在标签中设置grid属性-->
<css-doodle grid='5x4'></css-doodle>
```
```html
<!--在css中设置 @grid，要注意空格-->
:doodle {
    @grid: 5x1 / 8em;
    grid-gap: 1px;
    width: 8em; height: 8em;
}
```

### 选择器
==关于cell的选择器都是从1开始==
- :doodle 代表组件元素本身

- :container 代表组件里面的容器，它包含了所有的cell，它会继承 :doodle 所有的属性。  

- @nth(n) 与 nth-child 类似，选择第n个cell
- @even 与 nth-child(even|2n) 类似,选择偶数为的cell
- @odd 与@even相反
- @at(row, col) 选择第row行第col列的cell
- @random 选择随机个cell（多个），并且可以随机多次
- @col(n|even|odd) 选择第n|even|odd列

### 属性
- @grid 设置行
- @size 设置cell大小
- @min-size 设置最小大小

- @use 使用css变量（全局变量 :root）,可以使用多个变量，也可以使用多次，可以设为 css-doodle 的属性
- @shape 设置cell 形状
- @place-cell 设置 cell 相对于整个布局的位置

### 方法
==pick 支持格式 [0-9a-z]== 

- @index|i 返回当前 cell 的 index

- @row|size-row 返回当前 cell 的 row|maxRow number
- @col|size-col 返回当前 cell 的 col|maxCol number
- @size 返回所有 cell 的number
- @pick(v1, v2,...) 从给出的值中随机选一个
- @pick-n(v1, v2,...) 从给出的值中按顺序选一个
- @pick-d(v1, v2,...) 与 pick-n 相反，顺序随机但是不会重复 
- @rand(start [,stop] [,step]) 在给定的范围中随机一个数，可以设置 step
- @last-pick, @last-rand 返回 pick 方法中最后一次返回的值
- @repeat(times, value) 重复取值 value ，times次
- @multiple(times, value) 与 repeat 类似，只不过 value 可以多个（以逗号分隔）
- @n() 表示当前重复的第几次次数，只能用于 repeat 和 multiple 中
- @svg 将 svg 直接用作背景图，推荐使用 use 的方式
- @<Math> 使用数学函数，常见的有 abs sin PI 等
- @calc(expr) 计算 expr 表达式的结果
- @var 与 css 的 var 类似，定义变量，使用时需要加上 var
- @hex(num) 将 num 转成 16 进制

### js API

- grid  ==:css-doodle 的优先级高于改元素本身,直接获取元素改变属性不会覆盖原来的属性值==
```js
const doodle = document.querySelector('css-doodle');
doodle.grid = "5";
console.log(doodle.grid);
/* { x: 5, y: 5, size: 25 } */
```

- use 设置元素的 use 属性
```js
doodle.use = 'var(--my-rule)';
```

- update([styles]) 使用 style 重新渲染改元素
```js
doodle.update(`
  :doodle { @grid: 6 / 8em }
  background: rebeccapurple;
  margin: .5px;
`);

/* just refresh */
doodle.update();
```