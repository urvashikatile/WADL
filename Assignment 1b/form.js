function Save(){
    let name,age,domain;

    name=document.getElementById("name").value;
    age=document.getElementById("age").value;
    domain=document.getElementById("domain").value;
 
    

    let contact_records=new Array();

    //contacts is the key in localStorage
    contact_records=JSON.parse(localStorage.getItem("employee"))?JSON.parse(localStorage.getItem("employee")):[]

    //push the data to array
    contact_records.push({
        "name":name,
        "age":age,
        "domain":domain,
        
    })

    //set the item in the local storage
    localStorage.setItem("contacts",JSON.stringify(contact_records));
}