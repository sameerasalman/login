import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { UsersComponent } from './users/users.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserItemComponent } from './users/user-list/user-item/user-item.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskEditComponent } from '../app/task-list/task-edit/task-edit.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DropdownDirective } from './shared/dropdown.directive';
import { TaskListService } from './task-list/task-list.service';
import { UserStartComponent } from './users/user-start/user-start.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './users/user.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    UsersComponent,
    UserListComponent,
    UserDetailComponent,
    UserItemComponent,
    TaskListComponent,
    TaskEditComponent,
    DropdownDirective,
    UserEditComponent,
    UserStartComponent,
    LoginComponent,
    RegisterComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [TaskListService, UserService], 
  bootstrap: [AppComponent]
})
export class AppModule { }
