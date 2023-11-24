const sumar = (n1,n2) => n1 +n2 ;

const sumarCompleto =() =>{
    var resultado = parsear('idn1') + parsear('idn2');
    console.log(resultado)
    document.getElementById('idresul').innerText = resultado;
}

const restarLambda=()=>{
    var resultado = parsear('idn1') - parsear('idn2')
    console.log(resultado)
    document.getElementById('idresul').innerText = resultado;
}

const multLambda=()=>{
    var resultado = parsear('idn1') * parsear('idn2')
    console.log(resultado)
    document.getElementById('idresul').innerText = resultado;
}

const divLambda=()=>{
    var resultado = parsear('idn1') / parsear('idn2')
    console.log(resultado)
    document.getElementById('idresul').innerText = resultado;
}

const cambiarFoto =()=> document.getElementById("imagen1").src='https://www.icegif.com/wp-content/uploads/memes-icegif-16.gif'

const parsear=(id)=> parseInt(document.getElementById(id).value);

function conceptosJS(){

    let var1 = 10 ;
    let var1Texto = 'texto1'
    console.log(var1);
    console.log(var1Texto);

    var var2 = 10 ;
    var var2Texto = 'texto2'
    console.log(var2);
    console.log(var2Texto);

    const const1 = 10 ;
    const const1Texto = 'texto2';
    console.log(const1);
    console.log(const1Texto);

    //Declaracion de arreglos 
    // de tipo constante 
    const diasSemana=["lunes","martes","miercoles","jueves","viernes"];
    console.log(diasSemana)

    //Podemos acceder a cada elemento 
    console.log(diasSemana[0])
    console.log(diasSemana[4])
    console.log(diasSemana[5])
    diasSemana[5]="SABADO"
    console.log(diasSemana[5])
    // inserta al final del arreglo
    diasSemana.push("Domingo")
    console.log(diasSemana)
    //inserta al inicio del arreglo
    diasSemana.unshift("feriado")
    console.log(diasSemana)

    const edades=[6,7,8]
    console.log(edades)
    const edades2 = [1,2,3,4]
    console.log(edades2)
    //para concatenar dos arreglos
    const edadesFinales = edades.concat(edades2)
    console.log(edadesFinales)

    //forEach
    for(const dia of diasSemana){
        console.log(dia)
        //comparacion
        if(dia === "martes"){
            console.log('martes dos por uno')
        }
    }

    //declaracion de objetos
    // se declara directamente el objeto instanciado
    // objeto se lo puede ver como clave valor
    // Nomenclatura se maneja muy similar en formato json  

    const estudiante ={
        nombre:"Francisco",
        apellido:"Chanataxi",
        edad:22,
        genero:"Maculino",
        ciudad:"Quito"
    }

    //Para acceder a los atributos del objeto lo hacemos directamente

    console.log(estudiante)
    console.log(estudiante.apellido)
    estudiante.nombre="José"
    console.log(estudiante.nombre)
    console.log(estudiante)

    //--------------------------------------------------

    const persona={
        nombre:"Francisco",
        apellido:"Chanataxi",
        edad:22,
        genero:"Maculino",
        direccion:{
            callePrincipal:"America",
            calleSecundaria:"La gasca",
            numeracion:"oe3-89",
            barrio:"Carapungo"
        }

    }

    console.log(persona)
    console.log(persona.direccion)
    console.log(persona.direccion.barrio)

    // arreglo de cuatro pacientes con tres atributos ;

 

    const Np =(nombre1 , num1 , Enfermedad1)=>{

        const pacientes={
            nombre:nombre1,
            num:num1,
            Enfermedad:Enfermedad1,
        }
        return pacientes;

    }
    
const arregloPaciente=[Np("Marco","1","N/A"),Np("Nayeli","2","N/A"),Np("Abigail","1","N/A")]
//const arregloPaciente1=[{},{},{}]

console.log(arregloPaciente)
console.table(arregloPaciente)
console.log(arregloPaciente[1])

//DESESTRUCTURACION

const diasSemana2=["Lunes","Martes","Miercoles","Jueves","Viernes"]
const[dia1,dia2,dia3,dia4,dia5]=diasSemana2
console.log(dia1)
console.log(dia5)

/////// manera directa
const[d1,d2,d3,d4,d5]=["Lunes","Martes","Miercoles","Jueves","Viernes"]
console.log(d2)
console.log(d4)

//DESESTRUCTURACION DE OBJETOS
const vehiculo ={marca:"Toyota ",modelo:"Prius",anio:2021}
const {marca, modelo,anio}= vehiculo
console.log(marca)

//un objeto que tenga como atributo 

const animal ={
    especie:"Mamifero",
    edad:23,
    zoo:{
        sector:"Amaguania",
        NombreZoo :"los Animales",
        telefono :2323322323
    }
}

const{especie,edad, zoo:{sector,NombreZoo,telefono}}=animal;
console.log(edad);
console.log(telefono);
console.log(sector);




}