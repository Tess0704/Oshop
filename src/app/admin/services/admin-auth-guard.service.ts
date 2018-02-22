import { UserService } from '../../shared/services/user.service';
import { AuthService } from '../../shared/services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router/src/interfaces';
import 'rxjs/add/operator/switchMap';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AdminAuthGuard implements CanActivate {


  constructor(private auth: AuthService) { }
  canActivate(): Observable<boolean> {
    return this.auth.appUser$.map(appUser => appUser.isAdmin);

  }

}
