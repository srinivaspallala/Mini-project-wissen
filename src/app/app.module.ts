import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CustomersComponent } from './customers/customers.component';
import { OrdersComponent } from './orders/orders.component';
import { AboutComponent } from './about/about.component';
import { LogoutComponent } from './logout/logout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CardViewComponent } from './card-view/card-view.component';
import { ListViewComponent } from './list-view/list-view.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditcustomerComponent } from './editcustomer/editcustomer.component';
import { FilterPipe } from './pipes/filter.pipe';
import { OrderlistComponent } from './orderlist/orderlist.component';
import { DataTablesModule } from 'angular-datatables';
import { ApiService } from './api.service';
import { HeadersInterceptor } from './headers.interceptor';
import { LoggingInterceptor } from './logging.interceptor';
import { AuthGuard } from './shared/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    OrdersComponent,
    AboutComponent,
    LogoutComponent,
    DashboardComponent,
    CardViewComponent,
    ListViewComponent,
    AddCustomerComponent,
    EditcustomerComponent,
    FilterPipe,
    OrderlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule
  ],
  providers: [ApiService,FilterPipe,
  {provide:HTTP_INTERCEPTORS, useClass:HeadersInterceptor , multi:true},
  {provide:HTTP_INTERCEPTORS, useClass:LoggingInterceptor , multi:true},
  AuthGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
