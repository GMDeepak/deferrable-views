import { Component } from '@angular/core';
import { TableDataComponent } from '../table-data/table-data.component';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  standalone: true,
  imports: [TableDataComponent],
})
export default class TableViewComponent {
  loadData = false;
}
