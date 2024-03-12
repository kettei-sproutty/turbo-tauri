import { invoke } from "@tauri-apps/api";

const app = document.querySelector('#app');
if (!app) throw new Error('App not found');

invoke('greet', { name: 'vite + ts' }).then((result) => {
  app.innerHTML = `
    <h1>${result}</h1>
  `;
});
