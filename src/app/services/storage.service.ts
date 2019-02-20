import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable()
export class StorageService {
  itemsChanged = new Subject<[]>();

  items = JSON.parse(localStorage.getItem('contacts-data')) || [];

  getAllItems() {
    return this.items.filter(i => !i.deleted);
  }

  getItem(id) {
    return this.getAllItems().find(i => i.id === id) || {};
  }

  getItemIndex(id) {
    return this.items.findIndex(i => i.id === id);
  }

  addItem(item) {
    item.id = (this.items.length + 1).toString();
    this.items.push(item);
    this.persist();
  }

  saveItem(item) {
    const index = this.getItemIndex(item.id);
    this.items[index] = item;
    this.persist();
  }

  deleteItem(id) {
    const index = this.getItemIndex(id);
    this.items[index].deleted = true;
    this.persist();
  }

  persist() {
    localStorage.setItem('contacts-data', JSON.stringify(this.items));
    this.itemsChanged.next(this.getAllItems());
  }
}