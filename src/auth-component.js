import { LitElement, html, css } from 'lit';
import './components/user-details.js';

class AuthComponent extends LitElement {
  static properties = {
    loggedIn: { type: Boolean },
    user: { type: Object },
  };

  constructor() {
    super();
    this.loggedIn = false;
    this.user = null;
  }

  static styles = css`
    .auth-container {
      text-align: center;
      margin-top: 2em;
    }
    input {
      display: block;
      margin: 0.5em auto;
      padding: 0.5em;
      width: 200px;
    }
    button {
      padding: 0.5em 1em;
      background-color: #007bff;
      color: white;
      border: none;
      cursor: pointer;
    }
    button:hover {
      background-color: #0056b3;
    }
  `;

  render() {
    return html`
      <div class="auth-container">
        ${this.loggedIn
          ? html`
              <p>Welcome, <user-details .user=${this.user}></user-details>!</p>

              <button @click=${this.logout}>Logout</button>
            `
          : html`
              <input id="username" type="text" placeholder="Username" />
              <input id="password" type="password" placeholder="Password" />
              <button @click=${this.login}>Login</button>
            `}
      </div>
    `;
  }

  login() {
    const username = this.shadowRoot.getElementById('username').value;
    const password = this.shadowRoot.getElementById('password').value;
    if (username && password) {
      this.user = { username };
      this.loggedIn = true;
    }
  }

  logout() {
    this.user = null;
    this.loggedIn = false;
  }
}

customElements.define('auth-component', AuthComponent);
