// pages/classic/classic.js
import { ClassicModel } from '../../modules/classic.js';
import { LikeModel } from '../../modules/like.js';
let classicModel = new ClassicModel();
let likeModel = new LikeModel();
Page({
  data: {
    first: false,
    latest: true,
    likeCount:0,
    likeStatus:false,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res) => {
      this.setData({
        ...res,
        likeCount: res.fav_nums,
        likeStatus:res.id,
      })
    })
  },
  //J-like
  onLike(e) {
    likeModel.like(e.detail.behavior, this.data.id, this.data.type)
  },
  //J-movie
  left(e) {
    this._updateClassic('next')
  },
  right(e) {
    this._updateClassic('previous')
  },
  _updateClassic(nextOrprevious){
    let index = this.data.index;
    classicModel.getClassic((res) => {
      this.setData({
        ...res,
        first: classicModel.isFirst(res.index),
        latest: classicModel.isLatest(res.index),
      })
      this._getLikeStatus(res.id,res.type)
    }, index, nextOrprevious)
  },
  _getLikeStatus(artID,category){
    likeModel.geiClassicLikeStatus(artID, category, (res) => {
      this.setData({
        likeStatus: res.like_status,
        likeCount: res.fav_nums,
      })
    })
  }
})