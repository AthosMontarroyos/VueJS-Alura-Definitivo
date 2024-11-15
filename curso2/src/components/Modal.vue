<template>
    <div class="modal" :class="{ 'is-active': tarefaSelecionada }" v-if="tarefaSelecionada">
        <div class="modal-background"></div>
        <div class="modal-card">
            <slot></slot>
        </div>
    </div>
</template>
<script lang="ts">

import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ModalBabel'
})
</script>