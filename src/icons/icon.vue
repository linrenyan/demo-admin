/*
svg-icon的用法：
1. http://www.iconfont.cn网站上找到自己需要的图标
2. 设置自己需要的颜色（也可以直接下载下来再设置颜色）
3. 下载svg格式放到icons文件夹下边
4. 使用<svg-icon icon-class="***"></svg-icon>
*/
<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="iconName"/>
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    iconClass: {
      type: String,
      required: true
    },
    className: {
      type: String,
      default: ''
    }
  },
  computed: {
    iconName() {
      return `#icon-${this.iconClass}`
    },
    svgClass() {
      if (this.className) {
        return 'svg-icon ' + this.className
      } else {
        return 'svg-icon'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  transition: all ease 0.3s;
}
</style>