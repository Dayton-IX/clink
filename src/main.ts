import type { tauri } from '@tauri-apps/api'
import './app.css'
import App from './App.svelte'
import { invoke } from '@tauri-apps/api';

invoke('greet', {name: "World"})
  .then((res) => console.log(res))

const app = new App({
  target: document.getElementById('app')
})

export default app
