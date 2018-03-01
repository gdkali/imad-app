console.log('Loaded!');
alert('Hello Welcome To My WEBAPP');

//counter code
var button=document.getElementById('counter');
var counter =0;

button.onclick =function(){
    
    //make a request to the counter
    var request=new XMLHttpRequest();
    //capture response
    request.onreadystatechange =function(){
        if (request.readyState == XMLHttpRequest.DONE){
            //take some action
            if (request.status == 200){
                var counter =request.responseText;
                var span=document.getElementById('count');
                span.innerHTML = counter.toString();
            }
        }
    };
    //render variable
    //make request
    request.open('GET','http://gaganmishr17.imad.hasura-app.io/counter',true);
    request.send(null);
};