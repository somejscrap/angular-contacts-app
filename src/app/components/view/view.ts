import { Component, Input, Inject } from '@angular/core';
import { StorageService } from '../../services/storage.service';

@Component({ 
  providers: [ StorageService ], 
  template: require('./view.html')
})
export class View { 
  @Input() itemId;
  item = {};
  
  constructor(@Inject(StorageService) private storageService) { }

  ngOnInit() {
    this.item = this.storageService.getItem(this.itemId);
  }
}