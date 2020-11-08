import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs/operators';
import { User } from '../users/user.model';
import { UserService } from '../users/user.service';

@Injectable({providedIn: 'root'})
export class DataStorageService {
    constructor(private http: HttpClient, private userServcie: UserService) {}

    storeUser() {
        const users = this.userServcie.getUsers();
        this.http.put('https://user-tasks-a1038.firebaseio.com/user.json', users).subscribe(response => {
            console.log(response);
        });
    }

    fetchUsers() {
        return this.http
        .get<User[]>('https://user-tasks-a1038.firebaseio.com/users.json')
        .pipe(map(users => {
            return users.map(user => {
                return {...user, tasks: user.tasks? user.tasks:[]}
            });
        }),
        tap(users => {
            this.userServcie.setUsers(users);
            
        })
        )
        
    }
}