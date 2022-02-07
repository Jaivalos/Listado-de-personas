
const personas = [
    new Persona("Juan", "Perez"),
    new Persona("Julia", "Saenz"),
];

const mostrarPersonas = () =>{
    let texto = "";
    for (const persona of personas) {
        texto += `<li> ${persona.nombre} ${persona.apellido} </li>`;
    }
    let lista = document.getElementById("persona");
    lista.innerHTML = texto;
}


