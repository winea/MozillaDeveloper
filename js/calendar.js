/*
Um elemento <select> para permitir que o usuário escolha entre diferentes meses.
Um evento manipulador onchange para detectar quando o valor selecionado no menu 
<select> é mudado.
Uma função chamada createCalendar() que desenha o calendário e exibe o mês 
correto no elemento <h1> .
*/
const monthSelect = document.querySelector('#monthSelect');
const month = document.querySelector('.month');
const table = document.querySelector('.table');

console.log(month);

const createCalendar = () => {
    table.textContent = '';
    month.textContent = monthSelect.value;
    let days = 0;
    let color;
    if(monthSelect.value) {
        if(monthSelect.value === 'January' || monthSelect.value === 'March' || monthSelect.value === 'May' || monthSelect.value === 'July' 
        || monthSelect.value === 'August' || monthSelect.value === 'October' || monthSelect.value === 'December'){
            days = 31;
            color = 'blue';
        } else if (monthSelect.value === 'April' || monthSelect.value === 'June' || monthSelect.value === 'September' || 
        monthSelect.value === 'November') {
            days = 30;
            color = 'red';
        } else if (monthSelect.value === 'February'){
            days = 28;
            color = 'black';
        }              
    }
    console.log(days);
    let x = 0;
    for( let i = 1; i < days; i++) {
        if(i === 1 || i === 5 || i === 9 || i === 13 || i === 17 || i === 21 || i === 25 ) {
            let row = table.insertRow(x);
            let y = i;
            
            for (let j = 0; j < 4; j++) {
                let cell = row.insertCell(j);
                cell.style.margin = '10px';
                cell.textContent = y;
                y++;
            }
            x++;
            console.log('x: '+ x);
            console.log(i);
        }
        else if (i === 29) {
            let row = table.insertRow(x);
            let y = i;
            let last = 0;
            
            for (let j = i; j <= days; j++) {
                let cell = row.insertCell(last);
                cell.textContent = y;
                y++;
                last++;
            }
        }     
    }
    month.style.color = color;
}