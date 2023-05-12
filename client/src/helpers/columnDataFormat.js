const columnDataFormat = (inputs) => {
 
  const monthNumber = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];

  const data = [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ]; // 12 ingresos y 12 egresos = 12 meses = 24 datos / 1ro Ingresos y 2do Egresos
  
  inputs.map((input) => {
    const datee = new Date(input.date);
    let month = datee.getMonth();

    // console.log(month);
    data[month] = {
      name: input.tipo,
      date: monthNumber[month],
      value: input.input < 0 ? input.input * -1 : input.input,
    };
  });

  return data;
};

export default columnDataFormat;

// Sumar los ingresos y egresos por separado y luego devolver un data = [ingresos,egresos] , Sumados por fechaa por ej:
// data = [ ingresosMayo , egresosMayo , ingresosJunio, egresosJunio]

// La grafica esta hecha para mostrar totales pr date, sino tomara el ultimo valor

// Asi recibo los datos desde el back
// inputs = [{date,detalle,input,tipo},{}]
// asi los necesito formatear:
// {
//   name: "Ingresos",
//   月份: "Jan.",
//   月均降雨量: 18.9,
// },
