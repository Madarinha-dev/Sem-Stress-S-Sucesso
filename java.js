const localStorageKey = "to-do-list-gn"

function nova_tarefa() {
    let titulo = document.getElementById("titulo").value 

    if(titulo == "") {
        alert('Digite algo em sua lista')
    }

    else {
        let valuesTitulo = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
        valuesTitulo.push({name: titulo})
        localStorage.setItem(localStorageKey,JSON.stringify(valuesTitulo))
        mostrar_valores()
    }
}

function mostrar_valores() {
    let valuesTitulo = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let list = document.getElementById('to-do-list')


    list.innerHTML = ''

    for(let i = 0; i < valuesTitulo.length; i++) {
        list.innerHTML += `<li>${valuesTitulo[i]['name']} <img onclick='removerItem("${valuesTitulo[i]['name']}")' src="imagens/WhatsApp Image 2024-06-27 at 20.54.03.jpeg" alt="" id="img-x"> </li>`
        
    }
    
}
mostrar_valores()

function removerItem(data) {
    let valuesTitulo = JSON.parse(localStorage.getItem(localStorageKey) || "[]")
    let index = valuesTitulo.findIndex(x => x.name == data);
    valuesTitulo.splice(index,1)
    localStorage.setItem(localStorageKey,JSON.stringify(valuesTitulo))
    mostrar_valores()
    
}
