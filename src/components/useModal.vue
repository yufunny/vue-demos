<template  id="useModal">
    <div>
      <button id="show-modal" @click="showModal = true">Show Modal</button>

      <modal :show="showModal" @foo="showModal=false">
      <h3 slot="header">custom header</h3>
      </modal>
    </div>
</template>

<script>
import modal from './modal.vue'
  export default {
    data() {
      return {
      showModal:false
      }
    },
    components:{
      modal
    }
  }
</script>

<style type="text/css">
</style>
