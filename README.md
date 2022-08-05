# Angular modal - minimalist and zero-dependency library

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.1.2.

* mobile friendly
* easy adaptive

This modal is just container. You can off the predefined header and totally customized design of the modal window.

## Instalation

Run `ng install ngx-vt-modal`

Add to `app.module.ts`:
<pre>
import { NgxVtModalModule } from 'ngx-vt-modal';
...
imports: [
    NgxVtModalModule,
    ...
]

</pre>

## Demo

https://non4me.github.io/ngx-vt-modal/

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
    size: NgxVtModalSize.SMALL,
    useEsc: true,
    data: {...any}
  });

  // build-in Event closeModal$
  modalRef.closeModal$
    .subscribe(data => {
        if(data?.result === 'OK') {
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
  @Input() data; // data from NgxVtModalOptions object
  
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

<table>
<thead>
<th>Option</th>
<th>Mandatory<br> option</th>
<th>Data<br> type</th>
<th>Default<br> value</th>
</thead>
<tbody>
<tr>
<td>
<b>useEsc</b><br>
<i>Close the modal with escape key</i>
</td>
<td>No</td>
<td>boolean</td>
<td>false</td>
</tr>

<tr>
<td>
<b>closeOnBackdropClick</b>
<br>
<i>Close the modal on the backdrop click</i>
</td>
<td>No</td>
<td>boolean</td>
<td>false</td>
</tr>

<tr>
<td>
<b>showHeader</b>
<br>
<i>Show header of the modal</i>
</td>
<td>No</td>
<td>boolean</td>
<td>
<ul>
unavailable:
<li>NgxVtModalSize.SMALL
</ul>
<ul>
true:
<li>NgxVtModalSize.DEFAULT
<li>NgxVtModalSize.FULLSCREEN
</ul>
</td>
</tr>

<tr>
<td>
<b>title</b><br>
<i>Modal title</i>
</td>
<td>No</td>
<td>string</td>
<td>' ' (empty string),<br> when showHeader is true</td>
</tr>

<tr>
<td>
<b>showCloseButton</b><br>
<i>Show close button</i>
</td>
<td>No</td>
<td>boolean</td>
<td>
<ul>
unavailable:
<li>NgxVtModalSize.SMALL
</ul>
<ul>
true:
<li>NgxVtModalSize.DEFAULT
<li>NgxVtModalSize.FULLSCREEN
</ul>
</td>
</tr>

<tr>
<td>
<b>class</b><br>
<i>Custom css class for the modal</i>
</td>
<td>No</td>
<td>string</td>
<td>' ' (empty string)</td>
</tr>

<tr>
<td>
<b>size</b><br>
<i>Modal size</i>
</td>
<td>No</td>
<td>
enum NgxVtModalSize:
<ul>
<li> SMALL
<li> DEFAULT
<li> FULLSCREEN
</ul>
</td>
<td>
NgxVtModalSize.DEFAULT
</td>
</tr>

<tr>
<td>
<b>data</b><br>
<i>Modal data</i>
</td>
<td>No</td>
<td>Object: any</td>
<td>null</td>
</tr>
</tbody>
</table>
