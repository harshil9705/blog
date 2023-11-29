const output = (data)=>{
    document.getElementById('parent-box').innerHTML=''
    data.map((ele)=>{
        let img  = document.createElement("img")
        img.src=ele.image
        img.setAttribute("class","img")

        let title  = document.createElement("h1")
        title.innerHTML=ele.title
        title.setAttribute("class","title")

        let list = document.createElement('div')
        list.setAttribute("class","list")
        list.append(img,title)
        list.addEventListener("click",()=>{
            window.location.href=`/blog/singleBlog/${ele._id}`
        })

        document.getElementById("parent-box").append(list)
    })
}


const filters = (pera)=>{
    try {
         fetch(`http://localhost:8090/blog/filter?category=${pera}`)
        .then((data)=> data.json())
        .then((ele)=>output(ele))
    } catch (error) {
        console.log(error);
    }
}

document.getElementById("technology").addEventListener("click",()=>filters("technology"))
document.getElementById("sports").addEventListener("click",()=>filters("sports"))
document.getElementById("health").addEventListener("click",()=>filters("health"))
document.getElementById("travel").addEventListener("click",()=>filters("travel"))
document.getElementById("lifestyle").addEventListener("click",()=>filters("lifestyle"))

fetch("http://localhost:8090/blog/blogs")
.then((data)=>data.json())
.then((json)=>output(json))