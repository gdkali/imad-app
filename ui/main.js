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

//submit name
var nameInput = document.getElementById('name');
var name = nameInput.value;
var submit =document.getElementById('submitbtn');
submit.onclick=function(){
    
    // make a request
    
    
    //captue a submit
    var names=['name1','name2','name3','name4'];
    var list='';
    for (var i=0;i<names,length; i++){
        list += '<li>' + names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML =list;
};