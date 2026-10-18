import { Routes } from '@angular/router';
import { AdminLayout } from './admin/admin-layout/admin-layout';
import { Home } from './shop/home/home';
import { ShopLayout } from './shop/shop-layout/shop-layout';
import { Categories } from './shop/categories/categories';
import { Offers } from './shop/offers/offers';
import { Products } from './shop/products/products';

export const routes: Routes = [
  {
    path: '',
    component: ShopLayout,
    children: [
      {path: '',component: Home},
      {path: 'categories/:tipo',component: Categories},
      {path: 'offers',component: Offers},
      {path: 'products',component: Products},
      {path: 'products/:marca',component: Products},
      {path: 'hogar',component: Products},
    ],
  },

  {
    path: 'admin',
    component: AdminLayout,
  },
];
