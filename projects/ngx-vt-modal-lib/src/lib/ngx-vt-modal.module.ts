import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxVtModalTemplateComponent } from './modal-template/ngx-vt-modal-template.component';
import { NgxVtModalService } from './ngx-vt-modal.service';
import { DraggingDirective } from './dragging/dragging.directive';
import { DraggingHandleDirective } from './dragging/dragging-handle.directive';

@NgModule({
  declarations: [
    NgxVtModalTemplateComponent,
    DraggingDirective,
    DraggingHandleDirective
  ],
  imports: [
    CommonModule
  ],
  providers: [NgxVtModalService]
})
export class NgxVtModalModule {
}
