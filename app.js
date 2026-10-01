'use strict';

(() => {
  // ---------- Dados ----------
  // Deputados federais disponíveis. "linha: 0" = usa a arte original do modelo (foto + nome).
  // Para os demais, informe nome (até 2 linhas), número, partido e, se quiser, foto (data URI).
  // Lista das dobradas 2026 (PolíticaRJ, 28/09/2026). Fotos do repositório Dobradas-Eleitorais.
  const FEDERAIS = [
{
"nome": "Anielle Franco",
"urna": "ANIELLE FRANCO",
"numero": "1330",
"partido": "PT",
"foto": "img/fotos/1330.webp"
},
{
"nome": "Aureo Ribeiro",
"urna": "AUREO RIBEIRO",
"numero": "7733",
"partido": "SOLIDARIEDADE",
"foto": "img/fotos/7733.webp"
},
{
"nome": "Bernardo Rossi",
"urna": "BERNARDO ROSSI",
"numero": "4400",
"partido": "UNIÃO BRASIL",
"foto": "img/fotos/4400.webp"
},
{
"nome": "Carlos Santana",
"urna": "CARLOS SANTANA",
"numero": "1302",
"partido": "PT",
"foto": "img/fotos/1302.webp"
},
{
"nome": "Charles Batista",
"urna": "CHARLLES BATISTA",
"numero": "4424",
"partido": "UNIÃO BRASIL",
"foto": "img/fotos/4424.webp"
},
{
"nome": "Daniel Soranz",
"urna": "DANIEL SORANZ",
"numero": "5588",
"partido": "PSD",
"foto": "img/fotos/5588.webp"
},
{
"nome": "Daniella Cunha",
"urna": "DANI CUNHA",
"numero": "2233",
"partido": "PL",
"foto": "img/fotos/2233.webp"
},
{
"nome": "Dr. Luizinho",
"urna": "DR. LUIZINHO",
"numero": "1177",
"partido": "PP",
"foto": "img/fotos/1177.webp"
},
{
"nome": "Dr. Rui Aguiar",
"urna": "DR. RUI",
"numero": "2567",
"partido": "PRD",
"foto": "img/fotos/2567.webp"
},
{
"nome": "Eduardo Bandeira de Mello",
"urna": "BANDEIRA DE MELLO",
"numero": "4333",
"partido": "PV",
"foto": "img/fotos/4333.webp"
},
{
"nome": "Enf. Rejane",
"urna": "ENFERMEIRA REJANE",
"numero": "6556",
"partido": "PCdoB",
"foto": "img/fotos/6556.webp"
},
{
"nome": "Enfermeira Luciana Rosa",
"urna": "ENFERMEIRA LUCIANA ROSA",
"numero": "7015",
"partido": "AVANTE",
"foto": "img/fotos/7015.webp"
},
{
"nome": "Laura Carneiro",
"urna": "LAURA CARNEIRO",
"numero": "5566",
"partido": "PSD",
"foto": "img/fotos/5566.webp"
},
{
"nome": "Léo Picciani",
"urna": "LÉO PICCIANI",
"numero": "4343",
"partido": "PV",
"foto": "img/fotos/4343.webp"
},
{
"nome": "Lindbergh Farias",
"urna": "LINDBERGH",
"numero": "1300",
"partido": "PT",
"foto": "img/fotos/1300.webp"
},
{
"nome": "Luciano Guerreiro (Causa Animal)",
"urna": "LUCIANO GUERREIRO",
"numero": "1515",
"partido": "MDB",
"foto": "img/fotos/1515.webp"
},
{
"nome": "Luciano Vieira",
"urna": "LUCIANO VIEIRA",
"numero": "4545",
"partido": "PSDB",
"foto": "img/fotos/4545.webp"
},
{
"nome": "Marcelo Freixo",
"urna": "FREIXO",
"numero": "1331",
"partido": "PT",
"foto": "img/fotos/1331.webp"
},
{
"nome": "Marcos Tavares",
"urna": "MARCOS TAVARES",
"numero": "1212",
"partido": "PDT",
"foto": "img/fotos/1212.webp"
},
{
"nome": "Martha Rocha",
"urna": "DELEGADA MARTA ROCHA",
"numero": "1240",
"partido": "PDT",
"foto": "img/fotos/1240.webp"
},
{
"nome": "Max Lemos",
"urna": "MAX",
"numero": "4490",
"partido": "UNIÃO BRASIL",
"foto": "img/fotos/4490.webp"
},
{
"nome": "Nisia Trindade",
"urna": "NÍSIA TRINDADE",
"numero": "1310",
"partido": "PT",
"foto": "img/fotos/1310.webp"
},
{
"nome": "Professor Ivanir dos Santos",
"urna": "PROFESSOR IVANIR DOS SANTOS",
"numero": "4060",
"partido": "PSB",
"foto": "img/fotos/4060.webp"
},
{
"nome": "Professor Rodney",
"urna": "PROFESSOR RODNEY",
"numero": "4321",
"partido": "PV",
"foto": "img/fotos/4321.webp"
},
{
"nome": "Reimont",
"urna": "REIMONT",
"numero": "1333",
"partido": "PT",
"foto": "img/fotos/1333.webp"
},
{
"nome": "Rick Azevedo",
"urna": "RICK AZEVEDO",
"numero": "5044",
"partido": "PSOL",
"foto": "img/fotos/5044.webp"
},
{
"nome": "Rosangela Gomes",
"urna": "ROSANGELA GOMES",
"numero": "1033",
"partido": "REPUBLICANOS",
"foto": "img/fotos/1033.webp"
},
{
"nome": "Sandrão da Saúde",
"urna": "SANDRÃO DA SAÚDE",
"numero": "1314",
"partido": "PT",
"foto": "img/fotos/1314.webp"
},
{
"nome": "Silvia Arão",
"urna": "SILVIA ARÃO",
"numero": "5518",
"partido": "PSD",
"foto": "img/fotos/5518.webp"
},
{
"nome": "Tainá de Paula",
"urna": "TAINÁ DE PAULA",
"numero": "1377",
"partido": "PT",
"foto": "img/fotos/1377.webp"
},
{
"nome": "Talita Galhardo",
"urna": "TALITA GALHARDO",
"numero": "4501",
"partido": "PSDB",
"foto": "img/fotos/4501.webp"
},
{
"nome": "Valdo Tavares",
"urna": "VALDO TAVARES",
"numero": "1321",
"partido": "PT",
"foto": "img/fotos/1321.webp"
},
{
"nome": "Welington Braga",
"urna": "WELINGTON BRAGA",
"numero": "7000",
"partido": "AVANTE",
"foto": "img/fotos/7000.webp"
}
];
  // Logos de partido recortados do próprio modelo da campanha. Partidos sem logo aqui mostram a sigla escrita.
  const LOGOS = {"PT": "img/logos/PT.png", "PSD": "img/logos/PSD.png", "PCDOB": "img/logos/PCDOB.png", "PSOL": "img/logos/PSOL.png", "PRD": "img/logos/PRD.png"};
  const logoImg = {};
  for (const [p, src] of Object.entries(LOGOS)){ const im = new Image(); im.onload = () => { logoImg[p] = im; desenhar(); }; im.src = src; }
  const PADRAO = Math.max(0, FEDERAIS.findIndex(f => f.linha === 0));

  const W = 1099, H = 1600, S = 2;   // coordenadas do modelo; a imagem final sai em 2x (2198×3200)
  const FOTO = { x: 155, y: 69, w: 225, h: 225, r: 20 };            // caixa "Sua foto aqui"
  const LINHA_Y = i => Math.round(327 + 204.4 * i);                  // topo de cada linha do modelo
  const R = {                                                        // regiões dentro de cada linha
    linha: { x: 138, w: 824, h: 206 },
    foto:  { x: 253, y: 19, w: 164, h: 164, r: 16 },
    nome:  { x: 421, y: 74, w: 268, h: 114 },
    num:   { x: 695, y: 81, w: 238, h: 104 },
  };

  const est = { federal: -1, benedita: false, pedro: false, paes: false, lula: false, comFoto: true };

  // ---------- Canvas ----------
  const tela = document.getElementById('tela');
  const ctx = tela.getContext('2d');
  const modelo = new Image();
  modelo.src = 'img/modelo.jpg';          // colinha preenchida (fonte das linhas escolhidas)
  const vazio = new Image();
  vazio.src = 'img/vazio.jpg';               // colinha vazia só com o André (base)
  function arred(c, x, y, w, h, r){
    c.beginPath(); c.moveTo(x+r,y); c.arcTo(x+w,y,x+w,y+h,r); c.arcTo(x+w,y+h,x,y+h,r);
    c.arcTo(x,y+h,x,y,r); c.arcTo(x,y,x+w,y,r); c.closePath();
  }

  function copiarLinha(i){
    const y0 = LINHA_Y(i);
    ctx.drawImage(modelo, R.linha.x, y0, R.linha.w, R.linha.h, R.linha.x, y0, R.linha.w, R.linha.h);
  }

  function ajustarFonte(txt, maxW, tam){
    ctx.font = `${tam}px Anton, Impact, sans-serif`;
    while (ctx.measureText(txt).width > maxW && tam > 18){ tam -= 2; ctx.font = `${tam}px Anton, Impact, sans-serif`; }
    return tam;
  }

  // Fundo atrás da foto nas cores do partido (raios de sol, no estilo das outras fotos do modelo)
  const CORES = {
    'PT':['#ffd21f','#e30613'], 'PCDOB':['#ffd21f','#c8102e'], 'PSOL':['#ffd21f','#8e1b7e'], 'PSB':['#ffd21f','#e5281c'],
    'PDT':['#1c3f94','#e30613'], 'PV':['#2e9e3f','#ffd21f'], 'PSD':['#0b3d91','#ffc20e'], 'PSDB':['#1d4f9c','#ffd21f'],
    'PP':['#1b5aa8','#65c6f0'], 'PL':['#123f8c','#ffd21f'], 'UNIÃO BRASIL':['#1e2a78','#00a3e0'], 'REPUBLICANOS':['#1e5aa8','#7fc241'],
    'AVANTE':['#1a9a4b','#ffcc00'], 'SOLIDARIEDADE':['#f28c28','#1d4f9c'], 'MDB':['#1f8a3d','#ffd21f'], 'PODE':['#2b9e4c','#1c3f94'],
    'PRD':['#0a2d6e','#ffd21f'],
  };
  function fundoFoto(x, y, w, h, partido){
    // fundo discreto: tom claro da cor do partido, com luz suave atrás da cabeça
    const [cor] = CORES[(partido || '').toUpperCase()] || ['#1515b5'];
    const hex = c => [1,3,5].map(k => parseInt(c.slice(k, k+2), 16));
    const [r, g, b] = hex(cor), mix = (t) => `rgb(${Math.round(r + (255-r)*t)},${Math.round(g + (255-g)*t)},${Math.round(b + (255-b)*t)})`;
    const lin = ctx.createLinearGradient(x, y, x, y + h);
    lin.addColorStop(0, mix(0.82)); lin.addColorStop(1, mix(0.55));
    ctx.fillStyle = lin; ctx.fillRect(x, y, w, h);
    const rad = ctx.createRadialGradient(x + w*0.5, y + h*0.38, 0, x + w*0.5, y + h*0.38, w*0.6);
    rad.addColorStop(0, 'rgba(255,255,255,.85)'); rad.addColorStop(1, 'rgba(255,255,255,0)');
    ctx.fillStyle = rad; ctx.fillRect(x, y, w, h);
  }

  // Cor de destaque da linha (bloco do número, faixa do cargo, caixa e número) conforme o partido
  const COR_LINHA = {
    'PT':'#e30613', 'PCDOB':'#c8102e', 'PSOL':'#d4001e', 'PSB':'#e5281c', 'PDT':'#1c3f94', 'PV':'#1f8a3d',
    'PSD':'#1417ba', 'PSDB':'#1d4f9c', 'PP':'#1b5aa8', 'PL':'#123f8c', 'UNIÃO BRASIL':'#1e2a78', 'REPUBLICANOS':'#1e5aa8',
    'AVANTE':'#1a8a44', 'SOLIDARIEDADE':'#e2711d', 'MDB':'#1f8a3d', 'PODE':'#23884a', 'PRD':'#0a2d6e',
  };
  const corDaLinha = p => COR_LINHA[(p || '').toUpperCase()] || '#e30613';
  const linhasCor = {};
  function linhaNaCor(cor){
    if (linhasCor[cor]) return linhasCor[cor];
    if (!linhaLimpa) prepararLinhaLimpa();
    const c = document.createElement('canvas'); c.width = linhaLimpa.width; c.height = linhaLimpa.height;
    const g = c.getContext('2d'); g.drawImage(linhaLimpa, 0, 0);
    const d = g.getImageData(0, 0, c.width, c.height), p = d.data;
    const alvo = [1,3,5].map(k => parseInt(cor.slice(k, k+2), 16));
    for (let k = 0; k < p.length; k += 4){
      const r = p[k], gg = p[k+1], b = p[k+2];
      if (r - Math.max(gg, b) > 40){            // pixel vermelho (ou borda vermelha misturada com branco)
        const t = Math.min(1, Math.max(0, 1 - (gg + b) / 2 / 255));
        p[k] = 255 + (alvo[0] - 255) * t; p[k+1] = 255 + (alvo[1] - 255) * t; p[k+2] = 255 + (alvo[2] - 255) * t;
      }
    }
    g.putImageData(d, 0, 0);
    return (linhasCor[cor] = c);
  }

  // Linha 1 "limpa": moldura vermelha do modelo, sem nome e com a caixa do número vazia
  let linhaLimpa = null;
  function prepararLinhaLimpa(){
    const y0 = LINHA_Y(0), c = document.createElement('canvas'); c.width = W*S; c.height = R.linha.h*S;
    const g = c.getContext('2d'); g.scale(S, S); g.imageSmoothingQuality = 'high';
    g.drawImage(modelo, R.linha.x, y0, R.linha.w, R.linha.h, R.linha.x, 0, R.linha.w, R.linha.h);
    g.fillStyle = '#ffffff'; g.fillRect(421, 74, 266, 118);
    const bx = 684, by = 74, bw = 260, bh = 122;
    const t = document.createElement('canvas'); t.width = bw*S; t.height = bh*S;
    const tg = t.getContext('2d'); tg.drawImage(vazio, bx*S, (y0+by)*S, bw*S, bh*S, 0, 0, bw*S, bh*S);
    const d = tg.getImageData(0, 0, bw*S, bh*S), p = d.data;
    for (let k = 0; k < p.length; k += 4){
      const L = (p[k] + p[k+1] + p[k+2]) / 3, f = Math.min(1, Math.max(0, (255 - L) / (255 - 129)));
      p[k] = 255 + (200 - 255)*f; p[k+1] = 255 + (28 - 255)*f; p[k+2] = 255 + (36 - 255)*f;
    }
    tg.putImageData(d, 0, 0); g.drawImage(t, bx, by, bw, bh);
    linhaLimpa = c;
  }

  function linhaPersonalizada(i, cand, cor){
    const y0 = LINHA_Y(i);
    const base = linhaNaCor(cor);
    ctx.drawImage(base, R.linha.x*S, 0, R.linha.w*S, R.linha.h*S, R.linha.x, y0, R.linha.w, R.linha.h);
    const fx = R.foto.x, fy = y0 + R.foto.y, fw = R.foto.w, fh = R.foto.h;
    ctx.save(); arred(ctx, fx, fy, fw, fh, R.foto.r); ctx.clip();
    fundoFoto(fx, fy, fw, fh, cand.partido);
    if (cand._img){
      const s = Math.max(fw/cand._img.width, fh/cand._img.height), dw = cand._img.width*s, dh = cand._img.height*s;
      ctx.drawImage(cand._img, fx + (fw-dw)/2, fy + fh - dh, dw, dh);
    } else {
      const ini = (cand.urna || cand.nome).replace(/^(DR|DRA|ENF)\.?\s+/i,'').split(/\s+/).filter(Boolean).slice(0,2).map(p=>p[0]).join('').toUpperCase();
      ctx.fillStyle = (CORES[(cand.partido || '').toUpperCase()] || ['#1515b5'])[0]; ctx.strokeStyle = 'rgba(255,255,255,.9)'; ctx.lineWidth = 8; ctx.lineJoin = 'round';
      ctx.textAlign = 'center'; ctx.textBaseline = 'middle'; ctx.font = '84px Anton, Impact, sans-serif';
      ctx.strokeText(ini, fx+fw/2, fy+fh/2+4); ctx.fillText(ini, fx+fw/2, fy+fh/2+4);
    }
    ctx.restore();
    const temLogo = !!logoImg[(cand.partido || '').toUpperCase()];
    const maxNome = temLogo ? 180 : 250;
    const palavras = (cand.urna || cand.nome).toUpperCase().split(/\s+/);
    const meio = Math.ceil(palavras.length/2);
    const inteiro = palavras.join(' ');
    ctx.font = '46px Anton, Impact, sans-serif';
    const umaLinha = palavras.length === 1 || ctx.measureText(inteiro).width <= Math.min(215, maxNome);   // só nome curto fica numa linha   // nome curto cabe numa linha só
    // quebra em 2 linhas no ponto mais equilibrado, sem deixar "DE/DA/DO" sozinho no fim da 1ª linha
    let corte = meio, melhor = Infinity;
    ctx.font = '46px Anton, Impact, sans-serif';
    for (let k = 1; k < palavras.length; k++){
      const a = palavras.slice(0, k).join(' '), b = palavras.slice(k).join(' ');
      let nota = Math.max(ctx.measureText(a).width, ctx.measureText(b).width);
      if (/^(DE|DA|DO|DOS|DAS|E)$/.test(palavras[k-1])) nota += 1000;
      if (nota < melhor){ melhor = nota; corte = k; }
    }
    const l1 = umaLinha ? inteiro : palavras.slice(0, corte).join(' ');
    const l2 = umaLinha ? '' : palavras.slice(corte).join(' ');
    ctx.fillStyle = '#262626'; ctx.textAlign = 'left'; ctx.textBaseline = 'alphabetic';
    const t = Math.min(ajustarFonte(l1, maxNome, 44), l2 ? ajustarFonte(l2, maxNome, 44) : 99);
    ctx.font = `${t}px Anton, Impact, sans-serif`;
    if (l2){ ctx.fillText(l1, 428, y0+114); ctx.fillText(l2, 428, y0+114+t+1); }
    else { ctx.fillText(l1, 428, y0+142); }
    const logo = logoImg[(cand.partido || '').toUpperCase()];
    if (logo){
      const k = Math.min(92 / logo.width, 54 / logo.height), lw = logo.width * k, lh = logo.height * k;   // cabe numa caixa 92×54
      ctx.drawImage(logo, 686 - lw, y0 + 176 - lh, lw, lh);
    }   // partido sem logo cadastrado: fica sem sigla até o logo chegar
    const bx = 694, by = y0 + 81, bw = 240, bh = 104;
    let tn = 130; ctx.font = `${tn}px Anton, Impact, sans-serif`;
    let m = ctx.measureText(cand.numero);
    while ((m.width > bw - 34 || (m.actualBoundingBoxAscent + m.actualBoundingBoxDescent) > bh - 18) && tn > 30){
      tn -= 2; ctx.font = `${tn}px Anton, Impact, sans-serif`; m = ctx.measureText(cand.numero);
    }
    ctx.fillStyle = cor; ctx.textAlign = 'center'; ctx.textBaseline = 'alphabetic';
    const alt = m.actualBoundingBoxAscent + m.actualBoundingBoxDescent;
    ctx.fillText(cand.numero, bx + bw/2, by + (bh - alt)/2 + m.actualBoundingBoxAscent);
  }

  // ---------- Foto do eleitor ----------
  let foto = null, original = null, escala = 1, offX = 0, offY = 0, giro = 0;
  const base = () => Math.max(FOTO.w / foto.width, FOTO.h / foto.height);
  function limitar(){
    const s = base()*escala, mx = (foto.width*s - FOTO.w)/2, my = (foto.height*s - FOTO.h)/2;
    offX = Math.max(-mx, Math.min(mx, offX)); offY = Math.max(-my, Math.min(my, offY));
  }

  function desenhar(){
    ctx.setTransform(S, 0, 0, S, 0, 0); ctx.imageSmoothingEnabled = true; ctx.imageSmoothingQuality = 'high';
    ctx.clearRect(0, 0, W, H);
    if (!vazio.complete || !vazio.naturalWidth || !modelo.complete || !modelo.naturalWidth) return;
    ctx.drawImage(vazio, 0, 0, W, H);

    // cada cargo escolhido vem da colinha preenchida; o resto fica vazio
    const fed = est.federal >= 0 ? FEDERAIS[est.federal] : null;
    if (fed){ copiarLinha(0); if (fed.linha !== 0) linhaPersonalizada(0, fed, corDaLinha(fed.partido)); }
    if (est.benedita) copiarLinha(2);
    if (est.pedro) copiarLinha(3);
    if (est.paes) copiarLinha(4);
    if (est.lula) copiarLinha(5);

    if (!est.comFoto){
      // cabeçalho sem a caixa de foto: desloca o título pra esquerda e recompõe o fundo
      const HY = 313, SH = 150;
      const cab = document.createElement('canvas'); cab.width = W*S; cab.height = HY*S;
      cab.getContext('2d').drawImage(vazio, 0, 0, W*S, HY*S, 0, 0, W*S, HY*S);
      ctx.fillStyle = 'rgb(20,23,186)'; ctx.fillRect(0, 0, W, HY);
      ctx.drawImage(cab, 400*S, 0, (W - 400)*S, HY*S, 400 - SH, 0, W - 400, HY);
      ctx.fillStyle = 'rgb(3,5,152)'; ctx.fillRect(W - SH - 2, 0, SH + 2, HY);
    } else if (foto){
      limitar();
      const s = base()*escala, dw = foto.width*s, dh = foto.height*s;
      const cx = FOTO.x + FOTO.w/2 + offX, cy = FOTO.y + FOTO.h/2 + offY;
      ctx.save(); arred(ctx, FOTO.x, FOTO.y, FOTO.w, FOTO.h, FOTO.r);
      ctx.fillStyle = '#fff'; ctx.fill(); ctx.clip();
      ctx.imageSmoothingQuality = 'high';
      ctx.drawImage(foto, cx - dw/2, cy - dh/2, dw, dh);
      ctx.restore();
    }
  }

  modelo.onload = desenhar; vazio.onload = desenhar;
  if (document.fonts && document.fonts.load) document.fonts.load('40px Anton').then(desenhar).catch(()=>{});

  // ---------- Controles de cargo ----------
  const selFed = document.getElementById('selFederal');
  selFed.add(new Option('Deixar em branco', -1));
  FEDERAIS.forEach((f, i) => selFed.add(new Option(`${f.nome} · ${f.numero}`, i)));
  selFed.value = '-1';
  FEDERAIS.forEach(f => { if (f.foto){ const im = new Image(); im.onload = () => { f._img = im; if (FEDERAIS[est.federal] === f) desenhar(); }; im.src = f.foto; } });
  selFed.onchange = () => { est.federal = +selFed.value; atualizar(); };

  const modCom = document.getElementById('modComFoto'), modSem = document.getElementById('modSemFoto');
  const setMod = v => { est.comFoto = v; modCom.setAttribute('aria-pressed', v); modSem.setAttribute('aria-pressed', !v);
    document.getElementById('blocoFoto').hidden = !v; document.getElementById('dica').hidden = true; desenhar(); };
  modCom.onclick = () => setMod(true); modSem.onclick = () => setMod(false);

  const tog = (id, chave) => {
    const el = document.getElementById(id);
    el.onclick = () => { est[chave] = !est[chave]; el.setAttribute('aria-pressed', est[chave]); atualizar(); };
  };
  tog('opBenedita', 'benedita'); tog('opPedro', 'pedro'); tog('opPaes', 'paes'); tog('opLula', 'lula');

  const chapaEl = document.getElementById('chapa');
  function atualizar(){
    const fed = est.federal >= 0 ? FEDERAIS[est.federal] : null;
    const itens = [
      ['Dep. Federal', fed && `${fed.nome.split(' ')[0]} · ${fed.numero}`, fed && fed.numero],
      ['Dep. Estadual · André Ceciliano', '13567', '13567', true],
      ['Senador', est.benedita && '131', est.benedita && '131'],
      ['Senador', est.pedro && '555', est.pedro && '555'],
      ['Governador', est.paes && '55', est.paes && '55'],
      ['Presidente', est.lula && '13', est.lula && '13'],
    ];
    chapaEl.innerHTML = '';
    for (const [rot, , num, dest] of itens){
      const d = document.createElement('div');
      if (dest) d.className = 'dest'; if (!num) d.className = 'vazio';
      const s = document.createElement('span'); s.textContent = rot;
      const n = document.createElement('strong'); n.textContent = num || 'sua escolha';
      d.append(s, n); chapaEl.append(d);
    }
    desenhar();
  }

  // ---------- Upload e ajuste ----------
  const preview = document.getElementById('preview');
  const inp = document.getElementById('arquivo');
  const zoom = document.getElementById('zoom'), zoomVal = document.getElementById('zoomVal');
  const status = document.getElementById('status');
  const setZoom = v => { escala = v; zoom.value = Math.round(v*100); zoomVal.textContent = zoom.value + '%'; };

  function aplicarGiro(){
    if (!giro){ foto = original; return; }
    const c = document.createElement('canvas'), vira = giro % 180 !== 0;
    c.width = vira ? original.height : original.width; c.height = vira ? original.width : original.height;
    const g = c.getContext('2d'); g.translate(c.width/2, c.height/2); g.rotate(giro*Math.PI/180);
    g.drawImage(original, -original.width/2, -original.height/2); foto = c;
  }

  const aviso = document.getElementById('avisoFoto');
  function avisoFoto(msg, neutro){ aviso.textContent = msg; aviso.hidden = !msg; aviso.classList.toggle('neutro', !!neutro); }
  inp.addEventListener('click', () => { inp.value = ''; });

  inp.addEventListener('change', e => {
    const f = e.target.files && e.target.files[0]; if (!f) return;
    if (f.type && !/^image\//i.test(f.type)){ avisoFoto('Esse arquivo não é uma foto. Escolha uma imagem da galeria.'); inp.value = ''; return; }
    if (f.size > 25 * 1024 * 1024){ avisoFoto('Foto muito grande (máx. 25 MB). Escolha outra.'); inp.value = ''; return; }
    avisoFoto('Carregando foto…', true);
    const url = URL.createObjectURL(f), img = new Image();
    img.onload = () => {
      if (!img.width || !img.height || img.width * img.height > 60e6){ URL.revokeObjectURL(url); avisoFoto('Não consegui usar essa foto. Tente outra.'); return; }
      const k = Math.min(1, 2400 / Math.max(img.width, img.height));
      const c = document.createElement('canvas'); c.width = Math.round(img.width*k); c.height = Math.round(img.height*k);
      c.getContext('2d').drawImage(img, 0, 0, c.width, c.height); URL.revokeObjectURL(url);
      avisoFoto(''); original = c; giro = 0; aplicarGiro(); offX = offY = 0; setZoom(1);
      preview.classList.add('tem-foto'); const dc = document.getElementById('dica'); dc.hidden = false; setTimeout(() => dc.hidden = true, 3500);
      document.getElementById('ajuste').hidden = false;
      document.getElementById('txtFoto').textContent = 'Trocar foto';
      desenhar();
      if (window.innerWidth < 840) preview.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };
    img.onerror = () => { URL.revokeObjectURL(url); avisoFoto(/hei[cf]/i.test((f.type || '') + (f.name || '')) ? 'Esse celular salvou a foto em HEIC, que o navegador não abre. Tire um print da foto e envie o print.' : 'Não consegui abrir essa foto. Tente outra imagem.'); };
    img.src = url; inp.value = '';
  });
  zoom.addEventListener('input', () => { setZoom(zoom.value/100); desenhar(); });
  document.getElementById('girar').onclick = () => { if (!original) return; giro = (giro+90)%360; aplicarGiro(); offX = offY = 0; desenhar(); };
  document.getElementById('centralizar').onclick = () => { offX = offY = 0; setZoom(1); desenhar(); };

  const toques = new Map(); let dist0 = 0;
  const fator = () => W / tela.getBoundingClientRect().width;
  tela.addEventListener('pointerdown', e => {
    if (!foto || !est.comFoto) return; document.getElementById('dica').hidden = true; tela.setPointerCapture(e.pointerId);
    toques.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (toques.size === 2){ const [a,b] = [...toques.values()]; dist0 = Math.hypot(a.x-b.x, a.y-b.y); }
  });
  tela.addEventListener('pointermove', e => {
    if (!foto || !toques.has(e.pointerId)) return;
    const ant = toques.get(e.pointerId), at = { x: e.clientX, y: e.clientY }; toques.set(e.pointerId, at);
    if (toques.size === 1){ const k = fator()*0.9; offX += (at.x-ant.x)*k; offY += (at.y-ant.y)*k; }
    else if (toques.size === 2){
      const [a,b] = [...toques.values()], d = Math.hypot(a.x-b.x, a.y-b.y);
      if (dist0) setZoom(Math.max(1, Math.min(3, escala*d/dist0))); dist0 = d;
    }
    desenhar();
  });
  const soltar = e => { toques.delete(e.pointerId); if (toques.size < 2) dist0 = 0; };
  tela.addEventListener('pointerup', soltar); tela.addEventListener('pointercancel', soltar);
  tela.addEventListener('wheel', e => {
    if (!foto) return; e.preventDefault();
    setZoom(Math.max(1, Math.min(3, escala*(e.deltaY < 0 ? 1.06 : 0.94)))); desenhar();
  }, { passive: false });

  // ---------- Baixar / compartilhar ----------
  const NOME = 'colinha-andre-ceciliano-13567.jpg';
  const TEXTO = 'Eu voto e peço seu voto! André Ceciliano 13567 para Deputado Estadual. Monte a sua colinha: ' + location.origin;
  // exporta em 1540×2242: tamanho que o WhatsApp recebe como foto (não como documento)
  const gerar = () => new Promise(r => {
    desenhar();
    const c = document.createElement('canvas'); c.width = 1540; c.height = 2242;
    const g = c.getContext('2d'); g.imageSmoothingEnabled = true; g.imageSmoothingQuality = 'high';
    g.fillStyle = '#ffffff'; g.fillRect(0, 0, c.width, c.height);
    g.drawImage(tela, 0, 0, c.width, c.height);
    c.toBlob(r, 'image/jpeg', 0.9);
  });
  let dl = null;   // capability de download quando roda como artifact

  function baixarLink(blob){
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = NOME;
    document.body.appendChild(a); a.click(); a.remove(); setTimeout(() => URL.revokeObjectURL(a.href), 4000);
  }

  document.getElementById('baixar').onclick = async () => {
    if (est.comFoto && !foto){ status.textContent = 'Coloque sua foto no passo 1 ou escolha "Sem foto".'; return; }
    const blob = await gerar();
    if (dl){
      try { await dl.save({ filename: NOME, data: blob }); status.textContent = 'Imagem salva! Agora é só postar.'; }
      catch (err){ status.textContent = err && err.code === 'declined' ? 'Download cancelado.' : 'Não deu pra salvar aqui. Tente de novo em instantes.'; }
      return;
    }
    baixarLink(blob); status.textContent = 'Imagem salva! No WhatsApp, anexe pelo ícone de câmera/Galeria (não por "Documento") pra ir como foto.';
  };

  const btnZap = document.getElementById('compartilhar');
  btnZap.onclick = async () => {
    const blob = await gerar(), arq = new File([blob], NOME, { type: 'image/jpeg' });
    try { await navigator.share({ files: [arq] }); status.textContent = 'Enviado! Mande também o link do site pra mais gente montar a sua.'; }
    catch (err){ if (!err || err.name !== 'AbortError') status.textContent = 'Não abriu o compartilhamento. Use "Baixar imagem" e anexe no WhatsApp.'; }
  };

  (async () => {
    try {
      const teste = new File([new Blob(['x'], { type: 'image/jpeg' })], 't.jpg', { type: 'image/jpeg' });
      if (navigator.canShare && navigator.canShare({ files: [teste] })) btnZap.hidden = false;
    } catch(e){}
  })();

  atualizar();
})();
