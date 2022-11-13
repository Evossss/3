var reponse = document.getElementById("reponse");
var boutonValider = document.getElementById("boutonValider");

boutonValider.onclick= function() {
     if (reponse.value === "Bibliothèque"){
        reponse.value="https://evossss.github.io/4/";
    }
    else{reponse.value="Falsche Antwort";
}
    }



