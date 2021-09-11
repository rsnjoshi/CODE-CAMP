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

    hasOperatorChanged(operator) {
        return this.operator !== operator
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
        if (this.operator) {
            this.accumulator = +this.currentValue
            this.currentValue = '0'
            this.previousOperator = this.operator
            this.operator = null
        }
        if (this.currentValue.length >= 20) return
        if (this.currentValue !== '0') this.currentValue += value
        else this.currentValue = value
        this.refreshDisplay(this.currentValue)
    }

    handleOperator(operator) {
        if (this.hasOperatorChanged(operator)){
            if (this.previousOperator) {
                this.calculateValue()
                this.previousOperator = null
            }
            this.operator = operator
        }

    }

    handleAction(action) {
        switch(action) {
            case 'clear':
                this.hardReset()
                break
            case 'equals':
                this.finalCalculation()
                break
            default:
                break
        }

    }

    refreshDisplay(text) {
        const display = this.$el.querySelector(".calculator__display-output")
        display.textContent = ''
        setTimeout(() => {
            display.textContent = text
        }, 50)
    }

    calculateValue() {
        switch(this.previousOperator) {
            case 'add':
                this.accumulator = this.round(this.accumulator += +this.currentValue, 2)
                break
            case 'subtract':
                this.accumulator = this.round(this.accumulator -= +this.currentValue, 2)
                break
            case 'multiply':
                this.accumulator = this.round(this.accumulator *= +this.currentValue, 2)
                break
            case 'divide':
                this.accumulator = this.round(this.accumulator /= +this.currentValue, 2)
                break
            default:
                break
        }

        this.refreshDisplay(this.accumulator)
        this.currentValue = this.accumulator
    }

    finalCalculation() {
        if(!this.previousOperator) {
            this.refreshDisplay(this.currentValue)
            return
        }
        if(!this.finalValue) {
            this.calculateValue()
            this.finalValue = this.accumulator
            this.reset()
            this.currentValue = `${this.finalValue}`
            this.refreshDisplay(this.currentValue)
        }
    }

    hardReset() {
        this.reset()
        this.finalValue = 0
    }

    reset() {
        this.currentValue = '0'
        this.accumulator = 0
        this.operator = null
        this.previousOperator = null
        this.refreshDisplay(this.currentValue)
    }

    round(value, place) {
        if (value == null) {
            return value
        }
        const x = 10 ** place
        return Math.round(value * x) / x
    }

}