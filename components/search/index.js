// components/search/index.js
import { KeyWordModel } from "../../modules/keyword.js"

const keyWordModel = new KeyWordModel()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    more:{
      type:Number,
      observer: "_load_more"
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    historyWords:[],
    hotWords:[],
    dataArr:[],
    finished:false,
    searchValue:"",
    total:0,
    loading:false
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
    _load_more(){
      console.log(this.properties.more)
      const length = this.data.dataArr.length;
      if (!this.data.loading && this.data.finished && (this.data.total === 0 || this.data.total > length)){
        this.setData({
          loading:true
        })
        keyWordModel.search(length, this.data.searchValue).then(res => {
          const books = [...this.data.dataArr,...res.books];
          this.setData({
            dataArr: books,
            total:res.total,
            loading:false
          })
        })
      }
    },
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
