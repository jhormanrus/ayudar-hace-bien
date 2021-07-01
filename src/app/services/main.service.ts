import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Data } from './data.model';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  constructor(private http: HttpClient) { }

  readData(): Observable<Data> {
    const endpoint = `https://60dc70cfc2b6280017feb9e0.mockapi.io/ayudar-hace-bien/data`
    return this.http.get<Data>(endpoint)
  }
}
