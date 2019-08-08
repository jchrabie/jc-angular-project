import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const BASE_URL = '//localhost:4201/api';

@Injectable()
export class RestService {

  constructor(private http: HttpClient) { }

  getCards(): Observable<any> {
    return this.http.get(`${BASE_URL}/homeCards`);
  }

  getSkills(): Observable<any> {
    return this.http.get(`${BASE_URL}/skills`);
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
