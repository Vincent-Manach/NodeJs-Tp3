const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'});
});

function strLength(str) {
    try {
        myPromise(str).then(res => console.log(res));
    } catch(e) {
        console.log(e);
    }
}

const myPromise = (str) => {
    return new Promise((resolve, failure) => {
        if (str.length<20) {
            resolve('True')
            return true
        } else {
            failure('Nope')
        }
    })
}

strLength("Hello qz !")

server.listen(3006);


// Créez une fonction qui prend en paramètre une chaîne de caractère, si la chaîne de caractère fait plus de 20 
// caractères, la promesse échoue, sinon la fonction renvoie true
