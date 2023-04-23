//let lists = document.getElementsByClassName("pull-down-list")
//console.log(lists)

const pullDownButton = document.getElementById("lists")
console.log(pullDownButton);

var lists = document.getElementById('lists')

lists.addEventListener('mouseover',function(){
    console.log('クリック前');
})

lists.addEventListener('click',function(){
    console.log('クリック');
})

lists.addEventListener('mouseout',function(){
    console.log('完了');
})