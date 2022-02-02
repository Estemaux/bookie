// Extracting users and ratings from more than 50 users

document.querySelector("#ratings").onclick = function()
{
let x = ratings['user_id'].value_counts() > 50;
let y = x[x].index; //Number of user ID's
print(y.shape);
ratings = ratings[ratings['user_id'].isin(y)];
}

var http = require('http');
var hostname = 'localhost';
var port = 2022;

var server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Welcome to Bookie!');
  });

server.listen (port, hostname (){
    console.log('server running at ${hostname}:${port}')
});

