import { Component } from '@angular/core';

@Component({
  selector: 'app-book-add-edit',
  templateUrl: './book-add-edit.component.html',
  styleUrls: ['./book-add-edit.component.scss']
})
export class BookAddEditComponent {
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

}
