import {
  ApplicationRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  EventEmitter,
  Inject,
  Injectable,
  Injector,
  Renderer2,
  RendererFactory2,
  Type
} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { NgxVtModalTemplateComponent } from './modal-template/ngx-vt-modal-template.component';
import { NgxVtModalOptions } from './model/ngx-vt-modal-options';
import { Observable } from 'rxjs';
import { NgxVtModalCloseStatus } from './model/ngx-vt-modal-close-status';


@Injectable()
export class NgxVtModalService {

  private backdrop: HTMLDivElement | null = null;
  private modals: any[] = [];
  private renderer: Renderer2;
  private MODAL_BODY_SELECTOR = 'div#ngx-vt-modal-body';
  private DEFAULT_BACKGROUND_COLOR = '#00000066'

  constructor(
    @Inject(DOCUMENT) private document: Document,
    private componentFactoryResolver: ComponentFactoryResolver,
    private appRef: ApplicationRef,
    private injector: Injector,
    private rendererFactory: RendererFactory2,
  ) {
    this.renderer = rendererFactory.createRenderer(null, null);
  }

  open(component: Type<any>, options?: NgxVtModalOptions): { closeModal$: Observable<any> } | any {
    this.createBackdrop();
    const host = this.createHost(options);

    if(!options || options?.draggable === undefined) {
      options = {
        ...options,
        draggable: true
      }
    }

    const modalRef = this.componentFactoryResolver.resolveComponentFactory<any>(NgxVtModalTemplateComponent).create(this.injector);
    modalRef.instance.options = { ...options };

    const componentRef = this.componentFactoryResolver.resolveComponentFactory<any>(component).create(this.injector);
    componentRef.instance.data = { ...options?.data };
    componentRef.instance.closeModal$ = new EventEmitter();

    const domNodeModal = (modalRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;
    const modalBody = domNodeModal.querySelector(this.MODAL_BODY_SELECTOR);
    const domNodeComponent = (componentRef.hostView as EmbeddedViewRef<any>).rootNodes[0] as HTMLElement;

    if (options?.class) {
      this.renderer.addClass(domNodeModal, options.class);
    }

    modalBody?.append(domNodeComponent);
    host.append(domNodeModal);

    this.modals.push({ modal: modalRef, component: componentRef, host });

    this.appRef.attachView(modalRef.hostView);
    this.appRef.attachView(componentRef.hostView);
    this.renderer.appendChild(this.backdrop, host);

    return componentRef.instance;
  }

  close(data?: any): void {
    if (!this.modals?.length) {
      return;
    }

    const removedModal: any = this.modals.pop();

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

  private createHost(options?: NgxVtModalOptions): HTMLDivElement {
    const host = this.renderer.createElement('div');
    this.renderer.setStyle(host, 'zIndex', `${this.maxZIndex() + 1}`);
    this.renderer.addClass(host, 'ngx-vt-modal-host');
    this.renderer.setStyle(host, 'position', 'fixed');
    this.renderer.setStyle(host, 'width', '100%');
    this.renderer.setStyle(host, 'height', '100%');

    if (options?.closeOnBackdropClick) {
      this.renderer.listen(this.backdrop, 'click', (event) => {
        if(host == event.target) {
          this.close({dismiss: NgxVtModalCloseStatus.BACKDROP})
        }
      })
    }

    return host;
  }

  private createBackdrop(): void {
    if(!this.backdrop) {
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
        .getPropertyValue('--ngx-vt-modal-backdrop-background')  || this.DEFAULT_BACKGROUND_COLOR;
      this.renderer.setStyle(this.backdrop, 'backgroundColor', background);

      const appRoot = this.document.body;
      this.renderer.appendChild(appRoot, this.backdrop);
    }
  }

  private maxZIndex(): number {
    return Math.max(
      ...Array.from(document.getElementsByTagName('div'), el => {
        const style = getComputedStyle(el);

        return +((style.position !== 'static') && (+style.zIndex > 0) && +style.zIndex)
      }), 0
    );
  }
}
