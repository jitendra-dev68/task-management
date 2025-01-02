import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { Task } from './home.types';
import { ColumnIds } from './home.model';
import { DatePipe } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatTableModule, MatPaginatorModule, DatePipe, MatButtonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements AfterViewInit {
  displayedColumns: string[] = Object.values(ColumnIds);
  dataSource = new MatTableDataSource<Task>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
}
