// components/like/index.js
Component({
  /**
   * 组件的属性列表 开放
   */
  properties: {
    like: {
      type: Boolean,//数据类型 必填
      value: false, //初始值 选填
      observer: (options) => {
        
      }
    },
    count: {
      type: Number,
      value: 1,
      observer: (options) => {
        //console.log(options)
      }
    }
  },

  /**
   * 组件的初始数据 封装
   */
  data: {
    trueImg: 'images/like.png',
    falseImg: 'images/like@dis.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    onLike(event) {
      let like = this.properties.like;
      let count = this.properties.count;
      this.setData({
        like: !like,
        count: like ? --count : ++count
      })
      
      let behavior = this.properties.like?'like':'unlike';
      this.triggerEvent('like',{
        behavior,
      })
    }
  }
})
