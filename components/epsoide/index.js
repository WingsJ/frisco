// components/epsoide/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    index: {
      type: String,
      observer(newVal,oldVal,changePath) {
        //监听数据
        let val = parseInt(newVal) < 10 ? '0' + newVal :newVal;
        this.setData({
          _index:val
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    year: 0,
    month: '',
    _index:'',
  },
  //组件加载时
  attached() {

  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})
