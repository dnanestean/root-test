import { LitElement, html, css } from 'lit';
import './header.js';
import './footer.js';
import './auth-component.js';

class RootTest extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    :host {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
      text-align: center;
      background-color: var(--root-test-background-color);
    }
  `;

  constructor() {
    super();
    this.header = 'My login page';
  }

  render() {
    return html`
      <root-header .header=${this.header}></root-header>
      <main>
        <h1>${this.header}</h1>

        <auth-component></auth-component>
      </main>

      <root-footer>
        <p class="app-footer">
          🚽 Made with love by
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/open-wc"
            >open-wc</a
          >.
        </p>
      </root-footer>
    `;
  }
}

customElements.define('root-test', RootTest);
