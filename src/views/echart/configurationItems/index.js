export const distributionChart = function (echartData) {
  function sortByKey (array, key) {
    return array.sort(function (a, b) {
      var x = b[key]
      var y = a[key]
      return ((x < y) ? -1 : ((x > y) ? 1 : 0))
    })
  }
  echartData = sortByKey(echartData, 'value')
  var option = {
    tooltip: {
      triggerOn: 'mousemove',
      formatter: function (params) {
        return `<span>${params.name}</span> , <span>${params.value ? params.value : 0}所</span>`
      },
      // 额外附加的阴影
      backgroundColor: 'rgba(29, 38, 71)',
      extraCssText: 'box-shadow:0 0 4px rgba(11, 19, 43,0.8);'
    },
    visualMap: {
      show: false,
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
          areaColor: '#d5b044',
          shadowColor: 'rgba(213, 176, 68, .2)',
          shadowBlur: 12,
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
      data: echartData
    }]
  }
  return option
}
export const flowChart = function (echartData) {
  const LableData = [{
    name: '北京',
    value: [118.24, 35.55, 100],
    lable: [10, 1]
  },
  {
    name: '重庆',
    value: [108.54, 24.59],
    lable: [10, 1]
  },
  {
    name: '南京',
    value: [118.78, 26.04],
    lable: [10, 1]
  }
  ]
  var option = {
    xAxis: [],
    yAxis: [],
    grid: [],
    geo: {
      map: 'china',
      layoutCenter: ['50%', '50%'], // 地图位置
      itemStyle: {
        normal: {
          areaColor: '#0d1940',
          borderColor: '#65b2c3',
          borderWidth: 1.5
        },
        emphasis: {
          areaColor: '#d5b044',
          shadowColor: 'rgba(213, 176, 68, .2)',
          shadowBlur: 12,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          borderWidth: 0
        }
      },
      regions: [{
        name: '南海诸岛',
        itemStyle: {
          areaColor: 'rgba(0, 10, 52, 1)',

          borderColor: 'rgba(0, 10, 52, 1)',
          normal: {
            opacity: 0,
            label: {
              show: false,
              color: '#009cc9'
            }
          }

        },
        label: {
          show: false,
          color: '#FFFFFF',
          fontSize: 12
        }

      }]

    },
    series: [
      // 首都星图标
      {
        name: '首都',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: [{
          name: '首都',
          value: [116.24, 41.55, 100]

        } ],
        label: {
          normal: {
            show: false

          },
          emphasis: {
            show: false
          }
        }

      },
      // 区域散点图
      {
        type: 'effectScatter',
        coordinateSystem: 'geo',
        zlevel: 2,
        symbolSize: 8,
        rippleEffect: { // 坐标点动画
          period: 3,
          scale: 5,
          brushType: 'fill'
        },
        label: {
          normal: {
            show: true,
            position: 'right',
            formatter: '{b}',
            color: '#b3e2f2',
            fontWeight: 'bold',
            fontSize: 18
          }
        },

        data: echartData,
        itemStyle: { // 坐标点颜色
          normal: {
            show: true,
            color: '#c0e6f2',
            shadowBlur: 20,
            shadowColor: '#fff'
          },
          emphasis: {
            areaColor: '#f00'
          }
        }

      },
      // 线 和 点
      {
        type: 'lines',
        zlevel: 1, // 设置这个才会有轨迹线的小尾巴
        polyline: true,
        effect: {
          show: true,
          period: 10,
          trailLength: 0.7,
          color: '#fff', // 流动点颜色
          symbol: 'arrow',
          symbolSize: 6
        },
        lineStyle: {
          normal: {
            color: '#fff', // 线条颜色
            width: 1.5,
            curveness: 0.2,
            shadowColor: '#fff'
          }
        },
        data: [{

          fromName: '深圳',
          toName: '北京',
          coords: [
            [114.271522, 22.753644],
            [116.24, 39.55],
            [114.271522, 22.753644]

          ]
        },
        {

          fromName: '深圳',
          toName: '浙江',
          coords: [
            [114.271522, 22.753644],
            [118.78, 32.04],
            [114.271522, 22.753644]

          ]
        },
        {
          fromName: '深圳',
          toName: '重庆',
          coords: [
            [114.271522, 22.753644],
            [106.54, 29.59],
            [114.271522, 22.753644]

          ]
        }
        ]

      },
      // lable
      {
        name: 'lable',
        type: 'scatter',
        coordinateSystem: 'geo',
        symbol: 'pin',
        symbolSize: [50, 20],
        hoverAnimation: true,
        zlevel: 2,
        label: {
          normal: {
            show: true,
            textStyle: {
              color: '#fff8a8',
              fontSize: 16,
              fontWeight: 'bold',
              lineHeight: 15

            },
            formatter: function (params) {
              return params.data.lable[0] + 'G' + '/' + params.data.lable[1] + 'G'
            }
          }
        },

        itemStyle: {
          normal: {
            color: 'transparent', // 标志颜色
            opacity: 1

          }
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        data: LableData

      }

    ]
  }
  return option
}
export const scatteredChart = function (echartData) {
  var geoCoordMap = {
    '海门': [121.15, 31.89],
    '鄂尔多斯': [109.781327, 39.608266],
    '招远': [120.38, 37.35],
    '舟山': [122.207216, 29.985295],
    '齐齐哈尔': [123.97, 47.33],
    '盐城': [120.13, 33.38],
    '赤峰': [118.87, 42.28],
    '青岛': [120.33, 36.07],
    '乳山': [121.52, 36.89],
    '金昌': [102.188043, 38.520089],
    '泉州': [118.58, 24.93],
    '莱西': [120.53, 36.86],
    '日照': [119.46, 35.42],
    '胶南': [119.97, 35.88],
    '南通': [121.05, 32.08],
    '拉萨': [91.11, 29.97],
    '云浮': [112.02, 22.93],
    '梅州': [116.1, 24.55],
    '文登': [122.05, 37.2],
    '上海': [121.48, 31.22],
    '攀枝花': [101.718637, 26.582347],
    '威海': [122.1, 37.5],
    '承德': [117.93, 40.97],
    '厦门': [118.1, 24.46],
    '汕尾': [115.375279, 22.786211],
    '潮州': [116.63, 23.68],
    '丹东': [124.37, 40.13],
    '太仓': [121.1, 31.45],
    '曲靖': [103.79, 25.51],
    '烟台': [121.39, 37.52],
    '福州': [119.3, 26.08],
    '瓦房店': [121.979603, 39.627114],
    '即墨': [120.45, 36.38],
    '抚顺': [123.97, 41.97],
    '玉溪': [102.52, 24.35],
    '张家口': [114.87, 40.82],
    '阳泉': [113.57, 37.85],
    '莱州': [119.942327, 37.177017],
    '湖州': [120.1, 30.86],
    '汕头': [116.69, 23.39],
    '昆山': [120.95, 31.39],
    '宁波': [121.56, 29.86],
    '湛江': [110.359377, 21.270708],
    '揭阳': [116.35, 23.55],
    '荣成': [122.41, 37.16],
    '连云港': [119.16, 34.59],
    '葫芦岛': [120.836932, 40.711052],
    '常熟': [120.74, 31.64],
    '东莞': [113.75, 23.04],
    '河源': [114.68, 23.73],
    '淮安': [119.15, 33.5],
    '泰州': [119.9, 32.49],
    '南宁': [108.33, 22.84],
    '营口': [122.18, 40.65],
    '惠州': [114.4, 23.09],
    '江阴': [120.26, 31.91],
    '蓬莱': [120.75, 37.8],
    '韶关': [113.62, 24.84],
    '嘉峪关': [98.289152, 39.77313],
    '广州': [113.23, 23.16],
    '延安': [109.47, 36.6],
    '太原': [112.53, 37.87],
    '清远': [113.01, 23.7],
    '中山': [113.38, 22.52],
    '昆明': [102.73, 25.04],
    '寿光': [118.73, 36.86],
    '盘锦': [122.070714, 41.119997],
    '长治': [113.08, 36.18],
    '深圳': [114.07, 22.62],
    '珠海': [113.52, 22.3],
    '宿迁': [118.3, 33.96],
    '咸阳': [108.72, 34.36],
    '铜川': [109.11, 35.09],
    '平度': [119.97, 36.77],
    '佛山': [113.11, 23.05],
    '海口': [110.35, 20.02],
    '江门': [113.06, 22.61],
    '章丘': [117.53, 36.72],
    '肇庆': [112.44, 23.05],
    '大连': [121.62, 38.92],
    '临汾': [111.5, 36.08],
    '吴江': [120.63, 31.16],
    '石嘴山': [106.39, 39.04],
    '沈阳': [123.38, 41.8],
    '苏州': [120.62, 31.32],
    '茂名': [110.88, 21.68],
    '嘉兴': [120.76, 30.77],
    '长春': [125.35, 43.88],
    '胶州': [120.03336, 36.264622],
    '银川': [106.27, 38.47],
    '张家港': [120.555821, 31.875428],
    '三门峡': [111.19, 34.76],
    '锦州': [121.15, 41.13],
    '南昌': [115.89, 28.68],
    '柳州': [109.4, 24.33],
    '三亚': [109.511909, 18.252847],
    '自贡': [104.778442, 29.33903],
    '吉林': [126.57, 43.87],
    '阳江': [111.95, 21.85],
    '泸州': [105.39, 28.91],
    '西宁': [101.74, 36.56],
    '宜宾': [104.56, 29.77],
    '呼和浩特': [111.65, 40.82],
    '成都': [104.06, 30.67],
    '大同': [113.3, 40.12],
    '镇江': [119.44, 32.2],
    '桂林': [110.28, 25.29],
    '张家界': [110.479191, 29.117096],
    '宜兴': [119.82, 31.36],
    '北海': [109.12, 21.49],
    '西安': [108.95, 34.27],
    '金坛': [119.56, 31.74],
    '东营': [118.49, 37.46],
    '牡丹江': [129.58, 44.6],
    '遵义': [106.9, 27.7],
    '绍兴': [120.58, 30.01],
    '扬州': [119.42, 32.39],
    '常州': [119.95, 31.79],
    '潍坊': [119.1, 36.62],
    '重庆': [106.54, 29.59],
    '台州': [121.420757, 28.656386],
    '南京': [118.78, 32.04],
    '滨州': [118.03, 37.36],
    '贵阳': [106.71, 26.57],
    '无锡': [120.29, 31.59],
    '本溪': [123.73, 41.3],
    '克拉玛依': [84.77, 45.59],
    '渭南': [109.5, 34.52],
    '马鞍山': [118.48, 31.56],
    '宝鸡': [107.15, 34.38],
    '焦作': [113.21, 35.24],
    '句容': [119.16, 31.95],
    '北京': [116.46, 39.92],
    '徐州': [117.2, 34.26],
    '衡水': [115.72, 37.72],
    '包头': [110, 40.58],
    '绵阳': [104.73, 31.48],
    '乌鲁木齐': [87.68, 43.77],
    '枣庄': [117.57, 34.86],
    '杭州': [120.19, 30.26],
    '淄博': [118.05, 36.78],
    '鞍山': [122.85, 41.12],
    '溧阳': [119.48, 31.43],
    '库尔勒': [86.06, 41.68],
    '安阳': [114.35, 36.1],
    '开封': [114.35, 34.79],
    '济南': [117, 36.65],
    '德阳': [104.37, 31.13],
    '温州': [120.65, 28.01],
    '九江': [115.97, 29.71],
    '邯郸': [114.47, 36.6],
    '临安': [119.72, 30.23],
    '兰州': [103.73, 36.03],
    '沧州': [116.83, 38.33],
    '临沂': [118.35, 35.05],
    '南充': [106.110698, 30.837793],
    '天津': [117.2, 39.13],
    '富阳': [119.95, 30.07],
    '泰安': [117.13, 36.18],
    '诸暨': [120.23, 29.71],
    '郑州': [113.65, 34.76],
    '哈尔滨': [126.63, 45.75],
    '聊城': [115.97, 36.45],
    '芜湖': [118.38, 31.33],
    '唐山': [118.02, 39.63],
    '平顶山': [113.29, 33.75],
    '邢台': [114.48, 37.05],
    '德州': [116.29, 37.45],
    '济宁': [116.59, 35.38],
    '荆州': [112.239741, 30.335165],
    '宜昌': [111.3, 30.7],
    '义乌': [120.06, 29.32],
    '丽水': [119.92, 28.45],
    '洛阳': [112.44, 34.7],
    '秦皇岛': [119.57, 39.95],
    '株洲': [113.16, 27.83],
    '石家庄': [114.48, 38.03],
    '莱芜': [117.67, 36.19],
    '常德': [111.69, 29.05],
    '保定': [115.48, 38.85],
    '湘潭': [112.91, 27.87],
    '金华': [119.64, 29.12],
    '岳阳': [113.09, 29.37],
    '长沙': [113, 28.21],
    '衢州': [118.88, 28.97],
    '廊坊': [116.7, 39.53],
    '菏泽': [115.480656, 35.23375],
    '合肥': [117.27, 31.86],
    '武汉': [114.31, 30.52],
    '大庆': [125.03, 46.58]
  }
  var convertData = function (data) {
    var res = []
    for (var i = 0; i < data.length; i++) {
      var geoCoord = geoCoordMap[data[i].name]
      if (geoCoord) {
        res.push({
          name: data[i].name,
          value: geoCoord.concat(data[i].value)
        })
      }
    }
    return res
  }
  var option = {
    title: {
      text: '全国数据请求量',
      subtext: 'Show Data',
      left: 'center',
      top: 'top',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {},
    legend: {
      left: 'left',
      data: ['强', '中', '弱'],
      textStyle: {
        color: '#ccc'
      }
    },
    geo: {
      map: 'china',
      show: true,
      roam: true,
      label: {
        emphasis: {
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
          areaColor: '#d5b044',
          shadowColor: 'rgba(213, 176, 68, .2)',
          shadowBlur: 12,
          shadowOffsetX: 0,
          shadowOffsetY: 0,
          borderWidth: 0
        }
      }
    },
    series: [
      {
        type: 'map',
        map: 'china',
        geoIndex: 1,
        aspectScale: 0.75, // 长宽比
        showLegendSymbol: true, // 存在legend时显示
        label: {
          normal: {
            show: false
          },
          emphasis: {
            show: false,
            textStyle: {
              color: '#fff'
            }
          }
        },
        roam: true,
        itemStyle: {
          normal: {
            areaColor: '#0d1940',
            borderColor: '#65b2c3',
            borderWidth: 1.5
          },
          emphasis: {
            areaColor: '#0f2c70'
          }
        },
        data: [
          { name: '北京', value: 21300 }
        ]
      },
      {
        name: '城市',
        type: 'scatter',
        coordinateSystem: 'geo',
        data: convertData(echartData),
        symbolSize: function (val) {
          return val[2] / 20
        },
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: false
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#ddb926'
          }
        }
      },
      {
        name: '前5',
        type: 'effectScatter',
        coordinateSystem: 'geo',
        data: convertData(echartData.sort(function (a, b) {
          return b.value - a.value
        }).slice(0, 6)),
        symbolSize: function (val) {
          return val[2] / 20
        },
        showEffectOn: 'render',
        rippleEffect: {
          brushType: 'stroke'
        },
        hoverAnimation: true,
        label: {
          normal: {
            formatter: '{b}',
            position: 'right',
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: '#f4e925',
            shadowBlur: 10,
            shadowColor: '#333'
          }
        },
        zlevel: 1
      }
    ]
  }
  return option
}
