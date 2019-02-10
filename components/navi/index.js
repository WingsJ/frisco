// components/navi/navi.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: String,
    first: Boolean,
    latest: Boolean
  },

  /**
   * 组件的初始数据
   */
  data: {
    distFirstImg: './images/triangle.dis@left.png',
    firstImg: './images/triangle@left.png',
    distLastImg: './images/triangle.dis@right.png',
    lastImg: './images/triangle@right.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLeft() {
      if (this.properties.first) {
        this.triggerEvent('left', {})
      }
    },
    onRight() {
      if (this.properties.latest) {
        this.triggerEvent('right', {})
      }
    }
  }
})
