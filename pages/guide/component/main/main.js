// pages/guide/component/main/main.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },

  /**
   * 组件的属性列表
   */
  properties: {
    homeURL: String,
    clear: Boolean,
    bgFolder: String
  },

  /**
   * 组件的初始数据
   */
  data: {
    bg: {
      clearURL: 'map_clear.png',
      dimURL: 'map_dim.png'
    },
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
