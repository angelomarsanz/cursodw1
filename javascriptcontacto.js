function validacion()
	{
	if(minombre2.value=="")
		{
		minombre2.style.background='#FFDDDD';
		}
	else if(micorreo2.value=="")
		{
		micorreo2.style.background='#FFDDDD';
		}
	else if(micelular2.value=='' && mitelefonofijo2.value=='')
		{
		micelular2.setCustomValidity('Inserte al menos un número de teléfono');
		micelular2.style.background='#FFDDDD';
		mitelefonofijo2.style.background='#FFDDDD';
		}
	else
		{
		micelular2.setCustomValidity('');
		micomentario2.style.background='#FFDDDD';
		}
	}
function iniciar() 
	{
	minombre2=document.getElementById("minombre");
	micorreo2=document.getElementById("micorreo");
	micelular2=document.getElementById("micelular");
	mitelefonofijo2=document.getElementById("mitelefonofijo");
	micomentario2=document.getElementById("micomentario");
	minombre2.addEventListener("input", validacion, false);
	micorreo2.addEventListener("input", validacion, false);
	micelular2.addEventListener("input", validacion, false);
	mitelefonofijo2.addEventListener("input", validacion, false);
	micomentario2.addEventListener("input", validacion, false);
	validacion();
	}
window.addEventListener("load", iniciar, false);


