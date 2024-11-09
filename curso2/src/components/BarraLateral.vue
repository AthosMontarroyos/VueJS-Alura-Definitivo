<script lang="ts">
import { defineComponent, } from 'vue';

export default defineComponent({
  name: 'BarraLateral',
  emits: ['aoTemaAlterado'],
  data() {
    return {
      modoEscuroAtivo: false
    }

  },
  computed: {
    textoBotao() {
      if (this.modoEscuroAtivo === false) {
        return 'Desativar Modo Escuro'

      } else {
        return 'Ativar Modo Escuro'
      }

    }
  },
  methods: {
    alterarTema() {
      this.modoEscuroAtivo = !this.modoEscuroAtivo
      this.$emit('aoTemaAlterado', this.modoEscuroAtivo)
    }
  }


})
</script>


<template>

  <header>
    <h1>
      <img src="../assets/logo.png" alt="logo do Alura Tracker">
    </h1>
    <div class="has-text-centered">
      <button class="button" @click="alterarTema">
        {{ textoBotao }}
      </button>
    </div>
    <nav class="panel mt-5">
      <ul>
        <li>
          <RouterLink to="/">
            <i class="fas fa-tasks">
              tarefas
            </i>
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/projetos">
            <i class="fas fa-project-diagram">
              projetos
            </i>
          </RouterLink>
        </li>
      </ul>
    </nav>
  </header>


</template>



<style scoped>
.panel li {
  margin: 8px 0;
}

.link {
  color: #fff;
}

.link:hover {
  color: #FAF0CA;
}

.link.router-link-active {
  color: #FAF0CA;
}

header {
  padding: 1rem;
  background: #0d3b66;
  width: 100%;
  height: 100vh;
  text-align: center;
}

@media only screen and (max-width: 768px) {
  header {
    padding: 2.5rem;
    height: auto;
  }
}
</style>