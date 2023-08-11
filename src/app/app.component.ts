import { Component, OnInit, ViewChild, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookAddEditComponent } from './book-add-edit/book-add-edit.component';
import { BookService } from './service/book.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { CoreService } from './core/core.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'crud-app';
  displayedColumns: string[] = ['id', 'titulo', 'edicao', 'autor', 'dataPublicacao', 'lido', 'categoria', 'action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _dialog: MatDialog, private _bookService: BookService, private _coreService: CoreService) { }

  ngOnInit(){
      this.getLivros();
  }
  openAddEditBookForm() {
    const dialog = this._dialog.open(BookAddEditComponent)
    dialog.afterClosed().subscribe({
      next:(val) => {
        if(val){
          this.getLivros()
        }
      }
    })
  }

  getLivros(){
    this._bookService.findAll().subscribe({
      next: (res) => {
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
        console.log(res);
      },
      error: console.error
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  deleteLivro(id: number) {
    this._bookService.delete(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar("O Livro foi exclído!", "Done")
        this.getLivros();
      },
      error:console.log
    })
  }

  openEditBookForm(data: any) {
    const dialog = this._dialog.open(BookAddEditComponent, {
      data
    })

    dialog.afterClosed().subscribe({
      next:(val) => {
        if(val){
          this.getLivros()
        }
      }
    })
    
  }
}
