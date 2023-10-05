let urlB = window.location.href
window.onload = async function(){
    const indietro = document.getElementById("indietro")
    const animale = document.getElementById("animale")
    const prop = document.getElementById("proprietario")
    let datiP = await fetch("http://localhost/4a/EsPazienti/server/getDati.php", {method: 'GET'});
    let paz = await datiP.json();
    console.log(paz)
    for (let el of paz) {
        let p = document.createElement("p");
        p.textContent = el.np;
        p.classList.add("pAni"); 
        animale.appendChild(p);
    
        let p2 = document.createElement("p");
        p2.textContent = el.cp;
        prop.appendChild(p2);
        
        p.addEventListener("click", function() {
            
            let parametro1 = el.np;
            
    
            
            window.location.href = "pag2.html?parametro1=" + parametro1;
        });
    }

    
    avanti = document.getElementById("avanti");
    avanti.addEventListener("click", cambiaPag);
    
    
    
    
}

function cambiaPag() {
   
    window.location.href = "pag2.html";
}

