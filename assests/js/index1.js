console.log('Estoy Conectado al script');

// Event listeners

document
	.querySelector('#btn_to_change')
	.addEventListener('click', handleChangeStyleBtn);

document
	.querySelectorAll('input')
	.forEach((element) => element.addEventListener('input', handleGetCategories));

document.getElementById('calcular').addEventListener('click', verifyCategories);

// functions
let category_1 = 0,
	category_2 = 0,
	category_3 = 0;

function handleGetCategories(event) {
	const element = event.target;
	const id = element.id;
	const value = Number(element.value);

	if (id === 'category_1') {
		category_1 = value;
	} else if (id === 'category_2') {
		category_2 = value;
	} else {
		category_3 = value;
	}

}

function verifyCategories() {
	if (!category_1 && !category_2 && !category_3) {
		if (
			category_1 == -1 ||
			category_1 == 0 ||
			category_1 > 10 ||
			category_2 == -1 ||
			category_2 == 0 ||
			category_2 > 10 ||
			category_3 == -1 ||
			category_3 == 0 ||
			category_3 > 10
		) {
			alert('Agrega un número entre 1 y 10');
		}
	}

	if (
		category_1 == undefined &&
		category_2 == undefined &&
		category_3 == undefined
	) {
		alert('Agrega un número entre 1 y 10');
	} else if (
		category_1 == -1 ||
		category_1 > 10 ||
		category_2 == -1 ||
		category_2 > 10 ||
		category_3 == -1 ||
		category_3 > 10
	) {
		alert('Agrega un número entre 1 y 10');
	} else {
		const suma = category_1 + category_2 + category_3;

		if (suma > 10) {
			alert('lLevas  más de 10 productos');
			
		} else {
			alert('lLevas ' + suma + ' productos');
			
		}

	}
}

function handleChangeStyleBtn() {
	const element = this;
	const classList = element.classList;

	const hasClassActive = classList.contains('btn_active');

	if (hasClassActive) {
		
		classList.remove('btn_active');
	} else {
		
		classList.add('btn_active');
	}
}

botonDeVerificaion.addEventListener("click" , function () {

	const contraseña1 = document.getElementById("contraseña1");
	const contraseña2 = document.getElementById("contraseña2");
	const contraseña3 = document.getElementById("contraseña3");
	const botonDeVerificaion = document.getElementById("botonDeVerificacion");
	const resultadoClave = document.getElementById("resultadoClave");


	const enteredPassword = contraseña1.value + contraseña2.value + contraseña3.value;
	if (botonDeVerificaion === "911") {
		resultadoClave.textContent = "contraseña 1 correcto";
	} else if (enteredPassword === "714") {
		resultadoClave.textContent = "contraseña 2 es correcto";
	} else {
		resultadoClave.textContent = "contraseña incorrecto";
	}
})