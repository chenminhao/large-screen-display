<template>
  <div id="userLayout" :class="['user-layout-wrapper', device]">
    <div class="container">
      <div class="top">
        <div class="header" style="margin-bottom: 20px;color: #fff;">
          <!-- <a href="/" style="color: #fff;"> -->
          <!-- <img src="~@/assets/logo.svg" class="logo" alt="logo"> -->
          <span class="title" :class="$store.getters.fontClass">
            <span>一</span>
            <span>流</span>
            <span>专</span>
            <span>业</span>
            <!-- <span>专</span>
            <span>家</span>
            <span>网</span>
            <span>络</span>
            <span>推</span>
            <span>荐</span>
            <span>系</span>
            <span>统</span> -->
          </span>
          <div class="titleTips">网络评价推荐系统</div>
          <!-- </a> -->
        </div>
        <!-- <div class="desc">
          Ant Design 是西湖区最具影响力的 Web 设计规范
        </div> -->
      </div>

      <route-view></route-view>

      <div class="footer">
        <!-- <div class="links">
          <a href="_self">帮助</a>
          <a href="_self">隐私</a>
          <a href="_self">条款</a>
        </div> -->
        <!-- <div class="copyright">
          Copyright &copy; 东莞教育局
        </div> -->
        <span class="fontWeight6">技术支持：</span> <a class="colorF footerUrl" href="http://www.hiocs.com/" target="_Blank">教育部高等教育教学评估中心</a>
      </div>
    </div>
  </div>
</template>

<script>
import RouteView from './RouteView'
import { mixinDevice } from '@/utils/mixin'

export default {
  name: 'UserLayout',
  components: { RouteView },
  mixins: [mixinDevice],
  data () {
    return {}
  },
  mounted () {
    document.body.classList.add('userLayout')
  },
  beforeDestroy () {
    document.body.classList.remove('userLayout')
  }
}
</script>

<style lang="less" scoped>
  .footerUrl:hover{
    color: #fff;
  }
  #userLayout.user-layout-wrapper {
    height: 100%;
    padding-bottom: 0;
    &.mobile {
      .container {
        .main {
          max-width: 368px;
          width: 98%;
        }
      }
    }

    .container {
      width: 100%;
      min-height: 100%;
      padding: 110px 0 144px;
      position: relative;

      a {
        text-decoration: none;
      }

      .top {
        text-align: center;

        .header {
          // height: 44px;
          // line-height: 44px;

          .badge {
            position: absolute;
            display: inline-block;
            line-height: 1;
            vertical-align: middle;
            margin-left: -12px;
            margin-top: -10px;
            opacity: 0.8;
          }

          .logo {
            height: 44px;
            vertical-align: top;
            margin-right: 16px;
            border-style: none;
          }

          .title {
            padding-left: 10px;
            text-align: center;
            font-family: Avenir, 'Helvetica Neue', Arial, Helvetica, sans-serif;
            font-weight: 600;
            position: relative;
            top: 2px;
            span{
              font-size: 75px;
              letter-spacing:20px;
              // background: linear-gradient(to right, #cabefc, #fff);
              // -webkit-background-clip: text;
              // background-clip: text;
              // color: transparent;
              background-image: -webkit-gradient(linear, 0 50%,100% 50%, from(#cabefc), to(#fff));
              -webkit-background-clip: text;
              background-clip: text;
              -webkit-text-fill-color: transparent;
            }
          }
          .titleTips{
            text-align: center;
            border: 1px solid #fff;
            line-height: 45px;
            font-size: 24px;
            letter-spacing:18px;
            color: #fff;
            width: 368px;
            margin: 0 auto 5%;
            padding-left: 15px;
          }
        }
        .desc {
          font-size: 14px;
          color: rgba(0, 0, 0, 0.45);
          margin-top: 12px;
          margin-bottom: 40px;
        }
      }

      .main {
        min-width: 260px;
        width: 368px;
        margin: 0 auto;
      }

      .footer {
        position: absolute;
        width: 100%;
        bottom: 0;
        padding: 0 16px;
        margin: 48px 0 24px;
        text-align: center;
        color: #fff;
        .links {
          margin-bottom: 8px;
          font-size: 14px;
          a {
            color: rgba(0, 0, 0, 0.45);
            transition: all 0.3s;
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
    }
  }
</style>
