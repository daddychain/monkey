<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
import {connectNetwork} from "@/utils/getWeb3"

export default {
  data () {
    return {}
  },
  beforeCreate() {
    // this.$store.dispatch('registerWeb3')
  }
}
</script>
<style lang="scss">

</style>
