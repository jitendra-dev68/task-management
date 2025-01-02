import { inject, Injectable } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { User } from '../../types/user.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly _api = inject(ApiClientService);
  private readonly baseUrl = '/users.json';

  login(request: Partial<User>): Observable<User[]> {
    return this._api.get<User[]>(this.baseUrl);
  }
}
