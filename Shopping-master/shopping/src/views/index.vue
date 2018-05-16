<template>
  <div id="main">
    <header-nav></header-nav>
    <router-view></router-view>
    <footer-nav></footer-nav>
  </div>
</template>

<script>
import HeaderNav from '../components/HeaderNav'
import FooterNav from '../components/FooterNav'

export default {
  components:{
    HeaderNav,
    FooterNav
  }
}
</script>

<style>

</style>
