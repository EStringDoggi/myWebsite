<template>
    <div>
        <p>
                根据浏览器内核选择懒加载图片的格式:
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
// 判断浏览器内核
    function getKernel(){
        if(userAgent.indexOf('WebKit') > -1||userAgent.indexOf('Chrome') > -1){
            //支持webp格式
            return true
        }
        return false
    }
//替换后缀名
function useWebp(){
    if(getKernel()){
        let imgs = document.querySelectorAll(".fashion img");
        let tempUrl = ""
        let i = 0
        for(let index of imgs){
            tempUrl = index.getAttribute('data-original')
            imgs[i].setAttribute('data-original',tempUrl.replace(/\.png/g,'.webp'))
            i++;
        }
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
