<style scoped>
  .lists-container{
    padding: 0 10px 0 20px;
  }
</style>

<template>
  <div class="container">
    <div class="headers-container">
      <m-head iconType='icon-yunduo' :inputShow="false" :text="true" :trends="false"></m-head>
    </div>
    <div class="lists-container">
      <lists :lists="my"></lists>
    </div>
    <lines></lines>
    <div class="lists-container">
      <lists :lists="settings"></lists>
    </div>
  </div>
</template>

<script>
import MHead from '@/public/MHead'
import Lists from '@/public/Lists'
import Lines from '@/public/Lines'

export default {
  data () {
    return {
      my: [
        {
          lIcon: 'icon-yinyue',
          listTxt: '本地音乐',
          extra: '0',
          slide: false
        },
        {
          lIcon: 'icon-zuijinbofang',
          listTxt: '最近播放',
          extra: '83',
          slide: false
        },
        {
          lIcon: 'icon-diantai',
          listTxt: '我的电台',
          extra: '0',
          slide: false
        },
        {
          lIcon: 'icon-wodeshoucang',
          listTxt: '我的收藏',
          extra: '专辑/歌手/视频/专栏',
          slide: false
        }
      ],
      settings: [
        {
          lIcon: 'icon-shezhi',
          listTxt: '设置',
          extra: '',
          slide: false
        },
        {
          lIcon: 'icon-yejianmoshi',
          listTxt: '夜间模式',
          extra: '',
          slide: true
        },
        {
          lIcon: 'icon-shizhong',
          listTxt: '定时关闭',
          extra: '',
          slide: false
        },
        {
          lIcon: 'icon-icon-test',
          listTxt: '音乐闹钟',
          extra: '',
          slide: false
        }
      ]
    }
  },
  components: {
    MHead,
    Lists,
    Lines
  }
}
</script>
