import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { LoginRoutingModule } from './login-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [SharedModule, LoginRoutingModule],
})
export class LoginModule {}
