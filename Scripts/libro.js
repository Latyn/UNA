
  function Libro(codigo,name,descripcion,imageUrl,price) {
    this.Libro(codigo,name,descripcion,imageUrl,price);
  }
  
  Libro.prototype={
  	codigo: "",
	name: "",
	descripcion: "",
    imageUrl:"",
	price:"",
	//categorias: [],
	Libro: function(codigo,name,descripcion,imageUrl,price){
		this.codigo=codigo;
		this.name=name;
		this.descripcion=descripcion;
		this.imageUrl=imageUrl;
		this.precio=price;
	},
	toString:function(){
	  return this.codigo+" - "+this.descripcion;
	}
  }
  
  Libro.from= function(plain){
    libro = new Producto(plain.codigo,plain.name,plain.descripcion,plain.imageUrl,plain.price);
	return libro;
  }
  
  Libro.to= function(libro){
    return {
        _class : 'Libro',
        codigo : prod.codigo,
		name : prod.name,
		descripcion : prod.descripcion,
		imageUrl : prod.imageUrl,
		price: prod.price
    };	
  }
  
	/*Producto.PRO =  0;
	Producto.COM =  1; 
	Producto.IMP =  2;
	Producto.BIC =  3;
  
	Producto.CATEGORIAS = ["Articulos en Promocion","Computadoras","Impresoras","Biciletas"];*/