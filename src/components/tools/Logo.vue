<template>
  <div
    class="logo"
    :style="[s]">
    <router-link :to="{name:'index'}">
      <LogoSvg alt="logo" />
      <h1 v-if="showTitle" style="line-height: 26px;font-family: cursive;text-align: center;font-size: 18px;">
        东莞教育局
        <br> <span
          style=";font-size: 14px;max-width: 150px;display: inline-block;white-space: nowrap;text-overflow:ellipsis;overflow:hidden;">{{ title }}</span>
      </h1>
    </router-link>
  </div>
</template>

<script>
// 矢量图下载https://www.easyicon.net/
import LogoSvg from '@/assets/university.svg?inline'

export default {
  name: 'Logo',
  components: {
    LogoSvg
  },
  data () {
    return {
      s: {

      }
    }
  },
  created () {
    if (this.showTitle) {
      this.a = {
        display: 'flex',
        paddingLeft: '0px',
        justifyContent: 'space-around'
      }
    }
  },
  props: {
    title: {
      type: String,
      default: '疫情防控数据填报系统',
      required: false
    },
    showTitle: {
      type: Boolean,
      default: true,
      required: false
    }
  }
}
</script>
<style scoped>
  .logo2{
    display: flex;
    padding-left: 0px;
    justify-content: space-around;
  }
</style>
