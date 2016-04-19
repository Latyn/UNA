function loadCarrito(){
  prods=retrieveCarritoFromString(datos);
  storeCarrito("Productos",prods);
}

function retrieveCarritoFromString(jsonString){
 return JSON.parse(jsonString,revive);
}

function definePrototype(){
	var Book = {
		
		codigo : "Null" ,
		description : "",
		imageUrl : "Book/Cover/Default.jpg"
		price : ""
		
	}
}