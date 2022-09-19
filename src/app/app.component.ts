import { Component, OnInit } from '@angular/core';
import { NgxVtModalService, NgxVtModalSize } from '../../projects/ngx-vt-modal-lib/src/public-api';
import { DialogComponent } from './dialog-component/dialog.component';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  form = new FormGroup({});
  NgxVtModalSize = NgxVtModalSize;
  invalidJson = false;

  constructor(private modalService: NgxVtModalService, private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      useEsc: false,
      closeOnBackdropClick: false,
      showHeader: true,
      draggable: true,
      title: 'Tile',
      showCloseButton: true,
      class: 'custom-modal-class',
      size: NgxVtModalSize.DEFAULT,
      data: '{"test": 1}'
    })
  }

  openModal(): void {
    this. invalidJson = false;
    const json = this.parseJson();

    if(json) {
      this.form.value.data = json;
      this.modalService.open(DialogComponent, {
        ...this.form.value
      });
    } else {
      this. invalidJson = true;
    }
  }

  parseJson(): any {
    let result;

    if(!this.form.value.data) {
      return true;
    }

    try {
      if(typeof this.form.value.data === 'string') {
        result = JSON.parse(this.form.value.data)
      } else {
        result = this.form.value.data;
      }
    } catch (e) {
      result = false;
    }

    return result;
  }
}
