const oculta = document.getElementById("oculta")
oculta.style.display = "none"
const resultabusca = document.getElementsByTagName("h2")

const procura = () => {
    const searchbox = document.getElementById("buscacuidador").value.toUpperCase();
    const vagas = document.getElementById("professional-list")
    const enfermeira = document.querySelectorAll(".enfermeira")
    const pname = vagas.getElementsByTagName("h4")
    

    for(var i = 0; i < pname.length; i++) {
        let achou = enfermeira[i].getElementsByTagName("h4")[0];

        if(achou) {
            let textvalue = achou.textContent || achou.innerHTML
            
            if(textvalue.toUpperCase().indexOf(searchbox) > - 1) {
                enfermeira[i].style.display = "";
                oculta.style.display = ""
            } else {
                enfermeira[i].style.display = "none";
                oculta.style.display = ""
            }
        }
    }
}
