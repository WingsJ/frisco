import { BookModel } from './../../modules/book.js'
import { LikeModel } from '../../modules/like.js';
let likeModel = new LikeModel();
const bookmodel = new BookModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    detail:{},
    likeStatus:0,
    likeCount:0,
    comments:[],
    posting:false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const bid = options.bid;
    const detail = bookmodel.getDetail(bid)
    const comments = bookmodel.getComments(bid)
    const likeStatus = bookmodel.getLikeStatus(bid)
    detail.then(res=>{
      this.setData({
        detail:res
      })
    })
    comments.then(res => {
      this.setData({
        comments: res.comments
      })
    })
    likeStatus.then(res => {
      this.setData({
        likeStatus: res.like_status,
        likeCount: res.fav_nums,
      })
    })
  },
  setDetail(str){
    console.log(str)
    return 1
  },
  onLike(e){
    console.log(e.detail)
    likeModel.like(e.detail.behavior, this.data.detail.id, 400)
  },
  //弹框
  onFakePost(e){
    this.setData({
      posting: true
    })
  },
  onCancel(e){
    this.setData({
      posting: false
    })
  },
  onPost(e){
    const comment = e.detail.text;
    if (comment.length>12){
      wx.showToast({
        title: '短评最多12个字',
        icon:'none'
      })
      return
    }
    bookmodel.postComment(this.data.detail.id, comment).then(res =>{
      wx.showToast({
        title: '+1',
        icon: 'none'
      })
      this.data.comments.unshift({
        comment,
        nums:1
      })
      this.setData({
        comments: this.data.comments
      })
    })
  }
})