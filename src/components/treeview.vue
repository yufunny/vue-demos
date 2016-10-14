<template  id="demo">
  <div>
  <p>(You can double click on an item to turn it into a floder.)</p>

  <ul>
    <item 
      calss="item"
      :model="treeData">
    </item>
  </ul>  
  </div>
</template>


<script>
  import item from "./tree.vue"

  var data = {
    name:'My Tree',
    children:[
      { name:'hello'},
      { name:'wat' },
      {
        name:'child floder',
        children:[
          { name:'hello'},
          { name:'wat' },
        ]
      },
      { name:'hello'},
      { name:'wat' },
      {
        name:'child floder',
        children:[
          { name:'hello'},
          { name:'wat' },
        ]
      },

    ]
  }
  export default{
    data(){
      return{
        treeData:data
      }
    },
    components:{
      item
    }
  }
</script>


