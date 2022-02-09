//console.log("todo")
// let cbtn=document.getElementById("completebtn")
// let pbtn=document.getElementById("pendingbtn")
// cbtn.addEventListener('click',completefun())
// pbtn.addEventListener('click',pendfun())
function completefun() {
    console.log("insideget")
    url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url).then(resp => resp.json()).then(function (data) {
    let obj2 = data;
    console.log("pend obj", obj2)
    let intemlist = document.querySelector("#comlist")
    str = ''
    for (key in obj2) {
        if (obj2[key].completed == true) {
            str += `<li> ${obj2[key].title}</li>`
        }
    }
            intemlist.innerHTML = str
})
}
function pendfun() {
    console.log("insideget")
    url = "https://jsonplaceholder.typicode.com/todos"
    fetch(url).then(resp => resp.json()).then(function (data) {
    let obj2 = data;
    console.log("pend obj", obj2)
    let intemlist2 = document.querySelector("#penlist")
    str = ''
    for (key in obj2) {
        if (obj2[key].completed == false) {
            str += `<li> ${obj2[key].title}</li>`
        }
    }
            intemlist2.innerHTML = str
})
}

   



//onclick=pendfun() 