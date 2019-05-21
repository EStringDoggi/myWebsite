<template>
  <div class="header" :style="{backgroundColor:backgroundColor}">
    <transition>
      <div
        class="logo animated"
        :class="{'rubberBand':logoAnimate}"
        @mouseenter="enterLogo"
        @mouseleave="leaveLogo"
      >
        <img src="../../static/img/logo.png" alt>
      </div>
    </transition>
    <ul class="pcMenu">
      <li>
        <router-link to="/works">作品展示</router-link>
      </li>
      <li>
        <router-link to="/resume">关于我</router-link>
      </li>
      <li>
        <router-link to="/trend">动态</router-link>
      </li>
      <li>
        <router-link to="/other/photo">随便看看</router-link>
      </li>
    </ul>
    <div class="colorSelect" :style="colorSelect" @click="listDisplay($event)">
      <span class="colorSelectBtn" ></span>
      <i class="el-icon-arrow-down"></i>
      <ul class="colorList" :style="colorListDisplay">
        <li v-for="(item,index) of colorList" :key="index" :style="{backgroundColor:item}"></li>
      </ul>
    </div>

    <!-- 移动端菜单按钮 -->
    <el-button class="el-icon-more" @click="showMenu"></el-button>
    <div class="menu" :style="menuHeight">
      <ul>
        <li @click="menuHeight.height = '0px'">
          <router-link to="/works">作品展示</router-link>
        </li>
        <li @click="menuHeight.height = '0px'">
          <router-link to="/resume">关于我</router-link>
        </li>
        <li @click="menuHeight.height = '0px'">
          <router-link to="/trend">动态</router-link>
        </li>
        <li @click="menuHeight.height = '0px'">
          <router-link to="/other/photo">随便看看</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      logoAnimate: false,
      menuHeight:{
        height:'0px'
      },
      colorSelect:{
        backgroundColor:'#0099ff'
      },
      colorListDisplay:{
        display:'none'
      },
      colorList:['#ff3232','#ff5132','#ff8432','#fffc32','#6cff32','#32ff4d',
      '#32ffd3','#0099ff','#3258ff','#6f32ff','#b432ff','#ff32e4','#ff3287',
      '#000','#ccc',],
      backgroundColor:'#0099ff'
    };
  },
  methods: {
    enterLogo() {
      this.logoAnimate = true;
      console.log("enterLogo,", this.logoAnimate);
    },
    leaveLogo() {
      this.logoAnimate = false;
      console.log("leaveLogo,", this.logoAnimate);
    },
    showMenu(){
      this.menuHeight.height == '0px'?this.menuHeight.height='300px':this.menuHeight.height='0px'
      console.log("height:",this.menuHeight.height);
      
    },
    listDisplay($event){
      // console.log($event.target.className);
      if($event.target.tagName.toLowerCase() != 'ul' && $event.target.tagName.toLowerCase() != 'li'){
        if(this.colorListDisplay['display'] == 'none'){
          this.colorListDisplay['display'] ='block'
        }else{
          this.colorListDisplay['display'] ='none'
        }
      }
      else if($event.target.tagName.toLowerCase() == 'li'){
        // console.log($event.toElement.style.backgroundColor);
        this.backgroundColor = $event.toElement.style.backgroundColor
        this.colorSelect['backgroundColor'] = $event.toElement.style.backgroundColor
        
      }
    }
  },
  mounted() {
    var that = this
    document.body.addEventListener('click',function(e){
      console.log(e.target.className);
      if(e.target.tagName.toLowerCase() != 'li'&&e.target.className !='el-icon-arrow-down'){
        // console.log(that.colorListDisplay['display']);
        that.colorListDisplay['display'] = 'none'
        // that.listDisplay()
      }
      
    })
  },
};
</script>
<style lang='less' scoped>
/*
##0099FF 
##FFFFCC 
##666699
*/

.header {
  // background-color: #0099ff;
  padding-left: 10%;
  padding-right: 10%;
  height: 70px;
  // margin-top: 40px;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
  transition: all 0.3s ease-out;
  
  .logo {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    vertical-align: middle;
    float: left;
    border: 5px solid #fff;
    position: absolute;
    // top: -2em;
    z-index: 99;
    img {
      width: 100%;
      height: auto;
      border-radius: 50%;
    }
  }
  .pcMenu {
    display: inline-block;
    text-align: right;
    position: absolute;
    right: 6em;
    // padding-right: 5em;
  }
  .pcMenu li {
    display: inline-block;
    line-height: 70px;
    padding: 0 10px;
    position: relative;
    transition: all ease-in-out 0.2s;
    a {
      color: #ffffff;
      text-decoration: none;
      display: block;
      width: 100%;
      transition: all ease-in-out 0.1s;
      height: 100%;
    }
    &::before{
        content:'';
        display: block;
        opacity: 0;
        position: absolute;
        bottom: -1em;
        left: 50%;
        transform: translateX(-50%) rotateZ(60deg);
        width: 1.5em;
        height: 1.5em;
        background-image: url(../../static/img/icon/paw.png);
        background-size: cover; 
        transition: 0.3s;      
    }
    &:nth-child(2n)::before{
        bottom: -2em;
    }
    &:hover {
      a{
        transform: translateY(10px);
        text-shadow: 0px 2px 2px rgb(12, 85, 182);
      }
      &::before{
        opacity: 1;
      }
    }

  }
  .colorSelect{
    width: 1em;
    height: 1em;
    display: inline-block;
    position: absolute;
    vertical-align: middle;
    border: 3px solid #fff;
    box-sizing: content-box;
    top: 50%;
    right: 2em;
    transform: translateY(-50%);
    border-radius: 3px;
    .colorSelectBtn{
      
    }
    &:hover{
      cursor: pointer;
    }
    i{
    vertical-align: super;
    color: #fff;
    }
    .colorList{
      position: absolute;
      top: 2em;
      right: -5px;
      background-color: #fff;
      padding: 0 5px;
      padding-top: 1em;
      border-radius: 3px;
      box-shadow: 0 3px 5px #888;
      cursor:initial;
        li{
          width: 1em;
          height: 1em;
          background-color: #ccc;
          border: 2px solid rgb(236, 236, 236);
          margin:0 0 1em 0;
          cursor: pointer;
          display: inline-block;
          float: left;
        }
        &::before{
          content: '';
          position: absolute;
          top: -16px;
          right: 5px;
          border-top-color: transparent;
          border-right-color: transparent;
          border-bottom-color: rgb(255, 255, 255);
          border-left: transparent;
          border-style: solid;
          border-width: 8px;
          z-index: 999;
          

        }
    }
  }
  .el-icon-more {
    padding: 0 1em;
    background-color: transparent;
    border: none;
    color: rgb(236, 236, 236);
    line-height: 70px;
    position: absolute;
    right: 3em;
    &:focus{
      outline:none;
    }
  }
  .menu{
    z-index: 999;
    position: absolute;
    width: 100%;
    top: 70px;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    overflow: hidden;
    transition: all ease-in-out 0.3s;
    ul{
      padding: 0;
      text-align: center;
      margin: 0;
      li{
        width: 100%;
        display: block;
        border-bottom: 1px dashed rgb(145, 145, 145);
        position: relative;
        a{
          color: #fff;
          text-decoration: none;
          display:block;
          width: 100%;
          height: 100%;
        }
        &::before{
        content:'';
        display: none;
        position: absolute;
        top: 1em;
        left: 30%;
        // transform: translateX(-50%) rotateZ(60deg);
        width: 1.5em;
        height: 1.5em;
        background-image: url(../../static/img/icon/paw_white.png);
        background-size: cover;       
    }
        &:last-child{
          border-bottom:none;
        }
        &:hover{
          background-color: rgba(0, 0, 0, 0.1);
          &::before{
            display: block;
          }
        }
      }
    }
    a{
      line-height: 4em;
    }
  }
}
@media screen and (max-width: 767px) {
  .header .pcMenu{
    display: none;
  }
  .header .colorSelect{
    display: none;
  }
}
@media screen and (min-width: 768px) {
  .header .pcMenu  {
    display: block;
  }
  .el-icon-more{
    display: none;
  }
}
</style>
