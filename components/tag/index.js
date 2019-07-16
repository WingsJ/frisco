// components/tag/index.js
Component({
  /**
   * 组件的属性列表
   */
  options:{
    multipleSlots:true
  },
  externalClasses: ['tag-class','tag-radius'],
  properties: {
    text:String
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
    onTap(e){
      this.triggerEvent("tapping",{
        text:this.properties.text
      })
    }
  }
})
