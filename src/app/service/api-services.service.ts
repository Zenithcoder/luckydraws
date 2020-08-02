import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Config } from '../config/config';
import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class ApiServicesService {
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


	/**
	 * this method is for getting users login details
	 */
  getUser(id: string) {
    return this.getRequest('auth/user-detail/' + id);
  }
  /**
  * Logout of Account
  */
  logout() {
    return this.postRequest('logout', {});
  }
  postProfile(payload: any) {
    return this.postRequest('account/create_profile', payload);
  }
  /**
   * 
   * @param payload any this the transactions payload
   * @returns Promise
   */
  postGenerateInvoice(payload: any) {
    return this.postRequest('account/wallet', payload);
  }
  /**
   * @method this get all transactions on the backend
   * @returns objsect of type
   */
  getTransactions() {
    return this.getRequest('account/transactions');
  }
  /**
   * 
   * @param slug the transaction id/reference
   */
  getTransaction(slug: any) {
    return this.getRequest('account/transactions' + slug);
  }
  /**
   * 
   * @param slug the transaction reference/id
   */
  getVerifyTransaction(slug: any) {
    return this.getRequest('verify-payment/' + slug);
  }
  /**
   * Get All Users Ticket
  */
  getTickets() {
    return this.getRequest('account/tickets');
  }
  /**
   * Get A Ticket With ID specified
  */
  getATicket(id: string) {
    return this.getRequest('account/tickets' + id);
  }
  getWalletBalance() {
    return this.getRequest('account/wallet');
  }
  getAllGames() {
    return this.getRequest('competitions/');
  }
  getGame(id: any) {
    return this.getRequest('competition-details/' + id);
  }
  /**
	 * This Method handles get request
	 * @param endPoint  string this is the called endpoint
	 */
  private getRequest(endPoint = '') {
    const headers = this.getHeaders();
    return new Promise((resolve, reject) => {
      this.http.get(this.url + endPoint, {
        headers
      }).subscribe(
        data => {
          resolve(data);
        }, err => {
          reject(err);
        });
    });
  }
  /**
   * @param endPoint string this is the endpoint it points to
   * @param payload this the endpoint expected payload
   */
  postRequest(endPoint = this.url, payload) {
    const headers = this.getHeaders();
    return new Promise((resolve, reject) => {
      this.http.post(this.url + endPoint, JSON.stringify(payload), {
        headers
      }).subscribe(responseData => {
        resolve(responseData);
      }, err => {
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
