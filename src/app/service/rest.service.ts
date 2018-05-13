import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';

const BASE_URL = 'http://localhost:4201/api';

@Injectable()
export class RestService {

  constructor(private http: HttpClient) { }

  getCards(): Observable<any> {
    return this.http.get(`${BASE_URL}/homeCards`);
  }

  getSocials(): Observable<any> {
    return this.http.get(`${BASE_URL}/socials`);
  }

  getChips(): Observable<any> {
    return this.http.get(`${BASE_URL}/chips`);
  }

  getExperiences(): Observable<any> {
    return this.http.get(`${BASE_URL}/experiences`);
  }
}
