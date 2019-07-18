import { BookModel } from './../../modules/book.js'
const bookmodel = new BookModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    books: [],
    searching:false,
    more:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const hotList = bookmodel.getHotList();
    hotList.then(res => {
      this.setData({
        books: res
      })
    })
  },
  triggerSearching(){
    const searching = !this.data.searching;
    this.setData({
      searching
    })
  },
  onReachBottom(){
    this.setData({
      more:++this.data.more
    })
  }
})