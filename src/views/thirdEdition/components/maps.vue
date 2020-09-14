<template>
  <div id="map" class="marB20" style="width:100%;height:680px;"></div>
</template>

<script>
// import { getBshj } from '@/api/swjh'
import china from './china.json'
import mapData from './data.json'
export default {
  data () {
    return {
      myChart: null,
      maxSf: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      // 基于准备好的dom，初始化echarts实例
      this.myChart = this.$echarts.init(document.getElementById('map'))
      this.myChart.clear()
      this.myChart.showLoading()
      this.$echarts.registerMap('china', china)
      this.myChart.hideLoading()
      const options = {
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
          min: 0,
          max: 1000,
          left: 26,
          bottom: 40,
          showLabel: !0,
          text: ['高', '低'],
          pieces: [{
            gt: 100,
            label: '> 100 人',
            color: 'rgba(57, 111, 255)'
          }, {
            gte: 10,
            lte: 100,
            label: '10 - 100 人',
            color: 'rgba(50, 97, 222)'
          }, {
            gte: 1,
            lt: 10,
            label: '1 - 9 人',
            color: 'rgba(42, 82, 189)'
          }, {
            gt: 0,
            lt: 1,
            label: '疑似',
            color: 'rgba(35, 68, 156)'
          }, {
            value: 0,
            color: 'rgba(27, 53, 122)'
          }],
          show: false
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
              shadowBlur: 1,
              shadowColor: 'rgba(18, 32, 70,0.4)',
              borderColor: 'rgba(18, 32, 70)'
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
          data: mapData
        }]
      }
      this.myChart.setOption(options)
    })
  },
  methods: {
    // 更新数据
    getData () {
      // this.spinning = true
      // getBshj().then(res => {
      //   var obj = {
      //     xxmc: '合计',
      //     申报专业点总数: this.totalSum(res.result, '申报专业点总数'),
      //     入选专业点总数: this.totalSum(res.result, '入选专业点总数'),
      //     未入选专业点总数: this.totalSum(res.result, '未入选专业点总数')
      //   }
      //   obj['入选比例'] = (obj['入选专业点总数'] / obj['申报专业点总数'] * 100).toFixed(2)
      //   res.result.push(obj)
      //   res.result.map((el, index) => {
      //     el.key = index
      //   })
      //   this.data = res.result
      //   this.spinning = false
      // })
    },
    totalSum (val, key) {
      var sum = 0
      val.map(el => {
        sum += Number(el[key])
      })
      return sum
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
