<template id="svgDemo">

    <el-row class="tac">
      <el-col :span="8">
        <svg width="200" height="200">
          <polygraph :stats="stats"></polygraph>
        </svg>
        <div v-for="stat in stats">
          <label>{{stat.label}}</label>
          <input type="range" v-model="stat.value" min="0" max="100">
          <span>{{stat.value}}</span>
          <button @click="remove(stat)">X</button>
        </div >
        <form id="add">
          <input name="newlabel" v-model="newLabel">
          <button @click="add">Add a Stat</button>
        </form>
      </el-col>
      <el-col :span="8" :offset="1">
        <pre id="raw">{{ stats }}</pre>
      </el-col>
    </el-row>
</template>
<script>
  import polygraph from "./polygraph.vue"
  var stats = [
    {label:'A',value:100},
    {label:'B',value:100},
    {label:'C',value:100},
    {label:'D',value:100},
    {label:'E',value:100},
    {label:'F',value:100},
  ]
  export default{
    data(){
      return {
        newLabel : '',
        stats: stats
      }
    },
    components:{
      polygraph
    },
    methods:{
      add:function(e){
        e.preventDefault()
        if(!this.newLabel) return
        this.stats.push({
          label:this.newLabel,
          value:100
        })
        this.newLabel = ''
      },
      remove:function(stat){
        if(this.stats.length > 3){
          var index = this.stats.indexOf(stat)
          this.stats.splice(index,1)
        }else{
          alert('Can\'t delete more!')
        }
      }
    }    
  }
</script>

<style>
  #svgDemo label{
    display: inline-block;
    margin-left: 10px;
    width:20px;
  }
</style>