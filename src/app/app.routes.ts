import { Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {CustomerAccountComponent} from "./customer-account/customer-account.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";
import {AdminTemplateComponent} from "./admin-template/admin-template.component";
import {AuthenticationGuard} from "./guards/authentication.guard";
import {EditCustomerComponent} from "./edit-customer/edit-customer.component";

export const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:"admin",component:AdminTemplateComponent, canActivate:[AuthenticationGuard],children:[
      {path:'customers', component: CustomersComponent},
      {path:'new-customer', component: NewCustomerComponent},
      {path:'edit-customer', component: EditCustomerComponent},
      {path:'accounts', component: AccountsComponent},
      {path:'customer-account', component: CustomerAccountComponent },
      {path :"customer-accounts/:id", component : CustomerAccountComponent},
    ],},

];
