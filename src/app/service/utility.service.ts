import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";

@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  constructor(private toastr: ToastrService, private spinner: NgxSpinnerService) { }
  public showLoader() {
    this.spinner.show();
  }
  public hideLoader() {
    this.spinner.hide();
  }
  public successToast(message: string) {
    this.toastr.success(message, 'Successful');
  }
  public errorToast(errorMessage: string) {
    this.toastr.error(errorMessage, 'Error!');
  }
  public warningToast(warningMessage: string) {
    this.toastr.warning(warningMessage);
  }
  public infoToast(warningMessage: string) {
    this.toastr.info(warningMessage);
  }

  /**
   * 
   * @param amount number The amount to be formatted
   * @param decimalCount string the decimal place of the number default to 2 decimal place
   * @param decimal string The decimal symbol to use default to .
   * @param thousands string the thousand maker to use default to ', comma'
   */
  public currencyFormat(amount: any, decimalCount: number = 2, decimal: string = ".", thousands: string = ",") {
    // try {
    //   decimalCount = Math.abs(decimalCount);
    //   decimalCount = isNaN(decimalCount) ? 2 : decimalCount;
    //   const negativeSign = amount < 0 ? "-" : "";
    //   const i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    //   const j = (i.length > 3) ? i.length % 3 : 0;
    //   return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
    // } catch (e) {
    //   console.log(e);
    // }
  }

  /**
   * 
   * @param amount any the amount to format
   * @returns string returns a formated currency e.g 1523 returns 1,523.00
   */
  public formatCurrency(amount: any) {
    return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
  }
}
