import './add.js';
@import('../css/index.css')
import axios from 'axios'
xtag.register('x-praise', {
    content:'<div class="hand" id="thumb"><div class="finger"></div><div class="finger"></div><div class="finger"></div><div class="finger"></div><div class="finger thumb"></div><div class="arm"></div></div><span class="hide" id="animation">+1</span>',

    lifecycle: {
      created: function(){
        this.num = 0;
        this.element = $(this);
        this.timer = null;
      } 
    },
    methods: {
     clickAction:function(){
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
            console.log(this.num,);
        }, 800)
     }
    },
    events: {
      click: function(){
        this.clickAction()
      }
    }
  });