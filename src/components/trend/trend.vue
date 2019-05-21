<template>
  <div class="trend typepage">
    <transition-group
      name="flip-list"
      tag="ul"
      enter-active-class="animated  zoomIn"
      leave-active-class="animated  zoomOut"
    >
      <li v-for="(item,index) in data" v-bind:key="index">
        <div class="head">
          <img src="../../../static/img/logo.png" alt>
        </div>
        <div class="text">
          <b>{{item.name}}</b>
          <p>{{item.text}}</p>
        </div>
        <div class="time">
          <b>{{item.date}}</b>
          <b>{{item.time}}</b>
        </div>
      </li>
    </transition-group>

    <button @click="getData" class="getMore" :style="btnStyle">{{btnText}}</button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      data: "", //总data
      num: 0, //已显示条数
      totalNum: 0, //总条数
      totalData: "",
      btnText: "加载更多", //按钮文字
      btnStyle:{
          display:''
      }
    };
  },
  methods: {
    get() {
      this.axios
        .get("static/trend.json")
        .then(data => {
          console.log(data.data.data);
          let totalNum = data.data.data.length; //长度
          let totalData = data.data.data.reverse(); //总数据
          let temp = [];
          let showNum = 0;
          this.totalNum = totalNum;
          this.totalData = totalData;
          showNum = totalNum > 4 ? 5 : totalNum; //初次显示次数
          console.log("showNum:", showNum);
          for (let i = 0; i < showNum; i++) {
            temp.push(totalData[i]);
          }
          console.log(temp);
          this.data = temp;
          this.num = showNum;
          // console.log("num",showNum);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getData() {
        if(this.btnText == "加载中..."){
            console.log("不允许点击");
            
            return;
        }
      this.btnText = "加载中..."
      
      //总数大于已显示条数，继续取
      //可抽取条数
      let num = this.totalNum - this.num;
      let showNum = num > 4 ? 5 : num;
      let index = this.num; //当前坐标
      let temp = this.data;
      let totalData = this.totalData;
      let that = this

      if (showNum == 0) {
        console.log("no data");
        this.btnText = "没有更多数据了"
        setTimeout(() => {
            that.btnStyle.display = 'hidden'
        }, 1000);
      } else {
        setTimeout(function() {
            console.log("settimeout");
            for (let i = 0; i < showNum; i++) {
                temp.push(totalData[index]);//temp与this.data指向同一个空间
                index++;
            }
            //that.data = temp;
            that.num += showNum;
            that.btnText = "加载更多"
        }, 1000);
      }
    }
  },
  mounted() {
    this.get();
  }
};
</script>
<style lang="less" scoped>
.trend {
  margin-top: 100px;
  ul {
    padding-right: 40px;
    li {
      text-align: left;
      margin: 1em 0;
      border: 1px solid #ddd;
      border-radius: 5px;
      box-shadow: 0 0 5px #ccc;
      padding: 1em;
      background-color: #fff;
      .flexBox {
        display: flex;
        word-break: break-word;
      }
      .head {
        display: inline-block;
        vertical-align: top;
        margin-right: 0.5em;
        border-radius: 5px;
        overflow: hidden;

        img {
          width: 30px;
          height: 30px;
          vertical-align: middle;
        }
      }
      .text {
        vertical-align: top;
        display: inline-block;
        b {
          line-height: 1.5em;
        }
        p {
          margin: 0;
          line-height: 1.5em;
        }
      }
      .time {
        text-align: right;
        // position: absolute;
        position: relative;
        right: 3em;
        b {
          text-align: right;
          margin-left: 1em;
          font-weight: normal;
          font-size: 0.8em;
          color: #ccc;
        }
      }
    }
  }
  .getMore {
    //   border: 1px solid #aaa;
    position: relative;
    border: none;
    display: block;
    background-color: transparent;
    color: #aaa;
    padding: 1em 0;
    font-size: 1em;
    width: 100%;
    margin: 0 0 1em 0;
    transition: all ease-out 0.3s;
    border-radius: 10px;
    box-shadow: 0 3px 15px #aaa;
    outline: none;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
      color: #111;
      cursor: pointer;
    }
  }
}
</style>