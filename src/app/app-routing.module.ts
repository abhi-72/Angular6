import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { RegistrationComponent } from './Components/registration/registration.component';
import { UserinformationComponent } from './Components/home/userinformation/userinformation.component';
import { HomeComponent } from './Components/home/home.component';
import { AuthenticationComponent } from './Components/authentication/authentication.component';
//import { RouterModule } from '@angular/router';
import { TestComponent } from './Components/home/test/test.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

const routes: Routes = [
    //{ path:'', redirectTo:'/home', pathMatch:'full' },
    { path:'', redirectTo:'/login', pathMatch:'full' },
    { path:'home', component:HomeComponent },
    { path:'userinfo', component:UserinformationComponent },
    { path:'login', component:AuthenticationComponent },
    { path:'register', component:RegistrationComponent },
    { path:'test', component:TestComponent },
    //{ path:'logout', redirectTo:'/login', pathMatch:'full' },
    { path:"**", component:PageNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}
export const routingComponents = [
    RegistrationComponent,
    UserinformationComponent,
    HomeComponent,
    AuthenticationComponent,
    TestComponent,
    PageNotFoundComponent
]