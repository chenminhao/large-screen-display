<template>
  <div id="map" class="marB20" style="width:100%;"></div>
</template>

<script>
import china from './china.json'
import mapData from './data.json'
export default {
  props: {
    openData: {
      type: Function,
      default: () => {}
    },
    globalSize: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      myChart: null,
      option: null,
      mapData: [],
      currentIndex: -1
    }
  },
  created () {
    this.mapData = this.sortByKey(mapData, 'value')
  },
  mounted () {
    document.getElementById('map').style.height = document.getElementById('map').clientWidth / (796 / 660) + 'px'
    this.loadDom()
  },
  watch: {
    globalSize (val) {
      document.getElementById('map').style.height = document.getElementById('map').clientWidth / (796 / 660) + 'px'
      this.resize()
    }
  },
  methods: {
    resize () {
      this.myChart && this.myChart.resize()
    },
    // 更新数据
    loadDom () {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById('map'))
      this.myChart.clear()
      this.myChart.showLoading()
      this.$echarts.registerMap('china', china)
      this.myChart.hideLoading()
      this.option = {
        tooltip: {
          triggerOn: 'mousemove',
          formatter: function (params) {
            var a = '<span>' + params.name + '</span>'
            var b = '<span style="color:' + 'rgba(23, 240, 204)' + '">' + params.value ? params.value : 0 + '%</span>'
            return [a, b].join(' :  ')
          },
          backgroundColor: 'rgba(29, 38, 71)',
          // 额外附加的阴影
          extraCssText: 'box-shadow:0 0 4px rgba(11, 19, 43,0.8);'

        },
        visualMap: {
          type: 'continuous',
          orient: 'horizontal',
          max: 70,
          inRange: {
            color: ['#0B1533', '#2b62a2', '#45a1fd']
          }
        },
        geo: {
          map: 'china',
          roam: !1,
          scaleLimit: {
            min: 1,
            max: 2
          },
          zoom: 1,
          label: {
            show: false
          },
          emphasis: {
            label: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#0d1940',
              borderColor: '#65b2c3',
              borderWidth: 1.5
            },
            emphasis: {
              areaColor: 'rgba(23, 240, 204)',
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              borderWidth: 0
            }
          }
        },
        series: [{
          name: '地域分布',
          type: 'map',
          geoIndex: 0,
          data: this.mapData
        }]
      }
      this.myChart.setOption(this.option)
      this.timedTasks()
      setInterval(() => {
        this.timedTasks()
      }, 4000)
    },
    // 定时任务
    timedTasks () {
      var dataLen = 4
      // 取消之前高亮的图形
      this.myChart.dispatchAction({
        type: 'downplay',
        seriesIndex: 0,
        dataIndex: this.currentIndex
      })
      this.currentIndex = (this.currentIndex + 1) % dataLen
      this.$emit('openData', this.mapData[this.currentIndex])
      this.myChart.setOption(this.option)
      // 高亮当前图形
      this.myChart.dispatchAction({
        type: 'highlight',
        seriesIndex: 0,
        dataIndex: this.currentIndex
      })
      // 显示 tooltip
      this.myChart.dispatchAction({
        type: 'showTip',
        seriesIndex: 0,
        dataIndex: this.currentIndex
      })
    },
    sortByKey (array, key) {
      return array.sort(function (a, b) {
        var x = b[key]
        var y = a[key]
        return ((x < y) ? -1 : ((x > y) ? 1 : 0))
      })
    }
  }
}
</script>

<style lang="less" scoped>
.img {
  position: absolute;
  top: 0;
  width: 100%;
  height: 700px;
  // background: url('./1.png') no-repeat 100% 100%;
  // opacity: ;
}
</style>
