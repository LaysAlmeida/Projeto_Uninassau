const procura = () => {
    const searchbox = document.getElementById("buscacuidador").value.toUpperCase();
    const vagas = document.getElementById("professional-list")
    const enfermeira = document.querySelectorAll(".enfermeira")
    const pname = document.getElementsByTagName("h4")

    for(var i = 0; i < pname.length; i++) {
        let achou = enfermeira[i].getElementsByTagName("h4")[0];

        if(achou) {
            let textvalue = achou.textContent || achou.innerHTML

            if(textvalue.toUpperCase().indexOf(searchbox) > - 1) {
                enfermeira[i].style.display = "";
            } else {
                enfermeira[i].style.display = "none";
            }
        }
    }
}