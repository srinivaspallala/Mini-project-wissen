import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { AuthGuard } from './shared/auth.guard';
import { CardViewComponent } from './card-view/card-view.component';
import { CustomersComponent } from './customers/customers.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { ListViewComponent } from './list-view/list-view.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { OrdersComponent } from './orders/orders.component';
import { RoleGuard } from './shared/role.guard';

const routes: Routes = [
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"login",component:LoginComponent},
  {path:"customers",component:CustomersComponent, canActivate:[AuthGuard]},
  {path:"orders",component:OrdersComponent,canActivate:[AuthGuard]},
  {path:"about",component:AboutComponent,canActivate:[RoleGuard]},
  {path:"logout",component:LogoutComponent,canActivate:[AuthGuard]},
  {path:"dashboard",component:DashboardComponent,
  canActivate:[AuthGuard]
},
  {path:"cardview",component:CardViewComponent,canActivate:[AuthGuard]},
  {path:"addcustomer",component:AddCustomerComponent,canActivate:[AuthGuard]},
  {path:"listview",component:ListViewComponent,canActivate:[AuthGuard]},
  {path:"edit/:uid",component:EditcustomerComponent,canActivate:[AuthGuard]},
  {path:"orderlist/:uid",component:OrderlistComponent,canActivate:[AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
