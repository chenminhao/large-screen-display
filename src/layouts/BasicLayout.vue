<template>
  <!-- <a-layout :class="['layout', device]">
    <a-layout :class="[layoutMode, `content-width-${contentWidth}`]" :style="{ minHeight: '100vh' }">
      <global-header
        :mode="layoutMode"
        :menus="menus"
        :theme="navTheme"
        :collapsed="collapsed"
        :device="device"
        @toggle="toggle"
      />
      <a-layout-content :style="{ height: '100%', paddingTop: fixedHeader ? '64px' : '0' }">
        <div :class="state?'global-content-contrast':'global-content'">
          <multi-tab v-if="multiTab"></multi-tab>
          <transition name="page-transition">
            <route-view />
          </transition>
        </div>
      </a-layout-content>
      <a-layout-footer>
        <global-footer />
      </a-layout-footer>
      <setting-drawer v-if="!production"></setting-drawer>
    </a-layout>
  </a-layout> -->
  <div class="global-content">
    <multi-tab v-if="multiTab"></multi-tab>
    <transition name="page-transition">
      <route-view />
    </transition>
  </div>
</template>

<script>
import { triggerWindowResizeEvent } from '@/utils/util'
import { mapState, mapActions } from 'vuex'
import { mixin, mixinDevice } from '@/utils/mixin'
import config from '@/config/defaultSettings'
import RouteView from './RouteView'
import MultiTab from '@/components/MultiTab'
import GlobalHeader from '@/components/GlobalHeader'
import GlobalFooter from '@/components/GlobalFooter'
import SettingDrawer from '@/components/SettingDrawer'

export default {
  name: 'BasicLayout',
  mixins: [mixin, mixinDevice],
  components: {
    RouteView,
    MultiTab,
    GlobalHeader,
    GlobalFooter,
    SettingDrawer
  },
  data () {
    return {
      state: false,
      production: config.production,
      collapsed: false,
      menus: []
    }
  },
  computed: {
    ...mapState({
      // 动态主路由
      // mainMenu: state => state.permission.addRouters
    }),
    contentPaddingLeft () {
      if (!this.fixSidebar || this.isMobile()) {
        return '0'
      }
      if (this.sidebarOpened) {
        return '256px'
      }
      return '80px'
    }
  },
  watch: {
    sidebarOpened (val) {
      this.collapsed = !val
    },
    '$route' (val) {
      this.state = val.path === '/work/details/contrast'
    }
  },
  created () {
    this.state = this.$route.path === '/work/details/contrast'
    // this.menus = this.mainMenu.find(item => item.path === '/').children
    this.collapsed = !this.sidebarOpened
  },
  mounted () {
    const userAgent = navigator.userAgent
    if (userAgent.indexOf('Edge') > -1) {
      this.$nextTick(() => {
        this.collapsed = !this.collapsed
        setTimeout(() => {
          this.collapsed = !this.collapsed
        }, 16)
      })
    }
  },
  methods: {
    ...mapActions(['setSidebar']),
    toggle () {
      this.collapsed = !this.collapsed
      this.setSidebar(!this.collapsed)
      triggerWindowResizeEvent()
    },
    paddingCalc () {
      let left = ''
      if (this.sidebarOpened) {
        left = this.isDesktop() ? '256px' : '80px'
      } else {
        left = (this.isMobile() && '0') || ((this.fixSidebar && '80px') || '0')
      }
      return left
    },
    menuSelect () {
      if (!this.isDesktop()) {
        this.collapsed = false
      }
    },
    drawerClose () {
      this.collapsed = false
    }
  }
}
</script>

<style lang="less">
@import url('../components/global.less');

/*
 * The following styles are auto-applied to elements with
 * transition="page-transition" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the page transition by editing
 * these styles.
 */

.page-transition-enter {
  opacity: 0;
}

.page-transition-leave-active {
  opacity: 0;
}

.page-transition-enter .page-transition-container,
.page-transition-leave-active .page-transition-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
.global-content-contrast{
  width: 100%;
}
.global-content{
  width: 1920px;
  // height: 100%;
  background: #080e27;
  color: #fff;
}
</style>
