import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ItemListComponent } from './Components/item-list/item-list.component';
import { ItemFormComponent } from './Components/item-form/item-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ItemListComponent, ItemFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular-crud-app';
}
