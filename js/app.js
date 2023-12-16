// archivo de configuración
// es donde creo mi aplicación de Vue


// vue trabaja con opciones conocida como OPTIONS API

console.log("elementos vue")
console.log(Vue)

const estudiantes=[
  {nombre:"" , apellido:"Chanataxi"},
  {nombre:"Nayely", apellido:"Urquizo"},
  {nombre:"Luis", apellido:"Paredes"},
  {nombre:"Mercedes", apellido:"Velez"},
  {nombre:"Isaac", apellido:"Mancheno"},
]
console.log(estudiantes)
console.table(estudiantes)

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
    },

    agregarEstudiante(){
      console.log("Agregando Estudiante")
      const estu={nombre:this.nombre, apellido:this.apellido};
      this.lista.unshift(estu)
      this.lista.push(estu)
    },

    presionandoTecla(charCode){
      console.log("Presionando.......")
      console.log(charCode)

    },
    agregarestu({charCode}){
      if(charCode === 13){
        this.agregarEstudiante()
      } 
    },

    
    agregarEstudianteMod(){
     console.log("presionando2......")
     this.agregarEstudiante
     console.log(this.nombre)
    }

  },
  watch: {

  },
  //estructura del data
  data() {
    return {
      mensaje: "hola mundo desde Vue.js",
      valor: 100,
      lista : estudiantes,
      nombre : undefined,
      apellido : null

    }
  }


})


app.mount('#myApp')