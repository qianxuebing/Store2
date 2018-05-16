<template>
  <div id="header">
      <div class="nav-global">
        <div class="container">
          <h1 class="nav-logo">
            <a href="javascript:;"></a>
          </h1>
          <ul class="nav-aside">
            <li class="nav-user">
              <a href="javascript:;">个人中心</a>
              <!--active-->
              <div class="nav-user-wrapper">
                <div class="nav-user-list">
                  <dl class="nav-user-avatar">
                    <dd><span class="ng-scope"></span></dd>
                    <dt class="ng-binding">+86 138****9453</dt>
                  </dl>
                  <ul>
                    <li class="order"><a href="javascript:;">我的订单</a></li>
                    <li class="support"><a href="javascript:;">售后服务</a></li>
                    <li class="coupon"><a href="javascript:;">我的优惠</a></li>
                    <li class="information"><a href="javascript:;">账户资料</a></li>
                    <li class="address"><a href="javascript:;">收货地址</a></li>
                    <li class="logout"><a href="javascript:;">退出</a></li>
                  </ul>
                </div>
              </div>
            </li>
            <!--active-->
            <car-panel></car-panel>
          </ul>
          <ul class="nav-list">
            <li><a href="javascript:;">在线商城</a></li>
            <li><a href="javascript:;">坚果 Pro</a></li>
            <li><a href="javascript:;">Smartisan M1 / M1L</a></li>
            <li><a href="javascript:;">Smartisan OS</a></li>
            <li><a href="javascript:;">欢喜云</a></li>
            <li><a href="javascript:;">应用下载</a></li>
            <li><a href="javascript:;">官方论坛</a></li>
          </ul>
        </div>
      </div>
      <div class="nav-sub" :class="{active:isActive}">
        <div class="nav-sub-wrapper">
          <div class="container">
            <ul class="nav-list">
              <li class="active"><router-link to="/home">首页</router-link></li>
              <li @mouseenter="add" @mouseleave="del"><router-link to="/">手机</router-link></li>
              <li><router-link to="/pageOne">“足迹系列”手感膜</router-link></li>
              <li ><router-link to="/shop">官方配件</router-link></li>
              <li><router-link to="/pageTwo">周边产品</router-link></li>
              <li><router-link to="/pageThree">第三方配件</router-link></li>
              <li><router-link to="/pageFour">全部商品</router-link></li>
              <li><router-link to="/pageFive">服务</router-link></li>
            </ul>
          </div>
        </div>
        <!-- 手机 -->
        <!-- <phone></phone> -->
      </div>
    </div>
</template>

<script>

  import carPanel from './car-panel'
  import phone from './phone'

	export default {
    data(){
      return{
        isActive:false
      }
    },
    methods:{
      add(){
          this.isActive = true;
      },
      del(){
        this.isActive = false;
      }
    },
		components:{
      carPanel,
      phone
    },

	}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
