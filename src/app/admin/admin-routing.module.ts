import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { GestprodComponent } from './gestprod/gestprod.component';
import { ProductaddcomponentComponent } from './gestprod/productaddcomponent.component';
import { HomeadmComponent } from './homeadm/homeadm.component';
import { ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {path : 'admin' , component : AdminComponent , children:[
    {path : 'homeadm' , component : HomeadmComponent} ,
    {path:'gestprod' , component : GestprodComponent 
    //  children : [
    //   {path :'addproduct' , component : ProductaddcomponentComponent}
    // ]
  }
  ]}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
