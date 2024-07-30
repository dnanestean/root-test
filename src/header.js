import { LitElement, html, css } from 'lit';

export class Header extends LitElement {
  static properties = {
    header: { type: String },
  };

  static styles = css`
    header {
      background: #333;
      color: white;
      padding: 1em;
      text-align: center;
    }
  `;

  render() {
    return html`
      <header>
        <h1>Header</h1>
      </header>
    `;
  }
}

customElements.define('root-header', Header);
