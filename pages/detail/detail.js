// pages/detail/detail.js
import {
  get
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
        createParams = {}
      } = data
      if (type === 'create') {
        //设置title
        const _titles = []
        typeList[createParams.editType]?.edit.forEach(item => {
          _titles.push(`${item.label}：${createParams[item.key]}`)
        })
        this.setData({
          editType: createParams.editType,
          titles: _titles
        })
        // 执行创建功能
        this.handleCreate(createParams)
      } else if (type === 'result') {
        // 生成记录过来的查询
      }
    })
  },

  async handleCreate(params) {
    wx.showLoading({
      title: 'AI生成中',
      mask: true
    })
    const res = await get({
      url: '/llm/essay/generate',
      data: {
        ...params,
        topic: params.content
      }
    })
    if (res.code == 200) {
      this.setData({
        content: res.data
      })
    }
    wx.hideLoading()
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