<template>
  <a-breadcrumb :style="{visibility:show?'inherit':'hidden'}" class="breadcrumb">
    <a-breadcrumb-item v-for="(item, index) in breadList.slice(numbers,breadList.length)" :key="item.name" :class="$store.getters.fontClass">
      <router-link
        v-if="item.name != name && index != breadList.length-1"
        :to="{ path: item.path === '' ? '/' : item.path }"
      >{{ item.meta.title }}</router-link>
      <span v-else class="oppo">{{ item.meta.title }}</span>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    jzwmc: {
      type: String,
      default: ''
    },
    review: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      numbers: 1,
      name: '',
      breadList: [],
      show: true
    }
  },
  computed: {
    ...mapGetters(['userInfo'])
  },
  created () {
    this.show = this.$route.path !== '/work/list'
    // if (this.gainingAccess('面包导航')) {
    //   this.numbers = 1
    // } else {
    //   this.numbers = 2
    // }
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      this.breadList = []
      this.name = this.$route.name
      this.$route.matched.forEach(item => {
        this.breadList.push(item)
      })
      // this.breadList.map(el => {
      //   if (el.path === '/work/details') {
      //     el.meta.title = this.jzwmc || localStorage.getItem('jzwmc')
      //   }
      //   if (el.path === '/work/details/major/form') {
      //     el.meta.title = this.review || localStorage.getItem('review')
      //   }

      //   if (el.path === '/work/details/dataStatistics' || el.path === '/work/dataStatistics') {
      //     var titleName = this.jzwmc || localStorage.getItem('jzwmc')
      //     if (titleName) {
      //       el.meta.title = titleName.split('类')[0] + '类' + '专业申报数据统计'
      //     }
      //     if (this.userInfo.userType === '管理员' && el.path === '/work/dataStatistics') {
      //       el.meta.title = this.userInfo.name + '专业申报数据统计'
      //     }
      //     if (this.userInfo.userType === '超级管理员' && el.path === '/work/dataStatistics') {
      //       el.meta.title = '全国专业申报数据统计'
      //     }
      //     if (this.userInfo.userType === '高教司' && this.userInfo.bmsx === 2 && el.path === '/work/dataStatistics') {
      //       el.meta.title = this.userInfo.bmmc + '专业申报数据统计'
      //     }
      //   }
      // })
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  }
}
</script>

<style scoped>
</style>
