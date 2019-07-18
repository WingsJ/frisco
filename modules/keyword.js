import { HTTP } from '../utils/promise'
class KeyWordModel extends HTTP{
    _key = "q"
    _maxLength = 5
    getHistory(){
        const words = wx.getStorageSync(this._key)
        if(!words){
            return []
        }
       return  words;
    }
    getHot(){
        return this.request({
            url:`/book/hot_keyword`
        })
    }
    search(start, q) {
        return this.request({
          url:`book/search?summary=1`,
          data:{
            q,
            start
          }
        })
      }
    addToHistory(keyword){
        let words = this.getHistory()
        const has = words.includes(keyword)
        if(!has){
            const length = words.length;
            if(length > this._maxLength - 1){
                words.pop()
            }
            words.unshift(keyword)
            wx.setStorageSync("q", words);
        }
    }
}

export {KeyWordModel}