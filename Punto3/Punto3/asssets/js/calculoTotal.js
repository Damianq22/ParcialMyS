
function calcularTotal(){
    let puntaje = 0;
    const valorPunto = 20895;
    const puntajeTitulos = calcularPuntajeTitulos();
    const puntajeCategoria = obtenerSeleccionCategoria();
    const puntajeProduccion = calculoTotalProduccionAcademica();
    const puntajeExperiencia = calcularPuntajeExperiencia();
    const PuntajePregado = CalcularPuntajePregado();

    puntaje += puntajeTitulos;
    puntaje += puntajeCategoria;
    puntaje += puntajeProduccion;
    puntaje += puntajeExperiencia;
    puntaje += PuntajePregado;

    let salario = puntaje * valorPunto;

    document.getElementById('Puntaje Titulos').textContent = `Puntaje Titulo pregrado: ${PuntajePregado}. Puntaje Titulos posgrado: ${puntajeTitulos} `;
    document.getElementById('Puntaje Categoria').textContent = `Puntaje Categoria Docente: ${puntajeCategoria}`;
    document.getElementById('Puntaje Produccion').textContent = `Puntaje Producción Academica: ${puntajeProduccion}`;
    document.getElementById('Puntaje Experiencia').textContent = `Puntaje Experiencia Calificada: ${puntajeExperiencia}`;
    document.getElementById('Puntaje Total').textContent = `Puntaje Total: ${puntaje}`;
    document.getElementById('SalarioTotal').textContent = `Salario: $${salario.toLocaleString('es-CO')}`;
}
function calculoArticulosFullPapper() {
    const A1 = 15;
    const A2 = 12;
    const B = 8;
    const C = 3;
    let listaCategoria = ['A1', 'A2', 'B', 'C'];
    let puntaje = 0;

    Array.from(listaCategoria).forEach(element => {
       const cantidad = parseInt(document.getElementById(element).value) || 0;
    for(let i = 1; i <= cantidad; i++) {
     const autores = document.getElementById(element+i).value || 0;
     if(element === 'A1') {
         if(autores <= 3) {
          puntaje += A1;
         }
         if(autores > 3 && autores < 6) {
          puntaje += A1 / 2;
         }
         if(autores >= 6) {
          puntaje += A1 / (autores / 2);
         }
     }
     if(element === 'A2') {
         if(autores <= 3) {
          puntaje += A2;
         }
         if(autores > 3 && autores < 6) {
          puntaje += A2 / 2;
         }
         if(autores >= 6) {
          puntaje += A2 / (autores / 2);
         }
     }
     if(element === 'B') {
         if(autores <= 3) {
          puntaje += B;
         }
         if(autores > 3 && autores < 6) {
          puntaje += B / 2;
         }
         if(autores >= 6) {
          puntaje += B / (autores / 2);
         }
     }
     if(element === 'C') {
         if(autores <= 3) {
          puntaje += C;
         }
         if(autores > 3 && autores < 6) {
          puntaje += C / 2;
         }
         if(autores >= 6) {
          puntaje += C / (autores / 2);
         }
     }
    }
    });
    return puntaje;
}
function calculoArticulosCorto() {
    const A1 = 15;
    const A2 = 12;
    const B = 8;
    const C = 3;
    const porcentaje =0.6;
    let listaCategoria = ['A1_', 'A2_', 'B_', 'C_'];
    let puntaje = 0;

    Array.from(listaCategoria).forEach(element => {
       const cantidad = parseInt(document.getElementById(element).value) || 0;
    for(let i = 1; i <= cantidad; i++) {
     const autores = document.getElementById(element+i).value || 0;
     if(element === 'A1_') {
         if(autores <= 3) {
          puntaje += A1 * porcentaje;
         }
         if(autores > 3 && autores < 6) {
          puntaje += (A1 / 2) * porcentaje;
         }
         if(autores >= 6) {
          puntaje += A1 / (autores / 2) * porcentaje;
         }
     }
     if(element === 'A2_') {
         if(autores <= 3) {
          puntaje += A2 * porcentaje;
         }
         if(autores > 3 && autores < 6) {
          puntaje += (A2 / 2) * porcentaje;
         }
         if(autores >= 6) {
          puntaje += A2 / (autores / 2) * porcentaje;
         }
     }
     if(element === 'B_') {
         if(autores <= 3) {
          puntaje += B * porcentaje;
         }
         if(autores > 3 && autores < 6) {
          puntaje += (B / 2) * porcentaje;
         }
         if(autores >= 6) {
          puntaje += B / (autores / 2) * porcentaje;
         }
     }
     if(element === 'C_') {
         if(autores <= 3) {
          puntaje += C * porcentaje;
         }
         if(autores > 3 && autores < 6) {
          puntaje += (C / 2) * porcentaje;
         }
         if(autores >= 6) {
          puntaje += C / (autores / 2) * porcentaje;
         }
     }
    }
    });
    return puntaje;
}
function calculoReportes() {
    const A1 = 15;
    const A2 = 12;
    const B = 8;
    const C = 3;
    const porcentaje =0.3;
    let listaCategoria = ['A1__', 'A2__', 'B__', 'C__'];
    let puntaje = 0;

    Array.from(listaCategoria).forEach(element => {
       const cantidad = parseInt(document.getElementById(element).value) || 0;
    for(let i = 1; i <= cantidad; i++) {
     const autores = document.getElementById(element+i).value || 0;
     if(element === 'A1__') {
         if(autores <= 3) {
          puntaje += A1*porcentaje;
         }
         if(autores > 3 && autores < 6) {
          puntaje += (A1 /2)*porcentaje;
         }
         if(autores >= 6) {
          puntaje += (A1/(autores/2))*porcentaje;
         }
     }
     if(element === 'A2__') {
         if(autores <= 3) {
          puntaje += A2*porcentaje;
         }
         if(autores > 3 && autores < 6) {
          puntaje += (A2 /2)*porcentaje;
         }
         if(autores >= 6) {
          puntaje += (A2/(autores/2))*porcentaje;
         }
     }
     if(element === 'B__') {
         if(autores <= 3) {
          puntaje += B*porcentaje;
         }
         if(autores > 3 && autores < 6) {
          puntaje += (B /2)*porcentaje;
         }
         if(autores >= 6) {
          puntaje += (B/(autores/2))*porcentaje;
         }
     }
     if(element === 'C__') {
         if(autores <= 3) {
          puntaje += C*porcentaje;
         }
         if(autores > 3 && autores < 6) {
          puntaje += (C /2)*porcentaje;
         }
         if(autores >= 6) {
          puntaje += (C/(autores/2))*porcentaje;
         }
     }
    }
    });
    return puntaje;
}
function calculoTotalArticulos() {
    return calculoArticulosFullPapper() + calculoArticulosCorto() + calculoReportes();
}
function obtenerSeleccionCategoria() {
    const opciones = document.getElementsByName("categoria"); // Obtiene las opciones
    let categoria = 0;
    Array.from(opciones).forEach(element => {
        if (element.checked) {
            categoria = parseInt(element.value);
        }
    });
    return categoria;
}
function calcularPuntajeExperiencia() {
    let puntaje = 0;
    let docencia =0;
    const antes2002 = document.getElementById("antes2002").checked;
    const investigativa_tc = parseFloat(document.getElementById("investigativa_tc").value) || 0;
    puntaje += investigativa_tc * 6;

    const investigativa_mt = parseFloat(document.getElementById("investigativa_mt").value) || 0;
    puntaje += investigativa_mt * 6*0.5;

    const investigativa_tp = parseFloat(document.getElementById("investigativa_tp").value) || 0;
    puntaje += investigativa_tp * 6*0.25;

    const docencia_tc = parseFloat(document.getElementById("docente_tc").value) || 0;
    docencia += docencia_tc * 4;

    const docencia_mt = parseFloat(document.getElementById("docente_mt").value) || 0;
    docencia += docencia_mt * 4*0.5;

    const docencia_tp = parseFloat(document.getElementById("docente_tp").value) || 0;
    docencia += docencia_tp * 4*0.25;

    if(antes2002==false) {
    puntaje += docencia;
    }else{
        puntaje += calcularPuntajeDocentesVinculadosAntes2002();
    }

    const profesional_tc = parseFloat(document.getElementById("profesional_tc").value) || 0;
    const profesional_mt = parseFloat(document.getElementById("profesional_mt").value) || 0;
    const profesional_tp = parseFloat(document.getElementById("profesional_tp").value) || 0;
    let profesional = profesional_mt+profesional_tc+profesional_tp;
    const clinicas = parseFloat(document.getElementById("clinicas").value) || 0;
    puntaje += (profesional + clinicas)*3;

    if(antes2002==false) {
        switch(obtenerSeleccionCategoria()) {
            case 37: // Auxiliar
                if(puntaje >20 ) {
                puntaje =20;
                }
                break;
            case 58:
                //Asistente
                if(puntaje >45 ) {
                    puntaje =45;
                }
                break;
            case 74 :
                //Asociado
                if(puntaje >90 ) {
                    puntaje =90;
                } 
                break;
            case 96:
                //Titular
                if(puntaje >120 ) {
                    puntaje =120;
                } 
                break;
        }
    }
    
    return puntaje;
}

function calcularPuntajeDocentesVinculadosAntes2002(){
    let puntaje = 0;
    const docencia_tc = parseFloat(document.getElementById("docencia_tc").value) || 0;
    const docencia_mt = parseFloat(document.getElementById("docencia_mt").value) || 0;
    const docencia_tp = parseFloat(document.getElementById("docencia_tp").value) || 0;

    switch(obtenerSeleccionCategoria()) {
        case 37: // Auxiliar;
            puntaje += docencia_tc * 3;
            puntaje += docencia_mt * 3*0.5;
            puntaje += docencia_tp * 3*0.25;
            break;
        case 58:
            //Asistente
            puntaje += docencia_tc * 5;
            puntaje += docencia_mt * 5*0.5;
            puntaje += docencia_tp * 5*0.25;
            break;
        case 74 :
            //Asociado
            puntaje += docencia_tc * 6;
            puntaje += docencia_mt * 6*0.5;
            puntaje += docencia_tp * 6*0.25;
            break;
        case 96:
            //Titular
            puntaje += docencia_tc * 7;
            puntaje += docencia_mt * 7*0.5;
            puntaje += docencia_tp * 7*0.25;
            break;
    }
    return puntaje;
}
function calculoPuntajeLibros(idBase, puntajeBase) {
    const cantidad = document.getElementById(idBase).value || 0;
    let puntaje = 0;
    for (let i = 1; i <= cantidad; i++) {
        const autores = document.getElementById(idBase + i).value || 0;
        if (autores <= 3) {
            puntaje += puntajeBase;
        } else if (autores > 3 && autores < 6) {
            puntaje += puntajeBase / 2;
        } else if (autores >= 6) {
            puntaje += puntajeBase / (autores / 2);
        }
    }
    return puntaje;
}

function calculoLibrosInvestigacion() {
    return calculoPuntajeLibros('librosInvestigacion', 20);
}

function calculoLibrosTexto() {
    return calculoPuntajeLibros('librosTexto', 15);
}

function calculoLibrosEnsayo() {
    return calculoPuntajeLibros('librosEnsayo', 15);
}

function calculoPremios() {
    return calculoPuntajeLibros('premios', 15);
}

function calculoPatentes() {
    return calculoPuntajeLibros('patentes', 15);
}

function calculoTraduccionesLibros() {
    return calculoPuntajeLibros('traducciones', 15);
}

function calculoTotalLibrosPremiosPatentes() {
    return calculoLibrosInvestigacion() + calculoLibrosTexto() + calculoLibrosEnsayo() + calculoPremios() + calculoPatentes() + calculoTraduccionesLibros();
}
function calculoPuntajeArte(idBase, puntajeBase) {
    const cantidad = document.getElementById(idBase).value;
    let puntaje = 0;
    for (let i = 1; i <= cantidad; i++) {
        const autores = document.getElementById(idBase + i).value || 0;
        if (autores <= 3) {
            puntaje += puntajeBase;
        } else if (autores > 3 && autores < 6) {
            puntaje += puntajeBase / 2;
        } else if (autores >= 6) {
            puntaje += puntajeBase / (autores / 2);
        }
    }
    return puntaje;
}

// Funciones específicas que llaman a la genérica
function calculoObrasInternacional() {
    return calculoPuntajeArte('impactoInternacional', 20);
}

function calculoObrasNacional() {
    return calculoPuntajeArte('impactoNacional', 20);
}

function calculoComplementariaInternacional() {
    return calculoPuntajeArte('complementariaInternacional', 12);
}

function calculoComplementariaNacional() {
    return calculoPuntajeArte('complementariaNacional', 12);
}

function calculoInterpretacionInternacional() {
    return calculoPuntajeArte('interpretacionInternacional', 14);
}

function calculoInterpretacionNacional() {
    return calculoPuntajeArte('interpretacionNacional', 8);
}
 function calculoObrasArtisticas() {
    return calculoObrasInternacional() + calculoObrasNacional() + calculoComplementariaInternacional() + calculoComplementariaNacional() + calculoInterpretacionInternacional() + calculoInterpretacionNacional();
}
function calculoPuntajeProduccion(idBase, puntajeBase) {
    const cantidad = document.getElementById(idBase).value || 0;
    let puntaje = 0;
    for (let i = 1; i <= cantidad; i++) {
        const autores = document.getElementById(idBase + i).value || 0;
        if (autores <= 3) {
            puntaje += puntajeBase;
        } else if (autores > 3 && autores < 6) {
            puntaje += puntajeBase / 2;
        } else if (autores >= 6) {
            puntaje += puntajeBase / (autores / 2);
        }
    }
    return puntaje;
}

function calculoTecnicaInnovacion() {
    return calculoPuntajeProduccion('innovacion', 15);
}

function calculoTecnicaAdaptacion() {
    return calculoPuntajeProduccion('adaptacion', 8);
}

function calculoSoftware() {
    return calculoPuntajeProduccion('software', 15);
}
function calcularProduccion() {
    return calculoTecnicaInnovacion() + calculoTecnicaAdaptacion() + calculoSoftware();
}
function CalcularPuntajePregado() {
    const opciones = document.getElementsByName("titulo"); // Obtiene las opciones

    // Convierte NodeList en un array y recorre las opciones
    for (const element of opciones) {
        if (element.checked) {
            return element.value === "otra" ? 178 : 183;
        }
    }
    return 0; 
}   
function generarInputsEspecializaciones() {
    const contenedor = document.getElementById("contenedorEspecializaciones");
    const seleted = document.getElementById("otrasEspecializaciones");
    const cantidad = parseInt(seleted.value) || 0;
    if(cantidad < 0) {
        alert("La cantidad de especializaciones no puede ser negativa");
        seleted.value = "";
        seleted.focus();
        return;
    }
    if(cantidad > 2) {
        alert("No se reconoce mas de 2 especializaciones");
        seleted.value = "";
        seleted.focus();
        return;
    }
    contenedor.innerHTML = "";
    for (let i = 1; i <= cantidad; i++) {
        const label = document.createElement("label");
        label.textContent = `Especialización ${i}: `;
        const input = document.createElement("input");
        const tdLabel = document.createElement("td");
        const tdInput = document.createElement("td");
        tdLabel.appendChild(label);
        input.type = "number";
        input.name = `especializacion${i}`;
        input.id = `especializacion${i}`;
        input.placeholder = "Años de especialización";
        tdInput.appendChild(input);
        contenedor.appendChild(tdLabel);
        contenedor.appendChild(input);
    }
}
function calcularPuntajeClinicas() {
    const cantidad = parseInt(document.getElementById("clinicas").value) || 0;
    return (cantidad * 15)>75?75:(cantidad * 15);
}
function calcularPuntajeEspecializaciones() {  
    const cantidad = parseInt(document.getElementById("otrasEspecializaciones").value) || 0;
    let años = 0;
    for (let i = 1; i <= cantidad; i++) {
        let input = document.getElementById(`especializacion${i}`);
        años += parseInt(input.value) || 0; 
    }
    if(años >= 1 && años <= 2) {
        return 20;
    }
    if((años-2) >= 1) {
        return 30;
    }
    return 0;
}

function calcularPuntajeMaestrias() {  
    const cantidad = parseInt(document.getElementById("maestrias").value) || 0;
   if(cantidad == 1) {
      console.log("entro");
      return 40;
   }
   if(cantidad > 1) {
       return 60;
   }
   return 0;
}
document.getElementById("doctorados").addEventListener("input", function () {
    const doctorados = document.getElementById("doctorados").value;
    const checkbox = document.getElementById("posterior1998");

    if (doctorados && parseInt(doctorados) > 0) {
        checkbox.disabled = false;
    } else {
        checkbox.disabled = true;
        checkbox.checked = false; 
    }
});
function calcularPuntajeDoctorados() {
    const cantidad = parseInt(document.getElementById("doctorados").value) || 0;
    const checkbox = document.getElementById("posterior1998");
    const maestrias = parseInt(document.getElementById("maestrias").value) || 0;
    if(checkbox.checked) {
        if(cantidad == 1 && maestrias == 0) {
            return 120;
        }
        if(cantidad > 1 && maestrias == 0) {
            return 140;
        }
    }
    
    if(maestrias > 0 && cantidad == 1) {
        return 80;
    }
    if(cantidad > 1 && maestrias > 0) {
        return 120;
    }
    if(cantidad == 1){
        return 80;
    }
    if(cantidad > 1) {
        return 120;
    }
    return 0;
}



function calcularPuntajeTitulos() {
    let puntajeEsMa = (calcularPuntajeMaestrias() + calcularPuntajeEspecializaciones())>60 ? 60 : (calcularPuntajeMaestrias() + calcularPuntajeEspecializaciones());
    let puntaje = calcularPuntajeDoctorados() + puntajeEsMa + calcularPuntajeClinicas();
    return puntaje > 140 ? 140 : puntaje;
}
function calcularVideos(){
    const INTERNACIONAL = 12;
    const NACIONAL = 7;
    const INTERNACIONALDOCUMENTAL = INTERNACIONAL*0.8;
    const NACIONALDOCUMENTAL = NACIONAL*0.8;
    let listaCategoria = ['internacionalVideos', 'nacionalVideos', 'internacionalDocumental', 'nacionalDocumental'];
    let puntaje = 0;

    Array.from(listaCategoria).forEach(element => {
       const cantidad = parseInt(document.getElementById(element).value) || 0;
       for(let i = 1; i <= cantidad; i++) {
        const autores = document.getElementById(element+i).value || 0;
        if(element === 'internacionalVideos') {
            if(autores <= 3) {
            puntaje += INTERNACIONAL;
            }
            if(autores > 3 && autores < 6) {
            puntaje += INTERNACIONAL / 2;
            }
            if(autores >= 6) {
            puntaje += INTERNACIONAL / (autores / 0.5);
            }
        }
        if(element === 'nacionalVideos') {
            if(autores <= 3) {
            puntaje += NACIONAL;
            }
            if(autores > 3 && autores < 6) {
            puntaje += NACIONAL / 2;
            }
            if(autores >= 6) {
            puntaje += NACIONAL / (autores / 0.5);
            }
        }
        if(element === 'internacionalDocumental') {
            if(autores <= 3) {
            puntaje += INTERNACIONALDOCUMENTAL;
            }
            if(autores > 3 && autores < 6) {
            puntaje += INTERNACIONALDOCUMENTAL / 2;
            }
            if(autores >= 6) {
            puntaje += INTERNACIONALDOCUMENTAL / (autores / 0.5);
            }
        }
        if(element === 'nacionalDocumental') {
            if(autores <= 3) {
            puntaje += NACIONALDOCUMENTAL;
            }
            if(autores > 3 && autores < 6) {
            puntaje += NACIONALDOCUMENTAL / 2;
            }
            if(autores >= 6) {
            puntaje += NACIONALDOCUMENTAL / (autores / 0.5);
            }
        }
       }
    });
    return puntaje;
}
function calculoTotalProduccionAcademica(){
    //Auxiliar =37 Asistente = 58 Asociado = 74 Titular= 96
    let puntaje = 0;
    puntaje += calcularProduccion();
    puntaje += calculoTotalLibrosPremiosPatentes();
    puntaje += calculoObrasArtisticas();
    puntaje += calculoTotalArticulos();
    puntaje += calcularVideos();
    const categoria = document.getElementsByName("categoria");
    let tipoDocente =0;
    Array.from(categoria).forEach(element => {
        if(element.checked){
            tipoDocente = parseInt(element.value);
        }
    });
    if(tipoDocente==37){
        puntaje=puntaje<=80?puntaje:80;
    } else if (tipoDocente == 58) {
        puntaje = puntaje <= 160 ? puntaje : 160;
    } else if (tipoDocente == 74) {
        puntaje = puntaje <= 320 ? puntaje : 320;
    } else if (tipoDocente == 96) {
        puntaje = puntaje <= 540 ? puntaje : 540;
    }
    return puntaje;
}