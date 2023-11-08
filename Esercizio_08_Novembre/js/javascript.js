//  tre cose
// 1. funzione che aggiunge addtask
// 2. funzione che gestisce task complete (riga sbarrata)
// 3.funzione che fa  attachDelete cancella ()

const click = document.getElementById("addButton")
    click.addEventListener("click",addTask);
    const rimuovi = document.getElementById
// const handleSubmit = function(e){
//     e.preventDefault() // evita il comportamento di default di cercare di inviare il form
//     preventDefault()
//     addTask()
//     attachComplete()
//     attachDelete()
// }
   function addTask(){
    let inputField = document.querySelector("#myDiv input");
    inputField.style.fontWeight= "bold";
    const button= document.createElement("button");
    button.innerHTML= "Rimuovi";
    const paragrafo = document.getElementById("demo");
     paragrafo.innerHTML += `${inputField.value} <br>`;
     paragrafo.appendChild(button)
    

}

// const addTask = function (){
// agganciare glielementi html come stamani
// stampare l'html necessario per aggiungere il valure nel mio campo input inputField.value
// ogni task che aggiungo aggiunge html -> +=
// }
// const attachComplete = function(){
// //aggancia gli elementi html
// //li ciclo con for
// //all'elemento che seleziono aggiunge| toglie una classe (toggle)
// andare a vedere atributo this per leggere il contenuto
// }

// const attachDelete = function(){
// // aggancia elementi html
// //ciclo for
// //remove per rimuovere qualcosa . remove
// // css text decoration:line-through;
// }
// window.onload = function() {
//     let form =document.querySelector ('form')
//     form.addlistener('submit',handleSubmit)
// }
// andare a vedere atributo this per leggere il contenuto 