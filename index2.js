const userDiv = document.getElementById("usr");
const firstName = document.getElementById("first_name");
const lastName = document.getElementById("last_name");
const email = document.getElementById("email");
const ipaddress = document.getElementById("ipaddress")

const userDiv2 = document.getElementById("usr2");
const firstName2 = document.getElementById("first_name2");
const lastName2 = document.getElementById("last_name2");
const email2 = document.getElementById("email2");
const ipaddress2 = document.getElementById("ipaddress2")

const userDiv3 = document.getElementById("usr3");
const firstName3 = document.getElementById("first_name3");
const lastName3 = document.getElementById("last_name3");
const email3 = document.getElementById("email3");
const ipaddress3 = document.getElementById("ipaddress3")








async function logMovies() {
    const response = await fetch("http://localhost:3000/users");
    const users = await response.json();
    firstName.innerText = users[500].first_name;
    lastName.innerText = users[800].last_name;
    email.innerText = users[300].email;
    ipaddress.innerText = users[556].ip_address;
   



    firstName2.innerText = users[501].first_name;
    lastName2.innerText = users[805].last_name;
    email2.innerText = users[308].email;
    ipaddress2.innerText = users[55].ip_address;



    firstName3.innerText = users[505].first_name;
    lastName3.innerText = users[806].last_name;
    email3.innerText = users[304].email;
    ipaddress3.innerText = users[555].ip_address;




    
  }

  logMovies();
