import { invoke } from "@tauri-apps/api";

const app = document.querySelector("#app");
if (!app) throw new Error("App not found");

const result = await invoke("greet", { name: "vite + ts" });

app.innerHTML = `
    <h1>${result}</h1>
  `;
