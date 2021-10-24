import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'root' })
export class ListItemsService {
  constructor(private httpClient: HttpClient) {}
}
