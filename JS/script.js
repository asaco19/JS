//let lists = document.getElementsByClassName("pull-down-list")
//console.log(lists)

//const pullDownButton = document.getElementById("lists")
//console.log(pullDownButton);

var lists = document.getElementById('lists')

lists.addEventListener('mouseover',function(){
    console.log('クリック前:青');
    lists.setAttribute("style","background-color:blue;");

})

lists.addEventListener('click',function(){
    console.log('クリック:緑');
    lists.setAttribute("style","background-color:green;");

})

lists.addEventListener('mouseout',function(){
    console.log('完了');
    lists.removeAttribute("style","background-color:red;");
})

