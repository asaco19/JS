function pulldown(){
    //実際に行っている処理

const lists = document.getElementById('lists')
const pulldown = document.getElementById("pull-down")
const pulldownchild = document.querySelectorAll(".pull-down-list")
const currentList = document.getElementById("current-list")

lists.addEventListener('mouseover',function(){
    console.log('クリック前:青');
    this.setAttribute("style","background-color:blue;");
})

lists.addEventListener('click',function(){
    console.log('クリック:緑');
    lists.setAttribute("style","background-color:green;");
    
    if (pulldown.getAttribute("style") == "display:block;"){
        pulldown.removeAttribute("style","display:block;")
        console.log("非表示")
} else {
    pulldown.setAttribute("style","display:block;")
    console.log("表示")
}
})

lists.addEventListener('mouseout',function(){
    console.log('完了');
    this.removeAttribute("style","background-color:red;");
})

pulldownchild.forEach(function(list){
    list.addEventListener('click',function(){
        const value = list.innerHTML
        console.log(value)
        currentList.innerHTML = value
    })
})
}

window.addEventListener('load',pulldown)