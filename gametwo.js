const app=getApp()
Page({

rabbitnum:0,
guessnum:0,
  /**
   * 页面的初始数据
   */
  data: {
    isbigger:false,
    issmaller:false,
    isit:false,
    isbegin:false,
    countDownNum:'1',
  },

initnum:function(){
this.rabbitnum=Math.floor(Math.random()*101)
this.setData({
    isbegin:true
  })
},

guess:function(e){
this.guessnum=e.detail.value
console.log(this.rabbitnum)
console.log(this.guessnum)
if(this.guessnum<this.rabbitnum){
  this.setData({
    isbigger:true
  })
  this.countdown()
}
if(this.guessnum==this.rabbitnum){
  this.setData({
    isit:true
  })
  this.countdown()
  this.setData({
    isbegin:false
  })
}
if(this.guessnum>this.rabbitnum){
  this.setData({
    issmaller:true
  })
  this.countdown()
}




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
        isit:false,
        issmaller:false,
        isbigger:false,
      })
    }

  },1000)
})
  },
  

})