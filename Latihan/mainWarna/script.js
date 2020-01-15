const tUbahWarna = document.getElementById('tUbahWarna');
tUbahWarna.onclick = function(){
	document.body.style.backgroundColor = 'lightblue';
}


// membuat tombiol baru tanpa mengubah pada halaman index.html
const tombolAcak = document.createElement('button');
const teksTombl = document.createTextNode('acak warna');

tombolAcak.appendChild(teksTombl);

tombolAcak.setAttribute('type', 'button');

tUbahWarna.after(tombolAcak);


tombolAcak.addEventListener('click', function(){

	const r =Math.round(Math.random() * 255 + 1); // --> untuk membuat angka random antara 1 - 255

	const g =Math.round(Math.random() * 255 + 1);
	const b =Math.round(Math.random() * 255 + 1);

	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';
});


// mnangkap slidernya

const sMerah = document.querySelector('input[name=sMerah]');
const sHijau = document.querySelector('input[name=sHijau]');
const sBiru = document.querySelector('input[name=sBiru]');

// mengambil value dalam slidernya
sMerah.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;


	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';

});

sHijau.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;


	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';

});

sBiru.addEventListener('input', function(){
	const r = sMerah.value;
	const g = sHijau.value;
	const b = sBiru.value;

	document.body.style.backgroundColor = 'rgb('+r+','+g+','+b+')';

});

// mengubah warna dengan menggerakan kursor
document.body.addEventListener('mousemove', function(event){

	// posisi mouse
	// console.log(xPos)

	const xPos = Math.round((event.clientX / window.innerWidth) * 255);

	// console.log(yPos)

	const yPos = Math.round((event.clientY / window.innerHeight) * 255);

	document.body.style.backgroundColor = 'rgb('+ xPos +','+ yPos +', 100)';

});
