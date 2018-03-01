<template>
  <div class="wrap">
    <div class="top">
      <yd-rollnotice autoplay="4000" align='center' height='50'>
        <yd-rollnotice-item>
          <span style="color:#F00;"> 荐 </span>荣耀V9 3月超级钜惠！</yd-rollnotice-item>
        <yd-rollnotice-item>
          <span style="color:#F00;"> 荐 </span>3.23京东超级品牌日格力盛典</yd-rollnotice-item>
        <yd-rollnotice-item>
          <span style="color:#F00;"> 荐 </span>京东服饰 早春新品低至7折</yd-rollnotice-item>
      </yd-rollnotice>
    </div>

    <div class="contern">
      <yd-button size="large" type="primary" @click.native="next">跳转页面</yd-button>
      <yd-lightbox>
        <yd-lightbox-img v-for="(item, key) in list" :key="key" :src="item.src"></yd-lightbox-img>
      </yd-lightbox>
    </div>
  </div>
</template>
<script type='text/babel'>
import Vue from 'vue'
import { RollNotice, RollNoticeItem } from 'vue-ydui/dist/lib.rem/rollnotice'
import { LightBox, LightBoxImg, LightBoxTxt } from 'vue-ydui/dist/lib.rem/lightbox'
import { Button, ButtonGroup } from 'vue-ydui/dist/lib.rem/button'
Vue.component(RollNotice.name, RollNotice)
Vue.component(RollNoticeItem.name, RollNoticeItem)
Vue.component(LightBox.name, LightBox)
Vue.component(LightBoxImg.name, LightBoxImg)
Vue.component(LightBoxTxt.name, LightBoxTxt)
Vue.component(Button.name, Button)
Vue.component(ButtonGroup.name, ButtonGroup)
export default {
  name: 'hoem',
  data () {
    return {
      list: [
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s1.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s2.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s3.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s4.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s5.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s6.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s1.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s2.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s3.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s4.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s5.jpg' },
        { src: 'http://static.ydcss.com/uploads/lightbox/meizu_s6.jpg' }
      ]
    }
  },
  methods: {
    next () {
      this.$router.push({ name: 'first' })
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrap
  width 100%
  height 100%
  overflow hidden
  .top
    position fixed
    width 100%
  .contern
    margin-top 50px
    padding-bottom 50px
</style>
