import { Component, OnInit } from '@angular/core';
import { ItemService } from '../../Services/item.service';
import { Item } from '../../models/ItemNodels';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-item-list',
  standalone: true,
  imports: [NgFor],
  templateUrl: './item-list.component.html',
  styleUrl: './item-list.component.css'
})
export class ItemListComponent implements OnInit {
  items: Item[] = [];

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
      this.itemService.getItems().subscribe((data) => {
        this.items = data
      })
  }

  deleteItem(id: number): void {
    const mensajeConfirmacion = confirm('Estas seguro que quieres eliminar este item')

    if(mensajeConfirmacion) {
      this.itemService.deleteItem(id).subscribe(() => {
        this.items = this.items.filter((item) => item.id !== id)
      })
    }
  }
}
