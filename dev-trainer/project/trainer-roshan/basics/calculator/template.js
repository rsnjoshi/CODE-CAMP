export default options => (`
        
            <div class="calculator__display">
                <div class="calculator__display-output">0</div>
            </div>
            <div class="calculator__body">
                <button class="calculator__body-key" data-operator="add">+</button>
                <button class="calculator__body-key" data-operator="subtract">-</button>
                <button class="calculator__body-key" data-operator="multiply">&times</button>
                <button class="calculator__body-key" data-operator="divide">/</button>
                <button class="calculator__body-key" data-value="7">7</button>
                <button class="calculator__body-key" data-value="8">8</button>
                <button class="calculator__body-key" data-value="9">9</button>
                <button class="calculator__body-key" data-action="clear">CE</button>
                <button class="calculator__body-key" data-value="4">4</button>
                <button class="calculator__body-key" data-value="5">5</button>
                <button class="calculator__body-key" data-value="6">6</button>
                <button class="calculator__body-key calculator__body-equal" data-action="equals">=</button>
                <button class="calculator__body-key" data-value="1">1</button>
                <button class="calculator__body-key" data-value="2">2</button>
                <button class="calculator__body-key" data-value="3">3</button>
                <button class="calculator__body-key calculator__body-zero" data-value="0">0</button>
                <button class="calculator__body-key" data-prefix="point">.</button>
            </div>

`)