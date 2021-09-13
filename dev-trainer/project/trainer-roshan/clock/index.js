import View from "../View/index.js";
import template from "./template.js";

export default class Clock extends View {
    initialize(data, options) {
        this.second = data && data.second ? data.second : 10
        this.minute = data && data.minute ? data.minute : 25
        this.hour = data && data.hour ? data.hour : 12
        this.meridiem = data && data.meridiem ? data.meridiem : 'PM'
        this.hideButton = options && options.hideButton
        this.oscillator = null
    }

    templateFunction() {
        return template
    }

    templateContext() {
        return {
            visibility: this.hideButton ? 'none' : 'block',
        }
    }

    getAttributes() {
        return {
            class: 'clock',
        }
    }

    setDomEvents() {
        return {
            '.reset click': this.reset.bind(this),
            '.start click': this.start.bind(this),
            '.stop click': this.stop.bind(this),
        }
    }

    onRender() {
        this.start()
    }

    update() {
        if (this.second >= 59) {
            this.second = 0
            this.minute += 1
            if (this.minute > 59) {
                this.minute = 0
                this.hour += 1
                if(this.hour > 12) {
                    this.hour = 1
                    if (this.meridiem === 'AM') this.meridiem = 'PM'
                    else this.meridiem = 'AM'
                }
            }
        } else {
            this.second += 1
        }
        this.updateContent()
    }

    updateContent() {
        this.refreshDisplay(this.second, 'second')
        this.refreshDisplay(this.minute, 'minute')
        this.refreshDisplay(this.hour, 'hour')
    }

    refreshDisplay(val, name) {
        const cont = this.$el.getElementsByClassName(name)[0]
        const meridiem = this.$el.getElementsByClassName('meridiem')[0]
        cont.innerText = val < 10 ? `0${val}` : val
        meridiem.innerText = this.meridiem
    }

    reset() {
        this.second = 0
        this.minute = 0
        this.hour = 12
        this.meridiem = 'AM'
        this.stop()
        this.updateContent()
    }

    start() {
        this.oscillator = setInterval(this.update.bind(this), 1000)
    }

    stop() {
        if (this.oscillator) clearInterval(this.oscillator)
        this.oscillator = null
    }
}