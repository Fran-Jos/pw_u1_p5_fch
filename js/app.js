console.log("elementos vue")
console.log(Vue)

const app = Vue.createApp({

  /*  template:`
    <h1>Hola Mundo</h1>
    <p>Desde App.js</p>
   
    <h6>{{1+1}}</h6>
    <p>{{[1,2,3,4,5,6,7]}}</p>
    <p>{{false? "verdadero ; 'falso'"}}</p>

    `
    */
})

app.mount('#myApp')