import { UIRouter } from "@uirouter/angular";
import { Injector } from "@angular/core";
import { StorageService } from "../services/storage.service"
import { AuthService } from "../services/auth.service.js"

export function uiRouterConfigFn(router: UIRouter, injector: Injector) {
  const storageService = injector.get(StorageService);
  storageService.getAllItems();

  const authService = injector.get(AuthService);

  let criteria = { to: (state) => state.data && state.data.protected };
  router.transitionService.onBefore(criteria, authService.requireAuthentication);

  router.urlService.rules.otherwise({ state: 'list' });
}