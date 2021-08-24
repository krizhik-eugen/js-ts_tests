const small = document.getElementById('small')
const med = document.getElementById('medium')
const big = document.getElementById('big')

/*function onClickHandler () {
    alert('click')
}*/

function onClickHandler (e) {
    if (e.type === 'click') {
        alert('click')
    }

}


// small.onclick = onClickHandler    // передаем имя либо литерал

small.onclick = onClickHandler;   // по умолчанию в параметр вызова этой функции придет объект евента

// small.addEventListener('click', onClickHandler)