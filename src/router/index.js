import Vue from 'vue'
import Router from 'vue-router'
import other from '../components/other/other.vue'
import resume from '../components/resume/resume.vue'
import trend from '../components/trend/trend.vue'
import works from '../components/works/works.vue'
import photo from '../components/other/photo/photo.vue'
import video from '../components/other/video/video.vue'
import web from '../components/other/web/web.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/other',
      component:other,
      children:[
        {
          path:'/other/photo',
          component:photo
        },
        {
          path:'/other/video',
          component:video
        },
        {
          path:'/other/web',
          component:web
        },
      ]
    },
    {
      path:'/resume',
      component:resume
    },
    {
      path:'/trend',
      component:trend
    },
    {
      path:'/works',
      component:works
    },
    {
      path:'*',
      redirect:'/resume'
    }
  ]
})

