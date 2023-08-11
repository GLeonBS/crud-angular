import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor(private _http: HttpClient) { 
  }

  create(data: any): Observable<any>{
    return this._http.post('http://localhost:3000/livros', data)
  }

  findAll(): Observable<any>{
    return this._http.get('http://localhost:3000/livros')
  }

  delete(id: number): Observable<any>{
    return this._http.delete(`http://localhost:3000/livros/${id}`)
  }

  edit(id: number, data: any): Observable<any>{
    return this._http.put(`http://localhost:3000/livros/${id}`, data)
  }
}
