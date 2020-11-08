import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from '../shared/task.model';
import { TaskListService } from './task-list.service';

@Component({
    selector:'app-task-list',
    templateUrl:'./task-list.component.html'
})

export class TaskListComponent implements OnInit, OnDestroy {
    tasks: Task[];
    private tkChangeSub: Subscription;

constructor(private tkService: TaskListService) {}
    
    ngOnInit() {
        this.tasks = this.tkService.getTasks();
        this.tkChangeSub = this.tkService.tasksChanged
        .subscribe(
            (tasks: Task[]) => {
                this.tasks = tasks;
            }
        );
    }

    ngOnDestroy(): void {
        this.tkChangeSub.unsubscribe();
    }

    onEditTask(index: number) {
        this.tkService.startedEditing.next(index);
    }

}