const http = require('http')
const request = require('./request')
const response = require('./response')
const context = require('./context')
// const koa = require('koa')
class LKoa{
    constructor(){
        this.middleware = []
    }
    use(cb) {
        this.middleware.push(cb)
    }
    listen(...arg) {
        const server = http.createServer(async (req, res) => {
            const ctx = this.createContext(req, res)
            const fn = this.compose(this.middleware)
            await fn(ctx) // 执行compose匿名函数,保证同步执行必须要加await，fn返回的是一个微任务执行
            res.writeHead(ctx.status, ctx.header)
            res.end(ctx.body)
        })
        server.listen(...arg)
    }
    compose(middleware){
        return function (ctx) {
            return dispatch(0)
            function dispatch(i) {
                // console.log('middle', this.middleware[i])
                let fn = middleware[i]
                if(!fn){
                    Promise.resolve('没有要执行的函数！')
                }
                return Promise.resolve(
                    fn(ctx, function next() {
                        return dispatch(i + 1) // 下一个中间件函数，放在next函数里边执行
                    })
                )
            }
        }
    }
    createContext(req, res) {
        const ctx = Object.create(context)
        ctx.request = Object.create(request)
        ctx.response = Object.create(response)
        ctx.req = ctx.response.req = req
        ctx.res = ctx.response.res = res
        return ctx
    }
}
module.exports = LKoa
