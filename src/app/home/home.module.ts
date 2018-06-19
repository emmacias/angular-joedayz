


import { NgModule } from '@angular/core';

import { HomeComponent } from './home';
import { HomeRoutingModule } from './home.routing';



@NgModule({
    imports: [ //importas los modulos que vas a usar
        HomeRoutingModule
    ],
    declarations: [  //declaras los componentes
        HomeComponent
    ],
    providers: [],
})
export class HomeModule { }
