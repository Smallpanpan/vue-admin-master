import Login from './views/Login.vue'
import NotFound from './views/404.vue'
import Home from './views/Home.vue'
import Main from './views/Main.vue'
import Table from './views/nav1/Table.vue'
import Form from './views/nav1/Form.vue'
import OutW from './views/nav1/OutW.vue'
import Inw from './views/nav1/Inw.vue'


import user from './views/nav1/user.vue'
import Alarm from './views/nav2/Alarm.vue'
import Statistic from './views/nav2/Statistic.vue'
import WM from './views/nav2/WM.vue'


import Page6 from './views/nav3/Page6.vue'
import User from './views/nav3/User.vue'
import User1 from './views/nav3/User1.vue'

import echarts from './views/charts/echarts.vue'

let routes = [
    {
        path: '/login',
        component: Login,
        name: '',
        hidden: true
    },
    {
        path: '/404',
        component: NotFound,
        name: '',
        hidden: true
    },
    //{ path: '/main', component: Main },
    {
        path: '/',
        component: Home,
        name: '出入库管理',
        iconCls: 'el-icon-message',//图标样式class
        children: [
            { path: '/main', component: Main, name: '主页', hidden: true },
            { path: '/table', component: Table, name: '商品分布' },
            // { path: '/form', component: Form, name: 'Form' },
            // { path: '/user', component: user, name: '列表' },
            { path: '/OutW', component: OutW, name: '入库管理' },
            { path: '/Inw', component: Inw, name: '出库管理' },
        ]
    },
    {
        path: '/',
        component: Home,
        name: '仓库管理',
        iconCls: 'fa fa-id-card-o',
        children: [
            { path: '/WM', component: WM, name: '仓库分布' },
             { path: '/Statistic', component: Statistic, name: '统计' },
             { path: '/Alarm', component: Alarm, name: '警报' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: '用户管理',
        iconCls: 'fa fa-address-card',
        children: [
            { path: '/User', component: User, name: '修改用户信息' },
            { path: '/User1', component: User1, name: '添加用户' }
        ]
    },
    {
        path: '/',
        component: Home,
        name: 'Charts',
        iconCls: 'fa fa-bar-chart',
        children: [
            { path: '/echarts', component: echarts, name: 'echarts' }
        ]
    },
    {
        path: '*',
        hidden: true,
        redirect: { path: '/404' }
    },

];

export default routes;