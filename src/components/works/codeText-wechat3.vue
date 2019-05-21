<template>
    <div>
        <p>
                小程序-图片上传:
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
    bindInsertEmo:function(){
    var imgurl = null
    var cloudimgurl = null
    var dbimgurl = null
    //相册选取图片
    wx.chooseImage({
      count:1,
      success: function(res) {
        //提示
        wx.showToast({
          title: '图片上传中',
          icon: 'loading'
        })
        //路径
        imgurl = res.tempFilePaths[0]
        //后缀名
        cloudimgurl = imgurl.match(/\.[^.]+?$/)[0]
        //图片存储至云端
        var nowtime = utils.formatTime(new Date())
        var openid = app.globalData.openid
        console.log(nowtime)
        console.log(openid)

        wx.cloud.uploadFile({
          cloudPath: 'image/uploadEmoPic' + openid + nowtime + cloudimgurl,
          filePath:imgurl,
          success: function (res) {
            console.log(res)
            dbimgurl = res.fileID
            //数据库新增数据
            picture.add({
              data:{
                url: dbimgurl
              },
              success:function(res){
                wx.showToast({
                  title: '图片上传成功',
                  icon:'success'
                })
                console.log(res)
              }
            })
          }
        })
      }
    })
  }`
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
