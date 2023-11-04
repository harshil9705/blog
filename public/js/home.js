const output = (data)=>{
    document.getElementById('parent-box').innerHTML=''
    data.map((ele)=>{
        let img  = document.createElement("img")
        img.src=ele.image
        img.setAttribute("class","img")

        let title  = document.createElement("h1")
        title.innerHTML=ele.title
        title.setAttribute("class","title")
        
        // let btn = document.createElement("button")
        // btn.innerHTML="DELETE"
        // btn.addEventListener("click",()=>{
        //     dlt(ele._id)
            // console.log(ele._id);
        // })
        let list = document.createElement('div')
        list.setAttribute("class","list")
        list.append(img,title,btn)
        // list.addEventListener("click",()=>{
        //     // e.preventDefault()
        //     console.log('click');
        //     // console.log(ele._id);
        //     singleblog(ele._id)
        // })

        document.getElementById("parent-box").append(list)
    })
}

// const singleblog = (id)=>{
//     fetch(`http://localhost:8090/blog/singleBlog/${id}`)
//     // .then((data)=>data.json())
//     // .then((json)=>console.log(json))
//     console.log(id);
// }

// const dlt = (id)=>{
//     fetch(`http://localhost:8090/blog/delete/${id}`,{
//         method:"DELETE"
//     })

// }



fetch("http://localhost:8090/blog/blogs")
.then((data)=>data.json())
.then((json)=>output(json))