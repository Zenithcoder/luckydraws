(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<!-- Latest Activities Area Start -->\n<section class=\"activities\" style=\"margin-top: 100px\">\n  <img class=\"shape shape1\" src=\"assets/images/people/shape1.png\" alt=\"\">\n  <img class=\"shape shape2\" src=\"assets/images/people/shape2.png\" alt=\"\">\n  <img class=\"shape shape3\" src=\"assets/images/people/shape3.png\" alt=\"\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-8 col-md-10\">\n        <div class=\"section-heading\">\n          <h5 class=\"subtitle\">\n            Daily Lottery\n          </h5>\n          <h2 class=\"title\">\n            Latest Activites\n          </h2>\n          <p class=\"text\">\n            The world’s first truly fair and global lottery. Each player has\n            the highest chances to win the JACKPOT\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"tab-menu-area\">\n          <ul class=\"nav nav-lend mb-3\" id=\"pills-tab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link active\" id=\"pills-all-bets-tab\" data-toggle=\"pill\" href=\"#pills-all-bets\" role=\"tab\"\n                aria-controls=\"pills-all-bets\" aria-selected=\"true\">Purchased TICKETS ID</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-my-bets-tab\" data-toggle=\"pill\" href=\"#pills-my-bets\" role=\"tab\"\n                aria-controls=\"pills-my-bets\" aria-selected=\"false\">Active</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"pills-history-tab\" data-toggle=\"pill\" href=\"#pills-history\" role=\"tab\"\n                aria-controls=\"pills-history\" aria-selected=\"false\">Won</a>\n            </li>\n          </ul>\n        </div>\n        <div class=\"tab-content\" id=\"pills-tabContent\">\n          <div class=\"tab-pane fade show active\" id=\"pills-all-bets\" role=\"tabpanel\"\n            aria-labelledby=\"pills-all-bets-tab\">\n            <div class=\"responsive-table\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">DATE</th>\n                    <th scope=\"col\">Ticket numbers</th>\n                    <th scope=\"col\">TICKETS ID</th>\n                    <th scope=\"col\">Status</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let ticket of Tickets\">\n                    <td>\n                      <!-- <img src=\"assets/images/people/p1.png\" alt=\"\">\n                      Tom Bass -->\n                      {{ticket.ID}}\n                    </td>\n                    <td>\n                      <ul class=\"number-list\" *ngFor=\"let ticketNumber of ticket.TicketNumbers\">\n                        <li>{{ticketNumber}}</li>\n                      </ul>\n                    </td>\n                    <td>\n                      {{ticket.ID}}\n                    </td>\n                    <td>\n                      {{ticket.Status}}\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div class=\"tab-pane fade\" id=\"pills-my-bets\" role=\"tabpanel\" aria-labelledby=\"pills-my-bets-tab\">\n            <div class=\"responsive-table\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">DATE</th>\n                    <th scope=\"col\">Ticket numbers</th>\n                    <th scope=\"col\">TICKETS ID</th>\n                    <th scope=\"col\">Status</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let ticket of Tickets\">\n                    <td *ngIf=\"ticket.status==active\">\n                      <!-- <img src=\"assets/images/people/p1.png\" alt=\"\">\n                      Tom Bass -->\n                      {{ticket.ID}}\n                    </td>\n                    <td *ngIf=\"ticket.status==active\">\n                      <ul class=\"number-list\" *ngFor=\"let ticketNumber of ticket.TicketNumbers\">\n                        <li>{{ticketNumber}}</li>\n                      </ul>\n                    </td>\n                    <td *ngIf=\"ticket.status==active\">\n                      {{ticket.ID}}\n                    </td>\n                    <td *ngIf=\"ticket.status==active\">\n                      {{ticket.Status}}\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n          <div class=\"tab-pane fade\" id=\"pills-history\" role=\"tabpanel\" aria-labelledby=\"pills-history-tab\">\n            <div class=\"responsive-table\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">DATE</th>\n                    <th scope=\"col\">Ticket numbers</th>\n                    <th scope=\"col\">TICKETS ID</th>\n                    <th scope=\"col\">Status</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let ticket of Tickets\">\n                    <td *ngIf=\"ticket.status==won\">\n                      <!-- <img src=\"assets/images/people/p1.png\" alt=\"\">\n                      Tom Bass -->\n                      {{ticket.ID}}\n                    </td>\n                    <td *ngIf=\"ticket.status==won\">\n                      <ul class=\"number-list\" *ngFor=\"let ticketNumber of ticket.TicketNumbers\">\n                        <li>{{ticketNumber}}</li>\n                      </ul>\n                    </td>\n                    <td *ngIf=\"ticket.status==won\">\n                      {{ticket.ID}}\n                    </td>\n                    <td *ngIf=\"ticket.status==won\">\n                      {{ticket.Status}}\n                    </td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</section>\n<!-- Latest Activities Area End -->\n\n<!-- Questions Area Start -->\n<section class=\"question-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <img src=\"assets/images/question-left.png\" alt=\"\">\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"section-heading\">\n          <h5 class=\"subtitle\">\n            If you have any\n          </h5>\n          <h2 class=\"title\">\n            questions\n          </h2>\n          <p class=\"text\">\n            Our top priorities are to protect your privacy,\n            provide secure transactions, and safeguard your data.\n          </p>\n          <p class=\"text\">\n            When you're ready to play, registering an\n            account is required so we know you're of legal age and so no one else can use your account.We answer the\n            most commonly asked lotto\n            questions..\n          </p>\n          <a href=\"#\" class=\"mybtn1\">Check FAQs</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Questions Area End -->\n\n<!-- Recent Winners Area Start -->\n<section class=\"recent-winners\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-8 col-md-10\">\n        <div class=\"section-heading\">\n          <h5 class=\"subtitle\">\n            Try to Check out our\n          </h5>\n          <h2 class=\"title\">\n            Recent Winners\n          </h2>\n          <p class=\"text\">\n            We update our site regularly; more and more winners are added every day! To locate the most recent winner's\n            information\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"single-winer\">\n          <div class=\"top-area\">\n            <div class=\"left\">\n              <h4 class=\"name\">\n                Leroy Roy\n              </h4>\n              <p class=\"date\">\n                15.05.2020\n              </p>\n            </div>\n            <div class=\"right\">\n              <p class=\"id\">#5747e75482</p>\n            </div>\n          </div>\n          <div class=\"bottom-area\">\n            <div class=\"left\">\n              ₦ 30,000\n            </div>\n            <div class=\"right\">\n              <img src=\"assets/images/icon2.png\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"single-winer\">\n          <div class=\"top-area\">\n            <div class=\"left\">\n              <h4 class=\"name\">\n                Jeff Mack\n              </h4>\n              <p class=\"date\">\n                01.08.2019\n              </p>\n            </div>\n            <div class=\"right\">\n              <p class=\"id\">#5747e75482</p>\n            </div>\n          </div>\n          <div class=\"bottom-area\">\n            <div class=\"left\">\n              ₦ 14,000\n            </div>\n            <div class=\"right\">\n              <img src=\"assets/images/icon2.png\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"single-winer\">\n          <div class=\"top-area\">\n            <div class=\"left\">\n              <h4 class=\"name\">\n                Neal Morris\n              </h4>\n              <p class=\"date\">\n                01.08.2019\n              </p>\n            </div>\n            <div class=\"right\">\n              <p class=\"id\">#5747e75482</p>\n            </div>\n          </div>\n          <div class=\"bottom-area\">\n            <div class=\"left\">\n              ₦ 40,000\n            </div>\n            <div class=\"right\">\n              <img src=\"assets/images/icon2.png\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-xl-center\">\n        <a class=\"mybtn2\" href=\"#\">View All </a>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Recent Winners Area End -->\n\n\n\n<!-- Recent Winners Area End -->\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<!-- Breadcrumb Area Start -->\n<section class=\"breadcrumb-area cart\">\n  <img class=\"bc-img\" src=\"assets/images/breadcrumb/cart-bg.png\" alt=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h4 class=\"title\">\n          Cart\n        </h4>\n        <ul class=\"breadcrumb-list\">\n          <li>\n            <a routerLink=\"/\">\n              <i class=\"fas fa-home\"></i>\n              Home\n            </a>\n          </li>\n          <li>\n            <span><i class=\"fas fa-chevron-right\"></i> </span>\n          </li>\n          <li>\n            <a routerLink=\"/cart\">Cart</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Breadcrumb Area End -->\n\n<!-- Cart Area Start -->\n<section class=\"cart-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"message-one\">\n          <p>\n            Hey! Nice Number Selection.Please review your order below\n            and follow the next quick steps to complete your order.\n          </p>\n        </div>\n        <div class=\"message-two\">\n          <div class=\"left\">\n            <p>\n              <i class=\"far fa-check-circle\"></i>\n              Selected Numbers was successfully added to your cart\n            </p>\n          </div>\n          <div class=\"right\">\n            <a routerLink=\"#\"><i class=\"far fa-edit\"></i> Update Cart</a>\n          </div>\n        </div>\n        <div class=\"cart-table-area\">\n          <div class=\"responsive-table\">\n            <table class=\"table\">\n              <thead>\n                <tr>\n                  <th scope=\"col\">Ticket numbers</th>\n                  <th scope=\"col\">Price</th>\n                  <th scope=\"col\">Quantity</th>\n                  <th scope=\"col\">Expires</th>\n                  <th scope=\"col\">Total</th>\n                  <th scope=\"col\"></th>\n                </tr>\n              </thead>\n              <tbody>\n                <tr>\n                  <td>\n                    <ul class=\"number-list\">\n                      <li>24</li>\n                      <li>25</li>\n                      <li>26</li>\n                      <li>27</li>\n                      <li>28</li>\n                    </ul>\n                  </td>\n                  <td>\n                    <img src=\"assets/images/icon1.png\" alt=\"\">\n                    0.00000051\n                  </td>\n                  <td>\n                    <div class=\"qty\">\n                      <ul>\n                        <li>\n                          <span class=\"qtminus\">\n                            <i class=\"fas fa-angle-left\"></i>\n                          </span>\n                        </li>\n                        <li>\n                          <span class=\"qttotal\">1</span>\n                        </li>\n                        <li>\n                          <span class=\"qtplus\">\n                            <i class=\"fas fa-angle-right\"></i>\n                          </span>\n                        </li>\n                      </ul>\n                    </div>\n                  </td>\n                  <td>\n                    <span class=\"time\">30 mins.left</span>\n                  </td>\n                  <td>\n                    <img src=\"assets/images/icon1.png\" alt=\"\">\n                    0.00000051\n                  </td>\n                  <td>\n                    <div class=\"remove\">\n                      <i class=\"fas fa-times\"></i>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <ul class=\"number-list\">\n                      <li>24</li>\n                      <li>25</li>\n                      <li>26</li>\n                      <li>27</li>\n                      <li>28</li>\n                    </ul>\n                  </td>\n                  <td>\n                    <img src=\"assets/images/icon1.png\" alt=\"\">\n                    0.00000051\n                  </td>\n                  <td>\n                    <div class=\"qty\">\n                      <ul>\n                        <li>\n                          <span class=\"qtminus\">\n                            <i class=\"fas fa-angle-left\"></i>\n                          </span>\n                        </li>\n                        <li>\n                          <span class=\"qttotal\">1</span>\n                        </li>\n                        <li>\n                          <span class=\"qtplus\">\n                            <i class=\"fas fa-angle-right\"></i>\n                          </span>\n                        </li>\n                      </ul>\n                    </div>\n                  </td>\n                  <td>\n                    <span class=\"time\">30 mins.left</span>\n                  </td>\n                  <td>\n                    <img src=\"assets/images/icon1.png\" alt=\"\">\n                    0.00000051\n                  </td>\n                  <td>\n                    <div class=\"remove\">\n                      <i class=\"fas fa-times\"></i>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <ul class=\"number-list\">\n                      <li>24</li>\n                      <li>25</li>\n                      <li>26</li>\n                      <li>27</li>\n                      <li>28</li>\n                    </ul>\n                  </td>\n                  <td>\n                    <img src=\"assets/images/icon1.png\" alt=\"\">\n                    0.00000051\n                  </td>\n                  <td>\n                    <div class=\"qty\">\n                      <ul>\n                        <li>\n                          <span class=\"qtminus\">\n                            <i class=\"fas fa-angle-left\"></i>\n                          </span>\n                        </li>\n                        <li>\n                          <span class=\"qttotal\">1</span>\n                        </li>\n                        <li>\n                          <span class=\"qtplus\">\n                            <i class=\"fas fa-angle-right\"></i>\n                          </span>\n                        </li>\n                      </ul>\n                    </div>\n                  </td>\n                  <td>\n                    <span class=\"time\">30 mins.left</span>\n                  </td>\n                  <td>\n                    <img src=\"assets/images/icon1.png\" alt=\"\">\n                    0.00000051\n                  </td>\n                  <td>\n                    <div class=\"remove\">\n                      <i class=\"fas fa-times\"></i>\n                    </div>\n                  </td>\n                </tr>\n                <tr>\n                  <td>\n                    <ul class=\"number-list\">\n                      <li>24</li>\n                      <li>25</li>\n                      <li>26</li>\n                      <li>27</li>\n                      <li>28</li>\n                    </ul>\n                  </td>\n                  <td>\n                    <img src=\"assets/images/icon1.png\" alt=\"\">\n                    0.00000051\n                  </td>\n                  <td>\n                    <div class=\"qty\">\n                      <ul>\n                        <li>\n                          <span class=\"qtminus\">\n                            <i class=\"fas fa-angle-left\"></i>\n                          </span>\n                        </li>\n                        <li>\n                          <span class=\"qttotal\">1</span>\n                        </li>\n                        <li>\n                          <span class=\"qtplus\">\n                            <i class=\"fas fa-angle-right\"></i>\n                          </span>\n                        </li>\n                      </ul>\n                    </div>\n                  </td>\n                  <td>\n                    <span class=\"time\">30 mins.left</span>\n                  </td>\n                  <td>\n                    <img src=\"assets/images/icon1.png\" alt=\"\">\n                    0.00000051\n                  </td>\n                  <td>\n                    <div class=\"remove\">\n                      <i class=\"fas fa-times\"></i>\n                    </div>\n                  </td>\n                </tr>\n              </tbody>\n            </table>\n          </div>\n        </div>\n        <div class=\"total-pay\">\n          <div class=\"content\">\n            <span>Total to Pay:</span>\n            <div class=\"num\">\n              <img src=\"assets/images/icon1.png\" alt=\"\">\n              0.00000051\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Cart Area End -->\n\n<!-- Payment-method Area Start -->\n<section class=\"payment-method\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h4 class=\"title\">\n          Payment Method\n        </h4>\n        <p class=\"text\">\n          Choose a payment method\n        </p>\n      </div>\n      <div class=\"col-lg-12\">\n        <div class=\"method-slider\">\n          <div class=\"item\">\n            <a routerLink=\"#\" class=\"single-method\">\n              <div class=\"icon\">\n                <img src=\"assets/images/payment/dabit-card.png\" alt=\"\">\n              </div>\n              <span>Credit Card</span>\n            </a>\n          </div>\n          <div class=\"item\">\n            <a routerLink=\"#\" class=\"single-method\">\n              <div class=\"icon\">\n                <img src=\"assets/images/payment/dabit-card.png\" alt=\"\">\n              </div>\n              <span>Dabit Card</span>\n            </a>\n          </div>\n          <div class=\"item\">\n            <a routerLink=\"#\" class=\"single-method active\">\n              <div class=\"icon\">\n                <img src=\"assets/images/payment/paypal.png\" alt=\"\">\n              </div>\n              <span>Paypal</span>\n            </a>\n          </div>\n          <div class=\"item\">\n            <a routerLink=\"#\" class=\"single-method\">\n              <div class=\"icon\">\n                <img src=\"assets/images/payment/bitcoin.png\" alt=\"\">\n              </div>\n              <span>Bitcoin</span>\n            </a>\n          </div>\n          <div class=\"item\">\n            <a routerLink=\"#\" class=\"single-method\">\n              <div class=\"icon\">\n                <img src=\"assets/images/payment/litecoin.png\" alt=\"\">\n              </div>\n              <span>Litecoin</span>\n            </a>\n          </div>\n          <div class=\"item\">\n            <a routerLink=\"#\" class=\"single-method\">\n              <div class=\"icon\">\n                <img src=\"assets/images/payment/ether.png\" alt=\"\">\n              </div>\n              <span>Ethereum</span>\n            </a>\n          </div>\n          <div class=\"item\">\n            <a routerLink=\"#\" class=\"single-method\">\n              <div class=\"icon\">\n                <img src=\"assets/images/payment/rippel.png\" alt=\"\">\n              </div>\n              <span>Ripple </span>\n            </a>\n          </div>\n          <div class=\"item\">\n            <a routerLink=\"#\" class=\"single-method\">\n              <div class=\"icon\">\n                <img src=\"assets/images/payment/bitcoin.png\" alt=\"\">\n              </div>\n              <span>Bitcoin</span>\n            </a>\n          </div>\n          <div class=\"item\">\n            <a routerLink=\"#\" class=\"single-method\">\n              <div class=\"icon\">\n                <img src=\"assets/images/payment/litecoin.png\" alt=\"\">\n              </div>\n              <span>Litecoin</span>\n            </a>\n          </div>\n          <div class=\"item\">\n            <a routerLink=\"#\" class=\"single-method\">\n              <div class=\"icon\">\n                <img src=\"assets/images/payment/ether.png\" alt=\"\">\n              </div>\n              <span>Ethereum</span>\n            </a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-12 text-center\">\n        <a routerLink=\"#\" class=\"mybtn1\">\n          PurChase\n        </a>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Payment-method Area End -->\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<!-- Breadcrumb Area Start -->\n<section class=\"breadcrumb-area about\">\n  <img class=\"bc-img\" src=\"assets/images/breadcrumb/about.png\" alt=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h4 class=\"title\">\n          About Us\n        </h4>\n        <ul class=\"breadcrumb-list\">\n          <li>\n            <a routerLink=\"/\">\n              <i class=\"fas fa-home\"></i>\n              Home\n            </a>\n          </li>\n          <li>\n            <span><i class=\"fas fa-chevron-right\"></i> </span>\n          </li>\n          <li>\n            <a routerLink=\"about\">About Us</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Breadcrumb Area End -->\n\n<!-- About page section Area Start -->\n<section class=\"about-page-section\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6 d-flex align-self-center\">\n        <div class=\"about-video\">\n          <img src=\"assets/images/about-video-bg.jpg\" alt=\"\">\n          <a href=\"https://www.youtube.com/watch?v=oj40TQirhss\" class=\"play-video mfp-iframe\">\n            <img src=\"assets/images/play-icon-red.png\" alt=\"\">\n          </a>\n        </div>\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"section-heading\">\n          <h5 class=\"subtitle\">\n            Our Journey in a Nutshell\n          </h5>\n          <h2 class=\"title\">\n            About LuckyDraws\n          </h2>\n          <p class=\"text\">\n            Luckydraws is an exciting online gaming lotto brand that offers the largest selection of online virtual\n            games.\n          </p>\n          <p class=\"text\">\n            All games are available on multi-platforms, including web, mobiles and tablets. To top it all off, we also\n            offer our clients a variety of promotions and offers.\n          </p>\n\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- About page section Area End -->\n\n<!-- Recent Winners Area End -->\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/competition/competition.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/competition/competition.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("    <app-header></app-header>\n    <!-- Breadcrumb Area Start -->\n    <section class=\"breadcrumb-area play\">\n      <img class=\"bc-img\" src=\"assets/images/breadcrumb/play.png\" alt=\"\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <h4 class=\"title\">\n              Competitions\n            </h4>\n            <ul class=\"breadcrumb-list\">\n              <li>\n                <a routerLink=\"/\">\n                  <i class=\"fas fa-home\"></i>\n                  Home\n                </a>\n              </li>\n              <li>\n                <span><i class=\"fas fa-chevron-right\"></i> </span>\n              </li>\n              <li>\n                <a routerLink=\"/competitions\">Competitions</a>\n              </li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- Breadcrumb Area End -->\n\n    <!-- Play Games Area Start -->\n    <section class=\"play-games\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-lg-12\">\n            <div class=\"gaming-activities\">\n              <div class=\"gaming-activities-inner\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"all-games\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-lg-12 text-center\">\n              <ul class=\"nav\" role=\"tablist\">\n                <li class=\"nav-item\">\n                  <a class=\"nav-link active\" id=\"pills-tab1-tab\" data-toggle=\"pill\" href=\"#pills-tab1\" role=\"tab\"\n                    aria-controls=\"pills-tab1\" aria-selected=\"true\">\n                    <div class=\"icon\">\n                      <img class=\"one\" src=\"assets/images/play/ic6.png\" alt=\"\">\n                      <img class=\"two\" src=\"assets/images/play/ic66.png\" alt=\"\">\n                    </div>\n                    <span>All Games</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" id=\"pills-tab2-tab\" data-toggle=\"pill\" href=\"#pills-tab2\" role=\"tab\"\n                    aria-controls=\"pills-tab2\" aria-selected=\"false\">\n                    <div class=\"icon\">\n                      <img class=\"one\" src=\"assets/images/play/ic1.png\" alt=\"\">\n                      <img class=\"two\" src=\"assets/images/play/ic11.png\" alt=\"\">\n                    </div>\n                    <span>Active</span>\n                  </a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" id=\"pills-tab3-tab\" data-toggle=\"pill\" href=\"#pills-tab3\" role=\"tab\"\n                    aria-controls=\"pills-tab3\" aria-selected=\"false\">\n                    <div class=\"icon\">\n                      <img class=\"one\" src=\"assets/images/play/ic2.png\" alt=\"\">\n                      <img class=\"two\" src=\"assets/images/play/ic22.png\" alt=\"\">\n                    </div>\n                    <span>Archived</span>\n                  </a>\n                </li>\n              </ul>\n              <div class=\"tab-content\" id=\"pills-tabContent\">\n                <div class=\"tab-pane fade show active\" id=\"pills-tab1\" role=\"tabpanel\" aria-labelledby=\"pills-tab1-tab\">\n                  <div class=\"row\">\n                    <div class=\"col-lg-4 col-md-6\" *ngFor=\"let game of Games\">\n                      <div class=\"single-game\">\n                        <img src=\"{{game.image_url}}\" alt=\"\">\n                        <a routerLink=\"/lottery/{{game.id}}\" class=\"mybtn2\">PLay NoW !</a>\n                      </div>\n                    </div>\n                  </div>\n                  <div class=\"row\" *ngIf=\"Games\">\n                    <div class=\"col-lg-12 text-center\">\n                      <a routerLink=\"/\" class=\"mybtn1\">View More</a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane fade\" id=\"pills-tab2\" role=\"tabpanel\" aria-labelledby=\"pills-tab2-tab\">\n                  <div class=\"row\">\n                  </div>\n                  <div class=\"row\" *ngIf=\"Games\">\n                    <div class=\"col-lg-12 text-center\">\n                      <a routerLink=\"/\" class=\"mybtn1\">View More</a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane fade\" id=\"pills-tab3\" role=\"tabpanel\" aria-labelledby=\"pills-tab3-tab\">\n                  <div class=\"row\">\n                  </div>\n                  <div class=\"row\" *ngIf=\"Games\">\n                    <div class=\"col-lg-12 text-center\">\n                      <a routerLink=\"/\" class=\"mybtn1\">View More</a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane fade\" id=\"pills-tab4\" role=\"tabpanel\" aria-labelledby=\"pills-tab4-tab\">\n                  <div class=\"row\">\n\n                  </div>\n                  <div class=\"row\" *ngIf=\"Games\">\n                    <div class=\"col-lg-12 text-center\">\n                      <a routerLink=\"/\" class=\"mybtn1\">View More</a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane fade\" id=\"pills-tab5\" role=\"tabpanel\" aria-labelledby=\"pills-tab5-tab\">\n                  <div class=\"row\">\n                  </div>\n                  <div class=\"row\" *ngIf=\"Games\">\n                    <div class=\"col-lg-12 text-center\">\n                      <a routerLink=\"/\" class=\"mybtn1\">View More</a>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"tab-pane fade\" id=\"pills-tab6\" role=\"tabpanel\" aria-labelledby=\"pills-tab6-tab\">\n                  <div class=\"row\">\n                  </div>\n                  <div class=\"row\" *ngIf=\"Games\">\n                    <div class=\"col-lg-12 text-center\">\n                      <a routerLink=\"/\" class=\"mybtn1\">View More</a>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- Play Games Area End -->\n\n    <!-- Recent Winners Area Start -->\n    <section class=\"recent-winners\">\n      <div class=\"container\">\n        <div class=\"row justify-content-center\">\n          <div class=\"col-lg-8 col-md-10\">\n            <div class=\"section-heading\">\n              <h5 class=\"subtitle\">\n                Try to Check out our\n              </h5>\n              <h2 class=\"title\">\n                Recent Winners\n              </h2>\n              <p class=\"text\">\n                We update our site regularly; more and more winners are added every day!\n                To locate the most recent\n                winner's\n                information\n              </p>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-4\">\n            <div class=\"single-winer\">\n              <div class=\"top-area\">\n                <div class=\"left\">\n                  <h4 class=\"name\">\n                    Leroy Roy\n                  </h4>\n                  <p class=\"date\">\n                    15.05.2020\n                  </p>\n                </div>\n                <div class=\"right\">\n                  <p class=\"id\">#5747e75482</p>\n                </div>\n              </div>\n              <div class=\"bottom-area\">\n                <div class=\"left\">\n                  ₦ 30,000\n                </div>\n                <div class=\"right\">\n                  <img src=\"assets/images/icon2.png\" alt=\"\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4\">\n            <div class=\"single-winer\">\n              <div class=\"top-area\">\n                <div class=\"left\">\n                  <h4 class=\"name\">\n                    Jeff Mack\n                  </h4>\n                  <p class=\"date\">\n                    01.08.2019\n                  </p>\n                </div>\n                <div class=\"right\">\n                  <p class=\"id\">#5747e75482</p>\n                </div>\n              </div>\n              <div class=\"bottom-area\">\n                <div class=\"left\">\n                  ₦ 14,000\n                </div>\n                <div class=\"right\">\n                  <img src=\"assets/images/icon2.png\" alt=\"\">\n                </div>\n              </div>\n            </div>\n          </div>\n          <div class=\"col-lg-4\">\n            <div class=\"single-winer\">\n              <div class=\"top-area\">\n                <div class=\"left\">\n                  <h4 class=\"name\">\n                    Neal Morris\n                  </h4>\n                  <p class=\"date\">\n                    01.08.2019\n                  </p>\n                </div>\n                <div class=\"right\">\n                  <p class=\"id\">#5747e75482</p>\n                </div>\n              </div>\n              <div class=\"bottom-area\">\n                <div class=\"left\">\n                  ₦ 40,000\n                </div>\n                <div class=\"right\">\n                  <img src=\"assets/images/icon2.png\" alt=\"\">\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"row\">\n          <div class=\"col-lg-12 text-xl-center\">\n            <a class=\"mybtn2\" routerLink=\"/\">View All </a>\n          </div>\n        </div>\n      </div>\n    </section>\n    <!-- Recent Winners Area End -->\n    <app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<section class=\"breadcrumb-area bc-contact\">\n  <img class=\"bc-img\" src=\"assets/images/breadcrumb/contact.png\" alt=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h4 class=\"title\">\n          Contact\n        </h4>\n        <ul class=\"breadcrumb-list\">\n          <li>\n            <a href=\"/\">\n              <i class=\"fas fa-home\"></i>\n              Home\n            </a>\n          </li>\n          <li>\n            <span><i class=\"fas fa-chevron-right\"></i> </span>\n          </li>\n          <li>\n            <a routerLink=\"/contact\">Contact</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"contact\">\n  <img class=\"left-img\" src=\"assets/images/contact-left.png\" alt=\"\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-8 col-md-10\">\n        <div class=\"section-heading\">\n          <h5 class=\"subtitle\">\n            Contact Us\n          </h5>\n          <h2 class=\"title\">\n            Get in Touch\n          </h2>\n          <p class=\"text\">\n            It’s up to the competition in features, with some unique\n            advantages.All the latest LuckyDraws competitions.Here are some of them.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row justify-content-end\">\n      <div class=\"col-lg-6\">\n        <div class=\"contact-form-wrapper\">\n          <div class=\"contact-box\">\n            <h4 class=\"title\">\n              Send Us a Message\n            </h4>\n            <form [formGroup]=\"contactForm\" (ngSubmit)=\"sendMessage()\">\n              <input formControlName=\"name\" type=\"text\" class=\"input-field\" placeholder=\"Enter Your Full Name\">\n              <div *ngIf=\"submitted && contactForm.controls.name.errors\" class=\"alert alert-danger\">\n                <div *ngIf=\"contactForm.controls.name.errors.required\">Full Name is required</div>\n              </div>\n              <input formControlName=\"email\" type=\"email\" class=\"input-field\" placeholder=\"Enter Your Email Address\">\n              <div *ngIf=\"submitted && contactForm.controls.email.errors\" class=\"alert alert-danger\">\n                <div *ngIf=\"contactForm.controls.email.errors.required\">Email is required</div>\n              </div>\n              <textarea formControlName=\"message\" class=\"input-field textarea\" placeholder=\"Message *\"></textarea>\n              <div *ngIf=\"submitted && contactForm.controls.message.errors\" class=\"alert alert-danger\">\n                <div *ngIf=\"contactForm.controls.message.errors.required\">You Can't Send Empty Message</div>\n              </div>\n              <button type=\"submit\" class=\"mybtn1\">Send Now</button>\n            </form>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<!-- Breadcrumb Area Start -->\n<section class=\"breadcrumb-area bc-faq\">\n  <img class=\"bc-img\" src=\"assets/images/breadcrumb/faq.png\" alt=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h4 class=\"title\">\n          Faq\n        </h4>\n        <ul class=\"breadcrumb-list\">\n          <li>\n            <a routerLink=\"/\">\n              <i class=\"fas fa-home\"></i>\n              Home\n            </a>\n          </li>\n          <li>\n            <span><i class=\"fas fa-chevron-right\"></i> </span>\n          </li>\n          <li>\n            <a routerLink=\"/faq\">Faq</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Breadcrumb Area End -->\n\n<!-- faq-section start -->\n<section class=\"faq-section\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-8 col-md-10\">\n        <div class=\"section-heading\">\n          <h5 class=\"subtitle\">\n            Got any Question\n          </h5>\n          <h2 class=\"title\">\n            We've answers\n          </h2>\n          <p class=\"text\">\n            It’s up to the competition in features, with some unique\n            advantages.All the competitions.Here are some of them.\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"faq-wrapper\">\n          <ul class=\"nav nav-tabs\" id=\"myTab\" role=\"tablist\">\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"general-tab\" data-toggle=\"tab\" href=\"#general\" role=\"tab\" aria-controls=\"general\"\n                aria-selected=\"false\">All</a>\n            </li>\n            <li class=\"nav-item\">\n              <a class=\"nav-link\" id=\"general-tab\" data-toggle=\"tab\" href=\"#general\" role=\"tab\" aria-controls=\"general\"\n                aria-selected=\"true\">general</a>\n            </li>\n          </ul>\n          <div class=\"tab-content\" id=\"myTabContent\">\n            <div class=\"tab-pane fade\" id=\"general\" role=\"tabpanel\" aria-labelledby=\"general-tab\">\n              <div class=\"accordion sorteo-accordion\" id=\"accordionExample6\">\n                <div class=\"card\">\n                  <div class=\"card-header\" id=\"heading16\">\n                    <h2 class=\"mb-0\">\n                      <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\"\n                        aria-expanded=\"true\" aria-controls=\"collapse16\"><i class=\"fa fa-question\"></i>What if the\n                        competitions slot is not fully booked when timer runs out?</button>\n                    </h2>\n                  </div>\n                  <div id=\"collapse16\" class=\"collapse show\" aria-labelledby=\"heading16\"\n                    data-parent=\"#accordionExample6\">\n                    <div class=\"card-body\">\n                      <p>If the competition is not full, the timer will add some time in order for all the tickets to\n                        sell on the competition. This will happen a maximum of 4 times then if the competition is still\n                        not sold out a cash alternative will be awarded instead and only the people that have entered\n                        will go into the live draw.</p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div class=\"card-header\" id=\"heading16\">\n                    <h2 class=\"mb-0\">\n                      <button class=\"btn btn-link\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseTwo\"\n                        aria-expanded=\"true\" aria-controls=\"collapse16\"><i class=\"fa fa-question\"></i>How many entrants\n                        is a player allowed to have in one draw?</button>\n                    </h2>\n                  </div>\n                  <div id=\"collapse16\" class=\"collapse show\" aria-labelledby=\"heading16\"\n                    data-parent=\"#accordionExample6\">\n                    <div class=\"card-body\">\n                      <p>Each player can enter any one competition a maximum of 5 times.</p>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"card\">\n                  <div class=\"card-header\" id=\"heading17\">\n                    <h2 class=\"mb-0\">\n                      <button class=\"btn btn-link collapsed\" type=\"button\" data-toggle=\"collapse\"\n                        data-target=\"#collapseTwo\" aria-expanded=\"false\" aria-controls=\"collapse17\"><i\n                          class=\"fa fa-question\"></i> How long does it take before winners get their prize?</button>\n                    </h2>\n                  </div>\n                  <div id=\"collapse17\" class=\"collapse\" aria-labelledby=\"heading17\" data-parent=\"#accordionExample6\">\n                    <div class=\"card-body\">\n                      <p>Your prize will be hand delivered from our team member within 5 days of the winner being\n                        announced.</p>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- faq-section end -->\n\n<!-- Recent Winners Area End -->\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<div class=\"hero-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-5 d-flex align-self-center\">\n        <div class=\"left-content\">\n          <div class=\"content\">\n            <h5 class=\"subtitle\">\n              EVERY DAY LOTS OF WINS\n            </h5>\n            <h1 class=\"title\">\n              BE ONE OF THEM\n            </h1>\n            <p class=\"text\">\n              Get started in less than 5 min Select and Win on LuckyDraws.ng\n            </p>\n            <div class=\"links\">\n              <a routerLink=\"/competitions\" class=\"mybtn1 link1\">Get Started Now!</a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-7\">\n        <div class=\"hero-img2 d-block d-md-none\">\n          <img src=\"assets/images/heroarea.png\" alt=\"\">\n        </div>\n        <div class=\"hero-img d-none d-md-block\">\n          <img class=\"img-fluid full-image\" src=\"assets/images/heroarea.png\" alt=\"\">\n          <img class=\"shape phone\" src=\"assets/images/h-shapes/phone.png\" alt=\"\">\n          <img class=\"shape man\" src=\"assets/images/h-shapes/man222.png\" alt=\"\">\n          <img class=\"shape ripple\" src=\"assets/images/h-shapes/ripple.png\" alt=\"\">\n          <img class=\"shape ripple2\" src=\"assets/images/h-shapes/ripple1.png\" alt=\"\">\n          <img class=\"shape bitcoin1\" src=\"assets/images/h-shapes/bitcoin1.png\" alt=\"\">\n          <img class=\"shape bitcoin2\" src=\"assets/images/h-shapes/bitcoin2.png\" alt=\"\">\n          <img class=\"shape shape-icon\" src=\"assets/images/h-shapes/shape.png\" alt=\"\">\n          <img class=\"shape award-bg\" src=\"assets/images/h-shapes/award/bg.png\" alt=\"\">\n          <img class=\"shape award\" src=\"assets/images/h-shapes/award/award.png\" alt=\"\">\n          <img class=\"shape gift-bg\" src=\"assets/images/h-shapes/giftbox/bg.png\" alt=\"\">\n          <img class=\"shape gift\" src=\"assets/images/h-shapes/giftbox/gift.png\" alt=\"\">\n          <img class=\"shape shield-bg\" src=\"assets/images/h-shapes/shield/bg.png\" alt=\"\">\n          <img class=\"shape shield\" src=\"assets/images/h-shapes/shield/shield.png\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<section class=\"featured-game\">\n  <!-- Features Area Start -->\n  <div class=\"features\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"feature-box\">\n            <div class=\"feature-box-inner\">\n              <div class=\"row\">\n                <div class=\"col-lg-4 col-md-6\">\n                  <div class=\"single-feature\">\n                    <div class=\"icon one\">\n                      <img src=\"assets/images/feature/icon1.png\" alt=\"\">\n                    </div>\n                    <div class=\"content\">\n                      <h4 class=\"title\">\n                        Exclusive Offer\n                      </h4>\n                      <small>\n                        Be rewarded with exclusive offers and discounts with Luckydraws on the go.\n                      </small>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6\">\n                  <div class=\"single-feature\">\n                    <div class=\"icon two\">\n                      <img src=\"assets/images/feature/picture2.png\" alt=\"\">\n                    </div>\n                    <div class=\"content\">\n                      <h4 class=\"title\">\n                        Cross-Platform\n                      </h4>\n                      <small>\n                        All games are available on multi-platforms, including web, mobiles and tablets.\n                      </small>\n                    </div>\n                  </div>\n                </div>\n                <div class=\"col-lg-4 col-md-6\">\n                  <div class=\"single-feature\">\n                    <div class=\"icon three\">\n                      <img src=\"assets/images/feature/icon3.png\" alt=\"\">\n                    </div>\n                    <div class=\"content\">\n                      <h4 class=\"title\">\n                        24/7 Support\n                      </h4>\n                      <small>\n                        No other lottery platform has the in-house support and services of Luckydraws.\n                      </small>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Features Area End -->\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-8 col-md-10\">\n        <div class=\"section-heading\">\n          <h5 class=\"subtitle\">\n            Check out our\n          </h5>\n          <h2 class=\"title\">\n            featured games\n          </h2>\n          <p class=\"text\">\n            Check out our latest competitions! Select today's lucky number to win the competition. The winner is\n            announced during the Live Raffle Draw on IG!\n          </p>\n        </div>\n      </div>\n    </div>\n    <!-- <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"game-slider\">\n          <div class=\"item\">\n            <div class=\"single-game\">\n              <img src=\"assets/images/game/icon1.png\" alt=\"\">\n              <a routerLink=\"lottery\" class=\"mybtn2\">PLay NoW !</a>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"single-game\">\n              <img src=\"assets/images/game/icon2.png\" alt=\"\">\n              <a routerLink=\"lottery\" class=\"mybtn2\">PLay NoW !</a>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"single-game\">\n              <img src=\"assets/images/game/icon3.png\" alt=\"\">\n              <a routerLink=\"lottery\" class=\"mybtn2\">PLay NoW !</a>\n            </div>\n          </div>\n          <div class=\"item\">\n            <div class=\"single-game\">\n              <img src=\"assets/images/game/icon2.png\" alt=\"\">\n              <a routerLink=\"lottery\" class=\"mybtn2\">PLay NoW !</a>\n            </div>\n          </div>\n\n        </div>\n        <div class=\"row\" style=\"margin: 20px\">\n          <div class=\"col-lg-12 text-center\">\n            <a routerLink=\"competitions\" class=\"mybtn1\">View More</a>\n          </div>\n        </div>\n      </div>\n    </div> -->\n  </div>\n</section>\n\n<section class=\"activities\">\n  <img class=\"shape shape1\" src=\"assets/images/people/shape1.png\" alt=\"\">\n  <img class=\"shape shape2\" src=\"assets/images/people/shape2.png\" alt=\"\">\n  <img class=\"shape shape3\" src=\"assets/images/people/shape3.png\" alt=\"\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-8 col-md-10\">\n        <div class=\"section-heading\">\n          <h5 class=\"subtitle\">\n            How you can Play\n          </h5>\n          <h2 class=\"title\">\n            more smartly\n          </h2>\n          <p class=\"text\">\n            We update our site regularly; more and more winners are added every day! To locate the most recent winner's\n            information\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-h-play\">\n          <img src=\"assets/images/h-play/ic1.png\" alt=\"\">\n          <p class=\"steps\">\n            First step <i class=\"fas fa-arrow-right\"></i>\n          </p>\n          <h4 class=\"title\">\n            Sign up & Deposit\n          </h4>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-h-play\">\n          <img src=\"assets/images/h-play/ic2.png\" alt=\"\">\n          <p class=\"steps\">\n            SECOND STEP <i class=\"fas fa-arrow-right\"></i>\n          </p>\n          <h4 class=\"title\">\n            Select Competition\n          </h4>\n        </div>\n      </div>\n\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-h-play\">\n          <img src=\"assets/images/h-play/ic4.png\" alt=\"\">\n          <p class=\"steps\">\n            fourth STEP <i class=\"fas fa-arrow-right\"></i>\n          </p>\n          <h4 class=\"title\">\n            Redeem Price\n          </h4>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\" style=\"margin: 50px\">\n      <div class=\"col-lg-12 text-center\">\n        <a routerLink=\"/how-it-works\" class=\"mybtn1\">View More</a>\n      </div>\n    </div>\n  </div>\n\n</section>\n<!--\n<section class=\"recent-winners\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-8 col-md-10\">\n        <div class=\"section-heading\">\n          <h5 class=\"subtitle\">\n            Try to Check out our\n          </h5>\n          <h2 class=\"title\">\n            Recent Winners\n          </h2>\n          <p class=\"text\">\n            We update our site regularly; more and more winners are added every day!\n            To locate the most recent winner's information\n          </p>\n        </div>\n      </div>\n    </div>\n     <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"single-winer\">\n          <div class=\"top-area\">\n            <div class=\"left\">\n              <h4 class=\"name\">\n                Leroy Roy\n              </h4>\n              <p class=\"date\">\n                15.05.2020\n              </p>\n            </div>\n            <div class=\"right\">\n              <p class=\"id\">#5747e75482</p>\n            </div>\n          </div>\n          <div class=\"bottom-area\">\n            <div class=\"left\">\n              ₦ 30,000\n            </div>\n            <div class=\"right\">\n              <img src=\"assets/images/icon2.png\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"single-winer\">\n          <div class=\"top-area\">\n            <div class=\"left\">\n              <h4 class=\"name\">\n                Jeff Mack\n              </h4>\n              <p class=\"date\">\n                01.08.2019\n              </p>\n            </div>\n            <div class=\"right\">\n              <p class=\"id\">#5747e75482</p>\n            </div>\n          </div>\n          <div class=\"bottom-area\">\n            <div class=\"left\">\n              ₦ 14,000\n            </div>\n            <div class=\"right\">\n              <img src=\"assets/images/icon2.png\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"single-winer\">\n          <div class=\"top-area\">\n            <div class=\"left\">\n              <h4 class=\"name\">\n                Neal Morris\n              </h4>\n              <p class=\"date\">\n                01.08.2019\n              </p>\n            </div>\n            <div class=\"right\">\n              <p class=\"id\">#5747e75482</p>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"bottom-area\">\n              <div class=\"left\">\n                ₦ 40,000\n              </div>\n              <div class=\"right\">\n                <img src=\"assets/images/icon2.png\" alt=\"\">\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-12 text-xl-center\">\n        <a class=\"mybtn2\" routerLink=\"winners\">View All </a>\n      </div>\n    </div> \n  </div>\n</section>\n-->\n<footer class=\"footer\" id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"footer-widget info-link-widget\">\n          <h4 class=\"title\">About</h4>\n          <ul class=\"link-list\">\n            <li>\n              <a routerLink=\"/about-us\"> <i class=\"fas fa-angle-double-right\"></i> About Us </a>\n            </li>\n            <li>\n              <a routerLink=\"/contact\"> <i class=\"fas fa-angle-double-right\"></i> Contact Us </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"footer-widget info-link-widget\">\n          <h4 class=\"title\">My Account</h4>\n          <ul class=\"link-list\">\n            <li>\n              <a routerLink=\"/my-account\"> <i class=\"fas fa-angle-double-right\"></i> Manage Your Account </a>\n            </li>\n            <li>\n              <a routerLink=\"/faq\"> <i class=\"fas fa-angle-double-right\"></i> How to Deposit </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"footer-widget info-link-widget\">\n          <h4 class=\"title\">Legal Info</h4>\n          <ul class=\"link-list\">\n            <li>\n              <a routerLink=\"/privacy-policy\"> <i class=\"fas fa-angle-double-right\"></i>Privacy Policy </a>\n            </li>\n            <li>\n              <a routerLink=\"/terms-services\"> <i class=\"fas fa-angle-double-right\"></i>Terms of Service </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"copy-bg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"left-area\">\n            <p>Copyright © 2020.All Rights Reserved By <a href=\"https://www.doshservices.com\">Dosh Services</a>\n            </p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</footer>\n\n<div class=\"bottomtotop\"><i class=\"fas fa-chevron-right\"></i></div>\n<app-login *ngIf=\"!isLoggedIn\"></app-login>\n<app-signup *ngIf=\"!isLoggedIn\"></app-signup>\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\n  <p style=\"font-size: 20px; color: white;\">Loading...</p>\n</ngx-spinner>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/how-it-works/how-it-works.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/how-it-works/how-it-works.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<!-- Breadcrumb Area Start -->\n<section class=\"breadcrumb-area h-i-w\">\n  <img class=\"bc-img\" src=\"assets/images/breadcrumb/how-it-work.png\" alt=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h4 class=\"title\">\n          How it Works\n        </h4>\n        <ul class=\"breadcrumb-list\">\n          <li>\n            <a routerLink=\"/\">\n              <i class=\"fas fa-home\"></i>\n              Home\n            </a>\n          </li>\n          <li>\n            <span><i class=\"fas fa-chevron-right\"></i> </span>\n          </li>\n          <li>\n            <a routerLink=\"/how-it-work\">How it Works</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Breadcrumb Area End -->\n\n<!-- How Play Area Start -->\n<section class=\"how-play\">\n  <div class=\"how-it-work\">\n    <img class=\"bg-shape\" src=\"assets/images/howitwork/bg-shape.png\" alt=\"\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-8 col-md-10\">\n          <div class=\"section-heading\">\n            <p class=\"text\">\n              We update our site regularly with new competitions and more winners are added every day! To locate the\n              most recent winner's information\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"single-work\">\n            <img src=\"assets/images/howitwork/ic1.png\" alt=\"\">\n            <h4 class=\"title\">\n              START\n            </h4>\n            <p>\n              Pick the Competition you want to enter.\n            </p>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"single-work\">\n            <img src=\"assets/images/howitwork/ic2.png\" alt=\"\">\n            <h4 class=\"title\">\n              CHOOSE\n            </h4>\n            <p>\n              Choose how many numbers you would like in the draw & Complete Payment\n            </p>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"single-work\">\n            <img src=\"assets/images/howitwork/ic3.png\" alt=\"\">\n            <h4 class=\"title\">\n              WIN\n            </h4>\n            <p>\n              You will be emailed with your number in that draw and also interactively placed onto the competition page\n              against your assigned number.\n            </p>\n          </div>\n        </div>\n        <div class=\"container\" style=\"padding-top: 70px\">\n          <div class=\"row justify-content-center\">\n            <div class=\"section-heading\">\n              <h5 class=\"subtitle\">\n                How the winner is picked and when the draws go live.\n              </h5>\n              <p class=\"text\">\n                Once the timer on the competition is complete the draw will go ahead. A live streamed video to our host\n                will appear within ‘ten minutes’ of the draw timing out. One random number will be picked out during\n                the live draw. WE HAVE A WINNER.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</section>\n<!-- How Play Area End -->\n\n<!-- lottery video Area Start -->\n<section class=\"lottery-video\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-10\">\n        <div class=\"video-box\">\n          <a href=\"#\" class=\"video-play-btn video-icon mfp-iframe\">\n            <img src=\"assets/images/play-icon-red.png\" alt=\"\">\n          </a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- lottery video Area End -->\n\n<!-- Questions Area Start -->\n<section class=\"question-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\">\n        <img src=\"assets/images/question-left.png\" alt=\"\">\n      </div>\n      <div class=\"col-lg-6\">\n        <div class=\"section-heading\">\n          <h5 class=\"subtitle\">\n            If you have any\n          </h5>\n          <h2 class=\"title\">\n            questions\n          </h2>\n          <p class=\"text\">\n            Our top priorities are to protect your privacy,\n            provide secure transactions, and safeguard your data.\n          </p>\n          <p class=\"text\">\n            When you're ready to play, registering an\n            account is required so we know you're of legal age and so no one else can use your account.We answer the\n            most commonly asked lotto\n            questions..\n          </p>\n          <a routerLink=\"/faq\" class=\"mybtn1\">Check FAQs</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Questions Area End -->\n\n<!-- Recent Winners Area Start -->\n<section class=\"recent-winners\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-8 col-md-10\">\n        <div class=\"section-heading\">\n          <h5 class=\"subtitle\">\n            Try to Check out our\n          </h5>\n          <h2 class=\"title\">\n            Recent Winners\n          </h2>\n          <p class=\"text\">\n            We update our site regularly; more and more winners are added every day! To locate the most recent winner's\n            information\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"single-winer\">\n          <div class=\"top-area\">\n            <div class=\"left\">\n              <h4 class=\"name\">\n                Leroy Roy\n              </h4>\n              <p class=\"date\">\n                15.05.2020\n              </p>\n            </div>\n            <div class=\"right\">\n              <p class=\"id\">#5747e75482</p>\n            </div>\n          </div>\n          <div class=\"bottom-area\">\n            <div class=\"left\">\n              ₦ 30,000\n            </div>\n            <div class=\"right\">\n              <img src=\"assets/images/icon2.png\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"single-winer\">\n          <div class=\"top-area\">\n            <div class=\"left\">\n              <h4 class=\"name\">\n                Jeff Mack\n              </h4>\n              <p class=\"date\">\n                01.08.2019\n              </p>\n            </div>\n            <div class=\"right\">\n              <p class=\"id\">#5747e75482</p>\n            </div>\n          </div>\n          <div class=\"bottom-area\">\n            <div class=\"left\">\n              ₦ 14,000\n            </div>\n            <div class=\"right\">\n              <img src=\"assets/images/icon2.png\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"single-winer\">\n          <div class=\"top-area\">\n            <div class=\"left\">\n              <h4 class=\"name\">\n                Neal Morris\n              </h4>\n              <p class=\"date\">\n                01.08.2019\n              </p>\n            </div>\n            <div class=\"right\">\n              <p class=\"id\">#5747e75482</p>\n            </div>\n          </div>\n          <div class=\"bottom-area\">\n            <div class=\"left\">\n              ₦ 40,000\n            </div>\n            <div class=\"right\">\n              <img src=\"assets/images/icon2.png\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-xl-center\">\n        <a class=\"mybtn2\" routerLink=\"/\">View All </a>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Recent Winners Area End -->\n\n<!-- Recent Winners Area End -->\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lottery/lottery.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lottery/lottery.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<!-- Breadcrumb Area Start -->\n<section class=\"breadcrumb-area bc-lottery\">\n  <img class=\"bc-img\" src=\"assets/images/breadcrumb/lottery.png\" alt=\"\" />\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h4 class=\"title\">{{ Game.name }}</h4>\n        <ul class=\"breadcrumb-list\">\n          <li>\n            <a routerLink=\"/\"> <i class=\"fas fa-home\"></i> Home </a>\n          </li>\n          <li>\n            <span><i class=\"fas fa-chevron-right\"></i> </span>\n          </li>\n          <li><a routerLink=\"/lottery\">Lottery</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Breadcrumb Area End -->\n<!-- Lottery Staticstics Area Start -->\n<section class=\"lottery-area\">\n  <div class=\"lottery-staticstics\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"single-staticstics\">\n            <div class=\"left\">\n              <div class=\"icon\"><img src=\"assets/images/lottery/st1.png\" alt=\"\" /></div>\n            </div>\n            <div class=\"right\">\n              <h4 class=\"title\">Lottery Reward</h4>\n              <div class=\"count\">\n                <span>₦{{ Game.amount }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"single-staticstics\">\n            <div class=\"left\">\n              <div class=\"icon\"><img src=\"assets/images/lottery/st2.png\" alt=\"\" /></div>\n            </div>\n            <div class=\"right\">\n              <h4 class=\"title\">Purchased Tickets</h4>\n              <div class=\"count\">\n                <img src=\"assets/images/tikit-icon.png\" alt=\"\" /> <span>{{ Game.available_ticket }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"single-staticstics\">\n            <div class=\"left\">\n              <div class=\"icon\"><img src=\"assets/images/lottery/st2.png\" alt=\"\" /></div>\n            </div>\n            <div class=\"right\">\n              <h4 class=\"title\">Available Tickets</h4>\n              <div class=\"count\">\n                <img src=\"assets/images/tikit-icon.png\" alt=\"\" /> <span>{{ Game.available_ticket }}</span>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"daily-lottery\">\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-8 col-md-10\">\n          <div class=\"section-heading\">\n            <!-- <h5 class=\"subtitle\">\n              Try to check out our\n            </h5> -->\n            <h2 class=\"title\">{{ Game.name }}</h2>\n            <p class=\"text\">{{ Game.description }}</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"draw-time\">\n            <h5 class=\"subtitle\">Lottery Draw Starts In:</h5>\n            <div class=\"draw-counter\"><div data-countdown=\"Game.end_date\"></div></div>\n            <p class=\"text\">To meet Today's challenges</p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"buy-tickets\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"buy-tickets-box\">\n            <div class=\"heading\"><h4 class=\"title\">Buy Lottery Tickets</h4></div>\n            <div class=\"content\">\n              <div class=\"top-area\">\n                <div class=\"row\">\n                  <div class=\"col-lg-3\">\n                    <div class=\"info-box\">\n                      <h4 class=\"title\">1 TICKET COSTS</h4>\n                      <div class=\"number\"><i class=\"fab fa-naira\"></i> {{ Game.amount }}</div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <div class=\"info-box\">\n                      <h4 class=\"title\">QUANTITY</h4>\n                      <div class=\"number\"><input type=\"number\" value=\"1\" /></div>\n                    </div>\n                  </div>\n                  <div class=\"col-lg-3\">\n                    <div class=\"info-box\">\n                      <h4 class=\"title\">TOTAL COST</h4>\n                      <div class=\"number\"><i class=\"fab fa-naira\"></i> 0.0000</div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"game-numbers\">\n                <h4 class=\"title\">GAME NUMBERS</h4>\n                <div class=\"number-box\">\n                  <div class=\"auto-number\">\n                    <div class=\"top-content\">\n                      <input type=\"radio\" id=\"auto-num\" name=\"auto-num\" />\n                      <label for=\"auto-num\">\n                        Auto Generated <span> Random numbers will be generated automatically </span>\n                      </label>\n                    </div>\n                  </div>\n                  <div class=\"manual-number\">\n                    <div class=\"top-content\">\n                      <input type=\"radio\" id=\"manual-num\" name=\"auto-num\" />\n                      <label for=\"manual-num\"> Manual Select <span>Pick 5 numbers manually</span> </label>\n                    </div>\n                    <div class=\"main-content\">\n                      <ul class=\"number-list\">\n                        <li>1</li>\n                        <li>2</li>\n                        <li>3</li>\n                        <li>4</li>\n                        <li>5</li>\n                        <li>6</li>\n                        <li>7</li>\n                        <li>8</li>\n                        <li class=\"active\">9</li>\n                        <li>10</li>\n                        <li>11</li>\n                        <li>12</li>\n                        <li class=\"active\">13</li>\n                        <li>14</li>\n                        <li>15</li>\n                        <li>16</li>\n                        <li>17</li>\n                        <li>18</li>\n                        <li>19</li>\n                        <li class=\"active\">20</li>\n                        <li>21</li>\n                        <li class=\"active\">22</li>\n                        <li>23</li>\n                        <li>24</li>\n                        <li>25</li>\n                        <li>26</li>\n                        <li>27</li>\n                        <li>28</li>\n                        <li class=\"active\">29</li>\n                        <li>30</li>\n                        <li>31</li>\n                        <li>32</li>\n                        <li>33</li>\n                        <li>34</li>\n                        <li>35</li>\n                        <li>36</li>\n                        <li>37</li>\n                        <li>38</li>\n                        <li>39</li>\n                        <li>40</li>\n                        <li>41</li>\n                        <li>42</li>\n                        <li>43</li>\n                        <li>44</li>\n                        <li>45</li>\n                        <li>46</li>\n                        <li>47</li>\n                        <li>48</li>\n                        <li>49</li>\n                        <li>50</li>\n                      </ul>\n                    </div>\n                  </div>\n                </div>\n              </div>\n              <div class=\"row\">\n                <div class=\"col-lg-12 text-center\"><a routerLink=\"/cart\" class=\"mybtn1\">Buy ticket</a></div>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- How it Work Area Start -->\n  <div class=\"how-it-work\">\n    <img class=\"bg-shape\" src=\"assets/images/howitwork/bg-shape.png\" alt=\"\" />\n    <div class=\"container\">\n      <div class=\"row justify-content-center\">\n        <div class=\"col-lg-8 col-md-10\">\n          <div class=\"section-heading\">\n            <h5 class=\"subtitle\">Want to see how</h5>\n            <h2 class=\"title\">How it works?</h2>\n            <p class=\"text\">\n              We update our site regularly with new competitions and more winners are added every day! To locate the most recent\n              winner's information\n            </p>\n          </div>\n        </div>\n      </div>\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"single-work\">\n            <img src=\"assets/images/howitwork/ic1.png\" alt=\"\" />\n            <h4 class=\"title\">START</h4>\n            <p>Pick the Competition you want to enter.</p>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"single-work\">\n            <img src=\"assets/images/howitwork/ic2.png\" alt=\"\" />\n            <h4 class=\"title\">CHOOSE</h4>\n            <p>Choose how many numbers you would like in the draw & Complete Payment</p>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"single-work\">\n            <img src=\"assets/images/howitwork/ic3.png\" alt=\"\" />\n            <h4 class=\"title\">WIN</h4>\n            <p>\n              You will be emailed with your number in that draw and also interactively placed onto the competition page against\n              your assigned number.\n            </p>\n          </div>\n        </div>\n        <div class=\"container\" style=\"padding-top: 70px\">\n          <div class=\"row justify-content-center\">\n            <div class=\"section-heading\">\n              <h5 class=\"subtitle\">How the winner is picked and when the draws go live.</h5>\n              <p class=\"text\">\n                Once the timer on the competition is complete the draw will go ahead. A live streamed video to our host will\n                appear within ‘ten minutes’ of the draw timing out. One random number will be picked out during the live draw.\n                WE HAVE A WINNER.\n              </p>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<!-- Latest Activities Area End -->\n\n<!-- Questions Area Start -->\n<section class=\"question-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-6\"><img src=\"assets/images/question-left.png\" alt=\"\" /></div>\n      <div class=\"col-lg-6\">\n        <div class=\"section-heading\">\n          <h5 class=\"subtitle\">If you have any</h5>\n          <h2 class=\"title\">questions</h2>\n          <p class=\"text\">\n            Our top priorities are to protect your privacy, provide secure transactions, and safeguard your data.\n          </p>\n          <p class=\"text\">\n            When you're ready to play, registering an account is required so we know you're of legal age and so no one else can\n            use your account.We answer the most commonly asked lotto questions..\n          </p>\n          <a routerLink=\"/faq\" class=\"mybtn1\">Check FAQs</a>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- \n  <section class=\"recent-winners\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-8 col-md-10\">\n        <div class=\"section-heading\">\n          <h5 class=\"subtitle\">\n            Try to Check out our\n          </h5>\n          <h2 class=\"title\">\n            Recent Winners\n          </h2>\n          <p class=\"text\">\n            We update our site regularly; more and more winners are added every day! To locate the most recent winner's\n            information\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4\">\n        <div class=\"single-winer\">\n          <div class=\"top-area\">\n            <div class=\"left\">\n              <h4 class=\"name\">\n                Leroy Roy\n              </h4>\n              <p class=\"date\">\n                15.05.2020\n              </p>\n            </div>\n            <div class=\"right\">\n              <p class=\"id\">#5747e75482</p>\n            </div>\n          </div>\n          <div class=\"bottom-area\">\n            <div class=\"left\">\n              ₦ 30,000\n            </div>\n            <div class=\"right\">\n              <img src=\"assets/images/icon2.png\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"single-winer\">\n          <div class=\"top-area\">\n            <div class=\"left\">\n              <h4 class=\"name\">\n                Jeff Mack\n              </h4>\n              <p class=\"date\">\n                01.08.2019\n              </p>\n            </div>\n            <div class=\"right\">\n              <p class=\"id\">#5747e75482</p>\n            </div>\n          </div>\n          <div class=\"bottom-area\">\n            <div class=\"left\">\n              ₦ 14,000\n            </div>\n            <div class=\"right\">\n              <img src=\"assets/images/icon2.png\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4\">\n        <div class=\"single-winer\">\n          <div class=\"top-area\">\n            <div class=\"left\">\n              <h4 class=\"name\">\n                Neal Morris\n              </h4>\n              <p class=\"date\">\n                01.08.2019\n              </p>\n            </div>\n            <div class=\"right\">\n              <p class=\"id\">#5747e75482</p>\n            </div>\n          </div>\n          <div class=\"bottom-area\">\n            <div class=\"left\">\n              ₦ 40,000\n            </div>\n            <div class=\"right\">\n              <img src=\"assets/images/icon2.png\" alt=\"\">\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-12 text-xl-center\">\n        <a class=\"mybtn2\" routerLink=\"/\">View All </a>\n      </div>\n    </div>\n  </div>\n</section>\n -->\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\t<!-- 404 Area Start -->\n\t<section class=\"four-zero-four\">\n\t  <img class=\"bg-img\" src=\"assets/images/404-bg.png\" alt=\"\">\n\t  <div class=\"container\">\n\t    <div class=\"row\">\n\t      <div class=\"col-lg-12\">\n\t        <div class=\"content\">\n\t          <img src=\"assets/images/404.png\" alt=\"\">\n\t          <div class=\"inner-content\">\n\t            <h4 class=\"title\">\n\t              Oops,\n\t              Something went wrong !\n\t            </h4>\n\t            <a routerLink=\"/\" class=\"mybtn1\">\n\t              <i class=\"fas fa-angle-double-left\"></i> BACK TO HOME\n\t            </a>\n\t          </div>\n\t        </div>\n\t      </div>\n\t    </div>\n\t  </div>\n\t</section>\n\t<!-- 404 Area End -->\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms-conditions/terms-conditions.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms-conditions/terms-conditions.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<section class=\"breadcrumb-area bc-terms\">\n  <img class=\"bc-img\" src=\"assets/images/breadcrumb/tc.png\" alt=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h4 class=\"title\">\n          terms & conditions\n        </h4>\n        <ul class=\"breadcrumb-list\">\n          <li>\n            <a routerLink=\"/\">\n              <i class=\"fas fa-home\"></i>\n              Home\n            </a>\n          </li>\n          <li>\n            <span><i class=\"fas fa-chevron-right\"></i> </span>\n          </li>\n          <li>\n            <a routerLink=\"/terms-conditions\">Terms & Conditions</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"serch-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"serch-box\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <form [formGroup]=\"searchForm\" (ngSubmit)=\"sendMessage()\">\n                <ul class=\"list\">\n                  <li class=\"input-field\">\n                    <input formControlName=\"q\" type=\"text\" placeholder=\"Search For Article\" />\n                  </li>\n                  <li class=\"button\">\n                    <button type=\"submit\" class=\"mybtn1\">Get Started </button>\n                  </li>\n                </ul>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<section class=\"help-section writter-artical-details\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"help-box\">\n          <div class=\"help-box-inner2 mt-0\">\n            <div class=\"single-artical\">\n              <div class=\"content\">\n                <h4 class=\"top-title\">\n                  Privacy\n                </h4>\n                <div class=\"writer-profile\">\n                  <div class=\"writer-content\">\n                    <h5 class=\"w-name\">\n                      Written by Lukydraws.ng\n                    </h5>\n                  </div>\n                </div>\n                <div class=\"inner-content\">\n                  <h4 class=\"title\">\n                    RESPONSIBLE GAMING\n                  </h4>\n                  <p class=\"text\">\n                    If you play you can win or lose. Gambling can be fun, exciting but there is no economic or\n                    mathematical certainty because of course, it’s only a game. In the worst cases you buy a little\n                    excitement at the right price.\n                  </p>\n                  <p class=\"text\">\n                    What is the right price? For sure it’s what you can afford to gamble while feeling completely at\n                    ease. You decide in advance how much to spend on betting and never exceed that limit. You keep the\n                    commitment you have made to yourself.\n                  </p>\n                  <p class=\"text\">\n                    Problem gambling can be recognised by modes of conduct such as a high level of spending, poor work\n                    results, relationship difficulties, theft, lying and depression. If gambling becomes a problem then\n                    it is no longer entertainment. If gambling worries you take a break.\n                  </p>\n                  <p class=\"text\">\n                    Protecting minors is a fundamental part of our responsible betting policy. Minors less than 18 years\n                    of age are forbidden from opening a betting account with Bet9ja. We immediately check the identity\n                    of all customers to prevent the services offered on our website being used by minors.\n                  </p>\n                  <h4 class=\"title\">\n                    1. STANDARD COMPETITION TERMS\n                  </h4>\n                  <p class=\"text\">\n                    1. Qualifying Persons\n                  </p>\n                  <p class=\"text\">\n                    1.1 AJEBO RETAIL LTD/ Lucky Draws (‘Promoter’, ‘our(s)’) operates various competitions resulting in\n                    the allocation of prizes in accordance with these terms and conditions on the website (‘Prize’ or\n                    ‘Prizes’) www.luckydraws.ng (the ‘Website’) – (each and all such competitions being referred to\n                    herein respectively as the ‘Competition’ or ‘Competitions’).\n                  </p>\n                  <p>\n                    1.2 Competitions are open to persons aged 18 or over who are resident in Nigeria. Employees of the\n                    Promoter or any person connected with the Promoter (through family, professional or commercial\n                    association) are restricted from participating in the Competition.\n                  </p>\n                  <p class=\"text\">\n                    1.3 The Promoter reserves the right to close a Customer’s account at any time if they feel the\n                    Customer is abusing the services, being abusive to other Customers or staff or they have the belief\n                    that it is not genuinely the Customer that is entering.\n                  </p>\n                  <p class=\"text\">\n                    1.4 The Promoter reserves the right to refuse a Customer’s Entry at the Promoter’s own discretion.\n                  </p>\n                  <p class=\"text\">\n                    1.5 These terms and conditions apply to all Competitions.\n                  </p>\n                  <h4 class=\"title\">\n                    2. LEGAL UNDERTAKING\n                  </h4>\n                  <p class=\"text\">\n                    2.1 By entering a Competition the entrant (‘Entrant’, ‘you’, ‘your(s)’ and/or ‘Customer’) will be\n                    deemed to have legal capacity to do so, you will have read and understood and accepted these terms\n                    and conditions and you will be bound by them and by any other requirements set out in any of the\n                    Promoter’s related promotional material.\n                  </p>\n                  <p>\n                    2.2 Competitions are governed by Nigeria law and all and/or any matters or disputes relating to the\n                    Competition will be dealt with and/or resolved under Nigerian Law and the Nigerian courts shall have\n                    exclusive jurisdiction.\n                  </p>\n                  <p class=\"text\">\n                    2.3 In the event that you participate in a Competition online via the Website, and by accepting\n                    these terms and conditions you hereby confirm that you are not breaching any laws in your country of\n                    residence regarding the legality of entering our Competitions. The Promoter will not be held\n                    responsible for any Entrant entering any of our Competitions unlawfully. If in any doubt you should\n                    immediately leave the Website and check with the relevant authorities in your country.\n                  </p>\n                  <h4 class=\"title\">\n                    3. COMPETITION ENTRY\n                  </h4>\n                  <p class=\"text\">\n                    3.1 Competitions may be entered via the Website. Multiple Competitions may be operated at the same\n                    time by the Promoter and each Competition will have a specific Prize.\n                  </p>\n                  <p>\n                    3.2 Availability and pricing of Competitions is at the discretion of the Promoter and will be\n                    specified at the point of sale on the Website.\n                  </p>\n                  <p class=\"text\">\n                    3.3 In order to enter a Competition, you will need to register an account with us. You can register\n                    an account online. To register an account online you will be asked to provide an email address or\n                    sign in via a social media account, such as Facebook, Twitter or Gmail (‘Social Media Account’)\n                  </p>\n                  <p>\n                    3.4 When playing a Competition online via the Website, you must follow the on- screen instructions\n                    to: (a) select the Competition you wish to enter and when you are ready to purchase your ticket(s)\n                    to the Competition (‘Tickets’), provide your contact and payment details. You will need to check\n                    your details carefully and tick the declaration, confirming you have read and understood the\n                    Competition terms and conditions; (b) once you have purchased your Tickets, register to play the\n                    relevant Competition and when your payment has cleared we will then contact you by email to confirm\n                    your entry into the Competition. Please note that when entering online and/or by post you will not\n                    be deemed entered into the Competition until we confirm your entry which can be confirmed in your\n                    account when you login (and any such entry referred to herein as an ‘Entry’ or ‘Entries’).\n                  </p>\n                  <p class=\"text\">\n                    3.5 The Promoter reserves the right to refuse or disqualify any incomplete Entry if it has\n                    reasonable grounds for believing that an Entrant has contravened any of these terms and conditions.\n                  </p>\n                  <p class=\"text\">\n                    3.6 To the extent permitted by applicable law, all Entries become the Promoter’s property and will\n                    not be returned.\n                  </p>\n                  <p class=\"text\">\n                    3.7 The Entrant can enter each Competition up to a maximum of 5 times.\n                  </p>\n                  <p class=\"text\">\n                    3.8 (a) Each account can have an unlimited amount of entries, providing they are purchased on that\n                    account on behalf of other people.\n                  </p>\n                  <p class=\"text\">\n                    3.9 Each Competition closes when the last number is taken, no more Entries after this point will be\n                    accepted.\n                  </p>\n                  <p class=\"text\">\n                    3.10 All Entrants must create an account prior to entering and supply an email address to proceed in\n                    the Competition.\n                  </p>\n                  <h4 class=\"title\">\n                    4. PROMOTION PERIODS\n                  </h4>\n                  <p class=\"text\">\n                    4.1 Each Competition will run for a specified period. Please see each Competition for details of\n                    start and end times and dates (‘Promotion Period(s)’).\n                  </p>\n                  <h4 class=\"title\">\n                    5. COMPETITION JUDGEMENT\n                  </h4>\n                  <p class=\"text\">\n                    5.1 Luckydraws guaranteed 100% random ball spinning machine will determine the winner of each\n                    Competition. However many Entrants have entered the Competition will determine how many balls are\n                    entered into the machine. Each Competition will have a minimum of 50 balls and a maximum of 100,000\n                    balls. The result will be live streamed on YouTube (or such other live streamed internet channel as\n                    the Promoter chooses).\n                  </p>\n                  <p class=\"text\">\n                    5.2 Due to the nature of the selection, there will only be one Winner per Competition, unless the\n                    Promoter states otherwise.\n                  </p>\n                  <p class=\"text\">\n                    5.3 The Promoter will attempt to contact winners of Competitions (referred to herein as ‘Winner(s)’)\n                    using the telephone numbers and email address provided at the time of Entry (or as subsequently\n                    updated) and held securely in our database. It is the Entrant’s responsibility to ensure that these\n                    details are accurate, up to date and complete. If for any reason these details are taken down,\n                    inputted and/or submitted and/or recorded in any way by you incorrectly, the Promoter will not be\n                    held responsible for any consequences of this of whatever nature and howsoever arising. Entrants\n                    must carefully check their contact details have been recorded correctly.\n                  </p>\n                  <p class=\"text\">\n                    5.4 If for any reason the Promoter is unable to contact a Winner within 5 working days (which may be\n                    extended at the sole discretion of the Promoter) of the end of a Competition, or the Winner fails\n                    for whatever reason or cause to confirm acceptance of the Prize and/or the Winner is disqualified as\n                    a result of not complying with or contravening any of these terms and conditions, the Winner hereby\n                    agrees that it will immediately, irrevocably and automatically forfeit the Prize and the Prize will\n                    remain in the possession and ownership of the Promoter.\n                  </p>\n                  <p class=\"text\">\n                    5.5 In the event that the Promoter closes a Competition early, the Winner will be selected from all\n                    valid and eligible Entries received by the Promoter prior to the date of closure, except that the\n                    Promoter reserves the right, at its sole discretion, to close a Competition early without selecting\n                    a Winner. In the event that a Competition is closed without selecting a Winner, the Promoter will\n                    give all Entrants game credit to enable them to replay equivalent Tickets in a subsequent\n                    Competition.\n                  </p>\n                  <p class=\"text\">\n                    5.6 Entrants who specifically consent to marketing communications will be entered onto the\n                    Promoter’s database for the purpose of conveying information as to the status of their Competition,\n                    as well as any future promotions or Competitions offered by the Promoter.\n                    <p class=\"text\">\n                      5.7 The Promoter also reserves the right at its sole discretion to extend the closing date of any\n                      Competition. Each Competition can have the closing time extended by the Promoter up to 4 times. If\n                      the Competition is not sold out after the 4th extension of time, then the Prize that will be\n                      awarded\n                      will be as follows:\n                    </p>\n                    <p class=\"text\">\n                      80% of the value of paid Entry to the Competition. Only the Competition Entrants (including free\n                      Entries) will be entered into this draw.\n                    </p>\n                    <h4 class=\"title\">\n                      6. WINNER’S DETAILS\n                    </h4>\n                    <p class=\"text\">\n                      6.1 The Winner will be required to show proof of identification on the delivery of the Prize. Any\n                      failure to meet this requirement may result in the Winner being disqualified and the Promoter\n                      retaining the Prize.\n                    </p>\n                    <p class=\"text\">\n                      6.2 All Winners will be asked for their consent by the Promoter to provide photographs and/or pose\n                      for photographs and videos and have their personal details (including details of any Prize won by\n                      them) included in marketing material. If a Winner consents to the above, the foregoing\n                      photographs,\n                      videos, and marketing material may be used in future marketing and public relations by the\n                      Promoter\n                      in connection with the Competition and in identifying them as a winner of a Competition.\n                    </p>\n                    <p class=\"text\">\n                      6.3 Following receipt and verification of the details requested above by the Promoter and provided\n                      that the Winner has satisfied these terms and conditions, the Winners will be contacted in order\n                      to\n                      make arrangements for the delivery of the Prize.\n                    </p>\n                    <h4 class=\"title\">\n                      7. COMPETITION PRIZES\n                    </h4>\n                    <p class=\"text\">\n                      7.1 The Prizes are determined, selected by all and/or some of the directors of the company and are\n                      owned by the Promoter from the date of the Competition going live on the Website to the date that\n                      the Winner receives the Prize. Details of each Prize can be found on the Website on the\n                      Competitions\n                      pages. Lucky draws takes no responsibility for the Prize awarded after delivery has taken place.\n                      Once the Winner receives the Prize, the Promoter does not insure the Prize. No insurance comes\n                      with\n                      the Prizes and the Promoter is not responsible for the Prize once it has been handed over to the\n                      Winner.\n                    </p>\n                    <p class=\"text\">\n                      7.2 Delivery of the Prize to the Winner’s home address in Lagos is free. The Promoter has a right\n                      to\n                      and/or may charge the Winner delivery fees if they require the Prize to be delivered to an address\n                      outside Lagos.\n                    </p>\n                    <p class=\"text\">\n                      7.3 All Entrant expenses to collect the Prize are the sole responsibility of the Winner.\n                    </p>\n                    <p class=\"text\">\n                      7.4 The Winner hereby agrees that all Prizes are subject to and are conditional on the terms and\n                      conditions of the Promoter, Prize provider, manufacturer and/or supplier and/or anyone that is\n                      involved in the provision or delivery of the Prize to the Winner.\n                    </p>\n                    <p class=\"text\">\n                      7.5 Each Prize must be accepted as awarded and is non-transferable or convertible to other\n                      substitutes and cannot be used in conjunction with any other vouchers, offers or discounts,\n                      including without limitation any vouchers or offers of the Promoter or other Prize suppliers\n                      and/or\n                      third parties.\n                    </p>\n                    <h4 class=\"title\">\n                      8. STORAGE\n                    </h4>\n                    <p class=\"text\">\n                      The Promoter can store the chosen Prize free of charge for up to 30 days after notifying the\n                      Winner,\n                      at the end of which time the Prize will be delivered to the Winner. If the Prize needs to be\n                      stored\n                      by the Promoter for more than 30 days then this shall be at the entire cost of the Winner where\n                      such\n                      cost will need to be paid by the Winner to the Promoter before the Winner receives the Prize.\n                    </p>\n                    <h4 class=\"title\">\n                      9. WINNERS’ PERSONAL DATA\n                    </h4>\n                    <p class=\"text\">\n                      9.1 Subject to the Winner’s consent, the Winner may be asked to have their photo and video taken\n                      by\n                      the Promoter for promotional purposes (Public Relations and Marketing).\n                    </p>\n                    <p class=\"text\">\n                      9.2 When entering a Competition, the Entrant will be asked to consent to use of their name,\n                      address,\n                      and/or photograph or other likeness, as well as your appearance at publicity events without any\n                      additional compensation (save for reasonable travel expenses that are approved in writing in\n                      advance\n                      by the Promoter) and as required by the Promoter.\n                    </p>\n                    <h4 class=\"title\">\n                      10. LIMITS OF LIABILITY\n                    </h4>\n                    <p class=\"text\">\n                      10.1 The Promoter makes or gives no representations and/or warranties and/or assurances of\n                      whatever\n                      nature and howsoever arising (and whether in writing or otherwise) as to the quality, suitability\n                      and/or fitness for any particular purpose of any of the goods or services advertised, offered\n                      and/or\n                      provided as Prizes. Except for liability for death or personal injury caused by the negligence of\n                      the Promoter and/or for any fraudulent misrepresentations and/or for any events and/or\n                      circumstances\n                      to the extent that they cannot be excluded or limited by law. The Promoter shall not be liable for\n                      any loss suffered or sustained to person or property including, but not limited to, consequential\n                      (including economic) loss by reason of any act or omission by the Promoter, or its servants or\n                      agents, in connection with the arrangement for supply, or the supply, of any goods by any person\n                      to\n                      the Prize Winner(s) and, where applicable, to any family/persons accompanying the Winner(s), or in\n                      connection with any of the Competitions promoted by the Promoter.\n                    </p>\n                    <p class=\"text\">\n                      10.2 The total maximum aggregate liability of the Promoter to each Winner shall be limited to the\n                      total value of each Prize that has been won by the relevant Winner.\n                    </p>\n                    <p class=\"text\">\n                      10.3 The total maximum aggregate liability of the Promoter to you shall (if you are not a Winner)\n                      be\n                      limited to the amount that you have paid to enter Competitions in the first 12 months of you\n                      playing\n                      any Competition.\n                    </p>\n                    <p class=\"text\">\n                      10.4 Nothing in these terms and conditions shall prevent you from making claims to the extent that\n                      you are exercising your statutory rights.\n                    </p>\n                    <h4 class=\"title\">\n                      11. ELECTRONIC COMMUNICATIONS\n                    </h4>\n                    <p class=\"text\">\n                      No responsibility will be accepted by the Promoter for failed, partial or garbled computer\n                      transmissions, for any computer, telephone, cable, network, electronic or Internet hardware or\n                      software malfunctions, failures, connections, availability, for the acts or omissions of any\n                      service\n                      provider, internet accessibility or availability or for traffic congestion or unauthorized human\n                      act, including any errors or mistakes. The Promoter shall use its reasonable endeavors to award\n                      the\n                      Prize for a Competition to the correct Entrant. If due to reasons of hardware, software or other\n                      computer related failure, or due to human error, the Prize is awarded incorrectly, the Promoter\n                      reserves the right to reclaim the Prize and award it to the correct Entrant, at its sole\n                      discretion\n                      and without admission of liability and the Entrant that has been incorrectly awarded the Prize\n                      will\n                      immediately at the Entrant’s own cost and expense return it to the Promoter and/or pay the\n                      Promoter\n                      for that Prize (at the option of the Promoter). The Promoter shall not be liable for any economic\n                      and/or other loss and/or consequential loss suffered or sustained to any persons to whom an award\n                      has been incorrectly made, and no compensation shall be due to such persons. The Promoter shall\n                      use\n                      its reasonable endeavours to ensure that the software and Website(s) Used to operate its\n                      Competitions performs correctly and accurately across the latest versions of popular internet,\n                      tablet and mobile browsers. For the avoidance of doubt, only the Ticket recorded in our systems,\n                      howsoever displayed or calculated, shall be entered into the relevant Competition and the Promoter\n                      shall not be held liable for any Competition Entries that occur as a result of malfunctioning\n                      software or other events.\n                    </p>\n                    <h4 class=\"title\">\n                      12. DATA PROTECTION NOTICE\n                    </h4>\n                    <p class=\"text\">\n                      Any personal data that you supply to the Promoter or authorize the Promoter to obtain from a third\n                      party, for example, a credit card company, will be used by the Promoter to administer the\n                      Competition and fulfill Prizes where applicable. In order to process, record and use your personal\n                      data the Promoter may disclose it to (i) any credit card company whose name you give; (ii) any\n                      person to whom the Promoter proposes to transfer any of the Promoter’s rights and/or\n                      responsibilities under any agreement the Promoter may have with you; (iii) any person to whom the\n                      Promoter proposes to transfer its business or any part of it; (iv) comply with any legal or\n                      regulatory requirement of the Promoter in any country; and (v) prevent, detect or prosecute fraud\n                      and other crime. In order to process, use, record and disclose your personal data the Promoter may\n                      need to transfer such information outside the United Kingdom, in which event the Promoter is\n                      responsible for ensuring that your personal data continues to be adequately protected during the\n                      course of such transfer.\n                    </p>\n                    <h4 class=\"title\">\n                      13. VALIDATION\n                    </h4>\n                    <p class=\"text\">\n                      13.1 The Promoter hereby reserves the right not give or make a Prize until it is satisfied that\n                      (a)\n                      the Winner has a validly registered Website account and/or is not in breach of these terms and\n                      conditions, (b) any and/or all amounts due or owing by you to the Promoter have been paid in full,\n                      (c) the identity of the Winner and his or her entitlement to receive the Prize has been\n                      established\n                      to the Promoter’s satisfaction (in particular, the Promoter reserves the right to request\n                      documentary proof of identity and not to give or make a Prize until satisfied appropriate proof of\n                      identity has been provided), and (d) the Promoter may require proof of age to be produced before\n                      giving or making a Prize. Prizes will not be given or made to Winners found to be under below the\n                      age of 16.\n                    </p>\n                    <p class=\"text\">\n                      13.2 Without prejudice to rule 17.1 above, the Promoter reserves the right not to make or give a\n                      Prize if it reasonably suspects the occurrence of fraud in relation to a Competition and/or draw.\n                    </p>\n                    <p class=\"text\">\n                      13.3 The Promoter may, at its absolute and sole discretion, give or make a Prize to a person whom\n                      it\n                      is satisfied is the duly authorised representative of the Winner acting under a lawfully executed\n                      power of attorney or other equivalent authorisation.\n                    </p>\n                    <h4 class=\"title\">\n                      14. YOUR ACCOUNT\n                    </h4>\n                    <p class=\"text\">\n                      14.1 You must keep your account password secure and secret at all times and take steps to prevent\n                      it\n                      being used without your permission. You must (a) memorise your password and never tell it to\n                      anyone,\n                      (b) never write your password down (including on your computer or other electronic device) or\n                      record\n                      it in a way that can be understood by someone else, (c) destroy any communications from the\n                      Promoter\n                      in relation to your password as soon as you have read them, (d) avoid using a password that is\n                      easy\n                      to guess, (e) ensure that no-one else (apart from you) uses your account while you and/or your\n                      devices are logged on to the Website (including by logging on to your devices through a mobile,\n                      Wi-Fi or shared access connection they are using), (f) log off or exit from your account when not\n                      using it, and (g) keep your password or other access information secret,\n                    </p>\n                    <p class=\"text\">\n                      14.2 Your password and log in details are personal to you and should not be given to anyone else\n                      and/or used to provide shared access e.g. over a network. You must use a password which is unique\n                      to\n                      your account, and maintain good internet security\n                    </p>\n                    <p class=\"text\">\n                      14.3 You must contact the Promoter immediately if you believe, suspect or know that anyone apart\n                      from you has used your account and/or given any instruction in relation to it without your\n                      permission, or if you believe, suspect or know someone else knows your password.\n                    </p>\n                    <p class=\"text\">\n                      14.4 If you forget your password, you can reset it by following the instructions on the Website\n                      (as\n                      long as you can provide the relevant security information requested or required by the Promoter).\n                    </p>\n                    <p class=\"text\">\n                      14.5 The Promoter shall not be responsible and/or liable for any and/or all consequences arising\n                      out\n                      of and/or relating to any and/or all breaches of this rule 18.5 by you. Furthermore, the Promoter\n                      shall not in any event be responsible and/or liable for any actions and/or inactions that you may\n                      take and/or consequences that you may suffer and/or incur as a result of using and/or in\n                      connection\n                      with the Website\n                    </p>\n                    <h4 class=\"title\">\n                      15. CHANGES\n                    </h4>\n                    <p class=\"text\">\n                      15.1 We may revise our terms and conditions from time to time and will post the most current\n                      version\n                      on the Website as soon as possible after the revised terms and conditions become effective. Please\n                      check this page periodically to ensure you understand the terms and conditions that apply at that\n                      time. By continuing to access and/or use the Website after the revisions come into effect, you\n                      agree\n                      to be bound by the revised terms and conditions. We may also update and change the Website,\n                      Competitions and draws from time to time to, amongst other things, reflect changes to our\n                      offering,\n                      Website, IT systems and/or our users’ needs and/or feedback.\n                    </p>\n                    <h4 class=\"title\">\n                      16. UNAUTHORISED USE AND EXPIRY OF YOUR DEBIT CARD\n                    </h4>\n                    <p class=\"text\">\n                      16.1 If you notify your nominated bank (or building society) that your debit card has been used\n                      without your permission in relation to a Competition or funding your wallet, and your nominated\n                      bank\n                      (or building society) asks the Promoter to return the relevant amount to your nominated bank (or\n                      building society) account, the Promoter may suspend your account and ask you to contact the\n                      Promoter. The Promoter accepts no responsibility and will have no liability for any chargebacks.\n                    </p>\n                    <p class=\"text\">\n                      16.2 If your debit card is due to expire, the Promoter will use reasonable efforts to return the\n                      funds in your account to your debit card before midnight on the day it expires. If it is not able\n                      to\n                      do so, the Promoter will use reasonable efforts to alert you of this and you should, in these\n                      circumstances, contact the Promoter to arrange another appropriate way for the Promoter to return\n                      the funds to you.\n                    </p>\n                    <h4 class=\"title\">\n                      17. USE OF THE WEBSITE\n                    </h4>\n                    <p class=\"text\">\n                      17.1 You hereby agree that (a) the Website, the Competitions and/or draws are for your own\n                      personal,\n                      non-commercial use, and (b) you are only allowed to use your account and the Website, enter\n                      Competitions draws via your account, as set out in these terms and conditions.\n                    </p>\n                    <p class=\"text\">\n                      17.2 You also hereby agree that you will only use your account, enter Competitions, enter\n                      Luckydraws\n                      and access and/or use the Website in an appropriate and lawful manner. You will not (a) receive,\n                      access and/or transmit any content which is obscene, pornographic, threatening, racist, menacing,\n                      offensive, defamatory, in breach of confidence, in breach of any intellectual property right\n                      (including, without limit, copyright) and/or otherwise objectionable and/or unlawful, (b)\n                      knowingly\n                      and/or recklessly transmit any content (including, without limit, viruses) through the Website\n                      and/or the Promoter’s software and IT systems which will cause, or be likely to cause, (i)\n                      detriment\n                      and/or harm, in any degree, to the Website, the Promoter’s software and IT systems owned and/or\n                      operated by the Promoter and/or others, and/or (ii) loss of and/or damage to data, (c) hack into,\n                      make excessive traffic demands on or cause any impairment of the functions of any computer system,\n                      deliver or forward chain letters, \"junk mail\" of any kind, surveys, contests, pyramid schemes or\n                      otherwise engage in any behaviour intended to prevent others from playing entering Competitions,\n                      entering draws and/or using the Website and/or any other website, and/or which is otherwise likely\n                      to damage the reputation and/or business of the Promoter and/or of any third party, and/or (d)\n                      authorise or allow anyone to do 21.2(a) – (c)\n                    </p>\n                    <p class=\"text\">\n                      17.3 You hereby agree to indemnify the Promoter against any and/or all costs, losses, damages and\n                      expenses which the Promoter may suffer and/or incur arising out of and/or in relation to any\n                      claim,\n                      legal proceeding and/or demand made by any third party due to and/or arising out of your unlawful,\n                      wrongful and/or negligent access and/or use of your account, the Website and/or the Promoter’s\n                      software and/or IT systems, and/or breach by you of these terms and conditions.\n                    </p>\n                    <p class=\"text\">\n                      17.4 There is no guarantee that the Website will display correctly on all devices it can be viewed\n                      on.\n                    </p>\n                    <p class=\"text\">\n                      17.5 The Promoter is the owner or licensee of all the copyright, trademarks and other intellectual\n                      property rights in, to and in respect of the Competition, draws and the Website, and you will not\n                      acquire any rights in any of these.\n                    </p>\n                    <p class=\"text\">\n                      17.6 Trademarks, service marks, logos, trade names, source identifiers and/or proprietary\n                      designations (“Trademarks”) of the Promoter used on and/or in connection with the Website, the\n                      Competitions and/or draws are trademarks of the Promoter. Trademarks of third parties used on\n                      and/or\n                      in connection with the Website, the Competition and/or draws are used for identification purposes\n                      only and may be the property of their respective owners.\n                    </p>\n                    <p class=\"text\">\n                      17.7 You must not (a) copy, disclose, transmit and/or otherwise make available and/or remove or\n                      change any material available on the Website, (b) reverse engineer or decompile (whether in whole\n                      or\n                      in part) any software used in connection with the Website and/or the provision of the Competitions\n                      and/or draws (except to the extent expressly permitted by applicable law) and/or (c) remove,\n                      obscure\n                      and/or change any copyright, trade mark or other intellectual property right notices in any\n                      material\n                      obtained from the Website and/or as a result of playing the Competitions and/or entering draws.\n                    </p>\n                    <p class=\"text\">\n                      17.8 You hereby agree that playing Competitions and/or entering draws (as well accessing and/or\n                      using your account) whilst located in any jurisdiction other than Nigeria is strictly prohibited.\n                    </p>\n                    <h4 class=\"title\">\n                      18. DISCRETION\n                    </h4>\n                    <p class=\"text\">\n                      The exercise by the Promoter of any discretion provided for in these terms and conditions will be\n                      final and binding.\n                    </p>\n                    <h4 class=\"title\">\n                      19. GENERAL\n                    </h4>\n                    <p class=\"text\">\n                      19.1 If the Promoter fails and/or delays to enforce a provision of the terms and conditions, this\n                      failure and/or delay is not a waiver of the Promoter’s right to do so later on.\n                    </p>\n                    <p class=\"text\">\n                      19.2 If any provision (or part of a provision) of these terms and conditions is decided by a court\n                      of competent jurisdiction to be void and/or unenforceable, that decision will only affect the\n                      particular provision (or part of the provision) and will not, in itself, make the other provisions\n                      void or unenforceable.\n                    </p>\n                    <p class=\"text\">\n                      19.3 You may not assign or otherwise transfer (in whole or in part) your rights and/or obligations\n                      under these terms and conditions. Any breach of this rule 23.3 may result in the use of your\n                      account\n                      and/or the provision of the Competition and/or draws and/or access to the Website being suspended\n                      or\n                      terminated immediately by the Promoter. The Promoter may assign or otherwise their rights and/or\n                      obligations under these terms and conditions in whole or in part to any third party at its sole\n                      and\n                      absolute discretion and without your consent. The Promoter may also assign these terms and\n                      conditions in their entirety, without your consent, to its successor in interest in connection\n                      with\n                      a merger, reorganisation, or sale of all or substantially all assets or equity. These terms and\n                      conditions shall bind and inure to the Promoter’s benefit, its successors and permitted assigns.\n                    </p>\n                    <p class=\"text\">\n                      19.4 These terms and conditions constitute the entire agreement between you and the Promoter\n                      regarding the subject matter of these terms conditions and supersede and replace any other prior\n                      and/or contemporaneous agreements, and/or terms and conditions applicable to the subject matter of\n                      these terms and conditions.\n                    </p>\n                    <p class=\"text\">\n                      19.5 A person who is not a party to these terms and conditions has no rights under the Contracts\n                      (Rights of Third Parties) Act 1999 (as amended or re-enacted from time to time, and any\n                      subordinate\n                      legislation made under that act) or otherwise to enforce any provision of these terms and\n                      conditions.\n                      <p class=\"text\">\n                        19.6 The Promoter will not be liable for any delay or failure to perform any obligation under\n                        these\n                        terms and conditions where the delay or failure results from any cause beyond its reasonable\n                        control, including acts of God, industrial disturbances, telecommunication/network failures,\n                        flood,\n                        storms, or other elements of nature, blockages, embargoes, riots, acts or orders of government,\n                        acts\n                        of terrorism, or war.\n                      </p>\n                      <p class=\"text\">\n                        19.7 The Website may contain hyperlinks to websites operated by parties other than us. Such\n                        hyperlinks are provided for your reference and convenience only. We do not control such websites\n                        and\n                        are not responsible for their content and/or the privacy or other practices of such websites. It\n                        is\n                        up to you to take precautions to ensure that whatever links they select and/or software you\n                        download\n                        from such websites are free of viruses. Our inclusion of hyperlinks to such websites does not\n                        imply\n                        any endorsement of the material on such websites, association, sponsorship and/or partnership\n                        with\n                        their operators. You must not create a text hyperlink to the Website without our prior written\n                        consent.\n                      </p>\n\n                </div>\n              </div>\n              <div class=\"footer-content\">\n                <h4 class=\"heading\">\n                  Did this answer your question?\n                </h4>\n                <ul class=\"emojis\">\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"far fa-sad-tear\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"far fa-meh\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"far fa-smile\"></i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms-of-services/terms-of-services.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms-of-services/terms-of-services.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<section class=\"breadcrumb-area bc-terms\">\n  <img class=\"bc-img\" src=\"assets/images/breadcrumb/tc.png\" alt=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h4 class=\"title\">\n          terms & conditions\n        </h4>\n        <ul class=\"breadcrumb-list\">\n          <li>\n            <a routerLink=\"/\">\n              <i class=\"fas fa-home\"></i>\n              Home\n            </a>\n          </li>\n          <li>\n            <span><i class=\"fas fa-chevron-right\"></i> </span>\n          </li>\n          <li>\n            <a routerLink=\"/terms-conditions\">Terms & Conditions</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n\n<div class=\"serch-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"serch-box\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <form [formGroup]=\"searchForm\" (ngSubmit)=\"sendMessage()\">\n                <ul class=\"list\">\n                  <li class=\"input-field\">\n                    <input formControlName=\"q\" type=\"text\" placeholder=\"Search For Article\" />\n                  </li>\n                  <li class=\"button\">\n                    <button type=\"submit\" class=\"mybtn1\">Get Started </button>\n                  </li>\n                </ul>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"serch-area\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"serch-box\">\n          <div class=\"row\">\n            <div class=\"col-lg-12\">\n              <form [formGroup]=\"searchForm\" (ngSubmit)=\"sendMessage()\">\n                <ul class=\"list\">\n                  <li class=\"input-field\">\n                    <input formControlName=\"q\" type=\"text\" placeholder=\"Search For Article\" />\n                  </li>\n                  <li class=\"button\">\n                    <button type=\"submit\" class=\"mybtn1\">Get Started </button>\n                  </li>\n                </ul>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<section class=\"help-section writter-artical-details\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"help-box\">\n          <div class=\"help-box-inner2 mt-0\">\n            <div class=\"single-artical\">\n              <div class=\"content\">\n                <h4 class=\"top-title\">\n                  Privacy\n                </h4>\n                <div class=\"writer-profile\">\n                  <div class=\"writer-content\">\n                    <h5 class=\"w-name\">\n                      Written by Lukydraws.ng\n                    </h5>\n                  </div>\n                </div>\n                <div class=\"inner-content\">\n                  <h4 class=\"title\">\n                    RESPONSIBLE GAMING\n                  </h4>\n                  <p class=\"text\">\n                    If you play you can win or lose. Gambling can be fun, exciting but there is no economic or\n                    mathematical certainty because of course, it’s only a game. In the worst cases you buy a little\n                    excitement at the right price.\n                  </p>\n                  <p class=\"text\">\n                    What is the right price? For sure it’s what you can afford to gamble while feeling completely at\n                    ease. You decide in advance how much to spend on betting and never exceed that limit. You keep the\n                    commitment you have made to yourself.\n                  </p>\n                  <p class=\"text\">\n                    Problem gambling can be recognised by modes of conduct such as a high level of spending, poor work\n                    results, relationship difficulties, theft, lying and depression. If gambling becomes a problem then\n                    it is no longer entertainment. If gambling worries you take a break.\n                  </p>\n                  <p class=\"text\">\n                    Protecting minors is a fundamental part of our responsible betting policy. Minors less than 18 years\n                    of age are forbidden from opening a betting account with Bet9ja. We immediately check the identity\n                    of all customers to prevent the services offered on our website being used by minors.\n                  </p>\n                  <h4 class=\"title\">\n                    1. STANDARD COMPETITION TERMS\n                  </h4>\n                  <p class=\"text\">\n                    1. Qualifying Persons\n                  </p>\n                  <p class=\"text\">\n                    1.1 AJEBO RETAIL LTD/ Lucky Draws (‘Promoter’, ‘our(s)’) operates various competitions resulting in\n                    the allocation of prizes in accordance with these terms and conditions on the website (‘Prize’ or\n                    ‘Prizes’) www.luckydraws.ng (the ‘Website’) – (each and all such competitions being referred to\n                    herein respectively as the ‘Competition’ or ‘Competitions’).\n                  </p>\n                  <p>\n                    1.2 Competitions are open to persons aged 18 or over who are resident in Nigeria. Employees of the\n                    Promoter or any person connected with the Promoter (through family, professional or commercial\n                    association) are restricted from participating in the Competition.\n                  </p>\n                  <p class=\"text\">\n                    1.3 The Promoter reserves the right to close a Customer’s account at any time if they feel the\n                    Customer is abusing the services, being abusive to other Customers or staff or they have the belief\n                    that it is not genuinely the Customer that is entering.\n                  </p>\n                  <p class=\"text\">\n                    1.4 The Promoter reserves the right to refuse a Customer’s Entry at the Promoter’s own discretion.\n                  </p>\n                  <p class=\"text\">\n                    1.5 These terms and conditions apply to all Competitions.\n                  </p>\n                  <h4 class=\"title\">\n                    2. LEGAL UNDERTAKING\n                  </h4>\n                  <p class=\"text\">\n                    2.1 By entering a Competition the entrant (‘Entrant’, ‘you’, ‘your(s)’ and/or ‘Customer’) will be\n                    deemed to have legal capacity to do so, you will have read and understood and accepted these terms\n                    and conditions and you will be bound by them and by any other requirements set out in any of the\n                    Promoter’s related promotional material.\n                  </p>\n                  <p>\n                    2.2 Competitions are governed by Nigeria law and all and/or any matters or disputes relating to the\n                    Competition will be dealt with and/or resolved under Nigerian Law and the Nigerian courts shall have\n                    exclusive jurisdiction.\n                  </p>\n                  <p class=\"text\">\n                    2.3 In the event that you participate in a Competition online via the Website, and by accepting\n                    these terms and conditions you hereby confirm that you are not breaching any laws in your country of\n                    residence regarding the legality of entering our Competitions. The Promoter will not be held\n                    responsible for any Entrant entering any of our Competitions unlawfully. If in any doubt you should\n                    immediately leave the Website and check with the relevant authorities in your country.\n                  </p>\n                  <h4 class=\"title\">\n                    3. COMPETITION ENTRY\n                  </h4>\n                  <p class=\"text\">\n                    3.1 Competitions may be entered via the Website. Multiple Competitions may be operated at the same\n                    time by the Promoter and each Competition will have a specific Prize.\n                  </p>\n                  <p>\n                    3.2 Availability and pricing of Competitions is at the discretion of the Promoter and will be\n                    specified at the point of sale on the Website.\n                  </p>\n                  <p class=\"text\">\n                    3.3 In order to enter a Competition, you will need to register an account with us. You can register\n                    an account online. To register an account online you will be asked to provide an email address or\n                    sign in via a social media account, such as Facebook, Twitter or Gmail (‘Social Media Account’)\n                  </p>\n                  <p>\n                    3.4 When playing a Competition online via the Website, you must follow the on- screen instructions\n                    to: (a) select the Competition you wish to enter and when you are ready to purchase your ticket(s)\n                    to the Competition (‘Tickets’), provide your contact and payment details. You will need to check\n                    your details carefully and tick the declaration, confirming you have read and understood the\n                    Competition terms and conditions; (b) once you have purchased your Tickets, register to play the\n                    relevant Competition and when your payment has cleared we will then contact you by email to confirm\n                    your entry into the Competition. Please note that when entering online and/or by post you will not\n                    be deemed entered into the Competition until we confirm your entry which can be confirmed in your\n                    account when you login (and any such entry referred to herein as an ‘Entry’ or ‘Entries’).\n                  </p>\n                  <p class=\"text\">\n                    3.5 The Promoter reserves the right to refuse or disqualify any incomplete Entry if it has\n                    reasonable grounds for believing that an Entrant has contravened any of these terms and conditions.\n                  </p>\n                  <p class=\"text\">\n                    3.6 To the extent permitted by applicable law, all Entries become the Promoter’s property and will\n                    not be returned.\n                  </p>\n                  <p class=\"text\">\n                    3.7 The Entrant can enter each Competition up to a maximum of 5 times.\n                  </p>\n                  <p class=\"text\">\n                    3.8 (a) Each account can have an unlimited amount of entries, providing they are purchased on that\n                    account on behalf of other people.\n                  </p>\n                  <p class=\"text\">\n                    3.9 Each Competition closes when the last number is taken, no more Entries after this point will be\n                    accepted.\n                  </p>\n                  <p class=\"text\">\n                    3.10 All Entrants must create an account prior to entering and supply an email address to proceed in\n                    the Competition.\n                  </p>\n                  <h4 class=\"title\">\n                    4. PROMOTION PERIODS\n                  </h4>\n                  <p class=\"text\">\n                    4.1 Each Competition will run for a specified period. Please see each Competition for details of\n                    start and end times and dates (‘Promotion Period(s)’).\n                  </p>\n                  <h4 class=\"title\">\n                    5. COMPETITION JUDGEMENT\n                  </h4>\n                  <p class=\"text\">\n                    5.1 Luckydraws guaranteed 100% random ball spinning machine will determine the winner of each\n                    Competition. However many Entrants have entered the Competition will determine how many balls are\n                    entered into the machine. Each Competition will have a minimum of 50 balls and a maximum of 100,000\n                    balls. The result will be live streamed on YouTube (or such other live streamed internet channel as\n                    the Promoter chooses).\n                  </p>\n                  <p class=\"text\">\n                    5.2 Due to the nature of the selection, there will only be one Winner per Competition, unless the\n                    Promoter states otherwise.\n                  </p>\n                  <p class=\"text\">\n                    5.3 The Promoter will attempt to contact winners of Competitions (referred to herein as ‘Winner(s)’)\n                    using the telephone numbers and email address provided at the time of Entry (or as subsequently\n                    updated) and held securely in our database. It is the Entrant’s responsibility to ensure that these\n                    details are accurate, up to date and complete. If for any reason these details are taken down,\n                    inputted and/or submitted and/or recorded in any way by you incorrectly, the Promoter will not be\n                    held responsible for any consequences of this of whatever nature and howsoever arising. Entrants\n                    must carefully check their contact details have been recorded correctly.\n                  </p>\n                  <p class=\"text\">\n                    5.4 If for any reason the Promoter is unable to contact a Winner within 5 working days (which may be\n                    extended at the sole discretion of the Promoter) of the end of a Competition, or the Winner fails\n                    for whatever reason or cause to confirm acceptance of the Prize and/or the Winner is disqualified as\n                    a result of not complying with or contravening any of these terms and conditions, the Winner hereby\n                    agrees that it will immediately, irrevocably and automatically forfeit the Prize and the Prize will\n                    remain in the possession and ownership of the Promoter.\n                  </p>\n                  <p class=\"text\">\n                    5.5 In the event that the Promoter closes a Competition early, the Winner will be selected from all\n                    valid and eligible Entries received by the Promoter prior to the date of closure, except that the\n                    Promoter reserves the right, at its sole discretion, to close a Competition early without selecting\n                    a Winner. In the event that a Competition is closed without selecting a Winner, the Promoter will\n                    give all Entrants game credit to enable them to replay equivalent Tickets in a subsequent\n                    Competition.\n                  </p>\n                  <p class=\"text\">\n                    5.6 Entrants who specifically consent to marketing communications will be entered onto the\n                    Promoter’s database for the purpose of conveying information as to the status of their Competition,\n                    as well as any future promotions or Competitions offered by the Promoter.\n                    <p class=\"text\">\n                      5.7 The Promoter also reserves the right at its sole discretion to extend the closing date of any\n                      Competition. Each Competition can have the closing time extended by the Promoter up to 4 times. If\n                      the Competition is not sold out after the 4th extension of time, then the Prize that will be\n                      awarded\n                      will be as follows:\n                    </p>\n                    <p class=\"text\">\n                      80% of the value of paid Entry to the Competition. Only the Competition Entrants (including free\n                      Entries) will be entered into this draw.\n                    </p>\n                    <h4 class=\"title\">\n                      6. WINNER’S DETAILS\n                    </h4>\n                    <p class=\"text\">\n                      6.1 The Winner will be required to show proof of identification on the delivery of the Prize. Any\n                      failure to meet this requirement may result in the Winner being disqualified and the Promoter\n                      retaining the Prize.\n                    </p>\n                    <p class=\"text\">\n                      6.2 All Winners will be asked for their consent by the Promoter to provide photographs and/or pose\n                      for photographs and videos and have their personal details (including details of any Prize won by\n                      them) included in marketing material. If a Winner consents to the above, the foregoing\n                      photographs,\n                      videos, and marketing material may be used in future marketing and public relations by the\n                      Promoter\n                      in connection with the Competition and in identifying them as a winner of a Competition.\n                    </p>\n                    <p class=\"text\">\n                      6.3 Following receipt and verification of the details requested above by the Promoter and provided\n                      that the Winner has satisfied these terms and conditions, the Winners will be contacted in order\n                      to\n                      make arrangements for the delivery of the Prize.\n                    </p>\n                    <h4 class=\"title\">\n                      7. COMPETITION PRIZES\n                    </h4>\n                    <p class=\"text\">\n                      7.1 The Prizes are determined, selected by all and/or some of the directors of the company and are\n                      owned by the Promoter from the date of the Competition going live on the Website to the date that\n                      the Winner receives the Prize. Details of each Prize can be found on the Website on the\n                      Competitions\n                      pages. Lucky draws takes no responsibility for the Prize awarded after delivery has taken place.\n                      Once the Winner receives the Prize, the Promoter does not insure the Prize. No insurance comes\n                      with\n                      the Prizes and the Promoter is not responsible for the Prize once it has been handed over to the\n                      Winner.\n                    </p>\n                    <p class=\"text\">\n                      7.2 Delivery of the Prize to the Winner’s home address in Lagos is free. The Promoter has a right\n                      to\n                      and/or may charge the Winner delivery fees if they require the Prize to be delivered to an address\n                      outside Lagos.\n                    </p>\n                    <p class=\"text\">\n                      7.3 All Entrant expenses to collect the Prize are the sole responsibility of the Winner.\n                    </p>\n                    <p class=\"text\">\n                      7.4 The Winner hereby agrees that all Prizes are subject to and are conditional on the terms and\n                      conditions of the Promoter, Prize provider, manufacturer and/or supplier and/or anyone that is\n                      involved in the provision or delivery of the Prize to the Winner.\n                    </p>\n                    <p class=\"text\">\n                      7.5 Each Prize must be accepted as awarded and is non-transferable or convertible to other\n                      substitutes and cannot be used in conjunction with any other vouchers, offers or discounts,\n                      including without limitation any vouchers or offers of the Promoter or other Prize suppliers\n                      and/or\n                      third parties.\n                    </p>\n                    <h4 class=\"title\">\n                      8. STORAGE\n                    </h4>\n                    <p class=\"text\">\n                      The Promoter can store the chosen Prize free of charge for up to 30 days after notifying the\n                      Winner,\n                      at the end of which time the Prize will be delivered to the Winner. If the Prize needs to be\n                      stored\n                      by the Promoter for more than 30 days then this shall be at the entire cost of the Winner where\n                      such\n                      cost will need to be paid by the Winner to the Promoter before the Winner receives the Prize.\n                    </p>\n                    <h4 class=\"title\">\n                      9. WINNERS’ PERSONAL DATA\n                    </h4>\n                    <p class=\"text\">\n                      9.1 Subject to the Winner’s consent, the Winner may be asked to have their photo and video taken\n                      by\n                      the Promoter for promotional purposes (Public Relations and Marketing).\n                    </p>\n                    <p class=\"text\">\n                      9.2 When entering a Competition, the Entrant will be asked to consent to use of their name,\n                      address,\n                      and/or photograph or other likeness, as well as your appearance at publicity events without any\n                      additional compensation (save for reasonable travel expenses that are approved in writing in\n                      advance\n                      by the Promoter) and as required by the Promoter.\n                    </p>\n                    <h4 class=\"title\">\n                      10. LIMITS OF LIABILITY\n                    </h4>\n                    <p class=\"text\">\n                      10.1 The Promoter makes or gives no representations and/or warranties and/or assurances of\n                      whatever\n                      nature and howsoever arising (and whether in writing or otherwise) as to the quality, suitability\n                      and/or fitness for any particular purpose of any of the goods or services advertised, offered\n                      and/or\n                      provided as Prizes. Except for liability for death or personal injury caused by the negligence of\n                      the Promoter and/or for any fraudulent misrepresentations and/or for any events and/or\n                      circumstances\n                      to the extent that they cannot be excluded or limited by law. The Promoter shall not be liable for\n                      any loss suffered or sustained to person or property including, but not limited to, consequential\n                      (including economic) loss by reason of any act or omission by the Promoter, or its servants or\n                      agents, in connection with the arrangement for supply, or the supply, of any goods by any person\n                      to\n                      the Prize Winner(s) and, where applicable, to any family/persons accompanying the Winner(s), or in\n                      connection with any of the Competitions promoted by the Promoter.\n                    </p>\n                    <p class=\"text\">\n                      10.2 The total maximum aggregate liability of the Promoter to each Winner shall be limited to the\n                      total value of each Prize that has been won by the relevant Winner.\n                    </p>\n                    <p class=\"text\">\n                      10.3 The total maximum aggregate liability of the Promoter to you shall (if you are not a Winner)\n                      be\n                      limited to the amount that you have paid to enter Competitions in the first 12 months of you\n                      playing\n                      any Competition.\n                    </p>\n                    <p class=\"text\">\n                      10.4 Nothing in these terms and conditions shall prevent you from making claims to the extent that\n                      you are exercising your statutory rights.\n                    </p>\n                    <h4 class=\"title\">\n                      11. ELECTRONIC COMMUNICATIONS\n                    </h4>\n                    <p class=\"text\">\n                      No responsibility will be accepted by the Promoter for failed, partial or garbled computer\n                      transmissions, for any computer, telephone, cable, network, electronic or Internet hardware or\n                      software malfunctions, failures, connections, availability, for the acts or omissions of any\n                      service\n                      provider, internet accessibility or availability or for traffic congestion or unauthorized human\n                      act, including any errors or mistakes. The Promoter shall use its reasonable endeavors to award\n                      the\n                      Prize for a Competition to the correct Entrant. If due to reasons of hardware, software or other\n                      computer related failure, or due to human error, the Prize is awarded incorrectly, the Promoter\n                      reserves the right to reclaim the Prize and award it to the correct Entrant, at its sole\n                      discretion\n                      and without admission of liability and the Entrant that has been incorrectly awarded the Prize\n                      will\n                      immediately at the Entrant’s own cost and expense return it to the Promoter and/or pay the\n                      Promoter\n                      for that Prize (at the option of the Promoter). The Promoter shall not be liable for any economic\n                      and/or other loss and/or consequential loss suffered or sustained to any persons to whom an award\n                      has been incorrectly made, and no compensation shall be due to such persons. The Promoter shall\n                      use\n                      its reasonable endeavours to ensure that the software and Website(s) Used to operate its\n                      Competitions performs correctly and accurately across the latest versions of popular internet,\n                      tablet and mobile browsers. For the avoidance of doubt, only the Ticket recorded in our systems,\n                      howsoever displayed or calculated, shall be entered into the relevant Competition and the Promoter\n                      shall not be held liable for any Competition Entries that occur as a result of malfunctioning\n                      software or other events.\n                    </p>\n                    <h4 class=\"title\">\n                      12. DATA PROTECTION NOTICE\n                    </h4>\n                    <p class=\"text\">\n                      Any personal data that you supply to the Promoter or authorize the Promoter to obtain from a third\n                      party, for example, a credit card company, will be used by the Promoter to administer the\n                      Competition and fulfill Prizes where applicable. In order to process, record and use your personal\n                      data the Promoter may disclose it to (i) any credit card company whose name you give; (ii) any\n                      person to whom the Promoter proposes to transfer any of the Promoter’s rights and/or\n                      responsibilities under any agreement the Promoter may have with you; (iii) any person to whom the\n                      Promoter proposes to transfer its business or any part of it; (iv) comply with any legal or\n                      regulatory requirement of the Promoter in any country; and (v) prevent, detect or prosecute fraud\n                      and other crime. In order to process, use, record and disclose your personal data the Promoter may\n                      need to transfer such information outside the United Kingdom, in which event the Promoter is\n                      responsible for ensuring that your personal data continues to be adequately protected during the\n                      course of such transfer.\n                    </p>\n                    <h4 class=\"title\">\n                      13. VALIDATION\n                    </h4>\n                    <p class=\"text\">\n                      13.1 The Promoter hereby reserves the right not give or make a Prize until it is satisfied that\n                      (a)\n                      the Winner has a validly registered Website account and/or is not in breach of these terms and\n                      conditions, (b) any and/or all amounts due or owing by you to the Promoter have been paid in full,\n                      (c) the identity of the Winner and his or her entitlement to receive the Prize has been\n                      established\n                      to the Promoter’s satisfaction (in particular, the Promoter reserves the right to request\n                      documentary proof of identity and not to give or make a Prize until satisfied appropriate proof of\n                      identity has been provided), and (d) the Promoter may require proof of age to be produced before\n                      giving or making a Prize. Prizes will not be given or made to Winners found to be under below the\n                      age of 16.\n                    </p>\n                    <p class=\"text\">\n                      13.2 Without prejudice to rule 17.1 above, the Promoter reserves the right not to make or give a\n                      Prize if it reasonably suspects the occurrence of fraud in relation to a Competition and/or draw.\n                    </p>\n                    <p class=\"text\">\n                      13.3 The Promoter may, at its absolute and sole discretion, give or make a Prize to a person whom\n                      it\n                      is satisfied is the duly authorised representative of the Winner acting under a lawfully executed\n                      power of attorney or other equivalent authorisation.\n                    </p>\n                    <h4 class=\"title\">\n                      14. YOUR ACCOUNT\n                    </h4>\n                    <p class=\"text\">\n                      14.1 You must keep your account password secure and secret at all times and take steps to prevent\n                      it\n                      being used without your permission. You must (a) memorise your password and never tell it to\n                      anyone,\n                      (b) never write your password down (including on your computer or other electronic device) or\n                      record\n                      it in a way that can be understood by someone else, (c) destroy any communications from the\n                      Promoter\n                      in relation to your password as soon as you have read them, (d) avoid using a password that is\n                      easy\n                      to guess, (e) ensure that no-one else (apart from you) uses your account while you and/or your\n                      devices are logged on to the Website (including by logging on to your devices through a mobile,\n                      Wi-Fi or shared access connection they are using), (f) log off or exit from your account when not\n                      using it, and (g) keep your password or other access information secret,\n                    </p>\n                    <p class=\"text\">\n                      14.2 Your password and log in details are personal to you and should not be given to anyone else\n                      and/or used to provide shared access e.g. over a network. You must use a password which is unique\n                      to\n                      your account, and maintain good internet security\n                    </p>\n                    <p class=\"text\">\n                      14.3 You must contact the Promoter immediately if you believe, suspect or know that anyone apart\n                      from you has used your account and/or given any instruction in relation to it without your\n                      permission, or if you believe, suspect or know someone else knows your password.\n                    </p>\n                    <p class=\"text\">\n                      14.4 If you forget your password, you can reset it by following the instructions on the Website\n                      (as\n                      long as you can provide the relevant security information requested or required by the Promoter).\n                    </p>\n                    <p class=\"text\">\n                      14.5 The Promoter shall not be responsible and/or liable for any and/or all consequences arising\n                      out\n                      of and/or relating to any and/or all breaches of this rule 18.5 by you. Furthermore, the Promoter\n                      shall not in any event be responsible and/or liable for any actions and/or inactions that you may\n                      take and/or consequences that you may suffer and/or incur as a result of using and/or in\n                      connection\n                      with the Website\n                    </p>\n                    <h4 class=\"title\">\n                      15. CHANGES\n                    </h4>\n                    <p class=\"text\">\n                      15.1 We may revise our terms and conditions from time to time and will post the most current\n                      version\n                      on the Website as soon as possible after the revised terms and conditions become effective. Please\n                      check this page periodically to ensure you understand the terms and conditions that apply at that\n                      time. By continuing to access and/or use the Website after the revisions come into effect, you\n                      agree\n                      to be bound by the revised terms and conditions. We may also update and change the Website,\n                      Competitions and draws from time to time to, amongst other things, reflect changes to our\n                      offering,\n                      Website, IT systems and/or our users’ needs and/or feedback.\n                    </p>\n                    <h4 class=\"title\">\n                      16. UNAUTHORISED USE AND EXPIRY OF YOUR DEBIT CARD\n                    </h4>\n                    <p class=\"text\">\n                      16.1 If you notify your nominated bank (or building society) that your debit card has been used\n                      without your permission in relation to a Competition or funding your wallet, and your nominated\n                      bank\n                      (or building society) asks the Promoter to return the relevant amount to your nominated bank (or\n                      building society) account, the Promoter may suspend your account and ask you to contact the\n                      Promoter. The Promoter accepts no responsibility and will have no liability for any chargebacks.\n                    </p>\n                    <p class=\"text\">\n                      16.2 If your debit card is due to expire, the Promoter will use reasonable efforts to return the\n                      funds in your account to your debit card before midnight on the day it expires. If it is not able\n                      to\n                      do so, the Promoter will use reasonable efforts to alert you of this and you should, in these\n                      circumstances, contact the Promoter to arrange another appropriate way for the Promoter to return\n                      the funds to you.\n                    </p>\n                    <h4 class=\"title\">\n                      17. USE OF THE WEBSITE\n                    </h4>\n                    <p class=\"text\">\n                      17.1 You hereby agree that (a) the Website, the Competitions and/or draws are for your own\n                      personal,\n                      non-commercial use, and (b) you are only allowed to use your account and the Website, enter\n                      Competitions draws via your account, as set out in these terms and conditions.\n                    </p>\n                    <p class=\"text\">\n                      17.2 You also hereby agree that you will only use your account, enter Competitions, enter\n                      Luckydraws\n                      and access and/or use the Website in an appropriate and lawful manner. You will not (a) receive,\n                      access and/or transmit any content which is obscene, pornographic, threatening, racist, menacing,\n                      offensive, defamatory, in breach of confidence, in breach of any intellectual property right\n                      (including, without limit, copyright) and/or otherwise objectionable and/or unlawful, (b)\n                      knowingly\n                      and/or recklessly transmit any content (including, without limit, viruses) through the Website\n                      and/or the Promoter’s software and IT systems which will cause, or be likely to cause, (i)\n                      detriment\n                      and/or harm, in any degree, to the Website, the Promoter’s software and IT systems owned and/or\n                      operated by the Promoter and/or others, and/or (ii) loss of and/or damage to data, (c) hack into,\n                      make excessive traffic demands on or cause any impairment of the functions of any computer system,\n                      deliver or forward chain letters, \"junk mail\" of any kind, surveys, contests, pyramid schemes or\n                      otherwise engage in any behaviour intended to prevent others from playing entering Competitions,\n                      entering draws and/or using the Website and/or any other website, and/or which is otherwise likely\n                      to damage the reputation and/or business of the Promoter and/or of any third party, and/or (d)\n                      authorise or allow anyone to do 21.2(a) – (c)\n                    </p>\n                    <p class=\"text\">\n                      17.3 You hereby agree to indemnify the Promoter against any and/or all costs, losses, damages and\n                      expenses which the Promoter may suffer and/or incur arising out of and/or in relation to any\n                      claim,\n                      legal proceeding and/or demand made by any third party due to and/or arising out of your unlawful,\n                      wrongful and/or negligent access and/or use of your account, the Website and/or the Promoter’s\n                      software and/or IT systems, and/or breach by you of these terms and conditions.\n                    </p>\n                    <p class=\"text\">\n                      17.4 There is no guarantee that the Website will display correctly on all devices it can be viewed\n                      on.\n                    </p>\n                    <p class=\"text\">\n                      17.5 The Promoter is the owner or licensee of all the copyright, trademarks and other intellectual\n                      property rights in, to and in respect of the Competition, draws and the Website, and you will not\n                      acquire any rights in any of these.\n                    </p>\n                    <p class=\"text\">\n                      17.6 Trademarks, service marks, logos, trade names, source identifiers and/or proprietary\n                      designations (“Trademarks”) of the Promoter used on and/or in connection with the Website, the\n                      Competitions and/or draws are trademarks of the Promoter. Trademarks of third parties used on\n                      and/or\n                      in connection with the Website, the Competition and/or draws are used for identification purposes\n                      only and may be the property of their respective owners.\n                    </p>\n                    <p class=\"text\">\n                      17.7 You must not (a) copy, disclose, transmit and/or otherwise make available and/or remove or\n                      change any material available on the Website, (b) reverse engineer or decompile (whether in whole\n                      or\n                      in part) any software used in connection with the Website and/or the provision of the Competitions\n                      and/or draws (except to the extent expressly permitted by applicable law) and/or (c) remove,\n                      obscure\n                      and/or change any copyright, trade mark or other intellectual property right notices in any\n                      material\n                      obtained from the Website and/or as a result of playing the Competitions and/or entering draws.\n                    </p>\n                    <p class=\"text\">\n                      17.8 You hereby agree that playing Competitions and/or entering draws (as well accessing and/or\n                      using your account) whilst located in any jurisdiction other than Nigeria is strictly prohibited.\n                    </p>\n                    <h4 class=\"title\">\n                      18. DISCRETION\n                    </h4>\n                    <p class=\"text\">\n                      The exercise by the Promoter of any discretion provided for in these terms and conditions will be\n                      final and binding.\n                    </p>\n                    <h4 class=\"title\">\n                      19. GENERAL\n                    </h4>\n                    <p class=\"text\">\n                      19.1 If the Promoter fails and/or delays to enforce a provision of the terms and conditions, this\n                      failure and/or delay is not a waiver of the Promoter’s right to do so later on.\n                    </p>\n                    <p class=\"text\">\n                      19.2 If any provision (or part of a provision) of these terms and conditions is decided by a court\n                      of competent jurisdiction to be void and/or unenforceable, that decision will only affect the\n                      particular provision (or part of the provision) and will not, in itself, make the other provisions\n                      void or unenforceable.\n                    </p>\n                    <p class=\"text\">\n                      19.3 You may not assign or otherwise transfer (in whole or in part) your rights and/or obligations\n                      under these terms and conditions. Any breach of this rule 23.3 may result in the use of your\n                      account\n                      and/or the provision of the Competition and/or draws and/or access to the Website being suspended\n                      or\n                      terminated immediately by the Promoter. The Promoter may assign or otherwise their rights and/or\n                      obligations under these terms and conditions in whole or in part to any third party at its sole\n                      and\n                      absolute discretion and without your consent. The Promoter may also assign these terms and\n                      conditions in their entirety, without your consent, to its successor in interest in connection\n                      with\n                      a merger, reorganisation, or sale of all or substantially all assets or equity. These terms and\n                      conditions shall bind and inure to the Promoter’s benefit, its successors and permitted assigns.\n                    </p>\n                    <p class=\"text\">\n                      19.4 These terms and conditions constitute the entire agreement between you and the Promoter\n                      regarding the subject matter of these terms conditions and supersede and replace any other prior\n                      and/or contemporaneous agreements, and/or terms and conditions applicable to the subject matter of\n                      these terms and conditions.\n                    </p>\n                    <p class=\"text\">\n                      19.5 A person who is not a party to these terms and conditions has no rights under the Contracts\n                      (Rights of Third Parties) Act 1999 (as amended or re-enacted from time to time, and any\n                      subordinate\n                      legislation made under that act) or otherwise to enforce any provision of these terms and\n                      conditions.\n                      <p class=\"text\">\n                        19.6 The Promoter will not be liable for any delay or failure to perform any obligation under\n                        these\n                        terms and conditions where the delay or failure results from any cause beyond its reasonable\n                        control, including acts of God, industrial disturbances, telecommunication/network failures,\n                        flood,\n                        storms, or other elements of nature, blockages, embargoes, riots, acts or orders of government,\n                        acts\n                        of terrorism, or war.\n                      </p>\n                      <p class=\"text\">\n                        19.7 The Website may contain hyperlinks to websites operated by parties other than us. Such\n                        hyperlinks are provided for your reference and convenience only. We do not control such websites\n                        and\n                        are not responsible for their content and/or the privacy or other practices of such websites. It\n                        is\n                        up to you to take precautions to ensure that whatever links they select and/or software you\n                        download\n                        from such websites are free of viruses. Our inclusion of hyperlinks to such websites does not\n                        imply\n                        any endorsement of the material on such websites, association, sponsorship and/or partnership\n                        with\n                        their operators. You must not create a text hyperlink to the Website without our prior written\n                        consent.\n                      </p>\n\n                </div>\n              </div>\n              <div class=\"footer-content\">\n                <h4 class=\"heading\">\n                  Did this answer your question?\n                </h4>\n                <ul class=\"emojis\">\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"far fa-sad-tear\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"far fa-meh\"></i>\n                    </a>\n                  </li>\n                  <li>\n                    <a href=\"#\">\n                      <i class=\"far fa-smile\"></i>\n                    </a>\n                  </li>\n                </ul>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/winners/winners.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/winners/winners.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<!-- Breadcrumb Area Start -->\n<section class=\"breadcrumb-area bc-awards\">\n  <img class=\"bc-img\" src=\"assets/images/breadcrumb/awards.png\" alt=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h4 class=\"title\">\n          Winners\n        </h4>\n        <ul class=\"breadcrumb-list\">\n          <li>\n            <a href=\"index.html\">\n              <i class=\"fas fa-home\"></i>\n              Home\n            </a>\n          </li>\n          <li>\n            <span><i class=\"fas fa-chevron-right\"></i> </span>\n          </li>\n          <li>\n            <a href=\"Winners.html\">Winners</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Breadcrumb Area End -->\n\n\n<!-- Awards Area Start -->\n<section class=\"awards-area\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-8 col-md-10\">\n        <div class=\"section-heading\">\n          <h5 class=\"subtitle\">\n            Previous Winners\n          </h5>\n          <h2 class=\"title\">\n            Deposit Bonus\n          </h2>\n          <p class=\"text\">\n            We update our site regularly; more and more winners are added every day! To locate the most recent winner's\n            information\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-awards\">\n          <div class=\"content\">\n            <img src=\"assets/images/awards/ic1.png\" alt=\"\">\n            <h4 class=\"title\">\n              Luck power\n            </h4>\n            <p>\n              <i class=\"fas fa-users\"></i>342\n            </p>\n            <a href=\"#\" class=\"mybtn2\">Read MOre</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-awards\">\n          <div class=\"content\">\n            <img src=\"assets/images/awards/ic2.png\" alt=\"\">\n            <h4 class=\"title\">\n              Zero Hunter\n            </h4>\n            <p>\n              <i class=\"fas fa-users\"></i>342\n            </p>\n            <a href=\"#\" class=\"mybtn2\">Read MOre</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-awards\">\n          <div class=\"content\">\n            <img src=\"assets/images/awards/ic3.png\" alt=\"\">\n            <h4 class=\"title\">\n              BTC Top\n            </h4>\n            <p>\n              <i class=\"fas fa-users\"></i>342\n            </p>\n            <a href=\"#\" class=\"mybtn2\">Read MOre</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-awards\">\n          <div class=\"content\">\n            <img src=\"assets/images/awards/ic4.png\" alt=\"\">\n            <h4 class=\"title\">\n              BTC King\n            </h4>\n            <p>\n              <i class=\"fas fa-users\"></i>342\n            </p>\n            <a href=\"#\" class=\"mybtn2\">Read MOre</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-awards\">\n          <div class=\"content\">\n            <img src=\"assets/images/awards/ic5.png\" alt=\"\">\n            <h4 class=\"title\">\n              Money Bag\n            </h4>\n            <p>\n              <i class=\"fas fa-users\"></i>342\n            </p>\n            <a href=\"#\" class=\"mybtn2\">Read MOre</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg-4 col-md-6\">\n        <div class=\"single-awards\">\n          <div class=\"content\">\n            <img src=\"assets/images/awards/ic6.png\" alt=\"\">\n            <h4 class=\"title\">\n              BTC Top\n            </h4>\n            <p>\n              <i class=\"fas fa-users\"></i>342\n            </p>\n            <a href=\"#\" class=\"mybtn2\">Read MOre</a>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n<!-- Awards Area End -->\n<section class=\"activities\">\n  <img class=\"shape shape1\" src=\"assets/images/people/shape1.png\" alt=\"\">\n  <img class=\"shape shape2\" src=\"assets/images/people/shape2.png\" alt=\"\">\n  <img class=\"shape shape3\" src=\"assets/images/people/shape3.png\" alt=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <div class=\"tab-content\" id=\"pills-tabContent\">\n          <div class=\"tab-pane fade show active\" id=\"pills-all-bets\" role=\"tabpanel\"\n            aria-labelledby=\"pills-all-bets-tab\">\n            <div class=\"responsive-table\">\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">DATE</th>\n                    <th scope=\"col\">USER</th>\n                    <th scope=\"col\">BET ID</th>\n                    <th scope=\"col\">BET AMOUNT</th>\n                    <th scope=\"col\">CHANCE</th>\n                    <th scope=\"col\">REWARDS</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>\n                      12/05/2020\n                    </td>\n                    <td>\n                      Tom Bass\n                    </td>\n                    <td>\n                      b799b8724b\n                    </td>\n                    <td>\n                      0.00000051\n                    </td>\n                    <td>70%</td>\n                    <td>Dice</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      12/05/2020\n                    </td>\n                    <td>\n                      Tom Bass\n                    </td>\n                    <td>\n                      b799b8724b\n                    </td>\n                    <td>\n                      0.00000051\n                    </td>\n                    <td>70%</td>\n                    <td>Dice</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      12/05/2020\n                    </td>\n                    <td>\n                      Tom Bass\n                    </td>\n                    <td>\n                      b799b8724b\n                    </td>\n                    <td>\n                      0.00000051\n                    </td>\n                    <td>70%</td>\n                    <td>Dice</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      12/05/2020\n                    </td>\n                    <td>\n                      Tom Bass\n                    </td>\n                    <td>\n                      b799b8724b\n                    </td>\n                    <td>\n                      0.00000051\n                    </td>\n                    <td>70%</td>\n                    <td>Dice</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      12/05/2020\n                    </td>\n                    <td>\n                      Tom Bass\n                    </td>\n                    <td>\n                      b799b8724b\n                    </td>\n                    <td>\n                      0.00000051\n                    </td>\n                    <td>70%</td>\n                    <td>Dice</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      12/05/2020\n                    </td>\n                    <td>\n                      Tom Bass\n                    </td>\n                    <td>\n                      b799b8724b\n                    </td>\n                    <td>\n                      0.00000051\n                    </td>\n                    <td>70%</td>\n                    <td>Dice</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      12/05/2020\n                    </td>\n                    <td>\n                      Tom Bass\n                    </td>\n                    <td>\n                      b799b8724b\n                    </td>\n                    <td>\n                      0.00000051\n                    </td>\n                    <td>70%</td>\n                    <td>Dice</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      12/05/2020\n                    </td>\n                    <td>\n                      Tom Bass\n                    </td>\n                    <td>\n                      b799b8724b\n                    </td>\n                    <td>\n                      0.00000051\n                    </td>\n                    <td>70%</td>\n                    <td>Dice</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      12/05/2020\n                    </td>\n                    <td>\n                      Tom Bass\n                    </td>\n                    <td>\n                      b799b8724b\n                    </td>\n                    <td>\n                      0.00000051\n                    </td>\n                    <td>70%</td>\n                    <td>Dice</td>\n                  </tr>\n                  <tr>\n                    <td>\n                      12/05/2020\n                    </td>\n                    <td>\n                      Tom Bass\n                    </td>\n                    <td>\n                      b799b8724b\n                    </td>\n                    <td>\n                      0.00000051\n                    </td>\n                    <td>70%</td>\n                    <td>Dice</td>\n                  </tr>\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Fun fact Area Start -->\n  <div class=\"funfact\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-4\">\n          <div class=\"single-fun\">\n            <img src=\"assets/images/funfact/icon1.png\" alt=\"\">\n            <div class=\"count-area\">\n              <div class=\"count\">93K</div>\n            </div>\n            <p>\n              Players\n            </p>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"single-fun\">\n            <img src=\"assets/images/funfact/icon2.png\" alt=\"\">\n            <div class=\"count-area\">\n              <div class=\"count\">99+</div>\n            </div>\n            <p>\n              Games\n            </p>\n          </div>\n        </div>\n        <div class=\"col-lg-4\">\n          <div class=\"single-fun\">\n            <img src=\"assets/images/funfact/icon3.png\" alt=\"\">\n            <div class=\"count-area\">\n              <div class=\"count\">70+</div>\n            </div>\n            <p>\n              Winners\n            </p>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  <!-- Fun fact Area End -->\n</section>\n\n<!-- Recent Winners Area End -->\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partial/footer/footer.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partial/footer/footer.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\" id=\"footer\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"footer-widget info-link-widget\">\n          <h4 class=\"title\">About</h4>\n          <ul class=\"link-list\">\n            <li>\n              <a routerLink=\"/about-us\"> <i class=\"fas fa-angle-double-right\"></i> About Us </a>\n            </li>\n            <li>\n              <a routerLink=\"/contact\"> <i class=\"fas fa-angle-double-right\"></i> Contact Us </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"footer-widget info-link-widget\">\n          <h4 class=\"title\">My Account</h4>\n          <ul class=\"link-list\">\n            <li>\n              <a routerLink=\"/my-account\"> <i class=\"fas fa-angle-double-right\"></i> Manage Your Account </a>\n            </li>\n            <li>\n              <a routerLink=\"/faq\"> <i class=\"fas fa-angle-double-right\"></i> How to Deposit </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-6 col-lg-3\">\n        <div class=\"footer-widget info-link-widget\">\n          <h4 class=\"title\">Legal Info</h4>\n          <ul class=\"link-list\">\n            <li>\n              <a routerLink=\"/privacy-policy\"> <i class=\"fas fa-angle-double-right\"></i>Privacy Policy </a>\n            </li>\n            <li>\n              <a routerLink=\"/terms-services\"> <i class=\"fas fa-angle-double-right\"></i>Terms of Service </a>\n            </li>\n          </ul>\n        </div>\n      </div>\n    </div>\n  </div>\n  <div class=\"copy-bg\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"left-area\">\n            <p>Copyright © 2020.All Rights Reserved By <a href=\"https://www.doshservices.com\">Dosh Services</a>\n            </p>\n          </div>\n        </div>\n\n      </div>\n    </div>\n  </div>\n</footer>\n\n<div class=\"bottomtotop\"><i class=\"fas fa-chevron-right\"></i></div>\n<app-login *ngIf=\"!isLoggedIn\"></app-login>\n<app-signup *ngIf=\"!isLoggedIn\"></app-signup>\n<ngx-spinner bdColor=\"rgba(51,51,51,0.8)\" size=\"medium\" color=\"#fff\" type=\"ball-scale-multiple\">\n  <p style=\"font-size: 20px; color: white;\">Loading...</p>\n</ngx-spinner>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partial/header/header.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partial/header/header.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header\">\n\n  <section class=\"top-header\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <div class=\"content\">\n            <div class=\"left-content\">\n              <ul class=\"left-list\">\n                <li>\n                  <p>\n                    <i class=\"fas fa-headset\"></i> Support\n                  </p>\n                </li>\n                <li>\n                  <p>\n                    <i class=\"fas fa-envelope\"></i> info@luckdyrdaws.ng\n                  </p>\n                </li>\n              </ul>\n            </div>\n            <div class=\"right-content\">\n              <ul class=\"right-list\">\n                <!--\n                <li>\n                  <div class=\"cart-icon tm-dropdown\">\n                    <i class=\"fas fa-cart-arrow-down\"></i>\n                    <span class=\"cart-count\">10</span>\n                    <div class=\"tm-dropdown-menu\">\n                      <ul class=\"list\">\n                        <li class=\"list-item\">\n                          <div class=\"close\">\n                            <i class=\"fas fa-times\"></i>\n                          </div>\n                          <ul class=\"number-list\">\n                            <li>24</li>\n                            <li>25</li>\n                            <li>26</li>\n                            <li>27</li>\n                            <li>28</li>\n                          </ul>\n                        </li>\n                        <li class=\"list-item\">\n                          <div class=\"close\">\n                            <i class=\"fas fa-times\"></i>\n                          </div>\n                          <ul class=\"number-list\">\n                            <li>24</li>\n                            <li>25</li>\n                            <li>26</li>\n                            <li>27</li>\n                            <li>28</li>\n                          </ul>\n                        </li>\n                        <li class=\"list-item\">\n                          <div class=\"close\">\n                            <i class=\"fas fa-times\"></i>\n                          </div>\n                          <ul class=\"number-list\">\n                            <li>24</li>\n                            <li>25</li>\n                            <li>26</li>\n                            <li>27</li>\n                            <li>28</li>\n                          </ul>\n                        </li>\n                        <li class=\"list-item\">\n                          <div class=\"close\">\n                            <i class=\"fas fa-times\"></i>\n                          </div>\n                          <ul class=\"number-list\">\n                            <li>24</li>\n                            <li>25</li>\n                            <li>26</li>\n                            <li>27</li>\n                            <li>28</li>\n                          </ul>\n                        </li>\n                      </ul>\n                      <a routerLink=\"/cart\" class=\"link-btn\">Checkout</a>\n                    </div>\n                  </div>\n                </li>-->\n                <li *ngIf=\"isLoggedIn\">\n                  <div class=\"cart-icon tm-dropdown\">\n                    <span>{{user.first_name}} <i class=\"fas fa-caret-down\"></i></span>\n                    <div class=\"tm-dropdown-menu\">\n                      <ul class=\"list\">\n                        <li class=\"list-item\">\n                          <a routerLink=\"/profile\" class=\"sign-in\" data-toggle=\"modal\" data-target=\"#login\"\n                            *ngIf=\"isLoggedIn\">\n                            <i class=\"fas fa-user\"></i> My Profile\n                          </a>\n                        </li>\n                        <li class=\"list-item\">\n                          <a routerLink=\"/wallet\" class=\"sign-in\" data-toggle=\"modal\" data-target=\"#login\"\n                            *ngIf=\"isLoggedIn\">\n                            <i class=\"fas fa-wallet\"></i> My Wallet\n                          </a>\n                        </li>\n                        <li class=\"list-item\">\n                          <a routerLink=\"/logout\" class=\"sign-in\" *ngIf=\"isLoggedIn\">\n                            <i class=\"fas fa-fw fa-sign-out-alt\"></i> Sign Out\n                          </a>\n                        </li>\n                      </ul>\n                    </div>\n                  </div>\n                </li>\n                <li>\n                  <a href=\"#\" class=\"sign-in\" data-toggle=\"modal\" data-target=\"#login\" *ngIf=\"!isLoggedIn\">\n                    <i class=\"fas fa-user\"></i> Sign In\n                  </a>\n                </li>\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n\n  <div class=\"mainmenu-area\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-12\">\n          <nav class=\"navbar navbar-expand-lg navbar-light\">\n            <a class=\"navbar-brand\" routerLink=\"/\">\n              <img src=\"assets/images/logo.png\" alt=\"\">\n            </a>\n            <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#main_menu\"\n              aria-controls=\"main_menu\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n              <span class=\"navbar-toggler-icon\"></span>\n            </button>\n            <div class=\"collapse navbar-collapse fixed-height\" id=\"main_menu\">\n              <ul class=\"navbar-nav ml-auto\">\n                <li class=\"nav-item \">\n                  <a class=\"nav-link \" routerLink=\"/\">Home\n                    <div class=\"mr-hover-effect\"></div></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLink=\"/competitions\">Competitions\n                    <div class=\"mr-hover-effect\"></div></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLink=\"/how-it-works\">How To Play\n                    <div class=\"mr-hover-effect\"></div></a>\n                </li>\n                <li class=\"nav-item\">\n                  <a class=\"nav-link\" routerLink=\"/contact\">Contact\n                    <div class=\"mr-hover-effect\"></div></a>\n                </li>\n              </ul>\n              <a href=\"#\" class=\"mybtn1\" data-toggle=\"modal\" data-target=\"#signin\" *ngIf=\"!isLoggedIn\"> Join us</a>\n            </div>\n          </nav>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</header>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partial/login/login.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partial/login/login.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade login-modal\" id=\"login\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"login\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <div class=\"modal-body\">\n        <div class=\"logo-area\"><img class=\"logo\" src=\"assets/images/logo.png\" alt=\"\" /></div>\n        <div class=\"header-area\">\n          <h4 class=\"title\">Great to have you back!</h4>\n          <p class=\"sub-title\">Enter your details below.</p>\n        </div>\n        <div class=\"form-area\">\n          <form [formGroup]=\"loginForm\" (ngSubmit)=\"login()\">\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input formControlName=\"email\" type=\"email\" class=\"input-field\" placeholder=\"Enter your Email\" required=\"\" />\n              <div *ngIf=\"submitted && loginForm.controls.email.errors\" class=\"alert alert-danger\">\n                <div *ngIf=\"loginForm.controls.email.errors.required\">Email is required</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input formControlName=\"password\" type=\"password\" class=\"input-field\" placeholder=\"Password\" required=\"\" />\n              <div *ngIf=\"submitted && loginForm.controls.password.errors\" class=\"alert alert-danger\">\n                <div *ngIf=\"loginForm.controls.password.errors.required\">Password is required</div>\n              </div>\n            </div>\n            <div class=\"form-group\"><button type=\"submit\" class=\"mybtn1\">Log In</button></div>\n          </form>\n        </div>\n        <div class=\"form-footer\">\n          <p>\n            Not a member?\n            <a href=\"#\" data-toggle=\"modal\" data-target=\"#signin\"> Create account <i class=\"fas fa-angle-double-right\"></i> </a>\n          </p>\n          <p>\n            <a routerLink=\"/forgot-password\">Forgot Password?<i class=\"fas fa-angle-double-right\"></i></a>\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/partial/signup/signup.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/partial/signup/signup.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"modal fade login-modal sign-in\" id=\"signin\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"signin\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered \" role=\"document\">\n    <div class=\"modal-content\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n          aria-hidden=\"true\">&times;</span></button>\n      <div class=\"modal-body\">\n        <div class=\"logo-area\">\n          <img class=\"logo\" src=\"assets/images/logo.png\" alt=\"\">\n        </div>\n        <div class=\"header-area\">\n          <h4 class=\"title\">Great to have you back!</h4>\n          <p class=\"sub-title\">Enter your details below.</p>\n        </div>\n        <div class=\"form-area\">\n          <form [formGroup]=\"registerForm\" (ngSubmit)=\"signup()\">\n            <div class=\"form-group\">\n              <label for=\"first_name\">First Name</label>\n              <input type=\"text\" class=\"input-field\" formControlName=\"first_name\" id=\"first_name\"\n                placeholder=\"Enter First Name\" />\n              <div *ngIf=\"submitted && registerForm.controls.first_name.errors\" class=\"alert alert-danger\">\n                <div *ngIf=\"registerForm.controls.first_name.errors.required\">First Name is required</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"last_name\">Last Name</label>\n              <input type=\"text\" class=\"input-field\" formControlName=\"last_name\" id=\"last_name\"\n                placeholder=\"Enter Last Name\" />\n              <div *ngIf=\"submitted && registerForm.controls.last_name.errors\" class=\"alert alert-danger\">\n                <div *ngIf=\"registerForm.controls.last_name.errors.required\">Last Name is required</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"email\">Email</label>\n              <input formControlName=\"email\" type=\"email\" class=\"input-field\" id=\"email\"\n                placeholder=\"Enter your Email\" />\n              <div *ngIf=\"submitted && registerForm.controls.email.errors\" class=\"alert alert-danger\">\n                <div *ngIf=\"registerForm.controls.email.errors.required\">Please Provide Your Email</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"phone\">Phone</label>\n              <input formControlName=\"phone\" type=\"tel\" class=\"input-field\" id=\"phone\" placeholder=\"Phone Number\" />\n              <div *ngIf=\"submitted && registerForm.controls.phone.errors\" class=\"alert alert-danger\">\n                <div *ngIf=\"registerForm.controls.phone.errors.required\">Enter Phone</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <label for=\"password\">Password</label>\n              <input formControlName=\"password\" type=\"password\" class=\"input-field\" id=\"password\"\n                placeholder=\"Enter your password\" />\n              <div *ngIf=\"submitted && registerForm.controls.password.errors\" class=\"alert alert-danger\">\n                <div *ngIf=\"registerForm.controls.password.errors.required\">Password is required</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <button type=\"submit\" class=\"mybtn1\">Sign Up</button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/all-transactions/all-transactions.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/all-transactions/all-transactions.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>all-transactions works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/new-transactions/new-transactions.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/new-transactions/new-transactions.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n\n<section class=\"breadcrumb-area bc-awards\">\n  <img class=\"bc-img\" src=\"assets/images/breadcrumb/awards.png\" alt=\"\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h4 class=\"title\">\n          Accounts\n        </h4>\n        <ul class=\"breadcrumb-list\">\n          <li>\n            <a routerLink=\"/\">\n              <i class=\"fas fa-home\"></i>\n              Home\n            </a>\n          </li>\n          <li>\n            <span><i class=\"fas fa-chevron-right\"></i> </span>\n          </li>\n          <li>\n            <a routerLink=\"/wallet\">Wallet</a>\n          </li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n\n<section class=\"awards-area\">\n  <div class=\"container\">\n    <div class=\"row justify-content-center\">\n      <div class=\"col-lg-8 col-md-10\">\n        <div class=\"section-heading\">\n          <h5 class=\"subtitle\">\n            Previous Winners\n          </h5>\n          <h2 class=\"title\">\n            Deposit Bonus\n          </h2>\n          <p class=\"text\">\n            We update our site regularly; more and more winners are added every day!\n            To locate the most recent winner's\n            information\n          </p>\n        </div>\n      </div>\n    </div>\n    <div class=\"row\">\n      <div class=\"col-lg-4 \">\n        <div class=\"single-awards\">\n          <div class=\"content\">\n            <img src=\"assets/images/feature/payout.png\" alt=\"\">\n            <h4 class=\"title\">\n              Wallet Balance\n            </h4>\n            <p>\n              <i class=\"fas fa-wallet\"></i>NGN {{Balance}}\n            </p>\n            <a href=\"#\" class=\"mybtn2\" data-toggle=\"modal\" data-target=\"#fund-wallet\">Fund Wallet</a>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-lg 6 col-md-offset-2 activities_new\">\n        <div class=\"tab-content\" id=\"pills-tabContent\">\n          <div class=\"tab-pane fade show active\" id=\"pills-all-bets\" role=\"tabpanel\"\n            aria-labelledby=\"pills-all-bets-tab\">\n            <div class=\"responsive-table\">\n              <table class=\"table table-bordered table-striped\" style=\"box-shadow:0 0 15px rgba(0, 0, 0, .21)\"\n                *ngIf=\"paynow\">\n                <thead>\n                  <tr>\n                    <th>Transaction Id</th>\n                    <th>Description</th>\n                    <th>Amount</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr>\n                    <td>{{options.ref}}</td>\n                    <td>Funding Wallet with: &#8358;{{formatedAmount}}</td>\n                    <td>&#8358;{{formatedAmount}}</td>\n                  </tr>\n                  <tr>\n                    <td colspan=\"2\"><strong>Total:</strong></td>\n                    <td>&#8358; {{formatedAmount}}</td>\n                  </tr>\n                </tbody>\n                <tfoot>\n                  <button class=\"btn btn-block btn-success\" angular4-paystack\n                    [key]=\"pk_test_62e65601e9e5df85272c1585f6a67479ded1eb17\" [email]=\"options.email\"\n                    [amount]=\"options.amount\" [ref]=\"options.ref\" [class]=\"'btn btn-primary'\"\n                    (paymentInit)=\"paymentInit()\" (close)=\"paymentCancel()\" (callback)=\"paymentDone($event)\">\n                    Fund Now\n                  </button>\n                </tfoot>\n              </table>\n              <table class=\"table\">\n                <thead>\n                  <tr>\n                    <th scope=\"col\">DATE</th>\n                    <th scope=\"col\">BET AMOUNT</th>\n                    <th scope=\"col\">TYPE</th>\n                  </tr>\n                </thead>\n                <tbody>\n                  <tr *ngFor=\"let transaction of Transactions\">\n                    <td>\n                      {{transaction.created_at}}\n                    </td>\n                    <td>{{transaction.amount}}</td>\n                    <td>{{transaction.transaction_type}}</td>\n                  </tr>\n                  <tr *ngIf=\"!Transactions\">\n                    <td colspan=\"3\">\n                      <h3>No Transactions Record</h3>\n                    </td>\n                  </tr>\n\n                </tbody>\n              </table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</section>\n\n<app-footer></app-footer>\n\n<div class=\"modal fade fund-wallet-modal\" id=\"fund-wallet\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"fund-wallet\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n        <span aria-hidden=\"true\">&times;</span>\n      </button>\n      <div class=\"modal-body\">\n        <div class=\"logo-area\">\n          <img class=\"logo\" src=\"assets/images/logo.png\" alt=\"\" />\n        </div>\n        <div class=\"header-area\">\n          <p class=\"sub-title\">Enter your details below.</p>\n        </div>\n        <div class=\"form-area\">\n          <form [formGroup]=\"walletForm\" (ngSubmit)=\"generateInvoice()\">\n            <div class=\"form-group\">\n              <label for=\"amount\">Enter Amount To Fund</label>\n              <input formControlName=\"amount\" type=\"number\" class=\"input-field\" placeholder=\"Enter Amount To Fund\"\n                required=\"\" />\n              <div *ngIf=\"submitted && walletForm.controls.amount.errors\" class=\"alert alert-danger\">\n                <div *ngIf=\"walletForm.controls.amount.errors.required\">amount is required</div>\n              </div>\n            </div>\n            <div class=\"form-group\">\n              <button type=\"submit\" class=\"mybtn1\">\n                Proceed\n              </button>\n            </div>\n          </form>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/transaction-details/transaction-details.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/transaction-details/transaction-details.component.html ***!
  \***************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>transaction-details works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/forgot-password/forgot-password.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/forgot-password/forgot-password.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <app-header></app-header>\n <section class=\"breadcrumb-area bc-awards\">\n   <img class=\"bc-img\" src=\"assets/images/breadcrumb/awards.png\" alt=\"\" />\n   <div class=\"container\">\n     <div class=\"row\">\n       <div class=\"col-lg-12\">\n         <h4 class=\"title\">Forgot Password</h4>\n         <ul class=\"breadcrumb-list\">\n           <li>\n             <a href=\"/\"> <i class=\"fas fa-home\"></i> Home </a>\n           </li>\n           <li>\n             <span><i class=\"fas fa-chevron-right\"></i> </span>\n           </li>\n           <li><a routerLink=\"/profile\">Profile</a></li>\n         </ul>\n       </div>\n     </div>\n   </div>\n </section>\n <section class=\"awards-area\">\n   <div class=\"container\">\n     <div class=\"row\">\n       <div class=\"col-lg-8 col-md-offset-2 profile\">\n         <div class=\"profile-form-wrapper\">\n           <div class=\"profile-box\">\n             <form [formGroup]=\"passwordForm\" (ngSubmit)=\"resetPassword()\">\n               <div class=\"form-group\">\n                 <label for=\"email\">Email</label>\n                 <input formControlName=\"email\" type=\"email\" class=\"input-field\" placeholder=\"Enter your Email\"\n                   required=\"\" />\n                 <div *ngIf=\"submitted && passwordForm.controls.email.errors\" class=\"alert alert-danger\">\n                   <div *ngIf=\"passwordForm.controls.email.errors.required\">Email is required</div>\n                 </div>\n               </div>\n               <div class=\"form-group\">\n                 <button type=\"submit\" class=\"mybtn1\">\n                   Proceed\n                 </button>\n               </div>\n             </form>\n           </div>\n         </div>\n       </div>\n     </div>\n   </div>\n </section>\n <app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/logout/logout.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/logout/logout.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <div class=\"loader\">Please Wait...</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/profile/profile.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/profile/profile.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<section class=\"breadcrumb-area bc-awards\">\n  <img class=\"bc-img\" src=\"assets/images/breadcrumb/awards.png\" alt=\"\" />\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-lg-12\">\n        <h4 class=\"title\">Profile</h4>\n        <ul class=\"breadcrumb-list\">\n          <li>\n            <a href=\"/\"> <i class=\"fas fa-home\"></i> Home </a>\n          </li>\n          <li>\n            <span><i class=\"fas fa-chevron-right\"></i> </span>\n          </li>\n          <li><a routerLink=\"/profile\">Profile</a></li>\n        </ul>\n      </div>\n    </div>\n  </div>\n</section>\n<form [formGroup]=\"profileForm\" (ngSubmit)=\"createProfile()\">\n  <section class=\"awards-area\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-lg-4 \">\n          <div class=\"single-awards\">\n            <div class=\"content\">\n              <img src=\"assets/images/feature/payout.png\" alt=\"\" />\n              <!-- <a href=\"#\" class=\"mybtn2\">Change Picture</a> -->\n              <input formControlName=\"avatar\" type=\"file\" class=\"mybtn2\" />\n              <div *ngIf=\"submitted && profileForm.controls.avatar.errors\" class=\"alert alert-danger\">\n                <div *ngIf=\"profileForm.controls.avatar.errors.required\">Please Select Avater</div>\n              </div>\n            </div>\n          </div>\n        </div>\n        <div class=\"col-lg 6 col-md-offset-2 profile\">\n          <div class=\"profile-form-wrapper\">\n            <div class=\"profile-box\">\n\n              <div class=\"form-group mb-3\">\n                <label for=\"gender\">Gender </label>\n                <select formControlName=\"gender\" class=\"form-control\" id=\"gender\">\n                  <option selected>Select Gender</option>\n                  <option value=\"Male\">Male</option>\n                  <option value=\"Female\">Female</option>\n                </select>\n                <div *ngIf=\"submitted && profileForm.controls.gender.errors\" class=\"alert alert-danger\">\n                  <div *ngIf=\"profileForm.controls.gender.errors.required\">Select Gender</div>\n                </div>\n              </div>\n              <div class=\"form-group mb-3\">\n                <!-- Label -->\n                <label for=\"address\"> Address </label>\n                <!-- Input -->\n                <input type=\"text\" class=\"form-control\" formControlName=\"address\" id=\"address\" placeholder=\"Address\" />\n                <div *ngIf=\"submitted && profileForm.controls.address.errors\" class=\"alert alert-danger\">\n                  <div *ngIf=\"profileForm.controls.address.errors.required\">Please Enter Address</div>\n                </div>\n              </div>\n              <div class=\"form-group mb-3\">\n                <!-- Label -->\n                <label for=\"city\"> City </label>\n                <!-- Input -->\n                <input type=\"text\" formControlName=\"city\" class=\"form-control\" id=\"city\" placeholder=\"City\" />\n                <!-- Label -->\n                <div *ngIf=\"submitted && profileForm.controls.city.errors\" class=\"alert alert-danger\">\n                  <div *ngIf=\"profileForm.controls.city.errors.required\">Your City is required</div>\n                </div>\n              </div>\n              <div class=\"form-group mb-3\">\n                <label for=\"state\"> State </label>\n                <!-- Input -->\n                <input type=\"text\" class=\"form-control\" formControlName=\"state\" id=\"state\" placeholder=\"State\" />\n                <div *ngIf=\"submitted && profileForm.controls.state.errors\" class=\"alert alert-danger\">\n                  <div *ngIf=\"profileForm.controls.state.errors.required\">State is required</div>\n                </div>\n              </div>\n              <div class=\"form-group mb-3\">\n                <!-- Label -->\n                <label for=\"post_code\"> Postal Code </label>\n                <input type=\"text\" class=\"form-control\" formControlName=\"post_code\" id=\"post_code\"\n                  placeholder=\"Postal Code\" />\n                <div *ngIf=\"submitted && profileForm.controls.post_code.errors\" class=\"alert alert-danger\">\n                  <div *ngIf=\"profileForm.controls.post_code.errors.required\">Post Code is required</div>\n                </div>\n              </div>\n\n              <div class=\"form-group mb-3\">\n                <label for=\"facebook\"> Facebook </label>\n                <!-- Input -->\n                <input type=\"url\" class=\"form-control\" formControlName=\"facebook\" id=\"facebook\"\n                  placeholder=\"facebook\" />\n                <div *ngIf=\"submitted && profileForm.controls.facebook.errors\" class=\"alert alert-danger\">\n                  <div *ngIf=\"profileForm.controls.facebook.errors.required\">Please Enter Facebook Link</div>\n                </div>\n              </div>\n              <div class=\"form-group mb-3\">\n                <label for=\"twiiter\"> Twitter </label>\n                <!-- Input -->\n                <input type=\"url\" class=\"form-control\" formControlName=\"twitter\" id=\"twiiter\" placeholder=\"twiiter\" />\n                <div *ngIf=\"submitted && profileForm.controls.twitter.errors\" class=\"alert alert-danger\">\n                  <div *ngIf=\"profileForm.controls.twitter.errors.required\">Please Enter Twitter Link</div>\n                </div>\n              </div>\n              <button type=\"submit\" class=\"mybtn1\">Update Profile</button>\n\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</form>\n<app-footer></app-footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>\n");

/***/ }),

/***/ "./src/app/account/account.component.css":
/*!***********************************************!*\
  !*** ./src/app/account/account.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FjY291bnQvYWNjb3VudC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/account/account.component.ts":
/*!**********************************************!*\
  !*** ./src/app/account/account.component.ts ***!
  \**********************************************/
/*! exports provided: AccountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountComponent", function() { return AccountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_api_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/api-services.service */ "./src/app/service/api-services.service.ts");
/* harmony import */ var _service_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../service/utility.service */ "./src/app/service/utility.service.ts");




let AccountComponent = class AccountComponent {
    constructor(api, util) {
        this.api = api;
        this.util = util;
    }
    ngOnInit() {
    }
    getTickets() {
        this.api.getTickets().then((result) => {
            this.Tickets = result.data;
        }).catch(err => {
            console.log(err);
        });
    }
};
AccountComponent.ctorParameters = () => [
    { type: _service_api_services_service__WEBPACK_IMPORTED_MODULE_2__["ApiServicesService"] },
    { type: _service_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] }
];
AccountComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-account',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./account.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/account/account.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./account.component.css */ "./src/app/account/account.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_api_services_service__WEBPACK_IMPORTED_MODULE_2__["ApiServicesService"], _service_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
], AccountComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _partial_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./partial/login/login.component */ "./src/app/partial/login/login.component.ts");
/* harmony import */ var _partial_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./partial/signup/signup.component */ "./src/app/partial/signup/signup.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _mai_guard_guardian_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mai-guard/guardian.guard */ "./src/app/mai-guard/guardian.guard.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/faq/faq.component */ "./src/app/pages/faq/faq.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_lottery_lottery_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/lottery/lottery.component */ "./src/app/pages/lottery/lottery.component.ts");
/* harmony import */ var _pages_competition_competition_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/competition/competition.component */ "./src/app/pages/competition/competition.component.ts");
/* harmony import */ var _users_logout_logout_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./users/logout/logout.component */ "./src/app/users/logout/logout.component.ts");
/* harmony import */ var _transactions_new_transactions_new_transactions_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./transactions/new-transactions/new-transactions.component */ "./src/app/transactions/new-transactions/new-transactions.component.ts");
/* harmony import */ var _pages_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pages/how-it-works/how-it-works.component */ "./src/app/pages/how-it-works/how-it-works.component.ts");
/* harmony import */ var _pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./pages/terms-conditions/terms-conditions.component */ "./src/app/pages/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var _pages_terms_of_services_terms_of_services_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./pages/terms-of-services/terms-of-services.component */ "./src/app/pages/terms-of-services/terms-of-services.component.ts");
/* harmony import */ var _pages_winners_winners_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./pages/winners/winners.component */ "./src/app/pages/winners/winners.component.ts");
/* harmony import */ var _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./users/profile/profile.component */ "./src/app/users/profile/profile.component.ts");
/* harmony import */ var _users_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./users/forgot-password/forgot-password.component */ "./src/app/users/forgot-password/forgot-password.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");



// components





















const routes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"], pathMatch: 'full' },
    { path: 'home', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_8__["HomeComponent"] },
    { path: 'about-us', component: _pages_about_about_component__WEBPACK_IMPORTED_MODULE_10__["AboutComponent"] },
    { path: 'how-it-works', component: _pages_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_17__["HowItWorksComponent"] },
    { path: 'privacy-policy', component: _pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_18__["TermsConditionsComponent"] },
    { path: 'winners', component: _pages_winners_winners_component__WEBPACK_IMPORTED_MODULE_20__["WinnersComponent"] },
    { path: 'terms-services', component: _pages_terms_of_services_terms_of_services_component__WEBPACK_IMPORTED_MODULE_19__["TermsOfServicesComponent"] },
    { path: 'faq', component: _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_11__["FaqComponent"] },
    { path: 'contact', component: _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_12__["ContactComponent"] },
    { path: 'lottery/:id', component: _pages_lottery_lottery_component__WEBPACK_IMPORTED_MODULE_13__["LotteryComponent"] },
    { path: 'cart', component: _cart_cart_component__WEBPACK_IMPORTED_MODULE_23__["CartComponent"], canActivate: [_mai_guard_guardian_guard__WEBPACK_IMPORTED_MODULE_7__["GuardianGuard"]] },
    { path: 'competitions', component: _pages_competition_competition_component__WEBPACK_IMPORTED_MODULE_14__["CompetitionComponent"] },
    { path: 'my-account', component: _account_account_component__WEBPACK_IMPORTED_MODULE_3__["AccountComponent"], canActivate: [_mai_guard_guardian_guard__WEBPACK_IMPORTED_MODULE_7__["GuardianGuard"]] },
    { path: 'wallet', component: _transactions_new_transactions_new_transactions_component__WEBPACK_IMPORTED_MODULE_16__["NewTransactionsComponent"], canActivate: [_mai_guard_guardian_guard__WEBPACK_IMPORTED_MODULE_7__["GuardianGuard"]] },
    { path: 'profile', component: _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_21__["ProfileComponent"], canActivate: [_mai_guard_guardian_guard__WEBPACK_IMPORTED_MODULE_7__["GuardianGuard"]] },
    { path: 'login', component: _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"], children: [{ path: '', component: _partial_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] }] },
    { path: 'xlogin', component: _partial_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'register', component: _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"], children: [{ path: '', component: _partial_signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"] }] },
    { path: 'logout', component: _users_logout_logout_component__WEBPACK_IMPORTED_MODULE_15__["LogoutComponent"] },
    { path: 'forgot-password', component: _users_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_22__["ForgotPasswordComponent"] },
    { path: '**', component: _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_9__["NotFoundComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { useHash: true })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _service_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./service/utility.service */ "./src/app/service/utility.service.ts");




let AppComponent = class AppComponent {
    constructor(swPush, swUpdate, util) {
        this.swPush = swPush;
        this.swUpdate = swUpdate;
        this.util = util;
        this.VAPID_PUBLIC_KEY = 'BLBx-hf2WrL2qEa0qKb-aCJbcxEvyn62GDTyyP9KTS5K7ZL0K7TfmOKSPqp8vQF0DaG8hpSBknz_x3qf5F4iEFo';
    }
    ngOnInit() {
        // this.checkNetwork();
        // window.addEventListener('online', this.checkNetwork);
        // window.addEventListener('offline', this.checkNetwork);
        // this.subToPush();
        this.checkUpdate();
    }
    checkNetwork() {
        if (navigator.onLine) {
            //(document.querySelector('body') as any).style = '';
            this.util.successToast('Yo!, It Seems You Are Connected');
        }
        else {
            // (document.querySelector('body') as any).style = 'filter:grayscale(1)';
            this.util.warningToast('Yo! It Seems You Have Lost Connection, Check Your Network');
        }
    }
    subToPush() {
        this.swPush.requestSubscription({
            serverPublicKey: this.VAPID_PUBLIC_KEY
        }).then(sub => {
            console.log(sub);
            const message = sub.toJSON();
            this.util.successToast(`${message}`);
        }).catch(err => {
            console.error('Could not subscribe to notifications', err);
        });
    }
    checkUpdate() {
        this.swUpdate.available.subscribe(update => {
            this.util.successToast('Update Available');
            window.location.reload();
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwPush"] },
    { type: _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"] },
    { type: _service_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwPush"], _angular_service_worker__WEBPACK_IMPORTED_MODULE_2__["SwUpdate"], _service_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var angular4_paystack__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular4-paystack */ "./node_modules/angular4-paystack/__ivy_ngcc__/fesm2015/angular4-paystack.js");
/* harmony import */ var _mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./mai-guard/aboki.guard */ "./src/app/mai-guard/aboki.guard.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/service-worker */ "./node_modules/@angular/service-worker/__ivy_ngcc__/fesm2015/service-worker.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _partial_header_header_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./partial/header/header.component */ "./src/app/partial/header/header.component.ts");
/* harmony import */ var _partial_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./partial/footer/footer.component */ "./src/app/partial/footer/footer.component.ts");
/* harmony import */ var _partial_login_login_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./partial/login/login.component */ "./src/app/partial/login/login.component.ts");
/* harmony import */ var _partial_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./partial/signup/signup.component */ "./src/app/partial/signup/signup.component.ts");
/* harmony import */ var _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./users/profile/profile.component */ "./src/app/users/profile/profile.component.ts");
/* harmony import */ var _transactions_all_transactions_all_transactions_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./transactions/all-transactions/all-transactions.component */ "./src/app/transactions/all-transactions/all-transactions.component.ts");
/* harmony import */ var _transactions_new_transactions_new_transactions_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./transactions/new-transactions/new-transactions.component */ "./src/app/transactions/new-transactions/new-transactions.component.ts");
/* harmony import */ var _transactions_transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./transactions/transaction-details/transaction-details.component */ "./src/app/transactions/transaction-details/transaction-details.component.ts");
/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./users/users.component */ "./src/app/users/users.component.ts");
/* harmony import */ var _users_logout_logout_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./users/logout/logout.component */ "./src/app/users/logout/logout.component.ts");
/* harmony import */ var _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./pages/not-found/not-found.component */ "./src/app/pages/not-found/not-found.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_about_about_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/about/about.component */ "./src/app/pages/about/about.component.ts");
/* harmony import */ var _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./pages/contact/contact.component */ "./src/app/pages/contact/contact.component.ts");
/* harmony import */ var _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./pages/faq/faq.component */ "./src/app/pages/faq/faq.component.ts");
/* harmony import */ var _pages_competition_competition_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./pages/competition/competition.component */ "./src/app/pages/competition/competition.component.ts");
/* harmony import */ var _pages_lottery_lottery_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./pages/lottery/lottery.component */ "./src/app/pages/lottery/lottery.component.ts");
/* harmony import */ var _account_account_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./account/account.component */ "./src/app/account/account.component.ts");
/* harmony import */ var _cart_cart_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./cart/cart.component */ "./src/app/cart/cart.component.ts");
/* harmony import */ var _pages_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ./pages/how-it-works/how-it-works.component */ "./src/app/pages/how-it-works/how-it-works.component.ts");
/* harmony import */ var _pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ./pages/terms-conditions/terms-conditions.component */ "./src/app/pages/terms-conditions/terms-conditions.component.ts");
/* harmony import */ var _pages_terms_of_services_terms_of_services_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ./pages/terms-of-services/terms-of-services.component */ "./src/app/pages/terms-of-services/terms-of-services.component.ts");
/* harmony import */ var _pages_winners_winners_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! ./pages/winners/winners.component */ "./src/app/pages/winners/winners.component.ts");
/* harmony import */ var _users_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! ./users/forgot-password/forgot-password.component */ "./src/app/users/forgot-password/forgot-password.component.ts");



// Import library module











// Component Below
























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"],
            _partial_header_header_component__WEBPACK_IMPORTED_MODULE_14__["HeaderComponent"],
            _partial_footer_footer_component__WEBPACK_IMPORTED_MODULE_15__["FooterComponent"],
            _partial_login_login_component__WEBPACK_IMPORTED_MODULE_16__["LoginComponent"],
            _partial_signup_signup_component__WEBPACK_IMPORTED_MODULE_17__["SignupComponent"],
            _users_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"],
            _transactions_all_transactions_all_transactions_component__WEBPACK_IMPORTED_MODULE_19__["AllTransactionsComponent"],
            _transactions_new_transactions_new_transactions_component__WEBPACK_IMPORTED_MODULE_20__["NewTransactionsComponent"],
            _transactions_transaction_details_transaction_details_component__WEBPACK_IMPORTED_MODULE_21__["TransactionDetailsComponent"],
            _users_users_component__WEBPACK_IMPORTED_MODULE_22__["UsersComponent"],
            _users_logout_logout_component__WEBPACK_IMPORTED_MODULE_23__["LogoutComponent"],
            _pages_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_24__["NotFoundComponent"],
            _pages_home_home_component__WEBPACK_IMPORTED_MODULE_25__["HomeComponent"],
            _pages_about_about_component__WEBPACK_IMPORTED_MODULE_26__["AboutComponent"],
            _pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_27__["ContactComponent"],
            _pages_faq_faq_component__WEBPACK_IMPORTED_MODULE_28__["FaqComponent"],
            _pages_competition_competition_component__WEBPACK_IMPORTED_MODULE_29__["CompetitionComponent"],
            _pages_lottery_lottery_component__WEBPACK_IMPORTED_MODULE_30__["LotteryComponent"],
            _account_account_component__WEBPACK_IMPORTED_MODULE_31__["AccountComponent"],
            _cart_cart_component__WEBPACK_IMPORTED_MODULE_32__["CartComponent"],
            _pages_how_it_works_how_it_works_component__WEBPACK_IMPORTED_MODULE_33__["HowItWorksComponent"],
            _pages_terms_conditions_terms_conditions_component__WEBPACK_IMPORTED_MODULE_34__["TermsConditionsComponent"],
            _pages_terms_of_services_terms_of_services_component__WEBPACK_IMPORTED_MODULE_35__["TermsOfServicesComponent"],
            _pages_winners_winners_component__WEBPACK_IMPORTED_MODULE_36__["WinnersComponent"],
            _users_forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_37__["ForgotPasswordComponent"]
        ],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_10__["AppRoutingModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"],
            angular4_paystack__WEBPACK_IMPORTED_MODULE_6__["Angular4PaystackModule"].forRoot('pk_test_62e65601e9e5df85272c1585f6a67479ded1eb17'),
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot(), _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
            _angular_service_worker__WEBPACK_IMPORTED_MODULE_11__["ServiceWorkerModule"].register('ngsw-worker.js', { enabled: _environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].production })],
        providers: [_mai_guard_aboki_guard__WEBPACK_IMPORTED_MODULE_7__["AbokiGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_13__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/cart/cart.component.css":
/*!*****************************************!*\
  !*** ./src/app/cart/cart.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NhcnQvY2FydC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/cart/cart.component.ts":
/*!****************************************!*\
  !*** ./src/app/cart/cart.component.ts ***!
  \****************************************/
/*! exports provided: CartComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CartComponent", function() { return CartComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let CartComponent = class CartComponent {
    constructor() { }
    ngOnInit() {
    }
};
CartComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-cart',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./cart.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/cart/cart.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./cart.component.css */ "./src/app/cart/cart.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], CartComponent);



/***/ }),

/***/ "./src/app/mai-guard/aboki.guard.ts":
/*!******************************************!*\
  !*** ./src/app/mai-guard/aboki.guard.ts ***!
  \******************************************/
/*! exports provided: AbokiGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AbokiGuard", function() { return AbokiGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let AbokiGuard = class AbokiGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (localStorage.getItem("token") != null)
            return true;
        this.router.navigate(["/login"]);
        return false;
    }
};
AbokiGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AbokiGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: "root"
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], AbokiGuard);



/***/ }),

/***/ "./src/app/mai-guard/guardian.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/mai-guard/guardian.guard.ts ***!
  \*********************************************/
/*! exports provided: GuardianGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardianGuard", function() { return GuardianGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



let GuardianGuard = class GuardianGuard {
    constructor(router) {
        this.router = router;
    }
    canActivate(next, state) {
        if (localStorage.getItem("token") != null)
            return true;
        this.router.navigate(["/home"]);
        return false;
    }
};
GuardianGuard.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
GuardianGuard = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
], GuardianGuard);



/***/ }),

/***/ "./src/app/pages/about/about.component.css":
/*!*************************************************!*\
  !*** ./src/app/pages/about/about.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2Fib3V0L2Fib3V0LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/about/about.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/about/about.component.ts ***!
  \************************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AboutComponent = class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
};
AboutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-about',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./about.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/about/about.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./about.component.css */ "./src/app/pages/about/about.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AboutComponent);



/***/ }),

/***/ "./src/app/pages/competition/competition.component.css":
/*!*************************************************************!*\
  !*** ./src/app/pages/competition/competition.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbXBldGl0aW9uL2NvbXBldGl0aW9uLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/competition/competition.component.ts":
/*!************************************************************!*\
  !*** ./src/app/pages/competition/competition.component.ts ***!
  \************************************************************/
/*! exports provided: CompetitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompetitionComponent", function() { return CompetitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/utility.service */ "./src/app/service/utility.service.ts");
/* harmony import */ var src_app_service_api_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api-services.service */ "./src/app/service/api-services.service.ts");




let CompetitionComponent = class CompetitionComponent {
    constructor(util, api) {
        this.util = util;
        this.api = api;
    }
    ngOnInit() {
        this.loadGames();
    }
    loadGames() {
        this.util.showLoader();
        this.api.getAllGames().then((results) => {
            this.util.hideLoader();
            console.log(results.competitions.data);
            this.Games = results.competitions.data;
        }).catch((err) => {
            this.util.hideLoader();
            this.util.errorToast('Error Loading Games!');
            console.log(err);
        });
    }
};
CompetitionComponent.ctorParameters = () => [
    { type: src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"] },
    { type: src_app_service_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"] }
];
CompetitionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-competition',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./competition.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/competition/competition.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./competition.component.css */ "./src/app/pages/competition/competition.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"], src_app_service_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"]])
], CompetitionComponent);



/***/ }),

/***/ "./src/app/pages/contact/contact.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/contact/contact.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/contact/contact.component.ts ***!
  \****************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let ContactComponent = class ContactComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.loading = false;
        this.contactForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            message: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(8)]],
        });
    }
    ngOnInit() {
    }
    sendMessage() {
        this.submitted = true;
        if (this.contactForm.invalid) {
            return;
        }
        this.loading = true;
    }
};
ContactComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/contact/contact.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact.component.css */ "./src/app/pages/contact/contact.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], ContactComponent);



/***/ }),

/***/ "./src/app/pages/faq/faq.component.css":
/*!*********************************************!*\
  !*** ./src/app/pages/faq/faq.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2ZhcS9mYXEuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/faq/faq.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/faq/faq.component.ts ***!
  \********************************************/
/*! exports provided: FaqComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqComponent", function() { return FaqComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FaqComponent = class FaqComponent {
    constructor() { }
    ngOnInit() {
    }
};
FaqComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-faq',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./faq.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/faq/faq.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./faq.component.css */ "./src/app/pages/faq/faq.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FaqComponent);



/***/ }),

/***/ "./src/app/pages/home/home.component.css":
/*!***********************************************!*\
  !*** ./src/app/pages/home/home.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() {
        this.isLoggedIn = false;
    }
    ngOnInit() {
        if (localStorage.getItem('token')) {
            this.isLoggedIn = true;
        }
    }
};
HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/home/home.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/pages/home/home.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HomeComponent);



/***/ }),

/***/ "./src/app/pages/how-it-works/how-it-works.component.css":
/*!***************************************************************!*\
  !*** ./src/app/pages/how-it-works/how-it-works.component.css ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvdy1pdC13b3Jrcy9ob3ctaXQtd29ya3MuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/how-it-works/how-it-works.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/pages/how-it-works/how-it-works.component.ts ***!
  \**************************************************************/
/*! exports provided: HowItWorksComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HowItWorksComponent", function() { return HowItWorksComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HowItWorksComponent = class HowItWorksComponent {
    constructor() { }
    ngOnInit() {
    }
};
HowItWorksComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-how-it-works',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./how-it-works.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/how-it-works/how-it-works.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./how-it-works.component.css */ "./src/app/pages/how-it-works/how-it-works.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HowItWorksComponent);



/***/ }),

/***/ "./src/app/pages/lottery/lottery.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/lottery/lottery.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2xvdHRlcnkvbG90dGVyeS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/lottery/lottery.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/lottery/lottery.component.ts ***!
  \****************************************************/
/*! exports provided: LotteryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LotteryComponent", function() { return LotteryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/utility.service */ "./src/app/service/utility.service.ts");
/* harmony import */ var src_app_service_api_services_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/api-services.service */ "./src/app/service/api-services.service.ts");





let LotteryComponent = class LotteryComponent {
    constructor(router, route, util, api) {
        this.router = router;
        this.route = route;
        this.util = util;
        this.api = api;
    }
    ngOnInit() {
        this.gameDetails(this.route.snapshot.params.id);
    }
    gameDetails(id) {
        this.util.showLoader();
        this.api.getGame(id).then((res) => {
            this.util.hideLoader();
            console.log('getGame', res);
            this.Game = res.data;
        }).catch(err => {
            this.util.hideLoader();
            this.util.errorToast('Error Loading This Game!');
            console.log(err);
        });
    }
};
LotteryComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] },
    { type: src_app_service_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"] }
];
LotteryComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-lottery',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./lottery.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/lottery/lottery.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./lottery.component.css */ "./src/app/pages/lottery/lottery.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"], src_app_service_api_services_service__WEBPACK_IMPORTED_MODULE_4__["ApiServicesService"]])
], LotteryComponent);



/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.css":
/*!*********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25vdC1mb3VuZC9ub3QtZm91bmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/pages/not-found/not-found.component.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/not-found/not-found.component.ts ***!
  \********************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let NotFoundComponent = class NotFoundComponent {
    constructor() { }
    ngOnInit() {
    }
};
NotFoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-not-found',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./not-found.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/not-found/not-found.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./not-found.component.css */ "./src/app/pages/not-found/not-found.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], NotFoundComponent);



/***/ }),

/***/ "./src/app/pages/terms-conditions/terms-conditions.component.css":
/*!***********************************************************************!*\
  !*** ./src/app/pages/terms-conditions/terms-conditions.component.css ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1zLWNvbmRpdGlvbnMvdGVybXMtY29uZGl0aW9ucy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/terms-conditions/terms-conditions.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/pages/terms-conditions/terms-conditions.component.ts ***!
  \**********************************************************************/
/*! exports provided: TermsConditionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsConditionsComponent", function() { return TermsConditionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let TermsConditionsComponent = class TermsConditionsComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.loading = false;
        this.searchForm = this.formBuilder.group({
            q: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ngOnInit() {
    }
    sendMessage() {
        this.submitted = true;
        if (this.searchForm.invalid) {
            return;
        }
        this.loading = true;
    }
};
TermsConditionsComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
TermsConditionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms-conditions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./terms-conditions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms-conditions/terms-conditions.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./terms-conditions.component.css */ "./src/app/pages/terms-conditions/terms-conditions.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], TermsConditionsComponent);



/***/ }),

/***/ "./src/app/pages/terms-of-services/terms-of-services.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/pages/terms-of-services/terms-of-services.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3Rlcm1zLW9mLXNlcnZpY2VzL3Rlcm1zLW9mLXNlcnZpY2VzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/pages/terms-of-services/terms-of-services.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/pages/terms-of-services/terms-of-services.component.ts ***!
  \************************************************************************/
/*! exports provided: TermsOfServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TermsOfServicesComponent", function() { return TermsOfServicesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let TermsOfServicesComponent = class TermsOfServicesComponent {
    constructor(formBuilder) {
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.loading = false;
        this.searchForm = this.formBuilder.group({
            q: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ngOnInit() {
    }
    sendMessage() {
        this.submitted = true;
        if (this.searchForm.invalid) {
            return;
        }
        this.loading = true;
    }
};
TermsOfServicesComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
];
TermsOfServicesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-terms-of-services',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./terms-of-services.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/terms-of-services/terms-of-services.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./terms-of-services.component.css */ "./src/app/pages/terms-of-services/terms-of-services.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]])
], TermsOfServicesComponent);



/***/ }),

/***/ "./src/app/pages/winners/winners.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/winners/winners.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL3dpbm5lcnMvd2lubmVycy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/pages/winners/winners.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/winners/winners.component.ts ***!
  \****************************************************/
/*! exports provided: WinnersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WinnersComponent", function() { return WinnersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let WinnersComponent = class WinnersComponent {
    constructor() { }
    ngOnInit() {
    }
};
WinnersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-winners',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./winners.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/winners/winners.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./winners.component.css */ "./src/app/pages/winners/winners.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], WinnersComponent);



/***/ }),

/***/ "./src/app/partial/footer/footer.component.css":
/*!*****************************************************!*\
  !*** ./src/app/partial/footer/footer.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWwvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/partial/footer/footer.component.ts":
/*!****************************************************!*\
  !*** ./src/app/partial/footer/footer.component.ts ***!
  \****************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() {
        this.isLoggedIn = false;
    }
    ngOnInit() {
        if (localStorage.getItem('token')) {
            this.isLoggedIn = true;
        }
    }
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partial/footer/footer.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.css */ "./src/app/partial/footer/footer.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], FooterComponent);



/***/ }),

/***/ "./src/app/partial/header/header.component.css":
/*!*****************************************************!*\
  !*** ./src/app/partial/header/header.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWwvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/partial/header/header.component.ts":
/*!****************************************************!*\
  !*** ./src/app/partial/header/header.component.ts ***!
  \****************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let HeaderComponent = class HeaderComponent {
    constructor() {
        this.isLoggedIn = false;
    }
    ngOnInit() {
        if (localStorage.getItem('token') && localStorage.getItem('user')) {
            this.isLoggedIn = true;
            this.user = JSON.parse(localStorage.getItem('user'));
        }
    }
};
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-header',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partial/header/header.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./header.component.css */ "./src/app/partial/header/header.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], HeaderComponent);



/***/ }),

/***/ "./src/app/partial/login/login.component.css":
/*!***************************************************!*\
  !*** ./src/app/partial/login/login.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWwvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/partial/login/login.component.ts":
/*!**************************************************!*\
  !*** ./src/app/partial/login/login.component.ts ***!
  \**************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_auth_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth-services.service */ "./src/app/service/auth-services.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/utility.service */ "./src/app/service/utility.service.ts");






let LoginComponent = class LoginComponent {
    constructor(api, util, router, formBuilder) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
        });
    }
    ngOnInit() { console.log('login page'); }
    login() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        this.util.showLoader();
        this.api.postLogin(this.loginForm.value).then((result) => {
            // console.log(result);
            this.util.hideLoader();
            localStorage.setItem('token', result.access_token.token);
            if (localStorage.getItem('token')) {
                this.util.successToast('Your Login Was Successful');
                localStorage.setItem('user', JSON.stringify(result.user));
                this.router.navigate(['/my-account']);
            }
            else {
                localStorage.setItem('token', result.access_token.token);
            }
        }, (err) => {
            this.util.hideLoader();
            this.util.errorToast('Invalid Login Credentials');
            console.log(err);
        });
    }
};
LoginComponent.ctorParameters = () => [
    { type: _service_auth_services_service__WEBPACK_IMPORTED_MODULE_2__["AuthServicesService"] },
    { type: src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partial/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/partial/login/login.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_auth_services_service__WEBPACK_IMPORTED_MODULE_2__["AuthServicesService"], src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/partial/signup/signup.component.css":
/*!*****************************************************!*\
  !*** ./src/app/partial/signup/signup.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhcnRpYWwvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/partial/signup/signup.component.ts":
/*!****************************************************!*\
  !*** ./src/app/partial/signup/signup.component.ts ***!
  \****************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_auth_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth-services.service */ "./src/app/service/auth-services.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/utility.service */ "./src/app/service/utility.service.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







let SignupComponent = class SignupComponent {
    constructor(api, util, router, spinner, formBuilder) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.spinner = spinner;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.loading = false;
        this.registerForm = this.formBuilder.group({
            first_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            last_name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            phone: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(11)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    ngOnInit() {
    }
    signup() {
        this.submitted = true;
        if (this.registerForm.invalid) {
            return;
        }
        this.spinner.show();
        this.api.postSignup(this.registerForm.value).then((result) => {
            //sign user in automatically
            localStorage.setItem('token', result.access_token.token);
            if (localStorage.getItem('token')) {
                this.util.successToast('Your Registration Was Successful');
                localStorage.setItem('user', JSON.stringify(result.user));
                this.router.navigate(['/profile']); // navigate user to the profile creation page
            }
            else {
                localStorage.setItem('token', result.access_token.token);
                localStorage.setItem('user', JSON.stringify(result.user));
                this.router.navigate(['/profile']);
            }
            this.spinner.hide();
            this.registerForm = this.formBuilder.group({
                email: null,
                password: null,
                first_name: null,
                last_name: null,
                phone: null
            });
        }, (err) => {
            this.spinner.hide();
            this.util.errorToast(err.error.error);
            console.log(err);
        });
    }
};
SignupComponent.ctorParameters = () => [
    { type: _service_auth_services_service__WEBPACK_IMPORTED_MODULE_2__["AuthServicesService"] },
    { type: src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
SignupComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-signup',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./signup.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/partial/signup/signup.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./signup.component.css */ "./src/app/partial/signup/signup.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_auth_services_service__WEBPACK_IMPORTED_MODULE_2__["AuthServicesService"], src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerService"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], SignupComponent);



/***/ }),

/***/ "./src/app/service/api-services.service.ts":
/*!*************************************************!*\
  !*** ./src/app/service/api-services.service.ts ***!
  \*************************************************/
/*! exports provided: ApiServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiServicesService", function() { return ApiServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



let ApiServicesService = class ApiServicesService {
    constructor(http) {
        this.http = http;
        this.API_ENDPOINT = 'https://app.luckydraws.ng/';
        this.url = this.API_ENDPOINT;
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token');
        }
    }
    /**
     * this method is for getting users login details
     */
    getUser(id) {
        return this.getRequest('auth/user-detail/' + id);
    }
    /**
    * Logout of Account
    */
    logout() {
        return this.postRequest('logout', {});
    }
    postProfile(payload) {
        return this.postRequest('account/create_profile', payload);
    }
    /**
     *
     * @param payload any this the transactions payload
     * @returns Promise
     */
    postGenerateInvoice(payload) {
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
    getTransaction(slug) {
        return this.getRequest('account/transactions' + slug);
    }
    /**
     *
     * @param slug the transaction reference/id
     */
    getVerifyTransaction(slug) {
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
    getATicket(id) {
        return this.getRequest('account/tickets' + id);
    }
    getWalletBalance() {
        return this.getRequest('account/wallet');
    }
    getAllGames() {
        return this.getRequest('competitions/');
    }
    getGame(id) {
        return this.getRequest('competition-details/' + id);
    }
    /**
       * This Method handles get request
       * @param endPoint  string this is the called endpoint
       */
    getRequest(endPoint = '') {
        const headers = this.getHeaders();
        return new Promise((resolve, reject) => {
            this.http.get(this.url + endPoint, {
                headers
            }).subscribe(data => {
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
    getHeaders() {
        this.token = localStorage.getItem('token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + this.token);
        return headers;
    }
};
ApiServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ApiServicesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], ApiServicesService);



/***/ }),

/***/ "./src/app/service/auth-services.service.ts":
/*!**************************************************!*\
  !*** ./src/app/service/auth-services.service.ts ***!
  \**************************************************/
/*! exports provided: AuthServicesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServicesService", function() { return AuthServicesService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



// import { Config } from '../config/config';
let AuthServicesService = class AuthServicesService {
    constructor(http) {
        this.http = http;
        this.API_ENDPOINT = 'https://app.luckydraws.ng/';
        this.url = this.API_ENDPOINT;
        if (localStorage.getItem('token')) {
            this.token = localStorage.getItem('token');
        }
    }
    getUser(id) {
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
    postLogin(payload) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
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
    postResetPassword(payload) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return new Promise((resolve, reject) => {
            this.http.post(this.url + 'reset-password', JSON.stringify(payload), {
                headers
            }).subscribe(responseData => {
                resolve(responseData);
            }, err => {
                reject(err);
            });
        });
    }
    /**
     * This method handles users login posting
     * @param payload any
     */
    postSignup(payload) {
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set('Content-Type', 'application/json');
        return new Promise((resolve, reject) => {
            this.http.post(this.url + 'register', JSON.stringify(payload), {
                headers
            }).subscribe(responseData => {
                resolve(responseData);
            }, err => {
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
            }, err => {
                reject(err);
            });
        });
    }
    getHeaders() {
        this.token = localStorage.getItem('token');
        const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set('Authorization', 'Bearer ' + this.token);
        return headers;
    }
};
AuthServicesService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
AuthServicesService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], AuthServicesService);



/***/ }),

/***/ "./src/app/service/utility.service.ts":
/*!********************************************!*\
  !*** ./src/app/service/utility.service.ts ***!
  \********************************************/
/*! exports provided: UtilityService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/__ivy_ngcc__/fesm2015/ngx-spinner.js");




let UtilityService = class UtilityService {
    constructor(toastr, spinner) {
        this.toastr = toastr;
        this.spinner = spinner;
    }
    showLoader() {
        this.spinner.show();
    }
    hideLoader() {
        this.spinner.hide();
    }
    successToast(message) {
        this.toastr.success(message, 'Successful');
    }
    errorToast(errorMessage) {
        this.toastr.error(errorMessage, 'Error!');
    }
    warningToast(warningMessage) {
        this.toastr.warning(warningMessage);
    }
    infoToast(warningMessage) {
        this.toastr.info(warningMessage);
    }
    /**
     *
     * @param amount number The amount to be formatted
     * @param decimalCount string the decimal place of the number default to 2 decimal place
     * @param decimal string The decimal symbol to use default to .
     * @param thousands string the thousand maker to use default to ', comma'
     */
    currencyFormat(amount, decimalCount = 2, decimal = ".", thousands = ",") {
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
    formatCurrency(amount) {
        return (amount).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    }
};
UtilityService.ctorParameters = () => [
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"] },
    { type: ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"] }
];
UtilityService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"]])
], UtilityService);



/***/ }),

/***/ "./src/app/transactions/all-transactions/all-transactions.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/transactions/all-transactions/all-transactions.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy9hbGwtdHJhbnNhY3Rpb25zL2FsbC10cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/transactions/all-transactions/all-transactions.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/transactions/all-transactions/all-transactions.component.ts ***!
  \*****************************************************************************/
/*! exports provided: AllTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllTransactionsComponent", function() { return AllTransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AllTransactionsComponent = class AllTransactionsComponent {
    constructor() { }
    ngOnInit() {
    }
};
AllTransactionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-all-transactions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./all-transactions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/all-transactions/all-transactions.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./all-transactions.component.css */ "./src/app/transactions/all-transactions/all-transactions.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], AllTransactionsComponent);



/***/ }),

/***/ "./src/app/transactions/new-transactions/new-transactions.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/transactions/new-transactions/new-transactions.component.css ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy9uZXctdHJhbnNhY3Rpb25zL25ldy10cmFuc2FjdGlvbnMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/transactions/new-transactions/new-transactions.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/transactions/new-transactions/new-transactions.component.ts ***!
  \*****************************************************************************/
/*! exports provided: NewTransactionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTransactionsComponent", function() { return NewTransactionsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_service_api_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/api-services.service */ "./src/app/service/api-services.service.ts");
/* harmony import */ var src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/utility.service */ "./src/app/service/utility.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let NewTransactionsComponent = class NewTransactionsComponent {
    constructor(api, router, util, formBuilder) {
        this.api = api;
        this.router = router;
        this.util = util;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.options = {
            amount: null,
            email: null,
            ref: null
        };
        this.paynow = false;
        this.walletForm = this.formBuilder.group({ amount: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]] });
    }
    ngOnInit() {
        this.getAllTransactions();
        this.getWalletBalance();
        this.usersDetails = JSON.parse(localStorage.getItem('user'));
    }
    getAllTransactions() {
        this.api.getTransactions().then((transactions) => {
            this.Transactions = transactions.data;
        }).catch(err => {
            console.log(err);
        });
    }
    getWalletBalance() {
        this.api.getWalletBalance().then((result) => {
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
        this.api.postGenerateInvoice(this.walletForm.value).then((result) => {
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
        }, (err) => {
            this.util.hideLoader();
            this.util.errorToast('Invalid Login Credentials');
            console.log(err);
        });
    }
    paymentInit() {
        console.log('Payment initialized');
    }
    paymentDone(ref) {
        console.log(ref);
        // confirm payment
        this.api.getVerifyTransaction(ref.reference).then((result) => {
            console.log(result);
            this.util.successToast(result.data);
        }, (err) => {
            this.util.errorToast('Your Transaction Failed');
        });
    }
    paymentCancel() {
        this.util.errorToast('Transaction Canceled');
    }
};
NewTransactionsComponent.ctorParameters = () => [
    { type: src_app_service_api_services_service__WEBPACK_IMPORTED_MODULE_2__["ApiServicesService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
NewTransactionsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-transactions',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-transactions.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/new-transactions/new-transactions.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-transactions.component.css */ "./src/app/transactions/new-transactions/new-transactions.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [src_app_service_api_services_service__WEBPACK_IMPORTED_MODULE_2__["ApiServicesService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]])
], NewTransactionsComponent);



/***/ }),

/***/ "./src/app/transactions/transaction-details/transaction-details.component.css":
/*!************************************************************************************!*\
  !*** ./src/app/transactions/transaction-details/transaction-details.component.css ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3RyYW5zYWN0aW9ucy90cmFuc2FjdGlvbi1kZXRhaWxzL3RyYW5zYWN0aW9uLWRldGFpbHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/transactions/transaction-details/transaction-details.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/transactions/transaction-details/transaction-details.component.ts ***!
  \***********************************************************************************/
/*! exports provided: TransactionDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TransactionDetailsComponent", function() { return TransactionDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let TransactionDetailsComponent = class TransactionDetailsComponent {
    constructor() { }
    ngOnInit() {
    }
};
TransactionDetailsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-transaction-details',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./transaction-details.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/transactions/transaction-details/transaction-details.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./transaction-details.component.css */ "./src/app/transactions/transaction-details/transaction-details.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], TransactionDetailsComponent);



/***/ }),

/***/ "./src/app/users/forgot-password/forgot-password.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/users/forgot-password/forgot-password.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/users/forgot-password/forgot-password.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/users/forgot-password/forgot-password.component.ts ***!
  \********************************************************************/
/*! exports provided: ForgotPasswordComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function() { return ForgotPasswordComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _service_auth_services_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../service/auth-services.service */ "./src/app/service/auth-services.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/service/utility.service */ "./src/app/service/utility.service.ts");






let ForgotPasswordComponent = class ForgotPasswordComponent {
    constructor(api, util, router, formBuilder) {
        this.api = api;
        this.util = util;
        this.router = router;
        this.formBuilder = formBuilder;
        this.submitted = false;
        this.success = false;
        this.passwordForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]]
        });
    }
    ngOnInit() { }
    resetPassword() {
        this.submitted = true;
        if (this.passwordForm.invalid) {
            return;
        }
        this.util.showLoader();
        this.api.postResetPassword(this.passwordForm.value).then((result) => {
            // console.log(result);
            this.util.hideLoader();
            this.util.successToast('Your Password Reset Request Was Successful, An Email has been sent to the provided email address');
        }, (err) => {
            this.util.hideLoader();
            this.util.errorToast('Invalid Credentials');
            console.log(err);
        });
    }
};
ForgotPasswordComponent.ctorParameters = () => [
    { type: _service_auth_services_service__WEBPACK_IMPORTED_MODULE_2__["AuthServicesService"] },
    { type: src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
ForgotPasswordComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-forgot-password',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./forgot-password.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/forgot-password/forgot-password.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./forgot-password.component.css */ "./src/app/users/forgot-password/forgot-password.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_service_auth_services_service__WEBPACK_IMPORTED_MODULE_2__["AuthServicesService"], src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
], ForgotPasswordComponent);



/***/ }),

/***/ "./src/app/users/logout/logout.component.css":
/*!***************************************************!*\
  !*** ./src/app/users/logout/logout.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL2xvZ291dC9sb2dvdXQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/users/logout/logout.component.ts":
/*!**************************************************!*\
  !*** ./src/app/users/logout/logout.component.ts ***!
  \**************************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/utility.service */ "./src/app/service/utility.service.ts");




let LogoutComponent = class LogoutComponent {
    constructor(router, util) {
        this.router = router;
        this.util = util;
    }
    ngOnInit() {
        this.logout();
    }
    logout() {
        this.util.showLoader();
        // console.log(result);
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        if ((localStorage.getItem('token') == null)) {
            this.util.hideLoader();
            this.router.navigate(['/']);
            return true;
        }
        else {
            localStorage.removeItem('user');
            localStorage.removeItem('token');
            this.util.hideLoader();
            this.router.navigate(['/']);
            return true;
        }
        return false;
    }
};
LogoutComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"] }
];
LogoutComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-logout',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./logout.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/logout/logout.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./logout.component.css */ "./src/app/users/logout/logout.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
], LogoutComponent);



/***/ }),

/***/ "./src/app/users/profile/profile.component.css":
/*!*****************************************************!*\
  !*** ./src/app/users/profile/profile.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/users/profile/profile.component.ts":
/*!****************************************************!*\
  !*** ./src/app/users/profile/profile.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var src_app_service_api_services_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/service/api-services.service */ "./src/app/service/api-services.service.ts");
/* harmony import */ var src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/service/utility.service */ "./src/app/service/utility.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






let ProfileComponent = class ProfileComponent {
    constructor(formBuilder, router, api, util) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.api = api;
        this.util = util;
        this.submitted = false;
        this.success = false;
        this.States = [];
        this.Cites = [];
        this.profileForm = this.formBuilder.group({
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(2), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            state: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            post_code: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            avatar: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            facebook: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            twitter: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            city: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
        });
    }
    ngOnInit() {
    }
    createProfile() {
        this.submitted = true;
        if (this.profileForm.invalid) {
            return;
        }
        this.util.showLoader();
        this.api.postProfile(this.profileForm.value).then((result) => {
            console.log(result);
            this.util.hideLoader();
            this.util.successToast('Profile Updated Successfully');
            this.router.navigate(['/wallet']);
            // continue with the updating of users interface and moving to the wallet funding page
        }).catch((err) => {
            this.util.hideLoader();
            this.util.errorToast('Error, Profile Not Updated');
            console.log(err);
        });
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] },
    { type: src_app_service_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"] },
    { type: src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/profile/profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.component.css */ "./src/app/users/profile/profile.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_service_api_services_service__WEBPACK_IMPORTED_MODULE_3__["ApiServicesService"], src_app_service_utility_service__WEBPACK_IMPORTED_MODULE_4__["UtilityService"]])
], ProfileComponent);



/***/ }),

/***/ "./src/app/users/users.component.css":
/*!*******************************************!*\
  !*** ./src/app/users/users.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VzZXJzL3VzZXJzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/users/users.component.ts":
/*!******************************************!*\
  !*** ./src/app/users/users.component.ts ***!
  \******************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let UsersComponent = class UsersComponent {
    constructor() { }
    ngOnInit() {
    }
};
UsersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-users',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./users.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/users/users.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./users.component.css */ "./src/app/users/users.component.css")).default]
    }),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
], UsersComponent);



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/mac/Documents/angular/luckydraws-frontend/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map