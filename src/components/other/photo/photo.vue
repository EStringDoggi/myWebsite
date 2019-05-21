<template>
  <div class="photo">
    <div class="blur" :style="bgimg"></div>
    <!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title" id="myModalLabel">{{modalTitle}}</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <img :src="modalImg" alt="" ondragstart="return false;">
      </div>
      <div class="modal-footer " >
        <button type="button" class="btn btn-default " data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
      <!-- Modal end -->
      <!-- menu -->
      <div class="menu">
        <ul>
          <li @click="changeType('all')">全部</li>
          <li @click="changeType('still')">静物</li>
          <li @click="changeType('Scenery')">风光</li>
          <li @click="changeType('animal')">动物</li>
          <li @click="changeType('others')">其他</li>
        </ul>
      </div>
      <!-- menu end-->
    <transition-group
      name="flip-list"
      tag="div"
      class="clearfix photoBox"
      enter-active-class="animated  zoomIn"
      leave-active-class="animated  zoomOut"
    >
      <div
        v-for="(item,index) in showList"
        :key="index"
        class="item"
        data-target="#myModal"
        data-toggle="modal"
        @mouseover="changeBg(item.sm_url)"
        @click="changeModal(item.url,item.title)"
        
      >
        <div class="hiddenBox">
          <img :src="item.sm_url" :alt="item.title" ondragstart="return false;">
        </div>
      <span>{{item.title}}</span>
      </div>
    </transition-group>
  </div>
</template>
<script>
export default {
  data() {
    return {
      photoList: [],
      showList:[],
      length: 0,
      bgimg: {
        background: ""
      },
      modalImg:'',
      modalTitle:'',
      pageShow:{
        all:true,
        still:false,
        Scenery:false,
        others:false
      },
      getType:"all"
      //test:"photoList"
    };
  },
  methods: {
    get() {
      this.axios
        .get("static/photo.json")
        .then(data => {
          let datas = data.data.data;
          let length = datas.length;
          console.log(this.bgimg);

          if (length > 0) {
            this.photoList = datas;
            this.showList = datas;
            this.bgimg["background"] = "url(" + datas[0].sm_url + ")";
          }
          this.length = length;
        })
        .catch(err => {
          console.log(err);
        });
    },
    changeBg(e) {
      let url = "url(" + e + ")";
      this.bgimg["background"] = url;
    },
    changeModal(param1,param2){
      this.modalImg = param1
      this.modalTitle = param2
    },
    changeType($event){
      let photoList = this.photoList
      let tempList = []
      if($event == 'all'){
        tempList = photoList
      }else{
        for(let i of photoList){
          if(i.type == $event){
            tempList.push(i)
          }
        }
      }
      this.showList = tempList
    }
  },
  mounted() {
    this.get();
  }
};
</script>
<style lang="less" scoped>
.photo {
  position: relative;
  transition: all ease-in 0.5s;
  min-height: 700px;
  // padding-left: 5em;
  // padding-right: 5em;
  .modal-content{
    // max-height: 1000px;
  }
  .modal-dialog{
    max-width: none;
  }
  .modal-body{
    position: relative;
    img{
      width: 80%;
      height: auto;
    }
  }
  .modal-footer{
    justify-content: center;
  }
  .blur {
    filter: blur(5px);
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    background-size: cover !important;
    background-attachment: fixed !important;
    background-position: center center !important;
    transition: all ease-in 0.5s;
  }
  .menu{
    padding-top: 3.5em;
    position: relative;
    ul{
    display: flex;
    padding: 0;
      li{
        flex: 1;
        line-height: 2em;
        color: #fff;
        background-color: rgba(0, 0, 0, 0.1);
        &:hover{
          background-color: rgba(0, 0, 0, 0.2);
          cursor: pointer;
        }
      }
    }
  }
  .photoBox{
        width: 70%;
        margin: 0 auto;
        display: flex;
        justify-content: flex-start;
        align-content: space-around;
        flex-wrap: wrap;
  }
  .item {
    z-index: 10;
    margin: 1em;
    position: relative;
    transition: all ease-in 0.3s;
    border-radius: 5px;
    background-color: rgba(255, 255, 255, 0.3);
    padding: 1em 1em 2em 1em;
    overflow: hidden;
    // float: left;
    &:hover {
        cursor: pointer;
      img {
        transform: scale(1.1);
      }
    }
    .hiddenBox {
      overflow: hidden;
    }

    img {
      width: 12em;
      height: auto;
      transition: all ease-out 0.3s;
      vertical-align: bottom;
    }
    span{
      position: absolute;
      width: 100%;
      left: 0;
      bottom: 0;
      line-height: 2em;
      background-color: rgba(0, 0, 0, 0.4);
      color: #fff;
    }
  }
  @media screen and (max-width: 767px) {
    .photoBox{
      justify-content: center;
    }
  }
  @media screen and (min-width: 768px) {
    .photoBox{
      justify-content: flex-start;
    }
  }
}
</style>