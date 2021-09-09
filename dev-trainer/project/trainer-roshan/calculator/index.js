import View from '../View/index.js'
import template from './template.js'

export default class Calculator extends View {
    initialize(data, option) {
        this.currentValue = '0'
        this.accumulator = 0
        this.operator = null
        this.previousOperator = null
        this.finalValue = 0
    }

    setDomEvents() {
        return {
            '.calculator__body-key click': this.updateCalculator.bind(this)
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

    updateCalculator(event){
        const action = Object.keys(event.target.dataset)[0]
        const value = Object.values(event.target.dataset)[0]
        
        switch(action) {
            case 'value':
                this.handleValue(value)
                break;
            case 'action':
                this.handleAction(value)
                break;
            case 'prefix':
                this.handleValue('.')
                break;
            case 'operator':
                this.handleOperator(value)
                break;
            default:
                break;
        }
    }

    handleValue(value) {
        if (value === '.' && this.currentValue.split('').indexOf('.') !== -1) return
        if (this.currentValue.length >= 20) return
        if (this.currentValue !== '0') this.currentValue += value
        else this.currentValue = value
        this.refreshDisplay(this.currentValue)
    }

    handleOperator(operator) {
        console.log(operator)

    }

    handleAction(action) {
        console.log(action)

    }

    refreshDisplay(text) {
        const display = this.$el.querySelector(".calculator__display-output")
        display.textContent = ''
        setTimeout(() => {
            display.textContent = text
        }, 50)
    }

    calculateValue() {
        
    }

}