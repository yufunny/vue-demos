<template id="template">
  <div>
    <li>
      <div
        :class="{bold:isFloder}"
        @click="toggle"
        @dblclick="changeType"> 
        {{model.name}}
        <span v-if="isFloder">[{{open ? '-' : '+'}}]</span>
      </div>
      <ul v-show="open" v-if="isFloder">
        <item
          calss="item"
          v-for="model in model.children"
          :model="model">
        </item>
        <li @click="addChild">+</li>
      </ul>
    </li>
  </div>
</template>
<script>
import Vue from 'vue'
  export default{
    name: 'item',
    data(){
      return{
        open:false,
      }
    },
    props:{
      model:Object,
    },
    computed:{
      isFloder:function(){
        return this.model.children &&
        this.model.children.length
      }
    },
    methods:{
      toggle:function(){
        if(this.isFloder){
          this.open = !this.open
        }
      },
      changeType:function(){
        if(!this.isFloder){
          Vue.set(this.model,'children',[])
          this.addChild()
          this.open = true;
        }
      },
      addChild:function(){
        this.model.children.push({
          name:'new stuff',
        })
      }
    },
  }
</script>

<style type="text/css" scoped>
  #template,.item{
    cursor: pointer;
  }

  #template,.bold{
    font-weight: bold;
  }

  #template,ul{
    padding-left: 1em;
    line-height: 1.5em;
    list-style-type: dot;
  }
</style>
