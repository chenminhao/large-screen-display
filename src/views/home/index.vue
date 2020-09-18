<!-- The ref attr used to find the swiper instance -->
<template>
  <swiper class="fullScreen" :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide>
      <third-edition />
    </swiper-slide>
    <swiper-slide>
      <fourth-edition />
    </swiper-slide>
    <swiper-slide>
      <fifthEdition />
    </swiper-slide>
    <swiper-slide>
      <sixthEdition />
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
      }
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
  // height: 1080px;
}
</style>
