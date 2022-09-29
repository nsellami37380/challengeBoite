import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BlockABCComponent } from './block-abc/block-abc.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { ROUTES } from './app.routes';
import { UserComponent } from './user/user.component';
import { MenuComponent } from './menu/menu.component';
import { MyFormComponent } from './my-form/my-form.component';

@NgModule({
  declarations: [
    AppComponent,
    BlockABCComponent,
    UserProfileComponent,
    SignUpComponent,
    UserComponent,
    MenuComponent,
    MyFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
