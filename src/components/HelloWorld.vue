<template>
  <div class="hello">
    <p>购物车哈哈哈哈</p>
    <!-- <yd-tabbar fixed>
      <yd-tabbar-item title="首页" link="#" :active="true">
        <yd-icon name="home-outline" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="购物车" link="#" dot>
        <yd-icon name="shopcart-outline" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
      <yd-tabbar-item title="个人中心" link="#" active>
        <yd-icon name="ucenter" slot="icon" size="0.54rem"></yd-icon>
        <yd-badge slot="badge" type="danger">2</yd-badge>
      </yd-tabbar-item>
    </yd-tabbar> -->
  </div>
</template>

<script>
import Vue from 'vue'
import { TabBar, TabBarItem } from 'vue-ydui/dist/lib.rem/tabbar'
import { Icons } from 'vue-ydui/dist/lib.rem/icons'
import { Badge } from 'vue-ydui/dist/lib.rem/badge'
Vue.component(TabBar.name, TabBar)
Vue.component(TabBarItem.name, TabBarItem)
Vue.component(Icons.name, Icons)
Vue.component(Badge.name, Badge)
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
