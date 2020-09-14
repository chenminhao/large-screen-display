<template>
  <div class="footer">
    <div class="footer-info" :class="$store.getters.fontClass">
      技术支持：
      <a href="http://www.hiocs.com/" target="_Blank">教育部高等教育教学评估中心</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'GlobalFooter',
  data () {
    return {}
  }
}
</script>

<style lang="less" scoped>
.footer {
  height: 40px;
  margin-top: 20px;
  .footer-info {
    // position: fixed;
    // left: 0;
    // bottom: 0;
    width: 100%;
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: 800;
    // background: #fff;
    a {
      color: #676767;
      font-weight: 100;
      cursor: pointer;
    }
    a:hover {
      color: #1890ff;
      text-decoration: underline;
    }
  }
  .links {
    margin-bottom: 8px;

    a {
      color: rgba(0, 0, 0, 0.45);

      &:hover {
        color: rgba(0, 0, 0, 0.65);
      }

      &:not(:last-child) {
        margin-right: 40px;
      }
    }
  }
  .copyright {
    color: rgba(0, 0, 0, 0.45);
    font-size: 14px;
  }
}
</style>
