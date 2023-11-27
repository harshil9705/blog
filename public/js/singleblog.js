document.getElementById("like").addEventListener("click",()=>{
    let url = window.location.href.split("/");
  let id = url[url.length - 1];
  // let user = req.cookies.author 
  // console.log(user);
  console.log(url);
  console.log(id);

  fetch(`http://localhost:8090/blog/like/:${id}`,{
    method:"PATCH",
    body:{"content-type":"application/json"},
    headers:{blog : id.blog}
    
  }).then()
  .then(()=>{
      let count = document.getElementById("count").innerHTML 
      document.getElementById("count").innerHTML=Number(count)+1
  })
  })