
alert ("Bienvenido a Cervecería Huaquero")

function pedirDatos() {
    let nombre = prompt("Ingrese su nombre");
    let mensaje = `Su nombre es ${nombre} y su contraseña es iLoveCervezas`;
    alert(mensaje);
}

pedirDatos();

let edad = parseInt(prompt("Ingrese su edad"))

if (edad > 18) {

    alert("Eliga Una Cerveza")
    let cerveza = prompt( "Saison (S/12)" + " | Maracuya (S/15)"  +  " | Golden Ale (S/17)" )

    if(cerveza.toUpperCase() === "SAISON"){
        alert("Has elegido Saison");
        let cantidad = prompt("¿Cuantas cervezas quieres?")
            let resultado = alert ( cantidad +" cervezas" + " son " + cantidad * 12 + " soles") 

            let contraseña = prompt("Ingrese su contraseña");

            while (contraseña != "iLoveCervezas") {
              switch (contraseña) {
                case "iLoveCervezas":
                  alert("COMPRA REALIZADA CON ÉXITO");
                    break;

                default:
                  alert("CONTRASEÑA INCORRECTA");
                  break; 
              }
              contraseña = prompt("Ingrese su contraseña")
            }
            alert("COMPRA REALIZADA CON ÉXITO");
            alert("TENGA BUEN DIA")

    }else if (cerveza.toUpperCase() === "MARACUYA") {
        alert("Has Elegido Maracuyá");
        let cantidad = prompt("¿Cuantas cervezas quieres?")
             let resultado = alert ( cantidad +" cervezas" + " son " + cantidad * 15 + " soles") 

             let contraseña = prompt("Ingrese su contraseña");

             while (contraseña != "iLoveCervezas") {
                switch (contraseña) {
                  case "iLoveCervezas":
                    break;  

                  default:
                    alert("CONTRASEÑA INCORRECTA");
                    break; 
                               
                }
                contraseña = prompt("Ingrese su contraseña")
            
            }
              alert("COMPRA REALIZADA CON ÉXITO");
              alert("TENGA BUEN DIA")


    }else if (cerveza.toUpperCase () === "GOLDEN ALE"){
        alert("Has elegido Golden ale")
        let cantidad = prompt("¿Cuantas cervezas quieres?")
            let resultado = alert ( cantidad +" cervezas" + " son " + cantidad * 17 + " soles")  

            let contraseña = prompt("Ingrese su contraseña");

            while (contraseña != "iLoveCervezas") {
                switch (contraseña) {
                  case "iLoveCervezas":
                    break;
                  
                  default:
                    alert("CONTRASEÑA INCORRECTA");
                    break; 
                    
                }
                contraseña = prompt("Ingrese su contraseña")
              }
              alert("COMPRA REALIZADA CON ÉXITO");
              alert("TENGA BUEN DIA")

    }else
        alert("NO has elegido nada")

}else if(edad < 18){
    alert("No Eres Bienvenido")

} else{
    alert("Ingrese Un Número");
}



