import { NgxVtModalSize } from './ngx-vt-modal-size';

export interface NgxVtModalOptions {
  /**
   * Modal title
   */
  title?: string;  // default: '', when showHeader is true

  /**
   * Closes the modal with ESC
   */
  useEsc?: boolean; // default: false

  /**
   * Closes the modal on the backdrop click
   */
  closeOnBackdropClick?: boolean; // default: false

  /**
   * Show header
   */
  showHeader?: boolean; // default: false - for small modal, true - for default and fullscreen

  /**
   * Show close button
   */
  showCloseButton?: boolean; // default: unable - for small modal, true - for default and fullscreen

  /**
   * Custom CSS class for opened modal
   */
  class?: string;

  /**
   * Modal size: DEFAULT, SMALL, FULLSCREEN
   */
  size?: NgxVtModalSize; // default: DEFAULT

  /**
   * Modal data
   */
  data?: Object;
}
