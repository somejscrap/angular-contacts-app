import { Component, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'item',
  template: require('./listitem.html')
})
export class ListItem {
  @Input() item;
  @Output('itemIdToDelete')
  deleteEmitter = new EventEmitter<String>();

  deleteItem(itemId) {
    this.deleteEmitter.emit(itemId);
  }
}