import { HTTP } from '../utils/http.js'
class ClassicModel extends HTTP {
  //最新期
  getLatest(sCallBack) {
    this.request({
      url: 'classic/latest',
      success: (data) => {
        this._setLatestIndex(data.index)
        wx.setStorageSync(this._getKey(data.index), data)
        sCallBack(data)
      }
    })
  }
  //上一期or下一期
  getClassic(sCallBack, index, nextOrprevious) {
    //缓存orAPI写入
    //key 确定key
    let key = nextOrprevious === 'next' ? this._getKey(index + 1) : this._getKey(index - 1);
    let classic = wx.getStorageSync(key)
    if (!classic) {
      this.request({
        url: `classic/${index}/${nextOrprevious}`,
        success: (data) => {
          wx.setStorageSync(this._getKey(data.index), data)
          sCallBack(data)
        }
      })
    } else {
      sCallBack(classic)
    }
  }
  //判断第一期
  isFirst(index) {
    let latestIndex = this._getLatestIndex();
    return index !== latestIndex ? true : false
  }
  //判断最后一期
  isLatest(index) {
    return index !== 1 ? true : false
  }

  getMyFavor(success) {
    const params = {
      url:"classic/favor",
      success:success
    }
    this.request(params)
  }

  _getKey(index) {
    let key = `classic-${index}`;
    return key
  }

  _setLatestIndex(index) {
    wx.setStorageSync('latestIndex', index)
  }
  _getLatestIndex() {
    let index = wx.getStorageSync('latestIndex');
    return index
  }
}

export { ClassicModel }