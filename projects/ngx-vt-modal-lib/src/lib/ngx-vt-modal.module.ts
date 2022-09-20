import { CommonModule } from '@angular/common';
import { InjectionToken, ModuleWithProviders, NgModule } from '@angular/core';

import { NgxVtModalTemplateComponent } from './modal-template/ngx-vt-modal-template.component';
import { NgxVtModalService } from './ngx-vt-modal.service';
import { DraggingDirective } from './dragging/dragging.directive';
import { DraggingHandleDirective } from './dragging/dragging-handle.directive';
import { NgxVtModalOptions } from './model/ngx-vt-modal-options';

export const DEFAULT_OPTIONS = new InjectionToken<NgxVtModalOptions>('DEFAULT_OPTIONS');

@NgModule({
  declarations: [
    NgxVtModalTemplateComponent,
    DraggingDirective,
    DraggingHandleDirective
  ],
  imports: [
    CommonModule
  ]
})
export class NgxVtModalModule {
  static forRoot(options?: NgxVtModalOptions): ModuleWithProviders<NgxVtModalModule> {
    return {
      ngModule: NgxVtModalModule,
      providers: [
        { provide: DEFAULT_OPTIONS, useValue: options },
        NgxVtModalService
      ]
    };
  }
}
