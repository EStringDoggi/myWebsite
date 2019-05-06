<template>

    <div class="works typepage">
            <div class="flexBox">
                <div class="show">
                    <a href="show.html">
                        <img src="../../../static/img/works/show.jpg" alt="">
                        <span>商城展示页</span>
                        
                    </a>
                </div>

                <div class="wechat">
                        <img src="../../../static/img/works/wechatapp.png" alt="">
                        <span>土狗工具箱</span>
                        <div class="code">
                            <img src="../../../static/img/works/wechatappcode.jpg" alt="">
                        </div>
                        
                </div>
                <div class="company">
                    <a href="company.html">
                        <img src="../../../static/img/works/company.png" alt="">
                        <span>公司展示页</span>
                    </a>
                </div>
            </div>
    </div>
</template>
<script>

export default {
    
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
        margin-bottom: 100px;
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
@media screen and (max-width: 767px) {
  .flexBox{
      flex-wrap: wrap;
      justify-content: center;
      align-items:center;
      flex-direction:column;
  }
  .show,.wechat,.company{
      a{
          max-width: 300px;
      }
      margin: 2em 0;
      float: none;
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