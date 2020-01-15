var penumpang = ["Ahmad", "Ali", "Siska"];

var tambahPenumpang = function(namaPenumpang, penumpang){

	//jika angkot kosong
	if(penumpang.length == 0){
		// tambah penumpang di awal array
		penumpang.push(namaPenumpang);

		// kembalikan isi array dan keluar dari function
		return(penumpang);

	}
	// else 
	else {
		// telusurui seluruh kursi dari awal
		for(var i = 0; i <= penumpang.length; i++){

			// jika ada kursi kosong
			if(penumpang[i]== undefined){
				// tambah penumpang di kursi tersebut
				penumpang[i]= namaPenumpang;

			// kembalikan isi array dan keluar dari function
			return penumpang;
			}

		//jika sudah ada nama yang sama
		else if(penumpang[i]== namaPenumpang){
			// tampilkan pesan kesalahannya
			console.log('Nama penumpang '+ penumpang[i]+' Sudah ada');
			// kembalikan isi array dan keluar dari function
			return penumpang;
		}
		// jika seluruh kursi terisi
		else if(i== penumpang.length){
			//tambahkan penumpang di akhir array
			penumpang.push(namaPenumpang);
			// kembalikan isi array dan keluar dari function
			return penumpang;
		}
			
		}
	}

}

var hpsPenumpang = function(nama, penumpang){

	// jika angkotnya kosong
	if(penumpang.length == 0){
		console.log('Angkot nya kosong');

		return penumpang;
	}

	// telusuri seluruh kursi yang ada
	for(var i=0; i<= penumpang.length;i++){
		// Jika nama ada maka hapus
		if(nama == penumpang[i]){

			penumpang[i]=undefined;

		return penumpang;

		}
		// jika nama tidak ada maka
		else if(i == penumpang.length - 1){
			console.log(nama +' tidak ada di dalam angkot');
			return penumpang;
		}		
		
	}
}

