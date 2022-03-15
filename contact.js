const form = document.getElementById("contact")
const tbody = document.querySelector("#tbody")
console.log(form["name"].value)
form.addEventListener("submit",(e)=>{
    e.preventDefault();

    let name = form["name"].value;
    let number = form["number"].value;

    let tr = document.createElement("tr");
    let td = document.createElement("td")
    let td2 = document.createElement("td")

    const contactdata = ()=>{
        td.innerHTML = name;
        td2.innerHTML = number;
        tr.append(td,td2);
        tbody.append(tr);
        tr.style.backgroundColor = "white"
        tr.style.fontSize = "25px"
    } 
    contactdata()

})



