import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { MedicareAvailableComponent } from './medicare-available/medicare-available.component';
import { UserSignupComponent } from './user-signup/user-signup.component';
import { SigninComponent } from './signin/signin.component';
import { OrdersComponent } from './orders/orders.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersComponent } from './admin-dashboard/users/users.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminDashboardComponent,
    MedicareAvailableComponent,
    UserSignupComponent,
    SigninComponent,
    OrdersComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
