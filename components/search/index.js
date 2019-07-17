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

  },

  /**
   * 组件的方法列表
   */
  methods: {
    onConfirm(e){
      const word = e.detail.value;
      keyWordModel.addToHistory(word)
    },
    onDelete(e){

    },
    onCancel(e){
      this.triggerEvent("triggerSearch", false)
    }
  }
})
