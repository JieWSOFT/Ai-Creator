// components/loading/loading.js
Component({
  options: {
    addGlobalClass: true,
  },
  /**
   * 组件的属性列表
   */
  properties: {
    loading: {
      type: Boolean,
      value: false,
    },
    loadingEnd: {
      type: Boolean,
      value: false,
    },
    loadingColor: {
      type: String,
      value: "#0066FF",
    },
    bottomText: {
      type: String,
      value: "已经到底啦~",
    },
  },

  /**
   * 组件的初始数据
   */
  data: {},

  /**
   * 组件的方法列表
   */
  methods: {},
});