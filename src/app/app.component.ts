import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookAddEditComponent } from './book-add-edit/book-add-edit.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'crud-app';

  constructor(private _dialog: MatDialog) { }

  openAddEditBookForm() {
    this._dialog.open(BookAddEditComponent)
  }
}
