import { Component } from '@angular/core';
import {Sidebar} from '../sidebar/sidebar';
import { RouterOutlet } from '@angular/router';


@Component({
  
  selector: 'app-admin-layout',
  imports: [Sidebar, RouterOutlet],
  styleUrl: './admin-layout.css',
  templateUrl: './admin-layout.html',
})
export class AdminLayout {}
