import { Component } from '@angular/core';
import { Car } from '../car/car';


@Component({
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
  imports: [Car],
})
export class Navbar {

  menuOpen = false;
  categoriesOpen = false;
  carOpen = false;
  

  


  openMenu(){
    this.menuOpen = true;
  }

  closeMenu(){
    this.menuOpen = false;
    this.categoriesOpen = false;
  }

  toggleCategories(){
  this.categoriesOpen = !this.categoriesOpen;
}
 toggleCar(){
  this.carOpen = !this.carOpen;
}




}
