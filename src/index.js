import { ClipboardJS } from 'clipboard';
import { html, render } from 'uhtml';


class Dafont extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        render(this, html`
        Do not shift`);
    }
}

if (!customElements.get('do-not-shift')) {
    customElements.define('do-not-shift', Dafont);
}
