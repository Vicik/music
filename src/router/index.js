import Vue from 'vue'
import Router from 'vue-router'
import index from '@/pages/index/index'
import rankList from '@/pages/rank/RankList'
import songList from '@/pages/public/SongList'
import Music from '@/pages/music/Music'
import rankDetail from '@/pages/rank/RankDetail'
import my from '@/pages/my/my'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      name: 'index',
      component: index
    },
    {
      path: '/songList',
      name: 'songList',
      component: songList
    },
    {
      path: '/music/:id',
      name: 'Music',
      component: Music
    },
    {
      path: '/rankList',
      name: 'rankList',
      component: rankList
    },
    {
      path: '/detail/:id',
      name: 'detail',
      component: rankDetail
    },
    {
      path: '/my',
      name: 'my',
      component: my
    }
  ]
})
