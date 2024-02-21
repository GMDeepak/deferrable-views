import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  standalone: true,
  imports: [NgFor, NgIf],
})
export class TableDataComponent {
  http = inject(HttpClient);
  tableData: any;

  constructor() {
    this.http
      .get('https://jsonplaceholder.typicode.com/comments')
      .subscribe((response) => {
        this.tableData = response;
      });
  }
}
