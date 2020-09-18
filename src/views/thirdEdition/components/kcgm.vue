<template>
  <div>
    <a-spin :spinning="loading">
      <div :id="id" style="width:100%;height:275px;"></div>
      <ul class="kcgm-ul clearfix">
        <li @click="newIndex=0" :class="newIndex===0?'active':''">公共必修课</li>
        <li @click="newIndex=1" :class="newIndex===1?'active':''">专业课</li>
        <li @click="newIndex=2" :class="newIndex===2?'active':''">公共选修课</li>
      </ul>
    </a-spin>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      myChart: null,
      loading: false,
      newIndex: 0
    }
  },
  mounted () {
    this.loadDom()
  },
  methods: {
    resize () {
      this.myChart && this.myChart.resize()
    },
    loadDom () {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById(this.id))
      this.myChart.clear()
      var currentIndex = -1
      const option = {
        title: {
          text: '课程规模环比图',
          top: 12,
          left: 12,
          textStyle: {
            color: '#fff',
            fontWeight: 400,
            fontSize: 14
          }
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        color: ['#eb45a1', '#29a4ff', '#ef886f'],
        radar: {
          center: ['50%', '50%'],
          radius: 70,
          name: {
            textStyle: {
              color: '#fff'
            }
          },
          axisLine: {
            show: true,
            lineStyle: {
              color: '#1b3a69'
            }
          },
          splitLine: {
            show: true,
            lineStyle: {
              color: '#1b3a69'
            }
          },
          splitArea: {
            areaStyle: {
              color: ['transparent']
            }
          },
          indicator: [
            { name: '20人以下', max: 1000 },
            { name: '20~40人', max: 1000 },
            { name: '40~60人', max: 1000 },
            { name: '60~80人', max: 1000 },
            { name: '80~100人', max: 1000 },
            { name: '100人以上', max: 1000 }
          ]
        },
        series: [{
          type: 'radar',
          areaStyle: {},
          data: [
            {
              value: [430, 1000, 800, 500, 500, 900],
              name: '公共必修课'
            },
            {
              value: [500, 900, 800, 300, 400, 100],
              name: '专业课'
            },
            {
              value: [550, 400, 800, 500, 400, 200],
              name: '公共选修课'
            }
          ]
        }]
      }
      this.myChart.setOption(option)
      setInterval(() => {
        var dataLen = option.series[0].data.length
        // 取消之前高亮的图形
        this.myChart.dispatchAction({
          type: 'downplay',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
        currentIndex = (currentIndex + 1) % dataLen
        this.newIndex = currentIndex
        this.myChart.setOption(option)
        // 高亮当前图形
        this.myChart.dispatchAction({
          type: 'highlight',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
        // 显示 tooltip
        this.myChart.dispatchAction({
          type: 'showTip',
          seriesIndex: 0,
          dataIndex: currentIndex
        })
      }, this.globalTimes)
    }
  },
  watch: {
    globalSize (val) {
      this.resize()
    }
  }
}
</script>
<style lang="less" scoped>
.kcgm-ul {
  border-top: 1px solid rgba(41, 168, 255, 0.2);
  padding: 12px 0;
  margin-left: 2%;
  width: 98%;
  li {
    position: relative;
    text-align: center;
    float: left;
    width: 33.33%;
  }
  li::before {
    cursor: pointer;
    content: '';
    position: absolute;
    top: -16px;
    left: 50%;
    width: 10px;
    height: 10px;
    margin-left: -5px;
    border-radius: 50%;
    background: #a1a1a1;
  }
  li.active::before {
    content: '';
    position: absolute;
    top: -16px;
    left: 50%;
    width: 10px;
    height: 10px;
    margin-left: -5px;
    border-radius: 50%;
    background: #eb45a1;
  }
  li.active::after {
    content: '';
    position: absolute;
    top: -30px;
    left: 50%;
    width: 0;
    height: 0;
    margin-left: -5px;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 10px solid #eb45a1;
  }
}
</style>
