// Bagian 1 

//function tamBah(a,b){

// 	a = parseInt(prompt('Masukan angka Pertama'));
// 	b = parseInt(prompt('Masukan angka Kedua'));
// 	hasil = a + b;

// 	return hasil;
// }

// console.log(tamBah());

//Bagian 2

function tamBah() {
	// body...
	var hasil = 0;
	for(var i=0; i < arguments.length ; i++){
		hasil += arguments[i];
	}

	return hasil;
}

var coba = tamBah(1,2,3,4);

console.log(coba);