import { Component, OnInit } from '@angular/core';
import { Transactions } from '../../models/transactions';
import { ApiServicesService } from 'src/app/service/api-services.service';
import { UtilityService } from 'src/app/service/utility.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PaystackOptions } from 'angular4-paystack';
import { Router } from '@angular/router';

import { NgxSpinnerService } from "ngx-spinner";
@Component({
  selector: 'app-new-transactions',
  templateUrl: './new-transactions.component.html',
  styleUrls: ['./new-transactions.component.css']
})
export class NewTransactionsComponent implements OnInit {
  Transactions: Transactions[];
  Balance: number;
  walletForm: FormGroup;
  submitted = false;
  success = false;
  options: PaystackOptions = {
    amount: null,
    email: null,
    ref: null
  };
  usersDetails: any;
  paynow = false;
  formatedAmount: string;
  constructor(private api: ApiServicesService, private router: Router, private util: UtilityService, private formBuilder: FormBuilder) {
    this.walletForm = this.formBuilder.group({ amount: ['', [Validators.minLength(8), Validators.required]] });
  }
  ngOnInit() {
    this.getAllTransactions();
    this.getWalletBalance();
    this.usersDetails = JSON.parse(localStorage.getItem('user'));
  }

  getAllTransactions() {
    this.api.getTransactions().then((transactions: any) => {
      this.Transactions = transactions.data;
    }).catch(err => {
      console.log(err);
    });
  }
  getWalletBalance() {
    this.api.getWalletBalance().then((result: any) => {
      this.Balance = this.util.formatCurrency(result.data[0].available_balance);
    }).catch(err => {
      console.log(err);
    });
  }
  generateInvoice() {
    this.submitted = true;
    if (this.walletForm.invalid) {
      return;
    }

    this.util.showLoader();
    this.api.postGenerateInvoice(this.walletForm.value).then((result: any) => {
      // console.log(result);
      this.util.hideLoader();
      this.options.amount = result.data.amount;
      this.options.ref = (Date.now() + '-' + Math.floor(Math.random() * 100000));
      this.options.email = this.usersDetails.email;
      this.formatedAmount = this.util.formatCurrency((result.data.amount / 100));
      this.paynow = true;
      this.util.successToast('Invoice Generated Proceed To Funding');
      // proceed to funding of wallet
      // verify transaction after fundingi of wallet
    }, (err: any) => {
      this.util.hideLoader();
      this.util.errorToast('Invalid Login Credentials');
      console.log(err);
    });
  }

  paymentInit() {
    console.log('Payment initialized');
  }

  paymentDone(ref: any) {
    console.log(ref);
    // confirm payment
    this.api.getVerifyTransaction(ref.reference).then((result: any) => {
      console.log(result);
      this.util.successToast(result.data);
    }, (err: any) => {
      this.util.errorToast('Your Transaction Failed');
    });
  }

  paymentCancel() {
    this.util.errorToast('Transaction Canceled');
  }
}
