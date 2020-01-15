// var angka=5;

// if(angka % 2 == 0){
// 	alert('Anda memasukkan angka GENAP yaitu : ' + angka);

// }else{
// 	alert('Anda memasukkan angka GANJIL yaitu : ' + angka);


// }

// Latihan

var angKot=1;
var jmLah=10;
var OPerasi=6;


// for(angKot = 1; angKot <= jmLah; angKot++){

// 	if(angKot<=berOPerasi){
// 		console.log('Angkot No. ' + angKot +' Beroperasi dengan baik');
// 	}else{
// 		console.log('Angkot No. ' + angKot + ' Tidak beroperasi');
// 	}

// }

for(angKot;angKot<=10; angKot++){

	if(angKot<=OPerasi && angKot !== 5){
		console.log('Angkot No. '+ angKot + ' beroperasi dengan baik');
	
	}else if(angKot == 8 || angKot == 10 || angKot == 5){
		console.log('Angkot No. ' + angKot + ' Sedang lembur');
	
	}else{
		console.log('Angkot No. ' + angKot + ' Tidak beroperasi');
	}
}