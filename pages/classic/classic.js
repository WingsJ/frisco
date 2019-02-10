// pages/classic/classic.js
import { ClassicModel } from '../../modules/classic.js';
import { LikeModel } from '../../modules/like.js';
let classicModel = new ClassicModel();
let likeModel = new LikeModel();
Page({
  data: {
    classicData: null,
    first: false,
    latest: true,
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res) => {
      this.setData({
        classicData: res
      })
    })
  },
  //J-like
  onLike(e) {
    likeModel.like(e.detail.behavior, this.data.classicData.id, this.data.classicData.type)
  },
  //J-movie
  left(e) {
    this._updateClassic('next')
  },
  right(e) {
    this._updateClassic('previous')
  },
  _updateClassic(nextOrprevious){
    let index = this.data.classicData.index;
    classicModel.getClassic((res) => {
      this.setData({
        classicData: res,
        first: classicModel.isFirst(res.index),
        latest: classicModel.isLatest(res.index),
      })
    }, index, nextOrprevious)
  }
})