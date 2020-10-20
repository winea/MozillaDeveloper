const searchName = document.querySelector('#search');
const result = document.querySelector('.result');

const contacts = ['Chris:2232322', 'Sarah:3453456', 'Ana:5875545', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const btnSearch = () => {
    let name = (searchName.value).toLowerCase();
    searchName.value = '';
    console.log(name);

    for (let i = 0; i<contacts.length; i++) {
        let list = contacts[i].split(':');
        console.log(list);
        if (list[0].toLowerCase() === name) {
            result.textContent = list[0] + " : " + list[1];
            break;
        } else {
            result.textContent = "Contact not found"
        }
    }
   
}

/*
Loop from 10 down to 0. let i = 10;.
For each iteration, create a new paragraph and append it to the output <div>, which we've selected using const 
output = document.querySelector('.output');. In comments, we've provided you 
with three code lines that need to be used somewhere inside the loop:
const para = document.createElement('p'); — creates a new paragraph.
output.appendChild(para); — appends the paragraph to the output <div>.
para.textContent = — makes the text inside the paragraph equal to whatever you put on the right-hand side, 
after the equals sign.
Different iteration numbers require different text to be put in the paragraph for that iteration 
(you'll need a conditional statement and multiple para.textContent = lines):
If the number is 10, print "Countdown 10" to the paragraph.
If the number is 0, print "Blast off!" to the paragraph.
For any other number, print just the number to the paragraph.
Remember to include an iterator! However, in this example we are counting down after each iteration,
 not up, so you don't want i++ — how do you iterate downwards?
*/

const create = document.querySelector('.create');
let x = 10;
while (x>=0) {
    const para = document.createElement('p');
   
    create.appendChild(para);

    if (x > 0) {
        para.textContent = "Countdown " + x;
    } else if (x === 0) {
        para.textContent = "Blast off!";
    }
    x--;
}

/*
Write a loop that will iterate from 0 to the length of the people array. You'll need to start with an initializer of  
let i = 0;, but what condition do you need?
During each loop iteration, check if the current array item is equal to "Phil" or "Lola" using a conditional statement:
If it is, concatenate the array item to the end of the refused paragraph's textContent, followed by a comma and a space.
If it isn't, concatenate the array item to the end of the admitted paragraph's textContent, followed by a comma and a space.
let i = 0; — Your initializer.
refused.textContent += — the beginnings of a line that will concatenate something on to the end of refused.textContent.
admitted.textContent += — the beginnings of a line that will concatenate something on to the end of admitted.textContent.
*/

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];
    
const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');
admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';
let i = 0;
do {
    if (people[i] === "Phil" || people[i] === "Lola") {
        refused.textContent += people[i] + ', ';
    } else {
        admitted.textContent += people[i] + ', ';
    }
    i++;
} while (i < people.length);

refused.textContent = refused.textContent.slice(0,refused.textContent.length-2) + '.';
admitted.textContent = admitted.textContent.slice(0,admitted.textContent.length-2) + '.';


