import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { TaskListComponent } from './task-list/task-list.component';
import { UserDetailComponent } from './users/user-detail/user-detail.component';
import { UserEditComponent } from './users/user-edit/user-edit.component';
import { UserStartComponent } from './users/user-start/user-start.component';
import { UsersResolverService } from './users/users-resolver.service';
import { UsersComponent } from './users/users.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'}, 
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: '', component: UserStartComponent},
    {path: 'new', component: UserEditComponent},
    {path: ':id', component: UserDetailComponent, resolve: UsersResolverService},
    {path: ':id/edit', component: UserEditComponent, resolve: UsersResolverService}
  
  ]},
  { path: 'task-list', component: TaskListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
