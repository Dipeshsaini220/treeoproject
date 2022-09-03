import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

const routes: Routes = [
    {
        path: '', component: DashboardComponent,
        children: [
            { path: 'login', component: LoginComponent},
            { path: 'signup', component: SignupComponent }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class DashboardRoutingModule { }
