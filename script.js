let Box1=document.getElementById("Box1")
let Widthh=document.getElementById("Widthh")
let Heigthh=document.getElementById("Heigthh")
let reduic=document.getElementById("reduic")
let colorr=document.getElementById("colorr")
let cc=document.getElementById("cc")
let gg=document.getElementById("gg")
cc.addEventListener("click",function ch(){
    Box1.style.width=Widthh.value
    Box1.style.height=Heigthh.value
    Box1.style.borderRadius=reduic.value
    Box1.style.backgroundColor=colorr.value
})
gg.addEventListener("click", function chh(){
    Box1.style.width = '30%'
    Box1.style.height = '40%' 
    Box1.style.borderRadius ='0px'
    Box1.style.backgroundColor = 'blue'
})