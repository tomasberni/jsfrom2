/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let form = document.getElementById("formulario");

  form.addEventListener("submit", enviarDatos);

  function enviarDatos(e) {
    e.preventDefault();
    console.log("funciona");

    let alertMessage = document.getElementById("alertMessage");
    let tarjetaCredito = document.getElementById("tarjetaCredito");
    let cvc = document.getElementById("cvc");
    let amount = document.getElementById("amount");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let ciudad = document.getElementById("ciudad");
    let departamento = document.getElementById("departamento");
    let codigoPostal = document.getElementById("codigoPostal");
    let mensaje = document.getElementById("mensaje");
    let advertencia = document.getElementById("advertencia");

    // Tarjetas de crtédito
    let mastercard = document.getElementById("mastercard");
    let visa = document.getElementById("visa");
    let dinners = document.getElementById("dinners");
    let american = document.getElementById("american");

    if (
      mastercard.checked == true ||
      visa.checked == true ||
      dinners.checked == true ||
      american.checked == true
    ) {
    } else {
      grupoInput.style.backgroundColor = "red";
      alertMessage.style.display = "block";
    }

    if (departamento.value === "Seleccionar" || departamento.value == "") {
      departamento.style.backgroundColor = "red";
      alertMessage.style.display = "block";
      advertencia.style.display = "block";
    }

    if (tarjetaCredito.value === null || tarjetaCredito.value === "") {
      tarjetaCredito.style.backgroundColor = "red";
      alertMessage.style.display = "block";
      advertencia.style.display = "block";
    }

    if (cvc.value === null || cvc.value === "") {
      cvc.style.backgroundColor = "red";
      alertMessage.style.display = "block";
      advertencia.style.display = "block";
    }

    if (amount.value === null || amount.value === "") {
      amount.style.backgroundColor = "red";
      alertMessage.style.display = "block";
      advertencia.style.display = "block";
    }

    if (nombre.value === null || nombre.value === "") {
      nombre.style.backgroundColor = "red";
      alertMessage.style.display = "block";
      advertencia.style.display = "block";
    }

    if (apellido.value === null || apellido.value === "") {
      apellido.style.backgroundColor = "red";
      alertMessage.style.display = "block";
      advertencia.style.display = "block";
    }

    if (ciudad.value === null || ciudad.value === "") {
      ciudad.style.backgroundColor = "red";
      alertMessage.style.display = "block";
      advertencia.style.display = "block";
    }

    if (departamento.value === null || departamento.value === "") {
      departamento.style.backgroundColor = "red";
      alertMessage.style.display = "block";
      advertencia.style.display = "block";
    }

    if (codigoPostal.value === null || codigoPostal.value === "") {
      codigoPostal.style.backgroundColor = "red";
      alertMessage.style.display = "block";
      advertencia.style.display = "block";
    }

    if (mensaje.value === null || mensaje.value === "") {
      mensaje.style.backgroundColor = "red";
      alertMessage.style.display = "block";
      advertencia.style.display = "block";
      // modal.show();
    }
  }
  form.addEventListener("reset", myReset);

  function myReset() {
    mensaje.style.backgroundColor = "white";
    grupoInput.style.backgroundColor = "white";
    departamento.style.backgroundColor = "white";
    tarjetaCredito.style.backgroundColor = "white";
    cvc.style.backgroundColor = "white";
    amount.style.backgroundColor = "white";
    nombre.style.backgroundColor = "white";
    apellido.style.backgroundColor = "white";
    ciudad.style.backgroundColor = "white";
    codigoPostal.style.backgroundColor = "white";
    alertMessage.style.display = "none";
    advertencia.style.display = "none";
  }

  // const modal = document.querySelector('#modal');
  // const btnCerrarModal = document.querySelector('#btnCerrarModal');

  // btnCerrarModal.addEventListener('click', () => {
  //     modal.close();
  // });
};
