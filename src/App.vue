<template>
  <div id="app">
    <el-menu 
      theme="dark" 
      :default-active="activeIndex" 
      class="el-menu-demo" 
      mode="horizontal"
      @select="handleSelect"
      router
    >

      <span
        v-for="item in this.$router.options.routes"
        :key="item.name"
        v-if="item.isShow"
      >
          <el-submenu 
            v-if="item.children.length > 0"
            :index="item.path"
          >
            <template slot="title">{{ item.name }}</template>
            <el-menu-item 
              v-for="child in item.children"
              :key="child.name"
              :index="child.path"
            >
              {{child.name}}
            </el-menu-item>
          </el-submenu>
          <el-menu-item 
            v-else
            :index="item.path"
          >
            {{ item.name }}
          </el-menu-item>
      </span>
    </el-menu>

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      activeIndex: '/'
    };
   },
   mounted(){
     console.log(this.$router)
   },
   methods: {
    handleSelect(key, keyPath) {
       console.log(key, keyPath);
     }
  }
}
</script>

<style>
  body {
    margin: 0;
    padding: 0;
  }

  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
