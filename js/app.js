const searchInput = document.getElementById('busca-cuidador');
const nurses = [...document.querySelectorAll(".enfermeira")]

const search = () => {
    nurses.forEach(nurse => nurse.style.display = "none")

    searchInput.value.length <= 0 && nurses.forEach(nurse => nurse.style.display = "")

    const filteredNurses = searchInput.value.length > 0
        ? nurses.filter(nurse => nurse.innerHTML.toLowerCase().includes(searchInput.value.toLowerCase()))
        : []

    filteredNurses.forEach(filteredNurse => filteredNurse.style.display = "")
}

searchInput.addEventListener('input', search)
