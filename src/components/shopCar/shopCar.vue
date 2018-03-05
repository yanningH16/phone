<template>
  <div class="wrap">
    <div class="text">月落乌啼霜满天,江枫渔火对愁眠,姑苏城外寒山寺,夜半钟声到客船</div>
    <div v-show="aaa">111111223</div>
    <yd-pullrefresh :callback="loadList" ref="pullrefreshDemo">
      <yd-list theme="4">
        <yd-list-item v-for="(item, key) in list" :key="key">
          <img slot="img" :src="item.img">
          <span slot="title">{{item.title}}</span>
          <yd-list-other slot="other">
            <div>
              <span class="list-price">
                <em>¥</em>{{item.price}}</span>
            </div>
          </yd-list-other>
        </yd-list-item>
      </yd-list>
    </yd-pullrefresh>
  </div>
</template>

<script type='text/babel'>
import Vue from 'vue'
import { PullRefresh } from 'vue-ydui/dist/lib.rem/pullrefresh'
Vue.component(PullRefresh.name, PullRefresh)
export default {
  name: 'shopCar',
  data () {
    return {
      page: 1,
      aaa: false,
      list: [
        { img: '//img1.shikee.com/try/2016/06/23/14381920926024616259.jpg', title: '标题111标题标题标题标题', price: 156.23, w_price: 89.36 },
        { img: '//img1.shikee.com/try/2016/06/21/10172020923917672923.jpg', title: '标题222标题标题标题标题', price: 256.23, w_price: 89.36 },
        { img: '//img1.shikee.com/try/2016/06/23/15395220917905380014.jpg', title: '标题333标题标题标题标题', price: 356.23, w_price: 89.36 },
        { img: '//img1.shikee.com/try/2016/06/25/14244120933639105658.jpg', title: '标题444标题标题标题标题', price: 456.23, w_price: 89.36 },
        { img: '//img1.shikee.com/try/2016/06/26/12365720933909085511.jpg', title: '标题555标题标题标题标题', price: 556.23, w_price: 89.36 },
        { img: '//img1.shikee.com/try/2016/06/19/09430120929215230041.jpg', title: '标题666标题标题标题标题', price: 656.23, w_price: 89.36 }
      ]
    }
  },
  methods: {
    loadList () {

    }
  }
}
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrap
  width 100%
  height 100%
  overflow scroll
  padding-bottom 50px
  .img
    width 100%
  .text
    font-size 0.3rem
    margin-left 0.5rem
</style>
