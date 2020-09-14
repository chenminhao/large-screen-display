<template>
  <div>
    <a-row class="visual">
      <a-col class="visual-left" :span="7">
        <div class="visual-bg padding12">
          <p class="marginB16">教授授课情况</p>
          <a-row :gutter="16">
            <a-col :span="6" v-for="(item,index) in Object.keys(data.left)" :key="index">
              <div v-if="item==='全国外聘教师总数'" class="bg-left out-rect">
                <div class="in-rect">
                  <p>
                    <ICountUp :start-val="0" :end-val="data.left[item]" :options="options" :decimals="0" :duration="3000" />万
                  </p>
                  <p>{{ item }}</p>
                </div>
              </div>
              <div v-else class="visual-info">
                <p>
                  <ICountUp :start-val="0" :end-val="data.left[item]" :options="options" :decimals="0" :duration="3000" />万
                </p>
                <p>{{ item }}</p>
              </div>
            </a-col>
          </a-row>
        </div>
        <div class="visual-bg marginT12">
          <!-- 教授历年上讲台比例 -->
          <doughnutChart :id="'jsbl'" />
        </div>
        <div class="visual-bg marginT12">
          <!-- 历年教授上讲台比例趋势（按高校类型） -->
          <stackedAreaChart :id="'jsqs'" />
        </div>
        <div class="visual-bg marginT12">
          <!-- 高层次人才历年上讲台比例 -->
          <doughnutChart :id="'gccbl'" />
        </div>
        <div class="visual-bg marginT12">
          <!-- 高层次人才总数区域分布以及历年变化情况 -->
          <stackedAreaChart :id="'gccbh'" />
        </div>
      </a-col>
      <a-col class="visual-central" :span="10">
        <div class="visual-title">高等教育评估中心大数据可视化系统 - 第4屏 师资情况</div>
        <div>
          <!-- 教师结构分析 -->
          <jsjgfx :id="'jsjgfx'" />
        </div>
        <a-row>
          <a-col :span="12">
            <!-- 职称结构历年占比趋势 -->
            <stackedAreaChartV2 :id="'zczb'" />
          </a-col>
          <a-col :span="12">
            <!-- 年龄结构历年占比趋势 -->
            <nlzb :id="'nlzb'" />
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <!-- 学位结构历年占比趋势 -->
            <stackedAreaChartV2 :id="'xwzb'" />
          </a-col>
          <a-col :span="12">
            <!-- 辅导员与心理咨询师数量历年趋势分析 -->
            <doubleChart :id="'fdyzb'" />
          </a-col>
        </a-row>
        <a-row>
          <a-col :span="12">
            <!-- 各学校类型教授学位教师占比趋势分析 -->
            <stackedAreaChartV2 :id="'jszb'" />
          </a-col>
          <a-col :span="12">
            <!-- 各学校类型博士学位教师占比趋势分析 -->
            <stackedAreaChartV2 :id="'bszb'" />
          </a-col>
        </a-row>
      </a-col>
      <a-col class="visual-right" :span="7">
        <div class="visual-bg marginT12">
          <a-row :gutter="16">
            <p>教授授课情况</p>
            <a-col :span="12" v-for="(item,index) in Object.keys(data.right)" :key="index">
              <div v-if="item==='全国全日制在校生'" class="bg-right out-rect">
                <div class="in-rect">
                  <p>
                    <ICountUp :start-val="0" :end-val="data.right[item]" :options="options" :decimals="0" :duration="3000" />万
                  </p>
                  <p>{{ item }}</p>
                </div>
              </div>
              <div v-else class="visual-info">
                <p>
                  <ICountUp :start-val="0" :end-val="data.right[item]" :options="options" :decimals="0" :duration="3000" />万
                </p>
                <p>{{ item }}</p>
              </div>
            </a-col>
          </a-row>
          <!-- 历年各学科门类专业教师数据 -->
          <xksj :id="'xksj'" />
        </div>
        <div class="visual-bg marginT24">
          <!-- 国家级教学成果奖数据分析 (各学校类型历年国家级教学成果奖情况) -->
          <xxdjcg :id="'xxdjcg'" />
          <!-- 各学校类型历年国家级教学成果奖情况 -->
          <xxlxcg :id="'xxlxcg'" />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { PageView } from '@/layouts'
import { doughnutChart, stackedAreaChart, stackedAreaChartV2, doubleChart } from '@/components/Charts'
import { jsjgfx, xxdjcg, xxlxcg } from './components'
import ICountUp from 'vue-countup-v2'
export default {
  data () {
    return {
      spinning: false,
      newIndex: 0,
      navList: ['全国高校', '一流大学', '一流学科'],
      data: {
        left: {
          '全国教授人数': 173.8,
          '授课教授人数': 111.8,
          '全国课程门数': 27.4,
          '教授授课门数': 7.6
        },
        right: {
          '全国高校教师总数': '2165.7',
          '高校专业教师数': '1748.7'
        }
      },
      options: {
        decimalPlaces: 1
      }
    }
  },
  components: {
    PageView,
    doughnutChart,
    stackedAreaChart,
    stackedAreaChartV2,
    doubleChart,
    jsjgfx,
    xxdjcg,
    xxlxcg,
    ICountUp
  },
  methods: {
    // 全屏事件
    requestFullScreen () {
      // 判断各种浏览器，找到正确的方法
      var element = document.getElementById('homeFull')

      var requestMethod = element.requestFullScreen || // W3C
        element.webkitRequestFullScreen || // Chrome等
        element.mozRequestFullScreen || // FireFox
        element.msRequestFullScreen // IE11

      if (requestMethod) {
        requestMethod.call(element)
      } else if (typeof window.ActiveXObject !== 'undefined') { // for Internet Explorer
        // var wscript = new ActiveXObject('WScript.Shell')
        // if (wscript !== null) {
        //   wscript.SendKeys('{F11}')
        // }
      }
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
  color: #eb45a1;
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
      color: #e53ba5;
    }
    p:nth-child(2) {
      font-size: 12px;
      font-weight: 400;
      color: #fff;
      margin-bottom: 21px;
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
