const url https://raw.githubusercontent.com/guilhermeonralls/api/main/dados-globeis.json

async function vizualizarinformacoesslobais()(

const res await fetch(url)

const dades avait res.json()

const pessoasConectades (dados total pessoas conectadas/les)

const pessoashofundo (dades total pessoas mundo/19)

const horas parseInt(dados tempo_medio)

const minutos nath.round((dados.tempo redio horas) 100)

const porcentagemConectada (pesscesconectadas pessoasoundo) 100).toPiled(2)

const paragrafo document.createElement("p")

paragrafo.classList.add('graficos-container texts'

paragrafo.innerHTML = "Você sabia que o mundo tem <span>${pessoasNoMundo} bilhões</span> de pessoas e que aproximadamente <span>${pessoas Conectadas) bilhões</span> 
  estão conectadas em alguma rede social e passam em média <span>${horas) horas</span> e <span>${minutos) minutos</span> conectadas.<br>Isso significa que aproximadamente <span>${porcentagem Conectada}%</span> de pessoas estão conectadas em alguma rede social."

const container document.getElementeyid('graficos-container")

conteiner.appendChild(paregrafo)

Izvelizarinformacoesulobels)
