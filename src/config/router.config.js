// eslint-disable-next-line
import { BasicLayout } from '@/layouts'
/**
 * 基础路由
 * @type { *[] }
 */
export const constantRouterMap = [
  {
    path: '/',
    name: 'index',
    component: BasicLayout,
    meta: { title: '主页' },
    redirect: '/indicatorLibrary',
    children: [
      {
        path: '/indicatorLibrary',
        name: 'indicatorLibrary',
        component: () => import('@/views/home/index'),
        meta: { title: '首页', keepAlive: false, patth: 'taskblock', permission: [] }
      }
    ]
  }
]
