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

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
/* harmony import */ var _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-employee/create-employee.component */ "./src/app/create-employee/create-employee.component.ts");
/* harmony import */ var _update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./update-employee/update-employee.component */ "./src/app/update-employee/update-employee.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/employee-details/employee-details.component.ts");








const routes = [
    { path: 'employees', component: _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_2__["EmployeeListComponent"] },
    { path: 'create-employee', component: _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_3__["CreateEmployeeComponent"] },
    { path: '', redirectTo: 'employees', pathMatch: 'full' },
    { path: 'update-employee/:id', component: _update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_4__["UpdateEmployeeComponent"] },
    { path: 'employee-details/:id', component: _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeDetailsComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");



class AppComponent {
    constructor() {
        this.title = 'Angular 10 Spring Boot CRUD Full Stack App';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 16, vars: 1, consts: [[1, "navbar", "navbar-expand-sm", "bg-primary", "navbar-dark"], [1, "navbar-nav"], [1, "nav-item"], ["routerLink", "employees", "routerLinkActive", "active", 1, "nav-link"], ["routerLink", "create-employee", "routerLinkActive", "active", 1, "nav-link"], [1, "text-center"], [1, "container"], [1, "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Employee List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Add Employee");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "footer", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "All Rights Reserved 2023 @VISHAL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.title, " ");
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".navbar[_ngcontent-%COMP%] {\r\n    background-color: #007bff;\r\n    width: 100%;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .navbar[_ngcontent-%COMP%] {\r\n        \r\n        background-color: #003366;\r\n    }\r\n}\r\n.navbar-nav[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    justify-content: space-around;\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n    .navbar-nav[_ngcontent-%COMP%] {\r\n        flex-direction: column; \r\n        align-items: center; \r\n    }\r\n}\r\n.nav-item[_ngcontent-%COMP%] {\r\n    list-style: none;\r\n}\r\n.nav-link[_ngcontent-%COMP%] {\r\n    text-decoration: none;\r\n    color: #fff;\r\n    padding: 10px 15px;\r\n    border-radius: 20px;\r\n}\r\n.nav-link[_ngcontent-%COMP%]:hover, .nav-link.active[_ngcontent-%COMP%] {\r\n    background-color: #a72b2b;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .navbar-nav[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        align-items: center;\r\n        width: full;\r\n    }\r\n\r\n    .nav-link[_ngcontent-%COMP%] {\r\n        margin: 5px 0;\r\n        text-align: center;\r\n        width: 100%;\r\n        display: block;\r\n    }\r\n\r\n    .navbar-toggler[_ngcontent-%COMP%] {\r\n        display: block;\r\n        background-color: #007bff;\r\n        border: none;\r\n        color: #fff;\r\n        text-align: center;\r\n        cursor: pointer;\r\n        font-size: 18px;\r\n        padding: 10px;\r\n        border-radius: 5px;\r\n        margin: 5px 0;\r\n    }\r\n\r\n    .navbar-collapse[_ngcontent-%COMP%] {\r\n        display: none;\r\n    }\r\n\r\n    .navbar-toggler.active[_ngcontent-%COMP%] {\r\n        background-color: #a72b2b;\r\n    }\r\n\r\n    .navbar-toggler.active[_ngcontent-%COMP%]    + .navbar-collapse[_ngcontent-%COMP%] {\r\n        display: block;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0NBQW9DO0FBQ3BDLDhCQUE4QjtBQUM5QjtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFFQSwwQ0FBMEM7QUFDMUM7SUFDSTtRQUNJLG9FQUFvRTtRQUNwRSx5QkFBeUI7SUFDN0I7QUFDSjtBQUdBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtBQUNqQztBQUVBLDBDQUEwQztBQUMxQztJQUNJO1FBQ0ksc0JBQXNCLEVBQUUsOENBQThDO1FBQ3RFLG1CQUFtQixFQUFFLCtDQUErQztJQUN4RTtBQUNKO0FBR0E7SUFDSSxnQkFBZ0I7QUFDcEI7QUFFQTtJQUNJLHFCQUFxQjtJQUNyQixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUVBOztJQUVJLHlCQUF5QjtBQUM3QjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJO1FBQ0ksc0JBQXNCO1FBQ3RCLG1CQUFtQjtRQUNuQixXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxhQUFhO1FBQ2Isa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxjQUFjO0lBQ2xCOztJQUVBO1FBQ0ksY0FBYztRQUNkLHlCQUF5QjtRQUN6QixZQUFZO1FBQ1osV0FBVztRQUNYLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsZUFBZTtRQUNmLGFBQWE7UUFDYixrQkFBa0I7UUFDbEIsYUFBYTtJQUNqQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7O0lBRUE7UUFDSSx5QkFBeUI7SUFDN0I7O0lBRUE7UUFDSSxjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFkZCB0aGlzIENTUyB0byB5b3VyIHN0eWxlc2hlZXQgKi9cclxuLyogRGVmYXVsdCBzdHlsZXMgZm9yIG5hdmJhciAqL1xyXG4ubmF2YmFyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDdiZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBzdHlsZXMgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm5hdmJhciB7XHJcbiAgICAgICAgLyogQWRqdXN0IGJhY2tncm91bmQgY29sb3Igb3IgYW55IG90aGVyIHN0eWxlcyBmb3Igc21hbGxlciBzY3JlZW5zICovXHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwMzM2NjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbi5uYXZiYXItbmF2IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcclxufVxyXG5cclxuLyogUmVzcG9uc2l2ZSBzdHlsZXMgZm9yIHNtYWxsZXIgc2NyZWVucyAqL1xyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm5hdmJhci1uYXYge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IC8qIFN0YWNrIGl0ZW1zIHZlcnRpY2FsbHkgb24gc21hbGxlciBzY3JlZW5zICovXHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgLyogQ2VudGVyIGl0ZW1zIHZlcnRpY2FsbHkgb24gc21hbGxlciBzY3JlZW5zICovXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG4ubmF2LWl0ZW0ge1xyXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcclxufVxyXG5cclxuLm5hdi1saW5rIHtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTBweCAxNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcclxufVxyXG5cclxuLm5hdi1saW5rOmhvdmVyLFxyXG4ubmF2LWxpbmsuYWN0aXZlIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNhNzJiMmI7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgc3R5bGVzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLm5hdmJhci1uYXYge1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICB3aWR0aDogZnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICAgIG1hcmdpbjogNXB4IDA7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXItdG9nZ2xlciB7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgY29sb3I6ICNmZmY7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgbWFyZ2luOiA1cHggMDtcclxuICAgIH1cclxuXHJcbiAgICAubmF2YmFyLWNvbGxhcHNlIHtcclxuICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZiYXItdG9nZ2xlci5hY3RpdmUge1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNhNzJiMmI7XHJcbiAgICB9XHJcblxyXG4gICAgLm5hdmJhci10b2dnbGVyLmFjdGl2ZSArIC5uYXZiYXItY29sbGFwc2Uge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
/* harmony import */ var _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./create-employee/create-employee.component */ "./src/app/create-employee/create-employee.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./update-employee/update-employee.component */ "./src/app/update-employee/update-employee.component.ts");
/* harmony import */ var _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./employee-details/employee-details.component */ "./src/app/employee-details/employee-details.component.ts");











class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
        _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"],
        _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_6__["CreateEmployeeComponent"],
        _update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_8__["UpdateEmployeeComponent"],
        _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeDetailsComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                    _employee_list_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["EmployeeListComponent"],
                    _create_employee_create_employee_component__WEBPACK_IMPORTED_MODULE_6__["CreateEmployeeComponent"],
                    _update_employee_update_employee_component__WEBPACK_IMPORTED_MODULE_8__["UpdateEmployeeComponent"],
                    _employee_details_employee_details_component__WEBPACK_IMPORTED_MODULE_9__["EmployeeDetailsComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"]
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/create-employee/create-employee.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/create-employee/create-employee.component.ts ***!
  \**************************************************************/
/*! exports provided: CreateEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateEmployeeComponent", function() { return CreateEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee */ "./src/app/employee.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class CreateEmployeeComponent {
    constructor(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
        this.employee = new _employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]();
    }
    ngOnInit() {
    }
    saveEmployee() {
        this.employeeService.createEmployee(this.employee).subscribe(data => {
            console.log(data);
            this.goToEmployeeList();
        }, error => console.log(error));
    }
    goToEmployeeList() {
        this.router.navigate(['/employees']);
    }
    onSubmit() {
        console.log(this.employee);
        this.saveEmployee();
    }
}
CreateEmployeeComponent.ɵfac = function CreateEmployeeComponent_Factory(t) { return new (t || CreateEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
CreateEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateEmployeeComponent, selectors: [["app-create-employee"]], decls: 18, vars: 3, consts: [[1, "col-md-6", "offset-md-3"], [3, "ngSubmit"], [1, "form-group"], ["type", "text", "id", "firstName", "name", "firstName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "lastName", "name", "lastName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "emailId", "name", "emailId", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success"]], template: function CreateEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Create Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function CreateEmployeeComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateEmployeeComponent_Template_input_ngModelChange_7_listener($event) { return ctx.employee.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateEmployeeComponent_Template_input_ngModelChange_11_listener($event) { return ctx.employee.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Email Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function CreateEmployeeComponent_Template_input_ngModelChange_15_listener($event) { return ctx.employee.emailId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.employee.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.employee.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.employee.emailId);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'Arial', sans-serif;\r\n    background-color: #f8f9fa;\r\n}\r\n.col-md-6[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #007bff;\r\n}\r\nform[_ngcontent-%COMP%] {\r\n    background-color: #ffffff;\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n.form-control[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-top: 5px;\r\n    margin-bottom: 10px;\r\n    box-sizing: border-box;\r\n    border: 1px solid #ced4da;\r\n    border-radius: 4px;\r\n}\r\n.btn-success[_ngcontent-%COMP%] {\r\n    background-color: #28a745;\r\n    color: #ffffff;\r\n    border: 1px solid #28a745;\r\n    cursor: pointer; \r\n}\r\n.btn-success[_ngcontent-%COMP%]:hover {\r\n    background-color: #218838;\r\n    border: 1px solid #218838;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .col-md-6[_ngcontent-%COMP%] {\r\n        margin-top: 20px;\r\n    }\r\n\r\n    form[_ngcontent-%COMP%] {\r\n        padding: 15px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY3JlYXRlLWVtcGxveWVlL2NyZWF0ZS1lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QztJQUNJLGdDQUFnQztJQUNoQyx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCx5QkFBeUI7SUFDekIsZUFBZSxFQUFFLDRDQUE0QztBQUNqRTtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLHlCQUF5QjtBQUM3QjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCOztJQUVBO1FBQ0ksYUFBYTtJQUNqQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvY3JlYXRlLWVtcGxveWVlL2NyZWF0ZS1lbXBsb3llZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogQWRkIHRoaXMgQ1NTIHRvIHlvdXIgZXh0ZXJuYWwgc3R5bGVzaGVldCAqL1xyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnLCBzYW5zLXNlcmlmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxufVxyXG5cclxuLmNvbC1tZC02IHtcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbn1cclxuXHJcbmgzIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGNvbG9yOiAjMDA3YmZmO1xyXG59XHJcblxyXG5mb3JtIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggcmdiYSgwLCAwLCAwLCAwLjEpO1xyXG59XHJcblxyXG4uZm9ybS1ncm91cCB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG5sYWJlbCB7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG5cclxuLmZvcm0tY29udHJvbCB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNjZWQ0ZGE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbn1cclxuXHJcbi5idG4tc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjhhNzQ1O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjhhNzQ1O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyOyAvKiBBZGQgY3Vyc29yIHBvaW50ZXIgZm9yIGJldHRlciB1c2FiaWxpdHkgKi9cclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTg4Mzg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjE4ODM4O1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIHN0eWxlcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb2wtbWQtNiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-employee',
                templateUrl: './create-employee.component.html',
                styleUrls: ['./create-employee.component.css']
            }]
    }], function () { return [{ type: _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/employee-details/employee-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/employee-details/employee-details.component.ts ***!
  \****************************************************************/
/*! exports provided: EmployeeDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeDetailsComponent", function() { return EmployeeDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee */ "./src/app/employee.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");





class EmployeeDetailsComponent {
    constructor(route, employeService) {
        this.route = route;
        this.employeService = employeService;
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.employee = new _employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]();
        this.employeService.getEmployeeById(this.id).subscribe(data => {
            this.employee = data;
        });
    }
}
EmployeeDetailsComponent.ɵfac = function EmployeeDetailsComponent_Factory(t) { return new (t || EmployeeDetailsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"])); };
EmployeeDetailsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeDetailsComponent, selectors: [["app-employee-details"]], decls: 18, vars: 3, template: function EmployeeDetailsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " View Employee Details");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " First Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Last Name: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "b");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Email Id: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.employee.firstName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.employee.lastName, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.employee.emailId, " ");
    } }, styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'Arial', sans-serif;\r\n    background-color: #f8f9fa;\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #007bff;\r\n}\r\n.container[_ngcontent-%COMP%] {\r\n    background-color: #ffffff;\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    margin: 20px auto;\r\n    max-width: 400px;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n    display: block;\r\n    margin-bottom: 5px;\r\n}\r\nb[_ngcontent-%COMP%] {\r\n    color: #007bff;\r\n}\r\n\r\n.container[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\r\n    margin-top: 10px;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .container[_ngcontent-%COMP%] {\r\n        max-width: 100%;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtZGV0YWlscy9lbXBsb3llZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDO0lBQ0ksZ0NBQWdDO0lBQ2hDLHlCQUF5QjtBQUM3QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVDQUF1QztJQUN2QyxpQkFBaUI7SUFDakIsZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxpQkFBaUI7SUFDakIsY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksY0FBYztBQUNsQjtBQUVBLHdEQUF3RDtBQUN4RDtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUtZGV0YWlscy9lbXBsb3llZS1kZXRhaWxzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgdGhpcyBDU1MgdG8geW91ciBleHRlcm5hbCBzdHlsZXNoZWV0ICovXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgbWF4LXdpZHRoOiA0MDBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuYiB7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuLyogT3B0aW9uYWw6IEFkZCBzb21lIHNwYWNpbmcgYmV0d2VlbiBsYWJlbCBhbmQgdmFsdWVzICovXHJcbi5jb250YWluZXIgZGl2IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgc3R5bGVzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLmNvbnRhaW5lciB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeDetailsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employee-details',
                templateUrl: './employee-details.component.html',
                styleUrls: ['./employee-details.component.css']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _employee_service__WEBPACK_IMPORTED_MODULE_3__["EmployeeService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/employee-list/employee-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.ts ***!
  \**********************************************************/
/*! exports provided: EmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeListComponent", function() { return EmployeeListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");





function EmployeeListComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_tr_14_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const employee_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.updateEmployee(employee_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Update");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_tr_14_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const employee_r1 = ctx.$implicit; const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.deleteEmployee(employee_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EmployeeListComponent_tr_14_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const employee_r1 = ctx.$implicit; const ctx_r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r5.employeeDetails(employee_r1.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " View");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const employee_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r1.firstName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r1.lastName, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", employee_r1.emailId, " ");
} }
class EmployeeListComponent {
    constructor(employeeService, router) {
        this.employeeService = employeeService;
        this.router = router;
    }
    ngOnInit() {
        this.getEmployees();
    }
    getEmployees() {
        this.employeeService.getEmployeesList().subscribe(data => {
            this.employees = data;
        });
    }
    employeeDetails(id) {
        this.router.navigate(['employee-details', id]);
    }
    updateEmployee(id) {
        this.router.navigate(['update-employee', id]);
    }
    deleteEmployee(id) {
        this.employeeService.deleteEmployee(id).subscribe(data => {
            console.log(data);
            this.getEmployees();
        });
    }
}
EmployeeListComponent.ɵfac = function EmployeeListComponent_Factory(t) { return new (t || EmployeeListComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
EmployeeListComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EmployeeListComponent, selectors: [["app-employee-list"]], decls: 15, vars: 1, consts: [[1, "table", "table-striped"], [4, "ngFor", "ngForOf"], [1, "btn", "btn-info", 3, "click"], [1, "btn", "btn-danger", 2, "margin-left", "10px", 3, "click"], [1, "btn", "btn-info", 2, "margin-left", "10px", 3, "click"]], template: function EmployeeListComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Employee List");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "table", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Last Name ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Email Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Actions ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, EmployeeListComponent_tr_14_Template, 14, 3, "tr", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.employees);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"]], styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'Arial', sans-serif;\r\n    background-color: #f8f9fa;\r\n    margin: 0;\r\n}\r\nh2[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #007bff;\r\n}\r\n.table[_ngcontent-%COMP%] {\r\n    width: 80%;\r\n    margin: 20px auto;\r\n    border-collapse: collapse;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n    overflow-x: auto; \r\n}\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n    padding: 15px;\r\n    text-align: left;\r\n    border-bottom: 1px solid #dee2e6;\r\n}\r\n.table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%] {\r\n    background-color: #007bff;\r\n    color: #fff;\r\n}\r\n.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(odd) {\r\n    background-color: #f8f9fa;\r\n}\r\n.table-striped[_ngcontent-%COMP%]   tbody[_ngcontent-%COMP%]   tr[_ngcontent-%COMP%]:nth-of-type(even) {\r\n    background-color: #e2e6ea;\r\n}\r\n.btn[_ngcontent-%COMP%] {\r\n    padding: 8px 12px;\r\n    cursor: pointer;\r\n}\r\n.btn-info[_ngcontent-%COMP%] {\r\n    background-color: #17a2b8;\r\n    color: #fff;\r\n}\r\n.btn-info[_ngcontent-%COMP%]:hover {\r\n    background-color: #138496;\r\n}\r\n.btn-danger[_ngcontent-%COMP%] {\r\n    background-color: #dc3545;\r\n    color: #fff;\r\n}\r\n.btn-danger[_ngcontent-%COMP%]:hover {\r\n    background-color: #bd2130;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .table[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        overflow-x: 0;\r\n    }\r\n\r\n    .table[_ngcontent-%COMP%]   th[_ngcontent-%COMP%], .table[_ngcontent-%COMP%]   td[_ngcontent-%COMP%] {\r\n        padding: 10px;\r\n        font-size: 12px; \r\n        white-space: nowrap; \r\n    }\r\n\r\n    .btn[_ngcontent-%COMP%] {\r\n        padding: 6px 10px;\r\n        font-size: 12px; \r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNkNBQTZDO0FBQzdDO0lBQ0ksZ0NBQWdDO0lBQ2hDLHlCQUF5QjtJQUN6QixTQUFTO0FBQ2I7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0FBQ2xCO0FBRUE7SUFDSSxVQUFVO0lBQ1YsaUJBQWlCO0lBQ2pCLHlCQUF5QjtJQUN6Qix1Q0FBdUM7SUFDdkMsZ0JBQWdCLEVBQUUsOENBQThDO0FBQ3BFO0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGdDQUFnQztBQUNwQztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjtBQUVBO0lBQ0kseUJBQXlCO0FBQzdCO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsV0FBVztBQUNmO0FBRUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixXQUFXO0FBQ2Y7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUVBLHNCQUFzQjtBQUN0QjtJQUNJO1FBQ0ksV0FBVztRQUNYLGFBQWE7SUFDakI7O0lBRUE7UUFDSSxhQUFhO1FBQ2IsZUFBZSxFQUFFLHVDQUF1QztRQUN4RCxtQkFBbUIsRUFBRSxtQ0FBbUM7SUFDNUQ7O0lBRUE7UUFDSSxpQkFBaUI7UUFDakIsZUFBZSxFQUFFLHVDQUF1QztJQUM1RDtBQUNKIiwiZmlsZSI6InNyYy9hcHAvZW1wbG95ZWUtbGlzdC9lbXBsb3llZS1saXN0LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBBZGQgdGhpcyBDU1MgdG8geW91ciBleHRlcm5hbCBzdHlsZXNoZWV0ICovXHJcbmJvZHkge1xyXG4gICAgZm9udC1mYW1pbHk6ICdBcmlhbCcsIHNhbnMtc2VyaWY7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjhmOWZhO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcblxyXG5oMiB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuLnRhYmxlIHtcclxuICAgIHdpZHRoOiA4MCU7XHJcbiAgICBtYXJnaW46IDIwcHggYXV0bztcclxuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XHJcbiAgICBib3gtc2hhZG93OiAwIDAgMTBweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICBvdmVyZmxvdy14OiBhdXRvOyAvKiBFbmFibGUgaG9yaXpvbnRhbCBzY3JvbGwgb24gc21hbGwgc2NyZWVucyAqL1xyXG59XHJcblxyXG4udGFibGUgdGgsIC50YWJsZSB0ZCB7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGVlMmU2O1xyXG59XHJcblxyXG4udGFibGUgdGgge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcblxyXG4udGFibGUtc3RyaXBlZCB0Ym9keSB0cjpudGgtb2YtdHlwZShvZGQpIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi50YWJsZS1zdHJpcGVkIHRib2R5IHRyOm50aC1vZi10eXBlKGV2ZW4pIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlMmU2ZWE7XHJcbn1cclxuXHJcbi5idG4ge1xyXG4gICAgcGFkZGluZzogOHB4IDEycHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idG4taW5mbyB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTdhMmI4O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5idG4taW5mbzpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTM4NDk2O1xyXG59XHJcblxyXG4uYnRuLWRhbmdlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZGMzNTQ1O1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuXHJcbi5idG4tZGFuZ2VyOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNiZDIxMzA7XHJcbn1cclxuXHJcbi8qIFJlc3BvbnNpdmUgc3R5bGVzICovXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gICAgLnRhYmxlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBvdmVyZmxvdy14OiAwO1xyXG4gICAgfVxyXG5cclxuICAgIC50YWJsZSB0aCwgLnRhYmxlIHRkIHtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDsgLyogQWRqdXN0IGZvbnQgc2l6ZSBmb3Igc21hbGwgc2NyZWVucyAqL1xyXG4gICAgICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7IC8qIFByZXZlbnQgdGV4dCB3cmFwcGluZyBpbiBjZWxscyAqL1xyXG4gICAgfVxyXG5cclxuICAgIC5idG4ge1xyXG4gICAgICAgIHBhZGRpbmc6IDZweCAxMHB4O1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDsgLyogQWRqdXN0IGZvbnQgc2l6ZSBmb3Igc21hbGwgc2NyZWVucyAqL1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeListComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-employee-list',
                templateUrl: './employee-list.component.html',
                styleUrls: ['./employee-list.component.css']
            }]
    }], function () { return [{ type: _employee_service__WEBPACK_IMPORTED_MODULE_1__["EmployeeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/employee.service.ts":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! exports provided: EmployeeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmployeeService", function() { return EmployeeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");



class EmployeeService {
    constructor(httpClient) {
        this.httpClient = httpClient;
        this.baseURL = "http://localhost:8080/api/v1/employees";
    }
    getEmployeesList() {
        return this.httpClient.get(`${this.baseURL}`);
    }
    createEmployee(employee) {
        return this.httpClient.post(`${this.baseURL}`, employee);
    }
    getEmployeeById(id) {
        return this.httpClient.get(`${this.baseURL}/${id}`);
    }
    updateEmployee(id, employee) {
        return this.httpClient.put(`${this.baseURL}/${id}`, employee);
    }
    deleteEmployee(id) {
        return this.httpClient.delete(`${this.baseURL}/${id}`);
    }
}
EmployeeService.ɵfac = function EmployeeService_Factory(t) { return new (t || EmployeeService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); };
EmployeeService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: EmployeeService, factory: EmployeeService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EmployeeService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"] }]; }, null); })();


/***/ }),

/***/ "./src/app/employee.ts":
/*!*****************************!*\
  !*** ./src/app/employee.ts ***!
  \*****************************/
/*! exports provided: Employee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Employee", function() { return Employee; });
class Employee {
}


/***/ }),

/***/ "./src/app/update-employee/update-employee.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/update-employee/update-employee.component.ts ***!
  \**************************************************************/
/*! exports provided: UpdateEmployeeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateEmployeeComponent", function() { return UpdateEmployeeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _employee__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../employee */ "./src/app/employee.ts");
/* harmony import */ var _employee_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");






class UpdateEmployeeComponent {
    constructor(employeeService, route, router) {
        this.employeeService = employeeService;
        this.route = route;
        this.router = router;
        this.employee = new _employee__WEBPACK_IMPORTED_MODULE_1__["Employee"]();
    }
    ngOnInit() {
        this.id = this.route.snapshot.params['id'];
        this.employeeService.getEmployeeById(this.id).subscribe(data => {
            this.employee = data;
        }, error => console.log(error));
    }
    onSubmit() {
        this.employeeService.updateEmployee(this.id, this.employee).subscribe(data => {
            this.goToEmployeeList();
        }, error => console.log(error));
    }
    goToEmployeeList() {
        this.router.navigate(['/employees']);
    }
}
UpdateEmployeeComponent.ɵfac = function UpdateEmployeeComponent_Factory(t) { return new (t || UpdateEmployeeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
UpdateEmployeeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: UpdateEmployeeComponent, selectors: [["app-update-employee"]], decls: 18, vars: 3, consts: [[1, "col-md-6", "offset-md-3"], [3, "ngSubmit"], [1, "form-group"], ["type", "text", "id", "firstName", "name", "firstName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "lastName", "name", "lastName", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "id", "emailId", "name", "emailId", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "submit", 1, "btn", "btn-success"]], template: function UpdateEmployeeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Update Employee ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function UpdateEmployeeComponent_Template_form_ngSubmit_3_listener() { return ctx.onSubmit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " First Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateEmployeeComponent_Template_input_ngModelChange_7_listener($event) { return ctx.employee.firstName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " Last Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateEmployeeComponent_Template_input_ngModelChange_11_listener($event) { return ctx.employee.lastName = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Email Id");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "input", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function UpdateEmployeeComponent_Template_input_ngModelChange_15_listener($event) { return ctx.employee.emailId = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Submit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.employee.firstName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.employee.lastName);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.employee.emailId);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]], styles: ["body[_ngcontent-%COMP%] {\r\n    font-family: 'Arial', sans-serif;\r\n    background-color: #f8f9fa;\r\n}\r\n.col-md-6[_ngcontent-%COMP%] {\r\n    margin-top: 50px;\r\n}\r\nh3[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    color: #007bff;\r\n}\r\nform[_ngcontent-%COMP%] {\r\n    background-color: #ffffff;\r\n    padding: 20px;\r\n    border-radius: 5px;\r\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);\r\n}\r\n.form-group[_ngcontent-%COMP%] {\r\n    margin-bottom: 20px;\r\n}\r\nlabel[_ngcontent-%COMP%] {\r\n    font-weight: bold;\r\n}\r\n.form-control[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    padding: 10px;\r\n    margin-top: 5px;\r\n    margin-bottom: 10px;\r\n    box-sizing: border-box;\r\n    border: 1px solid #ced4da;\r\n    border-radius: 4px;\r\n}\r\n.btn-success[_ngcontent-%COMP%] {\r\n    background-color: #28a745;\r\n    color: #ffffff;\r\n    border: 1px solid #28a745;\r\n}\r\n.btn-success[_ngcontent-%COMP%]:hover {\r\n    background-color: #218838;\r\n    border: 1px solid #218838;\r\n}\r\n\r\n@media (max-width: 768px) {\r\n    .col-md-6[_ngcontent-%COMP%] {\r\n        margin-top: 20px;\r\n    }\r\n\r\n    form[_ngcontent-%COMP%] {\r\n        padding: 15px;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdXBkYXRlLWVtcGxveWVlL3VwZGF0ZS1lbXBsb3llZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDZDQUE2QztBQUM3QztJQUNJLGdDQUFnQztJQUNoQyx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGdCQUFnQjtBQUNwQjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2Isa0JBQWtCO0lBQ2xCLHVDQUF1QztBQUMzQztBQUVBO0lBQ0ksbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxpQkFBaUI7QUFDckI7QUFFQTtJQUNJLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZUFBZTtJQUNmLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLGNBQWM7SUFDZCx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFFQSxzQkFBc0I7QUFDdEI7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjs7SUFFQTtRQUNJLGFBQWE7SUFDakI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS1lbXBsb3llZS91cGRhdGUtZW1wbG95ZWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIEFkZCB0aGlzIENTUyB0byB5b3VyIGV4dGVybmFsIHN0eWxlc2hlZXQgKi9cclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ0FyaWFsJywgc2Fucy1zZXJpZjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbn1cclxuXHJcbi5jb2wtbWQtNiB7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG5oMyB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBjb2xvcjogIzAwN2JmZjtcclxufVxyXG5cclxuZm9ybSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmZmZmO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgIGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmZvcm0tZ3JvdXAge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxubGFiZWwge1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuXHJcbi5mb3JtLWNvbnRyb2wge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgbWFyZ2luLXRvcDogNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG59XHJcblxyXG4uYnRuLXN1Y2Nlc3Mge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzI4YTc0NTtcclxuICAgIGNvbG9yOiAjZmZmZmZmO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgIzI4YTc0NTtcclxufVxyXG5cclxuLmJ0bi1zdWNjZXNzOmhvdmVyIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMTg4Mzg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjMjE4ODM4O1xyXG59XHJcblxyXG4vKiBSZXNwb25zaXZlIHN0eWxlcyAqL1xyXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAgIC5jb2wtbWQtNiB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIH1cclxuXHJcbiAgICBmb3JtIHtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateEmployeeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-update-employee',
                templateUrl: './update-employee.component.html',
                styleUrls: ['./update-employee.component.css']
            }]
    }], function () { return [{ type: _employee_service__WEBPACK_IMPORTED_MODULE_2__["EmployeeService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


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
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\crud\angular\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map