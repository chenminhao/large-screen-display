<template>
  <div>
    <a-row class="visual">
      <a-col class="visual-left" :span="7">
        <div class="visual-bg padding12">
          <!-- <p style="margin-bottom: 13px;">教授授课情况</p> -->
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
        <div class="visual-bg marginT24">
          <!-- 全国教授上讲台比例 -->
          <jsbl :id="'jsbl'" :title="'全国教授上讲台比例'" :globalSize="globalSize" />
        </div>
        <div class="visual-bg marginT24">
          <!-- 全国各类型高校教授上讲台比例 -->
          <stackedAreaChart :id="'jsqs'" :globalSize="globalSize" />
        </div>
        <div class="visual-bg marginT24">
          <!-- 全国高层次人才上讲台比例前五的地区 -->
          <top5 />
          <!-- <doughnutChart :id="'gccbl'" :title="'高层次人才历年上讲台比例'" :globalSize="globalSize" /> -->
        </div>
        <div class="visual-bg marginT24">
          <!-- 全国各区域高层次人才总数 -->
          <stackedAreaChart :id="'gccbh'" :globalSize="globalSize" />
        </div>
      </a-col>
      <a-col class="visual-central" :span="10">
        <div class="visual-title">高等教育评估中心大数据可视化系统 - 第4屏 师资情况</div>
        <div class="porR">
          <p class="visual4-title">教师结构</p>
          <!-- 教师结构 -->
          <a-row :gutter="20">
            <a-col :span="6">
              <div class="visual-bg marginT24 structuralAnalysisBlock">
                <div class="structuralAnalysisP1">职称占比</div>
                <div class="structuralAnalysisP2">
                  <span>中级职称</span>
                  <img src="../../assets/images/j.png" alt="">
                </div>
                <div class="structuralAnalysisP3">
                  <span>37.83%</span>
                  <div>
                    <span>比去年</span>
                    <img src="../../assets/images/xj.png" alt="">
                    <span class="green">1.08%</span>
                  </div>
                </div>
                <div class="structuralAnalysisP4">
                  <div>
                    <p>正高级</p>
                    <p>17.25%</p>
                  </div>
                  <div>
                    <p>副高级</p>
                    <p>33.35%</p>
                  </div>
                  <div>
                    <p>其他</p>
                    <p>11.57%</p>
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="6">
              <div class="visual-bg marginT24 structuralAnalysisBlock">
                <div class="structuralAnalysisP1">学位占比</div>
                <div class="structuralAnalysisP2">
                  <span>硕士学位</span>
                  <img src="../../assets/images/j.png" alt="">
                </div>
                <div class="structuralAnalysisP3">
                  <span>45.15%</span>
                  <div>
                    <span>比去年</span>
                    <img src="../../assets/images/xj.png" alt="">
                    <span class="green">1.12%</span>
                  </div>
                </div>
                <div class="structuralAnalysisP4">
                  <div class="P4Block">
                    <p>博士学位</p>
                    <p>40.46%</p>
                  </div>
                  <div class="P4Block">
                    <p>其他</p>
                    <p>14.39%</p>
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="6">
              <div class="visual-bg marginT24 structuralAnalysisBlock">
                <div class="structuralAnalysisP1">年龄占比</div>
                <div class="structuralAnalysisP2">
                  <span>36-45岁</span>
                  <img src="../../assets/images/s.png" alt="">
                </div>
                <div class="structuralAnalysisP3">
                  <span>41.17%</span>
                  <div>
                    <span>比去年</span>
                    <img src="../../assets/images/ss.png" alt="">
                    <span class="red">0.02%</span>
                  </div>
                </div>
                <div class="structuralAnalysisP4">
                  <div>
                    <p>35岁以下</p>
                    <p>26.62%</p>
                  </div>
                  <div>
                    <p>46-55岁</p>
                    <p>23.68%</p>
                  </div>
                  <div>
                    <p>其他</p>
                    <p>8.53%</p>
                  </div>
                </div>
              </div>
            </a-col>
            <a-col :span="6">
              <div class="visual-bg marginT24 structuralAnalysisBlock">
                <div class="structuralAnalysisP1">导师占比</div>
                <div class="structuralAnalysisP2">
                  <span>博士生导师</span>
                  <img src="../../assets/images/s.png" alt="">
                </div>
                <div class="structuralAnalysisP3">
                  <span>75.15%</span>
                  <div>
                    <span>比去年</span>
                    <img src="../../assets/images/ss.png" alt="">
                    <span class="red">0.04%</span>
                  </div>
                </div>
                <div class="structuralAnalysisP4">
                  <div class="P4Block">
                    <p>硕士生导师</p>
                    <p>17.66%</p>
                  </div>
                  <div class="P4Block">
                    <p>其他</p>
                    <p>7.18%</p>
                  </div>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
        <a-row :gutter="30">
          <a-col :span="12">
            <div class="visual-bg marginT24">
              <!-- 职称结构历年占比趋势 -->
              <stackedAreaChartV2 :id="'zczb'" :globalSize="globalSize" />
            </div>
          </a-col>
          <a-col :span="12">
            <div class="visual-bg marginT24">
              <!-- 年龄结构历年占比趋势 -->
              <nlzb :id="'nlzb'" :globalSize="globalSize" />
            </div>
          </a-col>
        </a-row>
        <a-row :gutter="30">
          <a-col :span="12">
            <div class="visual-bg marginT24">
              <!-- 学位结构历年占比趋势 -->
              <stackedAreaChartV2 :id="'xwzb'" :globalSize="globalSize" />
            </div>
          </a-col>
          <a-col :span="12">
            <div class="visual-bg marginT24">
              <!-- 全国辅导员与心理咨询师数 -->
              <doubleChart :id="'fdyzb'" :globalSize="globalSize" />
            </div>
          </a-col>
        </a-row>
        <a-row :gutter="30">
          <a-col :span="12">
            <div class="visual-bg marginT24">
              <!-- 全国各类型高校教授职称教师占比 -->
              <stackedAreaChartV2 :id="'jszb'" :globalSize="globalSize" />
            </div>
          </a-col>
          <a-col :span="12">
            <div class="visual-bg marginT24">
              <!-- 全国各类型高校博士学位教师占比 -->
              <stackedAreaChartV2 :id="'bszb'" :globalSize="globalSize" />
            </div>
          </a-col>
        </a-row>
      </a-col>
      <a-col class="visual-right" :span="7">
        <div class="visual-bg">
          <a-row :gutter="16">
            <a-col :span="12" v-for="(item,index) in Object.keys(data.right)" :key="index">
              <div class="visual-map-blocks">
                <p>
                  <ICountUp :start-val="0" :end-val="data.right[item]" :options="options" :decimals="0" :duration="3000" />万
                </p>
                <p>{{ item }}</p>
              </div>
            </a-col>
          </a-row>
          <!-- 全国各学科门类专任教师 -->
          <xksj :id="'xksj'" :globalSize="globalSize" />
        </div>
        <div class="visual-bg marginT24">
          <!-- 各性质高校国家级教学成果奖获奖项目数 -->
          <xxdjcg :id="'xxdjcg'" :globalSize="globalSize" />
          <!-- 各性质高校国家级教学成果奖获奖项目数 -->
          <xxlxcg :id="'xxlxcg'" :globalSize="globalSize" />
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { PageView } from '@/layouts'
import { doughnutChart, stackedAreaChart, stackedAreaChartV2, doubleChart } from '@/components/Charts'
import { jsjgfx, xksj, nlzb, xxdjcg, xxlxcg, jsbl, top5 } from './components'
import ICountUp from 'vue-countup-v2'
export default {
  props: {
    globalSize: {
      type: String,
      default: ''
    }
  },
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
          '全国高校教师总数': 2165.7,
          '高校专业教师数': 1748.7
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
    ICountUp,
    xksj,
    nlzb,
    xxdjcg,
    xxlxcg,
    jsbl,
    top5
  },
  methods: {
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
.marginT24 {
  margin-top: 12px;
}
.marginT24 {
  margin-top: 24px;
}
.visual {
  background: url('../../assets/images/top.png') no-repeat;
  background-size: 100%;
  .visual-left {
    padding: 40px 30px 0 40px;
  }
  .visual-right {
    padding: 40px 40px 0 30px;
  }
  .visual-left,
  .visual-right {
    .visual-info {
      padding: 18px 0;
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
    .visual-bg {
      background: rgba(12, 21, 48, 0.5);
      border: 1px solid rgba(67, 154, 255, 0.15);
      box-shadow: 0px 0px 40px 0px rgba(12, 21, 48, 0.3);
      border-radius: 8px;
      background: url('../../assets/images/gg.png') no-repeat;
      background-color: #0a122d;
      background-size: 100%;
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
.visual-map-blocks {
  margin-bottom: 11px;
  padding: 8px;
  text-align: center;
  p:nth-child(1) {
    font-size: 18px;
    font-weight: 800;
    color: #29a8ff;
  }
  p:nth-child(2) {
    font-size: 12px;
    font-weight: 400;
    color: #fff;
    margin-bottom: 21px;
  }
}
.visual4-title {
  margin: 20px 0 0 12px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
}
.structuralAnalysisBlock {
  padding: 6% 5%;
  .structuralAnalysisP1 {
    font-size: 14px;
    font-weight: 400;
    color: #ffffff;
    margin-bottom: 16px;
  }
  .structuralAnalysisP2 {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    span {
      font-size: 10px;
      font-weight: 400;
      color: #29a8ff;
    }
  }
  .structuralAnalysisP3 {
    margin-bottom: 22px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    > span {
      font-size: 16px;
      color: #ffffff;
    }
    > div {
      span:nth-of-type(1) {
        margin-right: 4px;
        font-size: 10px;
        color: #29a8ff;
      }
      .green {
        font-size: 12px;
        color: #25d94b;
        font-weight: bold;
      }
      .red {
        font-size: 12px;
        font-weight: bold;
        color: #ff5984;
      }
    }
  }
  .structuralAnalysisP4 {
    display: flex;
    justify-content: space-between;
    > div {
      padding: 0 2%;
      border-right: 1px solid #3f70af;
    }
    > div:last-child {
      border-right: 1px solid transparent;
    }
    .P4Block{
      flex: 1;
      padding-left: 8%;
    }
    p:nth-of-type(1) {
      font-size: 10px;
      font-weight: 400;
      color: #29a8ff;
    }
  }
}
</style>
