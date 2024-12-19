// pages/detail/detail.js
import {
  post,
} from '../../utils/http'
import {
  typeList
} from '../../utils/type'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    editType: '',
    titles: [],
    content: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    const eventChannel = this.getOpenerEventChannel()
    eventChannel.on('params', (data) => {
      const {
        type,
        params = {}
      } = data
      if (type === 'create') {
        //设置title
        const _titles = []
        typeList[params.editType]?.edit.forEach(item => {
          _titles.push({
            label: item.label,
            value: params[item.key]
          })
        })
        this.setData({
          editType: params.editType,
          titles: _titles
        })
        // 执行创建功能
        this.handleCreate(params)
      } else if (type === 'result') {
        // 生成记录过来的查询
        const log = params
        this.setData({
          titles: log.titles,
          content: log.content
        })
      }
    })
  },

  async handleCreate(params) {
    wx.showLoading({
      title: 'AI生成中',
      mask: true
    })
    const content = await post({
      url: '/llm/generate',
      data: {
        type: this.data.editType,
        params
      }
    }).catch((e) => {
      wx.showToast({
        icon: 'error',
        title: e?.message || "AI生成失败"
      })
    }).finally(() => {
      wx.hideLoading()
    })
    this.setData({
      content
    })
  },

  handleCopy() {
    wx.setClipboardData({
      data: this.data.content,
      success: function () {
        wx.showToast({
          title: '复制成功'
        })
      }
    })
  },

  handleGoHome() {
    // 只能跳转到tabBar配置页面
    wx.switchTab({
      url: '/pages/index/index',
    });

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

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})