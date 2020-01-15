// membuat pengulanga untuk menanyakan apakah user ingin bermain agi
let tanya = true;
while (tanya){


// menangkap pilihan player
let p = prompt('Pilih : Gajah, Semut, Orang =');


// menangkap pilihan komputer / random
let comp = Math.random();

if (comp <= 0.37) {
	comp = 'gajah';
}else if(comp <= 0.67) {
	comp = 'semut';

}else {
	comp = 'orang';
}

// menentukan rule / aturan main
let hasil = '';

if (p == comp){
	hasil = 'SERI';
}else if (p == 'gajah' ) {
	// if (comp == 'Orang'){
	// 	hasil = 'MENANG';
	// }else {
	// 	hasil = 'KALAH';
	// }

// Contoh dgn cara lain

hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';


}else if(p == 'orang'){

hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';

}else if (p == 'semut') {

hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
	
}else {
	hasil = 'Memasukkan Pilihan yang Salah'
}


// Tampilkan hasil

alert('Kamu Memilih ' + p + ' dan Komputer Memilih ' + comp + '\nMaka hasilnya kamu ' + hasil );

tanya = confirm('Mau Main Lagi ?');
}

alert('TERIMA KASIH');