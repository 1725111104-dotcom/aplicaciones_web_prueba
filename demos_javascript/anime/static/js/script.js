async function verAnime(){
    //console.log("Funciona!!!!!")

    try{
        const uri = "https://api.animechan.io/v1/quotes/random";
        const datos_random = document.getElementById("datos_random");
        const response = await fetch(uri);
        const { data } = await response.json();
        console.log("DATA: ", data);
        datos_random.textContent = data.content;

    } catch (error){
        console.error("Ups algo falló: ", error.message);
    }
}