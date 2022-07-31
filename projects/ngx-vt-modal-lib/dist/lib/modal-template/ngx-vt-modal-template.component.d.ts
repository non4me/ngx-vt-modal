import { OnInit } from '@angular/core';
import { NgxVtModalOptions } from '../model/ngx-vt-modal-options';
import { NgxVtModalService } from '../ngx-vt-modal.service';
import { NgxVtModalSize } from '../model/ngx-vt-modal-size';
import * as i0 from "@angular/core";
export declare class NgxVtModalTemplateComponent implements OnInit {
    private service;
    options: NgxVtModalOptions;
    showHeader: boolean;
    showCloseButton: boolean;
    modalSize: NgxVtModalSize;
    constructor(service: NgxVtModalService);
    escape(): void;
    ngOnInit(): void;
    close(): void;
    static ɵfac: i0.ɵɵFactoryDeclaration<NgxVtModalTemplateComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NgxVtModalTemplateComponent, "ngx-vt-modal-template", never, { "options": "options"; }, {}, never, never>;
}
