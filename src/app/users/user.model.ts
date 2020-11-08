import { Task } from '../shared/task.model';

export class User {
    public username: string;
    public email: any;
    public password: string;
    public tasks: Task[];
    name: string;

    constructor(username: string, password: string, email:any, tasks: Task[]) {
        this.username= username;
        this.email = email;
        this.password= password;
        this.tasks = tasks;
    }
}
