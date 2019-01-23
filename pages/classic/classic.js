// pages/classic/classic.js
import { ClassicModel } from '../../modules/classic.js';
import { LikeModel } from '../../modules/like.js';
let classicModel = new ClassicModel();
let likeModel = new LikeModel();
Page({
  data: {
    classicData:''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    classicModel.getLatest((res) =>{
      console.log(res)
      this.setData({
        classicData:res
      })
    })
  },
  onLike(e){
    likeModel.like(e.detail.behavior, this.data.classicData.id, this.data.classicData.type)
  }
})