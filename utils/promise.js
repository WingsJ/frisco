import { config } from '../config.js'
const tips = {
  '1': '默认',
  '1005': 'appkey无效'
}
class HTTP {
  request({url, data = {}, method = 'GET'}){
    const promise = new Promise((resolve,reject)=>{
      this._request(url, resolve,reject,data,method)
    })
    return promise
  }
  _request(url, resolve,reject,data = {}, method = 'GET') {
    wx.request({
      url: config.app_base_url + url,
      method: method,
      data: data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        const code = res.statusCode + '';
        if (code.startsWith(2)) {
          resolve(res.data)
        } else {
          reject()
          this._show_error(res.data.error_code)
        }
      },
      fail: (err) => {
        reject()
      }
    })
  }
  _show_error(error_code) {
    if (!error_code) {
      error_code = '1';
    }
    wx.showToast({
      title: tips[error_code] || tips[1],
      icon: 'none',
      duration: 2000
    })
  }
}
module.exports = { HTTP, }