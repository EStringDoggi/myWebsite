<template>
  <div class="">
    <em class="page"></em>
    <!-- <div class="head-img"> -->
      <!-- <img src="../../../static/img/IMG_1968_2.jpg" alt> -->
    <!-- </div> -->
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
      <span>
        <a href="mailto:750441927@qq.com">
          750441927@qq.com
        </a>
      </span>
      <br>
      <a href="https://github.com/EStringDoggi" target="_blank" rel="github">
        <img src="../../../static/img/icon/icon_github.png" alt="" srcset="" width="20" height="20">
        <span>github</span>
      </a>
      <a href="https://blog.csdn.net/u011364720" target="_blank" rel="noopener noreferrer">
        <img src="../../../static/img/icon/icon_csdn.png" alt="" srcset="" width="20" height="20">
        <span>CSDN</span>
      </a>
    </p>
  </div>
</template>
<script>
export default {};
</script>
<style lang="less" scoped>
@media screen and(max-width:767px) {
  p {
    text-align: center;
  }
}
@media screen and (min-width: 768px) {
  p {
    text-align: left;
    padding-left: 4em;
  }
}
div:first-child{
  position:relative;
  padding: 2em 0;
}
.page {
  position: absolute;
  width: 24px;
  height: 28px;
  top: 0;
  right: 0;
  background-image: url(/static/img/icon/resume.png);
  background-color: rgb(248, 248, 248);
}
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
  }
  &::after {
    content: "";
    width: 98px;
    height: 98px;
    display: block;
    position: absolute;
    border-radius: 50%;
    z-index: 99;
    top: 0px;
  }
}
p:last-child {
  line-height: 25px;
}
hr {
  width: 70%;
  border: 1px dashed #aaa;
  border-bottom: none;
}
i {
  font-size: 1.2em;
}
a{
  text-decoration: none;
  color: #424242;
  &:hover{
    color:chocolate;
  }
}
.name {
  span:nth-of-type(1) {
    font-size: 1.5em;
    font-weight: 600;
  }
  span:nth-of-type(3) {
    font-size: 0.8em;
  }
}
.gender,
.age,
.location,
.education {
  span:nth-of-type(1) {
    font-weight: bolder;
  }
}
.contact{
  a{
    margin-right: 2em;
  }
}
</style>