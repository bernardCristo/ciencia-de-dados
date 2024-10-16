Import (getcss, tickconfig from "./common.js"

async function quantidadeusuariosPorRede() {

const url

"https://raw.githubusercontent.com/guilhermeonrails/api/main/numero-usuarios.json"

const res asait fetch(url)

const dados await res.json()

const nomeDasRedes Object.keys(dados)

const quantidadeDeusuarios object.values (dados)

const data [

x: nomeDasRedes,

y: quantidadeDeusuarios,

type: 'bar',

color: getcss("--primary-color")

1

marker: (

const laytout = {

plot_bgcolor: getcss("--bg-color"),

title: (

paper_bgcolor: getCSS(--bg-color'),

text: "Redes sociais com mais usuários, x=0,

font: {

color: getcss('--primary-color"),

size: 38,

font: getcss(-font')

}

xaxis: {

tickfont: tickConfig,

title: {

text: 'Nome das redes',

font: {

color: getCSS(--secondary-color")

}

),

yaxis: {

tickfont: tickconfig,

title: {

text: 'Bilhões de usuários ativos',

font: {

color: getcss('--secondary-color')

}

const grafico document.createElement('div')

grafico.className = 'grafico

document.getElementById('graficos-container').appendChild(grafico)

quantidadeusuariosPorRede()

Plotly.newPlot(grafico, data, laytout)
