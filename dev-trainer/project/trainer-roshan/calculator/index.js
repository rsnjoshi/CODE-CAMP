import View from '../View/index.js'
import template from './template.js'

export default class Calculator extends View {
    initialize() {

    }

    setDomEvents() {
        return {
            '.calculator__body-key click': () => { console.log('i was clicked') }
        }
    }

    templateFunction() {
        return template
    }

    getAttributes() {
        return {
            class: 'calculator__frame',
        }
    }

    onBeforeRender() {
        console.log('rendering......')
    }

    onRender() {
        console.log('rendered successfully')
    }

}