<template>
    <div class="video typepage list">
        <transition-group 
        tag="ul"
        name="flip-list"
        class="clearfix"
        enter-active-class="animated  zoomIn"
        leave-active-class="animated  zoomOut"
        >
            <li class="item clearfix" v-for="item in recommData" :key="item.id">
                <a :href="item.a_href" target="_blank">
                <img :src="'https://'+item.img_url" alt="">
                <span>{{item.title}}</span>
                </a>
            </li>
        </transition-group>


    <button @click="getAnother">换一个</button>
    </div>
</template>
<script>

export default {
    data(){
        return{
            recommData:[]
        }
    },
    mounted() {
        this.getRecomment()
    },
    methods: {
        getRecomment(){
            // this.axios.get('/bilibili/index/recommend.json')
            this.axios.get('static/recommend.json')
            .then(data=>{
                console.log(data.data.data);
                this.recommData = data.data.data

                
            })
            .catch(err=>{
                console.log(err);

            })
        },
        getAnother(){

        }

    },
}
</script>
<style lang="less" scoped>
.video{
    padding-top: 4em;
    background-color: #fff;
    border: 1px solid #eee;
    iframe{
        width: 450px;
        height: 300px;
    }
    a{
        color:#222;
        text-decoration: none;
        transition: all ease-in 0.1s;
        &:hover{
            color:#00a1d6;
        }
    }

    
}
.list{
    // 列表排列
    // display: flex;
    text-align: left;
    .item{
    text-overflow: ellipsis;white-space: nowrap;overflow: hidden;
        a{
            width: 100%;
            
        }
        img{
        width: 20em;
        height: auto;
        border-radius: 5px;
        float: left;
        }
    }
    span{
        float: left;
        display: inline-block;
        word-break: break-all;
        font-size: 12px;
    }
}
.check{
    // 网格排列


}

</style>
