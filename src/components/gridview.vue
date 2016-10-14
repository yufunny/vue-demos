<template id="gridview">
  <div id="demo">
    <form id="search">
      Search <input type="text" name="query" v-model="searchQuery">
    </form>
    <demo-grid
      :data="gridData"
      :columns="gridColumns"
      :filter-key="searchQuery"></demo-grid>
  </div>
</template>

<script>

import demoGrid from './grid.vue'
  export default{
    data(){
      return {
        searchQuery:"",
        gridColumns:['name','power','age'],
        gridData:[
          {name:'Zhang',power:Infinity,age:20},
          {name:'Mao',power:9000,age:22},
          {name:'Wang',power:7000,age:19},
          {name:'Chen',power:8000,age:23},
        ]
      }
    },
    components:{
      demoGrid
    }
  }    
</script>
