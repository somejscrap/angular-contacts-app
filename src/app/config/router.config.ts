import { UIRouter } from "@uirouter/angular";
import { Injector } from "@angular/core";
import { StorageService } from "../services/storage.service"

export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  const storageService = injector.get(StorageService);
  storageService.getAllItems();
  router.urlService.rules.otherwise({ state: 'list' });
}