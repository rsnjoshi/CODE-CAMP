import _ from 'lodash'
import NotFound from '../404/index.js'

export default class Router {
    constructor(routes, el) {
        this.routes = routes
        this.$el = el
        this.pathSegments = null
        this.tempRoutes = null
        this.currentPath = null
    }

    init() {
        this.currentPath = window.location.pathname
        this.pathSegments = this.currentPath.split('/')
        this.pathSegments.shift()
        this.tempRoutes = _.cloneDeep(this.routes)
        this.drillRoute()
    }

    navigate(route) {
        window.history.pushState('', route, route)
        this.init()
    }

    drillRoute() {
        let currentRouteId = this.pathSegments.shift()
        if (currentRouteId === undefined) currentRouteId = ''
        const route = _.filter(this.tempRoutes, route => (route.path === '/' + currentRouteId))[0]
        if (!route) {
            (new NotFound()).render(this.$el)
            return
        }
        if(!('childRoute' in route)) {
            const View = new route.view()
            View.render(this.$el)
            return
        } else {
            this.tempRoutes = _.cloneDeep(route.childRoute)
            this.drillRoute()
        }
    }
}