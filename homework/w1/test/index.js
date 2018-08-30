class Press{
    constructor(button,count){
        this.count = count||0
        this.button = button
    }
    init(){
        this.button.onclick=function(){
            this.add()
        }.bind(this)
        this.renderCount()
    }
    add(){
        this.count+=1
        this.renderCount()
    }
    renderCount(){
        this.button.innerHTML ='点赞'
        this.button.className ='button'
        var span = document.createElement('span')
        span.innerText = this.count
        this.button.appendChild(span)
    }
}

class Thumb extends Press{
    constructor(button,count,iconClass){
        super(button,count)
        this.iconClass = iconClass
    }
    renderCount(){
        this.button.innerHTML ="<span>点赞</span>"
        this.button.className ='button'
        var i = document.createElement('i')
        i.className='iconfont icon-thumb-up'
        this.button.appendChild(i)
        var span = document.createElement('span')
        span.className='tip'
        span.innerText = this.count
        this.button.appendChild(span)
    }
}

