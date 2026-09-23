import { Component } from '@angular/core';
import { NgClass } from '../../../../node_modules/@angular/common/types/_common_module-chunk';

@Component({
  selector: 'app-navbar',
  styleUrl: './navbar.css',
  templateUrl: './navbar.html',
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
