<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <yd-tabbar fixed v-if="bottom">
      <yd-tabbar-item :title="item.title" @click.native="click(index)" link="" v-for="(item,index) in forArr" :key="index" :active='item.isActive'>
        <yd-icon :name="item.name" slot="icon" size="0.54rem"></yd-icon>
      </yd-tabbar-item>
    </yd-tabbar>
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
  name: 'App',
  data () {
    return {
      forArr: [{
        title: '首页',
        name: 'home-outline',
        isActive: true
      }, {
        title: '购物车',
        name: 'shopcart-outline',
        isActive: false
      }, {
        title: '个人中心',
        name: 'ucenter',
        isActive: false
      }
      ]
    }
  },
  computed: {
    bottom: function () {
      let bottom = false
      if (this.$route.name === 'home' || this.$route.name === 'shopCar' || this.$route.name === 'center') {
        bottom = true
      }
      return bottom
    }
  },
  updated () {
    if (this.$route.name === 'home') {
      this.forArr[0].isActive = true
      this.forArr[1].isActive = false
      this.forArr[2].isActive = false
    }
    if (this.$route.name === 'shopCar') {
      this.forArr[1].isActive = true
      this.forArr[0].isActive = false
      this.forArr[2].isActive = false
    }
    if (this.$route.name === 'center') {
      this.forArr[2].isActive = true
      this.forArr[0].isActive = false
      this.forArr[1].isActive = false
    }
  },
  methods: {
    click (index) {
      for (let i of this.forArr) {
        i.isActive = false
      }
      this.forArr[index].isActive = true
      if (index === 0) {
        this.$router.push({ name: 'home' })
      } else if (index === 1) {
        this.$router.push({ name: 'shopCar' })
      } else if (index === 2) {
        this.$router.push({ name: 'center' })
      }
    }
  }
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 100%;
  height: 100%;
  /* margin-top: 60px; */
}
</style>
