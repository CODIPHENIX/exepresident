import { time } from "./date.js";

document.addEventListener("DOMContentLoaded",e =>{
    console.log(time.dates+'\n'+time.el.innerText)
    time.printOut()

    let xml, xmlhttp, xmlDoc, vliste

    xmlhttp = new XMLHttpRequest();
    xmlhttp.open("GET", "president.xml", false);
    xmlhttp.send();
    xmlDoc = xmlhttp.responseXML; 
    console.log(xmlDoc);
    vliste=String("");
    xml = xmlDoc.getElementsByTagName("president");
    
    console.log(xml[0].childNodes[1]);
    for (let i = 0; i < xml.length; i++) {
    
        //variables pour les noeuds
        
                const  image = xml[i].getElementsByTagName("image")[0].getAttribute("path");
                const  nom = xml[i].getElementsByTagName("nom")[0].childNodes[0].nodeValue;
                const  mandat = xml[i].getElementsByTagName("mandat")[0].childNodes[0].nodeValue;
                const  naissance = xml[i].getElementsByTagName("naissance")[0].childNodes[0].nodeValue;
                const  status = xml[i].getElementsByTagName("status")[0].childNodes[0].nodeValue;
    
    
        //ajout de chaque propriété dans boucle
                console.log(image+""+nom+" "+mandat+" "+naissance+" "+status+" ");
                    vliste += `<li>
                    <figure>
                    <img src=${image}>
                    <figcpation>
                    <li><strong>Nom :</strong> ${nom} </li>
                    <li><strong>Mandat :</strong> ${mandat}</li>
                    <li><strong>Naissance :</strong> ${naissance}</li>
                    <li><strong>status :</strong> ${status}</li>
                    <figcpation>
                    </figure>
                    </li>`;
                //stockage dans un tableau
                    let myStock=[];
                    myStock.push(image,nom,mandat,naissance,status);
                    console.log(JSON.stringify(myStock));
                    localStorage.setItem("stock", myStock)
           
         }
  
  
    document.querySelector("ul").innerHTML = vliste; 
    
})