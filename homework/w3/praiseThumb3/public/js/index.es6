class PraiseButton {
    constructor(num, element) {
        this.num = num;
        this.element = element;
        this.timer = null;
    }
    clickAction() {
        this.element.click(() => {
            if (this.timer) {
                clearTimeout(this.timer)
            }
            this.timer = setTimeout(() => {
                this.element.css('-webkit-filter', 'grayscale(0)');
                $('#animation').addClass('num');
                this.num = add(this.num);
                setTimeout(function () {
                    $('#animation').removeClass('num');
                }, 1000);
                axios.get('/index/update').then((res) => {
                    console.log(res)
                }).catch((err) => {
                    console.log(err)
                })
                console.log(this.num);
            }, 800)
        })
    }
}
class Thumb extends PraiseButton {
    constructor(num, element) {
        super(num, element);
    }
}
export default Thumb

// let f=new Thumb(0,$('#thumb'));
// f.clickAction();