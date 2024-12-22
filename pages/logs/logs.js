// logs.js
import {
  typeList
} from '../../utils/type'
const {
  get
} = require('../../utils/http.js')
const util = require('../../utils/util.js')

Page({
  data: {
    logs: [],
    typeList,
    isEmpty: false,
    isLoading: true
  },
  onLoad() {
    get({
      url: '/llm/generate/logs'
    }).then(({data:logs}) => {
      //处理logs 解析
      logs = logs.map(log => {
        let {
          params
        } = log
        const titles = []
        params = JSON.parse(params)
        const temp = typeList[params?.editType]
        if (temp) {
          const {
            edit
          } = temp
          for (const [key, value] of Object.entries(params)) {
            if (key !== "editType") {
              titles.push({
                label: edit?.filter(item => item.key == key)[0]?.label,
                value: value
              })
            }
          }
        }
        return {
          ...log,
          editType: params?.editType,
          titles,
        }
      })
      if (!logs.length) {
        this.setData({
          isEmpty: true
        })
      }
      this.setData({
        logs,
        isLoading: false
      })
    })
  },
  onDetail(e){
    const log = e.currentTarget.dataset.item
    wx.navigateTo({
      url: '/pages/detail/detail',
      success: (res) => {
        res.eventChannel.emit('params', {
          params: log,
          type: 'result'
        })
      }
    })
  },
})