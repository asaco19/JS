window.alert("ブラウザオブジェクトの取得に成功！")

function getElement(){
    element = document.querySelector('#shopB');
    console.log('選ばれたのは' + element.textContent + 'でした');
}