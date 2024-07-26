const tutup = document.querySelector('.tutup')
tutup.addEventListener ('click', function() {
	const a = document.getElementsByClassName('kontener')[0]
	const b = document.getElementsByClassName ('lapisan')[0]
	a.removeChild(b)
})