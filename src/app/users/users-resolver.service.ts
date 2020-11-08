import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';
import { User } from '../users/user.model'
import { UserService } from './user.service';

@Injectable({providedIn: 'root'})
export class UsersResolverService implements Resolve<User[]> {
constructor( private dataStorageService: DataStorageService,
    private userService:UserService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const users = this.userService.getUsers();
        if(users.length === 0) {
        return this.dataStorageService.fetchUsers();
    } else {
        return users;
    }
}
}