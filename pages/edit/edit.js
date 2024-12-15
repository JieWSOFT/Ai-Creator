// pages/edit/edit.js
import { typeList } from '../../utils/type'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: '',
    typeList,
    editType: '',
    maxlength: 1000,
    autosize: {
      maxHeight: 240, 
			minHeight: 30
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const { type } = options
    this.setData({
      editType: type
    })
    wx.setNavigationBarTitle({
      title: typeList[type]?.title,
    })
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
  handleClear() {
    this.setData({
      keyword: ''
    })
  },
  onChange(e) {
    this.setData({
      keyword: e.detail.value
    })
  },
  // 创建
  handleCreate() {
    wx.navigateTo({
      url: '/pages/detail/detail',
      success: (res) => {
        res.eventChannel.emit('params', {
          createParams: {
            topic: this.keyword,
            type: this.editType
          },
          type: 'create'
        })
      }
    })
  }
})