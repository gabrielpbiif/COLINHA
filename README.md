# Monte sua Colinha · André Ceciliano 13567

Site estático (HTML + CSS + JS, sem servidor e sem banco). O eleitor escolhe os candidatos, coloca a foto e baixa/compartilha a colinha.

## Segurança
- A foto do eleitor **nunca sai do aparelho**: a montagem é feita no navegador (canvas). O site não tem backend, não coleta dados e não usa rastreadores.
- `vercel.json` aplica cabeçalhos de segurança: CSP restrita (só scripts do próprio site), bloqueio de iframe (anti-clickjacking), HSTS, nosniff, no-referrer e bloqueio de câmera/microfone/localização.
- Fontes hospedadas no próprio site (sem Google Fonts em produção).
- Upload validado: só imagem, até 25 MB.

## Estrutura
- `index.html`, `styles.css`, `app.js`, `fonts.css`, `fonts/`
- `img/modelo.jpg` (colinha preenchida), `img/vazio.jpg` (colinha vazia só com o André)
- `img/fotos/NNNN.webp` (fotos dos federais, pelo número), `img/logos/PARTIDO.png`
- A lista de federais fica no topo de `app.js` (`const FEDERAIS = [...]`).

## Deploy
Vercel → Add New Project → importar este repositório → Framework: **Other** → sem build command → Deploy.
