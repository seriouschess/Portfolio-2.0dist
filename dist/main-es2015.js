(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<body>\r\n  <!-- <app-nav-menu></app-nav-menu> -->\r\n    <router-outlet></router-outlet>\r\n</body>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1>Counter</h1>\r\n\r\n<p>This is a simple example of an Angular component.</p>\r\n\r\n<p aria-live=\"polite\">Current count: <strong>{{ currentCount }}</strong></p>\r\n\r\n<button class=\"btn btn-primary\" (click)=\"incrementCounter()\">Increment</button>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 id=\"tableLabel\">Weather forecast</h1>\r\n\r\n<p>This component demonstrates fetching data from the server.</p>\r\n\r\n<p *ngIf=\"!forecasts\"><em>Loading...</em></p>\r\n\r\n<table class='table table-striped' aria-labelledby=\"tableLabel\" *ngIf=\"forecasts\">\r\n  <thead>\r\n    <tr>\r\n      <th>Date</th>\r\n      <th>Temp. (C)</th>\r\n      <th>Temp. (F)</th>\r\n      <th>Summary</th>\r\n    </tr>\r\n  </thead>\r\n  <tbody>\r\n    <tr *ngFor=\"let forecast of forecasts\">\r\n      <td>{{ forecast.date }}</td>\r\n      <td>{{ forecast.temperatureC }}</td>\r\n      <td>{{ forecast.temperatureF }}</td>\r\n      <td>{{ forecast.summary }}</td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fish-food/fish-food.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fish-food/fish-food.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img src=\"/assets/fish_food.png\" class=\"fish-food\" [ngStyle]=\"updateStyles()\">\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/fish/fish.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/fish/fish.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<img *ngIf=\"_fish_type == 1\" src=\"/assets/yellow_fish.png\" class=\"fish\" [ngStyle]=\"updateStyles()\">\n<img *ngIf=\"_fish_type == 2\" src=\"/assets/discus_fish.png\" class=\"fish\" [ngStyle]=\"updateStyles()\">\n<img *ngIf=\"_fish_type == 3\" src=\"/assets/angel_fish.png\" class=\"fish\" [ngStyle]=\"updateStyles()\">\n<img *ngIf=\"_fish_type == 4\" src=\"/assets/butterfly_fish.png\" class=\"fish\" [ngStyle]=\"updateStyles()\">\n<img *ngIf=\"_fish_type == 10\" src=\"/assets/angler.png\" class=\"fish\" [ngStyle]=\"updateStyles()\">\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div id=\"SPACE\" class=\"space\">\r\n    <app-sky [sky_height]=\"sky_height\" [sky_width]=\"width\" *ngIf=\"!sky_done\" (imGone)=\"isSkyDone($event)\"></app-sky>\r\n    <app-tank [sky_height]=\"sky_height\"></app-tank>\r\n</div>\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header>\r\n  <nav\r\n    class=\"navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3\"\r\n  >\r\n    <div class=\"container\">\r\n      <a class=\"navbar-brand\" [routerLink]=\"['/']\">PortfolioV2</a>\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\".navbar-collapse\"\r\n        aria-label=\"Toggle navigation\"\r\n        [attr.aria-expanded]=\"isExpanded\"\r\n        (click)=\"toggle()\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n      <div\r\n        class=\"navbar-collapse collapse d-sm-inline-flex flex-sm-row-reverse\"\r\n        [ngClass]=\"{ show: isExpanded }\"\r\n      >\r\n        <ul class=\"navbar-nav flex-grow\">\r\n          <li\r\n            class=\"nav-item\"\r\n            [routerLinkActive]=\"['link-active']\"\r\n            [routerLinkActiveOptions]=\"{ exact: true }\"\r\n          >\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/']\">Home</a>\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/counter']\"\r\n              >Counter</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item\" [routerLinkActive]=\"['link-active']\">\r\n            <a class=\"nav-link text-dark\" [routerLink]=\"['/fetch-data']\"\r\n              >Fetch data</a\r\n            >\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </nav>\r\n</header>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/rain-drop/rain-drop.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/rain-drop/rain-drop.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"rain-drop\" [ngStyle]=\"updateStyles()\"></div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sky/sky.component.html":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sky/sky.component.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"sky\" [ngStyle]=\"updateStyles()\">\n    <div *ngIf=\"sky_height > 300\" class=\"storm-cloud\"></div>\n    <div class=\"water-surface\"></div>\n    <div *ngFor=\"let drop_pos of rain_drop_location_array\">\n        <app-rain-drop [sky_height]=\"sky_height\" [starting_left]=\"drop_pos\"></app-rain-drop>\n    </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/tank/tank.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tank/tank.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"tank\" id=\"TANK\" (click)=\"baitFish($event)\">\n    <!-- portfolio content -->\n    <div class=\"page-top\">begin</div>\n    <div class=\"text-center\">\n        <div>\n            <h1>Brandon Rehayem</h1>\n            <h2>Eager to develop software that brings value to your company.</h2>\n        </div>\n    </div>\n    \n    <div class=\"content-element kelp-one content-block\">\n        <h3>Largest Project - SiteLeaves</h3>\n        <div><p>Now deployed on <button class=\"btn btn-success\" (click)=\"openLink('https://siteleaves.com')\">siteleaves.com</button></p></div>\n        <p>A web application where users are able to log in as admins and build their own website using in app tools. No tech skills are needed on the part of the user. \n            Though originally implemented to allow small companies to maintain their own website over time without a software team,\n          the codebase can be used to allow content creators easier access to site-building. </p><br>\n        <ul>\n          <li><p>Tech: Angular Frontend with ASP.NET Core API and MySQL database</p></li>\n          <li><p>Intended to be an easily acessable website creator for the general public.</p></li>\n          <li><p>Built with modularity and scalability in mind.</p></li>\n        </ul>\n        <p class=\"buffer\"> See the code on Github: <button class=\"btn btn-success\" (click)=\"openLink('https://www.github.com/seriouschess/dynamify')\">here</button></p>\n    </div>\n\n    <div class=\"content-element kelp-two content-block\">\n      <h3>RelayForJustice</h3>\n      <p>Deployed at <button class=\"btn btn-success\" (click)=\"openLink('https://relayforjustice.com/')\">relayforjustice.org</button></p>\n      <div>\n        <img class=\"proj-img\" src=\"assets/relayforjustice.png\">\n      </div>\n      <p class=\"buffer\">A fundraiser project for the organization Legal Aid Chicago where users pledge miles which contribute to a collective goal.</p>\n      <p>This project was made with a team of several people. Role: Created a fully functional backend API with Fluent Validation and authentication protocols.</p>\n      <ul>\n        <li><p>Tech: React Frontend with ASP.NET Core API and MySQL database</p></li>\n        <p> Hosting: AWS, Ubuntu, Linux </p>\n      </ul>\n      <p class=\"buffer\"> See the API code on Github: <button class=\"btn btn-success\" (click)=\"openLink('https://github.com/adion81/RelayForJusticeServer')\">here</button></p>\n    </div>\n\n    <div class=\"content-element kelp-one content-block buffer\">\n      <h3> How I became a full stack developer </h3>\n      <p>I started by researching python and initially took the backend path by developing my first API. \n        Later, I was able to build and deploy a Flask website hosted on a UNIX based Amazon Web Services instance. I learned how to move data from end to end and represent it dynamically on the front end using javascript.\n      Though being self-taught was a beneficial experience, I wanted to be able to certify myself as a web developer and talk about code with others.\n      That's when I decided to enroll in CodingDojo's bootcamp. I graduated from the program, learning how to build websites using 3 different full stacks: Django, ASP.NET Core, \n      and MEAN. I currently specialize in the development and hosting of full stack web applications.</p>\n  \n      <h3 class=\"center\"> I have previously worked with the following technologies: </h3>\n      <p> Languages: C#, JavaScript, TypeScript, Python </p>\n      <p> Frameworks: Angular, ASP.NET Core, NodeJS, Django, Flask, Entity Framework ORM, Mongoose </p>\n      <p> Databases: MySQL, SQLite, MongoDB </p>\n      <p> Hosting: AWS, Ubuntu, Linux, Azure Devops </p>\n      <p>Click anywhere on the water to feed the fish.</p>\n    </div>\n\n    <h1 class=\"text-center\"> Other Projects Created </h1>\n\n    <div class=\"content-element kelp-one content-block buffer\">\n    <h3>Modern Cave People</h3>\n    <div><h3 class=\"buffer\"> Deployed on AWS: <button class=\"btn btn-success\" (click)=\"openLink('http://draw.professionalserver.net/')\">See the Site</button></h3></div>\n    <div>\n        <img class=\"proj-img\" src=\"assets/moderncavepeople.png\">\n        <p class=\"project-description\"> A CRUD application which allows users to create and edit images, then display them using HTML canvas. Drawing tools were created in the project's code.</p>\n    </div>\n      <div class=\"buffer\">\n        <p>Tech: Angular frontend with NodeJS Express API and MongoDB</p>\n        <div><p> See the code on Github <button class=\"btn btn-success\" (click)=\"openLink('https://github.com/seriouschess/ModernCavePeople')\">here</button></p></div>\n      </div>\n    </div>\n\n    <div class=\"content-element kelp-one content-block buffer\">\n      <h3>Air Traffic Noise Tracker - Relativity Capstone Project</h3>\n      <div><h3 class=\"buffer\"> Deployed on Azure: <button class=\"btn btn-success\" (click)=\"openLink('https://airnoisetracker.professionalserver.net/')\">See the Site</button></h3></div>\n      <div>\n        <img class=\"proj-img\" src=\"/assets/airnoisetracker.png\">\n        <p class=\"project-description\"> Search any airport in the world and get information on which direction airplanes will be taking off that day based on the local weather.</p>\n      </div>\n        <div class=\"buffer\">\n          <p>Tech: ASP.NET Core API with Angular, originally deployed from an Azure pipeline.</p>\n          <div><p> See the code on github <button class=\"btn btn-success\" (click)=\"openLink('https://github.com/seriouschess/AirTrafficReporter')\">here</button></p></div>\n        </div>\n    </div>\n\n    <!-- <div class=\"content-element kelp-one content-block buffer\">\n      <h3>Standalone Analytics API</h3>\n      <div>\n          <p class=\"project-description\"> Analytics API which can be used to collect data from any website by linking the CDN in a page's HTML.</p>\n      </div>\n        <div class=\"buffer\">\n          <p>Tech: ASP.NET Core API with MySQL</p>\n          <div><p> See the code on github <button class=\"btn btn-success\" (click)=\"openLink('https://github.com/seriouschess/analytics_microservice')\">here</button></p></div>\n        </div>\n    </div> -->\n\n     <div class=\"content-element kelp-two content-block buffer\">\n       <h3>Psychological Analytics</h3>\n       <div>\n        <img class=\"proj-img\" src=\"/assets/psychana.png\">\n        <p class=\"project-description\">A web application that gives surveys asking personality questions while collecting data on how the users take the survey using javascript events.\n          The information is then plotted on graphs so correlations between categories can be assessed.</p>\n       </div>\n       <p>Tech: Javascript, Django (Python) MVC, SQLite Database</p>\n       <div><p>See the code on github <button class=\"btn btn-success\" (click)=\"openLink('https://github.com/seriouschess/psycological_analytics')\">here</button></p></div>\n     </div>\n\n    <div class=\"content-element kelp-one content-block buffer\">\n       <h3>Hostility Skirmish</h3>\n       <div>\n         <img class=\"proj-img\" src=\"/assets/hostilityskirmish.png\">\n         <p class=\"project-description\"> A multiplayer role playing style game that involves two client side scripts communicating with a shared database. Made with ASP dot net core in C#.\n          This project was made in collaboration with two other developers.</p>\n          <p>Tech: Javascript, Jquery, ASP.NET Core MVC, MySQL Database</p>\n       </div>\n        <p>See the code on Github <button class=\"btn btn-success\" (click)=\"openLink('https://github.com/Vacuda/Hostility_Skirmish')\">here</button></p>\n    </div>\n\n    <div class=\"footer\">\n      <h3 class=\"text-center text-warning\">Contact information</h3>\n      <p class=\"contact-element text-warning\">Linkedin: <a target=\"_blank\" rel=\"noopener noreferrer\" href=\"https://www.linkedin.com/in/brandon-rehayem/\">https://www.linkedin.com/in/brandon-rehayem/</a></p> \n      <p class=\"contact-element text-warning\">Currently in: Chicago IL 60607</p>\n    </div>\n\n    <div class=\"page-bottom\">end</div>\n     \n    <!-- Fishy Stuff -->\n    <app-fish-food [hideFood]=\"!food_out\" [events]=\"eventsSubject.asObservable()\"></app-fish-food>\n\n    <div *ngFor=\"let fish of all_fish\">\n        <app-fish \n            [fish_type]= \"fish.type\" \n            [top_pos]= \"fish.starting_depth\" \n            [left_pos]= \"fish.starting_left\" \n            [idle_depth]= \"fish.idle_depth\" \n            [tank_width]= \"tank_width\" \n            (gotFood)= \"foodEaten($event)\" \n            [events]= \"eventsSubject.asObservable()\">\n        </app-fish>\n    </div>\n</div>");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let AppComponent = class AppComponent {
    constructor() {
        this.title = 'app';
    }
};
AppComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-root',
        template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default
    })
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav-menu/nav-menu.component */ "./src/app/nav-menu/nav-menu.component.ts");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./counter/counter.component */ "./src/app/counter/counter.component.ts");
/* harmony import */ var _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./fetch-data/fetch-data.component */ "./src/app/fetch-data/fetch-data.component.ts");
/* harmony import */ var _fish_fish_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./fish/fish.component */ "./src/app/fish/fish.component.ts");
/* harmony import */ var _tank_tank_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./tank/tank.component */ "./src/app/tank/tank.component.ts");
/* harmony import */ var _fish_food_fish_food_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./fish-food/fish-food.component */ "./src/app/fish-food/fish-food.component.ts");
/* harmony import */ var _sky_sky_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sky/sky.component */ "./src/app/sky/sky.component.ts");
/* harmony import */ var _rain_drop_rain_drop_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./rain-drop/rain-drop.component */ "./src/app/rain-drop/rain-drop.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};















let AppModule = class AppModule {
};
AppModule = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            _nav_menu_nav_menu_component__WEBPACK_IMPORTED_MODULE_6__["NavMenuComponent"],
            _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"],
            _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"],
            _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"],
            _fish_fish_component__WEBPACK_IMPORTED_MODULE_10__["FishComponent"],
            _tank_tank_component__WEBPACK_IMPORTED_MODULE_11__["TankComponent"],
            _fish_food_fish_food_component__WEBPACK_IMPORTED_MODULE_12__["FishFoodComponent"],
            _sky_sky_component__WEBPACK_IMPORTED_MODULE_13__["SkyComponent"],
            _rain_drop_rain_drop_component__WEBPACK_IMPORTED_MODULE_14__["RainDropComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"].withServerTransition({ appId: 'ng-cli-universal' }),
            _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot([
                { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_7__["HomeComponent"], pathMatch: 'full' },
                { path: 'counter', component: _counter_counter_component__WEBPACK_IMPORTED_MODULE_8__["CounterComponent"] },
                { path: 'fetch-data', component: _fetch_data_fetch_data_component__WEBPACK_IMPORTED_MODULE_9__["FetchDataComponent"] },
            ])
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/counter/counter.component.ts":
/*!**********************************************!*\
  !*** ./src/app/counter/counter.component.ts ***!
  \**********************************************/
/*! exports provided: CounterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterComponent", function() { return CounterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let CounterComponent = class CounterComponent {
    constructor() {
        this.currentCount = 0;
    }
    incrementCounter() {
        this.currentCount++;
    }
};
CounterComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-counter-component',
        template: __importDefault(__webpack_require__(/*! raw-loader!./counter.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/counter/counter.component.html")).default
    })
], CounterComponent);



/***/ }),

/***/ "./src/app/fetch-data/fetch-data.component.ts":
/*!****************************************************!*\
  !*** ./src/app/fetch-data/fetch-data.component.ts ***!
  \****************************************************/
/*! exports provided: FetchDataComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FetchDataComponent", function() { return FetchDataComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FetchDataComponent = class FetchDataComponent {
    constructor(http, baseUrl) {
        http.get(baseUrl + 'weatherforecast').subscribe(result => {
            this.forecasts = result;
        }, error => console.error(error));
    }
};
FetchDataComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] },
    { type: String, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: ['BASE_URL',] }] }
];
FetchDataComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fetch-data',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fetch-data.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fetch-data/fetch-data.component.html")).default
    }),
    __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])('BASE_URL')),
    __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], String])
], FetchDataComponent);



/***/ }),

/***/ "./src/app/fish-food/fish-food.component.css":
/*!***************************************************!*\
  !*** ./src/app/fish-food/fish-food.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fish-food{\r\n    position: absolute;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlzaC1mb29kL2Zpc2gtZm9vZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvZmlzaC1mb29kL2Zpc2gtZm9vZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpc2gtZm9vZHtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/fish-food/fish-food.component.ts":
/*!**************************************************!*\
  !*** ./src/app/fish-food/fish-food.component.ts ***!
  \**************************************************/
/*! exports provided: FishFoodComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FishFoodComponent", function() { return FishFoodComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FishFoodComponent = class FishFoodComponent {
    constructor() { }
    set hideFood(value) {
        this.hide_food = value;
        if (this.hide_food) {
            this.hide();
        }
    }
    ngOnInit() {
        this.hide();
        this.top_pos = 0;
        this.eventsSubscription = this.events.subscribe((f_loc) => this.place(f_loc));
        this.updateStyles();
    }
    ngOnDestroy() {
        this.eventsSubscription.unsubscribe();
    }
    place(f_loc) {
        this.left_pos = f_loc[0];
        this.top_pos = f_loc[1];
    }
    hide() {
        this.left_pos = -500;
    }
    updateStyles() {
        let styles = {
            'left': `${this.left_pos}px`,
            'top': `${this.top_pos}px`
        };
        return styles;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Boolean),
    __metadata("design:paramtypes", [Boolean])
], FishFoodComponent.prototype, "hideFood", null);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
], FishFoodComponent.prototype, "events", void 0);
FishFoodComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fish-food',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fish-food.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fish-food/fish-food.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./fish-food.component.css */ "./src/app/fish-food/fish-food.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], FishFoodComponent);



/***/ }),

/***/ "./src/app/fish/fish.component.css":
/*!*****************************************!*\
  !*** ./src/app/fish/fish.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".fish{\r\n    position: absolute;\r\n    top: 150px;\r\n    height: 100px;\r\n    z-index: 0;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmlzaC9maXNoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGFBQWE7SUFDYixVQUFVO0FBQ2QiLCJmaWxlIjoic3JjL2FwcC9maXNoL2Zpc2guY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5maXNoe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxNTBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICB6LWluZGV4OiAwO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/fish/fish.component.ts":
/*!****************************************!*\
  !*** ./src/app/fish/fish.component.ts ***!
  \****************************************/
/*! exports provided: FishComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FishComponent", function() { return FishComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let FishComponent = class FishComponent {
    constructor() {
        this.gotFood = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this._fish_type = this.fish_type;
        this.speed = Math.random() * 2 + 2;
        this.vigorous_speed = Math.random() * 3 + 5;
        this.has_target = false;
        this.target_top = 0;
        this.target_left = 0;
        this.determineSize();
        this.oscilation = 0;
        this.frame_count = 0;
        this.direction = 1;
        this.turn = false;
        this.eventsSubscription = this.events.subscribe((f_loc) => this.seeFood(f_loc));
        this.update();
    }
    ngOnDestroy() {
        this.eventsSubscription.unsubscribe();
    }
    determineSize() {
        let size;
        if (this.tank_width > 1079) {
            size = 80 + Math.floor(Math.random() * 40);
        }
        else {
            size = 60 + Math.floor(Math.random() * 30);
        }
        this.size = size;
        this.width = size;
        this.height = size;
    }
    seeFood(f_loc) {
        this.target_top = f_loc[1];
        this.target_left = f_loc[0];
        let dist = this.targetDistance(this.left_pos, this.top_pos, this.target_left, this.target_top);
        if (this.fish_type != 10 && dist < 1500) {
            this.has_target = true;
        }
    }
    targetDistance(x1, y1, x2, y2) {
        return Math.sqrt(Math.pow(x1 - x2, 2) + Math.pow(y1 - y2, 2));
    }
    moveToTarget() {
        if (this.left_pos > this.target_left && this.direction == 1) {
            this.turn = true;
        }
        else if (this.left_pos < this.target_left && this.direction == -1) {
            this.turn = true;
        }
        if (this.top_pos > this.target_top) {
            this.top_pos -= this.vigorous_speed;
        }
        if (this.top_pos < this.target_top) {
            this.top_pos += this.vigorous_speed;
        }
    }
    idleMotion() {
        if (this.left_pos > this.tank_width - this.size * 1.2 && this.direction == 1) {
            this.turn = true;
        }
        else if (this.left_pos < this.size * 0.6 && this.direction == -1) {
            this.turn = true;
        }
        if (this.top_pos < this.idle_depth - 10) {
            this.top_pos += this.speed / 2;
        }
        else if (this.top_pos > this.idle_depth + 10) {
            this.top_pos -= this.speed / 2;
        }
    }
    moveFish(vigorous_bool) {
        if (vigorous_bool) {
            this.left_pos += this.vigorous_speed * this.direction;
            this.oscilation = 10 * Math.sin(0.03 * this.vigorous_speed * this.frame_count);
        }
        else {
            this.left_pos += this.speed * this.direction;
            this.oscilation = 10 * Math.sin(0.03 * this.speed * this.frame_count);
        }
        this.turnFish();
    }
    update() {
        setInterval(() => {
            this.frame_count += 1;
            if (this.has_target) { //fish sees food
                this.moveToTarget();
                this.moveFish(true);
                let dist = this.targetDistance(this.left_pos, this.top_pos, this.target_left, this.target_top);
                if (dist < 30) {
                    this.gotFood.emit(true);
                    this.has_target = false;
                }
            }
            else { //default movement state
                this.idleMotion();
                this.moveFish(false);
            }
        }, 30);
    }
    turnFish() {
        if (this.width > 0 && this.turn == true) { //turn fish
            this.width -= 10;
        }
        if (this.turn == true && this.width <= 0) { //width == 0, change direction
            this.direction *= -1;
            this.turn = false;
        }
        if (this.width < this.size && this.turn == false) { //finish turn
            this.width += 10;
            if (this.width > this.size) {
                this.width = this.size;
            }
        }
    }
    updateStyles() {
        let styles = {
            'left': `${this.left_pos}px`,
            'top': `${this.top_pos + this.oscilation}px`,
            'transform': `scaleX(${this.direction}`,
            'width': `${this.width}px`,
            'height': `${this.height}px`
        };
        return styles;
    }
    baitFish(event) {
        var x = event.x;
        var y = event.y;
        var pageX = event.pageX;
        var pageY = event.pageY;
        //mouse data
        console.log(event, x, y, pageX, pageY);
    }
    ;
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], FishComponent.prototype, "left_pos", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], FishComponent.prototype, "top_pos", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], FishComponent.prototype, "idle_depth", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], FishComponent.prototype, "fish_type", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], FishComponent.prototype, "target_top", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], FishComponent.prototype, "target_left", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], FishComponent.prototype, "tank_width", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], FishComponent.prototype, "gotFood", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"])
], FishComponent.prototype, "events", void 0);
FishComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-fish',
        template: __importDefault(__webpack_require__(/*! raw-loader!./fish.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/fish/fish.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./fish.component.css */ "./src/app/fish/fish.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], FishComponent);



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".space{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zcGFjZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


let HomeComponent = class HomeComponent {
    constructor(document) {
        this.document = document;
    }
    ngOnInit() {
        this.sky_done = false;
        this.width = this.document.getElementById("SPACE").offsetWidth;
        this.sky_height = this.determineSkyHeight();
    }
    isSkyDone() {
        this.sky_done = true;
    }
    determineSkyHeight() {
        if (this.width > 1080) {
            return 700;
        }
        else if (this.width > 700) {
            return 500;
        }
        else {
            return 480;
        }
    }
};
HomeComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
HomeComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-home',
        template: __importDefault(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")).default]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
    __metadata("design:paramtypes", [Document])
], HomeComponent);



/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.css":
/*!*************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("a.navbar-brand {\r\n  white-space: normal;\r\n  text-align: center;\r\n  word-break: break-all;\r\n}\r\n\r\nhtml {\r\n  font-size: 14px;\r\n}\r\n\r\n@media (min-width: 768px) {\r\n  html {\r\n    font-size: 16px;\r\n  }\r\n}\r\n\r\n.box-shadow {\r\n  box-shadow: 0 .25rem .75rem rgba(0, 0, 0, .05);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFtQjtFQUNuQixrQkFBa0I7RUFDbEIscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0UsZUFBZTtBQUNqQjs7QUFDQTtFQUNFO0lBQ0UsZUFBZTtFQUNqQjtBQUNGOztBQUVBO0VBQ0UsOENBQThDO0FBQ2hEIiwiZmlsZSI6InNyYy9hcHAvbmF2LW1lbnUvbmF2LW1lbnUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImEubmF2YmFyLWJyYW5kIHtcclxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB3b3JkLWJyZWFrOiBicmVhay1hbGw7XHJcbn1cclxuXHJcbmh0bWwge1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcclxuICBodG1sIHtcclxuICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICB9XHJcbn1cclxuXHJcbi5ib3gtc2hhZG93IHtcclxuICBib3gtc2hhZG93OiAwIC4yNXJlbSAuNzVyZW0gcmdiYSgwLCAwLCAwLCAuMDUpO1xyXG59XHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/nav-menu/nav-menu.component.ts":
/*!************************************************!*\
  !*** ./src/app/nav-menu/nav-menu.component.ts ***!
  \************************************************/
/*! exports provided: NavMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavMenuComponent", function() { return NavMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let NavMenuComponent = class NavMenuComponent {
    constructor() {
        this.isExpanded = false;
    }
    collapse() {
        this.isExpanded = false;
    }
    toggle() {
        this.isExpanded = !this.isExpanded;
    }
};
NavMenuComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-nav-menu',
        template: __importDefault(__webpack_require__(/*! raw-loader!./nav-menu.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/nav-menu/nav-menu.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./nav-menu.component.css */ "./src/app/nav-menu/nav-menu.component.css")).default]
    })
], NavMenuComponent);



/***/ }),

/***/ "./src/app/rain-drop/rain-drop.component.css":
/*!***************************************************!*\
  !*** ./src/app/rain-drop/rain-drop.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".rain-drop{\r\n    background: url(\"/assets/rain_drop.png\");\r\n    position:absolute;\r\n    height: 87px;\r\n    width: 29px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmFpbi1kcm9wL3JhaW4tZHJvcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0NBQXdDO0lBQ3hDLGlCQUFpQjtJQUNqQixZQUFZO0lBQ1osV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvcmFpbi1kcm9wL3JhaW4tZHJvcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnJhaW4tZHJvcHtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9hc3NldHMvcmFpbl9kcm9wLnBuZ1wiKTtcclxuICAgIHBvc2l0aW9uOmFic29sdXRlO1xyXG4gICAgaGVpZ2h0OiA4N3B4O1xyXG4gICAgd2lkdGg6IDI5cHg7XHJcbn0iXX0= */");

/***/ }),

/***/ "./src/app/rain-drop/rain-drop.component.ts":
/*!**************************************************!*\
  !*** ./src/app/rain-drop/rain-drop.component.ts ***!
  \**************************************************/
/*! exports provided: RainDropComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RainDropComponent", function() { return RainDropComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let RainDropComponent = class RainDropComponent {
    constructor() { }
    ngOnInit() {
        this.left_pos = this.starting_left;
        this.top_pos = -100;
        this.delay = Math.random() * 60;
        this.update();
    }
    update() {
        let counter = 0;
        setInterval(() => {
            if (this.delay > counter) {
                counter += 1;
            }
            else {
                if (this.sky_height > 250) { //sky tall enough for rain
                    if (this.left_pos > 5) {
                        this.left_pos -= 15;
                    }
                    else {
                        this.left_pos = this.starting_left;
                    }
                    if (this.top_pos < this.sky_height - 100) { //rain fell to surface
                        this.top_pos += 34;
                    }
                    else {
                        this.top_pos = 0;
                        let new_left = Math.floor(Math.random() * 200);
                        let random_bool = Math.random() >= 0.5;
                        if (random_bool) {
                            this.left_pos = this.starting_left + new_left;
                        }
                        else {
                            this.left_pos = this.starting_left - new_left;
                        }
                    }
                }
                else { //hide rain
                    this.left_pos = -100;
                    this.top_pos = 0;
                }
            }
        }, 30);
    }
    updateStyles() {
        let styles = {
            'left': `${this.left_pos}px`,
            'top': `${this.top_pos}px`
        };
        return styles;
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], RainDropComponent.prototype, "sky_height", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], RainDropComponent.prototype, "starting_left", void 0);
RainDropComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-rain-drop',
        template: __importDefault(__webpack_require__(/*! raw-loader!./rain-drop.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/rain-drop/rain-drop.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./rain-drop.component.css */ "./src/app/rain-drop/rain-drop.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], RainDropComponent);



/***/ }),

/***/ "./src/app/sky/sky.component.css":
/*!***************************************!*\
  !*** ./src/app/sky/sky.component.css ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".sky{\r\n    /* background-color: rgb(179, 236, 231); */\r\n    width: 100%;\r\n    position: relative;\r\n    background-image: url(\"/assets/clouds.png\");\r\n    background-repeat: repeat-y;\r\n    background-size: 100% auto;\r\n}\r\n\r\n.water-surface{\r\n    background: url(\"/assets/surface.png\");\r\n    height: 200px;\r\n    width: 100%;\r\n    position: absolute;\r\n    bottom: 0;\r\n    z-index: 1;\r\n}\r\n\r\n.storm-cloud{\r\n    background: url(\"/assets/storm_cloud.png\");\r\n    width: 100%;\r\n    height: 128px;\r\n    position: absolute;\r\n    top: 0;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2t5L3NreS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMENBQTBDO0lBQzFDLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsMkNBQTJDO0lBQzNDLDJCQUEyQjtJQUMzQiwwQkFBMEI7QUFDOUI7O0FBRUE7SUFDSSxzQ0FBc0M7SUFDdEMsYUFBYTtJQUNiLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsU0FBUztJQUNULFVBQVU7QUFDZDs7QUFFQTtJQUNJLDBDQUEwQztJQUMxQyxXQUFXO0lBQ1gsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixNQUFNO0FBQ1YiLCJmaWxlIjoic3JjL2FwcC9za3kvc2t5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2t5e1xyXG4gICAgLyogYmFja2dyb3VuZC1jb2xvcjogcmdiKDE3OSwgMjM2LCAyMzEpOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2Nsb3Vkcy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0LXk7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgYXV0bztcclxufVxyXG5cclxuLndhdGVyLXN1cmZhY2V7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvYXNzZXRzL3N1cmZhY2UucG5nXCIpO1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAwO1xyXG4gICAgei1pbmRleDogMTtcclxufVxyXG5cclxuLnN0b3JtLWNsb3Vke1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiL2Fzc2V0cy9zdG9ybV9jbG91ZC5wbmdcIik7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTI4cHg7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/sky/sky.component.ts":
/*!**************************************!*\
  !*** ./src/app/sky/sky.component.ts ***!
  \**************************************/
/*! exports provided: SkyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SkyComponent", function() { return SkyComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

let SkyComponent = class SkyComponent {
    constructor() {
        this.imGone = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    ngOnInit() {
        this.starting_height = this.sky_height;
        this.pool_acceleration = 1;
        let fifth_section = Math.floor(this.sky_width / 5);
        this.rain_drop_location_array = [
            fifth_section,
            2 * fifth_section,
            3 * fifth_section,
            4 * fifth_section,
            5 * fifth_section,
        ];
        console.log(this.rain_drop_location_array);
        this.determinePoolRate();
        this.update();
    }
    update() {
        setInterval(() => {
            if (this.sky_height > this.starting_height * 0.95) {
                window.scrollTo(0, 0); //because chrome
            }
            if (this.sky_height > 250) {
                this.sky_height -= this.pool_rate;
            }
            else {
                if (this.sky_height > 0) {
                    this.pool_acceleration += 0.08;
                    this.sky_height -= this.pool_rate * this.pool_acceleration;
                }
                else {
                    this.imGone.emit(true);
                }
            }
        }, 60);
    }
    updateStyles() {
        let styles = {
            height: `${this.sky_height}px`
        };
        return styles;
    }
    determinePoolRate() {
        if (this.sky_height > 1080) {
            this.pool_rate = 5;
        }
        else if (this.sky_height > 700) {
            this.pool_rate = 4;
        }
        else {
            this.pool_rate = 3;
        }
    }
};
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
    __metadata("design:type", Object)
], SkyComponent.prototype, "imGone", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], SkyComponent.prototype, "sky_height", void 0);
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], SkyComponent.prototype, "sky_width", void 0);
SkyComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-sky',
        template: __importDefault(__webpack_require__(/*! raw-loader!./sky.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sky/sky.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./sky.component.css */ "./src/app/sky/sky.component.css")).default]
    }),
    __metadata("design:paramtypes", [])
], SkyComponent);



/***/ }),

/***/ "./src/app/tank/tank.component.css":
/*!*****************************************!*\
  !*** ./src/app/tank/tank.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".tank{\r\n    width: 100%;\r\n    z-index: -2;\r\n    background-image: url(\"/assets/water.jpg\");\r\n    background-repeat: no-repeat;\r\n    background-size: auto 100%;\r\n}\r\n\r\n.header-mask{\r\n    background-color: rgba(57, 123, 189, 0.2);\r\n}\r\n\r\nul {\r\n    list-style-type: none;\r\n}\r\n\r\n.content-element{\r\n    z-index: 1;\r\n    padding-top: 2%;\r\n    padding-bottom: 2%;\r\n    padding-left: 2%;\r\n    padding-right: 2%;\r\n    padding: 5%;\r\n    position: relative;\r\n}\r\n\r\n.kelp-one::before{\r\n    \r\n    background-image: url(\"/assets/aquatic_plants.png\");\r\n    background-repeat: no-repeat;\r\n    content: \"\";\r\n    background-size: cover;\r\n    background-size: 100% 100%;\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    opacity:0.6;\r\n}\r\n\r\n.kelp-one *{\r\n    position:relative;\r\n}\r\n\r\n.kelp-two::before{\r\n    \r\n    background-image: url(\"/assets/aquatic_plants_two.png\");\r\n    background-repeat: no-repeat;\r\n    content: \"\";\r\n    background-size: cover;\r\n    background-size: 100% 100%;\r\n    position: absolute;\r\n    top: 0px;\r\n    right: 0px;\r\n    bottom: 0px;\r\n    left: 0px;\r\n    opacity:0.6;\r\n}\r\n\r\n.kelp-two *{\r\n    position:relative;\r\n}\r\n\r\n.content-element h3, p, img{\r\n    background: rgb(58, 184, 117);\r\n    border-radius: 5px;\r\n    display: inline-block;\r\n    padding: 1%;\r\n    margin-left: 10px;\r\n}\r\n\r\n.content-block{\r\n    margin-top: 4%;\r\n    margin-bottom: 4%;\r\n    width: 80%;\r\n    display: block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n}\r\n\r\n.buffer{\r\n    margin-top: 4%;\r\n    margin-bottom: 1%;\r\n}\r\n\r\n.project-description{\r\n    margin: 5%;\r\n    width: 50%;\r\n    padding: 4%;\r\n    display:inline-block;\r\n    vertical-align: middle;\r\n}\r\n\r\n.proj-img{\r\n    display: inline-block;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    width: 40%;\r\n    vertical-align: middle;\r\n}\r\n\r\n.contact-element{\r\n    display: inline-block;\r\n    margin-left: 10%;\r\n    background-color: black;\r\n}\r\n\r\n.footer{\r\n    width: 80%;\r\n    display: block;\r\n    margin-top: 500px;\r\n    margin-left: auto;\r\n    margin-right: auto;\r\n    margin-bottom: 0px;\r\n}\r\n\r\n.page-bottom{\r\n    margin-top: 500px;\r\n    visibility: hidden;\r\n}\r\n\r\n.page-top{\r\n    margin-bottom: 50px;\r\n    visibility: hidden;\r\n}\r\n\r\n@media only screen and (max-width: 600px) {\r\n\r\n    .tank{\r\n        background-size: 200% 100%;\r\n    }\r\n\r\n    .kelp-one{\r\n        background-size: 100% 50%;\r\n        background-repeat: repeat;\r\n        margin-top: 200px;\r\n    }\r\n\r\n    .kelp-two{\r\n        background-size: 100% 50%;\r\n        background-repeat: repeat;\r\n        margin-top: 150px;\r\n    }\r\n\r\n    .kelp-one h3{\r\n        font-size: 22px;\r\n    }\r\n\r\n    .kelp-two h3{\r\n        font-size: 22px;\r\n    }\r\n\r\n    .contact-element{\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        margin-top: 1%;\r\n        margin-bottom: 0px;\r\n        text-align: center;\r\n    }\r\n\r\n    .page-bottom{\r\n        margin-top: 500px;\r\n        visibility: hidden;\r\n    }\r\n\r\n    .footer{\r\n        margin-top: 200px;\r\n    }\r\n  }\r\n\r\n@media only screen and (max-width: 1080px) {\r\n    .project-description{\r\n        width: 100%;\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n      }\r\n\r\n      .proj-img{\r\n        display: block;\r\n        margin-left: auto;\r\n        margin-right: auto;\r\n        width: 80%;\r\n    }\r\n\r\n    .page-bottom{\r\n        margin-top: 700px;\r\n        visibility: hidden;\r\n    }\r\n  }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFuay90YW5rLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsV0FBVztJQUNYLDBDQUEwQztJQUMxQyw0QkFBNEI7SUFDNUIsMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0kseUNBQXlDO0FBQzdDOztBQUVBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLG1EQUFtRDtJQUNuRCw0QkFBNEI7SUFDNUIsV0FBVztJQUNYLHNCQUFzQjtJQUN0QiwwQkFBMEI7SUFDMUIsa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixVQUFVO0lBQ1YsV0FBVztJQUNYLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7O0FBRUE7O0lBRUksdURBQXVEO0lBQ3ZELDRCQUE0QjtJQUM1QixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLDBCQUEwQjtJQUMxQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFVBQVU7SUFDVixXQUFXO0lBQ1gsU0FBUztJQUNULFdBQVc7QUFDZjs7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjs7QUFHQTtJQUNJLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIscUJBQXFCO0lBQ3JCLFdBQVc7SUFDWCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLFVBQVU7SUFDVixjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsVUFBVTtJQUNWLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsc0JBQXNCO0FBQzFCOztBQUVBO0lBQ0kscUJBQXFCO0lBQ3JCLGlCQUFpQjtJQUNqQixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLHNCQUFzQjtBQUMxQjs7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixnQkFBZ0I7SUFDaEIsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLGtCQUFrQjtBQUN0Qjs7QUFHQTs7SUFFSTtRQUNJLDBCQUEwQjtJQUM5Qjs7SUFFQTtRQUNJLHlCQUF5QjtRQUN6Qix5QkFBeUI7UUFDekIsaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0kseUJBQXlCO1FBQ3pCLHlCQUF5QjtRQUN6QixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksZUFBZTtJQUNuQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxpQkFBaUI7UUFDakIsa0JBQWtCO1FBQ2xCLGNBQWM7UUFDZCxrQkFBa0I7UUFDbEIsa0JBQWtCO0lBQ3RCOztJQUVBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtJQUN0Qjs7SUFFQTtRQUNJLGlCQUFpQjtJQUNyQjtFQUNGOztBQUVGO0lBQ0k7UUFDSSxXQUFXO1FBQ1gsY0FBYztRQUNkLGlCQUFpQjtRQUNqQixrQkFBa0I7TUFDcEI7O01BRUE7UUFDRSxjQUFjO1FBQ2QsaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQixVQUFVO0lBQ2Q7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsa0JBQWtCO0lBQ3RCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC90YW5rL3RhbmsuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YW5re1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICB6LWluZGV4OiAtMjtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi9hc3NldHMvd2F0ZXIuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogYXV0byAxMDAlO1xyXG59XHJcblxyXG4uaGVhZGVyLW1hc2t7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDU3LCAxMjMsIDE4OSwgMC4yKTtcclxufVxyXG5cclxudWwge1xyXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xyXG59XHJcblxyXG4uY29udGVudC1lbGVtZW50e1xyXG4gICAgei1pbmRleDogMTtcclxuICAgIHBhZGRpbmctdG9wOiAyJTtcclxuICAgIHBhZGRpbmctYm90dG9tOiAyJTtcclxuICAgIHBhZGRpbmctbGVmdDogMiU7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAyJTtcclxuICAgIHBhZGRpbmc6IDUlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4ua2VscC1vbmU6OmJlZm9yZXtcclxuICAgIFxyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiL2Fzc2V0cy9hcXVhdGljX3BsYW50cy5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgb3BhY2l0eTowLjY7XHJcbn1cclxuXHJcbi5rZWxwLW9uZSAqe1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuXHJcbi5rZWxwLXR3bzo6YmVmb3Jle1xyXG4gICAgXHJcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvYXNzZXRzL2FxdWF0aWNfcGxhbnRzX3R3by5wbmdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCUgMTAwJTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMHB4O1xyXG4gICAgcmlnaHQ6IDBweDtcclxuICAgIGJvdHRvbTogMHB4O1xyXG4gICAgbGVmdDogMHB4O1xyXG4gICAgb3BhY2l0eTowLjY7XHJcbn1cclxuXHJcbi5rZWxwLXR3byAqe1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuXHJcblxyXG4uY29udGVudC1lbGVtZW50IGgzLCBwLCBpbWd7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoNTgsIDE4NCwgMTE3KTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIHBhZGRpbmc6IDElO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XHJcbn1cclxuXHJcbi5jb250ZW50LWJsb2Nre1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uYnVmZmVye1xyXG4gICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxJTtcclxufVxyXG5cclxuLnByb2plY3QtZGVzY3JpcHRpb257XHJcbiAgICBtYXJnaW46IDUlO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIHBhZGRpbmc6IDQlO1xyXG4gICAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4ucHJvai1pbWd7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIHdpZHRoOiA0MCU7XHJcbiAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xyXG59XHJcblxyXG4uY29udGFjdC1lbGVtZW50e1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDEwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4uZm9vdGVye1xyXG4gICAgd2lkdGg6IDgwJTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLXRvcDogNTAwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcclxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxufVxyXG5cclxuLnBhZ2UtYm90dG9te1xyXG4gICAgbWFyZ2luLXRvcDogNTAwcHg7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi5wYWdlLXRvcHtcclxuICAgIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XHJcblxyXG4gICAgLnRhbmt7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMDAlIDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLmtlbHAtb25le1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTAwJSA1MCU7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IHJlcGVhdDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgIH1cclxuXHJcbiAgICAua2VscC10d297XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMDAlIDUwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kLXJlcGVhdDogcmVwZWF0O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDE1MHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5rZWxwLW9uZSBoM3tcclxuICAgICAgICBmb250LXNpemU6IDIycHg7XHJcbiAgICB9XHJcblxyXG4gICAgLmtlbHAtdHdvIGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICAgIH1cclxuXHJcbiAgICAuY29udGFjdC1lbGVtZW50e1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICAgICAgICBtYXJnaW4tdG9wOiAxJTtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5wYWdlLWJvdHRvbXtcclxuICAgICAgICBtYXJnaW4tdG9wOiA1MDBweDtcclxuICAgICAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICB9XHJcblxyXG4gICAgLmZvb3RlcntcclxuICAgICAgICBtYXJnaW4tdG9wOiAyMDBweDtcclxuICAgIH1cclxuICB9XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwODBweCkge1xyXG4gICAgLnByb2plY3QtZGVzY3JpcHRpb257XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICB9XHJcblxyXG4gICAgICAucHJvai1pbWd7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnBhZ2UtYm90dG9te1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDcwMHB4O1xyXG4gICAgICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICAgIH1cclxuICB9XHJcblxyXG5cclxuIl19 */");

/***/ }),

/***/ "./src/app/tank/tank.component.ts":
/*!****************************************!*\
  !*** ./src/app/tank/tank.component.ts ***!
  \****************************************/
/*! exports provided: TankComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TankComponent", function() { return TankComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};



let TankComponent = class TankComponent {
    constructor(document) {
        this.document = document;
        this.eventsSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    ngOnInit() {
        this.number_of_fish_types = 4; //types 1, 2, 3 or 4
        this.tank_width = this.document.getElementById("TANK").offsetWidth;
        this.tank_height = this.document.getElementById("TANK").offsetHeight; //used to pace fish
        console.log("Tank Height: " + this.document.getElementById("TANK").offsetHeight);
        console.log("Tank Width: " + this.document.getElementById("TANK").offsetWidth);
        this.food_out = false;
        this.createFish();
        this.update();
    }
    update() {
        setInterval(() => {
            this.tank_width = this.document.getElementById("TANK").offsetWidth;
        }, 5000);
    }
    baitFish(event) {
        // var x = event.x;
        // var y = event.y;
        // var offsetX = event.offsetX;
        // var offsetY = event.offsetY;
        // console.log(event, x, y, offsetX, offsetY);
        this.food_out = true;
        this.food_top = event.pageX - 15; //adjust for food image
        this.food_left = event.pageY - 25;
        this.emitEventToChild(this.food_top, this.food_left);
    }
    foodEaten() {
        this.food_out = false;
    }
    decideType() {
        let rand = Math.floor(Math.random() * 100);
        if (rand % 20 == 0) { //angel fish
            return 3;
        }
        else if (rand % 12 == 0) { //butterfly fish
            return 4;
        }
        else if (rand % 5 == 0) { //disk fish
            return 2;
        }
        else { //yellow fish
            return 1;
        }
    }
    createFish() {
        this.all_fish = [];
        let h = this.sky_height;
        for (let x = 0; x < 3; x++) { //create top cluster
            let fish = {
                starting_depth: h + 250 + Math.floor(Math.random() * 50),
                starting_left: Math.floor(Math.random() * (this.tank_width - 100) + 50),
                idle_depth: 200 + Math.floor(Math.random() * 100),
                type: this.decideType()
            };
            this.all_fish.push(fish);
        }
        for (let x = 0; x < 3; x++) { //create middle cluster
            let set_depth = 1050 + Math.floor(Math.random() * 300);
            let fish = {
                starting_depth: h + set_depth,
                starting_left: Math.floor(Math.random() * (this.tank_width - 100) + 50),
                idle_depth: set_depth,
                type: this.decideType()
            };
            this.all_fish.push(fish);
        }
        for (let x = 0; x < 8; x++) { //random roaming fish
            let set_depth = 200 + Math.floor(Math.random() * (this.tank_height - h - 600));
            let fish = {
                starting_depth: h + set_depth,
                starting_left: Math.floor(Math.random() * (this.tank_width - 100) + 50),
                idle_depth: set_depth,
                type: this.decideType()
            };
            this.all_fish.push(fish);
        }
        if (this.tank_width < 3000) {
            let fish = {
                starting_depth: h + this.tank_height - 500,
                starting_left: Math.floor(Math.random() * (this.tank_width - 100) + 50),
                idle_depth: this.tank_height - 750,
                type: 10
            };
            this.all_fish.push(fish);
        }
    }
    emitEventToChild(x, y) {
        this.eventsSubject.next([x, y]);
    }
    openLink(link) {
        window.open(link, "_blank");
    }
};
TankComponent.ctorParameters = () => [
    { type: Document, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"],] }] }
];
__decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
    __metadata("design:type", Number)
], TankComponent.prototype, "sky_height", void 0);
TankComponent = __decorate([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
        selector: 'app-tank',
        template: __importDefault(__webpack_require__(/*! raw-loader!./tank.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/tank/tank.component.html")).default,
        styles: [__importDefault(__webpack_require__(/*! ./tank.component.css */ "./src/app/tank/tank.component.css")).default]
    }),
    __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
    __metadata("design:paramtypes", [Document])
], TankComponent);



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
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
const environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! exports provided: getBaseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getBaseUrl", function() { return getBaseUrl; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};




function getBaseUrl() {
    return document.getElementsByTagName('base')[0].href;
}
const providers = [
    { provide: 'BASE_URL', useFactory: getBaseUrl, deps: [] }
];
if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])(providers).bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\bigch\PortfolioV2\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map