<template>
    <div>
        <div class="head-img">
            <img src="../../../static/img/IMG_1968_2.jpg" alt>
          </div>
          <p class="name">
            <i class="el-icon-user-solid"></i>
            <span>张梓康</span>
            <span>/</span>
            <span>ZhangZiKang</span>
          </p>
          <hr>
          <p class="gender">
            <i class="el-icon-male"></i>
            <span>性别：</span>
            <span>男</span>
          </p>
          <hr>
          <p class="age">
            <i class="el-icon-user"></i>
            <span>年龄：</span>
            <span>21</span>
          </p>
          <hr>
          <p class="location">
            <i class="el-icon-location-outline"></i>
            <span>坐标：</span>
            <span>深圳</span>
          </p>
          <hr>
          <p class="education">
            <i class="el-icon-reading"></i>
            <span>专业：</span>
            <br>
            <span>计算机信息管理（专）</span>
            <br>
            <span>金融管理（本）</span>
          </p>
          <hr>
          <p class="contact">
            <i class="el-icon-s-promotion"></i>
            <span>邮箱：</span>
            <span>750441927@qq.com</span>
          </p>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
    .head-img {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      border: 5px solid #fff;
      overflow: hidden;
      background-color: rgb(255, 255, 255);
      margin: 0 auto;
      position: relative;
      img {
        width: auto;
        height: 100%;
        // border: 1px solid #ccc;
        // border-radius: 50%;
      }
      &::after {
        content: "";
        width: 98px;
        height: 98px;
        display: block;
        position: absolute;
        // background-color: #fff;
        border-radius: 50%;
        z-index: 99;
        top: 0px;
      }
    }
    p:last-child {
      line-height: 25px;
    }
    hr{
      width: 70%;
      border:1px dashed #aaa;
      border-bottom: none;
    }

            i{
                font-size: 1.2em;
            }
    .name{
        span:nth-of-type(1){
            font-size: 1.5em;
            font-weight:600;
        }
        span:nth-of-type(3){
            font-size: 0.8em;
        }
    }
    .gender,.age,.location,.education{
        span:nth-of-type(1){
            font-weight: bolder;
        }
    }

</style>