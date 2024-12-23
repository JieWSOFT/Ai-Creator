// pages/my/my.js
import { getLlmAvailable } from '../../apis/user'
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: [
      {
        label: '可用次数',
        type: 'code'
      },
      {
        label: '写作记录',
        icon: 'icon-gengduo',
        type: 'result'
      },
      {
        label: '分享小程序',
        icon: 'icon-gengduo',
        type: 'share'
      },
      {
        label: '意见反馈',
        icon: 'icon-gengduo'
      },
    ],
    userInfo: {
      username: '',
      id: '',
    },
    count: ''
  },
  async handleGetLlmAvailable() {
    const { data } = await getLlmAvailable()
    this.setData({
      count: data
    })
  },
  handleClick(e) {
    const { item } = e.currentTarget.dataset
    console.log(item)
    if (item.type === 'result') {
      wx.navigateTo({
        url: '/pages/logs/logs',
      })
    }
  },
  onLoadLogin(options){
    // 已经登录，可以走依赖token的逻辑了
    console.log('首页的onLoadLogin',options,`{"token":"${app.globalData.token}"}`);
  },
  onShowLogin(options){
    // 每次显示页面时都会执行的逻辑在这里
    console.log('首页的onShowLogin',options,`{"token":"${app.globalData.token}"}`);
    this.handleGetLlmAvailable()
  },
  onLoadUser(options){
    const userinfo = JSON.stringify(app.globalData.userInfo)
    // 拿到用户信息了，可以走依赖用户信息的逻辑了
    console.log('首页的onLoadUser',options,userinfo);
  },
  onReadyUser(options){
    const userinfo = JSON.stringify(app.globalData.userInfo)
    // 渲染完毕，并且拿到了用户信息，可以去走类似在canvas上渲染用户头像的逻辑了
    console.log('首页的onReadyUser',options,userinfo);
  },
  onReadyShowUser(options){
    const userInfo = app.globalData.userInfo
    this.setData({
      userInfo: userInfo
    })
    // 渲染完完毕 && 每次显示页面 && 拿到用户信息
    console.log('首页的onReadyShowUser',options,this.userInfo);
  },
  onShareAppMessage() {
    // 分享记录的接口
    return {
      title: 'AI写作服务',
      path: `/pages/index/index?userid=${this.userInfo.id}`
    };
  }
})