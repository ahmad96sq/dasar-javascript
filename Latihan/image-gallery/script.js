const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo');
const thumbs = document.querySelectorAll('.thumb');

container.addEventListener('click', function(e) {
	// body...
	if(e.target.className == 'thumb'){
		jumbo.src = e.target.src;
		jumbo.classList.add('fade');

		// untuk menghapus class fade, kita gunakan timing function
		setTimeout(function(){
			jumbo.classList.remove('fade');
		}, 500);

		thumbs.forEach(function(thumb){
			if(thumb.classList.contains('active')){
				thumb.classList.remove('active');
			}

			// thumb.className='thumb'
		});
		e.target.classList.add('active');
	}
});