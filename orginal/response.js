module.exports = {
    get body() {
        return this._body
    },
    set body(val) {
        this._body = val
    },
    get writeHead() {
        return this._head
    },
    set writeHead(val) {
        this._head = val
    },
    get status(){
        return this._status
    },
    set status(val){
        this._status = val
    }
}
