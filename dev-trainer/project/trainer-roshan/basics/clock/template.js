export default options => (`
    <div class="clock__frame">
        <div class="hour">10</div>
        <div class="tick">:</div>
        <div class="minute">23</div>
        <div class="tick">:</div>
        <div class="second">45</div>
        <div class="meridiem">AM</div>
    </div>
    <div class="clock__buttons" style="display: ${options.visibility}">
        <button class="reset">Reset</button>
        <button class="start">Start</button>
        <button class="stop">Stop</button>
    </div>
`)
