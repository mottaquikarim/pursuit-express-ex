const myBodyParser = (req, res, next) => {
    // "get" !== "GET"
    if (req.method.toUpperCase() === "GET") {
        next();
        return;
    }

    let body = "";
    req.on('data', chunk => {
        console.log("CHUNK:", chunk)
        body += chunk;
    })
    
    req.on('end', () => {
        console.log('BODY is: ', body.toString('utf8'))
        if (!body) {
            next();
            return;
        }

        try {
            req.body = JSON.parse(body.toString('utf-8'))
            next();
        }
        catch (e) {
            res.status(400)
            res.json({
                "err": e.toString(),
            })
        } 
    })
}

const fs = require('fs');
const fsWPromise = (...rest) => new Promise((resolve, reject) => {
    rest.push((err, data) => {
        if (err) reject(err)
        resolve(data)
    })
    fs.appendFile(...rest)
})

const logger = (req, res, next) => {
    const data = `
Request TYPE: ${req.method.toUpperCase()}
Request URL: ${req.originalUrl}
ID: ${req.params.id}
Request PAYLOAD: ${JSON.stringify(req.body)}
TIMESTAMP: ${Date.now()}
__________________________________

    `;
    fsWPromise('./logs.txt', data)
        .then(() => next())
        .catch(e => {
            console.log('FAILED TO WRITE TO LOGS')
            console.log(data)
            next();
        })
}


module.exports = {
    myBodyParser,
    logger,
}