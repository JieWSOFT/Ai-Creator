// logs.js
const {
  get
} = require('../../utils/http.js')
const util = require('../../utils/util.js')

Page({
  data: {
    logs: []
  },
  onLoad() {

    get({
      url: '/llm/generate/logs'
    })
    this.setData({
      logs: (wx.getStorageSync('logs') || []).map(log => {
        return {
          date: util.formatTime(new Date(log)),
          timeStamp: log
        }
      })
    })
  }
})