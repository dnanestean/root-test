import { LitElement, html } from 'lit';

export class UserDetails extends LitElement {
  render() {
    return html`
      <div>
        <p>${this.user.username}</p>
        <p>${this.user.email}</p>
      </div>
    `;
  }
}
customElements.define('user-details', UserDetails);
