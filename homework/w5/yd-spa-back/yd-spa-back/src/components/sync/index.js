import item from "./sync.css";
import help from "../common/index.js";
console.log(help.version);
import {
    isArray
} from "lodash-es";
const isArrayfn = (agrs) => {
    console.log(isArray(agrs));
};
const sync = () => {
    console.log("sync");
    fetch("/api/test")
        .then(response => response.json())
        .then(data => {
            console.log("fetch结果", data.message);
        })
        .catch(err => {
            console.log("🍎请稍事休息~");
            //发短信
            //navigator.sendBeacon("http://www.aa.com/a.gif?errinfo="+err);
        })
    setTimeout(function () {
        document.getElementById("app").innerHTML = `<h1 class="${item.test}">Hello 一灯</h1>`
    }, 1000);
};
export {
    sync,
    isArrayfn
};