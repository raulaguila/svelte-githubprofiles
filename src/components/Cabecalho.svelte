<script lang="ts">
  import Formulario from "./Formulario.svelte";
  import Titulo from "./Titulo.svelte";
</script>

<header>
  <Titulo titulo="Svelte GitHub perfis" />

  <div class="busca-usuario">
    <Formulario on:changeUser />
  </div>
</header>

<style>
  header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .busca-usuario {
    position: relative;
    width: 70%;
  }
</style>
