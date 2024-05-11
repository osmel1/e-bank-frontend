import { Routes } from '@angular/router';
import {CustomersComponent} from "./customers/customers.component";
import {NewCustomerComponent} from "./new-customer/new-customer.component";
import {CustomerAccountComponent} from "./customer-account/customer-account.component";
import {AccountsComponent} from "./accounts/accounts.component";
import {HomeComponent} from "./home/home.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  {path:"login", component: LoginComponent},
  {path:"",redirectTo:"login",pathMatch:"full"},
  {path:'admin/customers', component: CustomersComponent},
  {path:'new-customer', component: NewCustomerComponent},
  {path:'accounts', component: AccountsComponent},
  {path:'customer-account', component: CustomerAccountComponent },
];
