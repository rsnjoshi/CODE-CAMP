import View from '../View/index.js'
import template from './template.pug'
import Calculator from '../calculator/index.js'
import Clock from '../clock/index.js'
import Dashboard from '../Dashboard/index.js'
import Router from '../services/router/router.js'

export default class LandingView extends View {
    initialize(data, option) {
        this.appRouter = null
        this.storage = window.localStorage
    }

    templateFunction() {
        return template
    }

    getAttributes() {
        return {
            class: 'landingPage'
        }
    }

    setDomEvents() {
        return {
            '#home click': this.navigate.bind(this),
            '#logout click': this.logout.bind(this),
            '#clock click': this.navigate.bind(this),
            '#calculator click': this.navigate.bind(this),
        }
    }

    onRender() {
        if (this.storage.getItem('loggedIn') === 'true') this.header(true)
        const routerHook = this.$el.find('#childHook')
        const appRoutes = [
            {
                path: '/',
                view: Dashboard,
            },
            {
                path: '/calculator',
                view: Calculator,
            },
            {
                path: '/clock',
                childRoute: [
                    {
                        path: '/',
                        view: Clock,
                    },
                    {
                        path: '/calculator',
                        view: Calculator
                    },
                ]
            },
        ]
        this.appRouter = new Router(appRoutes, routerHook, this)
        this.appRouter.init()
    }

    navigate(event) {
        let targetRoute = event.target.id
        if (targetRoute === 'home') targetRoute = ''
        if (targetRoute === 'nested') targetRoute = 'clock/calculator'
        this.appRouter.navigate(`/${targetRoute}`)
    }

    header(state) {
        this.$el.find('navbar').css({
            display: state ? 'block' : 'none',
        })
    }

    logout() {
        this.storage.setItem('loggedIn', false)
        this.storage.setItem('loggedInfo', undefined)
        this.header(false)
        this.appRouter.navigate('/')
    }
}