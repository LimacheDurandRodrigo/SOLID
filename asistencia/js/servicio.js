var tbl_servicio;
function listar_servicio(){
  tbl_servicio = $("#tabla_servicio").DataTable({
      "ordering":false,
      dom: 'Bfrtip',
      "bLengthChange":true,
      "searching": { "regex": false },
      "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
      "pageLength": 10,
      "destroy":true,
      "async": false ,
      "processing": true,
      "ajax":{
          "url":"../controller/servicio/controlador_servicio_listar.php",
          type:'POST'
      },
      "columns":[
        {"defaultContent":""},
        {"data":"servicio_nombre"},
        {"data":"servicio_precio"},
        {"data":"servicio_fregistro"},
        {"defaultContent":"<button class='editar btn btn-primary btn-sm'><i class='fa fa-edit'></i></button> &nbsp; <button class='eliminar btn btn-danger btn-sm'><i class='fa fa-trash'></i></button> &nbsp; <button class='imprimir btn btn-success btn-sm'><i class='fa fa-print'></i></button>"}
      ],
      
      "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        $($(nRow).find("td")[0]).css('text-align', 'center' );
        $($(nRow).find("td")[2]).css('text-align', 'center' );
        $($(nRow).find("td")[3]).css('text-align', 'center' );
        $($(nRow).find("td")[4]).css('text-align', 'center' );
       
      },
      buttons: [
        {
          extend: 'pdfHtml5',
          //orientation: 'landscape',
          text: "Exportar&nbsp;&nbsp;<img src='img/pdf.png'>",
          className: 'btn',
          pageSize: 'LEGAL',
          title: 'Listado de Servicios',
          exportOptions: {
              columns: [0,1,2] //exportar solo la primera y segunda columna
          },
          customize: function (doc) {
            console.log(doc);
            doc.styles.tableHeader.alignment = 'center';
            doc.styles.tableBodyEven.alignment = 'center';
            doc.styles.tableBodyOdd.alignment = 'center';
            doc.content[1].table.widths = 
                Array(doc.content[1].table.body[0].length + 1).join('*').split('');
          }
        },
        {
          extend: 'excelHtml5',
          //orientation: 'landscape',
          className: 'btn',
          pageSize: 'LEGAL',
          title: 'Listado de Zonas',
          exportOptions: {
              columns: [0,1,2] //exportar solo la primera y segunda columna
          },
          extend: 'excelHtml5',
                  //title: tituloexcel,
          text: "Exportar&nbsp;&nbsp;<img src='img/excel.png'>",
          footer:true,
          sheetName:'Listado de Zonas',
          customize: function( xlsx ) {
            var new_style = '<?xml version="1.0" encoding="UTF-8"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:mc="http://schemas.openxmlformats.org/markup-compatibility/2006" mc:Ignorable="x14ac" xmlns:x14ac="https://schemas.microsoft.com/office/spreadsheetml/2009/9/ac"><fonts count="10" x14ac:knownFonts="1"><font><sz val="11"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font><font><sz val="11"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font><font><b/><sz val="11"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font><font><sz val="11"/><color theme="0"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font><font><i/><sz val="11"/><color theme="1"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font><font><sz val="11"/><color rgb="FFC00000"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font><font><sz val="11"/><color rgb="FF006600"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font><font><sz val="11"/><color rgb="FF990033"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font><font><sz val="11"/><color rgb="FF663300"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font><font><b/><sz val="11"/><color rgb="FFC00000"/><name val="Calibri"/><family val="2"/><scheme val="minor"/></font></fonts><fills count="16"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill><fill><patternFill patternType="solid"><fgColor rgb="FFC00000"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFF0000"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFFC000"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFFFF00"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FF92D050"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FF00B050"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FF00B0F0"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FF0070C0"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FF002060"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FF7030A0"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor theme="1"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FF99CC00"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFF9999"/><bgColor indexed="64"/></patternFill></fill><fill><patternFill patternType="solid"><fgColor rgb="FFFFCC00"/><bgColor indexed="64"/></patternFill></fill></fills><borders count="2"><border><left/><right/><top/><bottom/><diagonal/></border><border><left style="thin"><color indexed="64"/></left><right style="thin"><color indexed="64"/></right><top style="thin"><color indexed="64"/></top><bottom style="thin"><color indexed="64"/></bottom><diagonal/></border></borders><cellStyleXfs count="2"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/><xf numFmtId="9" fontId="1" fillId="0" borderId="0" applyFont="0" applyFill="0" applyBorder="0" applyAlignment="0" applyProtection="0"/></cellStyleXfs><cellXfs count="70"><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0"/><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="2" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment horizontal="right" vertical="top"/></xf><xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="0" fontId="4" fillId="0" borderId="0" xfId="0" applyFont="1" applyAlignment="1"><alignment horizontal="right" vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment horizontal="right" vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyBorder="1" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf><xf numFmtId="0" fontId="3" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="4" borderId="0" xfId="0" applyFill="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="5" borderId="0" xfId="0" applyFill="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="6" borderId="0" xfId="0" applyFill="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="7" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="8" borderId="0" xfId="0" applyFill="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="9" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="10" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="11" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="12" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="4" borderId="0" xfId="0" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="5" borderId="0" xfId="0" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="6" borderId="0" xfId="0" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="7" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="8" borderId="0" xfId="0" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="9" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="10" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="11" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="12" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="2" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="right" vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="3" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="right" vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="4" borderId="0" xfId="0" applyFill="1" applyAlignment="1"><alignment horizontal="right" vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="5" borderId="0" xfId="0" applyFill="1" applyAlignment="1"><alignment horizontal="right" vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="6" borderId="0" xfId="0" applyFill="1" applyAlignment="1"><alignment horizontal="right" vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="7" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="right" vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="8" borderId="0" xfId="0" applyFill="1" applyAlignment="1"><alignment horizontal="right" vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="9" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="right" vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="10" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="right" vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="11" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="right" vertical="top"/></xf><xf numFmtId="0" fontId="3" fillId="12" borderId="0" xfId="0" applyFont="1" applyFill="1" applyAlignment="1"><alignment horizontal="right" vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="top" textRotation="90"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" textRotation="255"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment textRotation="45"/></xf><xf numFmtId="0" fontId="5" fillId="0" borderId="0" xfId="0" applyNumberFormat="1" applyFont="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="5" fillId="0" borderId="0" xfId="0" applyNumberFormat="1" applyFont="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="0" fontId="5" fillId="0" borderId="0" xfId="0" applyNumberFormat="1" applyFont="1" applyAlignment="1"><alignment horizontal="right" vertical="top"/></xf><xf numFmtId="0" fontId="5" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyBorder="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="5" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="0" fontId="5" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyBorder="1" applyAlignment="1"><alignment horizontal="right" vertical="top"/></xf><xf numFmtId="0" fontId="6" fillId="13" borderId="0" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="6" fillId="13" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="7" fillId="14" borderId="0" xfId="1" applyNumberFormat="1" applyFont="1" applyFill="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="7" fillId="14" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="8" fillId="15" borderId="0" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="8" fillId="15" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyFill="1" applyBorder="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="0" fontId="0" fillId="0" borderId="0" xfId="0" applyBorder="1" applyAlignment="1"><alignment vertical="top"/></xf><xf numFmtId="171" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="172" fontId="0" fillId="0" borderId="0" xfId="0" applyNumberFormat="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="171" fontId="0" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="172" fontId="0" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="171" fontId="9" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="172" fontId="9" fillId="0" borderId="1" xfId="0" applyNumberFormat="1" applyFont="1" applyBorder="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="171" fontId="9" fillId="0" borderId="0" xfId="0" applyNumberFormat="1" applyFont="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf><xf numFmtId="172" fontId="9" fillId="0" borderId="0" xfId="0" applyNumberFormat="1" applyFont="1" applyAlignment="1"><alignment horizontal="center" vertical="top"/></xf></cellXfs><cellStyles count="2"><cellStyle name="Procent" xfId="1" builtinId="5"/><cellStyle name="Standaard" xfId="0" builtinId="0"/></cellStyles><dxfs count="0"/><tableStyles count="0" defaultTableStyle="TableStyleMedium2" defaultPivotStyle="PivotStyleLight16"/><colors><mruColors><color rgb="FF663300"/><color rgb="FFFFCC00"/><color rgb="FF990033"/><color rgb="FF006600"/><color rgb="FFFF9999"/><color rgb="FF99CC00"/></mruColors></colors><extLst><ext uri="{EB79DEF2-80B8-43e5-95BD-54CBDDF9020C}" xmlns:x14="https://schemas.microsoft.com/office/spreadsheetml/2009/9/main"><x14:slicerStyles defaultSlicerStyle="SlicerStyleLight1"/></ext></extLst></styleSheet>';
            xlsx.xl['styles.xml'] = $.parseXML(new_style);
            var sheet = xlsx.xl.worksheets['sheet1.xml'];
            $('row:nth-child(odd) c', sheet).attr('s','9');
            $('row:nth-child(even) c', sheet).attr('s','9');            
            $('row:first c', sheet).attr('s','34');
            $('row:nth-child(2) c', sheet).attr('s','14');
          }
        }
      ],
      "language":idioma_espanol,
      select: true
  });
//ESTA FUNCION SIRVE PARA CREAR EL AUTO INCREMENTADO DE LA PRIMERA COLUMNA DEL
//LISTAR
  tbl_servicio.on('draw.td',function(){
    var PageInfo = $("#tabla_servicio").DataTable().page.info();
    tbl_servicio.column(0, {page: 'current'}).nodes().each(function(cell, i){
      cell.innerHTML = i + 1 + PageInfo.start;
    });
  });
}

//fin de la funcion



//funcion de la datatable
$('#tabla_servicio').on('click','.editar',function(){
  var data = tbl_servicio.row($(this).parents('tr')).data();//En tamaño escritorio
  if(tbl_servicio.row(this).child.isShown()){
      var data = tbl_servicio.row(this).data();
  }//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
  $("#modal_editar_servicio").modal('show');
  document.getElementById('txt_servicio_editar').value = "";
  document.getElementById('txtidservicio').value=data.servicio_id;
  //$("#txtidzona").val(data.zona_id);
  document.getElementById('txt_servicio_editar').value=data.servicio_nombre;
  document.getElementById('txt_costo_editar').value=data.servicio_precio;
  $('.form-control').removeClass("is-invalid").removeClass("is-valid");
})
$('#tabla_servicio').on('click','.eliminar',function(){
  var data = tbl_servicio.row($(this).parents('tr')).data();//En tamaño escritorio
  if(tbl_servicio.row(this).child.isShown()){
      var data = tbl_servicio.row(this).data();
  }//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
  
  $('.form-control').removeClass("is-invalid").removeClass("is-valid");
  Swal.fire({
    title: 'Deseas eliminar el servicio?',
    text: "",
    type: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'SI',
    cancelButtonText: 'No',
  })
  .then((willDelete) => {
    if (willDelete.value) {
      eliminar_servicio(data.servicio_id);
    }
  })
})
$('#tabla_servicio').on('click','.imprimir',function(){
  var data = tbl_servicio.row($(this).parents('tr')).data();//En tamaño escritorio
  if(tbl_servicio.row(this).child.isShown()){
      var data = tbl_servicio.row(this).data();
  }//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
  window.open("../MPDF/generar_servicio_fila_basico.php?idservicio="+data.servicio_id+"&nombre="+data.servicio_nombre);
})
//fin de la funcion
function eliminar_servicio(idservicio) {
  $.ajax({
    url:'../controller/servicio/controlador_servicio_eliminar.php',
    type:'POST',
    data:{
      idservicio:idservicio
    }
  })
  .done(function (resp) {
    if (resp>0) {
      Swal.fire("Mensaje de Confirmaci\u00F3n","Datos correctamente eliminados, <b>servicio eliminado</b>","success")
          .then ( ( value ) =>  {
              tbl_servicio.ajax.reload();
      }); 
    }else{
      Swal.fire("Mensaje de error","<b>No se pudo eliminar el servicio</b>","error");
    }
  })
}


//inicio de registrar

function registrar_servicio() {
  let nombre = $("#txt_nombre").val();
  let costo  = $("#txt_costo").val();
  $.ajax({
    url:'../controller/servicio/controlador_servicio_registrar.php',
    type:'POST',
    data:{
      nombre:nombre,
      costo:costo
    }
  })
  .done(function (resp) {
   // alert(resp);
    if(resp>0){
      //alert("correcto");
      Swal.fire("Mensaje de Confirmacion","Servicio registrado con exito.","success");
      tbl_servicio.ajax.reload();
      $("#modal_registro_servicio").modal('hide');
    }else{
      alert("no se registro");
    }
  })
}
//fin de la funcion

//abre el modal
function AbrirModalRegistroservicio(){
  //la palabra show abre el modal, la palabra hide cierra el modal
    $("#modal_registro_servicio").modal({backdrop:'static',keyboard:false})
    $("#modal_registro_servicio").modal('show');
    document.getElementById('txt_nombre').value="";
     document.getElementById('txt_costo').value="0";
    $('.form-control').removeClass("is-invalid").removeClass("is-valid");    
}
//fin de la funcion


//addClass = añade una clase
//removeClass = elimina clase
function ValidacionInput(txt_servicio,txt_costo){
  Boolean($("#"+txt_servicio).val().length>0) ? $("#"+txt_servicio).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_servicio).removeClass('is-valid').addClass("is-invalid"); 
  Boolean($("#"+txt_costo).val().length>0) ? $("#"+txt_costo).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_costo).removeClass('is-valid').addClass("is-invalid"); 
}



function Modificar_servicio(){
  let id       = document.getElementById('txtidservicio').value;
  let nombre    = document.getElementById('txt_servicio_editar').value;
  let costo    = document.getElementById('txt_costo_editar').value;

  // si el campo esta vacio , manda un sms de alerta , || esto significa O, && esto significa y ??//
  if(id.length==0 || nombre.length==0 || costo.length==0){
    ValidacionInput('txt_servicio_editar','txt_costo_editar');
    return Swal.fire("Mensaje de Advertencia","Llene los campos vac&iacute;os","warning");
  }
  $.ajax({
      "url":"../controller/servicio/controlador_modificar_servicio.php",
      type:'POST',
      data:{
          id:id,
          nombre:nombre,
          costo:costo
      }

      
  }).done(function(resp){
      if(resp>0){
        if(resp==1){
            $("#modal_editar_servicio").modal('hide');
            Swal.fire("Mensaje de Confirmaci\u00F3n","Datos correctamente actualizados, <b>datos de la zona modificados</b>","success")
                .then ( ( value ) =>  {
                    tbl_servicio.ajax.reload();
            });  
        }else{
            return Swal.fire("Mensaje de Advertencia","Lo sentimos, el nombre de la zona ya se encuentra en nuestra base de datos","warning");
        }
  
      }else{
          Swal.fire("Mensaje de Error","Lo sentimos, no se pudo completar la actualizaci\u00F3n","error");
      }
  })
}