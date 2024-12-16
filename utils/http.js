const API_PREFIX = "https://testapi.tymd.fun:11443/api/v1"

export const request = async (options) => {
  if (options.loading) {
    wx.showLoading({
      title: '加载中',
      mask: true
    })
  }
  return new Promise((resolve, reject) => {
    wx.request({
      url: `${API_PREFIX}${options.url}`,
      data: options.data,
      method: options.methods,
      header: {
        "Authorization": `Bearer ${wx.getStorageSync('token')}`,
      },
      success(res) {
        switch (res.data.code) {
          case 200:
            resolve(res.data)
            break;
          case 401:
            // 登录过期或者未登录
          default:
            wx.showToast({
              title: res.data.message,
              icon: 'error'
            });
            reject();
        }
      },
      fail(err) {
        console.log(err)
        reject(err)
      },
      complete() {
        if (options.loading) {
          wx.hideLoading()
        }
      }
    })
  })
}
export const post = (options) => {
  return request({
    ...options,
    methods: "POST"
  })
}
export const get = (options) => {
  return request({
    ...options,
    methods: "GET"
  })
}

export const sse = (options) => {
  const requestTask = wx.request({
    enableChunked: true,
    url: `${API_PREFIX}${options.url}`, // 需要请求的接口地址
    method: options.methods,
    data: options.data,
    responseType: "arraybuffer",
    header: {
      "Authorization": `Bearer ${wx.getStorageSync('token')}`,
      'Content-Type': 'text/plain',
    },
    success() {},
    fail: function (error) {
      // 请求失败的操作
      reject(error)
    },
    complete: function () {
      // 请求完成的操作，无论成功或失败都会执行
      console.log('请求完成');
    }
  }).onChunkReceived(res => {
    const uint8Array = new Uint8Array(res.data);
    let text = String.fromCharCode.apply(null, uint8Array);
    text = decodeURIComponent(escape(text));
    options['callback'](text)
  })
}