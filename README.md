<div align="center">
    <h2>Secure Chat</h2>
    <p>Une application de messagerie décentralisée de pair-à-pair, avec chiffrement de bout en bout, basée sur le protocole TOX.</p>
</div>

<div>
<p>Table des matières</p>
<ol>
    <li>À propos du projet</li>
    <li>Captures d'écran</li>
    <li>Architecture générale de l'application</li>
    <li>Organisation du code source</li>
    <li>Mesures de sécurité</li>
    <li>Compilation et exécution</li>
    <li>Exécution à l'intérieur de Docker</li>
    <li>Vidéo de démonstration</li>
</ol>
</div>


## À propos du projet
P2P SecureChat est une application de messagerie instantanée axée sur la confidentialité et la sécurité, conçue pour permettre des communications chiffrées entre utilisateurs via un réseau peer-to-peer décentralisé.

## Captures d'écran
### Front Page: (Light theme)
<img src="docs/screenshots/1.png"/>

### Front Page: (Dark theme)
<img src="docs/screenshots/2.png"/>


### Chatting with people
<img src="docs/screenshots/3.png"/>


## Architecture générale de l'application
<img src="docs/system_diagram.drawio.png" />

### Languages utilisées
- Frontend: HTML, CSS, JS avec React JS
- Backend: C++
### Bibliothèques/Outils utilisées
- Frontend:
  * <a href="https://ant.design/">Ant Design</a> (A React Components libraries)
  * Web APIs (<a href="https://developer.mozilla.org/en-US/docs/Web/API/WebSocket">Websocket</a>, <a href="https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage">localstorage</a>)
  * <a href="https://yarnpkg.com/">yarn</a> (package manager)
  * <a href="https://vitejs.dev/">vite</a> (React project boilerplate code generator).
- Backend:
  * <a href="https://drogon.org/">Drogon</a> (HTTP / Websocket backend)
  * <a href="https://github.com/TokTok/c-toxcore">Tox</a> (Peer 2 Peer communication layer)
  * <a href="https://github.com/atollk/copper">Copper</a> (Implements a queue used by the event loop)
  * <a href="https://github.com/google/glog">GoogleLog</a> (For logging)
  
## Source Code organisation

## Security measures

## Compiling and Running

## Running it inside Docker

## Demo video

