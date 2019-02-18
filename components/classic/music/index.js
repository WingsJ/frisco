// components/classic/music/index.js
import { classicBeh } from '../classic-beh.js'
//背景音乐管理实例
const mgr = wx.getBackgroundAudioManager()
Component({
  /**
   * 组件的属性列表
   */
  behaviors: [classicBeh],
  properties:{
    url:String,
    title:String,
  },
  /**
   * 组件的初始数据
   */
  data: {
    play:false,
    playImg: './images/player@play.png',
    pauseImg:'./images/player@pause.png',
  },
  /**
   * 组件的方法列表
   */
  methods: {
    onPlay(){
      let property = this.properties;
      let playFlag = this.data.play;
      if(!playFlag){
        mgr.title = property.title;
        mgr.src = property.url;
      }else{
        mgr.pause()
      }
      this.setData({
        play: !playFlag
      })
    }
  }
})
