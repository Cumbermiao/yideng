class PressButton{
    constructor(element,count){
        this.count = count
        this.element = element
    }
    click(){
        this.element.click(()=>{
            if(this.count<10){
                this.element.css({
                    "-webkit-filter":"grayscale(0)"
                })
                $("#animation").addClass("count")
                this.count = add(this.count)
                setTimeout(()=>{
                    $("#animation").removeClass("count")
                },1000)
            }else{
                this.count=0
                this.element.css({
                    "-webkit-filter":"grayscale(1)"
                })
            }
        })
    }
}

class Thumb extends PressButton{
    constructor(element,count){
        super()
    }
}

export default Thumb