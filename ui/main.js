console.log('Loaded!');
alert('Hello Welcome To My WEBAPP');

//counter code
var button=document.getElementById('counter');
var counter =0;

button.onclick =function(){
    
    //make a request to the counter
    
    //capture response
    
    //render variable
    counter=counter +1;
    var span= document.getElementById('count');
    span.innerHTML=counter.toString();
}