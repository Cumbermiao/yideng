import style from './hello.css'
import view from '../../assets/view.jpg'
const hello = "Hello world";
document.getElementById('app').innerHTML=`<h3 class="title ${style.bg}">Hello World</h3><img src="${view}">'`//css-loader:localIndent

export default hello;