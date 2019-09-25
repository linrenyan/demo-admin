import Vue from 'vue'
import SvgIcon from './icon'

Vue.component(SvgIcon.name, SvgIcon)

// 在页面里引入svg文件
const requireAll = requireContext => requireContext.keys().map(requireContext)
const req = require.context('./svg', true, /\.svg$/)

requireAll(req)
