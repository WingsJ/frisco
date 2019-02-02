// components/classic/music/index.js
import { classicBeh } from '../classic-beh.js'
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  /**
   * 组件的初始数据
   */
  data: {
    playImg: './images/player@player@play.png',
    pauseImg:'./images/player@pause.png',
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
