u=document.getElementById("users")
// function called on clicking register
function register(){
    name=document.getElementById("name").value
    email=document.getElementById("email").value 
    image=document.getElementById("image").value
    gender=document.querySelector("input[type=radio]:checked").value
    password=document.getElementById("password").value
    skills=document.querySelectorAll("input[type=checkbox]:checked")
    // checking for empty fields
if(!name && !email && !image && !gender && !skills && !password)
{
    alert("Please fill the complete details")
}
else{
    s=""
    skills.forEach(element => {
    s=s+" "+element.value 
    });

    let element={
        name,email,image,gender,skills:s
    }
    // Showing the registration form data on website
       u.innerHTML=u.innerHTML+`<tr>
        <td>${element.name}</td>
        <td>${element.email}</td>
        <td>${element.gender}</td>
        <td>${element.skills}</td>
        <td><img src='${element.image}' alt="invalid url"/></td>
        <tr/></br>`
    // Setting the feilds value to null after register 
    document.getElementById("name").value=""
    document.getElementById("email").value=""
    document.getElementById("image").value="" 
    document.querySelector("input[type=radio]:checked").checked=false
    document.getElementById("password").value=""
    skills.forEach(element => {
        element.checked=false 
     });
}
}





