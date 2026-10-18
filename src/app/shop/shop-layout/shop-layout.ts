import { Component } from '@angular/core';
import {Home} from '../home/home';
import { RouterOutlet } from '@angular/router';
import { Navbar } from '../../Layout/navbar/navbar';

@Component({
  imports: [Home, RouterOutlet, Navbar],
  selector: 'app-shop-layout',
  styleUrl: './shop-layout.css',
  templateUrl: './shop-layout.html',
})
export class ShopLayout {}
