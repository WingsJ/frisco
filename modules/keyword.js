class KeyWordModel{
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