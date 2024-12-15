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
            wx.showToast({ title: res.data.message, icon: 'error' });
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
  return request({ ...options, methods: "POST" })
}
export const get = (options) => {
  return request({ ...options, methods: "GET" })
}