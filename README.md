# Meu Dinheiro — publicação

Este repositório contém somente os arquivos públicos de distribuição do aplicativo.

O código-fonte é mantido em um repositório privado do proprietário. Login, usuários e dados financeiros são processados no Supabase, com acesso restrito por usuário. Nenhum dado financeiro, senha, backup de produção ou chave administrativa deve ser colocado aqui.

A publicação usa GitHub Pages, a partir da raiz da branch `main`. O arquivo `.nojekyll` preserva todos os arquivos JavaScript necessários.

Atualizações são produzidas no projeto de código-fonte com `bun install --frozen-lockfile` e `bun run build`. Publique apenas o conteúdo de `dist/`, sem arquivos de ambiente ou mapas de código-fonte.
