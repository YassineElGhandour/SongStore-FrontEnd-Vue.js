import Vue from 'vue'
import Router from 'vue-router'
import Root from '@/components/HelloWorld'
import Register from '@/components/Register'
import Login from '@/components/Login'
import Songs from '@/components/Songs/Index'
import CreateSongs from '@/components/CreateSongs'
import ViewSong from '@/components/ViewSong/Index'
import EditSong from '@/components/EditSong'

Vue.use(Router)

export default new Router({
  routes: [
  	{
      path: '/',
      name: 'root',
      component: Root
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/songs',
      name: 'songs',
      component: Songs
    },
    {
      path: '/songs/add',
      name: 'createSongs',
      component: CreateSongs
    },
    {
      path: '/song/:songId',
      name: 'song',
      component: ViewSong
    },
    {
      path: '/song/edit/:songId',
      name: 'editsong',
      component: EditSong
    }
  ]
})
