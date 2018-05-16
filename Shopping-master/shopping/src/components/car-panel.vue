<template>
	<li class="nav-cart" @mouseenter="carShowhandel" @mouseleave="carHidehandel">
		<a href="javascript:;" class="ball-rect">购物车</a>
		<!--根据class改变颜色-->
		<span class="cart-empty-num" :class="{'cart-num':count>0}">
                <i>{{count}}</i>
              </span>
		<div class="nav-cart-wrapper" v-if="carShow">
			<div class="nav-cart-list">
				<div class="empty" v-if="count <= 0">
					<h3>购物车为空</h3>
					<p>您还没有选购任何商品，现在前往商城选购吧!</p>
				</div>
				<div class="full" v-else>
					<div class="nav-cart-items">
						<ul>
							<li class="clear" v-for="(item,index) in carPanelData">
								<div class="cart-item js-cart-item cart-item-sell">
									<div class="cart-item-inner">
										<div class="item-thumb">
											<img :src="item.ali_image + '?x-oss-process=image/resize,w_206/quality,Q_80/format,webp'">
										</div>
										<div class="item-desc">
											<div class="cart-cell">
												<h4>
                                    <a href="#/item/100027401">{{item.title}}</a>
                                  </h4>
												<p class="attrs">
													<span>{{item.spec_json.show_name}}</span>
												</p>
												<h6>
                                    <span class="price-icon">¥</span><span class="price-num">{{item.price}}</span><span class="item-num">x {{item.count}}</span>
                                  </h6>
											</div>
										</div>
										<div class="del-btn" @click="delCarPanelData(item.sku_id)">删除</div>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="nav-cart-total">
						<p>共 <strong class="ng-binding">{{count}}</strong> 件商品</p>
						<h5>合计：<span class="price-icon">¥</span><span class="price-num ng-binding" ng-bind="cartMenu.totalPrice">{{total}}</span></h5>
						<h6>
              <router-link to="/Cart" class="nav-cart-btn">去购物车</router-link>
            </h6>
					</div>
				</div>
			</div>
		</div>
		<transition name="ball"
		            v-on:before-enter='beforeEnter'
					v-on:enter='enter'
					v-on:after-enter='afterEnter'>
			<div class="addCart-mask" v-show="ball.show">
				<img class="mask-item"/>
			</div>
		</transition>
	</li>
</template>

<script>

export default {
  computed: {
    carPanelData() {
      return this.$store.state.carPanelData;
    },
    //数量
    count() {
      return this.$store.getters.totalCount;
    },
    //合计总价
    total() {
      return this.$store.getters.totalPrice;
    },
    //控制购物车显示与隐藏
    carShow() {
      return this.$store.state.carShow;
    },
    // 控制小球显示与隐藏
    ball() {
      return this.$store.state.ball;
    }
  },
  methods: {
    //删除已加入购物车商品
    delCarPanelData(id) {
      this.$store.commit("delCarPanelData", id);
    },
    // 显示购物车
    carShowhandel() {
      this.$store.commit("carShow");
    },
    // 隐藏购物车
    carHidehandel() {
      this.$store.commit("hideCar");
    },

    // 小球初始状态
    beforeEnter(el) {
      // 获取小球的位置
      let rect = this.ball.el.getBoundingClientRect();
      // 购物车位置
      let rectE = document
        .getElementsByClassName("ball-rect")[0]
        .getBoundingClientRect();
      // 当前小球
      let ball = document.getElementsByClassName("mask-item")[0];
      // 计算
      let x = rectE.left + 15 - (rect.left + rect.width / 2);
      let y = rect.top + rect.height / 2 - (rectE.top + 10);

      el.style.transform = "translate3d(0," + y + "px,0)";
      ball.style.transform = "translate3d(-" + x + "px,0,0)";
      ball.src = this.ball.img;
    },
    // 运动状态
    enter(el) {
      // 重排重绘
      let a = el.offsetHeight;
      let ball = document.getElementsByClassName("mask-item")[0];
      el.style.transform = "translate3d(0,0,0)";
      ball.style.transform = "translate3d(0,0,0)";
    },
    // 结束状态
    afterEnter() {
      this.ball.show = false;
    }
  }
};
</script>

<style lang="stylus">
.ball-enter-active {
  transition: 1s cubic-bezier(0.15, 0.69, 0.6, 1.29);

  .mask-item {
    transition: 1s cubic-bezier(0, 0, 1, 1);
  }
}

.addCart-mask {
  width: 20px;
  height: 40px;
  z-index: 999;

  .mask-item {
    width: inherit;
    height: inherit;
  }
}
</style>
