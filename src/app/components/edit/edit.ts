import { Component, Input, Inject } from '@angular/core';
import { StorageService } from '../../services/storage.service';
import { StateService } from '@uirouter/angular';

@Component({ 
  providers: [ StorageService ],
  template: require('./edit.html')
})
export class Edit { 
  @Input() itemId;
  item = {};

  
  constructor(@Inject(StorageService) private storageService, private state: StateService) { }

  ngOnInit() {
    this.item = this.storageService.getItem(this.itemId);
  }

  onSubmit() { 
    if(this.itemId) {
      this.storageService.saveItem(this.item);
    } else {
      this.storageService.addItem(this.item);
    }
    this.state.go("list", { }, { reload: true });
  }

}