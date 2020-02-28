const LKoa = require('./orginal/lKoa') // 核心代码
const app = new LKoa()
app.use( async (ctx, next) => {
    const r = await next()
    ctx.header = {
        'content-type': 'text/plan;charset=utf-8'
    }
    ctx.status = 200
    ctx.body = r
})
app.use( async (ctx,next) => {
    const r = await next()
    return r
})
app.use((ctx, next) => {
    return '请求成功'
})
app.listen(3000)





// const add = (x, y) => x + y
// const mul = (z) => z * z
// // es6
// const compose = (fn1, ...fn2) => (...arg) => {
//     let res = fn1(...arg)
//     fn2.forEach(item => {
//         res = item(res)
//     })
//     return res
// }
// const r = compose(add, mul, mul, mul)
// console.log(r(1,2))


// async function a(next){
//     const r = await next()
//     console.log('1', r)
//     console.log('2', '2')
// }
// async function b(next) {
//     console.log('3', '2')
//     const r = await next()
//     console.log('4', r)
//     return '5'
// }
// async function c(){
//     return '3'
// }
// function test(params) {
//     return function () {
//         return dispatch(0)
//         function dispatch(i) {
//             let fn = params[i]
//             if(!fn){
//                 Promise.resolve('没有要执行的函数！')
//             }
//             return Promise.resolve(
//                 fn(function next() {
//                     return dispatch(i + 1) // 下一个中间件函数，放在next函数里边执行
//                 })
//             )
//         }
//     }
// }
// const r = test([a,b,c])()
// console.log(r)

