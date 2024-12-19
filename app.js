// app.js
import {
  createToken,
  getUserInfo
} from './apis/user'
import CustomHook from 'spa-custom-hooks';
let globalData = {
  // 是否已拿到token
  token: '',
  // 用户信息
  userInfo: {
    id: '',
    username: '',
  }
}
CustomHook.install({
  'Login': {
    name: 'Login',
    watchKey: 'token',
    onUpdate(val) {
      //有token则触发此钩子
      return !!val;
    }
  },
  'User': {
    name: 'User',
    watchKey: 'userInfo.username',
    onUpdate(val) {
      //获取到userinfo里的userId则触发此钩子
      return !!val;
    }
  }
}, globalData || 'globalData')

App({
  onShow() {
    console.log('app.vue页onShow');
  },
  onLaunch() {
    console.log('app.vue页onLaunch');
    // 登录
    wx.login({
      success: async (res) => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        const token = await createToken(res.code)
        this.globalData.token = token
        wx.setStorageSync('token', token);

        // 获取用户信息
        this.handleGetUserInfo()
      }
    })
  },
  globalData,
  async handleGetUserInfo() {
    const user = await getUserInfo()
    this.globalData.userInfo.username = user.username
    this.globalData.userInfo.id = user.id
  },
})