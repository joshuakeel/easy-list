import { Component, OnInit } from '@angular/core';

import { ListItem } from './api/models/list-item';
import { ListItemsService } from './api/services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'Easy List';
  currentItem = '';
  items: ListItem[] = [];

  constructor(private listItemsService: ListItemsService) {}

  ngOnInit() {
    this.listItemsService
      .listItemsGet$Json()
      .subscribe((itemsList) => (this.items = itemsList));
  }

  addItem() {
    this.listItemsService
      .listItemsPost$Json({ body: JSON.stringify(this.currentItem) })
      .subscribe((listItem) => this.items.push(listItem));

    this.currentItem = '';
  }

  deleteItem(index: number, id: number) {
    this.listItemsService.listItemsIdDelete({ id }).subscribe();
    this.items.splice(index, 1);
  }
}
