const personas = [new Persona("Juan", "Perez"), new Persona("Julia", "Saenz")];

const mostrarPersonas = () => {
  let texto = "";
  for (const persona of personas) {
    texto += `<li> ${persona.nombre} ${persona.apellido} </li>`;
  }
  let lista = document.getElementById("persona");
  lista.innerHTML = texto;
};

const agregarPersona = () => {
  const forma = document.forms["forma"];
  const nombre = forma["nombre"];
  const apellido = forma["apellido"];
  if (nombre.value != "" && apellido.value != "") {
    const persona = new Persona(nombre.value, apellido.value);
    console.log(persona);
    personas.push(persona);
    mostrarPersonas();
  }else{alert("No ingresó ningun dato")}
  nombre.value = "";
  apellido.value = "";
};
