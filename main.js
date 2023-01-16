var text=document.querySelector(".text")
function TIME() {
    let time= new Date()
    text.innerHTML=time.toLocaleTimeString()
    // console.log(`${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`)
    // setTimeout(TIME(),1000)
}
setInterval(TIME,1000)
// TIME()