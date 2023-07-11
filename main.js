//PROYECTO MIS LIBROS CON DOM
//class constructora
class Pelicula{
    constructor(id, director, titulo, precio, imagen){
       this.id = id,
       this.director = director,
       this.titulo = titulo,
       this.precio = precio,
       this.imagen = imagen
 
    }
 }
 
 //Instanciación de objetos: 
 const pelicula1 = new Pelicula(1,"Alejandro Doria","Esperando la Carroza",1000,"carroza.jpg")
 
 const pelicula2 = new Pelicula(2, "Juan José Campanella", "El secreto de sus ojos", 1000, "secreto.jpg")
 
 const pelicula3 = new Pelicula(3, "Luis Ortega", "El ángel", 1000, "angel.jpg" ) 
 
 const pelicula4 = new Pelicula(4, "Juan Szifron", "Relatos Salvajes", 1000, "salvajes.jpg" )
 
 const pelicula5 = new Pelicula(5, "Gastón Duprat", "El ciudadano Ilustre", 1000, "ciudadano.jpg")
 
 const pelicula6 = new Pelicula(6,"Fabián Bielinsky", "9 reinas", 1000, "reinas.jpg")
 
 //CREAR UN ARRAY DE OBJETOS
 const cartelera = []
 cartelera.push(pelicula1, pelicula2, pelicula3, pelicula4, pelicula5, pelicula6)



 //DOM CON ARRAY DE OBJETOS
 //capturar div libros
 let peliculasDiv = document.getElementById("peliculas")
 
 //recorrer estanteria para imprimir TOOODOS los elementos de mi array
 function mostrarCartelera(array){
    //resetear el DOM
    peliculasDiv.innerHTML = ``
    //Recorrer array para imprimir en el DOM
    for(let pelicula of array ){
       let nuevaPeliculaDiv = document.createElement("div")
       //agregar class
       nuevaPeliculaDiv.className = "col-12 col-md-6 col-lg-4 my-2"
       nuevaPeliculaDiv.innerHTML = `<div id="${pelicula.id}" class="card" style="width: 18rem;">
                                  <img class="card-img-top img-fluid" style="height: 200px;"src="assets/${pelicula.imagen}" alt="${pelicula.titulo} de ${pelicula.director}">
                                  <div class="card-body">
                                     <h4 class="card-title">${pelicula.titulo}</h4>
                                     <p>Autor: ${pelicula.director}</p>
                                     <p class="">Precio: ${pelicula.precio}</p>
                                  <button id="agregarBtn${pelicula.id}" class="btn btn-outline-success">Agregar al carrito</button>
                                  </div>
                               </div>`
       peliculasDiv.appendChild(nuevaPeliculaDiv)
 
       let agregarBtn = document.getElementById(`agregarBtn${pelicula.id}`)
       console.log(agregarBtn)

       agregarBtn.addEventListener("click", () => {
          console.log(`La pelicula ${pelicula.titulo} fue agregado al carrito`)
       })
    }
 
 }
 
 
 //capturo ID del boton
 let verCartelera = document.getElementById("verCartelera")
 //pasar evento:
 verCartelera.addEventListener("click", ()=>{
    mostrarCartelera(cartelera)
 })
 
 let ocultarCartelera = document.getElementById("ocultarCartelera")
 ocultarCartelera.ondblclick = () => {
    //reiniciando el div
    librosDiv.innerHTML = ``
 }
 
 //ordenar array por criterio
 let selectOrden = document.getElementById("selectOrden")
 
 selectOrden.addEventListener("change", () => {
    console.log(selectOrden.value)
    switch(selectOrden.value){
       case "1":
          ordenarMayorMenor(cartelera)
       break
       case "2":
          ordenarMenorMayor(cartelera)
       break
       case "3":
          ordenarAlfabeticamenteTitulo(cartelera)
       break
       default:
          mostrarCatalogo(cartelera)
       break
    }
 }
 )

 function ordenarMenorMayor(array){
    const menorMayor = [].concat(array)
    console.log(menorMayor)
    menorMayor.sort((a,b) => a.precio - b.precio)
    mostrarCartelera(menorMayor)
  }
  
  function ordenarMayorMenor(array){
    const mayorMenor = [].concat(array)
    mayorMenor.sort((elem1 ,elem2) => elem2.precio - elem1.precio)
    mostrarCartelera(mayorMenor)
  }
  
  function ordenarAlfabeticamenteTitulo(array){
    const arrayAlfabetico = [].concat(array)
    arrayAlfabetico.sort( (a,b) =>{
       if (a.titulo > b.titulo) {
          return 1
        }
        if (a.titulo < b.titulo) {
          return -1
        }
        return 0
    })
  
    mostrarCartelera(arrayAlfabetico)
  }
  
 
 
 //DOM agregar libro
 let agregarPeliBtn = document.getElementById("agregarPeliBtn")
 
 agregarPeliBtn.addEventListener("click", function(event){

    event.preventDefault()
   
    agregarPelicula(cartelera)
 })

  function agregarPelicula(array){
    let formAgregarPelicula = document.getElementById("formAgregarPelicula")
    console.log(formAgregarPelicula[0])
    console.log(formAgregarPelicula[1])
    console.log(formAgregarPelicula[2])
   
    const peliNueva = new Pelicula(array.length+1,formAgregarPelicula[1].value, formAgregarPelicula[0].value, parseInt(formAgregarPelicula[2].value), "angel.jpg")
    console.log(peliNueva)
 
    array.push(peliNueva)
    mostrarCartelera(array)
 
    formAgregarPelicula.reset()
    
 }
 
 
 
 
 
