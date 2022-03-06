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
    let checkedIng = [];
    let checkedDeco = [];

    flavors.forEach(flavor => {
        if (document.getElementById(flavor).checked){
            subtotal += parseInt(document.getElementById(flavor).value);  
            checkedDeco.push(flavor, document.getElementById(flavor).value);
        }
    });

    decorations.forEach(decoration => {
        if (document.getElementById(decoration).checked){
            subtotal += parseInt(document.getElementById(decoration).value);
            checkedDeco.push(decoration, document.getElementById(decoration).value);
        }
    });
    console.log(subtotal)
    console.log(checkedIng)
    console.log(checkedDeco)

    window.location.assign('pastelero.html');

    createOrderPastelero();
}

function createOrderPastelero(){
    if(document.getElementById('chocolate').checked){
        document.getElementById('0000').innerHTML = 'Chocolate';

        }

    if(document.getElementById('strawberry').checked){
        document.getElementById('0010').innerHTML = 'Strawberry';
        }

    if(document.getElementById('vanilla').checked){
        document.getElementById('0100').innerHTML = 'Vanilla';
        }

    if(document.getElementById('natural').checked){
        document.getElementById('0110').innerHTML = 'Natural';
    }

    if(document.getElementById('choco').checked){
        document.getElementById('1000').innerHTML = 'ChocoChips';
        }

    if(document.getElementById('whipped').checked){
        document.getElementById('1010').innerHTML = 'Whipped Creme';
        }

    if(document.getElementById('candles').checked){
        document.getElementById('1100').innerHTML = 'Candles';
        }

    if(document.getElementById('colored').checked){
        document.getElementById('1110').innerHTML = 'ColoredChips';
        }
}