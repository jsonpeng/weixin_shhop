var app = getApp();
const ImgLoader = require('../../template/common/img-loader/img-loader.js');

Page({
  data: {
    winWidth: 0,
    winHeight: 0,
    swiperSet: {
      indicatorDots: false, //是否显示面板指示点，默认为false;
      autoplay: true, //是否自动切换，默认为false;
      interval: 5000,//自动切换时间间隔，默认5000ms;
      circular: true,//是否采用衔接滑动
      duration: 2000,//滑动动画时长，默认为1000ms;
      vertical: true,
    },
    // 首页轮播
      indicatorDots: true, //是否显示面板指示点，默认为false;
      autoplay: true, //是否自动切换，默认为false;
      interval: 4000,//自动切换时间间隔，默认5000ms;
      circular: true,//是否采用衔接滑动
      duration: 1000,//滑动动画时长，默认为1000ms;
      vertical: false,
    imgUrls: [
      { 'image': '../../images/yidong/b1.jpg' },
      { 'image': '../../images/yidong/b1.jpg' },
      { 'image': '../../images/yidong/b1.jpg' }
    ],
   
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
  imageOnLoad: function (err, data) {
   
  },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function (res) {
    
  },
  onPullDownRefresh: function () {
    
  },

//  页面上拉触底，加载更多商品
  onReachBottom:function(){
    
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    console.log('转发');
    console.log(app.shareUrlRedirect());
    return app.shareUrlRedirect();
  },

  // 底部拨打电话
  takeCall: function (e) {
    wx.makePhoneCall({
      phoneNumber: '13971217270' //仅为示例，并非真实的电话号码
    })
  }
  


  
})