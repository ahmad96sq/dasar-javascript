var s='';

//bagian 1
	for(var a=1;a<=5;a++){
		for(var b=1;b<=a;b++){
			s+='*';
		}
		
		s+='\n';
	}
	s+='\n';

//bagian 2

		for(var a=1;a<=5;a++){
			for(var b=a;b<=5;b++){
			s+='*';
		}
		
		s+='\n';
	}
	s+='\n';

//bagian 3

	for(var i=1;i<=5;i++){

			for(var k=i;k<=5;k++){

				s+=' '
			}
			for(var j=1;j<=i;j++){
			
        	s+='*';

			}
		for(var l=1;l<i;l++){
			
        	s+='*';

		}

	s+='\n';

	}
	s+='\n';

	for(var m=1;m<=5;m++){
		
		for(var k=1;k<=m;k++){

				s+=' '
			}

		for(var n=m;n<=5;n++){
		
		s+='*'

		}

		for(var o=m;o<5;o++){
		s+='*'

		}

	s+='\n';

	}



	console.log(s);


