import { Component, OnInit } from "@angular/core";
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
    selector: 'user-edit',
    templateUrl: './user-edit.component.html'
})

export class UserEditComponent implements OnInit{
id: number;
editMode = false;
userForm: FormGroup;

    constructor(private route: ActivatedRoute,
        private userService: UserService,
        private router: Router) {}

    ngOnInit() {
        this.route.params
        .subscribe(
            (params: Params) => {
                this.id = +params['id'];
                this.editMode = params['id'] != null;
                this.initform();
            }
        );
    }

    onSubmit() {
        //const newUser = new User(this.userForm.value['name'],
        //this.userForm.value['email'],
        //this.userForm.value['password'],
        //this.userForm.value['tasks']);
        if (this.editMode) {
            this.userService.updateUser(this.id, this.userForm.value);
        } else {
            this.userService.addUser(this.userForm.value);
        }
        this.onCancel();
    }


    private initform() {
        let userName ='';
        let userEmail = '';
        let userPassword = '';
        let userTasks = new FormArray([]);

        if(this.editMode) {
            const user = this.userService.getUser(this.id);
            userName = user.name;
            userEmail = user.email;
            userPassword = user.password;
            if(user['tasks']) {
                for(let task of user.tasks) {
                    userTasks.push(
                        new FormGroup({
                            'task': new FormControl(task.task, Validators.required),
                            'status': new FormControl(task.status, Validators.required),
                            'done': new FormControl(task.done, Validators.required) 
                        })
                    );
                }
            }
        }
        this.userForm = new FormGroup({
            'name': new FormControl(userName, Validators.required),
            'email': new FormControl(userEmail, Validators.required),
            'password': new FormControl(userPassword, [
                Validators.required,
            Validators.pattern(/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/)]),
            'tasks': userTasks
        });
    }
onCancel() {
    this.router.navigate(['../'], {relativeTo: this.route})
}
    onAddTask() {
        (<FormArray>this.userForm.get('tasks')).push(
            new FormGroup({
                'task': new FormControl(),
                'status': new FormControl(),
                'done': new FormControl()
            })
        )
    }
}