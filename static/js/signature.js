let nom = document.getElementById("nom")
let prenom = document.getElementById("prenom")
let formation = document.getElementById("formation")
let absence = document.getElementById("absence")

nom.innerText = sessionStorage.getItem("nom")
prenom.innerText = sessionStorage.getItem("prenom")
formation.innerText = sessionStorage.getItem("formation")
abs = "Pour le motif suivant : <span class='mise_en_gras'>"+sessionStorage.getItem("motif")+"</span>"

document.getElementById("nm").innerText=sessionStorage.getItem("nom")

if (sessionStorage.getItem("date_debut")===""){
    string = "Le <span class='mise_en_gras'>"+ sessionStorage.getItem("dateH") + "</span> de <span class='mise_en_gras'>"+  sessionStorage.getItem("heure_debut") + "</span> à <span class='mise_en_gras'>"+sessionStorage.getItem("heure_fin")+"</span>"
}
else{
    string= "Du <span class='mise_en_gras'>" + sessionStorage.getItem("date_debut") + "</span> au <span class='mise_en_gras'>" + sessionStorage.getItem("date_fin") + "</span> Soit <span class='mise_en_gras'>" + sessionStorage.getItem("jours_complet")+ "</span> jours complet"
}

absence.innerHTML ="<p>"+string+"</p>"
absence.innerHTML += "<p>"+abs+"</p>"

let btn=document.getElementById("NowelMode")
btn.addEventListener("click", function () {
    if (btn.value==="normal"){
        document.bgColor="#fff"
        btn.value="Nowel"
        document.getElementById("guirlande").innerHTML=""
        document.getElementById("snow").style.visibility="hidden"
        document.getElementById("center").className="center_black"
        let d =document.getElementsByClassName("directeur-white")
        d[1].className="directeur-black"
        d[0].className="directeur-black"
        let a =document.getElementsByClassName("sign-white")
        a[1].className="sign-black"
        a[0].className="sign-black"
        console.log(a)



    }
    else{
        document.bgColor="black"
        btn.value="normal"
        document.getElementById("guirlande").innerHTML="<section class='light-bulbs'>" +
            "<div class='light-bulb theme-color-one'></div>" +
            "<div class='light-bulb theme-color-two'></div>" +
            "<div class='light-bulb theme-color-three'></div>" +
            "<div class='light-bulb theme-color-four'></div>" +
            "<div class='light-bulb theme-color-five'></div>" +
            "<div class='light-bulb theme-color-one'></div>" +
            "<div class='light-bulb theme-color-two'></div>" +
            "<div class='light-bulb theme-color-three'></div>" +
            "<div class='light-bulb theme-color-four'></div>" +
            "<div class='light-bulb theme-color-five'></div>" +
            "<div class='light-bulb theme-color-one'></div>" +
            "<div class='light-bulb theme-color-two'></div>" +
            "<div class='light-bulb theme-color-three'></div>" +
            "<div class='light-bulb theme-color-four'></div>" +
            "<div class='light-bulb theme-color-five'></div>" +
            "<div class='light-bulb theme-color-one'></div>" +
            "<div class='light-bulb theme-color-two'></div>" +
            "</section>"

        document.getElementById("snow").style.visibility="visible"
        document.getElementById("center").className="center_white"
        let d =document.getElementsByClassName("directeur-black")
        d[1].className="directeur-white"
        d[0].className="directeur-white"
        let a =document.getElementsByClassName("sign-black")
        a[1].className="sign-white"
        a[0].className="sign-white"
    }

})

document.getElementById("mail").addEventListener("click",function () {
    window.location = "mailto:xyz@yourapplicationdomain.com"
})
