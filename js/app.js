// archivo de configuración
// es donde creo mi aplicación de Vue


// vue trabaja con opciones conocida como OPTIONS API

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
  methods: {

    cambiarMensaje() {
      console.log("se está cambiando el mensaje")
      this.mensaje = "Francisco Chanataxi"
      console.log(this.mensaje)
    },

    cambiarNumero(){
      this.valor =+ this.valor +1
      console.log(this.valor)
    }

  },
  watch: {

  },
  //estructura del data
  data() {
    return {
      mensaje: "hola mundo desde Vue.js",
      valor: 100
    }
  }


})


app.mount('#myApp')