const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
});

function DOB(date) {
    try {
        myPromise(date).then(res => console.log(res));
    } catch(e) {
        console.log(e);
    }
}

const myPromise = (date) => {
    return new Promise((resolve, failure) => {
        const dob = new Date (date)
        const ageOfMaj = new Date('2004-01-01')
        if (dob < ageOfMaj ) {
            resolve('True')
            return true
        } else if (dob > ageOfMaj ) {
            failure('Nope')
        }
    })
}

DOB("1997-08-24")

server.listen(3007);


// Créez une fonction qui prend en paramètre une date de naissance d’une personne au format DD/MM/YYYY. Si la 
// personne est mineure, la promesse échoue, sinon elle renvoie true

