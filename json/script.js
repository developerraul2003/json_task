// const saat =setInterval(saatFunk, 1000);
// function saatFunk (){
//     const a=new Date();
//     const b=a.toLocaleTimeString();
//     document.body.innerHTML=b;
// }
const div = document.querySelector("div");
let mainurl = "https://jsonplaceholder.typicode.com/users";
fetch(mainurl)
  .then((Response) => Response.json())
  .then((json) => {
    json.forEach((element) => {
      console.log(element);
      div.innerHTML += `
    <div class="box1">
    <p><b> Name:</b> ${element.name}</p>
    <p> <b>Username:</b>${element.username}</p>
       <p><b>Email:</b>${element.email}</p>
      <a href=<b>Website-name:</b>${element.website}></a>
       </div>
       `;
    });
  });
