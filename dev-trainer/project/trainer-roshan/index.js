import Calculator from './calculator/index.js'
import Clock from './clock/index.js'

const calculator = new Calculator()
const calculator2 = new Calculator()
const clock = new Clock({
    second: 23,
    minute: 20,
    hour: 2,
    meridiem: 'PM'
}, {
    hideButton: false,
})
clock.render(document.getElementById('root'))
calculator.render(document.getElementById('root2'))
calculator2.render(document.getElementById('root3'))