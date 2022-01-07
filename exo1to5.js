// Exo 1
const strLength = (str) => {
    return new Promise((resolve, failure) => {
        if (str.length<20) {
            resolve('True')
        } else {
            failure('Nope')
        }
    })
}

// Exo 2
const intCalcul = (a, b) => {
    return new Promise((resolve, failure) => {
        if (a > b) {
            var c = a - b;
            resolve(c)
        } else {
            failure('Nope')
        }
    })
}

// Exo 3
const DOB = (date) => {
    return new Promise((resolve, failure) => {
        const dob = new Date (date)
        const ageOfMaj = new Date('2004-01-01')
        if (dob < ageOfMaj ) {
            resolve('True')
        } else if (dob > ageOfMaj ) {
            failure('Nope')
        }
    })
}

// Exo 4
function execute() {
    try {
      let str = 'This is a string';
      strLength(str).then(res => console.log(res));
    } catch(e) {
      console.log(e);
    }
}
execute();

function executeInt() {
    try {
      let a = 7;
      let b = 5;
      intCalcul(a, b).then(res => console.log(res))
    } catch(e) {
      console.log(e);
    }
}
executeInt();

function executeDob() {
    try {
      let dob = new Date (1997, 8, 24)
      DOB(dob).then(res => console.log(res));
    } catch(e) {
      console.log(e);
    }
}
executeDob();

// Exo 5
async function execute() {
    try {
      let str = 'This is a string';
      await strLength(str).then(res => console.log(res));
    } catch(e) {
      console.log(e);
    }
}
execute();
  
async function executeInt() {
    try {
      let a = 7;
      let b = 5;
      await intCalcul(a, b).then(res => console.log(res));
    } catch(e) {
      console.log(e);
    }
}
executeInt();
  
async function executeDob() {
    try {
      let dob = new Date(1997, 8, 24);
      await DOB(dob).then(res => console.log(res));
    } catch(e) {
      console.log(e);
    }
}
executeDob();
