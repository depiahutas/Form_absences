let btnAbsence = document.querySelectorAll('[name="duree_absence"]');
let dateH = document.getElementById("dateH")
let dateDebut=document.getElementById("date_debut")
let dateFin=document.getElementById("date_fin")
let heureDebut =document.getElementById("heure_debut")
let heureFin =document.getElementById("heure_fin")
let nb_jours = document.getElementById("jours_complet")

let erreur = true

for (i=0;i<btnAbsence.length;i++){
    btnAbsence[i].addEventListener("click",function (){
        let div=this.value+"_div"
        document.getElementById(div).style.visibility="visible"
        document.getElementById(div).style.display="block"
        document.getElementById(div).style.position="relative"
        if (div==="heures_div"){
            document.getElementById("jours_div").style.visibility="hidden"
            document.getElementById("jours_div").style.position="absolute"
            document.getElementById("dateH").value=""
            heureDebut.value=""
            heureFin.value=""
            heureDebut.style.borderBottomColor="blue"
            heureFin.style.borderBottomColor="blue"
            erreur=true
        }else{
            document.getElementById("heures_div").style.visibility="hidden"
            document.getElementById("heures_div").style.position="absolute"
            dateDebut.value=""
            dateFin.value=""
            nb_jours.value=""
            dateDebut.style.borderBottomColor="blue"
            dateFin.style.borderBottomColor="blue"
            erreur=true
        }
    })
}


let motif = document.getElementById("motif-div")
fetch("../static/ressources/data.json").then((response) => response.json())
    .then((json) => {
        for (var i=0; i<json.motif.length; i++) {
            var counter = json.motif[i];
            motif.innerHTML += "<ul class='motif-abs'>"+counter.categorie;
            for (var j =0; j<counter.absences.length ;j++){
                var abs = counter.absences[j];
                motif.innerHTML +="<li><input type='radio' name='muhRadio' value='"+abs.libelle+"' class='abs'/>"+abs.libelle+"</li>"
            }
            motif.innerHTML+="</ul>"
        }
    });

let cbbox = document.getElementById("formation")
fetch("../static/ressources/data.json").then((response) => response.json())
    .then((json) => {
        for (var i=0; i<json.formation.length; i++) {
            var counter = json.formation[i];
            cbbox.innerHTML +="<option value='"+counter.libelle+"'>"+counter.libelle+"</option>"
        }
    });



heureDebut.addEventListener("change",verif_Heure)
heureFin.addEventListener("change", verif_Heure)

function verif_Heure(){
    let heure_debut=heureDebut.value
    let heure_fin = heureFin.value
    heure_debut=heure_debut.split(":")
    heure_fin=heure_fin.split(":")
    var startDate = new Date(0, 0, 0, heure_debut[0], heure_debut[1], 0);
    var endDate = new Date(0, 0, 0, heure_fin[0], heure_fin[1], 0);

    var diff =(endDate.getTime() - startDate.getTime()) / 1000;
    diff /= 60;
    if (diff<0){
        heureDebut.style.borderBottomColor="red"
        heureFin.style.borderBottomColor="red"
        erreur=true
    }
    else{
        heureDebut.style.borderBottomColor="blue"
        heureFin.style.borderBottomColor="blue"
        erreur=false
    }
}



dateDebut.addEventListener("change",verif_date)
dateFin.addEventListener("change",verif_date)
function verif_date(){
    let date_debut = dateDebut.value
    let date_fin = dateFin.value

    start_date = new Date(date_debut)
    end_date = new Date(date_fin)

    var diff = {}							// Initialisation du retour
    var tmp = end_date - start_date;

    tmp = Math.floor(tmp/1000);             // Nombre de secondes entre les 2 dates
    diff.sec = tmp % 60;					// Extraction du nombre de secondes

    tmp = Math.floor((tmp-diff.sec)/60);	// Nombre de minutes (partie entière)
    diff.min = tmp % 60;					// Extraction du nombre de minutes

    tmp = Math.floor((tmp-diff.min)/60);	// Nombre d'heures (entières)
    diff.hour = tmp % 24;					// Extraction du nombre d'heures

    tmp = Math.floor((tmp-diff.hour)/24);	// Nombre de jours restants
    diff.day = tmp;

    if (diff.day<=0){
        dateDebut.style.borderBottomColor="red"
        dateFin.style.borderBottomColor="red"
        document.getElementById("jours_complet").value=""
        erreur=true
    }
    else {
        dateDebut.style.borderBottomColor = "blue"
        dateFin.style.borderBottomColor = "blue"
        if (!isNaN(diff.day)) {
        document.getElementById("jours_complet").value = diff.day
        }
        erreur=false
    }


}

let regex = "/^[a-zA-Z]+ [a-zA-Z]+$/"

function verif_nom(){
    let nom = document.getElementById("nom")
    let prenom = document.getElementById("prenom")

    if (nom.value.test(regex)){
        console.log(true)
    }
}


let formation = document.getElementById("formation")
function verification(){

    sessionStorage.clear()

    let nom = document.getElementById("nom")
    let prenom = document.getElementById("prenom")

    if (nom.value === "" || prenom.value === ""){
        erreur=true
    }

    if (!erreur){
        sessionStorage.setItem("nom", nom.value);
        sessionStorage.setItem("prenom", prenom.value);

        sessionStorage.setItem("formation", formation.value);
        sessionStorage.setItem("dateH",dateH.value );
        sessionStorage.setItem("heure_debut",heureDebut.value );
        sessionStorage.setItem("heure_fin",heureFin.value );
        sessionStorage.setItem("date_debut",dateDebut.value );
        sessionStorage.setItem("date_fin",dateFin.value );
        sessionStorage.setItem("jours_complet",nb_jours.value );

        let motif =document.querySelector("input[name='muhRadio']:checked")

        sessionStorage.setItem("motif",motif.value );
    }

    return !erreur
}