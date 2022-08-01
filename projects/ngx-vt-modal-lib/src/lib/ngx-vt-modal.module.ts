import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgxVtModalTemplateComponent } from './modal-template/ngx-vt-modal-template.component';
import { NgxVtModalService } from './ngx-vt-modal.service';

@NgModule({
  declarations: [
    NgxVtModalTemplateComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [NgxVtModalService]
})
export class NgxVtModalModule {
}
