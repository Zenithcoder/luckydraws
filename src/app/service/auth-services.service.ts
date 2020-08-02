import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
// import { Config } from '../config/config';
@Injectable({
  providedIn: 'root'
})
export class AuthServicesService {




  url: string;
  token: string;
  API_ENDPOINT: string;
  constructor(private http: HttpClient) {
    this.API_ENDPOINT = 'https://app.luckydraws.ng/';
    this.url = this.API_ENDPOINT;
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
    }
  }
  getUser(id: any) {
    return new Promise((resolve, reject) => {
      resolve([]);
      reject([]);
    });
  }
  /**
   * This method handles users login posting
   * param payload object
   * @param payload any 
   */
  postLogin(payload: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'login', JSON.stringify(payload), {
        headers
      }).subscribe(responseData => {
        resolve(responseData);
      }, err => {
        reject(err);
      });
    });
  }
  postResetPassword(payload: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'reset-password', JSON.stringify(payload), {
        headers
      }).subscribe(responseData => {
        resolve(responseData);
      },
        err => {
          reject(err);
        });
    });
  }
  /**
   * This method handles users login posting
   * @param payload any
   */
  postSignup(payload: any) {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'register', JSON.stringify(payload), {
        headers
      }).subscribe(responseData => {
        resolve(responseData);
      },
        err => {
          reject(err);
        });
    });
  }
  postLogOut() {
    const headers = this.getHeaders();
    return new Promise((resolve, reject) => {
      this.http.post(this.url + 'logout', {}, {
        headers
      }).subscribe(responseData => {
        resolve(responseData);
      },
        err => {
          reject(err);
        });
    });
  }
  private getHeaders(): HttpHeaders {
    this.token = localStorage.getItem('token');
    const headers = new HttpHeaders()
      .set('Content-Type', 'application/json')
      .set('Authorization', 'Bearer ' + this.token);
    return headers;
  }
}
