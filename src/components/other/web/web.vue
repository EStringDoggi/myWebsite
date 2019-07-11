<template>
  <div class="web">
    <div class="bg"></div>
    <div class="contain clearfix">
      <div class="aside">
        <transition-group
          name="flip-list"
          tag="ul"
          enter-active-class="animated  zoomIn"
          leave-active-class="animated  zoomOut"
        >
          <li v-for="(item, index) in menu" :key="item.id" @click="changePage(index+1)">{{item.msg}}</li>
        </transition-group>
      </div>

      <!-- 左右翻页箭头 -->
      <div class="arrow-left">
        <i class="el-icon-arrow-left" @click="arrow(1)"></i>
      </div>
      <div class="main" :style="rotateY">
        <!-- 页面 -->
        <!-- 科普 -->
        <div class="Astronomy">
          <div class="item" v-for="(item,index) in Astronomy" :key="index">
            <a :href="item.url">
              <div class="img">
                <img :src="item.img_url" alt>
              </div>
              <div class="title">
                <span>{{item.title}}</span>
                <i>{{item.sub_title}}</i>
              </div>
            </a>
          </div>
        </div>

        <div class="fashion">
          <div class="item" v-for="(item,index) in fashion" :key="index">
            <a :href="item.url">
              <div class="img">
                <img :src="item.img_url" alt>
              </div>
              <div class="title">
                <span>{{item.title}}</span>
                <i>{{item.sub_title}}</i>
              </div>
            </a>
          </div>
        </div>

        <div class="health">
          <div class="item" v-for="(item,index) in health" :key="index">
            <a :href="item.url">
              <div class="img">
                <img :src="item.img_url" alt>
              </div>
              <div class="title">
                <span>{{item.title}}</span>
                <i>{{item.sub_title}}</i>
              </div>
            </a>
          </div>
        </div>

        <div class="interest">
          <div class="item" v-for="(item,index) in interest" :key="index">
            <a :href="item.url">
              <div class="img">
                <img :src="item.img_url" alt>
              </div>
              <div class="title">
                <span>{{item.title}}</span>
                <i>{{item.sub_title}}</i>
              </div>
            </a>
          </div>
        </div>
      </div>
      <!-- 左右翻页箭头 -->
      <div class="arrow-right">
        <i class="el-icon-arrow-right" @click="arrow(2)"></i>
      </div>
      <!-- 地面 -->
      <div class="floor clearfix">
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      //菜单
      menu: [
        {
          id:0,
          msg: "科普"
        },
        {
          id:1,
          msg: "健康"
        },
        {
          id:2,
          msg: "时尚"
        },
        {
          id:3,
          msg: "趣味"
        }
      ],
      //各个页面
      Astronomy: [
        {
          title: "NASA",
          sub_title: "美国宇航局",
          img_url: "static/img/web/nasa.jpg",
          url: "https://www.nasa.gov"
        },
        {
          title: "国际空间站直播",
          sub_title: "简称ISS",
          img_url: "static/img/web/ISS.jpg",
          url: "https://live.bilibili.com/14047"
        },
        {
          title: "鸟百科",
          sub_title: "鸟类检索",
          img_url: "static/img/web/niaobaike.jpg",
          url: "https://www.niaobaike.com/"
        }
      ],
      fashion: [
        {
          title: "香水时代",
          sub_title: "找味道",
          img_url: "static/img/web/nosetime.jpg",
          url: "https://www.nosetime.com"
        },
        {
          title: "sephora",
          sub_title: "挑礼物",
          img_url: "static/img/web/sephora.jpg",
          url: "https://www.sephora.cn/"
        }
      ],
      health: [
        {
          title: "薄荷网",
          sub_title: "卡路里查询",
          img_url: "static/img/web/boohee.jpg",
          url: "http://www.boohee.com"
        }
      ],
      interest: [
        {
          title: "太鼓达人",
          sub_title: "H5版，和朋友在线对决吧",
          img_url: "static/img/web/taiko.jpg",
          url: "https://taiko.bui.pm/"
        },
        {
          title: "精灵宝可梦百科",
          sub_title: "宝可梦世界",
          img_url: "static/img/web/baokemeng.jpg",
          url: "http://wiki.52poke.com"
        }
      ],
      rotateY: {
        transform: "rotateY(0deg)"
      },
      rotateYdeg: 0,
      nowPage: 1 //当前显示页
    };
  },
  methods: {
    changePage($event) {
      let nowPage = this.nowPage;
      let deg = 0;
      if ($event == 1 && nowPage == 4) {
        deg = 90 + this.rotateYdeg;
      } else if ($event == 4 && nowPage == 1) {
        deg = -90 + this.rotateYdeg;
      } else {
        deg = ($event - nowPage) * 90 + this.rotateYdeg;
      }
      this.rotateY.transform = "rotateY(" + deg + "deg)";
      this.nowPage = $event;
      this.rotateYdeg = deg;
    },
    arrow($event) {
      let rotateYdeg = this.rotateYdeg;
      let deg = 0;
      if ($event == 1) {
        //左箭头
        deg = 90;
        if (this.nowPage == 4) {
          this.nowPage = 1;
        } else {
          this.nowPage++;
        }
      } else {
        deg = -90;
        if (this.nowPage == 1) {
          this.nowPage = 4;
        } else {
          this.nowPage--;
        }
      }
      rotateYdeg += deg;
      this.rotateY.transform = "rotateY(" + rotateYdeg + "deg)";
      this.rotateYdeg = rotateYdeg;
    }
  }
};
</script>
<style lang="less" scoped>
@import url("less.less");
.web {
  padding-top: 4em;
  // min-height: 700px;
  padding-bottom: 1em;
  position: relative;
  .bg {
    background-position: center;
    background-attachment: fixed;
    background-size: cover;
    background-color: rgb(14, 14, 19);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 700px;
    z-index: 0;
  }
  .contain {
    z-index: 10;
    position: relative;
    display: flex;
    justify-content: space-around;
    height: 100%;
    perspective: 500px;
  }
  .floor {
    width: 2000px;
    height: 1000px;
    position: absolute;
    transition: all ease-in-out 0.3s;
    transform-style: preserve-3d;
    transform: rotateX(90deg);
    background-color: rgba(194, 194, 194, 0.1);
    & > div {
      width: 100px;
      float: left;
      border: 1px 1px 1px 1px solid #fff;
      box-sizing: content-box;
      div {
        box-sizing: content-box;
        height: 100px;
        border: 1px solid #999;
        transition: all ease-in-out 0.2s;
        &:hover {
          background-color: rgba(255, 255, 255, 0.3);
        }
        &:active {
          background-color: rgba(255, 255, 255, 0.6);
        }
      }
    }
  }
  .aside {
    float: left;
    margin-right: 2em;
    ul {
      padding: 0;
    }
    li {
      min-width: 12em;
      display: block;
      padding: 0 5em;
      margin-bottom: 3em;
      line-height: 50px;
      text-decoration: none;
      color: #fff;
      transition: all ease-out 0.4s;
      background-color: rgba(255, 255, 255, 0.3);
      word-wrap: normals;

      &:hover {
        background-color: rgba(0, 0, 0, 0.3);
        cursor: pointer;
      }
    }
  }
  .main {
    transform-style: preserve-3d;
    transform: rotateY(0deg) rotateX(0deg);
    transform-origin: 350px 50% -350px;
    transition: all ease-in-out 0.5s;
    position: relative;
    width: @page-width;
    height: @page-height;
    z-index: 9;

    & > div {
      position: absolute;
      width: @page-width;
      transition: all ease-in-out 0.5s;
      height: @page-height;
      display: flex;
      justify-content: flex-start;
      align-content: flex-start;
      flex-wrap: wrap;
    }
    & > div:nth-child(1) {
      background-color: rgba(0, 0, 0, 0.7);
      transform: translateZ(0px);
    }
    & > div:nth-child(2) {
      background-color: rgba(0, 0, 0, 0.7);
      transform: rotateY(180deg) translateZ(@page-width);
    }
    & > div:nth-child(3) {
      background-color: rgba(0, 0, 0, 0.7);
      transform-origin: 0 0; //靠左
      transform: rotateY(-90deg) translateX(-@page-width) translateZ(0.1px);
    }
    & > div:nth-child(4) {
      background-color: rgba(0, 0, 0, 0.7);
      transform-origin: 100% 100%; //靠右
      transform: rotateY(90deg) translateX(@page-width) translateZ(0.1px);
    }
    .item {
      width: @item-width;
      height: @item-height;
      position: relative;
      overflow: hidden;
      margin: 1em;
      background-color: rgba(255, 255, 255, 0.5);
      border-radius: 10px;
      transition: all ease-out 0.3s;
      box-shadow: 0px 5px 15px 3px #222;

      a {
        display: block;
        width: 100%;
        height: 100%;
        text-decoration: none;
        color: #fff;
        line-height: 50px;
        font-weight: 400;
      }
      .img {
        border-radius: 10px 10px 0 0;
        position: relative;
        overflow: hidden;
        transform: translate3d(
          0,
          0,
          0
        ); /*父元素使用transform:translate3d 属性*/
      }
      img {
        width: 300px;
        height: auto;
        transition: transform ease-out 0.3s;
      }
      .title {
        position: absolute;
        bottom: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.8);
        transform: translate3d(
          0,
          0,
          0
        ); /*父元素使用transform:translate3d 属性*/
      }
      span {
      }
      i {
        padding-left: 1em;
        font-style: normal;
        font-size: 0.8em;
        color: #eee;
      }
      &:hover img {
        transform: scale(1.1);
      }
    }
  }
  .arrow-left,
  .arrow-right {
    position: relative;
    z-index: 999;
  }
  .el-icon-arrow-left,
  .el-icon-arrow-right {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: rgb(238, 238, 238);
    font-weight: bold;
    line-height: 5em;
    padding: 0 1em;
    transition: all ease-in-out 0.2s;
    &:hover {
      cursor: pointer;
      background-color: rgba(0, 0, 0, 0.9);
      color: #fff;
    }
  }
  @media screen and (max-width: 1000px) {
    .aside {
      display: none;
    }
  }
  @media screen and (max-width: 767px) {
    .main {
      transform-origin: @transform-origin-md;
      width: @page-width-md;
      height: @page-height-md;
      & > div {
        width: @page-width-md;
        height: @page-height-md;
        justify-content: space-around;
      }
      & > div:nth-child(2) {
        transform: rotateY(180deg) translateZ(@page-width-md);
      }
      & > div:nth-child(3) {
        transform: rotateY(-90deg) translateX(-@page-width-md) translateZ(0.1px);
      }
      & > div:nth-child(4) {
        transform: rotateY(90deg) translateX(@page-width-md) translateZ(0.1px);
      }
      .item {
        width: @item-width-md;
        height: @item-height-md;
        margin: 0;
        .title {
          line-height: 1.5em;
          i {
            display: block;
            padding: 0;
          }
        }
      }
    }
  }
  @media screen and (max-width: 414px) {
    .floor {
      display: none;
    }
    .main {
      transform-origin: @transform-origin-sm;
      width: @page-width-sm;
      height: @page-height-sm;
      & > div {
        width: @page-width-sm;
        height: @page-height-sm;
        justify-content: center;
      }
      & > div:nth-child(2) {
        transform: rotateY(180deg) translateZ(@page-width-sm);
      }
      & > div:nth-child(3) {
        transform: rotateY(-90deg) translateX(-@page-width-sm) translateZ(0.1px);
      }
      & > div:nth-child(4) {
        transform: rotateY(90deg) translateX(@page-width-sm) translateZ(0.1px);
      }
      .item {
        width: @item-width-sm;
        height: @item-height-sm;
        margin: 10px;
        .title {
          line-height: 1.5em;
          i {
            font-size: 0.5em;
            display: block;
            padding: 0;
          }
        }
      }
      .el-icon-arrow-left,
      .el-icon-arrow-right {
        padding: 0 0.5em;
      }
    }
  }
}
</style>
