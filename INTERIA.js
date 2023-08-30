

function loader(){
    let loader=document.getElementById("loader").style.display="none"
    
   
}
addEventListener("load",function(){
        setTimeout(loader,1000)
})

let btn=document.getElementById('up')

window.onscroll=function(){
    if(scrollY>400){
        btn.style.display='block'
    }
}

btn.onclick=function(){
    scroll({
        top:0,
        behavior:"smooth",
    })
}