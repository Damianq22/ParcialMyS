function calculoPosgrado() {
    let puntos = 0; // Inicializa la variable puntos

    if (document.getElementById('especializacionClinicas').value == 1) {
        puntos += 40;
    } else if (document.getElementById('especializacionClinicas').value == 2) {
        puntos += 60;
    }

    if (document.getElementById('especializacionOtrasAreas').value == 1) {
        puntos += 20;
    } else if (document.getElementById('especializacionOtrasAreas').value == 2) {
        puntos += 30;
    }

    if (document.getElementById('maestria').value == 1) {
        puntos += 40;
    } else if (document.getElementById('maestria').value == 2) {
        puntos += 60;
    }

    if (document.getElementById('doctorado').value == 1) {
        puntos += 80;
    } else if (document.getElementById('doctorado').value == 2) {
        puntos += 120;
    }

    //document.getElementById('resultado').textContent = "Puntaje: " + puntos;
    return puntos;
}

function calculoCategoriaDocente()
{
    const puntos= document.getElementsByName('categoria');
    let puntaje =0;
    Array.from(puntos).forEach(element => {
        if(element.checked){
            puntaje = parseInt(element.value);
        }
    });
 
    //const p = document.getElementById("resultado2");
    //p.textContent+=puntaje;
    return puntaje;
}

function calculoExperiencia(){
    let puntaje = 0;
    const exp_tc = document.getElementById('exp_tc').value || 0;
    const exp_mt = document.getElementById('exp_mt').value || 0;
    const exp_catedra = document.getElementById('exp_catedra').value || 0;
    const exp_profesional = document.getElementById('exp_profesional').value || 0;

    puntaje += exp_tc *4;
    puntaje += exp_mt *2;
    puntaje += exp_catedra *1;
    puntaje += exp_profesional *2;

    return puntaje;
}
function calculoGrupoInvestigacion(){
    const puntos= document.getElementsByName('grupo');
    let puntaje =0;
    Array.from(puntos).forEach(element => {
        if(element.checked){
            puntaje = parseInt(element.value);
        }
    });
 
    //const p = document.getElementById("resultado3");
    //p.textContent+=puntaje;
    return puntaje;
}
function calculoTipoInvestigador(){
    const puntos= document.getElementsByName('categoria_investigador');
    let puntaje =0;
    Array.from(puntos).forEach(element => {
        if(element.checked){
            puntaje = parseInt(element.value);
        }
    });
 
    //const p = document.getElementById("resultado3");
    //p.textContent+=puntaje;
    return puntaje;
}

function calculoPublicaciones(){
    let puntaje =0;
    const articulos_colciencias = document.getElementById('articulos_colciencias').value || 0;
    const articulos_ISSN = document.getElementById('articulos_ISSN').value || 0;
    const libros_ISBN = document.getElementById('libros_ISBN').value || 0;
    const capitulos = document.getElementById('capitulos').value || 0;
    const modelos = document.getElementById('modelos').value || 0;
    const software = document.getElementById('software').value || 0;
    const patentes = document.getElementById('patentes').value || 0;
    const asesor_proyectos = document.getElementById('asesor_proyectos').value || 0;
    const asesor_practicas = document.getElementById('asesor_practicas').value || 0;

    puntaje += articulos_colciencias * 10;
    puntaje += articulos_ISSN * 5;
    puntaje += libros_ISBN * 20;
    puntaje += capitulos * 5;
    puntaje += modelos * 10;
    puntaje += software * 20;
    puntaje += patentes * 60;
    puntaje += asesor_proyectos * 5;
    puntaje += asesor_practicas * 2;
    return puntaje;
}

function calcularSalario(){
    let puntaje = 0;
    puntaje += calculoPosgrado();
    puntaje += calculoCategoriaDocente();
    puntaje += calculoExperiencia();
    puntaje += calculoGrupoInvestigacion();
    puntaje += calculoTipoInvestigador();
    puntaje += calculoPublicaciones();
    let bonificaciones = BonificacionPosgrado() + BonificacionesInvestigacion();
    const SMMLV = 1423500;
    let salarioBase = 0;
    const Auxiliar_tc =2.645;
    const Auxiliar_mt =1.509;
    const Asistente_tc =3.125;
    const Asistente_mt =1.749;
    const Asociado_tc =3.606;
    const Asociado_mt =2.990;
    const Titular_tc =3.918;
    const Titular_mt =2.146;
    const tiempo = document.getElementsByName('tiempo');
    let seleccionadoTiempo = "";
    Array.from(tiempo).forEach(element => {
        if(element.checked){
            seleccionadoTiempo = element.value;
        }
    });
    const categoriaDocente = document.getElementsByName('categoria');
    let seleccionadoCategoria = "";
    Array.from(categoriaDocente).forEach(element => {
        if(element.checked){
            seleccionadoCategoria = parseInt(element.value);
        }
    });
    // Auxiliar = 27 Asistente = 58 Asociado = 74 Titular = 96
    if(seleccionadoCategoria == 27 && seleccionadoTiempo == "tc"){
        salarioBase = SMMLV * Auxiliar_tc;
    }
    if(seleccionadoCategoria == 27 && seleccionadoTiempo == "mt"){
        salarioBase = SMMLV* Auxiliar_mt;
    }
    if(seleccionadoCategoria == 58 && seleccionadoTiempo == "tc"){
        salarioBase = SMMLV * Asistente_tc;
    }
    if(seleccionadoCategoria == 58 && seleccionadoTiempo == "mt"){
        salarioBase = SMMLV * Asistente_mt;
    }
    if(seleccionadoCategoria == 74 && seleccionadoTiempo == "tc"){
        salarioBase = SMMLV * Asociado_tc;
    }
    if(seleccionadoCategoria == 74 && seleccionadoTiempo == "mt"){
        salarioBase = SMMLV* Asociado_mt;
    }
    if(seleccionadoCategoria == 96 && seleccionadoTiempo == "tc"){
        salarioBase = SMMLV * Titular_tc;
    }
    if(seleccionadoCategoria == 96 && seleccionadoTiempo == "mt"){
        salarioBase = SMMLV * Titular_mt;
    }
    let bonificacion = bonificaciones *SMMLV;
    let salarioBonificaciones = salarioBase + bonificacion;
    const valorPunto = 20895;
    let valortotalpuntaje = puntaje * valorPunto;
    let salarioTotal = salarioBonificaciones + valortotalpuntaje;
    document.getElementById("salarioTotal").textContent = "Salario Total: " + salarioTotal.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    document.getElementById("salarioBase").textContent = "Salario Base: " + salarioBase.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    document.getElementById("bonificaciones").textContent = "Bonificaciones: " + bonificacion.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    document.getElementById("valorTotalPuntos").textContent = "Valor Total de Puntos: " + valortotalpuntaje.toLocaleString('es-CO', { style: 'currency', currency: 'COP' });
    document.getElementById("puntosPostgrado").textContent = "Puntos por Postgrado: " + calculoPosgrado();
    document.getElementById("puntosCategoria").textContent = "Puntos por Categoría: " + calculoCategoriaDocente();
    document.getElementById("puntosExperiencia").textContent = "Puntos por Experiencia: " + calculoExperiencia();
    document.getElementById("puntosProduccionAcademica").textContent = "Puntos por Producción Académica: " + calculoPublicaciones();
}

function BonificacionPosgrado() 
{
    let bonificacion=0;
    if (document.getElementById('doctorado').value != 0) {
        bonificacion = 0.90;
    } else if (document.getElementById('maestria').value != 0) {
        bonificacion = 0.45;
    } else if (document.getElementById('especializacionClinicas').value != 0) {
        bonificacion = 0.10;
    } else if (document.getElementById('especializacionOtrasAreas').value != 0) {
        bonificacion = 0.10;
    }
    return bonificacion;
}
function BonificacionesInvestigacion(){
    // A1 = 20 A=15 B=12 C=10 ReconocidosColciencias = 6 
    const grupo = document.getElementsByName('grupo');
    let seleccionado =0;
    Array.from(grupo).forEach(element => {
        if(element.checked){
            seleccionado = parseInt(element.value);
        }
    });
    let bonificacion = 0;
    switch(seleccionado){
        case 20:
            bonificacion= 0.56;
            break;
        case 15:
            bonificacion = 0.47;
            break;
        case 12:
            bonificacion = 0.42;
            break;
        case 10:
            bonificacion = 0.38;
            break;
        case 6:
            bonificacion = 0.33;
            break;
    }
    const semillero = document.getElementById('semillero').value ;
    if(semillero.checked){
        return bonificacion + 0.19;
    }
    return bonificacion;

}
