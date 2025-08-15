const inventory = [
  { title: 'The Hobbit', author: 'J.R.R. Tolkien', price: 15.99, rating: 4.8, inStock: true },
  { title: '1984', author: 'George Orwell', price: 12.99, rating: 4.7, inStock: false },
  { title: 'Fahrenheit 451', author: 'Ray Bradbury', price: 10.99, rating: 4.6, inStock: true },
  { title: 'Brave New World', author: 'Aldous Huxley', price: 9.99, rating: 4.5, inStock: true },
  { title: 'Moby Dick', author: 'Herman Melville', price: 8.99, rating: 4.0, inStock: false },
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 7.99, rating: 3.9, inStock: true },
  { title: 'War and Peace', author: 'Leo Tolstoy', price: 14.99, rating: 4.9, inStock: true },
  { title: 'Crime and Punishment', author: 'Fyodor Dostoevsky', price: 11.99, rating: 4.6, inStock: false },
  { title: 'Pride and Prejudice', author: 'Jane Austen', price: 6.99, rating: 4.2, inStock: true },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', price: 9.49, rating: 4.3, inStock: true },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12.49, rating: 4.8, inStock: false },
  { title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', price: 25.99, rating: 4.9, inStock: true },
  { title: 'The Grapes of Wrath', author: 'John Steinbeck', price: 8.49, rating: 4.1, inStock: true },
  { title: 'The Divine Comedy', author: 'Dante Alighieri', price: 17.99, rating: 4.4, inStock: false },
  { title: 'The Iliad', author: 'Homer', price: 13.99, rating: 4.3, inStock: true },
  { title: 'Don Quixote', author: 'Miguel de Cervantes', price: 18.49, rating: 4.7, inStock: false },
  { title: 'Ulysses', author: 'James Joyce', price: 16.99, rating: 4.2, inStock: true },
  { title: 'One Hundred Years of Solitude', author: 'Gabriel Garcia Marquez', price: 11.49, rating: 4.6, inStock: false },
  { title: 'The Brothers Karamazov', author: 'Fyodor Dostoevsky', price: 15.49, rating: 4.8, inStock: true },
  { title: 'Anna Karenina', author: 'Leo Tolstoy', price: 14.49, rating: 4.7, inStock: false },
  { title: 'The Odyssey', author: 'Homer', price: 12.99, rating: 4.4, inStock: true },
  { title: 'A Tale of Two Cities', author: 'Charles Dickens', price: 10.49, rating: 4.3, inStock: true },
  { title: 'Frankenstein', author: 'Mary Shelley', price: 7.49, rating: 4.1, inStock: false },
  { title: 'Jane Eyre', author: 'Charlotte Bronte', price: 8.99, rating: 4.5, inStock: true }
];


/*


    let ventana = document.getElementById("ventana");
    
    inventory.forEach(libros => {

      if(libros.inStock === true) {
      
      let libroDiv = document.createElement("p");
      libroDiv.textContent = `Título: ${libros.title}`;
      ventana.appendChild(libroDiv);
      }  

    })

    console.log(inventory.filter(libro => libro.price < 7.2));
    
    console.log(inventory.find(libro => libro.rating == 4.4));



    let ejercicio = document.getElementById("libros");

    inventory.forEach(libros2 => {

      let ContenedorDiv = document.createElement("div");

      ContenedorDiv.innerHTML = `<br>Titulo: ${libros2.title} <br> Precio: ${libros2.price}<br> Precio con 25% de descuento: ${libros2.price - (25 / 100 * libros2.price )}`;
      
      ejercicio.appendChild(ContenedorDiv);
      
    })
    */

    // let ArregloLibros = inventory.map(libros =>{
    //   let descuento = "no existe2";
    //   libros.descuento = descuento
    //   console.log(libros);
      
    // })



    
    // let contenedor_ejercicio7 = document.getElementById("ContenedorEjercicio7")

    // let ejercicio7 = inventory.map(libros =>{

    //   let contenedorLibros = document.createElement("div")

    //   let TituloporComas = libros.title.split("");
      
    //   let TituloAlReves = libros.title.split("").reverse().join("");

    //   let TituloIntermitente = TituloporComas.map((tituloss, posicion) =>{

    //     if (posicion % 2 === 0) {

    //       return tituloss.toUpperCase()
    //     } 
    //       return tituloss.toLowerCase()

    //   })      
      
    //   contenedorLibros.innerHTML = `<br>Titulo: ${libros.title} <br>Titulo deletreado: ${TituloporComas} <br>Titulo al reves: ${TituloAlReves} <br>Titulo Intermitente: ${TituloIntermitente.join("")}`;
    //   contenedor_ejercicio7.appendChild(contenedorLibros)
      
    // })


    //Ejercicio que resolvio el profesor.
    // let contenedor = document.getElementById("contenedor")
    // let nuevoArreglo = inventory.map(libro => {
    //   let nuevoLibro = {}
    //   let libro = libro.title
    //   nuevoLibro.title = libro
    //   let tituloDeletreado = titulo.split("").join(",")
    //   nuevoLibro.tituloDeletreado = tituloDeletreado
    //   let TituloAlReves = titulo.split("").reverse().join("")
    //   nuevoLibro.TituloAlReves = TituloAlReves
    //   let tituloMyM = titulo.split("")

    //   for (let i = 0; i < tituloMyM.length; i++) {
    //     if (i%2==0){
    //       tituloMyM[i] = titulo[i].toUpperCase();
    //     }tituloMyM[i] = titulo[i].toLowerCase();
        
    //   }nuevoArreglo.tituloMyM = tituloMyM.join("");
    //   return nuevoLibro
    // })
  
let mostrarTitulo = inventory.forEach(libro => { 
  
  for (let i = 0; i < libro.title.length; i++) {
    console.log(libro.title);
    
    if (libro.title == "The Iliad"){ console.log(`el titulo ${libro.title} esta en la posicion ${libro.title.length}`);
    } console.log("nada");
    
  }
  
  
   }) 


//verificar si existe algun libro con una calificacion menor de 3.7 o una calificacion menor a 4.1
// let Calificacion = inventory.findIndex(calificacion => { if(calificacion.rating < 3.7 || calificacion.rating < 4.1) {console.log(`${calificacion.rating}`)} else console.log(`No existe ${calificacion.rating}`);
// ;}
// )

//hecha por el profesor
console.log(inventory.some(calificacion => calificacion.rating < 3.1 || calificacion.rating <4.7));
