import { Routes } from '@angular/router';
import { Home } from './comps/home/home';
import { Interpolation } from './databinding/interpolation/interpolation';
import { Property } from './databinding/property/property';
import { Event } from './databinding/event/event';
import { TwoWay } from './databinding/two-way/two-way';
import { Attribute } from './databinding/attribute/attribute';
import { Class } from './databinding/class/class';
import { Style } from './databinding/style/style';
<<<<<<< HEAD
import { ProductsComponent } from './products/products';
export const routes: Routes = [
  { path: '',              component: Home              },
  { path: 'interpolation', component: Interpolation     },
  { path: 'property',      component: Property          },
  { path: 'event',         component: Event             },
  { path: 'twoway',        component: TwoWay            },
  { path: 'attribute',     component: Attribute         },
  { path: 'class',         component: Class             },
  { path: 'style',         component: Style             },
  { path: 'products',      component: ProductsComponent },
  { path: '**',            redirectTo: ''               }
=======

export const routes: Routes = [
  { path: '',              component: Home          },
  { path: 'interpolation', component: Interpolation },
  { path: 'property',      component: Property      },
  { path: 'event',         component: Event         },
  { path: 'twoway',        component: TwoWay        },
  { path: 'attribute',     component: Attribute     },
  { path: 'class',         component: Class         },
  { path: 'style',         component: Style         },
  { path: '**',            redirectTo: ''           }
>>>>>>> 7d46a3d7fabe598c4b68b2c92617eba5662f852f
];