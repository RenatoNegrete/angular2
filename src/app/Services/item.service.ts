import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from '../models/ItemNodels';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private apiURL = 'https://backend-ejemplo-acm.onrender.com/api/items'
  constructor(private http: HttpClient) { }

  getItems(): Observable<Item[]> {
    return this.http.get<Item[]>(this.apiURL)
  }

  getItem(id: number): Observable<Item> {
    return this.http.get<Item>(`${this.apiURL}/${id}`)
  }

  createItem(item: Item): Observable<Item> {
    return this.http.post<Item>(this.apiURL, item)
  }

  updateItem(id: number, item: Item): Observable<Item> {
    return this.http.put<Item>(`${this.apiURL}/${id}`, item)
  }

  deleteItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiURL}/${id}`)
  }
}
