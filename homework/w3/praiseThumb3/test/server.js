
const request = require('supertest');
const app = require('../app')
console.log('app,',app)
function start() {
    return request(app.listen())
}

describe('点赞接口', function () {
    it('测试接口+1', function (done) {
        start()
            .get('/index/update')
            .expect(200)
            .end((err, res) => {
                if (res.result==1) return done(err)
                done()
            })
    });
});