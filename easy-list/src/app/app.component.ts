import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'Easy List';
  item = '';
  items = ['dog food', 'light bulbs', 'mac and cheese'];

  onAddItem(item: string) {
    this.items.push(item);
    this.item = '';
  }

  deleteItem(item: string) {
    const itemIndex = this.items.indexOf(item);
    this.items.splice(itemIndex, 1);
  }
}
