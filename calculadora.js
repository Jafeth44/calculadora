//declaro las variables y les asigno su elemento correspondiente en el DOM
let lcdScreen = document.getElementById("lcdScreen");
let btn0 = document.getElementById("btn0");
let btn00 = document.getElementById("btn00");
let btn1 = document.getElementById("btn1");
let btn2 = document.getElementById("btn2");
let btn3 = document.getElementById("btn3");
let btn4 = document.getElementById("btn4");
let btn5 = document.getElementById("btn5");
let btn6 = document.getElementById("btn6");
let btn7 = document.getElementById("btn7");
let btn8 = document.getElementById("btn8");
let btn9 = document.getElementById("btn9");
let btnFloat = document.getElementById("btnFloat");
let btnAC = document.getElementById("btnAC");
let btnEql = document.getElementById("btnEql");
let btnPlus = document.getElementById("btnPlus");
let btnMinus = document.getElementById("btnMinus");
let btnMult = document.getElementById("btnMult");
let btnDiv = document.getElementById("btnDiv");

//declaro las variables necesarias para realizar las operaciones (de momento solo dos operando y un operador)
let operand1 = "";
let operator = "";
let operand2 = "";
let floatUsed = false;

//función básica que refresca la pantalla, será llamado al final de cada input.
let refreshScreen = () => {
	return (
		(lcdScreen.innerHTML = operand1 + operator + operand2), floatUsed == true
	);
};

//función que reinicia los operandos y el operador a un string vacío y llama un refresh.
let clear = () => {
	operand1 = "";
	operator = "";
	operand2 = "";
	floatUsed = false;
	refreshScreen();
};

//función básica de suma
let sum = () => {
	if (operand1 != "" && operator == "") {
		operator = "+";
		floatUsed = false;
		refreshScreen();
	}
};

//función básica de resta
let sub = () => {
	if (operand1 != "" && operator == "") {
		operator = "-";
		floatUsed = false;
		refreshScreen();
	}
};

//función básica de multiplicación
let mul = () => {
	if (operand1 != "" && operator == "") {
		operator = "*";
		floatUsed = false;
		refreshScreen();
	}
};

//función básica de multiplicación
let div = () => {
	if (operand1 != "" && operator == "") {
		operator = "/";
		floatUsed = false;
		refreshScreen();
	}
};

//numéros del 0 al 9, el 0 no se imprime en pantalla al menos que haya otro número delante de él.
let calc0 = () => {
	if (operand1 != "" && operator == "") {
		operand1 += "0";
		refreshScreen();
	} else if (operator != "" && operand2 != "") {
		operand2 += "0";
		refreshScreen();
	}
};

let calc00 = () => {
	if (operand1 != "" && operator == "") {
		operand1 += "00";
		refreshScreen();
	} else if (operator != "" && operand2 != "") {
		operand2 += "00";
		refreshScreen();
	}
};

let calc1 = () => {
	if (operator == "") {
		operand1 += "1";
		refreshScreen();
	} else {
		operand2 += "1";
		refreshScreen();
	}
};

let calc2 = () => {
	if (operator == "") {
		operand1 += "2";
		refreshScreen();
	} else {
		operand2 += "2";
		refreshScreen();
	}
};

let calc3 = () => {
	if (operator == "") {
		operand1 += "3";
		refreshScreen();
	} else {
		operand2 += "3";
		refreshScreen();
	}
};

let calc4 = () => {
	if (operator == "") {
		operand1 += "4";
		refreshScreen();
	} else {
		operand2 += "4";
		refreshScreen();
	}
};

let calc5 = () => {
	if (operator == "") {
		operand1 += "5";
		refreshScreen();
	} else {
		operand2 += "5";
		refreshScreen();
	}
};

let calc6 = () => {
	if (operator == "") {
		operand1 += "6";
		refreshScreen();
	} else {
		operand2 += "6";
		refreshScreen();
	}
};

let calc7 = () => {
	if (operator == "") {
		operand1 += "7";
		refreshScreen();
	} else {
		operand2 += "7";
		refreshScreen();
	}
};

let calc8 = () => {
	if (operator == "") {
		operand1 += "8";
		refreshScreen();
	} else {
		operand2 += "8";
		refreshScreen();
	}
};

let calc9 = () => {
	if (operator == "") {
		operand1 += "9";
		refreshScreen();
	} else {
		operand2 += "9";
		refreshScreen();
	}
};

//función para agregar decimales, solo puede haber un decimal a la vez y si se usa de primero se agrega un 0 al principio.
let calcFloat = () => {
	if (operand1 == "" && operator == "") {
		operand1 += "0.";
		floatUsed = true;
		refreshScreen();
	} else if (operator != "" && operand2 == "") {
		operand2 += "0.";
		floatUsed = true;
		refreshScreen();
	} else if (operand1 != "" && operator == "" && floatUsed == false) {
		operand1 += ".";
		floatUsed = true;
		refreshScreen();
	} else if (operator != "" && operand2 != "" && floatUsed == false) {
		operand2 += ".";
		floatUsed = true;
		refreshScreen();
	}
};

// la función equal es la que realmente realiza las operaciones matemáticas, primero convierte los strings a números, luego aplica la operación y por último los regresa a string para ser imprimidos en la pantalla.
let equal = () => {
	let firstnumber = parseFloat(operand1);
	let secoundnumber = parseFloat(operand2);
	if (operand1 != "" && operator == "+" && operand2 != "") {
		operand1 = (firstnumber + secoundnumber).toString();
		operator = "";
		operand2 = "";
		refreshScreen();
	}
	if (operand1 != "" && operator == "-" && operand2 != "") {
		operand1 = (firstnumber - secoundnumber).toString();
		operator = "";
		operand2 = "";
		refreshScreen();
	}
	if (operand1 != "" && operator == "*" && operand2 != "") {
		operand1 = (firstnumber * secoundnumber).toString();
		operator = "";
		operand2 = "";
		refreshScreen();
	}
	if (operand1 != "" && operator == "/" && operand2 != "") {
		operand1 = (firstnumber / secoundnumber).toString();
		operator = "";
		operand2 = "";
		refreshScreen();
	}
};

//event listeners que llaman sus funciones correspondientes al hacer click a un botón de la calculadora.
btnAC.addEventListener("click", clear);
btn0.addEventListener("click", calc0);
btn00.addEventListener("click", calc00);
btn1.addEventListener("click", calc1);
btn2.addEventListener("click", calc2);
btn3.addEventListener("click", calc3);
btn4.addEventListener("click", calc4);
btn5.addEventListener("click", calc5);
btn6.addEventListener("click", calc6);
btn7.addEventListener("click", calc7);
btn8.addEventListener("click", calc8);
btn9.addEventListener("click", calc9);
btnFloat.addEventListener("click", calcFloat);
btnPlus.addEventListener("click", sum);
btnMinus.addEventListener("click", sub);
btnMult.addEventListener("click", mul);
btnDiv.addEventListener("click", div);
btnEql.addEventListener("click", equal);
