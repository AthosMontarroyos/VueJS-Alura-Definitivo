<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomoDoProjeto" class="label">
                    Nome Do Projeto
                </label>
                <input type="text" class="input" v-model="nomeDoProjeto" id="NomeDoProjet">
            </div>
            <div class="field">
                <button class="button" type="submit">
                    Salvar
                </button>
            </div>
        </form>
    </section>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'FormularioProjetos',
    props: {
        id: {
            type: String,
        },
    },
    mounted() {
        if (this.id) {
            const projeto = this.store.state.projetos.find(proj => proj.id === this.id)
            console.log(projeto)
            this.nomeDoProjeto = projeto?.nome || '';
        }
    },
    data() {
        return {
            nomeDoProjeto: "",
        };
    },
    methods: {
        salvar() {
            if (this.id) {
                console.log(this.id)
                this.store.commit('ALTERA_PROJETO', {
                    id: this.id,
                    nome: this.nomeDoProjeto
                }
                )
            } else {
                console.log(this.id)
                this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)
            }
            this.nomeDoProjeto = '';
            this.$router.push('/projetos')
        }
    },
    setup() {
        const store = useStore()
        return {
            store,
        }
    }
})

</script>

<style scoped>
.projetos {
    padding: 1.25rem;
}
</style>