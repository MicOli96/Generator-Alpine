import './style.css'
import Alpine from 'alpinejs'
import { template } from './template'

declare global {
  interface Window {
    Alpine: typeof Alpine
  }
}
window.Alpine = Alpine

document.querySelector("main")!.innerHTML = template()

Alpine.start()