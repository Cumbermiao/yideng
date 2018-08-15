## 3D 变换


- 在制作全景旋转的这种项目时， 经常会出现图片的上面不对齐的情况， 解决方法是由于给box定了高度，只要将box的height去掉。

- [ ] 在制作淘宝购物节的项目时，模拟移动端有时会出现  html的标签的 width 比模拟的屏幕的width 要小，导致 prespectIve-origin 屏幕中心。影响了观看的效果。

- [x] translateZ 由于使用 Math.round 可能连接处会出现缝隙， 适当减少translateZ 的值，填补空隙。

- [x] 还要注意一个问题， 页面是有横向滚动条的， 不能给外面的容器居中， 否则会出现图像两边不对称的情况。

- ○ 可以看成是一个正多边形 ，  那同样，如果要做一个球体，那么可以参照正方体的结构，只是讲正方体的结构分成更多的面。

### 矩阵变换
#### 2d矩阵 transform(a,b,c,d,e,f)
- 对应的矩阵计算如下 ！[image](http://image.zhangxinxu.com/image/blog/201206/css-transforms-matrix5.gif)
- 可以知道变换之后的 x 为 ax+cy+e , y 为 bx+dy+f。通过这个结果可以知道常见的transform可以通过矩阵实现。
1. 位移 [1,0,0,1,x,y]:x,y为水平、垂直方向位移的距离。
2. scale 缩放 [x,0,0,y,0,0]:x,y 为水平、垂直方向的缩放比例。
3. rotate 旋转 [consa sina -sina cosa 0 0]:a 为旋转角度。![image](https://img-blog.csdn.net/20170323174605746?watermark/2/text/aHR0cDovL2Jsb2cuY3Nkbi5uZXQvY3N4aWFvc2h1aQ==/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70/gravity/SouthEast)
4. skew 拉伸 [1 tany tanx 1 0 0] ： x,y为水平、垂直方向的倾斜角度。