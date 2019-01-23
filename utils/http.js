import { config } from '../config.js'
const tips ={
  '1':'默认',
  '1005':'appkey无效'
}
class HTTP {
  request(params) {
    if (!params.method) {
      params.method = 'GET';
    }
    wx.request({
      url: config.app_base_url + params.url,
      method: params.method,
      data: params.data,
      header: {
        'content-type': 'application/json',
        'appkey': config.appkey
      },
      success: (res) => {
        let code = res.statusCode + '';
        if (code.startsWith(2)) {
          params.success(res.data)
        }else{
          console.log(res)
          this._show_error(res.data.error_code)
        }
      },
      fail: (err) => {

      }
    })
  }
  _show_error(error_code){
    if(!error_code){
      error_code = '1';
    }
    wx.showToast({
      title: tips[error_code],
      icon:'none',
      duration:2000
    })
  }
}
module.exports = { HTTP, }