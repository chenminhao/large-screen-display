<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper class="fullScreen" :options="swiperOption" ref="mySwiper" @someSwiperEvent="callback">
    <!-- slides -->
    <swiper-slide>
      <third-edition />
    </swiper-slide>
    <swiper-slide>
      <fourth-edition />
    </swiper-slide>
    <swiper-slide>I'm Slide 3</swiper-slide>
    <swiper-slide>I'm Slide 4</swiper-slide>
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
      }
    }
  },
  computed: {
    swiper () {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted () {
    // current swiper instance
    // 然后你就可以使用当前上下文内的swiper对象去做你想做的事了
    console.log('this is current swiper instance object', this.swiper)
    // this.swiper.slideTo(3, 1000, false)
  }
}
</script>
<style lang="less" scoped>
.fullScreen {
  width: 1920px;
  height: 1080px;
}
</style>
