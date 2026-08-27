import './style.css'
import Alpine from 'alpinejs'
import { template } from './template'
import app from "./app";

declare global {
  interface Window {
    Alpine: typeof Alpine
  }
}
window.Alpine = Alpine

Alpine.data("app", app)

document.querySelector("main")!.innerHTML = template()

Alpine.start()