// index.js
import { typeList } from '../../utils/type'
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
        title: '短文写作',
        tip: '1500字以内',
        btn: '点击创建',
        bg: '#bccef7',
        color: '#3d44ac',
        icon: {
          bg: '#e5e9fd',
          font: 'icon-shoucang',
        }
      },
      {
        title: '长文写作',
        tip: '1500字以上',
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
        type: 'xiaohongshu',
        title: '小红书文案'
      },
      {
        type: 'publicAccount',
        title: '公众号文章'
      },
      {
        type: 'workSummary',
        title: '工作总结'
      },
      {
        type: 'name',
        title: '起名'
      },
    ]
  },
  handleClick(e) {
    const { item } = e.currentTarget.dataset
  },
  handleClickEdit(e) {
    const { item } = e.currentTarget.dataset
    wx.navigateTo({
      url: `/pages/edit/edit?type=${item.type}`,
    })
  },
  onLoadLogin(options){
    // 已经登录，可以走依赖token的逻辑了
    console.log('首页的onLoadLogin',options,`{"token":"${app.globalData.token}"}`);
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
      title: '分享好友',
      path: '/pages/index/index'
    };
  }
})
