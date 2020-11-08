import { Component, OnDestroy, OnInit  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from '../user.model';
import { UserService } from '../user.service';

@Component({
    selector:'app-user-list',
    templateUrl:'./user-list.component.html'
})

export class UserListComponent implements OnInit, OnDestroy {
users :User [];
subscription: Subscription;

    constructor(private userService: UserService,
        private router: Router,
        private route: ActivatedRoute) {}

    ngOnInit() {
       this.subscription = this.userService.usersChanged
        .subscribe(
            (users: User[]) => {
                this.users = users;
            }
        );
        this.users = this.userService.getUsers();
    }
 
    onNewUser() {
        this.router.navigate(['/register'])
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }

}