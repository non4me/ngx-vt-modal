# ngx-vtModal

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

## Instalation

Run `ng install store-modal -S`

Add to `app.module.ts`:
<pre>
import { StoreModalModule } from 'ngx-vt-modal';
...
imports: [
    StoreModalModule,
    ...
]

</pre>

## Usage

```typescript
// Modal opener component or service
constuctor(
    private modalService: NgxVtModalService
){}

openModal(): void {
  this.modalService.open(DialogComponent);
}

// or

openModal(): void {
  const modalRef = this.modalService.open(DialogComponent, {
    size: StoreModalSize.SMALL,
    useEsc: true,
    data: {...any}
  });

  // build-in Event closeModal$
  modalRef.closeModal$
    .subscribe(data => {
        if.data?.result === 'OK' {
            // do anything
        }
    });
  
  // or your custom Event
  modalRef.myCustomEvent$
    .subscribe(data => {
      // do anything
    });
}
```
```typescript
@Component({
  ...
})
export class DialogComponent{
  @Input() data; // data from StoreModalOptions object
  
  @Output() myCustomEvent$ = new EventEmitter();

  constuctor(
    private modalService: NgxVtModalService
  ){}
  
  onDismiss(): void {
      this.modalService.close();
  }
  
  onClose(): void {
    this.modalService.close({result: 'OK', ...data}) 
    
    // or with custom Event
    this.myCustomEvent$.next({...data});
    this.modalService.close();
  }
  
}
```

## Options
**Close the modal with escape key**
  <br>useEsc?: boolean; `default: false`

**Close the modal on the backdrop click**
<br>closeOnBackdropClick?: boolean; `default: false`

**Show header of the modal**
<br>showHeader?: boolean; `default: unavailable - for small modal, true - for default and fullscreen`

**Modal title**
<br>title?: string;  `default: '', when showHeader is true`

**Show close button**
<br>showCloseButton?: boolean; `default: unavailable - for small modal, true - for default and fullscreen`

**Custom css class for the modal**
<br>class?: string;

**Modal size**
<br>size?: StoreModalSize enum; `default: StoreModalSize.DEFAULT`
  * StoreModalSize.SMALL
  * StoreModalSize.DEFAULT
  * StoreModalSize.FULLSCREEN

**Modal data**
<br>data?: Object;

