import View from '../View/index.js'
import template from './template.pug'

export default class Dashboard extends View {
    initialize(data, options) {
        this.storage = window.localStorage
    }

    templateFunction() {
        return template
    }

    templateContext() {
        return {
            name: this.storage.getItem('loggedInfo')
        }
    }

    getAttributes() {
        return {
            class: 'landingView'
        }
    }
}