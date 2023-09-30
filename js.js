// input login
const inputLogin = document.getElementById('inputLogin')
const inputSumm = document.getElementById('inputSumm')
const inputSumms = document.getElementById('inputSumm')
console.log(inputLogin.value)
console.log(inputSumm.value)

let tg = window.Telegram.WebApp;
tg.expand();
tg.MainButton.textColor = "#FFFFFF";
tg.MainButton.color =  "2cab37";
let itm = "123";
Telegram.WebApp.onEvent("mainButtonClicked",function(){
    tg.send(itm);                       
});



var btn100 = document.getElementById('1')
var btn500 = document.getElementById('2')
var btn1000 = document.getElementById('3')

function Plus100Btn(){
    const inputSumm = document.getElementById('inputSumm');
    inputSumm.value = (Number(inputSumm.value) + 100);
    var summs = document.getElementById('summa')
    summs.innerHTML = inputSumm.value+'₽'

    var cons = document.getElementById('summacons')
    var comissia = Number(inputSumm.value)/100*22
    cons.innerHTML = comissia+Number(inputSumm.value)+'₽'
}
function Plus500Btn(){
    const inputSumm = document.getElementById('inputSumm');
    inputSumm.value = (Number(inputSumm.value) + 500);
    var summs = document.getElementById('summa')
    summs.innerHTML = inputSumm.value+'₽'
    var cons = document.getElementById('summacons')
    var comissia = Number(inputSumm.value)/100*22
    cons.innerHTML = comissia+Number(inputSumm.value)+'₽'
}
function Plus1000Btn(){
    const inputSumm = document.getElementById('inputSumm');
    inputSumm.value = (Number(inputSumm.value) + 1000);
    var summs = document.getElementById('summa')
    summs.innerHTML = inputSumm.value+'₽'
    var cons = document.getElementById('summacons')
    var comissia = Number(inputSumm.value)/100*22
    cons.innerHTML = comissia+Number(inputSumm.value)+'₽'

}


btn100.addEventListener('click',Plus100Btn);
btn500.addEventListener('click',Plus500Btn);
btn1000.addEventListener('click',Plus1000Btn);

const log = document.getElementById('summa');

inputSumm.addEventListener('input', updateValue);

function updateValue(e) {
  log.textContent = e.target.value + "₽";
  var cons = document.getElementById('summacons')
  var comissia = Number(inputSumm.value)/100*22
  cons.innerHTML = comissia+Number(inputSumm.value)+'₽'
}

inputLogin.addEventListener('input', updateV);

function updateV(e){
    if(e.target.value.length >= 1){
        const cash = document.getElementById('cash')
        console.log(cash)
        cash.disabled = false;
        cash.className = 'actcash'
        //cash.style.cssText = 'color:red;'
    }else{
        const cash = document.getElementById('cash')
        cash.className = 'cash'
        cash.disabled = true;
    }
}

const cash = document.getElementById('cash')
cash.addEventListener('click',function(){
    if (tg.MainButton.isVisible) {
        tg.MainButton.hide();
    }else{
        tg.Button.setText("Вы нажали пополнить");
        var itm =  'нажал';
        tg.mainButton.show();
    }
});
//cash.addEventListener('click',cashevent);
//function cashevent(e){
    ///window.location.href = 'https://my.qiwi.com/Roman-A6Vz2cOdX8';







const knop1 = document.getElementById('knop1')
knop1.addEventListener('mouseover',knop1func);
function knop1func(e){
    knop1.textContent = 'Имя пользователя для входа в аккаунт'
    knop1.addEventListener('mouseout',knop1func1)
    function knop1func1(e){
        knop1.textContent = 'Что такое логин?'
    }
}


const knop2 = document.getElementById('knop2')
knop2.addEventListener('mouseover',knop2func);
function knop2func(e){
    knop2.textContent = 'Время зачисления ~ 2 минуты'
    knop2.addEventListener('mouseout',knop2func2)
    function knop2func2(e){
        knop2.textContent = 'Время зачисления?'
    }
}



const knop3 = document.getElementById('knop3')
knop3.addEventListener('mouseover',knop3func);
function knop3func(e){
    knop3.textContent = 'Лимит в сутки на аккаунт до 150$'
    knop3.addEventListener('mouseout',knop3func3)
    function knop3func3(e){
        knop3.textContent = 'Лимит пополнений?'
    }
}

