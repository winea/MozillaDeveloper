/*
Generates a silly story when the "Generate random story" button is pressed.

Replaces the default name "Bob" in the story with a custom name, only if a custom name is 
entered into the "Enter custom name" text field before the generate button is pressed.

Converts the default US weight and temperature quantities and units in the story into UK 
equivalents if the UK radio button is checked before the generate button is pressed.

Will generate another random silly story if you press the button again (and again...)
*/

const customname = document.querySelector("#customname");
const us = document.querySelector("#us");
const uk = document.querySelector("#uk");
const story = document.querySelector(".story");

let names = ['Father Christmas', 'Willy the Goblin', 'Big Daddy', 'Pernalonga', 'Pato Donalds'];
//94 fahrenheit or 34 centigrade
//300 pounds or  21 stone
//Bob or input
//console.log(customname);

//let random = Math.floor(Math.random() * names.length);
//console.log(random);


const randomName = () => {
    let random = Math.floor(Math.random() * names.length);
    return random;
}


let btnRandom = () => {
    //console.log(us.checked);
    //console.log(customname.value);
    if(us.checked) {
//console.log(random);
        let textUs = "It was 94 fahrenheit outside, so Father Christmas went for a walk. When they got to Disneyland, they stared in horror for a few moments, then melted into a puddle on the sidewalk. Bob saw the whole thing, but was not surprised — Father Christmas weighs 300 pounds, and it was a hot day.";
        if (customname.value) {
             let choice = names[randomName()];
             //replace global (nao existe replaceAll)
             let choiceName = textUs.replace(/Father Christmas/g, choice);
            console.log(choiceName); 
             let changeName = choiceName.replace('Bob', customname.value);
            console.log(changeName); 
            story.textContent = changeName;       
        } else {
            let choice = names[randomName()];
            let choiceName = textUs.replace(/Father Christmas/g, choice);
            story.textContent = choiceName;
        }
    } else {
        let textUk = "It was 34 centigrade outside, so Father Christmas went for a walk. When they got to Disneyland, they stared in horror for a few moments, then melted into a puddle on the sidewalk. Bob saw the whole thing, but was not surprised — Father Christmas weighs 21 stone, and it was a hot day.";
        if (customname.value) {
            let choice = names[randomName()];
            //replace global (nao existe replaceAll)
            let choiceName = textUk.replace(/Father Christmas/g, choice);
           console.log(choiceName); 
            let changeName = choiceName.replace('Bob', customname.value);
           console.log(changeName); 
           story.textContent = changeName;       
       } else {
           let choice = names[randomName()];
           let choiceName = textUk.replace(/Father Christmas/g, choice);
           story.textContent = choiceName;
       }
    }
}