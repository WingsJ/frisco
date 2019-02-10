import {HTTP} from '../utils/http.js'
class ClassicModel extends HTTP{
  //最新期
  getLatest(sCallBack){
    this.request({
      url: 'classic/latest',
      success: (data) => {
        this._setLatestIndex(data.index)
        sCallBack(data)
      }
    })
  }
  //上一期or下一期
  getClassic(sCallBack, index, nextOrprevious){
    this.request({
      url: `classic/${index}/${nextOrprevious}`,
      success: (data) => {
        sCallBack(data)
      }
    })
  }
  //判断第一期
  isFirst(index){
    let latestIndex = this._getLatestIndex();
    return index !== latestIndex ? true : false
  }
  //判断最后一期
  isLatest(index){
    return index !== 1 ? true : false
  }
  _setLatestIndex(index){
    wx.setStorageSync('latestIndex', index)
  }
  _getLatestIndex(){
    let index = wx.getStorageSync('latestIndex'); 
    return index
  }
}

export { ClassicModel}