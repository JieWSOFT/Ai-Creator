// index.js
import { typeList } from '../../utils/type'
import { postLlmAvailable } from '../../apis/user'
const app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {
      nickName: '',
    },
    hasUserInfo: false,
    canIUseGetUserProfile: wx.canIUse('getUserProfile'),
    canIUseNicknameComp: wx.canIUse('input.type.nickname'),
    editList: [
      {
        type: 'xiaohongshu',
        title: '小红书文案',
        btn: '点击创建',
        bg: '#bccef7',
        color: '#3d44ac',
        icon: {
          bg: '#e5e9fd',
          font: 'icon-shoucang',
        }
      },
      {
        type: 'publicAccount',
        title: '公众号文章',
        btn: '点击创建',
        bg: '#f0da9d',
        color: '#92602a',
        icon: {
          bg: '#faf1d6',
          font: 'icon-shuji1',
        }
      }
    ],
    typeList,
    templateList: [
      {
        type: 'essay',
        title: '作文'
      },
      {
        type: 'poem',
        title: '写诗'
      },
      {
        type: 'friendCircle',
        title: '朋友圈文案'
      },
      {
        type: 'workSummary',
        title: '工作总结'
      },
      {
        type: 'couplet',
        title: '对联'
      },
      {
        type: 'name',
        title: '起名'
      },
    ]
  },
  handleClickEdit(e) {
    const { item } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/edit/edit?type=${item.type}`,
    })
  },
  handelPostLlmAvailable(params) {
    postLlmAvailable(params)
  },
  onLoadLogin(options){
    // 已经登录，可以走依赖token的逻辑了
    console.log('首页的onLoadLogin',options,`{"token":"${app.globalData.token}"}`);
    if (options.userid) {
      this.handelPostLlmAvailable({
        userId: options.userid,
        type: 'share'
      })
    }
  },
  onShowLogin(options){
    // 每次显示页面时都会执行的逻辑在这里
    console.log('首页的onShowLogin',options,`{"token":"${app.globalData.token}"}`);
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
    const userinfo = JSON.stringify(app.globalData.userInfo)
    // 渲染完完毕 && 每次显示页面 && 拿到用户信息
    console.log('首页的onReadyShowUser',options,userinfo);
  },
  onShareAppMessage() {
    // 分享记录的接口
    return {
      title: 'AI写作服务',
      path: `/pages/index/index?userid=${app.globalData.userInfo.id}`
    };
  }
})
