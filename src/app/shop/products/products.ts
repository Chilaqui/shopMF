
import { Component, ChangeDetectorRef } from '@angular/core';

// ChangeDetectorRef es lo que agregamos para solicitar a Angular
// que actualice la vista después de cambiar los datos.

import { ActivatedRoute } from '@angular/router';

// Permite leer los parámetros de la ruta actual, como "vianney"
// en la URL /products/vianney.

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {


  // Propiedades que guardan los datos que mostraremos en el HTML.
  // Empiezan como cadenas vacías y después reciben los datos del catálogo.
  titulo: string = '';
  descripcion: string = '';
  imagen: string = '';


  // Catálogo de información de cada marca o categoría.
  // Cada clave contiene su título, descripción y ruta de imagen.
  catalogo = {
    natura: {
      titulo: 'Productos Natura',
      descripcion: 'Descubre nuestra seleccion de productos Natura',

      // CAMBIO: agregamos "/" al inicio de la ruta.
      // Así la imagen se busca desde la raíz del sitio.
      imagen: '/assets/images/LogoNatura.png',
    },

    'price-shoes': {
      titulo: 'Productos Price Shoes',
      descripcion: 'Descubre nuestra seleccion de productos Price Shoes',
      imagen: '/assets/images/PriceShoes.png',
    },

    vianney: {
      titulo: 'Productos Vianney',
      descripcion: 'Descubre nuestra seleccion de productos Vianney',
      imagen: '/assets/images/vianney.png',
    },

    hogar: {
      titulo: 'Productos Hogar',
      descripcion: 'Descubre nuestra seleccion de productos para el hogar',
      imagen: '/assets/images/logoHogar.png',
    },
  };

  // CAMBIO:
  // Agregamos ChangeDetectorRef al constructor.
  // "private cdr" permite utilizarlo mediante this.cdr.
  constructor(
    private route: ActivatedRoute,
    private cdr: ChangeDetectorRef
  ) {

    
    // Suscribimos el componente a los cambios de los parámetros.
    // Esto permite reaccionar al pasar de una marca a otra,
    // aunque Angular reutilice el mismo componente.
    this.route.paramMap.subscribe((paramMap) => {

      
      // Obtiene el valor del parámetro "marca".
      // Ejemplo: /products/vianney devuelve "vianney".
      const marca = paramMap.get('marca');

     
      // Si no hay marca en la URL, utilizamos "hogar".
      const clave = marca ?? 'hogar';

     
      // Busca dentro del catálogo la entrada correspondiente a la clave.
      // "keyof typeof this.catalogo" ayuda a TypeScript a comprobar
      // que la clave corresponde a una propiedad del catálogo.
      const producto =
        this.catalogo[clave as keyof typeof this.catalogo];

      
      // Si encontró la marca, actualizamos las propiedades del componente.
      if (producto) {
        this.titulo = producto.titulo;
        this.descripcion = producto.descripcion;
        this.imagen = producto.imagen;

        // AGREGAMOS ESTOS console.log PARA DEPURAR:
        // Permiten comprobar en la consola qué valores se asignaron.
        console.log('Marca:', marca);
        console.log('Título:', this.titulo);
        console.log('Descripción:', this.descripcion);
        console.log('Imagen:', this.imagen);

        // CAMBIO:
        // Solicita a Angular actualizar la vista inmediatamente.
        // Normalmente Angular detecta estos cambios automáticamente,
        // así que debemos comprobar si esta línea es realmente necesaria.
        this.cdr.detectChanges();
      }
    });
  }
}
