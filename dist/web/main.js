(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

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

/***/ "./src/app/admin/admin.component.css":
/*!*******************************************!*\
  !*** ./src/app/admin/admin.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/admin/admin.component.html":
/*!********************************************!*\
  !*** ./src/app/admin/admin.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar gallery-sub-header\">\r\n  <div class=\"container\">\r\n\t<div>\r\n\t\t\t<p>\r\n\t\t\t  home works!\r\n\t\t\t  {{settings?.website_name}}\r\n\t\t\t</p>\r\n\t\t\t<a routerLink=\"/admin\" routerLinkActive=\"active\">Admin</a>\r\n\t\t\t<a routerLink=\"/demo\" routerLinkActive=\"active\"> demo</a>\r\n\t\t</div>\r\n\t\t\r\n\t  admin works!\r\n\t\r\n\t</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/admin/admin.component.ts":
/*!******************************************!*\
  !*** ./src/app/admin/admin.component.ts ***!
  \******************************************/
/*! exports provided: AdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminComponent", function() { return AdminComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AdminComponent = /** @class */ (function () {
    function AdminComponent() {
    }
    AdminComponent.prototype.ngOnInit = function () {
    };
    AdminComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-admin',
            template: __webpack_require__(/*! ./admin.component.html */ "./src/app/admin/admin.component.html"),
            styles: [__webpack_require__(/*! ./admin.component.css */ "./src/app/admin/admin.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AdminComponent);
    return AdminComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\r\n<nav class=\"navbar navbar-fixed-top\" role=\"navigation\">\r\n\t<div class=\"container\">\r\n\t\t<!--layouts.mobile-menu-->\r\n\t\t<app-mobile-menu></app-mobile-menu>\r\n\t\t<!--layouts.mobile-menu-->\r\n\t\t<!-- Collect the nav links, forms, and other content for toggling -->\r\n\t\t<div class=\"collapse navbar-collapse navbar-ex1-collapse\">\r\n\t\t\t<ul class=\"nav navbar-nav navbar-left nav-desktop\">\r\n\t\t\t\t<li \r\n\t\t\t\t\t[ngClass]=\"{'active': router.url.includes('/'), 'active': router.url.includes('category') }\">\r\n\t\t\t\t\t<a href=\"/\">\r\n\t\t\t\t\t\t<i class=\"fa fa-home\"></i><span>lang.home</span></a>\r\n\t\t\t\t\t<div class=\"nav-border-bottom\"></div>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li [ngClass]=\"{ 'dropdown active':router.url.includes('popular'), 'dropdown': !router.url.includes('popular')}\">\r\n\t\t\t\t\t<a \r\n\t\t\t\t\t\thref=\"#\" \r\n\t\t\t\t\t\tclass=\"dropdown-toggle\" \r\n\t\t\t\t\t\tdata-toggle=\"dropdown\">\r\n\t\t\t\t\t\t<i class=\"fa fa-star\"></i>\r\n\t\t\t\t\t\t<span> lang.popular </span>\r\n\t\t\t\t\t\t<b class=\"caret\"></b>\r\n\t\t\t\t\t\t<div class=\"nav-border-bottom\"></div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<li><a href=\"popular/week\">lang.for_the_week</a></li>\r\n\t\t\t\t\t\t<li><a href=\"popular/month\">lang.for_the_month</a></li>\r\n\t\t\t\t\t\t<li><a href=\"popular/year\">lang.for_the_year</a></li>\r\n\t\t\t\t\t\t<li><a href=\"popular\">lang.all_time</a></li>\r\n\t\t\t\t\t </ul>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"dropdown\">\r\n\t\t\t\t\t<a \r\n\t\t\t\t\t\thref=\"#\" \r\n\t\t\t\t\t\tclass=\"dropdown-toggle categories\" \r\n\t\t\t\t\t\tdata-toggle=\"dropdown\">\r\n\t\t\t\t\t\t<i class=\"fa fa-folder-open\"></i>\r\n\t\t\t\t\t\t<span>lang.categories</span>\r\n\t\t\t\t\t\t<b class=\"caret\"></b>\r\n\t\t\t\t\t\t<div class=\"nav-border-bottom\"></div>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<li *ngFor=\"let category of categories\">\r\n\t\t\t\t\t\t\t<a href=\"category/{{category?.name |lowercase}}\">{{ category?.name }}</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t\t\r\n\t\t\t\t<li *ngIf=\"settings?.pages_in_menu\" [ngClass]=\"{'dropdown active': router.url.includes('pages'),'dropdown': !router.url.includes('pages') }\">\r\n\t\t\t\t\t<a \r\n\t\t\t\t\t\thref=\"#\" \r\n\t\t\t\t\t\tclass=\"dropdown-toggle\" \r\n\t\t\t\t\t\tdata-toggle=\"dropdown\">\r\n\t\t\t\t\t\t<i class=\"fa fa-file-text\"></i>{{ settings?.pages_in_menu_text }}<b class=\"caret\"></b>\r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<li *ngFor=\"let page of pages\">\r\n\t\t\t\t\t\t\t<a href=\"pages/{{page?.url}}\">{{ $page?.title }}</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t<li><a href=\"/random\" class=\"random\"><i class=\"fa fa-random\"></i></a></li>\r\n\t\t\t\t<li *ngIf=\"authService.logIn && settings?.user_registration\">\r\n\t\t\t\t\t<a href=\"/upload\" class=\"upload-btn upload-btn-desktop\">\r\n\t\t\t\t\t\t<i class=\"fa fa-cloud-upload\"></i>lang.upload</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li \r\n\t\t\t\t\t[ngClass]=\"{'active': router.url.includes('signin')}\"\r\n\t\t\t\t\t*ngIf=\"!authService.logIn\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t<a href=\"/signin\">lang.sign_in</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li \r\n\t\t\t\t\t[ngClass]=\"{'active': router.url.includes('signin')}\"\r\n\t\t\t\t\t*ngIf=\"!authService.logIn && settings?.user_registration\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t<a href=\"/signup\">lang.sign_up</a>\r\n\t\t\t\t</li>\r\n\t\t\t\t<li class=\"dropdown\" *ngIf=\"authService.logIn\">\r\n\t\t\t\t\t<a \r\n\t\t\t\t\t\thref=\"#\" \r\n\t\t\t\t\t\tclass=\"user-menu user-menu-desktop dropdown-toggle\" \r\n\t\t\t\t\t\tdata-toggle=\"dropdown\">\r\n\t\t\t\t\t\t<img\r\n\t\t\t\t\t\tsrc='assets/content/uploads/avatars/{{user?.avatar}}'\r\n\t\t\t\t\t\talt=\"{{ user?.username }}\" \r\n\t\t\t\t\t\tclass=\"img-circle\"\r\n\t\t\t\t\t\t/>\r\n\t\t\t\t\t\t<b class=\"caret\"></b>\r\n\t\t\t\t\t\t<div id=\"user-info\">\r\n\t\t\t\t\t\t\t<h4>{{ user?.username.length > 8 ? (user?.username | slice:0:8)+'..':(user?.username) }}</h4>\r\n\t\t\t\t\t\t\t<p>{{ point?.points }} points</p>\r\n\t\t\t\t\t\t</div> \r\n\t\t\t\t\t</a>\r\n\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t<li *ngIf=\"user?.admin == 1\">\r\n\t\t\t\t\t\t\t<a href=\"/admin\" class=\"admin_link_desktop\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-coffee\"></i>lang.admin</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li><a \r\n\t\t\t\t\t\t\thref=\"user/{{user?.username}}\" \r\n\t\t\t\t\t\t\tclass=\"user-profile-link-desktop\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i>lang.my_profile</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t<li>\r\n\t\t\t\t\t\t\t<a href=\"/logout\" id=\"user_logout_desktop\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i> lang.logout</a>\r\n\t\t\t\t\t\t</li>\r\n\t\t\t\t\t</ul>\r\n\t\t\t\t</li>\r\n\t\t\t</ul>\r\n\t\t</div><!-- /.navbar-collapse -->\r\n\t</div><!-- /.container -->\r\n</nav>\r\n\t\r\n<div id=\"main_container\">\t\t\r\n\t<router-outlet></router-outlet>\r\n</div>\r\n<div id=\"footer\">\r\n\t&copy; {{ today | date:'yyyy' }} {{settings?.website_name}}\r\n</div>\r\n\r\n\r\n  \r\n\r\n\r\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./settings.service */ "./src/app/settings.service.ts");
/* harmony import */ var _media_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./media.service */ "./src/app/media.service.ts");
/* harmony import */ var _catergory_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./catergory.service */ "./src/app/catergory.service.ts");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages.service */ "./src/app/pages.service.ts");
/* harmony import */ var _points_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./points.service */ "./src/app/points.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AppComponent = /** @class */ (function () {
    function AppComponent(authService, settingsService, mediaService, catergoryService, pagesService, pointsService, userService, titleService, meta, router) {
        var _this = this;
        this.authService = authService;
        this.settingsService = settingsService;
        this.mediaService = mediaService;
        this.catergoryService = catergoryService;
        this.pagesService = pagesService;
        this.pointsService = pointsService;
        this.userService = userService;
        this.titleService = titleService;
        this.meta = meta;
        this.router = router;
        this.title = 'web';
        this.today = Date.now();
        this.settingsService.getSettings().subscribe(function (res) {
            _this.settings = res[0];
            //console.log(this.settings);
            _this.setTitle(_this.settings.website_name + " - " + _this.settings.website_description);
        });
        if (this.search) {
            this.mediaService.getMediaBySearch(this.search, _environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].num_results_per_page)
                .subscribe(function (data) {
                _this.media = data;
                if (_this.media.title) {
                    _this.setTitle(_this.media.title);
                }
                if (_this.media.title && _this.media.pic_url) {
                    _this.meta.updateTag({ name: 'og:title', content: _this.media.title });
                    _this.meta.updateTag({ name: 'og:url', content: _this.router.url });
                    _this.meta.updateTag({ name: 'og:image', content: '/assets/content/uploads/images' + _this.media.pic_url });
                    _this.meta.updateTag({ name: 'og:type', content: 'website' });
                    _this.meta.updateTag({ name: 'image', content: '/assets/content/uploads/images' + _this.media.pic_url });
                }
                if (_this.media.description) {
                    _this.meta.updateTag({ name: 'og:description', content: _this.media.description });
                    _this.meta.updateTag({ name: 'description', content: _this.media.description });
                }
                if (_this.media.name) {
                    _this.meta.updateTag({ name: 'og:name', content: _this.media.name });
                    _this.meta.updateTag({ name: 'name', content: _this.media.name });
                }
            });
        }
        else {
            this.mediaService.getMedia(_environments_environment__WEBPACK_IMPORTED_MODULE_9__["environment"].num_results_per_page).subscribe(function (data) {
                _this.media = data;
                if (_this.media.title) {
                    _this.setTitle(_this.media.title);
                }
                if (_this.media.title) {
                    _this.setTitle(_this.media.title);
                }
                if (_this.media.title && _this.media.pic_url) {
                    _this.meta.updateTag({ name: 'og:title', content: _this.media.title });
                    _this.meta.updateTag({ name: 'og:url', content: _this.router.url });
                    _this.meta.updateTag({ name: 'og:image', content: '/assets/content/uploads/images' + _this.media.pic_url });
                    _this.meta.updateTag({ name: 'og:type', content: 'website' });
                    _this.meta.updateTag({ name: 'image', content: '/assets/content/uploads/images' + _this.media.pic_url });
                }
                if (_this.media.description) {
                    _this.meta.updateTag({ name: 'og:description', content: _this.media.description });
                    _this.meta.updateTag({ name: 'description', content: _this.media.description });
                }
                if (_this.media.name) {
                    _this.meta.updateTag({ name: 'og:name', content: _this.media.name });
                    _this.meta.updateTag({ name: 'name', content: _this.media.name });
                }
            });
        }
        this.catergoryService.getCatergory().subscribe(function (data) {
            _this.categories = data;
            //console.log(this.categories);
        });
        this.pagesService.getPage().subscribe(function (data) {
            _this.pages = data;
        });
        var email = 'admin@admin.com';
        this.userService.getUserByEmail(email).subscribe(function (data) {
            _this.user = data[0];
            //console.log(this.user);
            if (_this.user) {
                _this.pointsService.getPointByUserId(_this.user.id).subscribe(function (data) {
                    _this.point = data[0];
                });
            }
        });
        this.meta.updateTag({ name: 'viewport', content: 'initial-scale=1' });
    }
    AppComponent.prototype.setTitle = function (title) {
        this.titleService.setTitle(title);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], AppComponent.prototype, "search", void 0);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
                _settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
                _media_service__WEBPACK_IMPORTED_MODULE_3__["MediaService"],
                _catergory_service__WEBPACK_IMPORTED_MODULE_4__["CatergoryService"],
                _pages_service__WEBPACK_IMPORTED_MODULE_5__["PagesService"],
                _points_service__WEBPACK_IMPORTED_MODULE_6__["PointsService"],
                _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"]
            ]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_2__["SettingsService"],
            _media_service__WEBPACK_IMPORTED_MODULE_3__["MediaService"],
            _catergory_service__WEBPACK_IMPORTED_MODULE_4__["CatergoryService"],
            _pages_service__WEBPACK_IMPORTED_MODULE_5__["PagesService"],
            _points_service__WEBPACK_IMPORTED_MODULE_6__["PointsService"],
            _user_service__WEBPACK_IMPORTED_MODULE_7__["UserService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Title"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["Meta"],
            _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/demo/demo.component.ts");
/* harmony import */ var _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/admin.component */ "./src/app/admin/admin.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./mobile-menu/mobile-menu.component */ "./src/app/mobile-menu/mobile-menu.component.ts");
/* harmony import */ var _home_social_home_social_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./home-social/home-social.component */ "./src/app/home-social/home-social.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// duong add new component







var appRoutes = [
    { path: '', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], data: { title: 'Kiem Tien Online' } },
    { path: 'home', component: _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"], data: { title: 'Kiem Tien Online' } },
    { path: 'admin', component: _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"], children: [], data: { title: 'Kiem Tien Online' } },
    { path: 'demo', component: _demo_demo_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"], data: { title: 'Kiem Tien Online' } },
    { path: '',
        redirectTo: '',
        pathMatch: 'full',
        data: { title: 'Kiem Tien Online' }
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                _demo_demo_component__WEBPACK_IMPORTED_MODULE_7__["DemoComponent"],
                _admin_admin_component__WEBPACK_IMPORTED_MODULE_8__["AdminComponent"],
                _mobile_menu_mobile_menu_component__WEBPACK_IMPORTED_MODULE_10__["MobileMenuComponent"],
                _home_social_home_social_component__WEBPACK_IMPORTED_MODULE_11__["HomeSocialComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                ),
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
            ],
            providers: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["Title"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/auth.service.ts":
/*!*********************************!*\
  !*** ./src/app/auth.service.ts ***!
  \*********************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
        'Content-Type': 'application/json',
        "Authorization": "5p53iN9yd3"
    })
};
var AuthService = /** @class */ (function () {
    function AuthService(http, router) {
        this.http = http;
        this.router = router;
    }
    AuthService.prototype.login = function (email, password) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/';
        localStorage.setItem('auth_token', 'token');
    };
    AuthService.prototype.logout = function () {
        localStorage.removeItem('auth_token');
    };
    Object.defineProperty(AuthService.prototype, "logIn", {
        get: function () {
            return (localStorage.getItem('auth_token') !== null);
        },
        enumerable: true,
        configurable: true
    });
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/categories.service.ts":
/*!***************************************!*\
  !*** ./src/app/categories.service.ts ***!
  \***************************************/
/*! exports provided: CategoriesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoriesService", function() { return CategoriesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CategoriesService = /** @class */ (function () {
    function CategoriesService(http) {
        this.http = http;
    }
    CategoriesService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    CategoriesService.prototype.getCatergories = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/get-categories';
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set("Authorization", "5p53iN9yd3");
        var options = {
            headers: httpHeaders
        };
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData));
    };
    CategoriesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CategoriesService);
    return CategoriesService;
}());



/***/ }),

/***/ "./src/app/catergory.service.ts":
/*!**************************************!*\
  !*** ./src/app/catergory.service.ts ***!
  \**************************************/
/*! exports provided: CatergoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatergoryService", function() { return CatergoryService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        "Authorization": "5p53iN9yd3"
    })
};
var CatergoryService = /** @class */ (function () {
    function CatergoryService(http) {
        this.http = http;
    }
    CatergoryService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    CatergoryService.prototype.getCatergory = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/get-catergory';
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set("Authorization", "5p53iN9yd3");
        var options = {
            headers: httpHeaders
        };
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData));
    };
    CatergoryService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], CatergoryService);
    return CatergoryService;
}());



/***/ }),

/***/ "./src/app/demo/demo.component.css":
/*!*****************************************!*\
  !*** ./src/app/demo/demo.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/demo/demo.component.html":
/*!******************************************!*\
  !*** ./src/app/demo/demo.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar gallery-sub-header\">\r\n  <div class=\"container\">\r\n IP Address: {{ip}}\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/demo/demo.component.ts":
/*!****************************************!*\
  !*** ./src/app/demo/demo.component.ts ***!
  \****************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ip_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../ip.service */ "./src/app/ip.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoComponent = /** @class */ (function () {
    function DemoComponent(ipService) {
        this.ipService = ipService;
    }
    DemoComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ipService.getIp().subscribe(function (data) {
            _this.ip = data['ip'];
            console.log(_this.ip);
        });
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.css */ "./src/app/demo/demo.component.css")],
            providers: [_ip_service__WEBPACK_IMPORTED_MODULE_1__["IpService"]]
        }),
        __metadata("design:paramtypes", [_ip_service__WEBPACK_IMPORTED_MODULE_1__["IpService"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/home-social/home-social.component.css":
/*!*******************************************************!*\
  !*** ./src/app/home-social/home-social.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home-social/home-social.component.html":
/*!********************************************************!*\
  !*** ./src/app/home-social/home-social.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div \r\n\tclass=\"twitter-follow pull-left\"\r\n\t*ngIf=\"settings?.twitter_page_id\" #divtwitter>\r\n\t<a \r\n\t\thref=\"https://twitter.com/{{ settings?.twitter_page_id }}\" \r\n\t\tclass=\"twitter-follow-button\" \r\n\t\tdata-show-count=\"false\">\r\n\t\tfollow_at {{ settings?.twitter_page_id }}</a>\t\r\n</div>\r\n\r\n<div \r\n\tclass=\"facebook-like pull-left\"\r\n\t*ngIf=\"settings?.facebook_page_id\" #divfacebook>\r\n\t<div \r\n\t\tclass=\"fb-like\" \r\n\t\tdata-href=\"https://developers.facebook.com/docs/plugins/\" \r\n\t\tdata-layout=\"button\" \r\n\t\tdata-action=\"like\" \r\n\t\tdata-size=\"small\" \r\n\t\tdata-show-faces=\"false\" \r\n\t\tdata-share=\"false\"></div>\r\n\t<div id=\"fb-root\"></div>\t\r\n</div>\r\n\r\n<div class=\"google-follow pull-left\" \r\n\t*ngIf=\"settings?.google_page_id\" #divgoogle>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/home-social/home-social.component.ts":
/*!******************************************************!*\
  !*** ./src/app/home-social/home-social.component.ts ***!
  \******************************************************/
/*! exports provided: HomeSocialComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeSocialComponent", function() { return HomeSocialComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../settings.service */ "./src/app/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeSocialComponent = /** @class */ (function () {
    function HomeSocialComponent(settingsService, renderer, el) {
        this.settingsService = settingsService;
        this.renderer = renderer;
        this.el = el;
    }
    HomeSocialComponent.prototype.ngOnInit = function () {
    };
    HomeSocialComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.settingsService.getSettings().subscribe(function (data) {
            _this.settings = data[0];
            //console.log(this.settings);
            _this.loadScriptTwitter();
            _this.loadScriptFacebook();
            _this.loadScriptGoogle();
        });
    };
    HomeSocialComponent.prototype.loadScriptTwitter = function () {
        var _this = this;
        this.divtwitter.changes.subscribe(function (comps) {
            var script = _this.renderer.createElement('script');
            script.innerHTML = '';
            script.src = 'https://platform.twitter.com/widgets.js';
            script.async = true;
            script.defer = true;
            script.charset = "utf-8";
            var text = _this.renderer.createText('');
            _this.renderer.appendChild(script, text);
            _this.renderer.appendChild(comps.first.nativeElement, script);
        });
    };
    HomeSocialComponent.prototype.loadScriptFacebook = function () {
        var _this = this;
        this.divfacebook.changes.subscribe(function (comps) {
            var script = _this.renderer.createElement('script');
            script.async = true;
            script.defer = true;
            script.src = 'assets/js/facebook-like.js';
            script.charset = "utf-8";
            var text = _this.renderer.createText('');
            _this.renderer.appendChild(script, text);
            _this.renderer.appendChild(comps.first.nativeElement, script);
            //this.renderer.appendChild(this.divfacebook.first.nativeElement, script);
        });
    };
    HomeSocialComponent.prototype.loadScriptGoogle = function () {
        var _this = this;
        this.divgoogle.changes.subscribe(function (comps) {
            var script = _this.renderer.createElement('script');
            script.async = true;
            script.defer = true;
            script.src = 'https://apis.google.com/js/platform.js';
            script.charset = "utf-8";
            var text = _this.renderer.createText('');
            //this.renderer.appendChild(script, text);
            _this.renderer.appendChild(comps.first.nativeElement, script);
            var div = _this.renderer.createElement('div');
            _this.renderer.addClass(div, 'g-follow');
            _this.renderer.setAttribute(div, 'data-annotation', "bubble");
            _this.renderer.setAttribute(div, 'data-height', "20");
            _this.renderer.setAttribute(div, 'data-rel', "publisher");
            //this.renderer.setAttribute(div, 'data-href', "//plus.google.com/u/0/106287962206400872348");
            _this.renderer.setAttribute(div, 'data-href', "//plus.google.com/u/0/102950176604279621166");
            //this.renderer.setAttribute(div, 'data-href', "//plus.google.com/envato");
            _this.renderer.appendChild(comps.first.nativeElement, div);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('divtwitter'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], HomeSocialComponent.prototype, "divtwitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('divfacebook'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], HomeSocialComponent.prototype, "divfacebook", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('divgoogle'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], HomeSocialComponent.prototype, "divgoogle", void 0);
    HomeSocialComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-social',
            template: __webpack_require__(/*! ./home-social.component.html */ "./src/app/home-social/home-social.component.html"),
            styles: [__webpack_require__(/*! ./home-social.component.css */ "./src/app/home-social/home-social.component.css")],
            providers: [_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]]
        }),
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[app-home-social]'
        }),
        __metadata("design:paramtypes", [_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HomeSocialComponent);
    return HomeSocialComponent;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<style type=\"text/css\" *ngIf=\"settings?.infinite_scroll\">\r\n\tdiv.pagination{\r\n\t\tvisibility:hidden;\r\n\t}\r\n</style>\r\n<div class=\"navbar gallery-sub-header\">\r\n\t<div class=\"container\">\r\n\t\t<div class=\"pull-left desc-follow\">\r\n\t\t\t<p class=\"website_desc pull-left\">{{ settings?.website_description }}</p>\r\n\t\t\t<app-home-social></app-home-social>\r\n\t\t</div>\r\n\t\t\r\n\t\t<div class=\"pull-right mobile-pull-right\" #divmobilepullright>\r\n\t\t\t<form \r\n\t\t\t\tclass=\"navbar-form search-form col-xs-12\" \r\n\t\t\t\trole=\"search\"\r\n\t\t\t\tstyle=\"margin:0px; padding-top:4px;\" \r\n\t\t\t\taction=\"/admin\" method=\"GET\">\r\n\t\t\t\t<div class=\"form-group\">\r\n\t\t\t\t\t<input \r\n\t\t\t\t\t\ttype=\"text\" \r\n\t\t\t\t\t\tclass=\"form-control\" \r\n\t\t\t\t\t\tname=\"search\" \r\n\t\t\t\t\t\tplaceholder=\"lang.search\" \r\n\t\t\t\t\t\t[(ngModel)]=\"search\"\r\n\t\t\t\t\t\tstyle=\"-webkit-border-radius: 20px; -moz-border-radius: 20px; border-radius: 20px; height:30px;\">\r\n\t            </div>\r\n\t\t\t</form>\t\t\r\n\t\t\t<div class=\"search_settings\">\r\n\t\t\t\t<i class=\"fa fa-search\"></i>\r\n\t\t\t\t<i \r\n\t\t\t\tclass=\"fa fa-cog option-sidebar-toggle\">\r\n\t\t\t\t\t<span class=\"cog-arrow-up\">&#9650;</span>\r\n\t\t\t\t\t<span class=\"cog-arrow-down\">&#9660;</span>\r\n\t\t\t\t</i>\r\n\t\t\t</div>\t\r\n\t\t</div>\r\n\t</div>\r\n</div>\r\n\r\n<h4 class=\"container search-text\" *ngIf=\"search\">{{ search }}</h4>\r\n<style type=\"text/css\" *ngIf=\"search\">.main_home_container{ padding-top:0px; }</style>\r\n\r\n<div class=\"container main_home_container main_home\">\r\n\t<div class=\"col-md-8 col-lg-8\" style=\"display:block; clear:both; margin:0px auto; padding:0px; padding-bottom:70px;\">\r\n\t</div>\r\n</div>\t\r\n\t\r\n<a routerLink=\"/admin\" routerLinkActive=\"active\">Admin</a>\r\n<a routerLink=\"/demo\" routerLinkActive=\"active\"> demo</a>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../settings.service */ "./src/app/settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = /** @class */ (function () {
    function HomeComponent(settingsService, renderer, el) {
        this.settingsService = settingsService;
        this.renderer = renderer;
        this.el = el;
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.settingsService.getSettings().subscribe(function (data) {
            _this.settings = data[0];
        });
    };
    HomeComponent.prototype.ngAfterViewInit = function () {
        this.loadScript();
    };
    HomeComponent.prototype.loadScript = function () {
        //console.log(this.divmobilepullright);
        //this.divmobilepullright.changes.subscribe((comps: QueryList<ElementRef>) =>
        //{
        var script = this.renderer.createElement('script');
        script.innerHTML = '';
        script.src = 'assets/js/mobilepullright.js';
        script.async = true;
        script.defer = true;
        script.charset = "utf-8";
        var text = this.renderer.createText('');
        this.renderer.appendChild(script, text);
        //console.log(script);
        this.renderer.appendChild(this.divmobilepullright.first.nativeElement, script);
        //});
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], HomeComponent.prototype, "search", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChildren"])('divmobilepullright'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["QueryList"])
    ], HomeComponent.prototype, "divmobilepullright", void 0);
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")],
            providers: [_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"]]
        }),
        __metadata("design:paramtypes", [_settings_service__WEBPACK_IMPORTED_MODULE_1__["SettingsService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/ip.service.ts":
/*!*******************************!*\
  !*** ./src/app/ip.service.ts ***!
  \*******************************/
/*! exports provided: IpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IpService", function() { return IpService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url;
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        "Authorization": "5p53iN9yd3"
    })
};
var IpService = /** @class */ (function () {
    function IpService(http) {
        this.http = http;
    }
    IpService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    IpService.prototype.getIp = function () {
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData));
    };
    IpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], IpService);
    return IpService;
}());



/***/ }),

/***/ "./src/app/media.service.ts":
/*!**********************************!*\
  !*** ./src/app/media.service.ts ***!
  \**********************************/
/*! exports provided: MediaService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediaService", function() { return MediaService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        "Authorization": "5p53iN9yd3"
    })
};
var MediaService = /** @class */ (function () {
    function MediaService(http) {
        this.http = http;
    }
    MediaService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    MediaService.prototype.getMediaBySearch = function (search, num_results_per_page) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/get-media-by-search';
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set("Authorization", "5p53iN9yd3");
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('search', search)
            .set('num_results_per_page', num_results_per_page);
        var options = {
            headers: httpHeaders,
            params: httpParams
        };
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData));
    };
    MediaService.prototype.getMedia = function (num_results_per_page) {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/get-media';
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set("Authorization", "5p53iN9yd3");
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('num_results_per_page', num_results_per_page);
        var options = {
            headers: httpHeaders,
            params: httpParams
        };
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData));
    };
    MediaService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MediaService);
    return MediaService;
}());



/***/ }),

/***/ "./src/app/mobile-menu/mobile-menu.component.css":
/*!*******************************************************!*\
  !*** ./src/app/mobile-menu/mobile-menu.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mobile-menu/mobile-menu.component.html":
/*!********************************************************!*\
  !*** ./src/app/mobile-menu/mobile-menu.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-header\">\r\n\t\t\t<button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\r\n\t\t\t\t<span class=\"sr-only\">lang.toggle_navigation</span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t\t<span class=\"icon-bar\"></span>\r\n\t\t\t</button>\r\n\t\t\t<a \r\n\t\t\t\tclass=\"navbar-brand logo\" \r\n\t\t\t\thref=\"/\">\r\n\t\t\t\t<img \r\n\t\t\t\t\tsrc=\"assets\\content\\uploads\\settings\\logo.png\" \r\n\t\t\t\t\tstyle=\"height:35px; width:auto;\" />\r\n\t\t\t</a>\r\n\t\t\t<div class=\"mobile-menu-toggle\"><i class=\"fa fa-bars\"></i></div>\t\t\r\n\t\t\t<div class=\"mobile-menu\"> \r\n\t\t\t\t<a \r\n\t\t\t\t\trouterLink=\"/user/{{ user?.username }}\" routerLinkActive=\"active\" \r\n\t\t\t\t\tclass=\"usr-avatar\"\r\n\t\t\t\t\t*ngIf=\"authService.logIn\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t\t<img\r\n\t\t\t\t\t\tsrc='assets/content/uploads/avatars/{{user?.avatar}}'\r\n\t\t\t\t\t\talt=\"{{ user?.username }}\" \r\n\t\t\t\t\t\tclass=\"img-circle user-avatar-large\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t</a>\r\n\t\t\t\t<a\r\n\t\t\t\t\trouterLink=\"/user/{{ user?.username }}\" routerLinkActive=\"active\" \r\n\t\t\t\t\tclass=\"username\"\r\n\t\t\t\t\t*ngIf=\"authService.logIn\"\r\n\t\t\t\t\t>\r\n\t\t\t\t\t{{ user?.username.length > 14 ? (user?.username | slice:0:14)+'..':(user?.username) }}\r\n\t\t\t\t</a>\r\n\t\t\t\t\r\n\t\t\t\t<p class=\"points\" *ngIf=\"authService.logIn\">\r\n\t\t\t\t\t<i class=\"fa fa-star\" style=\"color:gold\"></i>{{ point?.points }} points</p>\r\n\t\t\t\t\r\n\t\t\t\t<ul>\t\r\n\t\t\t\t\t<li class=\"active\">\r\n\t\t\t\t\t\t<a href=\"/\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-home\"></i> lang.home </a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"dropdown\">\r\n\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\thref=\"#\" \r\n\t\t\t\t\t\t\tclass=\"dropdown-toggle\" \r\n\t\t\t\t\t\t\tdata-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-star\"></i> lang.popular <b class=\"caret\"></b></a>\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t<li><a href=\"popular/week\">lang.for_the_week</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"popular/month\">lang.for_the_month</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"popular/year\">lang.for_the_year</a></li>\r\n\t\t\t\t\t\t\t<li><a href=\"popular\">lang.all_time</a></li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<li class=\"dropdown\">\r\n\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\thref=\"#\" \r\n\t\t\t\t\t\t\tclass=\"dropdown-toggle categories\" \r\n\t\t\t\t\t\t\tdata-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-folder-open\"></i> lang.categories <b class=\"caret\"></b></a>\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t<li *ngFor=\"let category of categories\">\r\n\t\t\t\t\t\t\t\t<a href=\"category/{{category?.name |lowercase}}\">{{ category?.name }}</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t  </ul>\t\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<li class=\"dropdown\" *ngIf=\"settings?.pages_in_menu\">\r\n\t\t\t\t\t\t<a href=\"#\" class=\"dropdown-toggle\" data-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-file-text\"></i> {{ settings?.pages_in_menu_text }} <b class=\"caret\"></b></a>\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t<li *ngFor=\"let page of pages\">\r\n\t\t\t\t\t\t\t\t<a href=\"pages/{{page?.url}}\">{{ $page?.title }}</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\t\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t\r\n\t\t\t\t\t<li>\r\n\t\t\t\t\t\t<a href=\"/random\"><i class=\"fa fa-random\"></i> lang.random</a></li>\r\n\t\t\t\t</ul>\r\n\t\t\t\t<ul class=\"nav navbar-nav navbar-right\">\r\n\t\t\t\t\t<li \r\n\t\t\t\t\t\t[ngClass]=\"{'active': router.url.includes('signin')}\"\r\n\t\t\t\t\t\t*ngIf=\"!authService.logIn\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t<a href=\"/signin\">lang.sign_in</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li \r\n\t\t\t\t\t\t[ngClass]=\"{'active': router.url.includes('signin')}\"\r\n\t\t\t\t\t\t*ngIf=\"!authService.logIn && settings?.user_registration\"\r\n\t\t\t\t\t\t>\r\n\t\t\t\t\t\t<a href=\"/signup\">lang.sign_up</a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li class=\"dropdown\" *ngIf=\"authService.logIn\">\r\n\t\t\t\t\t\t<a \r\n\t\t\t\t\t\t\thref=\"#\" \r\n\t\t\t\t\t\t\tclass=\"user-menu dropdown-toggle\" \r\n\t\t\t\t\t\t\tdata-toggle=\"dropdown\">\r\n\t\t\t\t\t\t\t<b class=\"caret\"></b>\r\n\t\t\t\t\t\t\t<div id=\"user-info\">\r\n\t\t\t\t\t\t\t\t<h4><i class=\"fa fa-gear\"></i> lang.settings</h4>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t<ul class=\"dropdown-menu\">\r\n\t\t\t\t\t\t\t<li *ngIf=\"user?.admin == 1\">\r\n\t\t\t\t\t\t\t\t<a href=\"/admin\" class=\"admin_link_mobile\">\r\n\t\t\t\t\t\t\t\t\t<i class=\"fa fa-coffee\"></i> lang.admin </a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li><a href=\"/user/{{user?.username}}\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-user\"></i> lang.my_profile</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t\t<li><a href=\"/logout\" id=\"user_logout_mobile\">\r\n\t\t\t\t\t\t\t\t<i class=\"fa fa-power-off\"></i> lang.logout</a>\r\n\t\t\t\t\t\t\t</li>\r\n\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t\t<li *ngIf=\"authService.logIn && settings?.user_registration\">\r\n\t\t\t\t\t\t<a href=\"/upload\" class=\"upload-btn\">\r\n\t\t\t\t\t\t\t<i class=\"fa fa-cloud-upload\"></i> lang.upload </a>\r\n\t\t\t\t\t</li>\r\n\t\t\t\t</ul>\r\n\t\t\t</div>\r\n</div>\r\n\t\t\t\t\t\t\r\n              \r\n\t\t\r\n\t\t\t\r\n     \r\n     \t\t\r\n\t\r\n"

/***/ }),

/***/ "./src/app/mobile-menu/mobile-menu.component.ts":
/*!******************************************************!*\
  !*** ./src/app/mobile-menu/mobile-menu.component.ts ***!
  \******************************************************/
/*! exports provided: MobileMenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MobileMenuComponent", function() { return MobileMenuComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../auth.service */ "./src/app/auth.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _points_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../points.service */ "./src/app/points.service.ts");
/* harmony import */ var _categories_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../categories.service */ "./src/app/categories.service.ts");
/* harmony import */ var _settings_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../settings.service */ "./src/app/settings.service.ts");
/* harmony import */ var _pages_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../pages.service */ "./src/app/pages.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var MobileMenuComponent = /** @class */ (function () {
    function MobileMenuComponent(authService, userService, pointsService, categoriesService, settingsService, pagesService, router) {
        this.authService = authService;
        this.userService = userService;
        this.pointsService = pointsService;
        this.categoriesService = categoriesService;
        this.settingsService = settingsService;
        this.pagesService = pagesService;
        this.router = router;
    }
    MobileMenuComponent.prototype.ngOnInit = function () {
        var _this = this;
        var email = 'admin@admin.com';
        this.userService.getUserByEmail(email).subscribe(function (data) {
            _this.user = data[0];
            //console.log(this.user);
            if (_this.user) {
                _this.pointsService.getPointByUserId(_this.user.id).subscribe(function (data) {
                    _this.point = data[0];
                    //console.log(this.point);
                    //console.log(this.router.url);
                });
                _this.categoriesService.getCatergories().subscribe(function (data) {
                    //console.log(data);
                    _this.categories = data;
                });
                _this.settingsService.getSettings().subscribe(function (res) {
                    _this.settings = res[0];
                    //console.log(this.settings);
                });
                _this.pagesService.getPage().subscribe(function (res) {
                    _this.pages = res;
                    //console.log(this.pages);
                });
            }
        });
    };
    MobileMenuComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mobile-menu',
            template: __webpack_require__(/*! ./mobile-menu.component.html */ "./src/app/mobile-menu/mobile-menu.component.html"),
            styles: [__webpack_require__(/*! ./mobile-menu.component.css */ "./src/app/mobile-menu/mobile-menu.component.css")],
            providers: [
                _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
                _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
                _points_service__WEBPACK_IMPORTED_MODULE_3__["PointsService"]
            ]
        }),
        __metadata("design:paramtypes", [_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"],
            _user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"],
            _points_service__WEBPACK_IMPORTED_MODULE_3__["PointsService"],
            _categories_service__WEBPACK_IMPORTED_MODULE_4__["CategoriesService"],
            _settings_service__WEBPACK_IMPORTED_MODULE_5__["SettingsService"],
            _pages_service__WEBPACK_IMPORTED_MODULE_6__["PagesService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], MobileMenuComponent);
    return MobileMenuComponent;
}());



/***/ }),

/***/ "./src/app/pages.service.ts":
/*!**********************************!*\
  !*** ./src/app/pages.service.ts ***!
  \**********************************/
/*! exports provided: PagesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagesService", function() { return PagesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        "Authorization": "5p53iN9yd3"
    })
};
var PagesService = /** @class */ (function () {
    function PagesService(http) {
        this.http = http;
    }
    PagesService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    PagesService.prototype.getPage = function () {
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/get-page';
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set("Authorization", "5p53iN9yd3");
        var options = {
            headers: httpHeaders
        };
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData));
    };
    PagesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PagesService);
    return PagesService;
}());



/***/ }),

/***/ "./src/app/points.service.ts":
/*!***********************************!*\
  !*** ./src/app/points.service.ts ***!
  \***********************************/
/*! exports provided: PointsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointsService", function() { return PointsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PointsService = /** @class */ (function () {
    function PointsService(http) {
        this.http = http;
    }
    PointsService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    PointsService.prototype.getPointByUserId = function (userId) {
        var auth_token = localStorage.getItem('auth_token');
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/get-point-by-userid';
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set("Authorization", "5p53iN9yd3");
        //console.log(userId);
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('userId', userId)
            .set('auth_token', auth_token);
        var options = {
            headers: httpHeaders,
            params: httpParams
        };
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData));
    };
    PointsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], PointsService);
    return PointsService;
}());



/***/ }),

/***/ "./src/app/settings.service.ts":
/*!*************************************!*\
  !*** ./src/app/settings.service.ts ***!
  \*************************************/
/*! exports provided: SettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingsService", function() { return SettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/get-settings';
var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'application/json',
        "Authorization": "5p53iN9yd3"
    })
};
var SettingsService = /** @class */ (function () {
    function SettingsService(http) {
        this.http = http;
    }
    SettingsService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    SettingsService.prototype.getSettings = function () {
        return this.http.get(url, httpOptions).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData));
    };
    SettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SettingsService);
    return SettingsService;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../environments/environment */ "./src/environments/environment.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.extractData = function (res) {
        var body = res;
        return body || {};
    };
    UserService.prototype.getUserByEmail = function (email) {
        var auth_token = localStorage.getItem('auth_token');
        var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].api_url + '/get-user-by-email';
        var httpHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Content-Type', 'application/json')
            .set("Authorization", "5p53iN9yd3");
        var httpParams = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()
            .set('email', email)
            .set('auth_token', auth_token);
        var options = {
            headers: httpHeaders,
            params: httpParams
        };
        return this.http.get(url, options).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.extractData));
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



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
var environment = {
    production: false,
    num_results_per_page: 15,
    api_url: 'https://kiemtienonline.me/api'
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\lemin\Desktop\demo\web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map