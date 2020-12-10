<template>
  <div>
    <a-row class="visual">
      <a-col class="visual-left" :span="7">
        <div class="visual-bg">
          <!-- 全国学科结构 -->
          <xkfx :id="'xkfx'" :globalSize="globalSize" />
        </div>
        <div class="visual-bg marginT24">
          <!-- 2017-2019全国专业布点数增加排名前十的专业 -->
          <p class="specialtyRankTitle">2017-2019年全国专业布点数增加排名前十的专业</p>
          <a-row class="specialtyRankBlock" :gutter="12">
            <a-col :span="12" class="specialtyRankTop">
              <div class="specialtyRankUl" v-for="(item,index) in rankList.slice(0,5)" :key="index">
                <div class="specialtyRankLi">
                  <span>{{ index + 1 }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="specialtyRankLi">
                  <span>{{ item.type }}</span>
                </div>
                <div class="specialtyRankLi">
                  <span>{{ item.value }}</span>
                </div>
              </div>
            </a-col>
            <a-col :span="12">
              <div class="specialtyRankUl" v-for="(item,index) in rankList.slice(5)" :key="'5-'+index">
                <div class="specialtyRankLi">
                  <span>{{ index + 6 }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="specialtyRankLi">
                  <span>{{ item.type }}</span>
                </div>
                <div class="specialtyRankLi">
                  <span>{{ item.value }}</span>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
        <div class="visual-bg marginT24">
          <!-- 2017-2019全国专业布点数减少排名前十的专业 -->
          <p class="specialtyRankTitle">2017-2019全国专业布点数减少排名前十的专业</p>
          <a-row class="specialtyRankBlock" :gutter="12">
            <a-col :span="12" class="specialtyRankTop">
              <div class="specialtyRankUl" v-for="(item,index) in rankList1.slice(0,5)" :key="index">
                <div class="specialtyRankLi">
                  <span>{{ index + 1 }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="specialtyRankLi">
                  <span>{{ item.type }}</span>
                </div>
                <div class="specialtyRankLi">
                  <span>{{ item.value }}</span>
                </div>
              </div>
            </a-col>
            <a-col :span="12">
              <div class="specialtyRankUl" v-for="(item,index) in rankList1.slice(5)" :key="'5-'+index">
                <div class="specialtyRankLi">
                  <span>{{ index + 6 }}</span>
                  <span>{{ item.name }}</span>
                </div>
                <div class="specialtyRankLi">
                  <span>{{ item.type }}</span>
                </div>
                <div class="specialtyRankLi">
                  <span>{{ item.value }}</span>
                </div>
              </div>
            </a-col>
          </a-row>
        </div>
        <div class="visual-bg marginT24">
          <!-- 新增专业动态 -->
          <p class="majorTitle">新增专业动态</p>
          <div class="majorUl">
            <div class="majorli" v-for="item in 6" :key="item">
              <div>
                <span class="majorRound"></span>
                历年各学科门类专业教师数据
              </div>
              <div>2020-07-04</div>
            </div>
          </div>
        </div>
      </a-col>
      <a-col class="visual-central" :span="17">
        <a-row>
          <a-col :span="14">
            <div class="visual-title">高等教育评估中心大数据可视化系统 - 第5屏 专业布局</div>
          </a-col>
        </a-row>
        <div class="visual-bg marginT24 distributionOfProfessions">
          <p class="majorTitle">各省份学科专业布点数</p>
          <div class="professionalDepots">
            <div>
              <div class="professionActive"></div>
              <div class="professionMain" :style="{transform: `rotate(${11.612903225806452*(newIndex+1)+169}deg)`}">
                <div class="professionBlock" :class="newIndex === 30 - index ? 'active' : '' " v-for="(item,index) in data" :key="index" :style="{transform: `rotate(${11.612903225806452*(index+1)}deg)`}">
                  <div class="professionTitle" :class="newIndex === 30 - index ? 'active' : '' ">{{ item.name }}</div>
                </div>
              </div>
            </div>
            <!-- <zyfbd :id="'zyfbd'" :globalSize="globalSize" /> -->
            <div class="professionalLeft">
              <div class="porR">
                <img src="../../assets/images/left.png" alt="">
                <div class="professionalUl">
                  <div class="professionalLi" v-for="(item,index) in professionaList.slice(0,8)" :key="index">
                    <span>{{ item.value }}</span>
                    <span>{{ item.name }}</span>
                  </div>
                </div>
              </div>
            </div>
            <div class="professionalRight">
              <div class="porR">
                <img src="../../assets/images/right.png" alt="">
                <div class="professionalUl">
                  <div class="professionalLi" v-for="(item,index) in professionaList.slice(8)" :key="index">
                    <span>{{ item.value }}</span>
                    <span>{{ item.name }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <a-row :gutter="30">
          <a-col :span="8">
            <div class="visual-bg marginT24">
              <!-- 新增专业词云 -->
              <zycy :id="'zycy'" :globalSize="globalSize" />
            </div>
          </a-col>
          <a-col :span="8">
            <div class="visual-bg marginT24">
              <!-- 全国就业率排名前十的专业 -->
              <jylpm :id="'jylpm'" :globalSize="globalSize" />
            </div>
          </a-col>
          <a-col :span="8">
            <div class="visual-bg marginT24">
              <!-- 全国各学科门类就业率 -->
              <jylfx :id="'jylfx'" :globalSize="globalSize" />
            </div>
          </a-col>
        </a-row>
      </a-col>
    </a-row>
  </div>
</template>

<script>
import { PageView } from '@/layouts'
import { xkfx, zyzz, zyjs, zyfb, zydb, zycy, jylpm, jylfx, zyfbd } from './components'
export default {
  data () {
    return {
      newIndex: 0,
      rankList: [
        { name: '数据科学与大数据技术 ', type: '工学、理学', value: 364 },
        { name: '机器人工程', type: '工学', value: 160 },
        { name: '智能科学与技术', type: '工学', value: 100 },
        { name: '商务英语', type: '文学', value: 80 },
        { name: '网络与新媒体', type: '文学', value: 60 },
        { name: '数字媒体艺术', type: '艺术学', value: 60 },
        { name: '健康服务与管理', type: '管理学', value: 50 },
        { name: '学前教育', type: '教育学', value: 45 },
        { name: '助产学', type: '医学', value: 42 },
        { name: '网络空间安全', type: '工学', value: 41 }
      ],
      rankList1: [
        { name: '信息与计算科学', type: '理学', value: 34 },
        { name: '公共事业管理', type: '管理学', value: 28 },
        { name: '信息管理与信息系统', type: '管理学、工学', value: 22 },
        { name: '服装设计与工程', type: '工学', value: 20 },
        { name: '电子技术与科学', type: '工学', value: 18 },
        { name: '艺术设计学', type: '艺术学', value: 18 },
        { name: '服装与服饰设计', type: '艺术学', value: 17 },
        { name: '教育技术学', type: '教育学', value: 14 },
        { name: '电子信息科学与技术', type: '工学、理学', value: 13 },
        { name: '生物工程', type: '工学', value: 11 }
      ],
      professionaList: [
        { name: '本科专业总数', value: 88 },
        { name: '一流学科数', value: 65 },
        { name: '哲学', value: 35 },
        { name: '法学', value: 105 },
        { name: '文学', value: 347 },
        { name: '理学', value: 391 },
        { name: '农学', value: 49 },
        { name: '管理学', value: 519 },
        { name: '学位授予类别数', value: 88 },
        { name: '一流专业数目', value: 654 },
        { name: '经济学', value: 197 },
        { name: '教育学', value: 89 },
        { name: '历史学', value: 15 },
        { name: '工学', value: 970 },
        { name: '医学', value: 58 },
        { name: '艺术学', value: 328 }
      ],
      data: [
        { name: '河北省' },
        { name: '山西省' },
        { name: '内蒙古自治区' },
        { name: '黑龙江省' },
        { name: '吉林省' },
        { name: '辽宁省' },
        { name: '陕西省' },
        { name: '甘肃省' },
        { name: '青海省' },
        { name: '新疆维吾尔自治区' },
        { name: '宁夏回族自治区' },
        { name: '山东省' },
        { name: '河南省' },
        { name: '江苏省' },
        { name: '浙江省' },
        { name: '安徽省' },
        { name: '江西省' },
        { name: '福建省' },
        { name: '湖北省' },
        { name: '湖南省' },
        { name: '广东省' },
        { name: '广西壮族自治区' },
        { name: '海南省' },
        { name: '四川省' },
        { name: '云南省' },
        { name: '贵州省' },
        { name: '西藏自治区' },
        { name: '上海市' },
        { name: '重庆市' },
        { name: '天津市' },
        { name: '北京市' }
      ]
    }
  },
  props: {
    globalSize: {
      type: String,
      default: ''
    }
  },
  components: {
    PageView,
    xkfx,
    zyzz,
    zyjs,
    zyfb,
    zydb,
    zycy,
    jylpm,
    jylfx,
    zyfbd
  },
  created () {
    setInterval(() => {
      this.newIndex = this.newIndex + 1
      if (this.newIndex > 30) {
        this.newIndex = 0
      }
    }, 6000)
  }

}
</script>

<style lang="less" scoped>
p {
  margin: 0;
  padding: 0;
}
.marginT24 {
  margin-top: 24px;
}
.visual {
  background: url('../../assets/images/top.png') no-repeat;
  background-size: 100% 78px;
  .visual-bg {
    background: rgba(12, 21, 48, 0.5);
    border: 1px solid rgba(67, 154, 255, 0.15);
    box-shadow: 0px 0px 40px 0px rgba(12, 21, 48, 0.3);
    border-radius: 8px;
    background: url('../../assets/images/gg.png') no-repeat;
    background-color: #0a122d;
    background-size: 100%;
  }
  .distributionOfProfessions {
    background-size: 50%;
    background-position: top;
  }
  .visual-left {
    padding: 100px 30px 0 40px;
  }
  .visual-right {
    padding: 40px 40px 0 30px;
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
  }
  .majorTitle {
    margin: 13px 0 12px 12px;
  }
  .majorUl {
    padding: 0 22px 10px 22px;
    .majorRound {
      display: inline-block;
      width: 12px;
      height: 12px;
      margin-right: 10px;
      background: linear-gradient(117deg, #e63ca6 0%, rgba(230, 60, 166, 0) 100%);
      border-radius: 50%;
    }
    .majorli {
      display: flex;
      justify-content: space-between;
      border-bottom: 1px solid #3066f5;
      height: 28px;
      line-height: 28px;
      color: #fff;
      font-size: 12px;
    }
  }
}
.specialtyRankTitle {
  margin: 12px 0 12px 12px;
  font-size: 14px;
  font-weight: 400;
  color: #ffffff;
}
.specialtyRankBlock {
  padding: 0 8px;
  .specialtyRankUl {
    display: flex;
    padding: 0 8px;
    .specialtyRankLi {
      color: #fff;
      height: 35px;
      line-height: 35px;
      span {
        font-size: 10px;
      }
    }
    .specialtyRankLi:nth-child(1) {
      flex: 0 0 60%;
      > span:first-child {
        display: inline-block;
        width: 20px;
        height: 20px;
        border-radius: 20px;
        line-height: 20px;
        font-size: 10px;
        color: #fff;
        text-align: center;
        margin-right: 6px;
        background-image: linear-gradient(#0596a5, #39fafe);
      }
    }
    .specialtyRankLi:nth-child(2) {
      flex: 0 0 26%;
    }
    .specialtyRankLi:nth-child(3) {
      flex: 0 0 14%;
      text-align: right;
    }
  }
  .specialtyRankUl:nth-child(2n + 1) {
    background: #1c2c55;
  }
}
.specialtyRankBlock {
  .specialtyRankTop {
    .specialtyRankUl:nth-child(1) {
      .specialtyRankLi:nth-child(1) {
        > span:first-child {
          background-image: linear-gradient(#ff564e, #f6dc72);
        }
      }
    }
    .specialtyRankUl:nth-child(2) {
      .specialtyRankLi:nth-child(1) {
        > span:first-child {
          background-image: linear-gradient(#ea3e70, #eb3fde);
        }
      }
    }
    .specialtyRankUl:nth-child(3) {
      .specialtyRankLi:nth-child(1) {
        > span:first-child {
          background-image: linear-gradient(#0053d9, #00d2e6);
        }
      }
    }
  }
}
.professionalDepots {
  width: 907px;
  height: 665px;
  margin: 0 auto;
  background: url('../../assets/images/bgzp.png') no-repeat;
  background-size: 100%;
  position: relative;
  .professionalLeft {
    position: absolute;
    top: 70px;
    left: -30px;
    img {
      height: 80%;
    }
  }
  .professionalRight {
    position: absolute;
    top: 70px;
    right: -30px;
    img {
      height: 80%;
    }
    .professionalUl {
      text-align: right;
      .professionalLi {
        padding: 0 20px 0 0;
      }
    }
  }
}
.professionalUl {
  position: absolute;
  top: 0;
  width: 100%;
  .professionalLi {
    height: 54px;
    line-height: 54px;
    margin-bottom: 14px;
    padding: 0 0 0 20px;
    color: #fff;
    span {
      margin-right: 20px;
    }
  }
  .professionalLi:nth-child(-n + 2) {
    color: #3360da;
  }
}
.professionBlock {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 1px;
  height: 148px;
  transform: rotate(12deg);
  transform-origin: 50% 0%;
  .professionTitle {
    position: absolute;
    top: 188px;
    left: -3px;
    font-size: 12px;
    line-height: 1.2;
    transform: rotate(180deg);
  }
  .active {
    color: #3360da;
  }
}
.professionBlock:nth-child(2n) {
  background: #157cfe;
}
.professionBlock:nth-child(2n + 1) {
  background: #fc7d7e;
}
.professionBlock:nth-child(2n)::before {
  background: #157cfe;
}
.professionBlock:nth-child(2n + 1)::before {
  background: #fc7d7e;
}
.professionBlock.active {
  background: #0efdff;
}
.professionBlock.active::before {
  background: #0efdff;
}
.professionBlock::before {
  content: '';
  position: absolute;
  bottom: -10px;
  left: -5px;
  width: 10px;
  height: 10px;
  border-radius: 10px;
}
.professionMain {
  position: absolute;
  top: 50%;
  left: 50%;
}
.professionActive {
  position: absolute;
  top: 30px;
  left: 50%;
  transform: rotate(180deg);
  width: 30px;
  height: 142px;
  margin-left: -15px;
  // background: #0efdff;
  background: url('../../assets/images/zz.png') no-repeat;
  background-size: 100% 100%;
}
</style>
