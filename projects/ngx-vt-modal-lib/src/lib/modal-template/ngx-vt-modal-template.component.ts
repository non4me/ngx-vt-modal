import { Component, HostListener, Input, OnInit } from '@angular/core';

import { NgxVtModalOptions } from '../model/ngx-vt-modal-options';
import { NgxVtModalService } from '../ngx-vt-modal.service';
import { NgxVtModalCloseStatus } from '../model/ngx-vt-modal-close-status';
import { NgxVtModalSize } from '../model/ngx-vt-modal-size';

@Component({
  selector: 'ngx-vt-modal-template',
  templateUrl: './ngx-vt-modal-template.component.html',
  styleUrls: [
    './ngx-vt-modal-default-template.component.scss',
    './ngx-vt-modal-fullscreen-template.component.scss',
    './ngx-vt-modal-small-template.component.scss'
  ]
})
export class NgxVtModalTemplateComponent implements OnInit {

  @Input() options!: NgxVtModalOptions;

  showHeader = true;
  draggable = false;
  showCloseButton = true;
  modalSize: NgxVtModalSize = NgxVtModalSize.DEFAULT;

  constructor(private service: NgxVtModalService) {
  }

  @HostListener('window:keydown.esc')
  escape(): void {
    if (this.options.useEsc) {
      this.service.close({ dismiss: NgxVtModalCloseStatus.ESC });
    }
  }

  ngOnInit(): void {
    this.showHeader = typeof this.options.showHeader === 'undefined' ? true : this.options.showHeader;
    this.showCloseButton = typeof this.options.showCloseButton === 'undefined' ? true : this.options.showCloseButton;
    this.modalSize = this.options?.size || NgxVtModalSize.DEFAULT;
    this.draggable = (this.modalSize === NgxVtModalSize.DEFAULT) && this.showHeader && this.options.draggable || false;
  }

  close(): void {
    this.service.close({ dismiss: NgxVtModalCloseStatus.BUTTON });
  }
}
