## V1.0
### 注册 component
- 使用 register 注册组件
```js
xTag.register('x-foo',{
    content:"<h2>foo 组件</h2>",
    lifecycle:{
        //被创建
        created: function(){
            this.say("created")
        },
        //被插入
        inserted: function(){
        },
        //被删除
        removed: function(){
        },
        //属性变化
        attributeChanged: function(attrName, oldValue, newValue){
        }
    },
    methods:{
        say:function(message){
            console.log(message)
        }
    }
})
```

