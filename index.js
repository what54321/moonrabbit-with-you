const ans=[{
  content:"别想了。"
},
{
  content:"学会拒绝。"
},
{
  content:"期望和现实不同。"
},
{
  content:"不要浪费精力。"
},
{
  content:"大胆一点。"
},
{
  content:"毫无疑问。"
},
{
  content:"好运会在不远处。"
},
{
  content:"会后悔的。"
},
{
  content:"你可以的。"
},
{
  content:"坚持就会有结果。"
},
{
  content:"或许还有别的选择。"
},
{
  content:"全力以赴吧！"
},
{
  content:"听听别人怎么说。"
},
{
  content:"直觉有时候很准。"
},
{
  content:"机不可失。"
},
{
  content:"再等等看。"
},
{
  content:"这辈子都不可能。"
},
{
  content:"值得奋斗。"
},
{
  content:"众所周知。"
},
{
  content:"另择吉日。"
},
{
  content:"地点不太恰当。"
},
{
  content:"如你所愿。"
},
{
  content:"与你无关。"
},
{
  content:"拭目以待。"
},
{
  content:"放手。"
},
{
  content:"遇上方知有。"
},
{
  content:"顺其自然。"
},
{
  content:"再过几年。"
},
{
  content:"别白费力。"
},
{
  content:"试试就会有结果。"
},
{
  content:"做最坏的打算。"
},
{
  content:"障碍重重。"
},
{
  content:"有点耐心。"
}
]

const cars=[{
  content:"吃好喝好最重要。"
},
{
  content:"早睡早起身体好。"
},
{
  content:"饭前一水果，医生远离我。"
},
{
  content:"早起一杯水，结石冲冲走。"
},
{
  content:"热量高不止会长胖。"
},
{
  content:"咖啡太多，小心胃痛！"
},
{
  content:"适度运动是必需。"
},
{
  content:"睡眠不足，智力 down down"
},
{
  content:"浓茶要少喝。"
},
{
  content:"新鲜水果最营养。"
},
{
  content:"冰牛奶能解辣！"
},
{
  content:"绿植要尽量远离卧室。"
},
{
  content:"早餐真的很重要。"
},
{
  content:"拒绝暴饮暴食。"
},
{
  content:"餐餐都要营养均衡。"
},
{
  content:"疫情期间，不离口罩。"
},
{
  content:"交流真的很治愈。"
},
{
  content:"爸爸妈妈的生日快到了吗？"
},
{
  content:"压力需要释放。"
},
{
  content:"偶尔尝试一下新事物吧。"
},
{
  content:"视力健康也是身体健康的一部分。"
},
{
  content:"眼保健操真的会有用。"
},
{
  content:"多和朋友出去逛逛。"
},
{
  content:"家务也可以作为运动。"
},
{
  content:"尝尝粗粮。"
},
{
  content:"西兰花可以预防癌症。"
},
{
  content:"家人一直在你身边。"
},
{
  content:"别冷落任何一个朋友。"
},
{
  content:"绿色壁纸不能护眼！"
},
{
  content:"保温杯里泡枸杞。"
},
{
  content:"吸烟有害健康。"
},
{
  content:"适量小酌，不要贪杯。"
},
{
  content:"笑口要常开。"
}
]

var _animation;
var _animationIndex = 0; 
var _animationIntervalId = -1; 
const _ANIMATION_TIME = 2500; 

Page({

  /**
   * 页面的初始数据
   */
  data: {
    timer:'',
    countDownNum:'2',
    ytzt:Math.floor(Math.random()*4),
    music:'stopmusic',
    onplay:false,
    answer:" ",
    kuang:'kong',
    animation: '',

  },


  onReady: function () {
    _animationIndex = 0;
    _animationIntervalId = -1;
    this.data.animation = ''; 
  },

  onShow: function () {
    _animation = wx.createAnimation({
      duration: _ANIMATION_TIME,
      timingFunction: 'linear', 
      delay: 0,
      transformOrigin: '50% 50% 0'
    })
  },


  rotateAni: function (n) {
    _animation.rotate(360 * (n)).step()
    this.setData({
      animation: _animation.export()
    })
  },

  /**
   * 开始旋转
   */
  startAnimationInterval: function () {
    var that = this;
    that.rotateAni(++_animationIndex); // 进行一次旋转
    _animationIntervalId = setInterval(function () {
      that.rotateAni(++_animationIndex);
    },  _ANIMATION_TIME); // 每间隔_ANIMATION_TIME进行一次旋转
  },

  /**
   * 停止旋转
   */
  stopAnimationInterval: function () {
    if (_animationIntervalId> 0) {
      clearInterval(_animationIntervalId);
      _animationIntervalId = 0;
    }
  },



  getanswer: function(){
    this.setData({
      answer:ans[Math.floor(Math.random()*33)].content,
      kuang:'xiaoxi'
    })

    this.countdown();
  },



  getcare: function(){
    this.setData({
      answer:cars[Math.floor(Math.random()*33)].content,
      kuang:'xiaoxi'
    })
    this.countdown();
  },


  playm:function(){
    this.startAnimationInterval()
    this.setData({
      music:'playmusic',
      onplay:true
    })

    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = '捧着风的少女';
    backgroundAudioManager.epname = '捧着风的少女';
    backgroundAudioManager.singer = 'Hea2t';
    backgroundAudioManager.coverImgUrl = '';
    backgroundAudioManager.src = 'http://music.163.com/song/media/outer/url?id=1385614920.mp3';
          backgroundAudioManager.play();

  },
  

  stopm:function(){
    this.stopAnimationInterval()
    this.setData({
      music:'stopmusic',
      onplay:false
    })
    const backgroundAudioManager = wx.getBackgroundAudioManager()
    backgroundAudioManager.title = '捧着风的少女';
    backgroundAudioManager.epname = '捧着风的少女';
    backgroundAudioManager.singer = 'Hea2t';
    backgroundAudioManager.coverImgUrl = '';
    backgroundAudioManager.src = 'http://music.163.com/song/media/outer/url?id=1385614920.mp3';
    backgroundAudioManager.pause();
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
        countDownNum:2,
        answer:" ",
        kuang:'kong'
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