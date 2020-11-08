import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/shared/task.model';
import { TaskListService } from '../task-list.service';

@Component({
    selector:'app-task-edit',
    templateUrl:'./task-edit.component.html'
})

export class TaskEditComponent implements OnInit, OnDestroy {
    @ViewChild('f', {static: false}) teForm: NgForm;
    subscription: Subscription;
    editMode = false;
    editedTaskIndex: number;
    editedTask: Task;
    
    
constructor(private tlService: TaskListService) {}

    ngOnInit(): void {
        this.subscription = this.tlService.startedEditing
        .subscribe(
            (index: number) => {
                this.editedTaskIndex = index;
                this.editMode = true;
                this.editedTask = this.tlService.getTask(index);
                this.teForm.setValue({
                    task: this.editedTask.task,
                    status: this.editedTask.status,
                    done: this.editedTask.done
                })
            }
        );
    } 

    onSubmit(form: NgForm) {
        const value = form.value;
        const newTask = new Task (value.task, value.status, value.done);
        if (this.editMode) {
            this.tlService.updateTask(this.editedTaskIndex, newTask);
        } else {
            this.tlService.addTask(newTask);
        }
        this.editMode = false;
        form.reset();
    }
 
    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
    onClear() {
        this.teForm.reset();
        this.editMode= false;
    }

    onDelete() {
        this.tlService.deleteTask(this.editedTaskIndex);
        this.onClear();
    }
    

}