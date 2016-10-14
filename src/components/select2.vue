<template id="select2">
  <div>
    <div id="el">
    </div>
      <div>
        <p> Selected: {{selected}}</p>
        <select2 :options="options" v-model="selected">
          <option disabled value="0">Select one</option>
        </select2>
      </div>
  </div>
</template>

<script>
import $ from "jquery"
import select2 from 'select2'

  export default{
    data() {
      return {
        selected:0,
        options:[
        {id:1,text:'hello'},
        {id:2,text:'world'}
        ]
      }
    },
    components:{
      select2:{
        props:['options','value'],
        template:"<select><slot></slot></select>",
        mounted:function(){
          var vm = this
          $(this.$el)
          .val(this.value)
          .select2({data:this.options})
          .on('change',function(){
            vm.$emit('input',this.value)
          })
        },
        watch:{
          value:function(value){
            $(this.$el).select2('val',value)
          },
          options:function(options){
            $(this.$el).select2({data:this.options})
          },

        },
        destroyed:function(){
          $(this.$el).off().select2('destroy')
        }
      }
    }
  }
</script>

<style>
  @import url(https://cdnjs.cloudflare.com/ajax/libs/select2/4.0.0/css/select2.min.css);
</style>
