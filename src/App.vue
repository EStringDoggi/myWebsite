<template>
  <div id="app">
    <myHeader></myHeader>
    <transition
     mode="out-in"
    enter-active-class="fadeInLeft"
    leave-active-class="fadeOutRight"
    >
    <router-view class="animated views"/>
  </transition>
    <myBottom></myBottom>
  </div>
</template>

<script>
import myHeader from './components/header'
import myBottom from './components/bottom'
import 'animate.css/animate.css'

export default {
  name: 'App',
  components:{
    myHeader,
    myBottom
  }
}
</script>

<style>

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  /* color: #2c3e50; */
  /* margin-top: 40px; */
  /* overflow: hidden; */
  /* transform: perspective(100px); */
}
.views{
  min-height: 700px;
}
</style>
