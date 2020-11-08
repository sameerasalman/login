import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
    selector:'app-header',
    templateUrl:'./header.component.html'
})

export class HeaderComponent {
 constructor(private dataStorageService: DataStorageService) {}

    onSaveUsers() {
        this.dataStorageService.storeUser();
}
onFetchUsers() {
    this.dataStorageService.fetchUsers().subscribe();
}
}