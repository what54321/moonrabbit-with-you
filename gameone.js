const moonrabbit=0
Page({

  /**
   * 页面的初始数据
   */
  data: {
    iswin:false,
    isfail:false,
    isdraw:false,
    countDownNum:'1',
    moonrabbitselect:'wu'
  },



selectshitou:function(e){
let moonrabbit=Math.floor(Math.random()*3)

  if(moonrabbit==0){
    this.setData({
      moonrabbitselect:'shitou',
      isdraw:true
    })
  }
  if(moonrabbit==1){
    this.setData({
      moonrabbitselect:'jiandao',
      iswin:true
    })
  }
  if(moonrabbit==2){
    this.setData({
      moonrabbitselect:'bu',
      isfail:true
    })
  }

    this.countdown()

  },


  selectjiandao:function(e){
    let moonrabbit=Math.floor(Math.random()*3)
    
      if(moonrabbit==0){
        this.setData({
          moonrabbitselect:'shitou',
          isfail:true
        })
      }
      if(moonrabbit==1){
        this.setData({
          moonrabbitselect:'jiandao',
          isdraw:true
        })
      }
      if(moonrabbit==2){
        this.setData({
          moonrabbitselect:'bu',
          iswin:true
        })
      }
    
        this.countdown()
    
      },

      selectbu:function(e){
        let moonrabbit=Math.floor(Math.random()*3)
        
          if(moonrabbit==0){
            this.setData({
              moonrabbitselect:'shitou',
              iswin:true
            })
          }
          if(moonrabbit==1){
            this.setData({
              moonrabbitselect:'jiandao',
              isfail:true
            })
          }
          if(moonrabbit==2){
            this.setData({
              moonrabbitselect:'bu',
              isdraw:true
            })
          }
        
            this.countdown()
        
          },







  countdown:function(){
    let that=this;
    let countDownNum=that.data.countDownNum;
    that.setData({
      timer:setInterval(function(){
        countDownNum--;
        that.setData({
          countDownNum:countDownNum
        })

    if(countDownNum==0){

      clearInterval(that.data.timer);
      that.setData({
        countDownNum:1,
        iswin:false,
        isfail:false,
        isdraw:false,
        moonrabbitselect:'wu'
      })
    }

  },1000)
})
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