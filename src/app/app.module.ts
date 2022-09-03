import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
// import { DashboardComponent } from './dashboard/dashboard.component';
// import { SignupComponent } from './signup/signup.component';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule} from "ngx-bootstrap/tabs";
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    // AppRoutingModule,  
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    TabsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor(){
    console.log('app module loaded')
  }
}
