
// Request status
const  xhr = new XMLHttpRequest();
const  url = "./api/president.json";
const  parent = document.querySelector("div");


 xhr.onreadystatechange = () => {

        // Vérifier si la requête de récupération est terminée
        if (xhr.readyState == 4 && xhr.status == 200) { 
        
          // Parse jSon, pour transformer le fichier txt en flux json
          let jsonData = JSON.parse(xhr.responseText);
            console.log(jsonData)
          // appel de la méthode, passage en paramètre de la requete  
          showProd(jsonData);
        }
        else{
        console.log("erreur de requête");
        parent.innerHTML = `<p>Erreur de requête : ${xhr.status}</p>`
    }
};

// traitement des données récupérées 
const showProd=(data)=>{

    let output = '<ul id="collection" class="primary_grid">'; // Open list
    let i;
    
    // itération sur les donnée depuis l'objet data
    for (i in data.president) {
        output += `<li>
        <figure>
        <img src="${data.president[i].image}" alt="${data.president[i].nom}">
        <figcpation>
                <li>Nom : ${data.president[i].nom}</li>
                   <li>Mandat : ${data.president[i].mandat}</li>
                   <li>naissance : ${data.president[i].naissance}</li>
                   <li>status : ${data.president[i].status} </li>
                   </figcpation>
                   </figure>
                 `; 
        
    }
    
    output += "</ul>"; 
 
    
    document.querySelector("div").innerHTML = `${output}`;
    localStorage.setItem("Data", JSON.stringify(data));
    
 }
  xhr.open("GET", url, true);
  xhr.send()