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
    btn.addEventListener('click', function() {
        if(candidateSwitch.checked){
            console.log(this.textContent);
        }
    })
})

candidateSwitch.addEventListener('click', function() {
    return this.checked;
})




