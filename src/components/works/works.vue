<template>

    <div class="works typepage">
            <div class="flexBox" >
                <div class="show" @mouseenter="hover(1)">
                    <a href="show.html">
                        <img src="../../../static/img/works/show.jpg" alt="">
                        <span>商城展示页</span>
                    </a>
                </div>

                <div class="wechat" @mouseenter="hover(2)">
                        <img src="../../../static/img/works/wechatapp.png" alt="">
                        <span>土狗工具箱</span>
                        <div class="code">
                            <img src="../../../static/img/works/wechatappcode.jpg" alt="">
                        </div>
                </div>
                <div class="company">
                    <a href="company.html" @mouseenter="hover(3)">
                        <img src="../../../static/img/works/company.png" alt="">
                        <span>公司展示页</span>
                    </a>
                </div>
            </div>
            <div class="detailed">
                <em></em>
                <h4>{{title}}</h4>
                <p>{{introduce}}</p>
                <b><i class="el-icon-edit" v-if="iconShow"></i>{{technology}}</b>
            </div>
    </div>
</template>
<script>

export default {
    data() {
        return {
            title :"最近半年做的东西",
            introduce :null,
            technology :null,
            iconShow:false
        }
    },
    methods: {
        hover($event){  
            this.iconShow = true
            switch ($event) {
                case 1:
                    this.title = "商城页面布局"
                    this.introduce = `我的第一次页面布局实战。通过JavaScript及jQuery控制动画及显示，使用artTemplate模板引擎填充内容，使用ajax搭配lazyload插件做懒加载，
                    页面底部通过vue操作数据渲染，使用精灵图布局图标`
                    this.technology = "实现技术：html，css3，js，jQuery，ajax，artTemplate，lazyload"
                    break;
                case 2:
                    this.title = "土狗工具箱"
                    this.introduce = `我的第一个小程序，功能有汇率换算、间隔天数计算、表情包制作、涂鸦板。
                    表情包制作基本功能是云端返回表情图后，用户通过输入文字并配置样式、拖拽文本位置，保存图片至本地。
                    用户可以上传本地图片至云端供其他用户使用，也可以选择本地相册图片做配字。
                    实现手段是Canvas绘制、拖拽事件编写、API调用、通过可见区域外Canvas原图画质保存。
                    涂鸦板的实现方式也是对Canvas的操作，调整画笔等样式，绘制涂鸦保存至本地。
                    在设置页可以删除自己上传的表情图，调用了云开发接口对数据库和文件存储的操作。
                    通过globalData全局变量搭配小程序生命周期方法，切换主题色调。`
                    this.technology = "实现技术：Canvas，WeiXin Script，云开发"
                    break;
                case 3:
                    this.title = "公司展示页"
                    this.introduce = `页面布局、样式的实战。起初自己用js写的滚屏效果，之后发现fullPage插件可以
                    适配移动端于是引入了fullPage。通过ajax获取数据，artTemplate填充数据，bootstrap模态框展现图文，
                    代替animate方法使用velocity动画库，响应式布局`
                    this.technology = "实现技术：html，css3，JavaScript，jQuery，artTemplate，velocity，fullPage，Bootstrap，ajax"
                    break;
                default:
                    break;
            }
            
        }
    }
}
</script>
<style lang="less" scoped>
    .works{
        position: relative;

        // height: 500px;
        // display: inline-block;
    }
    .flexBox{
        display: flex;
        width: 100%;
        margin-top: 100px;
        padding: 50px 0;
        margin-bottom: 50px;
    }
    .show,.wechat,.company{
        float: left;
        //flex: 1;
        position: relative;
        margin: 0 2em;
        border-radius: 1em;
        overflow: hidden;
        box-shadow: 0 2px  8px 0px #888;

        img{
            width: 100%;
            height: auto;
            vertical-align: bottom;
        }
        span{
            position: absolute;
            left: 0;
            bottom: 0;
            width: 100%;
            color: #fff;
            line-height: 3em;
            background-color: rgba(0,0,0,.5);
            z-index: 99;
            border-radius:0 0 1em 1em;
        }
        a{
            display: block;
            &::after{
                content: '';
                transition: all ease-out 0.3s;
                position: absolute;
                left: 0;
                top: 0;
                width: 100%;
                height: 100%;
                z-index: 1;
                border-radius: 1em;
                background-color: rgba(0,0,0,.6);
            }
            
        }

    }
    .show,.company{
        transition: all ease-out 0.3s;
    }
    .show:hover,.company:hover{
        a::after{
                    background-color: rgba(0,0,0,0);
                }
        transform: translateY(-20px);
        //transform: rotateY(180deg);
        box-shadow: 0 10px  25px #333;

    }
    .wechat{
        .code{
            position: absolute;
            top: 100%;
            transition: all ease-out 0.3s;
        }
        span{
            transition: all ease-out 0.3s;

        }
    }
    .wechat:hover{
        span{
            opacity: 0;
        }
        .code{
            top:0;
        }
    }
    .detailed{
        // height: 200px;
        height: auto;
        position: relative;
        background-color: #fff;
        overflow: hidden;
        transition: all ease-out 0.3s;
        padding: 1em 2em;
        text-align: left;
        box-shadow: -3px 3px 5px #aaa;
        border-radius: 10px;
        h4{
            position: relative;
            &::before{
                content: '';
                display: block;
                position: absolute;
                top: 3px;
                left: -0.5em;
                width: 5px;
                height: 1em;
                background-color: #0099ff;
            }
        }
        p{
            text-indent: 2em;
        }
        em{
            position: absolute;
            width: 24px;
            height: 28px;
            top: 0;
            right: 0;
            background-image: url(/static/img/icon/resume.png);
            background-color: rgb(248, 248, 248);
        }

    }
@media screen and (max-width: 767px) {
  .flexBox{
      flex-wrap: wrap;
      justify-content: center;
      align-items:center;
      flex-direction:column;
  }
  .show,.wechat,.company{
      a{
          max-width: 200px;
      }
      img{
          width: 200px;
          height: auto;
      }
      margin: 2em 0;
      float: none;
  }
  .detailed{
      display: none;
  }
}
@media screen and (min-width: 768px) {
  .flexBox{
      flex-wrap: nowrap;
  }  
  .show,.wechat,.company{
      float: left;
      flex:1
  }
}
</style>