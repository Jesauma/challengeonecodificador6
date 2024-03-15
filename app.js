let textoEncriptado = '';

function encriptar() {
	let texto = document.getElementById('texto').value;

	let textoCifrado = texto
		.replace(/e/gi, 'enter')
		.replace(/i/gi, 'imes')
		.replace(/a/gi, 'ai')
		.replace(/o/gi, 'ober')
		.replace(/u/gi, 'ufat');

	textoEncriptado = textoCifrado;

	if (texto.length != 0) {
		document.getElementById('resultado-final').innerText = textoCifrado;
		document.getElementById('contenido-vacio').classList.add('ocultar');
		document.getElementById('caja-btn').classList.remove('ocultar');
		document.getElementById('texto').value = '';
	} else {
		parrafo.textContent = 'Ingresa el texto que deseas encriptar o desencriptar';
		swal('Ooops!', 'Debes ingresar un texto', 'warning');
	}
}

function desencriptar() {
	let texto = document.getElementById('texto').value;

	let textoCifrado = texto
		.replace(/enter/gi, 'e')
		.replace(/imes/gi, 'i')
		.replace(/ai/gi, 'a')
		.replace(/ober/gi, 'o')
		.replace(/ufat/gi, 'u');

	if (texto.length != 0) {
		document.getElementById('texto').value = textoCifrado;
		document.getElementById('resultado-final').innerText = textoCifrado;
		document.getElementById('texto').value = '';
	} else {
		parrafo.textContent = 'Ingresa el texto que deseas encriptar o desencriptar';
		swal('Ooops!', 'Debes ingresar un texto', 'warning');
	}
}

function copytext() {
	let copiarTexto = document.getElementById('resultado-final');
	navigator.clipboard.writeText(copiarTexto.innerText);
	alert('Texto copiado');
}
