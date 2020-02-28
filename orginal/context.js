module.exports = {
    get body() {
        return this.response.body
    },
    set body(val) {
        this.response.body = val
    },
    get url() {
        return this.request.url
    },
    get header() {
        return this.response.writeHead
    },
    get status(){
        return this.response.status
    },
    set header(val) {
        this.response.writeHead = val
    },
    set status(val){
        this.response.status = val
    }
}
