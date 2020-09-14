<template>
  <div class="page-header">
    <div class="page-header-index-wide">
      <div style="margin-bottom: 16px;">
        <a-breadcrumb>
          <a-breadcrumb-item>综合业务</a-breadcrumb-item>
          <a-breadcrumb-item><a href="javascript:;" @click="router2path">数据采集</a></a-breadcrumb-item>
          <a-breadcrumb-item>
            <a-popover placement="bottomLeft">
              <template slot="content">
                <a-input-search
                  v-model="tabKeys"
                  placeholder="按表名称搜索"
                  @change="onSearch"
                />
                <div class="popoverDivCon">
                  <div class="cursorP lineHeight30" v-for="(item,index) in newTableList" :key="index" @click="handelChange(item)" :class="{'popoverDivHover':templateName===item.name}">{{ item.name }}</div>
                </div>
              </template>
              <span class="cursorP">
                {{ templateName }}
                <a-icon type="caret-down" />
              </span>
            </a-popover></a-breadcrumb-item>
        </a-breadcrumb>
      </div>
      <div class="detail">
        <div class="main" v-if="!$route.meta.hiddenHeaderContent">
          <div class="row">
            <!-- <img v-if="logo" :src="logo" class="logo"/> -->
            <!-- <h1 v-if="title" class="title">{{ title }}</h1> -->
            <div class="action">
              <slot name="action"></slot>
            </div>
          </div>
          <div class="row">
            <!-- <div v-if="avatar" class="avatar">
              <a-avatar :src="avatar" />
            </div> -->
            <div v-if="this.$slots.content" class="headerContent">
              <slot name="content"></slot>
            </div>
            <div v-if="this.$slots.extra" class="extra">
              <slot name="extra"></slot>
            </div>
          </div>
          <div>
            <slot name="pageMenu"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '@/components/tools/Breadcrumb'

export default {
  name: 'PageHeader',
  components: {
    's-breadcrumb': Breadcrumb
  },
  props: {
    title: {
      type: [String, Boolean],
      default: true,
      required: false
    },
    logo: {
      type: String,
      default: '',
      required: false
    },
    avatar: {
      type: String,
      default: '',
      required: false
    }
  },
  data () {
    return {
      tabKeys: '',
      allTableList: [
        { name: 'ESI排名', path: '' },
        { name: '博士点', path: '' },
        { name: '博士后流动站', path: '' },
        { name: '第四轮学科评估', path: '' },
        { name: '高层次人才', path: '' },
        { name: '高层次人才团队', path: '' },
        { name: '国际化水平', path: '' },
        { name: '教师出版专著情况', path: '' },
        { name: '教师发表的论文情况', path: '' },
        { name: '教师获得科研奖励情况', path: '' },
        { name: '教师科研成果转化情况', path: '' },
        { name: '教师出版教材', path: '' },
        { name: '教师主持科研项目情况', path: '' },
        { name: '教师专利授权情况', path: '' },
        { name: '教学成果奖', path: '' },
        { name: '教学平台', path: '' },
        { name: '教职工信息', path: '' },
        { name: '精品课程', path: '' },
        { name: '科技服务', path: '' },
        { name: '科研平台', path: '' },
        { name: '软科中国最好大学排名', path: '' },
        { name: '软科中国最好学科排名', path: '' },
        { name: '双一流入选学科', path: '' },
        { name: '泰晤士世界大学排名榜', path: '' },
        { name: '校友会中国大学排名', path: '' },
        { name: '学科基本信息', path: '' },
        { name: '学生竞赛奖励', path: '' },
        { name: '学校基本情况', path: '' },
        { name: '学校全景数据', path: '' },
        { name: '学院基本信息', path: '' },
        { name: '质量工程', path: '' },
        { name: '专业建设', path: '' },
        { name: '综合排名', path: '' }
      ],
      templateName: this.$route.name,
      newTableList: []
    }
  },
  created () {
    this.newTableList = this.allTableList.concat([])
  },
  methods: {
    onSearch () {
      if (this.tabKeys) {
        this.newTableList = this.allTableList.filter((e) => {
          return e.name.indexOf(this.tabKeys) > -1
        })
      } else {
        this.newTableList = this.allTableList.concat([])
      }
    },
    handelChange (item) {
      this.$router.push({ name: item.name })
    },
    router2path () {
      this.$router.push({ path: '/dataCol/index' })
    }
  }
}
</script>

<style lang="less" scoped>
.greenColor:hover{
    color: #1890ff!important;
    text-decoration: underline;
}

.popoverDivCon{
    min-width: 200px;
    max-height: 300px;
    overflow-y: auto;
    margin: 8px 0px 0px 0px;
    div{
        transition: 0.3s all ease;
        padding: 4px 20px;
        &.popoverDivHover{
            background-color: #1890ff;
            color: #fff!important;
        }
        &:hover{
            color: #1890ff;
            font-weight: 700;
        }
    }
}
.page-header {
  background: #fff;
  padding: 16px 32px 0;
  border-bottom: 1px solid #e8e8e8;

  .breadcrumb {
    margin-bottom: 16px;
  }

  .detail {
    display: flex;
    /*margin-bottom: 16px;*/

    .avatar {
      flex: 0 1 72px;
      margin: 0 24px 8px 0;

      & > span {
        border-radius: 72px;
        display: block;
        width: 72px;
        height: 72px;
      }
    }

    .main {
      width: 100%;
      flex: 0 1 auto;

      .row {
        display: flex;
        width: 100%;

        .avatar {
          margin-bottom: 16px;
        }
      }

      .title {
        font-size: 20px;
        font-weight: 500;

        font-size: 20px;
        line-height: 28px;
        font-weight: 500;
        color: rgba(0, 0, 0, 0.85);
        margin-bottom: 16px;
        flex: auto;
      }
      .logo {
        width: 28px;
        height: 28px;
        border-radius: 4px;
        margin-right: 16px;
      }
      .content,
      .headerContent {
        flex: auto;
        color: rgba(0, 0, 0, 0.45);
        line-height: 22px;

        .link {
          margin-top: 16px;
          line-height: 24px;

          a {
            font-size: 14px;
            margin-right: 32px;
          }
        }
      }
      .extra {
        flex: 0 1 auto;
        margin-left: 88px;
        min-width: 242px;
        text-align: right;
      }
      .action {
        margin-left: 56px;
        min-width: 266px;
        flex: 0 1 auto;
        text-align: right;
        &:empty {
          display: none;
        }
      }
    }
  }
}

.mobile .page-header {
  .main {
    .row {
      flex-wrap: wrap;

      .avatar {
        flex: 0 1 25%;
        margin: 0 2% 8px 0;
      }

      .content,
      .headerContent {
        flex: 0 1 70%;

        .link {
          margin-top: 16px;
          line-height: 24px;

          a {
            font-size: 14px;
            margin-right: 10px;
          }
        }
      }

      .extra {
        flex: 1 1 auto;
        margin-left: 0;
        min-width: 0;
        text-align: right;
      }

      .action {
        margin-left: unset;
        min-width: 266px;
        flex: 0 1 auto;
        text-align: left;
        margin-bottom: 12px;

        &:empty {
          display: none;
        }
      }
    }
  }
}
</style>
