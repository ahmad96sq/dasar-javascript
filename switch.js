// Struktur

// switch(ekspresi){
// 	case "Nilai 1":

// 	aksi 1

// 	[break;]

// 	case "Nilai 2":

// 	aksi 2

// 	[break;]

// 	case "Nilai n":

// 	aksi n

// 	[break;]
// 	default:

// 	aksi_default

// 	[break;]
// }

// catatan : case membaca type data string, jadi harus menggunakan type data string. contoh  type string =(saya), untuk angka = ('1') atau inputan prompt di paksa mengubah inputan menjadi type data string dengan fungsi parseInt(prompt('Inputan'));

// var angka = prompt('Masukan angka:');

// switch(angka){
// 	case '1':
// 	alert('Anda memasukan angka 1');
// 	break;

// 	case '2':
// 	alert('Anda memasukan angka 2');
// 	break;

// 	default:
// 	alert('Yang anda masukan salah');
// 	break;
// }

var makanan= prompt('Masukan makanan / minuman sehat : \n contoh : Nasi, Daging, Susu, Humberger, Softdrink');

// switch(makanan){
// 	case 'Nasi':
// 	alert('Makanan / Minuman SEHAT');
// 	break;

// 	case 'Daging':
// 	alert('Makanan / Minuman SEHAT');
// 	break;

// 	case 'Susu':
// 	alert('Makanan / Minuman SEHAT');
// 	break;

// 	case 'Humberger':
// 	alert('Makanan / Minuman TIDAK SEHAT');
// 	break;

// 	case 'Softdrink':
// 	alert('Makanan / Minuman TIDAK SEHAT');
// 	break;

// 	default:
// 	alert('Makanan / Minuman TIDAK ADA');
// 	break;

// }

// Bisa juga dengan tanpa break di beberapa bagian karena aksinya sama agar code lebih singkat 

switch(makanan){
	case 'Nasi':
	case 'Daging':
	case 'Susu':
	alert('Makanan / Minuman SEHAT');
	break;

	case 'Humberger':
	case 'Softdrink':
	alert('Makanan / Minuman TIDAK SEHAT');
	break;

	default:
	alert('Makanan / Minuman TIDAK ADA');
	break;

}