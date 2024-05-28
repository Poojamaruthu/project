// selecting popbtn overlay button
var popoverlay=document.querySelector(".overlay")
var popbx=document.querySelector(".popbox")
var addbtn=document.getElementById("popbutn")
 
addbtn.addEventListener("click",function()
{
    popoverlay.style.display="block"
    popbx.style.display="block"
})
//select cancel button
var cbtn=document.getElementById("c")
cbtn.addEventListener("click",function(event)
{
    event.preventDefault()
    popoverlay.style.display="none"
    popbx.style.display="none"
})

var contain=document.querySelector(".container")
var addbook=document.getElementById("a")
var booktit=document.getElementById("booktitle")
var bookauth=document.getElementById("bookauthor")
var srtdis=document.getElementById("sd")

addbook.addEventListener("click",function(event)
{  event.preventDefault()
    var di=document.createElement("div")

     di.setAttribute("class","box-container")
     di.innerHTML=`<h2>${booktit.value}<h2>
     <h5>${bookauth.value}</h5>
     <p>${sd.value}</p>
     <button onclick="cancel(event)">cancel</button>`
     console.log(di.textContent)
     contain.append(di)
    
     popoverlay.style.display="none"
     popbx.style.display="none"
})
function cancel(event)
{
    event.target.parentElement.remove()
}


