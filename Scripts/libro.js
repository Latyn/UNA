
  function Libro(codigo,name,descripcion,imageUrl,price,cantidad) {
	total = cantidad * price;
    this.Libro(codigo,name,descripcion,imageUrl,price,cantidad, total);
  }
  
  // Se definen variables y funciones del prototipo
  Libro.prototype={
  	codigo: "",
	name: "",
	descripcion: "",
    imageUrl:"",
	price:"",
	cantidad:"",
    total:"",
	//categorias: [],
	Libro: function(codigo,name,descripcion,imageUrl,price, cantidad){
		this.codigo=codigo;
		this.name=name;
		this.descripcion=descripcion;
		this.imageUrl=imageUrl;
		this.precio=price;
		this.cantidad=cantidad;
		this.total= cantidad * price;
	},
	toString:function(){
	  return this.codigo+" - "+this.descripcion;
	}
  }
  
  Libro.from= function(plain){
    libro = new Libro(plain.codigo,plain.name,plain.descripcion,plain.imageUrl,plain.price,plain.cantidad,plain.precio);
	return libro;
  }
  
  Libro.to= function(libro){
    return {
        _class : 'Libro',
        codigo : libro.codigo,
		name : libro.name,
		descripcion : libro.descripcion,
		imageUrl : libro.imageUrl,
		price: libro.price,
		cantidad: libro.cantidad,
		total : libro.total
    };	
  }
  
	/*Producto.PRO =  0;
	Producto.COM =  1; 
	Producto.IMP =  2;
	Producto.BIC =  3;
  
	Producto.CATEGORIAS = ["Articulos en Promocion","Computadoras","Impresoras","Biciletas"];*/