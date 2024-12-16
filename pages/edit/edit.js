// pages/edit/edit.js
import {
  typeList
} from '../../utils/type'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {},
    typeList,
    editType: '',
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const {
      type
    } = options
    this.setData({
      editType: type
    })
    wx.setNavigationBarTitle({
      title: typeList[type]?.title,
    })
    //设置默认值
    typeList[type]?.edit.forEach(item => {
      if (item.default && item.key) {
        this.setData({
          ['form.' + item.key]: item.default
        })
      }
    })
    console.log( wx.getSystemInfoSync())
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },
  handleClear(event) {
    const {
      key
    } = event.currentTarget.dataset.item
    this.setData({
      ['form.' + key]: ''
    })
  },
  onChange(e) {
    const {
      key
    } = e.target.dataset.item
    this.setData({
      ['form.' + key]: e.detail.value ?? e.detail
    })
  },
  // 创建
  handleCreate() {
    //验证参数
    const flag = typeList[this.data.editType]?.edit.every(item => {
      if (item.validator) {
        const valitorResult = item.validator(this.data.form[item.key])
        if (valitorResult == true) {
          return true
        } else {
          wx.showToast({
            title: `${item.label}: ${valitorResult}`,
            icon: 'none'
          })
          return false
        }
      }
      return true
    })
    //验证通过跳转页面生成
    flag && wx.navigateTo({
      url: '/pages/detail/detail',
      success: (res) => {
        res.eventChannel.emit('params', {
          createParams: {
            ...(this.data.form || {}),
            editType: this.data.editType
          },
          type: 'create'
        })
      }
    })
  }
})