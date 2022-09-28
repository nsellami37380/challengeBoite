import { Routes } from '@angular/router';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';


const ROUTES: Routes = [
    { path: '', component: UserProfileComponent },
    { path: 'SignUp', component: SignUpComponent },
    { path: 'User', component: UserComponent }
  ];

  export { ROUTES };