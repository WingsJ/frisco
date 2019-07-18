// components/search/index.js
import { KeyWordModel } from "../../modules/keyword.js"

const keyWordModel = new KeyWordModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords:[],
    hotWords:[],
    dataArr:[],
    finished:false,
    searchValue:""
  },
  attached(){
    this.setData({
      historyWords:keyWordModel.getHistory()
    })
    keyWordModel.getHot().then(res => {
      this.setData({
        hotWords:res.hot
      })
    })
    //console.log(this.data.historyWords)
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onConfirm(e){
      //console.log(e)
      const word = e.detail.value || e.detail.text;
      if(!word){
        return;
      }
      this.setData({
        finished:true,
        dataArr:[],
        searchValue:word
      })
      keyWordModel.search(0,word).then(res => {
        keyWordModel.addToHistory(word)
        this.setData({
          dataArr:res.books
        })
      })
    },
    onDelete(e){
      this.setData({
        finished:false
      })
    },
    onCancel(e){
      this.triggerEvent("triggerSearch", false)
    }
  }
})
