const nom = "Lebrun"
const prenom ="Vincent"

function DOM(){
    document.write("<p>Bonjour,"+nom+" "+prenom+"</p>")
}

function chargement(){
    document.getElementById("presentation").innerHTML = "<p>Bonjour,"+nom+" "+prenom+"</p>"
}

function append(){
    var d = new Date()
    var node = document.createElement("P");
    var textnode = document.createTextNode("Nous sommes le :"+d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear())
    node.appendChild(textnode); 
    document.getElementById("date").appendChild(node)
}