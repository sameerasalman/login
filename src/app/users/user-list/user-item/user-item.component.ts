import { Component, Input, OnInit, Output } from '@angular/core';
import { User } from '../../user.model';

@Component({
    selector:'app-user-item',
    templateUrl:'./user-item.component.html'
})

export class UserItemComponent implements OnInit {
 @Input()   user: User;
@Input() index: number;
   ngOnInit(): void {
    }

    

}