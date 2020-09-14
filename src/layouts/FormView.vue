<template>
  <div style="margin: -24px -24px 0px;">
    <form-header>
      <slot slot="action" name="action"></slot>
      <div slot="content">
      </div>
      <div slot="extra" style="margin: -40px 0 12px 0;">
        <a-select
          v-model="currentYear"
          style="width: 100px"
          @change="handleChangeYear"
          placeholder="年份"
        >
          <a-select-option v-for="i in 3" :value="2015+i" :key="(i + 9).toString(36) + i">
            {{ 2015+i }}
          </a-select-option>
        </a-select>
        <a-select
          v-model="currentKey"
          allowClear
          style="width: 160px"
          @change="handleChangeKey"
          placeholder="字段"
        >
          <a-select-option v-for="i in keyColumns" :value="i.title" :key="i.title">
            {{ i.title }}
          </a-select-option>
        </a-select>
        <div style="display:inline-block">
          <a-input-search
            :disabled="!currentKey"
            v-model="currentVal"
            placeholder="搜索"
            @change="onSearch"
          />
        </div>
        <a-dropdown>
          <a-menu slot="overlay" @click="handleMenuClickData">
            <a-menu-item key="1"><a-icon type="plus" />手动添加</a-menu-item>
            <a-menu-item key="2">
              <a-upload
                name="form"
                @change="afterUpload"
                :showUploadList="false"
                :action="baseUrl+'/base/form/upload?templateName='+templateName+'&year='+currentYear"
              >
                <span>
                  <a-icon type="upload" /> 上传数据
                </span>
              </a-upload>
            </a-menu-item>
            <a-menu-item key="3"><a-icon type="cloud-download" />导出数据</a-menu-item>
            <a-menu-item key="4"><a-icon type="sync" />清空表单</a-menu-item>
          </a-menu>
          <a-button type="primary" style="margin-left: 8px">
            数据 <a-icon type="down" />
          </a-button>
        </a-dropdown>
        <a-dropdown>
          <a-menu slot="overlay" @click="handleMenuClickTemp">
            <a-menu-item key="1"><a-icon type="project" />下载模板</a-menu-item>
          </a-menu>
          <a-button type="primary" style="margin-left: 8px">
            模板 <a-icon type="down" />
          </a-button>
        </a-dropdown>
      </div>
    </form-header>
    <div class="content">
      <div class="page-header-index-wide">
        <slot>
          <router-view ref="content" />
        </slot>
      </div>
    </div>
  </div>
</template>

<script>
// import { mapState } from 'vuex'
import FormHeader from '@/components/FormHeader'
export default {
  name: 'PageView',
  components: {
    FormHeader
  },
  props: {
    keyColumns: {
      type: Array,
      default: () => ([])
    },
    changeVals: {
      type: Function,
      default: () => ([])
    },
    clearFun: {
      type: Function,
      default: () => ([])
    },
    title: {
      type: [String, Boolean],
      default: true
    },
    logo: {
      type: String,
      default: null
    }
  },
  data () {
    return {
      pageTitle: null,
      description: null,
      linkList: [],
      extraImage: '',
      currentYear: '2017',
      currentKey: undefined,
      currentVal: undefined,
      tabs: {},
      baseUrl: process.env.VUE_APP_API,
      templateName: this.$route.name
    }
  },
  computed: {
  },
  mounted () {
  },
  updated () {
  },
  methods: {
    handleChangeYear () {
      this.$emit('changeYear', this.currentYear)
    },
    handleChangeKey () {
      this.$emit('changeKey', this.currentKey)
    },
    onSearch () {
      this.changeVals(this.currentVal)
    },
    exportData () {
      const exportUrl = this.baseUrl + '/base/form/export?' + 'templateName=' + this.templateName + '&year=' + this.currentYear
      window.open(exportUrl)
    },
    afterUpload (e) {
      // console.log(e)
      if (e.file.status === 'done') {
        this.$message.success('上传成功')
        this.$emit('changeYear', this.currentYear)
      }
    },
    // /base/form/export
    handleMenuClickData (e) {
      if (e.key === '1') {
        this.$emit('insertOne')
      } else if (e.key === '3') {
        this.exportData()
      } else if (e.key === '4') {
        this.clearFun()
      }
    },
    handleMenuClickTemp () {
      const tempUrl = 'temp/' + this.templateName + '.xlsx'
      window.open(tempUrl)
    }
  }
}
</script>

<style lang="less" scoped>
  .content {
    margin: 24px 24px 0;
    .link {
      margin-top: 16px;
      &:not(:empty) {
        margin-bottom: 16px;
      }
      a {
        margin-right: 32px;
        height: 24px;
        line-height: 24px;
        display: inline-block;
        i {
          font-size: 24px;
          margin-right: 8px;
          vertical-align: middle;
        }
        span {
          height: 24px;
          line-height: 24px;
          display: inline-block;
          vertical-align: middle;
        }
      }
    }
  }
  .page-menu-search {
    text-align: center;
    margin-bottom: 16px;
  }
  .page-menu-tabs {
    margin-top: 48px;
  }

  .extra-img {
    margin-top: -60px;
    text-align: center;
    width: 195px;

    img {
      width: 100%;
    }
  }

  .mobile {
    .extra-img{
      margin-top: 0;
      text-align: center;
      width: 96px;

      img{
        width: 100%;
      }
    }
  }
</style>
