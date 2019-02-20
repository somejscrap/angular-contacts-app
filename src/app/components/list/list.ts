import { Component, Inject  } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({  
  providers: [ StorageService ],
  template: require('./list.html')
})
export class List { 
  list: [] = this.storageService.getAllItems();

  constructor(@Inject(StorageService) private storageService) { }

  ngOnInit() {
    this.storageService.itemsChanged
      .subscribe( ( items ) => this.list = items );
  }

  deleteItem(itemId) { 
    console.log(itemId);
    this.storageService.deleteItem(itemId);
  }
}
