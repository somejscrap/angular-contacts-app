import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
  requireAuthentication(transition) {
    const shallPass = Boolean(Math.round(Math.random()));
    if (!shallPass) {
      alert("Доступ запрещен!");
      //return transition.router.stateService.target('forbidden');
      return false;
    }
  }
}