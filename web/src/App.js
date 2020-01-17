import React from 'react';

import './global.css';
import './App.css';
import './Sidebar.css';
import './Main.css';

function App() {
  return (
    <div id="app">
      <aside>
        <strong>Cadastrar</strong>
        <form>
          <div class="input-block">
            <label htmlFor="github_username">Usuário do Github</label>
            <input name="github_username" id="username_github" required />
          </div>

          <div class="input-block">
            <label htmlFor="techs">Tecnologias</label>
            <input name="techs" id="techs" required />
          </div>

          <div class="input-group">
            <div class="input-block">
              <label htmlFor="">Latitude</label>
              <input name="latitude" id="latitude" required />
            </div>
            <div class="input-block">
              <label htmlFor="">Longitude</label>
              <input name="longitude" id="longitude" required />
            </div>
          </div>

          <button type="submit">Salvar</button>
        </form>
      </aside>
      <main>
        <ul>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/22780548?s=460&v=4" alt="Leonardo Cesca" />
              <div className="user-info">
                <strong>Leonardo Cesca</strong>
                <span>React, React Native, Node.js</span>
              </div>
            </header>
            <p>Jovem sonhador.</p>
            <a href="https://github.com/leonardocesca">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/22780548?s=460&v=4" alt="Leonardo Cesca" />
              <div className="user-info">
                <strong>Leonardo Cesca</strong>
                <span>React, React Native, Node.js</span>
              </div>
            </header>
            <p>Jovem sonhador.</p>
            <a href="https://github.com/leonardocesca">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/22780548?s=460&v=4" alt="Leonardo Cesca" />
              <div className="user-info">
                <strong>Leonardo Cesca</strong>
                <span>React, React Native, Node.js</span>
              </div>
            </header>
            <p>Jovem sonhador.</p>
            <a href="https://github.com/leonardocesca">Acessar perfil no Github</a>
          </li>
          <li className="dev-item">
            <header>
              <img src="https://avatars0.githubusercontent.com/u/22780548?s=460&v=4" alt="Leonardo Cesca" />
              <div className="user-info">
                <strong>Leonardo Cesca</strong>
                <span>React, React Native, Node.js</span>
              </div>
            </header>
            <p>Jovem sonhador.</p>
            <a href="https://github.com/leonardocesca">Acessar perfil no Github</a>
          </li>
        </ul>
      </main>
    </div>
  );
}

export default App;
