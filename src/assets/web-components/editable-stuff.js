export class EditableStuff extends HTMLElement {
    connectedCallback() {
        console.log("This is my webcomponent!")
        console.log(this.userInput)

        let pre = document.createElement('pre')
        let code = document.createElement('code')
        code.classList.add('language-elm')
        code.innerHTML = this.userInput
        pre.appendChild(code)
        this.appendChild(pre)
    }

    set userInput(newValue) {
        console.log("JE SUIS LA")
        console.log(newValue)
    }

}
