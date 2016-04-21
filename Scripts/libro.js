
  function Libro(codigo,name,descripcion,imageUrl,price,cantidad) {
    this.Libro(codigo,name,descripcion,imageUrl,price,cantidad);
  }
  
  // Se definen variables y funciones del prototipo
  Libro.prototype={
  	codigo: "",
	name: "",
	descripcion: "",
    imageUrl:"",
	price:"",
	cantidad:"",
	//categorias: [],
	Libro: function(codigo,name,descripcion,imageUrl,price, cantidad){
		this.codigo=codigo;
		this.name=name;
		this.descripcion=descripcion;
		this.imageUrl=imageUrl;
		this.precio=price;
		this.cantidad=cantidad;
	},
	toString:function(){
	  return this.codigo+" - "+this.descripcion;
	}
  }
  
  Libro.from= function(plain){
    libro = new Libro(plain.codigo,plain.name,plain.descripcion,plain.imageUrl,plain.price,plain.cantidad);
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
		cantidad: libro.cantidad
    };	
  }
  
	/*Producto.PRO =  0;
	Producto.COM =  1; 
	Producto.IMP =  2;
	Producto.BIC =  3;
  
	Producto.CATEGORIAS = ["Articulos en Promocion","Computadoras","Impresoras","Biciletas"];*/