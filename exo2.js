const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
});

function intCalcul(a, b) {
    try {
        myPromise(a, b).then(res => console.log(res));
    } catch(e) {
        console.log(e);
    }
}

const myPromise = (a, b) => {
    return new Promise((resolve, failure) => {
        if (a > b) {
            var c = a - b;
            resolve(c)
        } else {
            failure('Nope')
        }
    })
}

intCalcul(7, 5)

server.listen(3007);


// Créez une fonction qui prend en paramètre deux int, si la première variable est supérieure à la seconde, la 
// promesse renvoie la différence entre les deux variables, sinon elle échoue.

