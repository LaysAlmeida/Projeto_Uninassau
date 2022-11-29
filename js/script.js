const form = document.querySelector("#form")
const avancar = document.querySelector("#avancar")
const voltar = document.querySelector("#voltar")
const pag1 = document.querySelector(".pag-1")
const pag2 = document.querySelector(".pag-2")

if (pag1.classList.contains("show")) {
    avancar.classList.add('show')
}

avancar.addEventListener('click', () => {
    console.log("avancou");

    pag1.classList.replace("show", "hide")
    pag2.classList.replace("hide", "show")
    avancar.classList.replace("show", "hide")
    voltar.classList.replace("hide", "show")
    cadastrar.classList.replace("hide", "show")
})

voltar.addEventListener('click', () => {
    console.log("voltou");

    pag1.classList.replace("hide", "show")
    pag2.classList.replace("show", "hide")
    avancar.classList.replace("hide", "show")
    voltar.classList.replace("show", "hide")
    cadastrar.classList.replace("show", "hide")
})
