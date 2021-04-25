function Dates(){
    var d = new Date()
    document.write("<p>Nous sommes le : ");
    document.write(d.getDate()+"/"+(d.getMonth()+1)+"/"+d.getFullYear()+"</p>")

}