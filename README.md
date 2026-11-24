# Site pessoal — Nilo Ferreira

Página única do portfólio. Apresenta o perfil, os projetos no ar, a trajetória desde 1997, competências, formação e contato.

Stack: Next.js 16.4.6 (App Router), React 19, TypeScript, Tailwind CSS 4 e Motion.

## Rodar

```bash
pnpm dev
```

Abre em [http://localhost:3000](http://localhost:3000).

| Script | O que faz |
| --- | --- |
| `pnpm dev` | Servidor de desenvolvimento |
| `pnpm build` | Build de produção |
| `pnpm start` | Serve o build |
| `pnpm lint` | ESLint |

`next.config.ts` liga `cacheComponents` e `partialPrefetching`. O CSS do Tailwind entra pelo loader do Turbopack (`@tailwindcss/turbopack`).

## Página

Uma rota, `src/app/page.tsx`. O cabeçalho fica fixo e aponta para as seções.

| Seção | Arquivo | Conteúdo |
| --- | --- | --- |
| Hero | `src/components/Hero.tsx` | Nome, cargo, cidade e o traço de 1997 até hoje |
| Projetos | `src/components/Projects.tsx` | Cards com link (no ar) e cards tracejados (sem URL) |
| Trajetória | `src/components/Timeline.tsx` | Empregos em ordem cronológica; a linha cobalto acompanha o scroll |
| Competências e formação | `src/app/page.tsx` | Três colunas de skills e a lista de cursos |
| Contato | `src/app/page.tsx` | E-mail em `mailto:` sobre fundo tinta |

Textos, projetos, empregos, skills e formação ficam em `src/lib/content.ts`. Para atualizar o site, edite esse arquivo. Os componentes só leem esses dados.

Um projeto entra como card “No ar” quando tem `url`. Sem `url`, vira o card “Em breve”.

## Visual

Tokens em `src/app/globals.css`. O tema escuro troca as mesmas variáveis quando o sistema está em `prefers-color-scheme: dark`.

| Token | Claro | Escuro | Uso |
| --- | --- | --- | --- |
| `--paper` | `#e8edf1` | `#0f1822` | Fundo |
| `--paper-2` | `#dde4ea` | `#16222e` | Fundo da trajetória |
| `--ink` | `#14202b` | `#e4eaf0` | Texto e bloco de contato |
| `--muted` | `#566573` | `#93a3b1` | Texto secundário |
| `--cobalt` | `#2443d6` | `#8399ff` | Ponto do nome, traço, seleção, foco |
| `--amber` | `#e89a0c` | `#f2b32f` | Ponto final do traço (“hoje”) e hover de links |

Fontes, carregadas em `src/app/layout.tsx`:

- Bricolage Grotesque (`--font-display`) nos títulos. O nome do hero usa o eixo `wdth` 80.
- Public Sans no texto corrido.

O traço do hero é um único path SVG: onda quadrada (linha discada), serra que perde amplitude, depois senóide. Termina num círculo âmbar. A animação desenha o path e respeita `prefers-reduced-motion`.

Metadados (`title`, `description`, Open Graph) estão em `src/app/layout.tsx`. Idioma da página: `pt-BR`.

## Favicon

A marca é o “Nilo.” do cabeçalho, reduzida ao **N.** Fundo tinta `#14202b`, letra papel `#e8edf1`, ponto cobalto `#2443d6` na linha de base. O tile é fixo: não troca no tema escuro, para continuar legível na aba clara e na escura.

O Next publica os arquivos de `src/app/` sozinho. Não há `<link>` manual no layout.

| Arquivo | Onde aparece |
| --- | --- |
| `src/app/icon.svg` | Aba do navegador, vetorial (`sizes="any"`) |
| `src/app/favicon.ico` | Fallback em 16, 32 e 48 px |
| `src/app/apple-icon.png` | Ícone ao salvar no celular, 180 px |

O SVG é a fonte do desenho. O `.ico` e o PNG repetem o mesmo contorno: hastes do N em `(4.6–10.1)` e `(18.1–23.6)` no viewBox 32, diagonal entre elas, círculo em `(28.15, 24.85)` com raio `2.15`. Se a marca mudar, gere os dois bitmaps de novo a partir do SVG.
