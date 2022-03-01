const flavors = ['chocolate', 'strawberry', 'vanilla', 'natural'];
const decorations = ['choco', 'whipped', 'candle', 'colored'];

//MOSTRAR O ESCONDER RANGO DE 'CANDLE'
document.getElementById('candle').onclick = function(){
    if (this.checked){
        document.getElementById('candleRange').type = 'range';
        document.getElementsByClassName('rangeText').textContent = this.value;
    }else {
        document.getElementById('candleRange').type = 'hidden';
    }
}

//MOSTRAR RANGO DE SLIDER DE 'CANDLE'
function checkSlider(rangeText,candleCheck) {
    document.getElementById('rangeText').innerHTML = document.getElementById('candleRange').value;    
}

//GENERAR ORDEN/PEDIDO
document.getElementById('buttonOrder').onclick = function() {
    let subtotal = 0;

    document.getElementById('divOrder').style.display = 'flex';

    flavors.forEach(flavor => {
        if (document.getElementById(flavor).checked){
            subtotal += parseInt(document.getElementById(flavor).value);
        }
    });

    decorations.forEach(decoration => {
        if (document.getElementById(decoration).checked){
            subtotal += parseInt(document.getElementById(decoration).value);
        }
    });
    console.log(subtotal)
        
    //window.location.assign('webapp/cart.html');
}

