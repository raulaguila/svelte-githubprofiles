import type IRepositorio from "../interfaces/IRepositorio";
import type IUsuario from "../interfaces/IUsuario";

export default function montaUsuario(
  datasUser: any,
  datasRepos: any
): IUsuario {
    const repositorios_recentes = datasRepos.map((repositorio: any) => {
        return {
            nome: repositorio.name,
            url: repositorio.html_url
        } as IRepositorio;
    })

  return {
    login: datasUser.login,
    avatar_url: datasUser.avatar_url,
    perfil_url: datasUser.html_url,
    nome: datasUser.name,
    repositorios_publicos: datasUser.public_repos,
    seguidores: datasUser.followers,
    repositorios_recentes
  };
}
