const urlInput = document.getElementById('inputURLImagen');
const titutoImagen = document.getElementById('titleImagen')
const agregarBtn = document.getElementById('añadirImagen');
const imagenesDiv = document.getElementById('imagenes');

//Obtenemos los dos input y el boton para agregar las imagenes y el apartado donde van a agregarse

let imagenes = []; //establecemos un array vacio donde guardaremos las imagenes

agregarBtn.addEventListener('click', () => {
    const url = urlInput.value;
    if (url) {
        const imagen = {
            url,
            titulo: titutoImagen       //con esta funcion al hacer click en el boton pusheamos la imagen en la lista con su url y su titulo
        };
        imagenes.push(imagen);
        mostrarImagenes();  //llamamos la funcion de mostrar las imagenes en el html
        urlInput.value = '';
    }
});

function mostrarImagenes() {
    imagenesDiv.innerHTML = '';
    imagenes.forEach(imagen => {
        const divImagen = document.createElement('div');
        divImagen.classList.add('imagen');   //con esta funcion recorremos el espacion del div 'imagenes' y le hacemos un appendChild con nuevas etiquetas que nos ayudaran a ubicar la imagen que al clickear nos llevara a sus detalles y el boton de eliminar
        divImagen.innerHTML = `
            <a href="${urlInput.value}" target="_blank">
            <img src="${imagen.url}" alt="${imagen.titulo.value}">
            </a>
            <p>${imagen.titulo.value}</p>
            <button class="eliminar">Eliminar</button>
        `;
        imagenesDiv.appendChild(divImagen);

        const eliminarBtn = divImagen.querySelector('.eliminar');
        eliminarBtn.addEventListener('click', () => {
            imagenes = imagenes.filter(img => img !== imagen);   //esta funcion nos permite hacer click en el boton eliminar y hacer un removechild en la posicion de la imagen que queremos eliminar
            divImagen.parentNode.removeChild(divImagen);
        });
    });
}