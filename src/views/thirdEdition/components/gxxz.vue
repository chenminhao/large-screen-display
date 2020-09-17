<template>
  <div>
    <a-spin :spinning="loading">
      <div :id="id" style="width:100%;height:280px;margin: 0 auto;"></div>
    </a-spin>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      type: String,
      default: ''
    },
    province: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      myChart: null,
      loading: false,
      option: null,
      data: [
        {
          d: [
            { value: 3200, name: '综合院校' },
            { value: 2700, name: '理工院校' },
            { value: 1000, name: '师范院校' },
            { value: 3100, name: '其他院校' }
          ],
          x: [
            { value: 3200, name: '综合院校' },
            { value: 2700, name: '理工院校' },
            { value: 1000, name: '师范院校' },
            { value: 917, name: '财经院校' },
            { value: 868, name: '医院院校' },
            { value: 283, name: '政法院校' },
            { value: 372, name: '艺术院校' },
            { value: 120, name: '民族院校' },
            { value: 100, name: '农业院校' },
            { value: 230, name: '体育院校' },
            { value: 110, name: '林业院校' }
          ]
        },
        {
          d: [
            { value: 3100, name: '综合院校' },
            { value: 2000, name: '理工院校' },
            { value: 900, name: '师范院校' },
            { value: 3100, name: '其他院校' }
          ],
          x: [
            { value: 3100, name: '综合院校' },
            { value: 2000, name: '理工院校' },
            { value: 900, name: '师范院校' },
            { value: 917, name: '财经院校' },
            { value: 268, name: '医院院校' },
            { value: 883, name: '政法院校' },
            { value: 372, name: '艺术院校' },
            { value: 120, name: '民族院校' },
            { value: 300, name: '农业院校' },
            { value: 130, name: '体育院校' },
            { value: 110, name: '林业院校' }
          ]
        },
        {
          d: [
            { value: 1000, name: '综合院校' },
            { value: 2600, name: '理工院校' },
            { value: 1000, name: '师范院校' },
            { value: 3100, name: '其他院校' }
          ],
          x: [
            { value: 1000, name: '综合院校' },
            { value: 2600, name: '理工院校' },
            { value: 1000, name: '师范院校' },
            { value: 217, name: '财经院校' },
            { value: 868, name: '医院院校' },
            { value: 283, name: '政法院校' },
            { value: 372, name: '艺术院校' },
            { value: 820, name: '民族院校' },
            { value: 300, name: '农业院校' },
            { value: 130, name: '体育院校' },
            { value: 110, name: '林业院校' }
          ]
        }
      ]
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
      this.option = {
        title: {
          text: `高校性质占比`,
          textStyle: {
            color: '#fff',
            fontSize: 14,
            fontweight: 400
          }
        },
        tooltip: {
          trigger: 'item',
          formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        legend: {
          bottom: 0,
          textStyle: {
            color: '#fff'
          },
          data: ['综合院校', '理工院校', '师范院校', '其他院校']
        },
        series: [
          {
            name: '高校类型占比',
            type: 'pie',
            selectedMode: 'single',
            radius: [0, '30%'],
            label: {
              position: 'inner',
              formatter: '{d}%'
            },
            labelLine: {
              show: false
            },
            itemStyle: {
              color: (params) => {
                var colorArr = ['#299eff', '#6817ce', '#3066f5', '#ea45a1']
                return colorArr[params.dataIndex]
              }
            },
            data: [
              { value: 3200, name: '综合院校' },
              { value: 2700, name: '理工院校' },
              { value: 1000, name: '师范院校' },
              { value: 3100, name: '其他院校' }
            ]
          },
          {
            name: '高校类型占比',
            type: 'pie',
            radius: ['40%', '55%'],
            label: {
              position: 'outside',
              formatter: '{b}{d}%',
              color: '#fff',
              padding: [6, 0]
            },
            labelLine: {
              lineStyle: {
                color: '#fff'
              }
            },
            itemStyle: {
              color: (params) => {
                var colorArr = ['#2387d3', '#5516ac', '#4032bb', '#be3a88', '#c1497f', '#c2517b', '#c55f71', '#c86e68', '#cb7d5f', '#cc855a', '#ce8c55']
                return colorArr[params.dataIndex]
              }
            },
            data: [
              { value: 3200, name: '综合院校' },
              { value: 2700, name: '理工院校' },
              { value: 1000, name: '师范院校' },
              { value: 917, name: '财经院校' },
              { value: 868, name: '医院院校' },
              { value: 283, name: '政法院校' },
              { value: 372, name: '艺术院校' },
              { value: 120, name: '民族院校' },
              { value: 300, name: '农业院校' },
              { value: 130, name: '体育院校' },
              { value: 110, name: '林业院校' }
            ]
          }
        ]
      }
      this.myChart.setOption(this.option)
    }
  },
  watch: {
    province (val) {
      this.option.title.text = `${val}高校性质占比`
      var radomNumber = Math.ceil(Math.random() * 10) % 3
      this.option.series[0].data = this.data[radomNumber].d
      this.option.series[1].data = this.data[radomNumber].x
      this.myChart.setOption(this.option)
    }
  }
}
</script>
