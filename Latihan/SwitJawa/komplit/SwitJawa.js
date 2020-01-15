// // membuat pengulanga untuk menanyakan apakah user ingin bermain agi
// let tanya = true;
// while (tanya){


// // menangkap pilihan player
// let p = prompt('Pilih : Gajah, Semut, Orang =');


// // menangkap pilihan komputer / random
// let comp = Math.random();

// if (comp <= 0.37) {
// 	comp = 'gajah';
// }else if(comp <= 0.67) {
// 	comp = 'semut';

// }else {
// 	comp = 'orang';
// }

// // menentukan rule / aturan main
// let hasil = '';

// if (p == comp){
// 	hasil = 'SERI';
// }else if (p == 'gajah' ) {
// 	// if (comp == 'Orang'){
// 	// 	hasil = 'MENANG';
// 	// }else {
// 	// 	hasil = 'KALAH';
// 	// }

// // Contoh dgn cara lain

// hasil = (comp == 'orang') ? 'MENANG' : 'KALAH';


// }else if(p == 'orang'){

// hasil = (comp == 'gajah') ? 'KALAH' : 'MENANG';

// }else if (p == 'semut') {

// hasil = (comp == 'orang') ? 'KALAH' : 'MENANG';
	
// }else {
// 	hasil = 'Memasukkan Pilihan yang Salah'
// }


// // Tampilkan hasil

// alert('Kamu Memilih ' + p + ' dan Komputer Memilih ' + comp + '\nMaka hasilnya kamu ' + hasil );

// tanya = confirm('Mau Main Lagi ?');
// }

// alert('TERIMA KASIH');





function  getpilihanComputer() {

	const comp = Math.random();

	if (comp <= 0.37) return 'gajah';
	if(comp >= 0.37 && comp <= 0.67) return 'semut';

	return 'orang';
}

function getHasil(comp, player){
	let hasil = '';

	if (player == comp)

		 return 'SERI';

	if(player == 'gajah') return (comp == 'orang') ? 'MENANG': 'KALAH';

	if(player == 'orang') return (comp == 'gajah') ? 'KALAH' : 'MENANG';

	if (player == 'semut') return (comp == 'orang') ? 'KALAH': 'MENANG';
		
}

// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function(){

// 	const pilihanComputer = getpilihanComputer();
// 	const pilihanplayer = pGajah.className;
// 	const hasil = getHasil(pilihanComputer,pilihanplayer);

// 	// console.log('comp  	:' + pilihanComputer);
// 	// console.log('player 	:' + pilihanplayer);
// 	// console.log('Hasil 	:' + hasil);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src','img/' + pilihanComputer + '.png')

// 	const info = document.querySelector('.info');
// 	info.innerHTML = hasil;

// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function(){

// 	const pilihanComputer = getpilihanComputer();
// 	const pilihanplayer = pOrang.className;
// 	const hasil = getHasil(pilihanComputer,pilihanplayer);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src', 'img/' + pilihanComputer + '.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML= hasil;

// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function(){

// 	const pilihanComputer = getpilihanComputer();
// 	const pilihanplayer = pSemut.className;
// 	const hasil = getHasil(pilihanComputer,pilihanplayer);

// 	const imgComputer = document.querySelector('.img-komputer');
// 	imgComputer.setAttribute('src','img/'+ pilihanComputer+'.png');

// 	const info = document.querySelector('.info');
// 	info.innerHTML= hasil;

// });


// kita melakukan pengulangan untuk lebih menyingkat program


const pilihan = document.querySelectorAll('li img');
let sKom = 1;
let  sPlay = 1;

pilihan.forEach(function(pil){

	// untuk mengambil 1 gambar saja
	pil.addEventListener('click', function(){

		const pilihanComputer = getpilihanComputer();
		const pilihanplayer = pil.className;
		const hasil = getHasil(pilihanComputer,pilihanplayer);

		putar();

		// untuk menunggu wkt putar berhenti
		setTimeout(function(){

			const imgComputer = document.querySelector('.img-komputer');
			imgComputer.setAttribute('src','img/' + pilihanComputer + '.png')

			const info = document.querySelector('.info');
			info.innerHTML = hasil;


		// menghitug skor
			const sKomputer = document.querySelector('.skor-komputer');
			const sPlayer = document.querySelector('.skor-player');

			if (hasil == 'MENANG') {
				sPlayer.innerHTML = sKom++;
			}else if(hasil == 'KALAH'){
				sKomputer.innerHTML = sPlay++;
			}

		}, 1000);

		
	});
});




// untuk melakuka putar gambar secara acak

function putar(){
	const imgComputer =document.querySelector('.img-komputer');
	const gambar = ['gajah', 'orang', 'semut'];
	let i = 0;

	// untuk memberi wkt saat di click
	const waktuMulai = new Date().getTime();


	// fungsi untuk melakukan sesuatu secar berulang dgn interval wkt tertntu

	setInterval(function(){
		if(new Date().getTime() - waktuMulai > 1000){
			clearInterval
			return;
		}
		imgComputer.setAttribute('src', 'img/' + gambar[i++] + '.png');

		// untuk menghentikan increment i nya
		if(i==gambar.length) i = 0;

	}, 100)
}

