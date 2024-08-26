//Botones para mostrar y ocultar el modal, los traigo con el id de los botones
const btnLanzarModal = document.querySelector('#lanzar-modal');
const btnOcultarModal = document.querySelector('#ocultar-modal');

//Contenedor del modal
const contModal = document.querySelector('.contenedor-modal');

//Traigo los datos del formulario segun el id de cada input
const tituloInput = document.querySelector('#titulo');
const descripcionInput = document.querySelector('#descripcion');
const cardImage = document.querySelector('#card-image');


//Funcion para mostrar 
btnLanzarModal.addEventListener('click', (e) => {
    e.preventDefault();
    contModal.classList.add('mostrar');
});


//Funcion para ocultar el modal
btnOcultarModal.addEventListener('click', (e) => {
    e.preventDefault();

  // Condicional para que no se pueda cerrar el modal si hay campos vacíos
  if (tituloInput.value.length === 0 || descripcionInput.value.length === 0 ){
    alert('Todos los campos son obligatorios.');
    return;
  }else{
    // Detiene la ejecución si algún campo está vacío
    contModal.classList.remove('mostrar');
    

    const card = document.querySelector('.card-container');

        const pTitulo = document.getElementById("titulo").value;git
        const pDescripcion = document.getElementById("descripcion").value;
        const imageUrl = document.getElementById("cardImage").value || "https://picsum.photos/200";
        const bgColor = document.getElementById("card-bg-color").value;
        const borderColor = document.getElementById("card-border-color").value;
        const txtColor = document.getElementById("text-color").value;



    const cardContainer = document.querySelector('.card-container');
    const newCard = document.createElement("div");
    
    
    newCard.className = "card";
    newCard.style.backgroundColor = bgColor;
    newCard.style.borderColor = borderColor;
    newCard.style.color =txtColor;
    newCard.innerHTML = ` 
    
    <div class="card-body">
        <img src="${imageUrl}" class="card-img-top" alt="Nueva linea" />
        <div class="card-body">
            <h5 class="card-title"> ${pTitulo} </h5>
            <p class="card-text">${pDescripcion}
            </p>
            <a href="autogestion.html" class="btn btn-primary">Comenzar</a>
        </div>
    </div>
    `;  
  
    cardContainer.appendChild(newCard);

    // Limpiar los campos del formulario
    tituloInput.value = '';
    descripcionInput.value = '';
    cardImage.value = '';
    
    return;
}

});