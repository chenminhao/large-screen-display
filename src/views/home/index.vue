<template>
  <div>
    <echart :coordinates="key" />
    <div class="globalNav">
      <div @click="key=index" v-for="(item,index) in navList" :key="index" :class="index===key?'active':''">{{ item }}</div>
    </div>
  </div>
</template>

<script>
import echart from '../echart/index'
export default {
  components: { echart },
  data () {
    return {
      key: 0,
      navList: ['分布图', '流向图', '散点图']
    }
  }
}
</script>

<style lang="less" scoped>
.globalNav{
  position: fixed;
  top: 30px;
  right: 30px;
  >div{
    cursor: pointer;
    width: 100px;
    text-align: center;
    height: 32px;
    line-height: 32px;
  }
  >.active{
    color: #fff;
    background: #6cf;
  }
}
</style>
