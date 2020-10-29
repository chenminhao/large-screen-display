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
            <zyfbd :id="'zyfbd'" :globalSize="globalSize" />
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
  background-size: 100%;
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
</style>
