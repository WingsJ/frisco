// pages/my/my.js
import { BookModel } from './../../modules/book.js'
import { ClassicModel } from './../../modules/classic.js'
const classicModel = new ClassicModel();
const bookmodel = new BookModel();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    authorized: false,
    userInfo: null,
    myBooksCount:"",
    classics:null
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //button组件进行弹窗,主动点击button
    this.useAuthorized()
    this.getMyBookCount()
    this.getMyFavor()
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  getMyFavor(){
    classicModel.getMyFavor(res => {
      this.setData({
        classics:res
      })
    })
  },
  getMyBookCount(){
    bookmodel.getMyBookCount().then(res => {
      this.setData({
        myBooksCount:res.count
      })
    })
  },
  getUserInfo() {
    wx.getUserInfo({
      success: data => {
        //console.log(data)
        this.setData({
          userInfo: data.userInfo,
          authorized: true
        })
      }
    })
  },
  useAuthorized() {
    wx.getSetting({
      success: data => {
        //console.log(data)
        if (data.authSetting['scope.userInfo']) {
          this.getUserInfo()
        } else {
          console.log("err")
        }
      }
    })
  },
  onGetUserInfo(e) {
    console.log(e)
    let userInfo = e.detail.userInfo
    if (userInfo) {
      this.setData({
        authorized: true,
        userInfo: e.detail.userInfo
      })
    }
  },
  onJumpToAbout() {
    wx.navigateTo({
      url: '/pages/about/about',
    })
  },
  onStudy(){
    wx.navigateTo({
      url: '/pages/course/course',
    })
  }
})