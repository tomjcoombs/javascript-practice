const request = new XMLHttpRequest();

//observing the different stages of a request
request.addEventListener('readystatechange', () => {
  console.log(request,request.readyState);

  if(request.readyState === 4){
    console.log(request.responseText);
  }


})

request.open('GET','https://jsonplaceholder.typicode.com/todos/'); //set up the request for sending
request.send();