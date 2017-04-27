<template>
  <div class="center">
    <com-Nav></com-Nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from '@/components/common/Nav'

export default {
  data () {
    return {
      
    }
  },
  components:{
      comNav: Nav
  }
}
   
</script>

<style scoped>

</style>
