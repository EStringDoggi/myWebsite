<template>
  <div class="works typepage">
    <div>
      <div class="vue-mail" @mouseenter="hover(4)">
        <a href="shop.html">
        <i class="new-icon"></i>
        <img src="../../../static/img/works/vueMail.jpg" alt="">

        </a>
      </div>
    </div>
    <div class="flexBox">
      <div class="show" @mouseenter="hover(1)">
        <a href="show.html">
          <img src="../../../static/img/works/show.jpg" alt>
          <span>商城展示页</span>
        </a>
      </div>

      <div class="wechat" @mouseenter="hover(2)">
        <img src="../../../static/img/works/wechatapp.png" alt>
        <span>土狗工具箱</span>
        <div class="code">
          <img src="../../../static/img/works/wechatappcode.jpg" alt>
        </div>
      </div>
      <div class="company">
        <a href="company.html" @mouseenter="hover(3)">
          <img src="../../../static/img/works/company.png" alt>
          <span>公司展示页</span>
        </a>
      </div>
    </div>
    <div class="detail-minHeight">
      <div class="detailed">
        <em></em>
        <h4>{{title}}</h4>
        <p>{{introduce}}</p>
        <b>
          <i class="el-icon-edit" v-if="iconShow"></i>
          {{technology}}
        </b>
      </div>
    </div>
    <!-- 代码块引入 -->
    <h5 class="myCode">代码展示</h5>
    <!-- elementUI折叠面板 -->
    <!-- 通过 accordion 属性来设置是否以手风琴模式显示 -->
    <div class="myCode" v-highlight>
      <el-collapse v-model="activeName" >
        <el-collapse-item title="小程序-文字拖拽处理" name="1">
          <WechatCanvasTextMove class="codeText" v-once></WechatCanvasTextMove>
        </el-collapse-item>
        <el-collapse-item title="小程序-Canvas初始化处理" name="2">
          <WechatCanvasLoad class="codeText"></WechatCanvasLoad>
        </el-collapse-item>
        <el-collapse-item title="小程序-Canvas图片上传" name="3">
          <WechatImgUpload class="codeText"></WechatImgUpload>
        </el-collapse-item>
        <el-collapse-item title="根据浏览器内核选择懒加载图片的格式" name="4">
          <showUseWebp class="codeText"></showUseWebp>
        </el-collapse-item>
        <el-collapse-item title="倒计时" name="5">
          <showTime class="codeText"></showTime>
        </el-collapse-item>
      </el-collapse>
    </div>
  </div>
</template>
<script>
import WechatCanvasTextMove from './codeText-wechat1'
import WechatCanvasLoad from './codeText-wechat2'
import WechatImgUpload from './codeText-wechat3'
import showUseWebp from './codeText-show1'
import showTime from './codeText-show2'
// import hljs from 'highlight.js';



export default {
  components:{
    WechatCanvasTextMove,
    WechatCanvasLoad,
    WechatImgUpload,
    showUseWebp,
    showTime
  },
  data() {
    return {
      title: "最近半年做的东西",
      introduce: null,
      technology: null,
      iconShow: false,
      activeName: '1' //elementUI折叠门板参数
    };
  },
  
  methods: {
    hover($event) {
      this.iconShow = true;
      switch ($event) {
        case 1:
          this.title = "商城页面布局";
          this.introduce = `我的第一次页面布局实战。通过JavaScript及jQuery控制动画及显示，使用artTemplate模板引擎填充内容，使用ajax搭配lazyload插件做懒加载，
                    页面底部通过vue操作数据渲染，使用精灵图布局图标`;
          this.technology =
            "实现技术：html，css3，js，jQuery，ajax，artTemplate，lazyload";
          break;
        case 2:
          this.title = "土狗工具箱";
          this.introduce = `我的第一个小程序，功能有汇率换算、间隔天数计算、表情包制作、涂鸦板。
                    表情包制作基本功能是云端返回表情图后，用户通过输入文字并配置样式、拖拽文本位置，保存图片至本地。
                    用户可以上传本地图片至云端供其他用户使用，也可以选择本地相册图片做配字。
                    实现手段是Canvas绘制、拖拽事件编写、API调用、通过可见区域外Canvas原图画质保存。
                    涂鸦板的实现方式也是对Canvas的操作，调整画笔等样式，绘制涂鸦保存至本地。
                    在设置页可以删除自己上传的表情图，调用了云开发接口对数据库和文件存储的操作。
                    通过globalData全局变量搭配小程序生命周期方法，切换主题色调。`;
          this.technology = "实现技术：Canvas，WeiXin Script，云开发";
          break;
        case 3:
          this.title = "公司展示页";
          this.introduce = `页面布局、样式的实战。起初自己用js写的滚屏效果，之后发现fullPage插件可以
                    适配移动端于是引入了fullPage。通过ajax获取数据，artTemplate填充数据，bootstrap模态框展现图文，
                    代替animate方法使用velocity动画库，响应式布局`;
          this.technology =
            "实现技术：html，css3，JavaScript，jQuery，artTemplate，velocity，fullPage，Bootstrap，ajax";
          break;
        case 4:
          this.title = "vue移动端商城";
          this.introduce = `包括主页、消息列表、聊天消息、购物车、订单、个人主页、商品列表、商品详细信息、
          注册登录等11个页面。逻辑功能上实现商品参数选择、商品添加到购物车或转到订单页、购物车勾选商品结算、
          商品删改等。使用vuex作为状态管理工具，控制商品信息、个人登录状态、聊天记录等`;
          this.technology =
            "实现技术：html，css3，JavaScript，Element-UI，vue.js、vuex、vue-router";
          break;
        default:
          break;
      }
    }
  },

};
</script>
<style lang="less" scoped>
.el-collapse-item__header{
  // text-align: center;
  padding-left: 2em!important;
}
.works {
  position: relative;
}
.flexBox {
  display: flex;
  width: 100%;
  // margin-top: 100px;
  // margin-left: 10%;
  margin-bottom: 50px;
  padding: 50px 0;
  justify-content: space-around;
}
.vue-mail{
  width: 20vw;
  margin: 0 auto;
  height: 20vw;
  position: relative;
  overflow: hidden;
  margin-top: 100px;
  border-radius: 1em;
  box-shadow: 0 2px 8px 0px #888;
  transition: all ease-out 0.3s;
  a {
    display: block;
    &::after {
      content: "";
      transition: all ease-out 0.3s;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      border-radius: 1em;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
  .new-icon{
    position: absolute;
    top: 0;
    right: 0;
    width: 100px;
    height: 100px;
    background-image: url('../../../static/img/icon/new-icon.png');
    background-size: contain;
    z-index: 2;
  }
  img{
    width: 100%;
    height: auto;
  }
  &:hover{
    a::after {
    background-color: rgba(0, 0, 0, 0);
  }
  transform: translateY(-20px);
  box-shadow: 0 10px 25px #333;
  }
}

.show,
.wechat,
.company {
  float: left;
  position: relative;
  margin: 0 5em;
  border-radius: 1em;
  overflow: hidden;
  box-shadow: 0 2px 8px 0px #888;

  img {
    width: 100%;
    height: auto;
    vertical-align: bottom;
  }
  span {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    color: #fff;
    line-height: 3em;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 99;
    border-radius: 0 0 1em 1em;
  }
  a {
    display: block;
    &::after {
      content: "";
      transition: all ease-out 0.3s;
      position: absolute;
      left: 0;
      top: 0;
      width: 100%;
      height: 100%;
      z-index: 1;
      border-radius: 1em;
      background-color: rgba(0, 0, 0, 0.6);
    }
  }
}
.show,
.company {
  transition: all ease-out 0.3s;
}
.show:hover,
.company:hover {
  a::after {
    background-color: rgba(0, 0, 0, 0);
  }
  transform: translateY(-20px);
  box-shadow: 0 10px 25px #333;
}
// 微信
.wechat {
  .code {
    position: absolute;
    top: 100%;
    transition: all ease-out 0.3s;
  }
  span {
    transition: all ease-out 0.3s;
  }
}
.wechat:hover {
  span {
    opacity: 0;
  }
  .code {
    top: 0;
  }
}
// 详细介绍
h5.myCode{
  font-weight: bold;
  &::before{
    content: '';
    position: relative;
    display: inline-block;
    width: 25vw;
    height: 1px;
    background-color: #0099ff;
    vertical-align: middle;
    right: 1em;
  }
  &::after{
    content: '';
    position: relative;
    display: inline-block;
    width: 25vw;
    height: 1px;
    background-color: #0099ff;
    vertical-align: middle;
    left: 1em;
  }
}
div.myCode{
  padding: 2em;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #888;
  margin-bottom: 5em;
}
.detail-minHeight{
  min-height: 230px;
}
.detailed {
  height: auto;
  position: relative;
  background-color: #fff;
  overflow: hidden;
  transition: all ease-out 0.3s;
  padding: 1em 2em;
  text-align: left;
  box-shadow: -3px 3px 5px #aaa;
  border-radius: 10px;
  h4 {
    position: relative;
    &::before {
      content: "";
      display: block;
      position: absolute;
      top: 3px;
      left: -0.5em;
      width: 5px;
      height: 1em;
      background-color: #0099ff;
    }
  }
  p {
    text-indent: 2em;
  }
  em {
    position: absolute;
    width: 24px;
    height: 28px;
    top: 0;
    right: 0;
    background-image: url(/static/img/icon/resume.png);
    background-color: rgb(248, 248, 248);
  }
}
// 代码块
.codeText{
  text-align: left;
  background-color: rgb(40,44,52);
}
@media screen and (max-width: 767px) {
  .flexBox {
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  .show,
  .wechat,
  .company {
    a {
      max-width: 200px;
    }
    img {
      width: 200px;
      height: auto;
    }
    margin: 2em 0;
    float: none;
  }
  .vue-mail{
    width: 200px;
    height: 200px;
    .new-icon{
      width:60px;
      height: 60px;
    }
  }
  .detailed {
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .flexBox {
    flex-wrap: nowrap;
  }
  .show,
  .wechat,
  .company {
    float: left;
    flex: 1;
  }
}
</style>