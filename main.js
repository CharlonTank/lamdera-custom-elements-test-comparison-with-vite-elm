import "./style.css";
import { Elm } from "./src/Main.elm";

export class EditableStuff extends HTMLElement {
    connectedCallback() {
        console.log("This is my webcomponent!")
        let pre = document.createElement('pre')
        let code = document.createElement('code')
        code.innerHTML = this.elmElement
        console.log(this.elmElement)
        pre.appendChild(code)
        this.appendChild(pre)
    }

    set elmElement(newValue) {
        console.log("Getting new value in JS")
        if (newValue) {
            console.log(newValue)
        }
    }
}

window.customElements.define('editable-stuff', EditableStuff);

if (process.env.NODE_ENV === "development") {
    const ElmDebugTransform = await import("elm-debug-transformer")

    ElmDebugTransform.register({
        simple_mode: true
    })
}

const root = document.querySelector("#app div");
const app = Elm.Main.init({ node: root });
