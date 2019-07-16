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
  getDetail(bid){
    return this.request({
      url: `book/${bid}/detail`
    })
  }

  getLikeStatus(bid) {
    return this.request({
      url: `book/${bid}/favor`
    })
  }
  getComments(bid) {
    return this.request({
      url: `book/${bid}/short_comment`
    })
  }
  postComment(bid, comment) {
    let params = {
      url: 'book/add/short_comment',
      method: 'POST',
      data: {
        book_id: bid,
        content: comment
      },
      error: (err) => {
        wx.showToast({
          title: '评论失败',
        })
      }
    }
    return this.request(params)
  }
}
export {BookModel}