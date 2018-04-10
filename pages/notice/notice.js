// pages/notice/notice.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searchText: '',
    inputText: '',
    displaylist:[
    ],
    isLoading: false,
    count: 0,
    lenPerTime: 100,
    noMoreFlag: false
  },

  bindKeyInput: function (e) {
    this.setData({
      inputText: e.detail.value
    })
  }, 

  lower: function(e) {
    console.log('lower');
    this.loading();
  },

  scroll: function(e) {
    console.log(e.detail)
  },

  loading: function(){
    if (this.data.noMoreFlag) return;

    this.setData({
      isLoading: true
    });

    //console.log('loading');

    var page = this;

    wx.request({
      url: 'https://www.zhxy.xyz/notice.php', //仅为示例，并非真实的接口地址
      data: {
        start: page.data.count,
        len: page.data.lenPerTime,
        search: page.data.searchText
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      method: 'POST',
      success: function (res) {
        //console.log(res.data);

        var displaylist = page.data.displaylist;

        for (var i = 0; i < res.data.length; i++) {
          var temp = {};
          temp.title = res.data[i].title;
          temp.date = res.data[i].time;
          temp.call = res.data[i].called;
          temp.content = res.data[i].content;
          displaylist.push(temp);
        }

        page.setData({
          count : page.data.count + page.data.lenPerTime,
          displaylist: displaylist,
          isLoading: false,
          noMoreFlag: res.data.length < page.data.lenPerTime
        })
      }
    })


  },

  search: function (e) {
    this.setData({
      count : 0,
      displaylist: [],
      searchText: this.data.inputText,
      noMoreFlag: false
    });

    this.loading();
    
  },

  sendContent: function (e){
    var index = e.currentTarget.id;

    //console.log(this.data.displaylist[index]);

    var app = getApp();

    app.noticeData = this.data.displaylist[index];
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    this.loading();
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})