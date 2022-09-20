let tableBody = document.querySelector(".table-body");
let tableHead = document.querySelector(".table-head")

$(".animated-button1").click(function(){
  $(this).addClass("active").delay(300).queue(function(next){
    $(this).removeClass("active");
    getComments();
  });
});

async function getComments(){

    

    let comments = await fetch("https://jsonplaceholder.typicode.com/comments")
    let result = await comments.json();


    result.forEach(comment => {
        
        tableBody.innerHTML += `<tr>
        <td> ${comment.postId}</td>
        <td> ${comment.id}</td>
        <td> ${comment.name}</td>
        <td> ${comment.email}</td>
        <td> ${comment.body}</td>`
    });
    tableHead.innerHTML += ` <tr>
    <th>PostId</th>
    <th>Id</th>
    <th>Name</th>
    <th>Email</th>
    <th>Body</th>
  </tr>`
}

