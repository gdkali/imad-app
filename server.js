var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');

var config = {
    user:'gaganmishr17',
    database:'gaganmishr17',
    host:'http://db.imad.hasura-app.io/database.php',
    port:'5432',
    password:process.env.DB_PASSWORD
    
};
var app = express();
app.use(morgan('combined'));

var articles={
   'article-one':{
    title:'Article By GD1',
    heading:'Article One',
    date:'1st March 2018',
    content:`
    <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <p>
Why do we use it?
It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>`   
},
   'article-two':{
       title:'Article By GD2',
    heading:'Article 2',
    date:'1st March 2018',
    content:`
    <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <p>`
   },
   'article-three':{
    title:'Article By GD3',
    heading:'Article 3',
    date:'1st March 2018',
    content:`
    <p>What is Lorem Ipsum?
Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
    </p>
    <p>`
   },
};
  
function xyz(data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
    
var ht=`
  <html>
    <head>
        <title>${title}</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
      <link href="/ui/style.css" rel="stylesheet"/>

    </head>
    <body>
        <div class=container>
        <hr/>
        <h3>${heading}</h3>
        <div>${date}</div>
        <div>
            ${content}
<div>
            <a href="http://gaganmishr17.imad.hasura-app.io">Home</a>
        </div>

        </div>
        </div>
    </body>
</html>
`;
return ht;
}


 app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter =0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});


app.get('/:articleName', function (req, res) {
  //articleName == article-one
  //articles[articleName] == {} content object for article one
  var articleName = req.params.articleName;
  res.send(xyz(articles[articleName]));
});

function hash(input,salt){
    var hashed = crypto.pbkdf2Sync(input,salt,100,512,'sha512');
    return hashed.toString('hex');
}

app.get('/hash/:input',function(req,res){
    var hashedString = hash(req.params.input,'this is random strig');
     res.send(hasedString);
}) ;


var Pool= new Pool(config);
app.get('/test-db',function(req,res){
     //make a request
     //return a response with the results
     pool.query('SELECT *FROM test',function(err,result){
         if (err){
             res.status(500).send(err.toString());
         } else {
             res.send(JSON.stringify(result));
         }     
         
     });
     
 });   
 
app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});


app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});