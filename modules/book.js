import { HTTP } from '../utils/promise.js'
class BookModel extends HTTP {
  getHotList() {
    return this.request({
      url: 'book/hot_list'
    })
  }
  getMyBookCount(){
    //promise
    return this.request({
      url: 'book/favor/count'
    })
  }
}
export {BookModel}