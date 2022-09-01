let valueOfBox = document.querySelectorAll('.value');
let canditdatesOfBox = document.querySelectorAll('.candidates');
let tdsBox = document.querySelectorAll('td');
let candidateSwitch = document.querySelector('#candidate-switch');
let sudokuNumbers = document.querySelectorAll('.number-control');

let previousTd;
tdsBox.forEach((td) => {
    td.addEventListener('click', () =>{
        if(td.childElementCount === 2){
            previousTd?.classList.remove('selected');
            td.setAttribute('class', 'selected');
            previousTd = td;
        }
    })
})

sudokuNumbers.forEach((btn) => {
    btn.addEventListener('click', addNumberToSpan);
})

candidateSwitch.addEventListener('click', () =>  this.checked);


let innerHtmlOfCanditates = [];
function addNumberToSpan(){
    let num = this.textContent;
    if(candidateSwitch.checked){
        addNumberToCandidate(num);
    }
    else{
        addNumberToValue(num);
    }
}


function addNumberToCandidate(num){
    canditdatesOfBox.forEach((el) => {
        if(el.parentElement.className === 'selected'){
            innerHtmlOfCanditates = el.innerHTML.split('');
            console.log(innerHtmlOfCanditates);
            if(innerHtmlOfCanditates.includes(`${num}`)){
                innerHtmlOfCanditates[innerHtmlOfCanditates.indexOf(num)] = '';
                innerHtmlOfCanditates.sort();
                el.innerHTML = `${innerHtmlOfCanditates.join('')}`;
            }
            else{
                innerHtmlOfCanditates.push(num);
                innerHtmlOfCanditates.sort();
                el.innerHTML = `${innerHtmlOfCanditates.join('')}`;
            }
        }
    })
}

function addNumberToValue(num){
    valueOfBox.forEach((el) => {
        if(el.parentElement.className === 'selected'){
            el.innerHTML = `${num}`;
        }
    })
}




