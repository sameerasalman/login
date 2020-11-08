import {  Injectable } from '@angular/core';
import { Task } from '../shared/task.model';
import { TaskListService } from '../task-list/task-list.service';
import { User } from './user.model';
import { Subject } from 'rxjs';

@Injectable()
export class UserService {
    usersChanged = new Subject<User[]>();

    //private users :User []= [
      //  new User(
        //    'Sameer', 
          // 'sam@gmail.com', 
            //'sameer', [
              //  new Task('sameer', 'completed', true)
         //   ]),
        //new User(
          //  'Sameer', 
            //'sam@gmail.com', 
           // 'sameer', 
            //[
            // new Task('sameera', 'terminated' ,false)
            //])
    //];

    private users: User[] = [];
    
    constructor(private tkService: TaskListService) {} 

    setUsers(users: User[]) {
        this.users = users;
        this.usersChanged.next(this.users.slice());
    }

    getUsers() {
        return this.users.slice(); 
    }

    getUser(index:number) {
        return this.users[index];
    }

    addUsersToTaskList(tasks: Task[]) {
        this.tkService.addTasks(tasks);
    }

    addUser(user: User) {
        this.users.push(user);
        this.usersChanged.next(this.users.slice());
    }

    updateUser(index: number, newUser: User) {
        this.users[index] = newUser;
        this.usersChanged.next(this.users.slice());
    }

    deleteUser(index: number) {
        this.users.splice(index,1);
        this.usersChanged.next(this.users.slice());
    }
    }