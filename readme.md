## BartJS generators-talk

> Med ES6 blir iteratorer og generatorer en del av språket og man får selv muligheten til å avgjøre hvordan for loops oppfører seg. Med generators kan eksekveringen av funksjoner stoppes og senere gjenopptas, noe som byr på interessante bruksområder også utover ren iterasjon - spesielt i kombinasjon med promises.


<a href="http://bit.ly/es6-generators">Slides</a>

### Examples require node > 0.11:

    npm install

Make yield wait for async operation

    node --harmony demo-async.js

Promises recap

    node demo-promises.js

Generators and promises combined

    node --harmony demo-generators-promises.js

ES6 in the browser

    open demo-browser.html
