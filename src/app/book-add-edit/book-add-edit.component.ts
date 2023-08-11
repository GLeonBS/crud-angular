import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { BookService } from '../service/book.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CoreService } from '../core/core.service';

@Component({
  selector: 'app-book-add-edit',
  templateUrl: './book-add-edit.component.html',
  styleUrls: ['./book-add-edit.component.scss']
})
export class BookAddEditComponent implements OnInit {
  bookForm: FormGroup;


  categorias: string[] = [
    'Ação',
    'Aventura',
    'Romance',
    'Terror',
    'Ficção Científica',
    'Fantasia',
    'Suspense',
    'Drama',
    'Autoajuda',
    'Biografia',
    'Infantil',
    'Didático',
    'Religião',
    'Outros'
  ]

  constructor(private _fb: FormBuilder, @Inject(MAT_DATE_LOCALE) private _locale: string = 'br', private _bookService: BookService, private _dialogRef: MatDialogRef<BookAddEditComponent>, @Inject(MAT_DIALOG_DATA) public data: any, private _coreService: CoreService) {
    this.bookForm = this._fb.group({
      titulo: '',
      edicao: '',
      autor: '',
      dataPublicacao: '',
      lido: '',
      categoria: ''
    })
  }

  ngOnInit() {
    this.bookForm.patchValue(this.data);
  }


  onFormSubmit() {
    if (this.bookForm.valid) {
      if (this.data) {
        this._bookService.edit(this.data.id, this.bookForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar("O Livro foi editado!")
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        }
        );
      } else {
        this._bookService.create(this.bookForm.value).subscribe({
          next: (val: any) => {
            this._coreService.openSnackBar("O Livro foi criado!")
            this._dialogRef.close(true);
          },
          error: (err: any) => {
            console.error(err);
          }
        }
        );
      }
    }

  }



}
