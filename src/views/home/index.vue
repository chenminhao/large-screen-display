<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper class="fullScreen" :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <third-edition :globalSize="globalSize" />
    </swiper-slide>
    <swiper-slide>
      <fourth-edition :globalSize="globalSize" />
    </swiper-slide>
    <swiper-slide>
      <fifth-edition :globalSize="globalSize" />
    </swiper-slide>
    <swiper-slide>
      <sixth-edition :globalSize="globalSize" />
    </swiper-slide>
  </swiper>
</template>

<script>
import { fifthEdition, fourthEdition, sixthEdition, thirdEdition } from '../index'
export default {
  name: 'Carrousel',
  components: { fifthEdition, fourthEdition, sixthEdition, thirdEdition },
  data () {
    return {
      swiperOption: {
      },
      globalSize: ''
    }
  },
  created () {
    window.onresize = () => {
      this.globalSize = String((new Date()).getTime())
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  }
}
</script>
<style lang="less" scoped>
.fullScreen {
  width: 100%;
}
</style>
