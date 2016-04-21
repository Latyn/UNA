
  function Carrito() {
    this.Carrito();
  };
  
  Carrito.prototype={
  	items: [],
	Carrito: function(){
	  this.items=new Array();
	},
	add: function(producto){
		
		this.items.push(producto);
		
	},
	remove: function(idx){
		
	  this.items.splice(idx, 1);
	  //this.items.pop(producto);
	  
	},
	get: function(i){
	  return this.items[i];
	},
	last: function(){
	  return this.items[this.items.length - 1];
	},
	size:function(){
	  return this.items.length;
	},
	contains:function(obj) {
    var i = this.items.length;
    while (i--) {
        if (this.items[i].codigo === obj.codigo) {
            return i;
        }
    }
    return -1;
	}
	
  };
  
  Carrito.from= function(plain){
    car = new Carrito();
	car.items=plain.items;
	return car;
  }
  
	Carrito.to= function(car){
	return {
		_class : 'Carrito',
		items : car.items
	};
	
  }
