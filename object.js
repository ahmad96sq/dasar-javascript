// Membuat Object


// Object Literal

var mhs1 = {
	nama : 'Ahmad',
	nrp : '0982192738172',
	email : 'ahmadsaja96.as@gmail.com',
	jurusan : 'Teknik Informatika'
} 

var mhs2 = {
	nama : 'Siddiq',
	nrp : '0282192738145',
	email : 'siddiq98@gmail.com',
	jurusan : 'Teknik Informatika'
} 

// function Declaration

 function memBuatObject(nama,nrp,email,jurusan){

 	var mhs = {};
 		mhs.nama = nama;
 		mhs.nrp=nrp;
 		mhs.email=email;
 		mhs.jurusan=jurusan;
 	return mhs;
 }

 var mhs3 = memBuatObject(
 	'Ali', '982634862987', 'ali@yahoo.com', 'Ekonomi'
 )

 // Constructor

 function Objek(nama,nrp,email,jurusan){

 	//tanpa membuat variabel
 	this.nama=nama;
 	this.nrp=nrp;
 	this.email=email;
 	this.jurusan=jurusan;
 }

 var mhs4= new Objek('Doni', '02343486234435', 'doniy@yahoo.com', 'Hukum')