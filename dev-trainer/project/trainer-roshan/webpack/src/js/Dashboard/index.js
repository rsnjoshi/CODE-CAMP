import View from '../View/index.js'
import template from './template.pug'

export default class Dashboard extends View {
    initialize(data, options) {

    }

    templateFunction() {
        return template
    }

    getAttributes() {
        return {
            class: 'landingView'
        }
    }
}