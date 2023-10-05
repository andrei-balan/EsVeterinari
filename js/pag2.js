window.onload = async function()
{
    let queryString = window.location.search;

    
    queryString = queryString.substring(1);
    
   
    let params = {};
    queryString.split("&").forEach(function(pair) {
        let keyValue = pair.split("=");
        let key = decodeURIComponent(keyValue[0]);
        let value = decodeURIComponent(keyValue[1]);
        params[key] = value;
    });
    
    
    console.log(params.parametro1); 
    console.log(params.parametro2); 

    invia = document.getElementById("invia")
    elenco = document.getElementById("elencoVisite")
    indietro = document.getElementById("indietro");
    indietro.addEventListener("click", cambiaPag2);
    nome = document.getElementById("txtNome")
    proprietario = document.getElementById("txtProp")
    
    
    visita = document.getElementById("txtVisita")
    invia.addEventListener("click",submit)
    let dataN = document.getElementById("lblDataN");

    let datiP = await fetch("http://localhost/4a/EsPazienti/server/getDati.php", {method: 'GET'});
    let paz = await datiP.json();
    console.log(paz)
    for (let el of paz) {
        /*
        let p = `<p>Visita a ${el.np == params.parametro1 ? el.np : ""} - Proprietario di ${el.cp} - a causa ${el.vis} </p>
        `   
        */
       if(el.np == params.parametro1)
        {
            let p = `<p>Visita a ${el.np} - Proprietario di ${el.cp} - a causa ${el.vis} </p>`
            elenco.innerHTML += p
            dataN.innerText = "età - "+(2023 - parseInt(el.dn.split("-")[0]) + " anni");
            nome.value = el.np;
            proprietario.value = el.cp
            visita.value = el.vis;
            console.log(el.dn.replaceAll('-','/'))
            
            dataN.value = el.dn.replaceAll('-','/');
            
         
            


            
        }       
        console.log("anno - " +el.dn.split("-")[0] + " età " + (2023 - parseInt(el.dn.split("-")[0]))+ " anni")
        //dataN.innerText = 2023 - parseInt(el.dn.split("-")[0]);
    }


}
function cambiaPag2() {
   
    window.location.href = "index.html";
}
function submit(){
    nome = document.getElementById("txtNome")
    proprietario = document.getElementById("txtProp")
    dataN = document.getElementById("dtN");
    visita = document.getElementById("txtVisita")



    if(nome.value && proprietario.value && dataN.value && visita.value)
    {
        let obj = {"nome" : nome.value,
                    "proprietario" :proprietario.value,
                    "dataN": dataN.value,
                    "visita":visita.value
    }
    console.log(obj)
       fetch("http://localhost/4a/EsPazienti/server/submitDati.php", {method: 'post', body:JSON.stringify(obj)})
    }
    else{
        alert("dati mancanti")
    }
}
