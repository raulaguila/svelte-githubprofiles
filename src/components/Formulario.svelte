<script lang="ts">
  import type IUsuario from "../interfaces/IUsuario";

  import { createEventDispatcher } from "svelte";
  import { buscaRepositorios, buscaUsuario } from "../requisicoes";
  import montaUsuario from "../utils/montaUsuario";
  import Botao from "./Botao.svelte";

  let valueInput: string = "";
  let sucess: boolean = true;

  const dispatch = createEventDispatcher<{
    changeUser: IUsuario | null;
  }>();

  async function aoSubmeter() {
    if (valueInput == "") {
      return;
    }

    const responseUser = await buscaUsuario(valueInput);
    const responseRepos = await buscaRepositorios(valueInput);

    sucess = responseUser.status == 200 && responseRepos.status == 200;

    if (sucess) {
      const datasUser = await responseUser.json();
      const datasRepos = await responseRepos.json();

      dispatch("changeUser", montaUsuario(datasUser, datasRepos));
    } else {
      dispatch("changeUser", null);
    }
  }
</script>

<form on:submit|preventDefault={aoSubmeter}>
  <input
    type="text"
    class="input"
    class:erro-input={!sucess}
    placeholder="Pesquise aqui o usuário"
    bind:value={valueInput}
  />

  {#if !sucess}
    <span class="erro">Usuário não encontrado!</span>
  {/if}

  <div class="botao-container">
    <Botao text="Buscar" icon="/assets/lupa.svg" alt="ícone de lupa" />
  </div>
</form>

<style>
  .input {
    padding: 15px 25px;
    width: calc(100% - 8.75rem);
    font-size: 1rem;
    border-radius: 8px;
    border: 1px solid #2e80fa;
    box-shadow: 0px 17px 52px rgba(222, 231, 247, 0.4);
    outline: 0;
  }

  .input::placeholder {
    font-family: "Roboto";
    font-style: italic;
    font-weight: 300;
    font-size: 19.5px;
    line-height: 26px;
    color: #6e8cba;
  }

  .botao-container {
    position: absolute;
    width: 9.625rem;
    right: 0;
    top: 0;
    bottom: 0;
    display: flex;
  }

  .erro {
    position: absolute;
    bottom: -25px;
    left: 0;
    font-style: italic;
    font-weight: normal;
    font-size: 16px;
    line-height: 19px;
    z-index: -1;
    color: #ff003e;
  }

  .erro-input {
    border: 1px solid #ff003e;
  }
</style>
