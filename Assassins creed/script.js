//API

const link = 'https://react-assassins-creed.herokuapp.com/api/v1/games'

function main() {
    let data = getData(link)
    let dados = JSON.parse(data)
    return dados
}

function getData(link) {
    let request = new XMLHttpRequest()
    request.open('GET', link, false)
    request.send()

    return request.responseText
}

let dados = main();

//

document.addEventListener('DOMContentLoaded', exec())

function exec() {

    let botaoAnterior = document.getElementById('buttonAnterior');
    let botaoProximo = document.getElementById('buttonProximo');
    let game = document.getElementById('game')
    let nameGame = document.getElementById('nameGame')
    let genreGame = document.getElementById('genreGame')
    let remasterGame = document.getElementById('remasterGame')
    let sinopseGame = document.getElementById('sinopseGame')
    let devGame = document.getElementById('devGame')
    let releaseGame = document.getElementById('releaseGame')
    let pubGame = document.getElementById('pubGame')
    let engineGame = document.getElementById('engineGame')
    let compGame = document.getElementById('compGame')
    let platformGame = document.getElementById('platformGame')
    let siteGame = document.getElementById('siteGame')
    let videoGame = document.getElementById('videoGame')

    let imgGame = document.getElementById('imgGame')


    let contadorId = 1

    pegarDados()

    botaoAnterior.addEventListener('click', pegarDados)
    botaoProximo.addEventListener('click', pegarDados)

    function pegarDados() {
        if (this === botaoAnterior) {
            contadorId--
        } else if(this === botaoProximo) {
            contadorId++
        }
        if (contadorId === 0) {
            contadorId = 12
        } else if (contadorId === 13) {
            contadorId = 1
        }

        dados.forEach((item) => {
            if (item.id === contadorId) {
                inserirDados(
                    item.name, item.genre, item.remastered, item.synopsis, item.developer, item.release_date, item.publisher,
                    item.engine, item.composer, item.platforms, item.trailer, item.website, item.poster
                )
            }
        })
    }

    function inserirDados(name, genre, remaster, sinopse, dev, release, pub, engine, comp, platform, video, site, img) {
        nameGame.innerHTML = name
        genreGame.innerHTML = genre
        remasterGame.innerHTML = remaster === true ? 'Yes' : 'No'
        sinopseGame.innerHTML = sinopse
        devGame.innerHTML = dev
        releaseGame.innerHTML = release
        pubGame.innerHTML = pub
        engineGame.innerHTML = engine
        compGame.innerHTML = comp
        platformGame.innerHTML = platform
        siteGame.href = site

        let link = video;
        let link_array = link.split('=');

        videoGame.src = `https://www.youtube.com/embed/${link_array[1]}`

        imgGame.src = img

    }
}