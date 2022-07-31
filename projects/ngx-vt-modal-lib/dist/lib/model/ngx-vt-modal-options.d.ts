import { NgxVtModalSize } from './ngx-vt-modal-size';
export interface NgxVtModalOptions {
    /**
     * Modal title
     */
    title?: string;
    /**
     * Closes the modal with ESC
     */
    useEsc?: boolean;
    /**
     * Closes the modal on the backdrop click
     */
    closeOnBackdropClick?: boolean;
    /**
     * Show header
     */
    showHeader?: boolean;
    /**
     * Show close button
     */
    showCloseButton?: boolean;
    /**
     * Custom CSS class for opened modal
     */
    class?: string;
    /**
     * Modal size: DEFAULT, SMALL, FULLSCREEN
     */
    size?: NgxVtModalSize;
    /**
     * Modal data
     */
    data?: Object;
}
