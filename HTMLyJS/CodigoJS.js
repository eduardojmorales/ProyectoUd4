function Aceptar()
{
  //Verificación de la edad del solicitante del seguro//
  var edadActual; 
  edadActual = document.getElementById("eactual").value;
  if (edadActual < 18 || edadActual > 65)
    {alert ("No cumple con la edad requerida");}
  else
    {alert("Si tiene la Edad minima, puede continuar llenando el formulario!!!");}
}

function Generar()
{
  var nomAsegurado, edadActual, recAsegurado, con, tieneCon, edadConyugue, recConyugue, canHijos, hMayores, recHijos, totAsegurado, totConyugue, totHijos, comision, totalPagar;
  const precioBase = 250;
  nomAsegurado = document.getElementById("nom").value;
  edadActual = document.getElementById("eactual").value;
  tieneCon = document.getElementById("con").value;
  edadConyugue = document.getElementById("econ").value;
  canHijos = document.getElementById("hmen").value;
  hMayores = document.getElementById("hmay").value;
  comision = precioBase * 0.30;
  //Segunda comprobación de Edad//
      if (edadActual < 18 || edadActual > 65)
        {alert ("No cumple con la edad requerida");}
else {
  //calculo del Porcentaje del asegurado segun la edad// 
      if (edadActual>= 18 && edadActual<=21)
        recAsegurado = 0;
      if (edadActual>21 && edadActual<=25)
        recAsegurado = 0.01;
      if (edadActual>25 && edadActual<=30)
        recAsegurado = 0.02;
      if (edadActual>30 && edadActual<=40)
        recAsegurado = 0.05;
      if (edadActual>40 && edadActual<=50)
        recAsegurado = 0.08;
      if (edadActual>50 && edadActual<=65)
        recAsegurado = 0.12;
      }
  //Calculo del recargo//
    totAsegurado = (precioBase * recAsegurado)
        
   //{alert (totAsegurado);}
  
  //Calculo del porcentaje del conyugue segun la edad//
        if (edadConyugue<=30)
        recConyugue = 0.01;
      if (edadConyugue>=30 && edadConyugue<40)
        recConyugue = 0.02;
      if (edadConyugue>=40 && edadConyugue<50)
        recConyugue = 0.03;
      if (edadConyugue>=50 && edadConyugue<70)
        recConyugue = 0.05;
  //Calculo del recargo del conyugue//
  totConyugue =  (precioBase * recConyugue)
  //{alert (totConyugue);}
  
  //calculo del porcentaje de los hijos segun la cantidad//
    recHijos = canHijos * 0.01;
  //Calculo del recargo de los hijos//
    totHijos = (precioBase * recHijos)
  //{alert (totHijos);}
  
  //Calculo del total a pagar segun los datos ingresados//
  totalPagar = precioBase + comision + totAsegurado + totConyugue + totHijos;
  
  //{alert (totalPagar);
  
   
  document.writeln ("<p>Nombre del Solicitante: <p>" + nomAsegurado );
  
  document.write (" <p>Edad del solicitante: <p>" + edadActual);
  
  document.write ("<p>Tiene Conyugue: <p>" + tieneCon);
  
  document.write ("<p>Edad del conyugue a Asegurar: <p>" + edadConyugue);
  
  document.write ("<p>Total de hijos menores de 21 años: <p>" + canHijos);
  
  document.write ("<p>Total de hijos mayores de 21 años: <p>" + hMayores);
  
  document.write ("<p>Total a pagar por todos los asegurados: <p>" +totalPagar);
  
 
}
