/*First think about how you could test whether the message in each case is a Christmas message. 
What string is present in all of those messages, and what method could you use to test whether 
it is present?
You'll then need to write a conditional test of the form operand1 operator operand2. 
Is the thing on the left equal to the thing on the right? Or in this case, does the method call 
on the left return the result on the right?
Hint: In this case it is probably more useful to test whether the method call 
isn't equal to a certain result.
*/

/*  lenght
    [5]
    indexOf('')
    slice(0,3)
    replace('','')
 */
const list = document.querySelector('.output');
list.innerHTML = '';
let greetings = ['Happy Birthday!',
                 'Merry Christmas my love',
                 'A happy Christmas to all the family',
                 'You\'re all I want for Christmas',
                 'Get well soon'];

for (let i = 0; i < greetings.length; i++) {
  let input = greetings[i];
    if (input.indexOf('Christmas') !== -1) {
        if (greetings[i]) {
            let listItem = document.createElement('li');
            listItem.textContent = input;
            list.appendChild(listItem);
            console.log(listItem);
    }  
  }
}

const item = document.querySelector('.lowercase');
item.innerHTML = '';
let cities = ['lonDon', 'ManCHESTer', 'BiRmiNGHAM', 'liVERpoOL'];

for (let i = 0; i < cities.length; i++) {
  let input = cities[i];
  // write your code just below here

  let result = input.toLowerCase();
  let listItem = document.createElement('li');
  listItem.textContent = result;
  item.appendChild(listItem);
}

/* We want to extract the station code and name, and put them together in a 
string with the following structure:

MAN: Manchester Piccadilly */
const text = document.querySelector('.slice');
text.innerHTML = '';
let stations = ['MAN675847583748sjt567654;Manchester Piccadilly',
                'GNF576746573fhdg4737dh4;Greenfield',
                'LIV5hg65hd737456236dch46dg4;Liverpool Lime Street',
                'SYB4f65hf75f736463;Stalybridge',
                'HUD5767ghtyfyr4536dh45dg45dg3;Huddersfield'];

for (let i = 0; i < stations.length; i++) {
  let input = stations[i];
  // write your code just below here   

  let sigla = input.slice(0,3);
  let inicio = input.indexOf(';');
  inicio++;
  console.log(inicio);
  let result = input.slice(inicio);
  //console.log(result);
  let listItem = document.createElement('li');
  listItem.textContent = sigla + ' ' + result;
  text.appendChild(listItem);
}

//Converting between strings and arrays
/* 
split('')
join('')
push('')
pop()
shift
unshift
*/

let myData = 'Manchester,London,Liverpool,Birmingham,Leeds,Carlisle';
//procura o caracter e separa a String em substrings
let myArray = myData.split(',');
myArray.push('Cardiff');
myArray.push('Bradford', 'Brighton');
console.log(myArray); //(9) ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff", "Bradford", "Brighton"]
console.log(myArray[1]); //London
console.log(myArray.length); // 9
let removedItem = myArray.pop();
console.log(myArray);//(8) ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff", "Bradford"]
console.log(removedItem);// Brighton
//adiciona no inicio array
myArray.unshift('Edinburgh');
console.log(myArray); //(9) ["Edinburgh", "Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff", "Bradford"]
//remove do inicio do array
let removedItem2 = myArray.shift();
console.log(myArray); //(8) ["Manchester", "London", "Liverpool", "Birmingham", "Leeds", "Carlisle", "Cardiff", "Bradford"]
console.log(removedItem2); //Edinburgh


let myNewString = myArray.join('->');
myNewString;
console.log(myNewString);

let dogNames = ['Rocket','Flash','Bella','Slugger'];
dogNames.toString(); // Rocket,Flash,Bella,Slugger

/* 
printing out product names and prices on an invoice, then totaling the prices and printing them at the bottom.
*/
const listProduct = document.querySelector('.item');
const totalBox = document.querySelector('.price');
let total = 0;
listProduct.innerHTML = '';
totalBox.textContent = '';
/*
// number 1 - turn this into an array and store it in an array called products
                'Underpants:6.99'
                'Socks:5.99'
                'T-shirt:14.99'
                'Trousers:31.99'
                'Shoes:23.99';

for (let i = 0; i <= 0; i++) { // number 2 - stops the loop when i is no longer less than the products array's length
  // number 3
splits the current array item (name:price) into two separate items, one containing just the name and one containing just the price.
  // number 4
  convert the price from a string to a number
  // number 5 Shoes — $23.99
  let itemText = 0;
  
  const listItem = document.createElement('li');
  listItem.textContent = itemText;
  listProduct.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);
*/

let products = ['Underpants:6.99','Socks:5.99','T-shirt:14.99','Trousers:31.99','Shoes:23.99'];

for (let i = 0; i<products.length; i++) {
  
  let separar = products[i].indexOf(":");
  console.log(separar);
  let position = separar++;
  let nameProduct = products[i].slice(0,position);
  console.log(nameProduct);
  let pricePosition = separar--;
  let price = Number(products[i].slice(pricePosition));
  console.log(price);
  total += price;
  console.log("O total eh: " + total);
  
  const listItem = document.createElement('li');
  listItem.textContent = nameProduct + '- $' + price;
  listProduct.appendChild(listItem);
}

totalBox.textContent = 'Total: $' + total.toFixed(2);


/*
fake search site
*/

const resultSearch = document.querySelector('.resultSearch');
const searchInput = document.querySelector('.searchInput');
const searchBtn = document.querySelector('.searchBtn');

resultSearch.innerHTML = '';

let myHistory = [];

searchBtn.onclick = function() {
  // we will only allow a term to be entered if the search input isn't empty
  if (searchInput.value !== '') {
    // number 1 adds the current value entered into the search input to the start of the array. 
    //This can be retrieved using searchInput.value
    myHistory.unshift(searchInput.value);
    console.log(myHistory);
    // empty the list so that we don't display duplicate entries
    // the display is regenerated every time a search term is entered.
    resultSearch.innerHTML = '';

    // loop through the array, and display all the search terms in the list
    for (let i = 0; i < myHistory.length; i++) {
      itemText = myHistory[i];
      const listItem = document.createElement('li');
      listItem.textContent = itemText;
      resultSearch.appendChild(listItem);
    }

    // If the array length is 5 or more, remove the oldest search term
    if (myHistory.length >= 5) {
      // number 2 removes the value currently at the end of the array.
      myHistory.pop();
    }

    // empty the search input and focus it, ready for the next term to be entered
    searchInput.value = '';
    searchInput.focus();
  }
}
