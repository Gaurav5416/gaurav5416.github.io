

function display() {
    var name=document.getElementById("name").value
    var mail=document.getElementById("mail").value
    var comment=document.getElementById("comment").value
    alert(name, mail, comment)
}

document.getElementById('submit').addEventListener("click", ()=>{
    display()
})
