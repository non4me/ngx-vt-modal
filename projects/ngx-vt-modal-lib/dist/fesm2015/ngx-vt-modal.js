import * as i0 from '@angular/core';
import { Component, Input, HostListener, EventEmitter, Injectable, Inject, NgModule } from '@angular/core';
import * as i2 from '@angular/common';
import { DOCUMENT, CommonModule } from '@angular/common';

var NgxVtModalCloseStatus;
(function (NgxVtModalCloseStatus) {
    NgxVtModalCloseStatus["ESC"] = "esc";
    NgxVtModalCloseStatus["BACKDROP"] = "backdrop";
    NgxVtModalCloseStatus["BUTTON"] = "button";
})(NgxVtModalCloseStatus || (NgxVtModalCloseStatus = {}));

var NgxVtModalSize;
(function (NgxVtModalSize) {
    NgxVtModalSize["DEFAULT"] = "default";
    NgxVtModalSize["SMALL"] = "small";
    NgxVtModalSize["FULLSCREEN"] = "fullscreen";
})(NgxVtModalSize || (NgxVtModalSize = {}));

class NgxVtModalTemplateComponent {
    constructor(service) {
        this.service = service;
        this.showHeader = true;
        this.showCloseButton = true;
        this.modalSize = NgxVtModalSize.DEFAULT;
    }
    escape() {
        if (this.options.useEsc) {
            this.service.close({ dismiss: NgxVtModalCloseStatus.ESC });
        }
    }
    ngOnInit() {
        var _a, _b;
        this.showHeader = typeof this.options.showHeader === 'undefined' ? true : this.options.showHeader;
        this.showCloseButton = typeof this.options.showCloseButton === 'undefined' ? true : this.options.showCloseButton;
        this.modalSize = Object.values(NgxVtModalSize).includes((_a = this.options) === null || _a === void 0 ? void 0 : _a.size) ? (_b = this.options) === null || _b === void 0 ? void 0 : _b.size : NgxVtModalSize.DEFAULT;
    }
    close() {
        this.service.close({ dismiss: NgxVtModalCloseStatus.BUTTON });
    }
}
NgxVtModalTemplateComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NgxVtModalTemplateComponent, deps: [{ token: NgxVtModalService }], target: i0.ɵɵFactoryTarget.Component });
NgxVtModalTemplateComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "12.2.16", type: NgxVtModalTemplateComponent, selector: "ngx-vt-modal-template", inputs: { options: "options" }, host: { listeners: { "window:keydown.esc": "escape()" } }, ngImport: i0, template: "<div class=\"ngx-vt-modal-{{modalSize}}\">\r\n  <div class=\"ngx-vt-modal-{{modalSize}}__header\" *ngIf=\"showHeader\">\r\n    <div class=\"ngx-vt-modal-{{modalSize}}__title\">{{ options?.title }}</div>\r\n    <div class=\"ngx-vt-modal-{{modalSize}}__close\" (click)=\"close()\"  *ngIf=\"showCloseButton\">\u2716</div>\r\n  </div>\r\n  <div id=\"ngx-vt-modal-body\" class=\"ngx-vt-modal-{{modalSize}}__body\"></div>\r\n</div>\r\n", styles: [":host .ngx-vt-modal-default{width:-moz-fit-content;width:fit-content;position:absolute;top:50%;left:50%;margin-right:-50%;transform:translate(-50%,-50%);min-width:310px;max-width:1200px;height:-moz-fit-content;height:fit-content;background:white;border-radius:14px}:host .ngx-vt-modal-default__header{display:flex;flex-direction:row;height:50px;border-bottom:1px solid #eee}:host .ngx-vt-modal-default__title{flex:auto;line-height:2.5;font-size:20px;font-weight:700;text-align:center}:host .ngx-vt-modal-default__close{float:right;margin:10px;cursor:pointer;font-size:20px}@media (max-width: 639px){:host .ngx-vt-modal-default{width:calc(100% - 10px)}}\n", ":host .ngx-vt-modal-fullscreen{width:100%;height:100%;position:absolute;background:white}:host .ngx-vt-modal-fullscreen__header{display:flex;flex-direction:row;height:50px;border-bottom:1px solid #eee}:host .ngx-vt-modal-fullscreen__title{flex:auto;line-height:2.5;font-size:20px;font-weight:700;text-align:center}:host .ngx-vt-modal-fullscreen__body{width:100%;height:100%}:host .ngx-vt-modal-fullscreen__close{float:right;margin:10px;cursor:pointer;font-size:20px}\n", ":host .ngx-vt-modal-small{width:-moz-fit-content;width:fit-content;position:absolute;top:50%;left:50%;margin-right:-50%;transform:translate(-50%,-50%);min-width:220px;max-width:480px;height:-moz-fit-content;height:fit-content;min-height:220px;background:white;border-radius:14px}:host .ngx-vt-modal-small__header{display:none}:host .ngx-vt-modal-small__body{display:flex;align-items:center;justify-content:center}@media (max-width: 479px){:host .ngx-vt-modal-small{width:calc(100% - 10px)}}\n"], directives: [{ type: i2.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NgxVtModalTemplateComponent, decorators: [{
            type: Component,
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
                type: Input
            }], escape: [{
                type: HostListener,
                args: ['window:keydown.esc']
            }] } });

class NgxVtModalService {
    constructor(document, componentFactoryResolver, appRef, injector, rendererFactory) {
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
    open(component, options) {
        this.createBackdrop();
        const host = this.createHost(options);
        const modalRef = this.componentFactoryResolver.resolveComponentFactory(NgxVtModalTemplateComponent).create(this.injector);
        modalRef.instance.options = Object.assign({}, options);
        const componentRef = this.componentFactoryResolver.resolveComponentFactory(component).create(this.injector);
        componentRef.instance.data = Object.assign({}, options === null || options === void 0 ? void 0 : options.data);
        componentRef.instance.closeModal$ = new EventEmitter();
        const domNodeModal = modalRef.hostView.rootNodes[0];
        const modalBody = domNodeModal.querySelector(this.MODAL_BODY_SELECTOR);
        const domNodeComponent = componentRef.hostView.rootNodes[0];
        if (options === null || options === void 0 ? void 0 : options.class) {
            this.renderer.addClass(domNodeModal, options.class);
        }
        modalBody.append(domNodeComponent);
        host.append(domNodeModal);
        this.modals.push({ modal: modalRef, component: componentRef, host });
        this.appRef.attachView(modalRef.hostView);
        this.appRef.attachView(componentRef.hostView);
        this.renderer.appendChild(this.backdrop, host);
        return componentRef.instance;
    }
    close(data) {
        var _a;
        if (!((_a = this.modals) === null || _a === void 0 ? void 0 : _a.length)) {
            return;
        }
        const removedModal = this.modals.pop();
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
    }
    createHost(options) {
        const host = this.renderer.createElement('div');
        this.renderer.setStyle(host, 'zIndex', `${this.maxZIndex() + 1}`);
        this.renderer.addClass(host, 'ngx-vt-modal-host');
        this.renderer.setStyle(host, 'position', 'fixed');
        this.renderer.setStyle(host, 'width', '100%');
        this.renderer.setStyle(host, 'height', '100%');
        if (options === null || options === void 0 ? void 0 : options.closeOnBackdropClick) {
            this.renderer.listen(this.backdrop, 'click', (event) => {
                if (host == event.target) {
                    this.close({ dismiss: NgxVtModalCloseStatus.BACKDROP });
                }
            });
        }
        return host;
    }
    createBackdrop() {
        if (!this.backdrop) {
            this.backdrop = this.renderer.createElement('div');
            this.renderer.setStyle(this.backdrop, 'zIndex', `${this.maxZIndex() + 1}`);
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
            const background = getComputedStyle(document.documentElement)
                .getPropertyValue('--ngx-vt-modal-backdrop-background') || this.DEFAULT_BACKGROUND_COLOR;
            this.renderer.setStyle(this.backdrop, 'backgroundColor', background);
            const appRoot = this.document.body;
            this.renderer.appendChild(appRoot, this.backdrop);
        }
    }
    maxZIndex() {
        return Math.max(...Array.from(document.getElementsByTagName('div'), el => {
            const style = getComputedStyle(el);
            return style.position !== 'static' && +style.zIndex > 0 && +style.zIndex;
        }), 0);
    }
}
NgxVtModalService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NgxVtModalService, deps: [{ token: DOCUMENT }, { token: i0.ComponentFactoryResolver }, { token: i0.ApplicationRef }, { token: i0.Injector }, { token: i0.RendererFactory2 }], target: i0.ɵɵFactoryTarget.Injectable });
NgxVtModalService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NgxVtModalService });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NgxVtModalService, decorators: [{
            type: Injectable
        }], ctorParameters: function () { return [{ type: Document, decorators: [{
                    type: Inject,
                    args: [DOCUMENT]
                }] }, { type: i0.ComponentFactoryResolver }, { type: i0.ApplicationRef }, { type: i0.Injector }, { type: i0.RendererFactory2 }]; } });

class NgxVtModalModule {
}
NgxVtModalModule.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NgxVtModalModule, deps: [], target: i0.ɵɵFactoryTarget.NgModule });
NgxVtModalModule.ɵmod = i0.ɵɵngDeclareNgModule({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NgxVtModalModule, declarations: [NgxVtModalTemplateComponent], imports: [CommonModule] });
NgxVtModalModule.ɵinj = i0.ɵɵngDeclareInjector({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NgxVtModalModule, providers: [], imports: [[
            CommonModule
        ]] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "12.2.16", ngImport: i0, type: NgxVtModalModule, decorators: [{
            type: NgModule,
            args: [{
                    declarations: [
                        NgxVtModalTemplateComponent
                    ],
                    imports: [
                        CommonModule
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

export { NgxVtModalCloseStatus, NgxVtModalModule, NgxVtModalService, NgxVtModalSize };
//# sourceMappingURL=ngx-vt-modal.js.map
