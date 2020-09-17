<template>
  <div>
    <a-row class="visual">
      <a-col class="visual-left" :span="7">
        <a-row :gutter="16">
          <a-col :span="8" v-for="(item,index) in Object.keys(data.left)" :key="index">
            <div v-if="item==='全国外聘教师总数'" class="bg-left out-rect">
              <div class="in-rect">
                <p>
                  <ICountUp
                    :start-val="0"
                    :end-val="data.left[item]"
                    :options="options"
                    :decimals="0"
                    :duration="3000"/>万
                </p>
                <p>{{ item }}</p>
              </div>
            </div>
            <div v-else class="visual-info">
              <p>
                <ICountUp
                  :start-val="0"
                  :end-val="data.left[item]"
                  :options="options"
                  :decimals="0"
                  :duration="3000"/>万
              </p>
              <p>{{ item }}</p>
            </div>
          </a-col>
        </a-row>
        <div class="visual-bg marginT12">
          <p class="visual-left-title">全国高层次人才</p>
          <gccrc :id="'gccrc'" />
          <gccjxqk :id="'gccjxqk'" />
        </div>
        <div class="visual-bg marginT24">
          <a-row>
            <a-col :span="17">
              <kcgm :id="'kcgm'" />
            </a-col>
            <a-col :span="7">
              <div class="visual-kcgm-info">
                <p>校均课程总门数</p>
                <p class="pink">
                  <ICountUp
                    :start-val="0"
                    :end-val="191.3"
                    :options="options"
                    :decimals="0"
                    :duration="3000"
                    ref="example1" />万
                </p>
                <p>国家精品开放课程门数</p>
                <p class="blue">
                  <ICountUp
                    :start-val="0"
                    :end-val="1.3"
                    :options="options"
                    :decimals="0"
                    :duration="3000"/>万
                </p>
                <p>全国公共课总门数</p>
                <p class="blue">
                  <ICountUp
                    :start-val="0"
                    :end-val="28.6"
                    :options="options"
                    :decimals="0"
                    :duration="3000"/>万
                </p>
              </div>
            </a-col>
          </a-row>
        </div>
      </a-col>
      <a-col class="visual-central" :span="10">
        <div class="visual-title">高等教育评估中心大数据可视化系统 - 第3屏 全国高校情况概览</div>
        <ul class="clearfix">
          <li v-for="(item,index) in navList" @click="newIndex=index" :class="newIndex===index?'active pull-left':'pull-left'" :key="index">{{ item }}</li>
        </ul>
        <div class="visual-map porR">
          <maps @openData="openData"/>
          <div class="visual-map-title">全国高校分布</div>
          <div class="visual-map-info">
            <div class="visual-map-block">
              <p>
                <ICountUp
                  :start-val="0"
                  :end-val="1265"
                  :decimals="0"
                  :duration="3000"/>
              </p>
              <p>全国本科高校数量</p>
            </div>
            <div class="visual-map-block">
              <p>
                <ICountUp
                  :start-val="0"
                  :end-val="1261"
                  :decimals="0"
                  :duration="3000"/>
              </p>
              <p>全国本科采集数量</p>
            </div>
          </div>
        </div>
        <a-row>
          <a-col :span="12">
            <gxxz :id="'gxxz'" :province="province"/>
          </a-col>
          <a-col :span="12">
            <gxlx :id="'gxlx'" :province="province"/>
          </a-col>
        </a-row>
      </a-col>
      <a-col class="visual-right" :span="7">
        <a-row :gutter="16">
          <a-col :span="8" v-for="(item,index) in Object.keys(data.right)" :key="index">
            <div v-if="item==='全国全日制在校生'" class="bg-right out-rect">
              <div class="in-rect">
                <p>
                  <ICountUp
                    :start-val="0"
                    :end-val="data.right[item]"
                    :options="options"
                    :decimals="0"
                    :duration="3000"/>万
                </p>
                <p>{{ item }}</p>
              </div>
            </div>
            <div v-else class="visual-info">
              <p>
                <ICountUp
                  :start-val="0"
                  :end-val="data.right[item]"
                  :options="options"
                  :decimals="0"
                  :duration="3000"/>万
              </p>
              <p>{{ item }}</p>
            </div>
          </a-col>
        </a-row>
        <div class="visual-bg marginT12">
          <div class="porR">
            <p class="visual-left-title">全国历年生师比分析</p>
          </div>
          <ssb :id="'ssb'" />
        </div>
        <div class="visual-bg marginT24">
          <xsqk :id="'xsqk'" />
        </div>
        <div class="visual-bg marginT24">
          <div class="visual-zybj">
            <div class="visual-zybj-info">
              <p>全国本科专业数</p>
              <p class="blue">
                <ICountUp
                  :start-val="0"
                  :end-val="764"
                  :decimals="0"
                  :duration="3000"/>
              </p>
            </div>

            <div class="visual-zybj-info">
              <p>全国专业覆盖学科数</p>
              <p class="blue">
                <ICountUp
                  :start-val="0"
                  :end-val="8.7"
                  :options="options"
                  :decimals="0"
                  :duration="3000"/>万
              </p>
            </div>
            <div class="visual-zybj-info">
              <p>全国专业布点数</p>
              <p class="blue">
                <ICountUp
                  :start-val="0"
                  :end-val="5.5"
                  :options="options"
                  :decimals="0"
                  :duration="3000"/>万
              </p>
            </div>
            <div class="visual-zybj-info">
              <p>硕士博士学位点数</p>
              <p class="blue">
                <ICountUp
                  :start-val="0"
                  :end-val="6.7"
                  :options="options"
                  :decimals="0"
                  :duration="3000"/>万
              </p>
            </div>
          </div>
          <zybj :id="'zybj'" />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { PageView } from '@/layouts'
import { gccrc, gccjxqk, kcgm, ssb, zybj, xsqk, gxxz, gxlx, maps } from './components'
import ICountUp from 'vue-countup-v2'
export default {
  data () {
    return {
      province: '',
      spinning: false,
      newIndex: 0,
      navList: ['全国高校', '一流大学', '一流学科'],
      data: {
        left: {
          '全国高校教职工总数': 173.8,
          '全国专任教师总数': 111.8,
          '全国外聘教师总数': 27.4,
          '全国高层次人才总数': 7.6,
          '全国实验技术人员数': 7.6,
          '全国教育管理人才总数': 5.8
        },
        right: {
          '全国全日制在校生': 2165.7,
          '本科生数': 1748.7,
          '博士研究生总数': 40.5,
          '硕士研究生总数': 184.7,
          '留学生总数': 24.5,
          '其他类型学生总数': 167.2
        }
      },
      options: {
        decimalPlaces: 1
      }
    }
  },
  components: {
    PageView,
    gccrc,
    gccjxqk,
    kcgm,
    ssb,
    zybj,
    xsqk,
    gxxz,
    gxlx,
    maps,
    ICountUp
  },
  methods: {
    openData (val) {
      this.province = val.name
    }
  }
}
</script>

<style lang="less" scoped>
p {
  margin: 0;
  padding: 0;
}
.pink {
  // color: #eb45a1;
  color: #29a8ff;
}
.blue {
  color: #29a4ff;
}
.marginT12 {
  margin-top: 12px;
}
.marginT24 {
  margin-top: 24px;
}
.visual {
  background: url('../../assets/images/top.png') no-repeat;
  background-size: 100%;
  .visual-left,
  .visual-right {
    padding: 40px 40px 0 40px;
    .visual-info {
      padding: 8px 0;
      margin-bottom: 12px;
      background: rgba(67, 154, 255, 0);
      border: 1px solid rgba(67, 154, 255, 0.39);
      border-radius: 4px;
      p {
        text-align: center;
      }
      p:nth-child(1) {
        font-size: 18px;
        font-weight: 800;
        color: #29a8ff;
      }
      p:nth-child(2) {
        font-size: 12px;
        font-weight: 400;
        color: #fff;
      }
    }
    .visual-bg {
      background: rgba(12, 21, 48, 0.5);
      border: 1px solid rgba(67, 154, 255, 0.15);
      box-shadow: 0px 0px 40px 0px rgba(12, 21, 48, 0.3);
      border-radius: 8px;
      background: url('../../assets/images/gg.png') no-repeat;
      background-color: #0a122d;
      background-size: 100%;
    }
    .visual-left-title {
      padding: 13px 0 0 12px;
      font-size: 14px;
      font-weight: 400;
    }
    .visual-kcgm-info {
      margin-top: 6px;
      overflow: hidden;
      p:nth-of-type(2n + 1) {
        margin-top: 26px;
        font-size: 11px;
        font-weight: 400;
      }
      p:nth-of-type(2n) {
        font-size: 18px;
        font-weight: 800;
      }
    }
    .visual-zybj {
      display: flex;
      justify-content: space-around;
      .visual-zybj-info {
        padding-top: 10px;
        p:nth-of-type(2n + 1) {
          position: relative;
          padding-left: 10px;
          font-size: 10px;
          font-weight: 400;
        }
        p:nth-of-type(2n + 1)::before {
          content: '';
          position: absolute;
          top: 2px;
          left: 0;
          width: 2px;
          height: 16px;
          background: rgba(235, 69, 161, 1);
          border-radius: 1px;
        }
        p:nth-of-type(2n) {
          font-size: 18px;
          font-weight: 800;
        }
      }
    }
  }
  .visual-central {
    .visual-title {
      height: 78px;
      line-height: 78px;
      font-size: 25px;
      font-weight: bold;
      color: rgba(255, 255, 255, 1);
      text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.35);
      text-align: center;
    }
    .clearfix {
      margin: 12px 0 0 12px;
      li {
        width: 92px;
        height: 30px;
        margin-right: 2px;
        border-bottom: 2px solid #182b4c;
        line-height: 30px;
        font-size: 12px;
        text-align: center;
        color: rgba(255, 255, 255, 0.4);
        background: rgba(69, 75, 129, 0.2);
        cursor: pointer;
      }
      li.active {
        color: rgba(255, 255, 255, 1);
        background: #2d335e;
        border-bottom: 2px solid #299cef;
      }
    }
    .visual-map {
      position: relative;
      text-align: center;
      img {
        width: 96%;
      }
      .visual-map-title {
        position: absolute;
        top: 25px;
        left: 0;
        font-size: 18px;
        font-weight: 500;
      }
      .visual-map-info {
        position: absolute;
        bottom: 30px;
        left: 0;
        .visual-map-block {
          margin-bottom: 11px;
          padding: 8px;
          background: url('../../assets/images/jxbk.png') no-repeat;
          background-size: 100% 100%;
          p:nth-of-type(2n) {
            font-size: 12px;
            font-weight: 400;
          }
          p:nth-of-type(2n + 1) {
            font-size: 26px;
            font-weight: 800;
          }
        }
      }
      .visual-map-img {
        position: absolute;
        bottom: 0;
        right: 0;
        width: 80px;
      }
    }
  }
  .visual-select {
    position: absolute;
    top: 12px;
    right: 13px;
    /deep/ .ant-select-selection {
      background-color: #0d2143;
      border: 1px solid #29a8ff;
      color: #fff;
      .ant-select-arrow-icon {
        color: #29a8ff;
      }
    }
    span {
      margin-right: 5px;
    }
  }
}
.out-rect {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 2px;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  margin-bottom: 10px;
  border-radius: 4px;
  .in-rect {
    width: 100%;
    height: 100%;
    padding: 8px 0;

    background-size: 100% 100%;
    background-repeat: no-repeat;
    p {
      text-align: center;
    }
    p:nth-child(1) {
      font-size: 18px;
      font-weight: 800;
      // color: #e53ba5;
      color: #29a8ff;
    }
    p:nth-child(2) {
      font-size: 12px;
      font-weight: 400;
      color: #fff;
    }
  }
}
.bg-left {
  background: linear-gradient(-135deg, transparent 10px, rgba(67, 154, 255, 0.39) 0) top right;
  .in-rect {
    background: linear-gradient(-135deg, transparent 8px, #080e27 0) top right;
  }
}
.bg-right {
  background: linear-gradient(135deg, transparent 10px, rgba(67, 154, 255, 0.39) 0) top right;
  .in-rect {
    background: linear-gradient(135deg, transparent 8px, #080e27 0) top right;
  }
}
</style>
