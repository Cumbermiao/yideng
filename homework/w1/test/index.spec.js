var div = document.getElementById('button');

describe("点赞",function(){
    it("click+1",function(){
        expect($.press(div,10).init().count).toBe(10)
    })
})