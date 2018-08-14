
- [参考](https://www.w3cplus.com/css/drawing-images-with-css-gradients.html)
## radial-gradient
- 一般情况下， radial-gradient 的渐变图形是根据元素的宽高变化的 ， 渐变默认的是椭圆，但如果你的宽高一样，则渐变图形其实是圆形。 同样，如果你的宽为100，高为50，那么这个椭圆的宽和高的比例也是2:1。

- 根据以上的知识点，可以知道，一个雨伞的图案其实就是画 高相同、x的中心点相同、宽不同的 椭圆， 注意前面的渐变的颜色不会被后面的覆盖。


## background：<'background-color'> || <image> || <position> [ / <size> ]? || <repeat> || <attachment> || <origin> || <clip>

- background 中 position 和 size 之间要使用 / 分割。