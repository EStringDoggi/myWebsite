<template>
    <div>
        <p>
                倒计时:
        </p>
        <pre >
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
//补0方法-1
Number.prototype.addZero = function (){
    if(typeof this == 'number'){
        if(this<10){
            return "0" + this
        }
    }
    return this
}
//补0方法-2
Number.prototype.addZero2 = function (){
    return this.toString().replace(/^(\d)$/,"0$1")
} 

//倒计时
function countDown(){
    let newDate     = new Date();   //目标时间
    let nowDate     = new Date();   //当前时间
    let setHours    = 2;            //倒计时小时数
    let setMin      = 0;            //倒计时分钟数
    let setSec      = 0;            //倒计时秒数
    let countDate   = new Date();   //时间差
    let hour,minutes,second;
    newDate         = newDate.setHours(newDate.getHours() + 0,newDate.getMinutes() + setMin,newDate.getSeconds() + setSec);
    nowDate         = nowDate.getTime();
    countDate       = newDate - nowDate;

    var countTimeInterval = setInterval(() => {
        hour    = parseInt(countDate / 1000 / 60 / 60 % 24).addZero();
        minutes = parseInt(countDate / 1000 / 60  % 60).addZero();
        second  = parseInt(countDate / 1000 % 60).addZero();
        $span_hour.html(hour);
        $span_minute.html(minutes);
        $span_second.html(second);
        if(countDate <= 0){
            console.log("countDate:",countDate);
            clearInterval(countTimeInterval);
            var span = document.getElementsByClassName('time-desc')[0].children[0];
            span.innerHTML = "活动已结束"
        }
        else{
            countDate -= 1000;
        }
    }, 1000);
}`
    this.codeText = text
    hljs.initHighlightingOnLoad();
    
    // $("code").each(function(){
    //   $(this).html("<ol><li>" + $(this).html().replace(/\n/g,"\n</li><li>") +"\n</li></ol>");
    // });
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
