const users=[]

const formulario = Vue.createApp({

    methods:{

        addUsers(){
           const usr = {
            nombre: this.nombre,
            apellido: this.apellido,
            sector: this.sector,
            cedula: this.cedula,
            pais:  this.pais
        } ;
        this.lista.push(usr)
        console.log(usr)
        }

    },
    watch: {

    },

    data(){
        return{
            lista : users,
            nombre : null,
            apellido : null,
            sector : null,
            cedula : null,
            pais : null
        }
    }

})

formulario.mount("#idFormulario")