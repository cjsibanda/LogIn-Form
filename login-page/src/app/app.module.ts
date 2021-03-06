import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInFormComponent } from './sign-in-form/sign-in-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { OrderService } from './services/order.service';



@NgModule({
  declarations: [
    AppComponent,
    SignInFormComponent,
    HomeComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: '', component: HomeComponent},
      {path: './sign-in-form.component.html', component: SignInFormComponent},
      {path: '**', component: SignInFormComponent}
    ])

  ],
  providers: [
    OrderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }