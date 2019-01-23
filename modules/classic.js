import {HTTP} from '../utils/http.js'
class ClassicModel extends HTTP{
  //最新期
  getLatest(sCallBack){
    this.request({
      url: 'classic/latest',
      success: (data) => {
        sCallBack(data)
      }
    })
  }
}

export { ClassicModel}