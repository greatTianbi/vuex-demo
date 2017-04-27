<template>
  <div>
    <el-menu 
      theme="dark" 
      :default-active="activeIndex" 
      class="el-menu-demo" 
      mode="horizontal"
      @select="handleSelect"
      router
    >

      <span
        v-for="item in $router.options.routes"
        :key="item.name"
        v-if="!item.hidden"
      >
          <el-submenu 
            v-if="!item.leaf"
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
            v-if="item.leaf && item.children.length > 0"
            :index="item.children[0].path"
          >
            {{ item.children[0].name }}
          </el-menu-item>
      </span>
    </el-menu>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: '/'
    };
   },
   mounted(){
     
   },
   methods: {
    handleSelect(key, keyPath) {
       console.log(key, keyPath);
     }
  }
}
</script>

<style>
  
</style>
