<template>
    <div class="other">
        <div class="link">
            <router-link to="/other/photo">看看照片</router-link>
            
            <router-link to="/other/web">神秘网站</router-link>
        </div>
        <transition
        mode="out-in"
        enter-active-class="fadeInLeft"
        leave-active-class="fadeOutRightBig"
        >
            <router-view class="animated view" ></router-view>
        </transition>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less" scoped>
.other{
    margin-top: 70px;
    position: relative;
    background-color: rgb(244, 245, 247);
    .link{
        position: absolute;
        top: 0;
        background-color: rgba(0, 0, 0, .2);
        z-index: 99;
        width: 100%;
        transition: all ease-out 0.2s;
        a{
            display: inline-block;
            padding: 1em;
            background-color: rgba(0, 0, 0, .1);
            color:#fff;
            letter-spacing: .2em;
            transition: all ease-out 0.2s;
            position: relative;
            text-decoration: none;
            &::after{
                content: '';
                display: block;
                position: absolute;
                left: 0;
                bottom: 0px;
                width: 0%;
                height: 2px;
                //background-color: #0099ff;
                transition: all ease-out 0.3s;
            }
            &:hover{
                background-color: rgba(0, 110, 255, 0.2);
                border-radius: 0 20px 0 0;
                &::after{
                    background-color: #00aeff;
                    width: 100%;
                }
            }

        }
        .router-link-active{
            background-color: rgba(0, 110, 255, 0.3);
            &::after{
                content: '';
                width: 100%;
                background-color: #0099ff;
            }
        }
    }
    .view{
    }
}
</style>