<script lang="ts">
  import type IUsuario from "../interfaces/IUsuario";
  import BarraSuperior from "./BarraSuperior.svelte";

  export let usuario: IUsuario;

  $: temRepositorios = Boolean(usuario.repositorios_recentes.length);
</script>

<div class="card-usuario">
  <BarraSuperior />

  <div class="usuario">
    <div class="foto-container">
      <a href={usuario.perfil_url} target="_blank" rel="noopener">
        <div
          class="foto-usuario"
          style:background-image="url({usuario.avatar_url})"
        />
      </a>
    </div>

    <div class="detalhes-usuario">
      <div class="info">
        Nome: <span>{usuario.nome ?? ""}</span>
      </div>
      <div class="info">
        Usuário: <span>{usuario.login ?? ""}</span>
      </div>
      <div class="info">
        Seguidores: <span>{usuario.seguidores ?? 0}</span>
      </div>
      <div class="info">
        Repositorios: <span>{usuario.repositorios_publicos ?? 0}</span>
      </div>
    </div>

    {#if temRepositorios}
      <div class="repositorios">
        <h2 class="titulo">Repositórios Recentes:</h2>
        <ul>
          {#each usuario.repositorios_recentes as repositorio}
            <li>
              <a
                class="repositorio"
                href={repositorio.url}
                target="_blank"
                rel="noopener">{repositorio.nome}</a
              >
            </li>
          {/each}
        </ul>
      </div>
    {/if}
  </div>
</div>

<style>
  .card-usuario {
    margin-top: 65px;
  }

  .usuario {
    padding: 28px 0;
    background: rgba(255, 255, 255, 0.5);
    box-shadow: -12px 37px 45px rgba(133, 127, 201, 0.18);
    border-radius: 0px 0px 13px 13px;

    display: flex;
    justify-content: center;
  }

  .foto-container {
    margin-right: 50px;
    justify-content: center;
    align-items: center;
  }

  .foto-usuario {
    width: 12.75rem;
    height: 12.75rem;
    border: 4.56px solid #2e80fa;
    border-radius: 50%;
    background-size: cover;
  }

  .detalhes-usuario {
    margin-right: 10px;
    flex: 0.75;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
  }

  .detalhes-usuario > .info {
    font-weight: 600;
    font-size: 1.2rem;
    line-height: 31px;
    color: #395278;
  }

  .detalhes-usuario > .info > span {
    color: #6781a8;
    font-weight: normal;
  }

  .repositorios {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }
  .repositorios > .titulo {
    font-size: 1.2rem;
    line-height: 1.93rem;
    font-weight: 600;
    color: #395278;
  }

  .repositorio {
    font-size: 1.2rem;
    line-height: 1.93rem;
    color: #6781a8;
    transition: color 0.2s;
  }
</style>
