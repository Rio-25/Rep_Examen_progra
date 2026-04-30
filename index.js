function girar(){
    document.getElementById("center1").textContent=""
    document.getElementById("img1").textContent=""
    document.getElementById("img2").textContent=""    

    let dado1 = Math.floor(Math.random()*6+1)
    let dado2 = Math.floor(Math.random()*6+1)

    console.log(dado1)
    console.log(dado2)

    let images1 = document.createElement("img")    
    images1.src="./imagenes/dados/"+dado1+".jpg"   
    document.getElementById("img1").appendChild(images1)
    
    let images2 = document.createElement("img")    
    images2.src="./imagenes/dados/"+dado2+".jpg" 
    document.getElementById("img2").appendChild(images2)

    let resul = dado1 + dado2
    
    let pokemon = document.createElement("img")
    if(resul<10){
        pokemon.src="./imagenes/pokemones/00"+resul+".png"        
    }else{
        pokemon.src="./imagenes/pokemones/0"+resul+".png"        
    }
    document.getElementById("p3").appendChild(pokemon)
}