
//carga el string de datos y lo envia para ser transformado a formato JSON
function loadCarrito(){
  prods=retrieveCarritoFromString(datos);
  storeCarrito("Productos",prods);
}

//convierte a formato JSON el string
function retrieveCarritoFromString(jsonString){
 return JSON.parse(jsonString,revive);
}

function definePrototype(){
	var Book = {
		
		codigo : "Null" ,
		description : "",
		imageUrl : "Book/Cover/Default.jpg",
		price : ""
		
	}
}
function retrieveCarrito(id){
  var jsonCarrito = localStorage.getItem(id);
  if(jsonCarrito === null){
	return new Carrito();
  }
  else{
	 return JSON.parse(jsonCarrito, 'Carrito');
  }
}

function agregarAlCarro(codLibro){
	
		
		var Books =  cargarLibros();
		var Lib = Books[codLibro-1];
		var carrito = localStorage.getItem('carrito');
		
		var cant = $("#c"+codLibro);		
		cantidad = cant[0].value;
		
		var compras = retrieveCarrito('Compras');

		ordenLibros = new Carrito();
		
		
		// Si ya exiten item en el carro se guardan en la nueva instancia para ser sustituidos
		if(compras.items.length > 0){			
					ordenLibros.items = compras.items;	
		}
				
		if(Lib != null ){

		ordenLibros.add(new Libro(Lib.codigo, Lib.name, Lib.descripcion, Lib.imageUrl, Lib.price, cantidad));
	
		}
		
		// guardar carrito
	    localStorage.setItem('Compras', JSON.stringify(ordenLibros,'Carrito'));
}

function borrarDelCarro(codigoLibro){
	
		
		loadCarritoDB();
		var carrito = localStorage.getItem('carrito');
		var compras = localStorage.getItem('Compras');
		
		ordenLibros = new Carrito();
		
		var index = 0;
			
		if(BooksCarrito.length > 0 ){
			
			$.each(BooksCarrito, function(i){
				if(BooksCarrito[i].codigo == codigoLibro) {
					BooksCarrito.splice(i,1);
					return false;
				}
			});
			
		}
		
		if(carrito != null){
			var json =  JSON.stringify(BooksCarrito).substr(1,JSON.stringify(BooksCarrito).length-2);
			localStorage.setItem('carrito', json);
		}
		
		if(Compras != null){
			
			$.each(BooksCarrito, function(i){
					ordenLibros.add(new Libro(BooksCarrito[i].codigo, BooksCarrito[i].name, BooksCarrito[i].descripcion, BooksCarrito[i].imageUrl, BooksCarrito[i].price, 0));
			});		
		}
		
		localStorage.setItem('Compras', JSON.stringify(ordenLibros,'Carrito'));
		
	    loadCarritoData();
}

function loadBd(){
	Books = cargarLibros();
}
function loadData(){

	loadBd();
	

	$(document).ready(function() {
    //do jQuery stuff when DOM is ready
	
		var str="";
		
		for (var i = 0; i < Books.length; i++) {
			var brows = Books[i];	
			str += "<div class='col-sm-12 col-md-2  portfolio-item'><a href='#portfolioModal1' class='portfolio-link' data-toggle='modal' id="+checkForVal(brows.codigo)+"><div class='portfolio-hover'><div class='portfolio-hover-content'><i class='fa fa-plus fa-3x'></i></div></div><img src="+checkForVal(brows.imageUrl)+" class='img-responsive tumb center-block' alt=''></a>";			
			str += "<div class='portfolio-caption'><div class='row paddingB'><div class='row'><div col-sm-12><p class='text-muted'>Cantidad</p></div><div class='col-sm-12 paddingB'><input id="+"c"+checkForVal(brows.codigo)+" type='number' min='0' max='10' value='1' step='1' onkeydown='return false' /></div><div class='col-sm-12 paddingB'><h4>"+'$'+checkForVal(brows.price)+"</h4></div></div><div class='col-sm-12'><a href='#' onclick='agregarAlCarro("+checkForVal(brows.codigo)+");' class='btn btn-primary'>Agregar</a></div></div></div></div></div>";
		}

		var tableReady = str;
		var tableContainer = document.getElementById("table_div");
		tableContainer.innerHTML =  tableReady;
	});
	
	modalValues();

}

function loadCarritoDB(){
	BooksCarrito = retrieveCarrito('Compras');
}

function loadCarritoData(){
	
	loadBd();
	loadCarritoDB();
    var fullAmount = 0;
	//$(document).ready(function() {
    //do jQuery stuff when DOM is ready
	
		var str="";
		var det="";
		
		if(BooksCarrito.items.length > 0){
			for (var i = 0; i < BooksCarrito.items.length; i++) {
				var brows = BooksCarrito.items[i];	
				fullAmount = parseFloat(fullAmount) + parseFloat(brows.total);
				str += "<div class='col-sm-12 col-md-2  portfolio-item'><a href='#portfolioModal1' class='portfolio-link' data-toggle='modal' id="+checkForVal(brows.codigo)+"><div class='portfolio-hover'><div class='portfolio-hover-content'><i class='fa fa-plus fa-3x'></i></div></div><img src="+checkForVal(brows.imageUrl)+" class='img-responsive tumb' alt=''></a>";			
				str += "<div class='portfolio-caption'><div class='row paddingB'><div class='row'><div col-sm-12><p class='text-muted'>Cantidad "+brows.cantidad+"</p></div><div class='col-sm-12 paddingB'><h4>"+'$'+checkForVal(brows.precio)+"</h4></div><div col-sm-12><p class='text-muted'>Total "+brows.total.toFixed(2)+"</p></div></div><div class='col-sm-12'><a href='#' onclick='borrarDelCarro("+checkForVal(brows.codigo)+");' class='btn btn-primary'>Borrar</a></div></div></div></div></div>";
			}
			
	        det = "<div class='col-lg-6 paddingB'><h3 class='text-muted'>Precio total de la orden: $"+fullAmount+"</h3></div>"
			var tableDetallesContainer = document.getElementById("detalles_div");
			tableDetallesContainer.innerHTML =  det;
		}
		else{
			str = "<div class='col-lg-6 col-lg-offset-3 text-muted'><h1>No hay libros agregados!</h1></div>"
		}

			var tableReady = str;
			var tableContainer = document.getElementById("table_div");
			tableContainer.innerHTML =  tableReady;
		
	//});
	
	
	
	modalValues();

}
function buscarLibros(search,e){
	
	loadBd();
	e.preventDefault();

	$(document).ready(function() {
    //do jQuery stuff when DOM is ready
	
		var str="";
		
		for (var i = 0; i < Books.length; i++) {
			var brows = Books[i];	
			contains = brows.name.toLowerCase().indexOf(search.toLowerCase());
			if( contains != -1){
				str += "<div class='col-sm-12 col-md-2  portfolio-item'><a href='#portfolioModal1' class='portfolio-link' data-toggle='modal' id="+checkForVal(brows.codigo)+"><div class='portfolio-hover'><div class='portfolio-hover-content'><i class='fa fa-plus fa-3x'></i></div></div><img src="+checkForVal(brows.imageUrl)+" class='img-responsive tumb center-block' alt=''></a>";			
				str += "<div class='portfolio-caption'><div class='row paddingB'><div class='row'><div col-sm-12><p class='text-muted'>Cantidad</p></div><div class='col-sm-12 paddingB'><input id="+"c"+checkForVal(brows.codigo)+" type='number' min='0' max='10' value='1' step='1' onkeydown='return false' /></div><div class='col-sm-12 paddingB'><h4>"+'$'+checkForVal(brows.price)+"</h4></div></div><div class='col-sm-12'><a href='#' onclick='agregarAlCarro("+checkForVal(brows.codigo)+");' class='btn btn-primary'>Agregar</a></div></div></div></div></div>";
			}
		}

		var tableReady = str;
		var tableContainer = document.getElementById("table_div");
		tableContainer.innerHTML =  tableReady;
	});
	
	modalValues();
	
}
function buscarLibrosCarrito(search,e){
	
	e.preventDefault();
	loadCarritoDB();
	

	$(document).ready(function() {
    //do jQuery stuff when DOM is ready
		var str="";
		
		for (var i = 0; i < BooksCarrito.items.length; i++) {
			var brows = BooksCarrito.items[i]; 
			contains = brows.name.toLowerCase().indexOf(search.toLowerCase());
			if( contains != -1){
			str += "<div class='col-sm-2 portfolio-item'><a href='#portfolioModal1' class='portfolio-link' data-toggle='modal' id="+checkForVal(brows.codigo)+"><div class='portfolio-hover'><div class='portfolio-hover-content'><i class='fa fa-plus fa-3x'></i></div></div><img src="+checkForVal(brows.imageUrl)+" class='img-responsive tumb' alt=''></a>";			
			str += "<div class='portfolio-caption'><div class='row paddingB'><div class='row'><div col-sm-12><p class='text-muted'>Cantidad "+brows.cantidad+"</p></div><div class='col-sm-12 paddingB'><h4>"+'$'+checkForVal(brows.precio)+"</h4></div></div><div class='col-sm-12'><a href='#' onclick='borrarDelCarro("+checkForVal(brows.codigo)+");' class='btn btn-primary'>Borrar</a></div></div></div></div></div>";
			}			

		}

		var tableReady = str;
		var tableContainer = document.getElementById("table_div");
		tableContainer.innerHTML =  tableReady;
	});

		modalValues();
	
}
//a function to see if has value, if it does then display the value, if not then display n/a. 
function checkForVal(val) {
 return val || 'n/a'; 
}
function modalValues(){
	
	$("a[data-toggle=modal]").click(function() 
    {   
        var codigo = $(this).attr('id');
		var Book = Books[codigo-1];
		
		var modalName = document.getElementById("bookName"); 
		var modalDescription = document.getElementById("bookDescription"); 
		var modalImage = document.getElementById("bookImage"); 
		var modalPrice = document.getElementById("bookPrice"); 	
		
		modalName.innerText = Book.name;
		modalDescription.innerText = Book.descripcion;
		modalImage.src = Book.imageUrl;
		modalPrice.innerText = Book.price;
		//modalImage

    });
	
}

function cargarLibros(){
	var Books = [{
			"codigo": "1",
			"name": "Justice League, Vol. 1: Origin (The New 52)",
			"descripcion": "As a part of the monumental DC Comics—The New 52 event, comics superstars Geoff Johns and Jim Lee bring you an all-new origin story for the Justice League! In a world where inexperienced superheroes operate under a cloud of suspicion from the public, loner vigilante Batman has stumbled upon a dark evil that threatens to destroy the earth as we know it. Now, faced with a threat far beyond anything he can handle on his own, the Dark Knight must trust an alien, a scarlet speedster, an accidental teenage hero, a space cop, an Amazon Princess and an undersea monarch. Will this combination of Superman, The Flash, Cyborg, Green Lantern, Wonder Woman and Aquaman be able to put aside their differences and come together to save the world? Or will they destroy each other firstIn one of the most game-changing titles in comic industry history, Geoff Johns and Jim Lee re-imagine the classic heroes of the DC Universe for the 21st century. This volume collects issues #1-6 of Justice League, part of the DC Comics—The New 52 event.",
			"imageUrl": "Scripts/Book/Cover/1.jpg",
			"price": "9.75"
		}, {
			"codigo": "2",
			"name": "Justice League Vol. 2: The Villain's Journey ",
			"descripcion": "The Justice League is the greatest force for good the world has ever seen. But not everyone sees them that way.Their never-ending battle against evil results in casualties beyond its super-powered, costumed combatants. The League’s attempts to safeguard innocent lives cannot save everybody. Unbeknownst to Earth’s greatest champions, their greatest triumph may contain the seeds of their greatest defeat.For heroes are not the only people who face tragedy and are reborn as something greater than they were before. Villains can take this journey, too.",
			"imageUrl": "Scripts/Book/Cover/2.jpg",
			"price": "10.36"
		}, {
			"codigo": "3",
			"name": "Justice League Vol. 4: The Grid (The New 52)",
			"descripcion": "The event that the New 52 has been building towards since the beginning! #1 New York Times best-selling writer Geoff Johns (GREEN LANTERN, BATMAN: EARTH ONE) brings together almost two years of plot threads for an epic tale that will forever change the shape of the DC Universe. When the three Justice Leagues go to war with one another, who's side will everyone be on? Allies will be born, friends will become enemies and the DC Universe will never be the same.",
			"imageUrl": "Scripts/Book/Cover/3.jpg",
			"price": "11.69"
		}, {
			"codigo": "4",
			"name": "Justice League Vol. 3: Throne of Atlantis (The New 52) (Jla (Justice League of America))",
			"descripcion": "When Atlantis is struck by a U.S. Naval missile gone awry, Atlantis--led by Aquaman's brother Ocean Master--attacks the East Coast of the United States flooding its major cities such as Boston, Metropolis, Gotham City and several others. The Justice League comes together to help Aquaman turn back the tide, but they soon learn that they are woefully overmatched by the Atlantean Army, and must find a way to save the world from total annihilation.",
			"imageUrl": "Scripts/Book/Cover/4.jpg",
			"price": "11.51"
		}, {
			"codigo": "5",
			"name": "Justice League Vol. 7: Darkseid War Part 1 (Jla (Justice League of America))",
			"descripcion": "DC superstars Geoff Johns (FOREVER EVIL) and Jason Fabok (DETECTIVE COMICS) bring you the start of the Darkseid War, the epic event that has been building since the formation of the Justice League.The Justice League first came together years ago to stop Darkseid and his Parademon army from invading our Earth. Now Darkseid will once again make the planet a war zone, as Earth becomes the frontline in his battle with the Anti-Monitor—one of the most powerfully destructive creatures ever created. Wonder Woman, Superman, Batman and the rest of the Justice League are working with Mister Miracle to stop the coming bloodshed, but when two unstoppable forces of evil go to war, even the world’s greatest heroes might not be enough to save the world!",
			"imageUrl": "Scripts/Book/Cover/5.jpg",
			"price": "16.16"
		}, {
			"codigo": "6",
			"name": "Justice League Vol. 6: Injustice League (The New 52) (Jla (Justice League of America))",
			"descripcion": "When the Crime Syndicate nearly destroyed our world, Lex Luthor led the fight against them. Now, with public opinion of him at an all-time high, Superman’s former nemesis has decided to continue fighting for good full time — as a member of the Justice League! But does Lex really have only good intentions? And even if he has changed sides, can his teammates work alongside a man who once persecuted them? Superstar writer Geoff Johns (SUPERMAN) and a league of comics’ greatest artists — including Doug Mahnke, Jason Fabok, Ivan Reis and Scott Kolins —present JUSTICE LEAGUE: INJUSTICE LEAGUE. It’s an unforgettable tale of enemies, allies and the thin line in between…",
			"imageUrl": "Scripts/Book/Cover/6.jpg",
			"price": "12.97"
		}, {
			"codigo": "7",
			"name": "Batman Vol. 8 ",
			"descripcion": "The #1 New York Times all-star creative team of Scott Snyder, Greg Capullo and Danny Miki introduce an all-new Dark Knight, with guest appearances by Brian Azzarello (WONDER WOMAN) and Jock (BATMAN: THE BLACK MIRROR).Following the disappearance and presumed death of Batman, former police commissioner Jim Gordon has been called to carry on the Dark Knight’s legacy and become his successor.But while the name and what it stands for remain the same, this new Batman is far from just a copy of the original. Patrolling the city in a gargantuan high-tech Batsuit, Gordon is no shadowy vigilante. He has the full cooperation of the GCPD and the mayor, plus a multimillion-dollar budget from Powers International.But will an expensive suit be enough to stop the mysterious, weed-like Mr. Bloom before his deadly plans for the city take root",
			"imageUrl": "Scripts/Book/Cover/7.jpg",
			"price": "16.16"
		}, {
			"codigo": "8",
			"name": "Batman Vol. 7: Endgame ",
			"descripcion": "Batman’s greatest foe has returned for one last gag-but this time, not even the Joker is laughing. In their last encounter, the Dark Knight failed to live up to the Joker’s grand plans, so now the Joker is deadly serious. The games are over and, for their final showdown, the Clown Prince of Crime won’t be staging a comedy. No more macabre mind games. No more perverse pranks. The crazed killer who has elevated evil to an art is about to paint his masterpiece: the utter destruction of Batman and everything he holds dear. He’ll turn the Justice League against Batman. He’ll turn the people of Gotham into giggling psychopaths. But that’s just the setup-the punchline is even more terrifying.",
			"imageUrl": "Scripts/Book/Cover/8.jpg",
			"price": "15.23"
		}, {
			"codigo": "9",
			"name": "Batman Vol. 5: Zero Year - Dark City (The New 52)",
			"descripcion": "Before the Batcave and Robin, the Joker and the Batmobile ... there was ZERO YEAR.The Riddler has plunged Gotham City into darkness. How will a young Dark Knight bring his beloved hometown from the brink of chaos and madness and back into the light? From the critically acclaimed, New York Times #1 best-selling creative team of Scott Snyder and Greg Capullo, BATMAN VOL. 5: ZERO YEAR--DARK CITY is the concluding volume to Batman's origin story, as you've never seen it before. ",
			"imageUrl": "Scripts/Book/Cover/9.jpg",
			"price": "20.81"
		}, {
			"codigo": "10",
			"name": "Batman Vol. 3: Death of the Family (The New 52) ",
			"descripcion": "After having his face sliced off one year ago, the Joker makes his horrifying return to Gotham City! But even for man who's committed a lifetime of murder, he's more dangerous than ever before. How can Batman protect his city and those he's closest to? It all leads back to Arkham Asylum...This new hardcover collects the critically acclaimed tale DEATH OF THE FAMILY from the superstar #1 New York Times best-selling team of writer Scott Snyder and artist Greg Capullo. BATMAN VOLUME 3 will have repercussions that will affect the Batman universe for years to come!",
			"imageUrl": "Scripts/Book/Cover/10.jpg",
			"price": "15.12"
		}, {
			"codigo": "11",
			"name": "Aquaman Vol. 1: The Trench (The New 52)",
			"descripcion": "The King of the Seven Seas Aquaman returns to his very own ongoing series for the first time in years at the hands of DC Entertainment Chief Creative Office Geoff Johns, who reteams with GREEN LANTERN collaborator artist Ivan Reis! Between proving himself to a world that sees him as a joke, Aquaman and his bride Mera face off against a long buried terror from the depths of the ocean!",
			"imageUrl": "Scripts/Book/Cover/11.jpg",
			"price": "9.31"
		}, {
			"codigo": "12",
			"name": "Aquaman Vol. 4: Death of a King (The New 52)",
			"descripcion": "Unfolding out of the events of THRONE OF ATLANTIS comes a mystery that sends Aquaman to the ends of the Earth to solve an ancient murder—one that will reveal a horrific truth about Arthur Curry and threaten those closest to him today.Also, as the Scavenger compiles more Atlantean weaponry and artifacts, Aquaman enlists the aid of The Others to help find one missing relic in the Southwestern United States before his enemies can get to it and possess untold power.",
			"imageUrl": "Scripts/Book/Cover/12.jpg",
			"price": "13.73"
		}, {
			"codigo": "13",
			"name": "Aquaman Vol. 2: The Others (The New 52)",
			"descripcion": "Long before the King of the Seven Seas joined the Justice League, Aquaman was a part of another super-team: The Others. These young costumed adventurers traveled the globe, each trying to find their own individual road to redemption. Six years later after a grisly murder, The Others are reunited. They know only one man could be responsible: Black Manta. Aquaman must lead the charge to stop his arch-nemesis, but will the years have fractured The Others just enough to keep them from bringing this villain to justice? ",
			"imageUrl": "Scripts/Book/Cover/13.jpg",
			"price": "13.05"
		}, {
			"codigo": "14",
			"name": "Wonder Woman: Earth One Vol. 1",
			"descripcion": "From the masterful minds of Grant Morrison (FINAL CRISIS, THE MULTIVERSITY) and Yanick Paquette (SWAMP THING, BATMAN, INC.) comes the most provocative origin of Wonder Woman you’ve ever seen—a wholly unique retelling that still honors her origins. For millennia, the Amazons of Paradise Island have created a thriving society away from the blight of man. One resident, however, is not satisfied with this secluded life—Diana, Princess of the Amazons, knows there is more in this world and wants to explore, only to be frustrated by her protective mother, Hippolyta. Diana finds her escape when Air Force pilot Steve Trevor, the first man she has ever seen, crashes onto their shores. With his life hanging in the balance, Diana ventures into the long forbidden world of men. The Amazons chase after her and bring her back to Paradise Island in chains to face trial for breaking their oldest law—staying separated from the world that wronged them. ",
			"imageUrl": "Scripts/Book/Cover/14.jpg",
			"price": "15.89"
		}, {
			"codigo": "15",
			"name": "The Death of Superman New Edition",
			"descripcion": "THE EPIC EVENT THAT SHOCKED A NATION AND CHANGED SUPERMAN FOREVER!Doomsday. A creature with single-minded purpose of death and destruction. He has landed on Earth, laying waste to anything--and anyone--who dares stand in his way. The Justice League makes a valiant, but ultimately desperate, attempt to stop the unknown juggernaut. When the beast nears Metropolis, Superman answers the call to stop him.And then the unthinkable happens. The Man of Steel...is dead.",
			"imageUrl": "Scripts/Book/Cover/15.jpg",
			"price": "16.18"
		}, {
			"codigo": "16",
			"name": "Superman: Reign of the Supermen",
			"descripcion": "But now, four mysterious beings appear--all with the powers and abilities of the Man of Steel! One claims he is a clone from the DNA of Superman. Another--half-man and half-machine--says he is Superman with a cyborg body. Still another, a cold redeemer of justice, states that he alone has the right to wear the, shield. And, finally, an armored figure who says he fights with the heart and soul of Superman.",
			"imageUrl": "Scripts/Book/Cover/16.jpg",
			"price": "22.49"
		}, {
			"codigo": "17",
			"name": "DC Entertainment Essential Graphic Novels and Chronology 2015",
			"descripcion": "DC Entertainment has long been the home of the genre’s most seminal graphic novels, including such groundbreaking titles as WATCHMEN, BATMAN: THE DARK KNIGHT RETURNS and THE SANDMAN to present-day masterworks DAYTRIPPER and JUSTICE LEAGUE VOL. 1: ORIGIN. This DC ENTERTAINMENT ESSENTIAL GRAPHIC NOVELS AND CHRONOLOGY 2015 catalog has been specifically built to help guide any new reader into the most accessible entry points into comics, then moving onto spotlights and reading orders for some of the world’s most recognizable characters. DC Entertainment has revised its expansive look into our rich library for 2015, with a updated reading lists featuring graphic novels starring Batman, Superman, Wonder Woman and the Justice League, as well as the best collections from our Vertigo and MAD imprints.",
			"imageUrl": "Scripts/Book/Cover/17.jpg",
			"price": "48.50"
		}, {
			"codigo": "18",
			"name": "Green Lantern, Vol. 1: Sinestro (The New 52) ",
			"descripcion": "As part of the DC Comics—The New 52, the first six issues of the star-spanning series from superstar writer Geoff Johns and artist Doug Mahnke is collected here in hardcover!In the aftermath of a deadly showdown between the Green Lantern Corps and a mysterious foe from the past, Hal Jordan has been stripped of his ring. Left standing is an unexpected new Green Lantern in town: Sinestro! And now, this renegade GL has set a course for Korugar with one purpose: To free his homeworld from the scourge of his own Sinestro Corps, with the not-so-willing help of Hal Jordan!",
			"imageUrl": "Scripts/Book/Cover/18.jpg",
			"price": "9.59"
		}, {
			"codigo": "19",
			"name": "Green Lantern Vol. 2: The Revenge of Black Hand (The New 52) (Green Lantern (Graphic Novels)) ",
			"descripcion": "Comics hottest writer Geoff Johns (JUSTICE LEAGUE, AQUAMAN, BLACKEST NIGHT, GREEN LANTERN, THE FLASH) joins artist Doug Mahnke to on one of DC Comics The New 52's hottest titles, GREEN LANTERN!After the events of WAR OF THE GREEN LANTERNS, the villainous Sinestro is suddenly a Green Lantern, whether he wants to be or not! Now teaming up with his former foe, Hal Jordan and Sinestro find themselves investigating a crime that leads them deep into the homeworld of the Indigo Tribe. As their situation grows more and more dire, the unlikely team of these two Green Lanterns uncovers a secret that will change the GL Corps forever!",
			"imageUrl": "Scripts/Book/Cover/19.jpg",
			"price": "10.89"
		}, {
			"codigo": "20",
			"name": "Superman/Batman Vol. 1",
			"descripcion": "The iconic super-heroes unite when longtime Superman enemy Lex Luthor, now president of the United States, accuses Superman of a crime against humanity, and assembles a top-secret team of powerhouse heroes to bring Superman in -- dead or alive. And in the second storyarc, prepare for the arrival of Supergirl! Batman has discovered something strange on the bottom of Gotham Bay, which leads him to a mysterious and powerful teenaged girl bent on destroying Gotham City! What's her connection to Superman? Why does Wonder Woman want to hide her from the outside world? And will Darkseid succeed in recruiting her into doing his bidding?",
			"imageUrl": "Scripts/Book/Cover/20.jpg",
			"price": "9.99"
		}, 
		{
			"codigo": "21",
			"name": "Superman/Batman Vol. 1",
			"descripcion": "The iconic super-heroes unite when longtime Superman enemy Lex Luthor, now president of the United States, accuses Superman of a crime against humanity, and assembles a top-secret team of powerhouse heroes to bring Superman in -- dead or alive. And in the second storyarc, prepare for the arrival of Supergirl! Batman has discovered something strange on the bottom of Gotham Bay, which leads him to a mysterious and powerful teenaged girl bent on destroying Gotham City! What's her connection to Superman? Why does Wonder Woman want to hide her from the outside world? And will Darkseid succeed in recruiting her into doing his bidding?",
			"imageUrl": "Scripts/Book/Cover/1.jpg",
			"price": "9.99"
		}

	]
	return Books;
}