class Propietario {
  Nombre = "";
  Direccion = "";
  Telefono = "";

  constructor(Nombre, Direccion, Telefono) {
    this.Nombre = Nombre;
    this.Direccion = Direccion;
    this.Telefono = Telefono;
  }
  datosPropietario() {
    return `<div class="border border-dark"><li class="list-group-item ">El nombre del dueño es: <strong>${this.Nombre}</strong></li>
           <li class="list-group-item list-group-item-dark">Dirección: <strong>${this.Direccion}</strong> --- Número telefónico: <strong>${this.Telefono}</strong> </li></div>`;
  }
} //fin Propietario

class Animal extends Propietario {
  Tipo = "";
  constructor(Nombre, Direccion, Telefono, Tipo) {
    super(Nombre, Direccion, Telefono);
    this.Tipo = Tipo;
  }

  get tipo() {
    return this.Tipo;
  }
  set tipo(Tipo) {
    this.Tipo = Tipo;
  }
} //fin Animal

class Mascota extends Animal {
  NombreMascota = "";
  Enfermedad = "";
  constructor(Nombre, Direccion, Telefono, Tipo, NombreMascota, Enfermedad) {
    super(Nombre, Direccion, Telefono, Tipo);
    this.NombreMascota = NombreMascota;
    this.Enfermedad = Enfermedad;
  }

  get nombreMascota() {
    return this.NombreMascota;
  }
  set nombreMascota(NombreMascota) {
    this.NombreMascota = NombreMascota;
  }

  get enfermedad() {
    return this.Enfermedad;
  }

  set enfermedad(Enfermedad) {
    this.Enfermedad = Enfermedad;
  }

  datosMascota() {
    return `<div class="border border-dark"><li class="list-group-item ">Tipo de animal: <strong>${this.Tipo}</strong></li>
            <li class="list-group-item list-group-item-dark">Nombre de la mascota: <strong>${this.NombreMascota}</strong></li>
            <li class="list-group-item">Enfermedad de la mascota reportada por el propietario:   <br><strong>${this.Enfermedad}</li></strong></div>`;
  }
} //fin Mascota

function registrando() {
  let elPropietario = document.getElementById("propietario").value;
  let elTelefono = document.getElementById("telefono").value;
  let laDireccion = document.getElementById("direccion").value;
  let elNombreMascota = document.getElementById("nombreMascota").value;
  let tipoMascota = document.getElementById("tipo").value;
  let laEnfermedad = document.getElementById("enfermedad").value;

  var laMascota;
  switch (tipoMascota) {
    case "perro":
      var Perro = new Mascota(
        elPropietario,
        laDireccion,
        elTelefono,
        tipoMascota,
        elNombreMascota,
        laEnfermedad
      );
      console.log(Perro);
      laMascota = Perro;
      break;
    case "gato":
      var Gato = new Mascota(
        elPropietario,
        laDireccion,
        elTelefono,
        tipoMascota,
        elNombreMascota,
        laEnfermedad
      );
      console.log(Gato);
      laMascota = Gato;
      break;
    case "conejo":
      var Conejo = new Mascota(
        elPropietario,
        laDireccion,
        elTelefono,
        tipoMascota,
        elNombreMascota,
        laEnfermedad
      );
      console.log(Conejo);
      laMascota = Conejo;
      break;
    default:
      console.log("Error de Seleccion");
  }
  return laMascota;
}

var elFormulario = document.getElementById("formularioRegistro");
elFormulario.addEventListener("submit", function observando(event){
 
  event.preventDefault();
  console.log("Hizo click en submit");
  const mascotaData = registrando();

  let resultadoTotal = mascotaData
    .datosPropietario()
    .concat(mascotaData.datosMascota());

  let elResultado = document.getElementById("resultado");
  elResultado.innerHTML = resultadoTotal;

  elFormulario.reset();

    
  $(document).ready(function () {
    setTimeout(function () {
      alert('Datos agregados con éxito!');
      location.reload(true).scrollTop(0);
    }, 5000);
  });

});

