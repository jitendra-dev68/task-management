import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  signal,
  ViewChild,
} from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { ColumnIds } from './home.model';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { TaskService } from '../../core/services/task.service';
import { map } from 'rxjs';
import { Task } from '../../types/task.types';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, DatePipe, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = Object.values(ColumnIds);
  dataSource = new MatTableDataSource<Task>();
  private readonly _taskService = inject(TaskService);
  readonly tasks = signal<Task[]>([]);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks() {
    this._taskService
      .getTasks()
      .pipe(
        map((tasks) => {
          this.tasks.set(tasks);
          this.dataSource.data = [...tasks];
        })
      )
      .subscribe();
  }
}
