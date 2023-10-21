<script lang="ts">
  import Cabecalho from "../components/Cabecalho.svelte";
  import Usuario from "../components/Usuario.svelte";
  import type IUsuario from "../interfaces/IUsuario";

  let usuario: IUsuario | null = null;
</script>

<div class="app">
  <Cabecalho on:changeUser={(evento) => (usuario = evento.detail)} />

  {#if usuario}
    <Usuario {usuario} />
  {/if}
</div>

<style>
  .app {
    max-height: 100vh;
  }
</style>
