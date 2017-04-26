<template>
  <div class="center">
    <h3>这是获取的数据：{{ getCount }}</h3>
    <el-button @click='addCount'>点击+1</el-button>
  </div>
</template>

<script>
import { mapGetters, mapActions} from 'vuex'
import * as types from '../vuex/mutations-types'

export default {
  // name: 'center',
  // data () {
  //   return {
  //     count: this.$store.state.count
  //   }
  // },
   
  computed: mapGetters ([
    'getCount'
  ]),
  methods: mapActions ([
    'addCount' // 映射 this.addCount() 到 this.$store.dispatch('addCount')
  ])
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
  margin: 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
