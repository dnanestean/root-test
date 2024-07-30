import { LitElement, html, css } from 'lit';

export class Footer extends LitElement {
  static properties = {
    footer: { type: String },
  };

  static styles = css`
    footer {
      background: #333;
      color: white;
      padding: 1em;
      text-align: center;
      position: fixed;
      width: 100%;
      bottom: 0;
    }
  `;

  render() {
    return html`
      <footer>
        <h1>Footer</h1>
      </footer>
    `;
  }
}

customElements.define('root-footer', Footer);
