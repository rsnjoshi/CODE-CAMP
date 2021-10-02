import View from './../../View/index.js'
import template from './template.pug'
import $ from 'jquery'
import _ from 'lodash'

export default class Login extends View {
    initialize(data, options) {
        this.usernameField = null
        this.passwordField = null
        this.errorField = null
        this.payload = {
            username: '',
            password: '',
        }
        this.currentPath = data.currentPath
        this.router = data.router
        this.masterView = data.masterView
        this.storage = window.localStorage
    }

    templateFunction() {
        return template
    }

    templateContext() {
        return {

        }
    }

    getAttributes() {
        return {
            class: 'LoginView',
        }
    }

    setDomEvents() {
        return {
            '.logIn click': this.logger.bind(this)
        }
    }

    onRender(){
        this.usernameField = this.$el.find('input[name=username]')
        this.passwordField = this.$el.find('input[name=password]')
        this.errorField = this.$el.find('.err')
    }

    logger() {
        this.payload.username = this.usernameField.val()
        this.payload.password = this.passwordField.val()
        const validation = this.validate()
        if (validation === true) {
            this.errorField.text('')
            $.ajax(
                'http://localhost:7000/users',
                {
                    data: {},
                    type: 'GET'
                }
            )
                .then(data => {
                    const user = _.find(data, usr => {
                        return usr.username === this.payload.username && usr.password === this.payload.password
                    })
                    if (user) {
                        this.storage.setItem('loggedIn', true)
                        this.storage.setItem('loggedInfo', user.firstName)
                        this.masterView.header(true)
                        this.router.navigate(this.currentPath)
                    } else {
                        this.errorField.text('Invalid Credentials')
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            this.errorField.text(validation)
        }
    }

    validate() {
        const { username, password } = this.payload
        if (username === '') return '*Username is required'
        if (password === '') return '*Password is required'
        return true
    }
}