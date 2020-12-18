<template>
  <a-config-provider :locale="locale">
    <div id="app">
      <router-view />
    </div>
  </a-config-provider>
</template>

<script>
import zhCN from 'ant-design-vue/lib/locale-provider/zh_CN'
import { AppDeviceEnquire } from '@/utils/mixin'

export default {
  mixins: [AppDeviceEnquire],
  data () {
    return {
      locale: zhCN
    }
  }
}
</script>
<style>
#app {
  height: 100%;
  /* background: #080f28; */
}
.ant-select-dropdown-menu {
  background-color: #0d2143;
}
.ant-select-dropdown-menu-item {
  color: #fff !important;
}
.ant-select-dropdown-menu-item-selected {
  background-color: #438cc1 !important;
}
.ant-select-dropdown-menu-item-active:not(.ant-select-dropdown-menu-item-disabled) {
  background-color: #438cc1 !important;
}
</style>
