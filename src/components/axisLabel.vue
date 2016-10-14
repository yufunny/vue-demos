<template id="axis-label-template">
  <text :x="point.x" :y="point.y">{{stat.label}}</text>
</template>

<script>
  export default{
    data() {
      return {
      }
    },
    props:{
      stat:Object,
      index:Number,
      total:Number,
    },
    replace:true,
    computed:{
      point:function(){
        return valueToPoint(
          +this.stat.value + 10,
          this.index,
          this.total
          )
      }
    }
  }

  function valueToPoint(value,index,total){
    var x = 0
    var y = -value * 0.8
    var angle = Math.PI * 2 /total * index
    var cos = Math.cos(angle)
    var sin = Math.sin(angle)
    var tx = x * cos - y * sin + 100
    var ty = x * sin + y * cos + 100
    return {
      x:tx,
      y:ty
    }
  }
</script>

<style>
  #axis-label-template,text{
    font-family: Helvetica Neue,Arial,sans-serif;
    font-size: 10px;
    fill: #666;
  }
</style>