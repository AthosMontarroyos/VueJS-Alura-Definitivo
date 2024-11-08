<template>
  <div class="box has-text-weight-bold">
    <slot>
        
    </slot>
  </div>
</template>


<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent ({
    name: 'BoxFormulario'
})
</script>

<style scoped>
.box {
    background: #bb2929; 
}
</style>