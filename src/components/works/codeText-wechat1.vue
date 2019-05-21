<template>
    <div >
        <div>
            <p>
                小程序-文字拖拽处理:
            </p>
            <pre>
                <code class="lang-javascript">
                    {{codeText}}
                </code>
            </pre>
        </div>
 
    </div>
</template>
<script>
// import showdown from 'showdown';
// import hljs from 'highlight.js';
// import 'highlight.js/styles/atom-one-dark.css'


export default {
    data() {
        return {
            codeText:"hello"
        }
    },
    components:{
        // showdown
    },
    mounted() {
        // var converter = new showdown.Converter();
        var code = ""
            code += `
    canvasmoveon: function (e) {
    var that = this
    if (that.data.MoveLock == true) {
      var x                   = e.touches[0].x
      var y                   = e.touches[0].y
      var textsize            = that.data.textsize          //文本大小
      var textlength          = that.data.textlength        //字数
      var imgwidth            = that.data.imgwidth
      var imgheight           = that.data.imgheight
      var textConfirmBtnTop   = that.data.textConfirmBtnTop //按钮top位置
      var textConfirmBtnLeft  = that.data.textConfirmBtnLeft//按钮left位置
      var rpx                 = that.data.rpx
      var mytext              = wx.createCanvasContext("canvas-text-move")
      var text                = that.data.textvalue
      var color               = that.data.fontColor
      var textBoldSelect      = that.data.textBoldSelect    //是否粗体

      if (x < 0) {
        // 限制文本不超出左侧区域
         x = 0 
      }
      if (x + (textlength * textsize) > imgwidth) {
        // 限制文本不超出右侧区域
         x = imgwidth - (textlength * textsize) 
        }
      if (y - (textsize) < 0) {
        // 限制文本不超出顶部区域
         y = textsize 
        }
      if (y > imgheight) {
        // 限制文本不超出底部区域
         y = imgheight 
        }
      textConfirmBtnTop = y - (50 * rpx) - textsize
      textConfirmBtnLeft = x
      if (textConfirmBtnTop < 50 * rpx) {
        // 如果按钮超出显示范围顶部，则显示到文字底部
        textConfirmBtnTop += textsize * 2
      }
      mytext.setFillStyle(color)
      mytext.setFontSize(textsize)
      mytext.fillText(text, x, y)
      if (textBoldSelect) {
        // 设置字体加粗
        mytext.fillText(text, x - 0.5, y)
        mytext.fillText(text, x + 0.5, y)
        mytext.fillText(text, x, y - 0.5)
        mytext.fillText(text, x, y + 0.5)
      }
      mytext.draw()
      that.setData({
        x: x,
        y: y,
        textConfirmBtnTop: textConfirmBtnTop,
        textConfirmBtnLeft: textConfirmBtnLeft
      })
    }
  }      
        `
        code += ""
        this.codeText = code
        // hljs.initHighlightingOnLoad();
        // var preLen = document.getElementsByTagName('pre').length
        // console.log("length:",preLen);
        
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
