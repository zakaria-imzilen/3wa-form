const submitBtn = document.querySelector("button");
const alert = document.querySelector("#alert");

const nameInput = document.querySelector("input[name=name]");
const emailInput = document.querySelector("input[name=email]");
const phoneNumberInput = document.querySelector("input[name=phoneNumber]");

const nameErrSpan = document.querySelector("#name-error");
const emailErrSpan = document.querySelector("#email-error");
const pnErrSpan = document.querySelector("#pn-error");

nameErrSpan.style.display = "none";
emailErrSpan.style.display = "none";
pnErrSpan.style.display = "none";
alert.style.display = "none";

const regexName = /^[a-z ,.'-]+$/i;
const regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const regexPN = /(\+212|0)([ \-_/]*)(\d[ \-_/]*){9}/;

const validateInputs = () => {
	const nameVerif = regexName.test(nameInput.value);
	const emailVerif = regexEmail.test(emailInput.value);
	const pnVerif = regexPN.test(phoneNumberInput.value);

	if (!nameVerif) {
		nameErrSpan.style.display = "inline";
	} else {
		nameErrSpan.style.display = "none";
	}

	if (!emailVerif) {
		emailErrSpan.style.display = "inline";
	} else {
		emailErrSpan.style.display = "none";
	}

	if (!pnVerif) {
		pnErrSpan.style.display = "inline";
	} else {
		pnErrSpan.style.display = "none";
	}

	if (nameVerif && emailVerif && pnVerif) {
		alert.style.display = "block";
	} else {
		alert.style.display = "none";
	}
};

nameInput.addEventListener("keydown", validateInputs);
emailInput.addEventListener("keydown", validateInputs);
phoneNumberInput.addEventListener("keydown", validateInputs);

submitBtn.addEventListener("click", validateInputs);
