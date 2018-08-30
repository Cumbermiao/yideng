describe("add",function(){
    it('10 + 30',function(){
        expect(add(10,30)).toBe(40)
    })
    it('1+10',function(){
        expect(add(1,10)).toBe(11)
    })
})
describe("add1",function(){
    it('10',function(){
        expect(add1(10)).toBe(11)
    })
    it('22',function(){
        expect(add1(22)).toBe(23)
    })
})