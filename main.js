const btnSi = document.querySelector('#btnSi');

btnSi.addEventListener('click',function () {
    alert('Sabía que ibas a atrapar al gato 7w7')
});

const btnNo = document.querySelector('#btnNo');

btnNo.addEventListener('mouseover', function () {
    const randomX = parseInt(Math.random()*100);
    const randomY = parseInt(Math.random()*100);
    btnNo.style.setProperty('top',randomY+'%');
    btnNo.style.setProperty('left',randomX+'%');
    btnNo.style.setProperty('transform',`translate(-${randomX}%,-${randomY}%)`);
})