import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgxVtModalService } from '../../../projects/ngx-vt-modal-lib/src/public-api';

@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent {

  @Input() data: any; // data from NgxVtModalOptions object

  @Output() myCustomEvent$ = new EventEmitter();

  private dataFromModal = { message: 'Hello from modal' };

  constructor(private modalService: NgxVtModalService) {
  }

  onDismiss(): void {
    this.modalService.close();
  }

  onClose(): void {
    this.modalService.close({ result: 'OK', data: this.dataFromModal });

    // or with custom Event
    this.myCustomEvent$.next(this.dataFromModal);
    this.modalService.close();
  }
}
