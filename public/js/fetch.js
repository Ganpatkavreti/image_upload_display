
fetch('http://localhost:3000/contact/api').then( (data)=>{
  return data.json();
}).then( (realdata)=>{



for(var a = 0; a <= 500; a++){
const d = realdata[a].productName;

const b = realdata[a].productImage;

const c =  realdata[a].productPrice;

const e =  realdata[a].productDescription;


var cardDiv = document.createElement('div');
cardDiv.className = 'card';

  
  var imgElement = document.createElement('img');
  imgElement.src = b; 

  var h1Element = document.createElement('h1');
  h1Element.innerHTML = d; 

  var pElement = document.createElement('p');
  pElement.innerHTML = e; 

  var buttonElement = document.createElement('button');
 
  buttonElement.textContent = 'Click me'; 
  buttonElement.onclick = booking;
  

  // Append the img, h1, p, and button elements to the card div
  cardDiv.appendChild(imgElement);
  cardDiv.appendChild(h1Element);
  cardDiv.appendChild(pElement);
  cardDiv.appendChild(buttonElement);

  // Find the element with class 'product' and append the card div to it
  var productElement = document.querySelector('.card-container');
  productElement.appendChild(cardDiv);


}



  
}).catch((err)=>{
  console.log(err);
});

function booking(){


  alert('this is feld class');

}
