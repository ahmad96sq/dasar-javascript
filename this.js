// membuat object


//function declaration

function halo(){
	console.log(this);
	console.log('declaration');
}

// this mengembalikan object global
this.halo();



// Object Literal

var obj ={a : 'Ahmad', b : '982364', c : 'Informatika'};
	obj.halo=function(){
		
		console.log(this);
		console.log('Literal');
	}
// this mengembalikan object yang bersangkutan

obj.halo();


// Cara 3 constructor

function object(){

	console.log(this);
	console.log('constructor');
}

var obj1 = new object();
var obj2 = new object();

// thisnya mengembalikan object yang baru di buat