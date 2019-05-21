<template>
    <div>
        <p>
                小程序-Canvas初始化处理:
        </p>
        <pre>
            <code class="lang-javascript">
                {{codeText}}
            </code>
        </pre>
    </div>
</template>
<script>
import hljs from 'highlight.js';
import 'highlight.js/styles/atom-one-dark.css'
export default {
    data() {
        return {
            codeText:null
        }
    },
    mounted() {
        var text = ""
        text +=`
    bindimageload: function (e) {
    var that            = this
    var imgwidth        = e.detail.width
    var initImgW        = e.detail.width
    var imgheight       = e.detail.height
    var initImgH        = e.detail.height
    //获取手机屏幕长宽
    var screenWidth     = that.data.windowWidth
    var screenHeight    = that.data.windowHeight
    screenWidth         = screenWidth * 0.88        //两边保留边距
    var vh              = screenHeight/100          //获取vh
    var ratio           = imgwidth / imgheight      //获取比例

    if (ratio > 2) {
      wx.showToast({
        title: '宽高比超过2:1',
        image: '/img/icon/icon26.png',
        duration: 2000
      })
    }
    else if (ratio < 0.5) {
      wx.showToast({
        title: '宽高比低于1:2',
        image: '/img/icon/icon26.png',
        duration: 2000
      })
    }
    else {
      //画布宽度 单位rpx
      var viewwidth  = 660
      //根据宽度定义画布高度 单位rpx
      var viewheight = viewwidth / ratio

      //绘制图片的宽高 单位px
      imgwidth  = screenWidth
      imgheight = imgwidth / ratio

      //当画布按比例放置，高度超过60vh时，固定高度，缩放宽度
      if (imgheight > 60 * vh) {
        var _imgheight  = imgheight
        imgheight       = 60*vh
        imgwidth        = imgheight * ratio
        var rpx_ratio   = _imgheight / imgheight
        viewwidth       = viewwidth / rpx_ratio
      }
      //预览canvas宽度与实际输出canvas宽度的比值作为文字大小的比值
      var textratio = initImgW/imgwidth
      that.setData({
        canvasWidth: viewwidth,
        //canvasHeight单位rpx，定义画布高度
        canvasHeight: viewheight,
        imgwidth: imgwidth,
        imgheight: imgheight,
        initImgW: initImgW,
        initImgH: initImgH,
        textRatio: textratio
      })
      that.canvasfunction()
    }
  }
        `
    this.codeText = text
    hljs.initHighlightingOnLoad();

    },
}
</script>
<style scoped>
p{
    margin: 0;
    padding: 5px;
    font-size: 1.2em;
    font-weight: bold;
    /* background-color: rgb(238, 243, 252); */
    background-color: rgb(40,44,52);
    color: burlywood;

}
</style>
