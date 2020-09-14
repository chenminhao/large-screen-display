import { Menu, Icon, Input } from 'ant-design-vue'

const { Item, ItemGroup, SubMenu } = Menu
const { Search } = Input

export default {
  name: 'MangerTree',
  props: {
    dataSource: {
      type: Array,
      required: true
    },
    openKeys: {
      type: Array,
      default: () => []
    },
    search: {
      type: Boolean,
      default: false
    }
  },
  created () {
    this.localOpenKeys = this.openKeys.slice(0)
  },
  data () {
    return {
      localOpenKeys: []
    }
  },
  methods: {
    handleModity (item) {
      this.$emit('modity', item)
    },
    handleTitleClick (...args) {
      this.$emit('titleClick', { args })
    },
    searchDept (query) {
      this.$emit('searchDept', query)
    },
    deleteConfirm (item) {
      this.$emit('deleteConfirm', item)
    },
    renderSearch () {
      return (
        <Search
          placeholder="按部门名称搜索"
          style="width: 100%; margin-bottom: 1rem"
          {...{ on: { change: (val) => this.searchDept(val.target.value) } }}
        />
      )
    },
    renderIcon (icon) {
      return icon && (<Icon type={icon} />) || null
    },
    renderMenuItem (item) {
      return (
        <Item key={item.departId}>
          { this.renderIcon(item.icon) }
          { item.departName }

          <a-dropdown>
            <a class="btn"><a-icon type="ellipsis" /></a>
            <a-menu slot="overlay" >
              <a-menu-item key="1">
                <span style="color:#108ee9" {...{ on: { click: () => this.handleModity(item) } } }>
                  <a-icon type="edit" /> 修改
                </span>
              </a-menu-item>
              <a-menu-item key="2">
                <span style="color:#f5222d" {...{ on: { click: () => this.deleteConfirm(item) } }}>
                  <a-icon type="delete" /> 删除
                </span>
              </a-menu-item>
            </a-menu>
          </a-dropdown>
        </Item>
      )
    },
    //   < a class= "btn" style="width: 20px;z-index:1300" {...{ on: { click: () => this.handlePlus(item) } } }>
    // <a-icon title="添加用户" type="user-add" />
    //         </a >
    renderItem (item) {
      return item.children ? this.renderSubItem(item, item.key) : this.renderMenuItem(item, item.key)
    },
    renderItemGroup (item) {
      const childrenItems = item.children.map(o => {
        return this.renderItem(o, o.key)
      })

      return (
        <ItemGroup key={item.key}>
          <template slot="title">
            <span>{ item.title }</span>
            <a-dropdown>
              <a class="btn"><a-icon type="ellipsis" /></a>
              <a-menu slot="overlay">
                <a-menu-item key="1">新增</a-menu-item>
                <a-menu-item key="2">合并</a-menu-item>
                <a-menu-item key="3">移除</a-menu-item>
              </a-menu>
            </a-dropdown>
          </template>
          { childrenItems }
        </ItemGroup>
      )
    },
    renderSubItem (item, key) {
      const childrenItems = item.children && item.children.map(o => {
        return this.renderItem(o, o.key)
      })

      const title = (
        <span slot="title">
          { this.renderIcon(item.icon) }
          <span>{ item.title }</span>
        </span>
      )

      if (item.group) {
        return this.renderItemGroup(item)
      }
      // titleClick={this.handleTitleClick(item)}
      return (
        <SubMenu key={key}>
          { title }
          { childrenItems }
        </SubMenu>
      )
    }
  },
  render () {
    const { dataSource, search } = this.$props

    // this.localOpenKeys = openKeys.slice(0)
    const list = dataSource.map(item => {
      return this.renderItem(item)
    })

    return (
      <div class="tree-wrapper">
        { search ? this.renderSearch() : null}
        <Menu mode="inline" class="custom-tree" {...{ on: { click: item => this.$emit('click', item), 'update:openKeys': val => { this.localOpenKeys = val } } }} openKeys={this.localOpenKeys}>
          { list }
        </Menu>
      </div>
    )
  }
}
