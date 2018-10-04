var express = require('express');
var app = new express();
var path = require('path')
var urls = 'localhost';
var bodyParser = require('body-parser')
app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    res.header("Content-Type", "application/json;charset=utf-8");
    next();
});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

async function getHttp() {
    var data = await new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({
                data: {
                    status: 200,
                    data: {
                        msg: 'success',
                        author: 'scholar',
                        age: '25' 
                    }
                }
            })
        }, 3000)
    })
    return data
}





app.get('/api/httpGetTest', async function(req,res) {
    var data = req.body;
    var result = await getHttp();
    res.send(result.data)
})

app.get('/api/vuexTest', async function(req,res) {
    var data = req.body;
    var result = await getHttp();
    res.send(result.data)
})

app.listen(3030)