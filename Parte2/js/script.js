      

      /*
        Desarrolla la lógica para convertir los valores del textArea en minusculas: 

        Tip: Divide el problema en partes pequeñas. 

        1) Primero recupera los valores utilizando el DOM y los metodos que vimos en clase. 
        2) Parte los valores por la coma (,). TIP. Utiliza la función split
        3) convierte los valores a minuscula con alguna de las funciones de javascript. 
        4) Escribe en el textArea los nuevos valores

        Realiza todo lo anterior al hacer click en el botón. 
        */
        let btnMin = document.getElementById("btn_mayusculas").addEventListener("click",recuperaDatos);

        function recuperaDatos(e) {
          e.preventDefault()
          let names = document.getElementById("txt_may").value
          console.log(names)
        let newNames =names.split(',');
          console.log(newNames)
          let finalNames= newNames.map((element) => {
            return element.toLowerCase();
          });
          console.log(finalNames);
        
        }


      /*
        Crea una funcion llamada "calculateDogAge" que: 
    
    - reciba como argumento un número representando la edad en años humanos.
    - realiza el cálculo de la edad en base a la conversión 1 año humano = 7 años perro.  
    - Deberá escribir en valor convertido. 
    - Recuerda utilizar preventDefault() como lo vimos en clase para evitar que el formulario se envie. 
    - Ojo: Cuando se lee un valor de cualquier formulario, el tipo de dato por default es string. 
           Deberás convertir el string a Entero. 
    
    */
           let btnAños = document.getElementById("btn_añoshumano").addEventListener("click",calculateDogAge);
        
           function calculateDogAge(e){
          e.preventDefault();
        let edadH= document.getElementById("edad_humano").value;
        console.log(edadH)
        let edadP=edadH*7;
        console.log(edadP)
        document.getElementById("edad_perro").value=edadP;


        }


      /*  OBJETOS 
    
    A) Crea un constructor de tipo "Pokemon" que reciba 4 parametros
    
    1) Nombre
    2) Especie
    3) Ataque
    4) Defensa
*/
        function Pokemon(nombre,especie,ataque,defensa){
          this.nombre=nombre;
          this.especie=especie;
          this.ataque=ataque;
          this.defensa=defensa;
        }

        let btnPoke= document.getElementById("btn_muestra").addEventListener("click",PokemonMuestra);

        function PokemonMuestra(e){
          e.preventDefault();
          let nombrePokemon= document.getElementById("nombre_poke1").value;
          let especiePokemon= document.getElementById("especie_poke1").value;
          let ataquePokemon= document.getElementById("ataque_poke1").value;
          let defensaPokemon= document.getElementById("defensa_poke1").value;
          let nombre2Pokemon= document.getElementById("nombre_poke2").value;
          let especie2Pokemon= document.getElementById("especie_poke2").value;
          let ataque2Pokemon= document.getElementById("ataque_poke2").value;
          let defensa2Pokemon= document.getElementById("defensa_poke2").value;

          let pokemon1=new Pokemon(nombrePokemon,especiePokemon,ataquePokemon,defensaPokemon);
          let pokemon2=new Pokemon(nombre2Pokemon,especie2Pokemon,ataque2Pokemon,defensa2Pokemon);

          document.getElementById("nombre_poke1").value=pokemon1.nombrePokemon;
          document.getElementById("especie_poke1").value=pokemon1.especiePokemon
          document.getElementById("ataque_poke1").value=pokemon1.ataquePokemon;
          document.getElementById("defensa_poke1").value=pokemon1.defensaPokemon
          document.getElementById("nombre_poke2").value=pokemon2.nombre2Pokemon
          document.getElementById("especie_poke2").value=pokemon2.especie2Pokemon
          document.getElementById("ataque_poke2").value=pokemon2.ataque2Pokemon;
          document.getElementById("defensa_poke21").value=pokemon2.defensa2Pokemon;

        }
        

    
    /*
    B) Crea 2 objectos  con diferentes valores. Para los despistados, existen 18 especies de pokeon: 
       Bicho, Dragón, Eléctrico, Hada, Lucha, Fuego, Volador, Fantasma, Planta, Tierra, Hielo, Normal, Veneno, Psíquico, Roca, Acero y Agua
       El Nombre y la Especie son Strings, Ataque y Defensa numericos.
       
       Registra un evento de "click", para que cuando se de click en el botón, se muestren las propiedades de cada objeto en el input correspondiente. 

     */