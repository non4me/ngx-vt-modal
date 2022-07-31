(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-vt-modal', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global["ngx-vt-modal"] = {}, global.ng.core, global.ng.common));
})(this, (function (exports, i0, i2) { 'use strict';

    function _interopNamespace(e) {
        if (e && e.__esModule) return e;
        var n = Object.create(null);
        if (e) {
            Object.keys(e).forEach(function (k) {
                if (k !== 'default') {
                    var d = Object.getOwnPropertyDescriptor(e, k);
                    Object.defineProperty(n, k, d.get ? d : {
                        enumerable: true,
                        get: function () { return e[k]; }
                    });
                }
            });
        }
        n["default"] = e;
        return Object.freeze(n);
    }

    var i0__namespace = /*#__PURE__*/_interopNamespace(i0);
    var i2__namespace = /*#__PURE__*/_interopNamespace(i2);

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (Object.prototype.hasOwnProperty.call(b, p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    var __assign = function () {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p))
                        t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };
    function __rest(s, e) {
        var t = {};
        for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
                t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }
    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
            r = Reflect.decorate(decorators, target, key, desc);
        else
            for (var i = decorators.length - 1; i >= 0; i--)
                if (d = decorators[i])
                    r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }
    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); };
    }
    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
            return Reflect.metadata(metadataKey, metadataValue);
    }
    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try {
                step(generator.next(value));
            }
            catch (e) {
                reject(e);
            } }
            function rejected(value) { try {
                step(generator["throw"](value));
            }
            catch (e) {
                reject(e);
            } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }
    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function () { if (t[0] & 1)
                throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f)
                throw new TypeError("Generator is already executing.");
            while (_)
                try {
                    if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                        return t;
                    if (y = 0, t)
                        op = [op[0] & 2, t.value];
                    switch (op[0]) {
                        case 0:
                        case 1:
                            t = op;
                            break;
                        case 4:
                            _.label++;
                            return { value: op[1], done: false };
                        case 5:
                            _.label++;
                            y = op[1];
                            op = [0];
                            continue;
                        case 7:
                            op = _.ops.pop();
                            _.trys.pop();
                            continue;
                        default:
                            if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                _ = 0;
                                continue;
                            }
                            if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                _.label = op[1];
                                break;
                            }
                            if (op[0] === 6 && _.label < t[1]) {
                                _.label = t[1];
                                t = op;
                                break;
                            }
                            if (t && _.label < t[2]) {
                                _.label = t[2];
                                _.ops.push(op);
                                break;
                            }
                            if (t[2])
                                _.ops.pop();
                            _.trys.pop();
                            continue;
                    }
                    op = body.call(thisArg, _);
                }
                catch (e) {
                    op = [6, e];
                    y = 0;
                }
                finally {
                    f = t = 0;
                }
            if (op[0] & 5)
                throw op[1];
            return { value: op[0] ? op[1] : void 0, done: true };
        }
    }
    var __createBinding = Object.create ? (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        var desc = Object.getOwnPropertyDescriptor(m, k);
        if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
            desc = { enumerable: true, get: function () { return m[k]; } };
        }
        Object.defineProperty(o, k2, desc);
    }) : (function (o, m, k, k2) {
        if (k2 === undefined)
            k2 = k;
        o[k2] = m[k];
    });
    function __exportStar(m, o) {
        for (var p in m)
            if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p))
                __createBinding(o, m, p);
    }
    function __values(o) {
        var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
        if (m)
            return m.call(o);
        if (o && typeof o.length === "number")
            return {
                next: function () {
                    if (o && i >= o.length)
                        o = void 0;
                    return { value: o && o[i++], done: !o };
                }
            };
        throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }
    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m)
            return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                ar.push(r.value);
        }
        catch (error) {
            e = { error: error };
        }
        finally {
            try {
                if (r && !r.done && (m = i["return"]))
                    m.call(i);
            }
            finally {
                if (e)
                    throw e.error;
            }
        }
        return ar;
    }
    /** @deprecated */
    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }
    /** @deprecated */
    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++)
            s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }
    function __spreadArray(to, from, pack) {
        if (pack || arguments.length === 2)
            for (var i = 0, l = from.length, ar; i < l; i++) {
                if (ar || !(i in from)) {
                    if (!ar)
                        ar = Array.prototype.slice.call(from, 0, i);
                    ar[i] = from[i];
                }
            }
        return to.concat(ar || Array.prototype.slice.call(from));
    }
    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }
    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n])
            i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try {
            step(g[n](v));
        }
        catch (e) {
            settle(q[0][3], e);
        } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length)
            resume(q[0][0], q[0][1]); }
    }
    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }
    function __asyncValues(o) {
        if (!Symbol.asyncIterator)
            throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
    }
    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) {
            Object.defineProperty(cooked, "raw", { value: raw });
        }
        else {
            cooked.raw = raw;
        }
        return cooked;
    }
    ;
    var __setModuleDefault = Object.create ? (function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
    }) : function (o, v) {
        o["default"] = v;
    };
    function __importStar(mod) {
        if (mod && mod.__esModule)
            return mod;
        var result = {};
        if (mod != null)
            for (var k in mod)
                if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                    __createBinding(result, mod, k);
        __setModuleDefault(result, mod);
        return result;
    }
    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }
    function __classPrivateFieldGet(receiver, state, kind, f) {
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a getter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot read private member from an object whose class did not declare it");
        return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
    }
    function __classPrivateFieldSet(receiver, state, value, kind, f) {
        if (kind === "m")
            throw new TypeError("Private method is not writable");
        if (kind === "a" && !f)
            throw new TypeError("Private accessor was defined without a setter");
        if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver))
            throw new TypeError("Cannot write private member to an object whose class did not declare it");
        return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
    }
    function __classPrivateFieldIn(state, receiver) {
        if (receiver === null || (typeof receiver !== "object" && typeof receiver !== "function"))
            throw new TypeError("Cannot use 'in' operator on non-object");
        return typeof state === "function" ? receiver === state : state.has(receiver);
    }

    exports.NgxVtModalCloseStatus = void 0;
    (function (NgxVtModalCloseStatus) {
        NgxVtModalCloseStatus["ESC"] = "esc";
        NgxVtModalCloseStatus["BACKDROP"] = "backdrop";
        NgxVtModalCloseStatus["BUTTON"] = "button";
    })(exports.NgxVtModalCloseStatus || (exports.NgxVtModalCloseStatus = {}));

    exports.NgxVtModalSize = void 0;
    (function (NgxVtModalSize) {
        NgxVtModalSize["DEFAULT"] = "default";
        NgxVtModalSize["SMALL"] = "small";
        NgxVtModalSize["FULLSCREEN"] = "fullscreen";
    })(exports.NgxVtModalSize || (exports.NgxVtModalSize = {}));

    var NgxVtModalTemplateComponent = /** @class */ (function () {
        function NgxVtModalTemplateComponent(service) {
            this.service = service;
            this.showHeader = true;
            this.showCloseButton = true;
            this.modalSize = exports.NgxVtModalSize.DEFAULT;
        }
        NgxVtModalTemplateComponent.prototype.escape = function () {
            if (this.options.useEsc) {
                this.service.close({ dismiss: exports.NgxVtModalCloseStatus.ESC });
            }
        };
        NgxVtModalTemplateComponent.prototype.ngOnInit = function () {
            var _a, _b;
            this.showHeader = typeof this.options.showHeader === 'undefined' ? true : this.options.showHeader;
            this.showCloseButton = typeof this.options.showCloseButton === 'undefined' ? true : this.options.showCloseButton;
            this.modalSize = Object.values(exports.NgxVtModalSize).includes((_a = this.options) === null || _a === void 0 ? void 0 : _a.size) ? (_b = this.options) === null || _b === void 0 ? void 0 : _b.size : exports.NgxVtModalSize.DEFAULT;
        };
        NgxVtModalTemplateComponent.prototype.close = function () {
            this.service.close({ dismiss: exports.NgxVtModalCloseStatus.BUTTON });
        };
        return NgxVtModalTemplateComponent;
    }());
    NgxVtModalTemplateComponent.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NgxVtModalTemplateComponent, deps: [{ token: NgxVtModalService }], target: i0__namespace.ɵɵFactoryTarget.Component });
    NgxVtModalTemplateComponent.ɵcmp = i0__namespace.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: NgxVtModalTemplateComponent, selector: "ngx-vt-modal-template", inputs: { options: "options" }, host: { listeners: { "window:keydown.esc": "escape()" } }, ngImport: i0__namespace, template: "<div class=\"ngx-vt-modal-{{modalSize}}\">\r\n  <div class=\"ngx-vt-modal-{{modalSize}}__header\" *ngIf=\"showHeader\">\r\n    <div class=\"ngx-vt-modal-{{modalSize}}__title\">{{ options?.title }}</div>\r\n    <div class=\"ngx-vt-modal-{{modalSize}}__close\" (click)=\"close()\"  *ngIf=\"showCloseButton\">\u2716</div>\r\n  </div>\r\n  <div id=\"ngx-vt-modal-body\" class=\"ngx-vt-modal-{{modalSize}}__body\"></div>\r\n</div>\r\n", styles: [":host .ngx-vt-modal-default{width:-moz-fit-content;width:fit-content;position:absolute;top:50%;left:50%;margin-right:-50%;transform:translate(-50%,-50%);min-width:310px;max-width:1200px;height:-moz-fit-content;height:fit-content;background:white;border-radius:14px}:host .ngx-vt-modal-default__header{display:flex;flex-direction:row;height:50px;border-bottom:1px solid #eee}:host .ngx-vt-modal-default__title{flex:auto;line-height:2.5;font-size:20px;font-weight:700;text-align:center}:host .ngx-vt-modal-default__close{float:right;margin:10px;cursor:pointer;font-size:20px}@media (max-width: 639px){:host .ngx-vt-modal-default{width:calc(100% - 10px)}}\n", ":host .ngx-vt-modal-fullscreen{width:100%;height:100%;position:absolute;background:white}:host .ngx-vt-modal-fullscreen__header{display:flex;flex-direction:row;height:50px;border-bottom:1px solid #eee}:host .ngx-vt-modal-fullscreen__title{flex:auto;line-height:2.5;font-size:20px;font-weight:700;text-align:center}:host .ngx-vt-modal-fullscreen__body{width:100%;height:100%}:host .ngx-vt-modal-fullscreen__close{float:right;margin:10px;cursor:pointer;font-size:20px}\n", ":host .ngx-vt-modal-small{width:-moz-fit-content;width:fit-content;position:absolute;top:50%;left:50%;margin-right:-50%;transform:translate(-50%,-50%);min-width:220px;max-width:480px;height:-moz-fit-content;height:fit-content;min-height:220px;background:white;border-radius:14px}:host .ngx-vt-modal-small__header{display:none}:host .ngx-vt-modal-small__body{display:flex;align-items:center;justify-content:center}@media (max-width: 479px){:host .ngx-vt-modal-small{width:calc(100% - 10px)}}\n"], directives: [{ type: i2__namespace.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NgxVtModalTemplateComponent, decorators: [{
                type: i0.Component,
                args: [{
                        selector: 'ngx-vt-modal-template',
                        templateUrl: './ngx-vt-modal-template.component.html',
                        styleUrls: [
                            './ngx-vt-modal-default-template.component.scss',
                            './ngx-vt-modal-fullscreen-template.component.scss',
                            './ngx-vt-modal-small-template.component.scss'
                        ]
                    }]
            }], ctorParameters: function () { return [{ type: NgxVtModalService }]; }, propDecorators: { options: [{
                    type: i0.Input
                }], escape: [{
                    type: i0.HostListener,
                    args: ['window:keydown.esc']
                }] } });

    var NgxVtModalService = /** @class */ (function () {
        function NgxVtModalService(document, componentFactoryResolver, appRef, injector, rendererFactory) {
            this.document = document;
            this.componentFactoryResolver = componentFactoryResolver;
            this.appRef = appRef;
            this.injector = injector;
            this.rendererFactory = rendererFactory;
            this.modals = [];
            this.MODAL_BODY_SELECTOR = 'div#ngx-vt-modal-body';
            this.DEFAULT_BACKGROUND_COLOR = '#00000066';
            this.renderer = rendererFactory.createRenderer(null, null);
        }
        NgxVtModalService.prototype.open = function (component, options) {
            this.createBackdrop();
            var host = this.createHost(options);
            var modalRef = this.componentFactoryResolver.resolveComponentFactory(NgxVtModalTemplateComponent).create(this.injector);
            modalRef.instance.options = Object.assign({}, options);
            var componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
            componentRef.instance.data = Object.assign({}, options === null || options === void 0 ? void 0 : options.data);
            componentRef.instance.closeModal$ = new i0.EventEmitter();
            var domNodeModal = modalRef.hostView.rootNodes[0];
            var modalBody = domNodeModal.querySelector(this.MODAL_BODY_SELECTOR);
            var domNodeComponent = componentRef.hostView.rootNodes[0];
            if (options === null || options === void 0 ? void 0 : options.class) {
                this.renderer.addClass(domNodeModal, options.class);
            }
            modalBody.append(domNodeComponent);
            host.append(domNodeModal);
            this.modals.push({ modal: modalRef, component: componentRef, host: host });
            this.appRef.attachView(modalRef.hostView);
            this.appRef.attachView(componentRef.hostView);
            this.renderer.appendChild(this.backdrop, host);
            return componentRef.instance;
        };
        NgxVtModalService.prototype.close = function (data) {
            var _a;
            if (!((_a = this.modals) === null || _a === void 0 ? void 0 : _a.length)) {
                return;
            }
            var removedModal = this.modals.pop();
            this.appRef.detachView(removedModal.component.hostView);
            removedModal.component.instance.closeModal$.next(data);
            removedModal.component.destroy();
            this.appRef.detachView(removedModal.modal.hostView);
            removedModal.modal.destroy();
            this.renderer.removeChild(this.backdrop, removedModal.host);
            if (!this.modals.length) {
                this.renderer.removeChild(this.document.body, this.backdrop);
                this.backdrop = null;
            }
        };
        NgxVtModalService.prototype.createHost = function (options) {
            var _this = this;
            var host = this.renderer.createElement('div');
            this.renderer.setStyle(host, 'zIndex', "" + (this.maxZIndex() + 1));
            this.renderer.addClass(host, 'ngx-vt-modal-host');
            this.renderer.setStyle(host, 'position', 'fixed');
            this.renderer.setStyle(host, 'width', '100%');
            this.renderer.setStyle(host, 'height', '100%');
            if (options === null || options === void 0 ? void 0 : options.closeOnBackdropClick) {
                this.renderer.listen(this.backdrop, 'click', function (event) {
                    if (host == event.target) {
                        _this.close({ dismiss: exports.NgxVtModalCloseStatus.BACKDROP });
                    }
                });
            }
            return host;
        };
        NgxVtModalService.prototype.createBackdrop = function () {
            if (!this.backdrop) {
                this.backdrop = this.renderer.createElement('div');
                this.renderer.setStyle(this.backdrop, 'zIndex', "" + (this.maxZIndex() + 1));
                this.renderer.addClass(this.backdrop, 'ngx-vt-modal-backdrop');
                this.renderer.setStyle(this.backdrop, 'position', 'fixed');
                this.renderer.setStyle(this.backdrop, 'top', 0);
                this.renderer.setStyle(this.backdrop, 'left', 0);
                this.renderer.setStyle(this.backdrop, 'width', '100%');
                this.renderer.setStyle(this.backdrop, 'height', '100%');
                // check if global css has rule for backdrop background
                // add to style.css rule :
                // :root {
                //   --ngx-vt-modal-backdrop-background : yourColor;
                // }
                var background = getComputedStyle(document.documentElement)
                    .getPropertyValue('--ngx-vt-modal-backdrop-background') || this.DEFAULT_BACKGROUND_COLOR;
                this.renderer.setStyle(this.backdrop, 'backgroundColor', background);
                var appRoot = this.document.body;
                this.renderer.appendChild(appRoot, this.backdrop);
            }
        };
        NgxVtModalService.prototype.maxZIndex = function () {
            return Math.max.apply(Math, __spreadArray(__spreadArray([], __read(Array.from(document.getElementsByTagName('div'), function (el) {
                var style = getComputedStyle(el);
                return style.position !== 'static' && +style.zIndex > 0 && +style.zIndex;
            }))), [0]));
        };
        return NgxVtModalService;
    }());
    NgxVtModalService.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NgxVtModalService, deps: [{ token: i2.DOCUMENT }, { token: i0__namespace.ComponentFactoryResolver }, { token: i0__namespace.ApplicationRef }, { token: i0__namespace.Injector }, { token: i0__namespace.RendererFactory2 }], target: i0__namespace.ɵɵFactoryTarget.Injectable });
    NgxVtModalService.ɵprov = i0__namespace.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NgxVtModalService });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NgxVtModalService, decorators: [{
                type: i0.Injectable
            }], ctorParameters: function () {
            return [{ type: Document, decorators: [{
                            type: i0.Inject,
                            args: [i2.DOCUMENT]
                        }] }, { type: i0__namespace.ComponentFactoryResolver }, { type: i0__namespace.ApplicationRef }, { type: i0__namespace.Injector }, { type: i0__namespace.RendererFactory2 }];
        } });

    var NgxVtModalModule = /** @class */ (function () {
        function NgxVtModalModule() {
        }
        return NgxVtModalModule;
    }());
    NgxVtModalModule.ɵfac = i0__namespace.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NgxVtModalModule, deps: [], target: i0__namespace.ɵɵFactoryTarget.NgModule });
    NgxVtModalModule.ɵmod = i0__namespace.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NgxVtModalModule, declarations: [NgxVtModalTemplateComponent], imports: [i2.CommonModule] });
    NgxVtModalModule.ɵinj = i0__namespace.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NgxVtModalModule, providers: [], imports: [[
                i2.CommonModule
            ]] });
    i0__namespace.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0__namespace, type: NgxVtModalModule, decorators: [{
                type: i0.NgModule,
                args: [{
                        declarations: [
                            NgxVtModalTemplateComponent
                        ],
                        imports: [
                            i2.CommonModule
                        ],
                        providers: []
                    }]
            }] });

    /*
     * Public API Surface of ngx-vt-modal
     */

    /**
     * Generated bundle index. Do not edit.
     */

    exports.NgxVtModalModule = NgxVtModalModule;
    exports.NgxVtModalService = NgxVtModalService;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-vt-modal.umd.js.map
