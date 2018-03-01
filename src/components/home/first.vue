<template>
  <div class="hello">
    <yd-slider autoplay="3000">
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/1.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/2.jpg">
        </a>
      </yd-slider-item>
      <yd-slider-item>
        <a href="http://www.ydcss.com">
          <img src="http://static.ydcss.com/uploads/ydui/3.jpg">
        </a>
      </yd-slider-item>
    </yd-slider>
    <div>
      <yd-button size="large" type="primary">primary</yd-button>
      <yd-button size="large" type="danger">danger</yd-button>
      <yd-button size="large" type="warning">warning</yd-button>
      <yd-button size="large" type="disabled" disabled>disabled</yd-button>
      <yd-button size="large" type="hollow">hollow</yd-button>
      <yd-button size="large" bgcolor="#000" color="#FFF">Custom Color</yd-button>
      <yd-button size="large" type="primary">primary</yd-button>
      <yd-button size="large" type="danger">danger</yd-button>
      <yd-button size="large" type="warning">warning</yd-button>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Slider, SliderItem } from 'vue-ydui/dist/lib.rem/slider'
import { Button, ButtonGroup } from 'vue-ydui/dist/lib.rem/button'
Vue.component(Slider.name, Slider, Button.name, Button, SliderItem.name, SliderItem, ButtonGroup.name, ButtonGroup)
export default {
  name: 'first',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
</style>
