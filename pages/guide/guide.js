// pages/guide/guide.js
// pages/guide/component/select-card/select-card.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstStep: 1,
    finalStep: 3,
    step: 0,
    frame: {
      list: [
        {
          id: "frame1",
          step: 1,
          width: '58%',
          height: '26%',
          top: '26%',
          left: '8%'
        },
        {
          id: "frame2",
          step: 2,
          width: '50%',
          height: '21%',
          top: '27%',
          left: '19%'
        },
        {
          id: "frame3",
          step: 3,
          width: '49%',
          height: '20%',
          top: '31%',
          left: '19%'
        }
      ]
    },
    mark: {
      poslist: [
        {
          step: 1,
          top: '51%',
          left: '16%'
        },
        {
          step: 2,
          top: '21%',
          left: '77%'
        },
        {
          step: 3,
          top: '8%',
          left: '72%'
        }
      ]
    },
    route: {
      list: [
        {
          id: "route1",
          step: 1
        },
        {
          id: "route2",
          step: 2
        },
        {
          id: "route3",
          step: 3
        }
      ]
    },

    option: {},

    optionlist: {
      step: 0,
      option: [
        {
          msg: '我准备办理绿色通道',
          step: 1,
          finalMsg: {
            msg: '欢迎你来到暨南大学',
            append: ''
          }
        },
        {
          msg: '我不用办理绿色通道',
          step: 0,
          option: [
            {
              msg: '缴清学费',
              step: 2,
              finalMsg: {
                msg: '欢迎你来到暨南大学',
                append: ''
              }
            },
            {
              msg: '未缴清学费',
              step: 0,
              option: [
                {
                  msg: '有银行卡',
                  step: 2,
                  finalMsg: {
                    msg: '欢迎你来到暨南大学',
                    append: '记得在一周内缴清学费~'
                  }
                },
                {
                  msg: '无银行卡',
                  step: 2,
                  finalMsg: {
                    msg: '欢迎你来到暨南大学',
                    append: '记得在一周内缴清学费，可以去找辅导员补办银行卡~'
                  }
                }
              ]
            }
          ]
        }
      ]
    }

  },


  nextstep: function (e) {
    this.setData({
      step: this.data.step + 1
    });
  },

  finish: function (e) {
    wx.reLaunch({
      url: './../home/home'
    })
  },

  select: function (e) {
    var id = e.currentTarget.id;
    var option = this.data.option;
    var tmpOption;
    for (var i = 0, len = option.option.length; i < len; ++i) {
      if (option.option[i].msg == id) {
        tmpOption = option.option[i];
        break;
      }
    }

    //console.log(tmpOption);

    this.setData({
      step: tmpOption.step,
      option: tmpOption
    });
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      option: this.data.optionlist
    });
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