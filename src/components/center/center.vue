<template>
  <div class="wrap" ref="myTask">
    <div v-for='(item, key) in list' :key='key'>
      <img slot='img' :src='item.img' class="img">
      <span slot='title'>{{item.title}}</span>
      <yd-list-other slot='other'>
        <div>
          <span class='list-price'>
            <em>¥</em>{{item.marketprice}}</span>
          <span class='list-del-price'>¥{{item.productprice}}</span>
        </div>
      </yd-list-other>
    </div>
    <div v-show="abc">
      <p>yige </p>
      <p>yige </p>
      <p>yige </p>
      <p>yige </p>
      <p>yige </p>
      <p>yige </p>
    </div>
    <img v-show="aaa" slot="loadingTip" src="http://static.ydcss.com/uploads/ydui/loading/loading10.svg" />
  </div>
</template>

<script type='text/babel'>
import Vue from 'vue'
import { InfiniteScroll } from 'vue-ydui/dist/lib.rem/infinitescroll'
Vue.component(InfiniteScroll.name, InfiniteScroll)
export default {
  name: 'center',
  data () {
    return {
      page: 1,
      pageSize: 10,
      abc: false,
      aaa: false,
      list: [
        {
          img: 'http://img1.shikee.com/try/2016/06/23/14381920926024616259.jpg',
          title: '标题标题标题标题标题',
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: 'http://img1.shikee.com/try/2016/06/21/10172020923917672923.jpg',
          title: '骆驼男装2016夏装男士短袖T恤 圆领衣服 印花男装体恤 半袖打底衫',
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: 'http://img1.shikee.com/try/2016/06/23/15395220917905380014.jpg',
          title: '条纹短袖T恤男士韩版衣服大码潮流男装夏季圆领体恤2016新款半袖',
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: 'http://img1.shikee.com/try/2016/06/25/14244120933639105658.jpg',
          title: '夏季青少年衣服男生潮牌t恤 男士 夏秋学生 日系棉短袖半袖男小衫',
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: 'http://img1.shikee.com/try/2016/06/26/12365720933909085511.jpg',
          title: '2016夏装新款时尚潮流短袖T恤男纯棉V领日系青少年韩版夏季上衣服',
          marketprice: 56.23,
          productprice: 89.36
        },
        {
          img: 'http://img1.shikee.com/try/2016/06/19/09430120929215230041.jpg',
          title: '男装衣服男夏t恤 男士短袖t恤圆领夏季潮牌宽松原宿风半截袖男',
          marketprice: 56.23,
          productprice: 89.36
        }
      ]
    }
  },
  mounted () {
    this.$refs.myTask.addEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll (e) {
      console.log(e)
      let scrollTop = this.$refs.myTask.scrollTop
      let clientHeight = this.$refs.myTask.clientHeight
      // 元素内容的总高度
      let scrollHeight = this.$refs.myTask.scrollHeight
      console.log(scrollTop, clientHeight, scrollHeight)
      if ((scrollHeight - clientHeight - scrollTop <= 10) && (this.page < 3)) {
        this.aaa = true
        this.page++
        setTimeout(() => {
          this.abc = true
          this.aaa = false
        }, 600)
      }
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.wrap
  width 100%
  height 100%
  // overflow hidden
  padding-bottom 70px
  overflow scroll
  .img
    width 100%
</style>
