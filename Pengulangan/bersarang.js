// bersarang
var s='';
/*
// Bagian 1
for(var i=1;i<=8;i++){

	for(var j=1;j<=i;j++){

		s+='*'; //=s=s+'*';
	}
	s+='\n';

}

// Bagian 2

for(var i=7;i>=1;i--){

	for(var j=1;j<=i;j++){

		s+='*'; //=s=s+'*';
	}
	s+='\n';

}
*/
// Bagian 3
for(var i=1;i<=8;i++){

	for(var j=8;j>=i;j--){

		s+=' '; //=s=s+'*';
	}

	for(var k=1;k<=i;k++){

		s+='*'; //=s=s+'*';
	}

	for(var l=1;l<i;l++){

		s+='*'; //=s=s+'*';
	}
	s+='\n';

}
console.log(s);