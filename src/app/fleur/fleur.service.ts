import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Fleur } from './fleur'

@Injectable()
export class FleurService {

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private fleursUrl = 'api/fleurs';

  getFleurs(): Promise<Fleur[]> {
    return this.http
      .get(this.fleursUrl)
      .toPromise()
      .then(res => res.json().data as Fleur[])
      .catch(this.handleError);
  }


  getFleur(id: number): Promise<Fleur> {
    const url = `${this.fleursUrl}/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(res => res.json().data as Fleur)
      .catch(this.handleError);
  }


  createFleur(fleur: Fleur): Promise<Fleur> {
    return this.http
      .post(this.fleursUrl, JSON.stringify(fleur), { headers: this.headers })
      .toPromise()
      .then(res => res.json().data as Fleur)
      .catch(this.handleError);
  }

  updateFleur(fleur: Fleur): Promise<Fleur> {
    const url = `${this.fleursUrl}/${fleur.id}`;
    return this.http
      .put(url, JSON.stringify(fleur), { headers: this.headers })
      .toPromise()
      .then(() => fleur)
      .catch(this.handleError);
  }

  deleteFleur(fleur: Fleur): Promise<void> {
    const url = `${this.fleursUrl}/${fleur.id}`;
    return this.http
      .delete(url, { headers: this.headers })
      .toPromise()
      .then(() => null)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error);
    return Promise.reject(error.message || error);
  }

}
