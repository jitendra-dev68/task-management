import { inject, Injectable } from '@angular/core';
import { ApiClientService } from './api-client.service';
import { Task } from '../../types/task.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly _api = inject(ApiClientService);
  private readonly baseUrl = '/tasks.json';

  getTasks(): Observable<Task[]> {
    return this._api.get<Task[]>(this.baseUrl);
  }
}
