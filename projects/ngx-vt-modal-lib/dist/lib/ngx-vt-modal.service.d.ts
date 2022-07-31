import { ApplicationRef, ComponentFactoryResolver, Injector, RendererFactory2, Type } from '@angular/core';
import { NgxVtModalOptions } from './model/ngx-vt-modal-options';
import { Observable } from 'rxjs';
import * as i0 from "@angular/core";
export declare class NgxVtModalService {
    private document;
    private componentFactoryResolver;
    private appRef;
    private injector;
    private rendererFactory;
    private backdrop;
    private modals;
    private renderer;
    private MODAL_BODY_SELECTOR;
    private DEFAULT_BACKGROUND_COLOR;
    constructor(document: Document, componentFactoryResolver: ComponentFactoryResolver, appRef: ApplicationRef, injector: Injector, rendererFactory: RendererFactory2);
    open(component: Type<any>, options?: NgxVtModalOptions): {
        closeModal$: Observable<any>;
    } | any;
    close(data?: any): void;
    private createHost;
    private createBackdrop;
    private maxZIndex;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxVtModalService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<NgxVtModalService>;
}
