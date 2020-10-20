const container = document.querySelector('.bgColor');
const changeColor = document.querySelector('.btn');

const random = (number) => {
    return Math.floor(Math.random() * number);
}
changeColor.onclick = (e) => {
    let color = 'rgb(' + random(255) + ',' + random(255) + ',' + random(255) +')';
    container.style.backgroundColor = color;
    //console.log(e);
}

const form = document.querySelector('form');
const fname = document.getElementById('fname');
const lname = document.getElementById('lname');
const para = document.querySelector('p');

form.onsubmit = function(e) {
  if (fname.value === '' || lname.value === '') {
    e.preventDefault();
    para.textContent = 'You need to fill in both names!';
  }
}

/* Objects */

 const inputjscode = document.querySelector('#jscode');
 const btnjscode = document.querySelector('.btnjscode');
 const pjscode = document.querySelector('.pjscode');

btnjscode.onclick = function() {
  const code = inputjscode.value;
  pjscode.textContent = eval(code);
}

function Person(first, last, age, gender, interests) {
  this.name = {
    first,
    last
  };
  this.age = age;
  this.gender = gender;
  this.interests = interests;
};

Person.prototype.bio = function() {
  let string = this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ';
  let pronoun;

  if(this.gender === 'male' || this.gender === 'Male' || this.gender === 'm' || this.gender === 'M') {
    pronoun = 'He likes ';
  } else if(this.gender === 'female' || this.gender === 'Female' || this.gender === 'f' || this.gender === 'F') {
    pronoun = 'She likes ';
  } else {
    pronoun = 'They like ';
  }
  string += pronoun;

  if(this.interests.length === 1) {
    string += this.interests[0] + '.';
  } else if(this.interests.length === 2) {
    string += this.interests[0] + ' and ' + this.interests[1] + '.';
  } else {
    for(let i = 0; i < this.interests.length; i++) {
      if(i === this.interests.length - 1) {
        string += 'and ' + this.interests[i] + '.';
      } else {
        string += this.interests[i] + ', ';
      }
    }
  }
  console.log(string);
};

Person.prototype.greeting = function() {
  console.log('Hi! I\'m ' + this.name.first + '.');
};

Person.prototype.farewell = function() {
  console.log(this.name.first + ' has left the building. Bye for now!');
}

let person1 = new Person('Tammi', 'Smith', 17, 'female', ['music', 'skiing', 'kickboxing']);

console.log(person1);

function Teacher(first, last, age, gender, interests, subject) {
  Person.call(this, first, last, age, gender, interests);

  this.subject = subject;
}

let teacher2 = new Teacher('Lisa', 'Watson', 40, 'female', ['dancing', 'sing'], 'Math');
console.log(teacher2);
//Teacher It does not contain the methods of the Person constructor's prototype property
console.log(Object.getOwnPropertyNames(Teacher.prototype));
//Teacher herda as caracteristicas _proto_ de Person
Teacher.prototype = Object.create(Person.prototype);
console.log(Teacher.prototype.constructor);
Object.defineProperty(Teacher.prototype, 'constructor', { 
  value: Teacher, 
  enumerable: false, // so that it does not appear in 'for in' loop
  writable: true });
  console.log(Teacher.prototype.constructor);

  let teacher1 = new Teacher('Dave', 'Griffiths', 31, 'male', ['football', 'cookery'], 'mathematics');
  console.log(teacher1.name.first, teacher1.interests[0], teacher1.subject);
  teacher1.bio();
  teacher1.greeting();
  teacher1.farewell();

  /* Ecmascript 6 */
  class People {
    constructor(first, last, age, gender, interests) {
      this.name = {
        first,
        last
      };
      this.age = age;
      this.gender = gender;
      this.interests = interests;
    }
  
    greeting() {
      console.log(`Hi! I'm ${this.name.first}`);
    };
  
    farewell() {
      console.log(`${this.name.first} has left the building. Bye for now!`);
    };
  }

  let han = new People('Han', 'Solo', 25, 'male', ['Smuggling']);
han.greeting();
// Hi! I'm Han

let leia = new People('Leia', 'Organa', 19, 'female', ['Government']);
leia.farewell();

class TeacherArt extends People {
  constructor(first, last, age, gender, interests, subject, grade) {
    super(first, last, age, gender, interests);
    // subject and grade are specific to Teacher
    this._subject = subject;
    this.grade = grade;
  }

  get subject() {
    return this._subject;
  }

  set subject(newSubject) {
    this._subject = newSubject;
  }
}

console.log(TeacherArt);
let snape = new Teacher('Severus', 'Snape', 58, 'male', ['Potions'], 'Dark arts', 5);
console.log(snape);
snape.greeting(); // Hi! I'm Severus.
snape.farewell(); // Severus has left the building. Bye for now.
snape.age // 58
snape.subject; // Dark arts
// Check the default value
console.log(snape.subject) // Returns "Dark arts"

// Change the value
snape.subject = "Balloon animals" // Sets _subject to "Balloon animals"

// Check it again and see if it matches the new value
console.log(snape.subject) // Returns "Balloon animals"