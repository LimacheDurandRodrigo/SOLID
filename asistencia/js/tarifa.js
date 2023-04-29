var tbl_tarifa;
function listar_tarifa(){
  tbl_tarifa = $("#tabla_tarifa").DataTable({
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
          "url":"../controller/tarifa/controlador_tarifa_listar.php",
          type:'POST'
      },
      "columns":[
        {"data":"numero"},
        {"data":"tar_descripcion"},
        {"data":"tar_tipo"},
        {"data":"tar_agua"},
        {"data":"tar_desague"},
        {"data":"tar_precio"},
        {"data":"tar_fecharegistro"},
        {"data":"tar_fechaupdate"},
        {"data":"tar_estatus",
          render: function(data,type,row){
                if(data=='ACTIVO'){
                  return '<span class="badge bg-success">ACTIVO</span>';
                }else{
                  return '<span class="badge bg-danger">INACTIVO</span>';
                }
          }   
        },
        {"defaultContent":"<button class='editar btn btn-primary btn-sm'><i class='fa fa-edit'></i></button>"}
      ],
      "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
        $($(nRow).find("td")[0]).css('text-align', 'center' );
        $($(nRow).find("td")[2]).css('text-align', 'center' );
        $($(nRow).find("td")[1]).css('text-align', 'left' );
        $($(nRow).find("td")[3]).css('text-align', 'center' );
        $($(nRow).find("td")[4]).css('text-align', 'center' );
        $($(nRow).find("td")[5]).css('text-align', 'center' );
        $($(nRow).find("td")[6]).css('text-align', 'center' );
        $($(nRow).find("td")[7]).css('text-align', 'center' );
        $($(nRow).find("td")[8]).css('text-align', 'center' );
        $($(nRow).find("td")[9]).css('text-align', 'center' );
      },
      buttons: [
        {
          extend: 'pdfHtml5',
          //orientation: 'landscape',
          text: "Exportar&nbsp;&nbsp;<img src='img/pdf.png'>",
          className: 'btn',
          pageSize: 'LEGAL',
          title: 'Listado de Tarifa',
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
          title: 'Listado de Tarifas',
          exportOptions: {
              columns: [0,1,2,3,4,5] //exportar solo la primera y segunda columna
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
  tbl_tarifa.on('draw.td',function(){
    var PageInfo = $("#tabla_tarifa").DataTable().page.info();
    tbl_tarifa.column(0, {page: 'current'}).nodes().each(function(cell, i){
      cell.innerHTML = i + 1 + PageInfo.start;
    });
  });
}

$('#tabla_tarifa').on('click','.editar',function(){
  var data = tbl_tarifa.row($(this).parents('tr')).data();//En tamaño escritorio
  if(tbl_tarifa.row(this).child.isShown()){
      var data = tbl_tarifa.row(this).data();
  }//Permite llevar los datos cuando es tamaño celular y usas el responsive de datatable
  $("#modal_editar_tarifas").modal('show');
  document.getElementById('txtidtarifa').value=data.tarifa_id;
  document.getElementById('txt_nombre_editar').value=data.tar_descripcion;
  document.getElementById('txt_agua_editar').value=data.tar_agua;
  document.getElementById('txt_desague_editar').value=data.tar_desague;
  document.getElementById('txt_precio_editar').value=data.tar_precio;
  $("#combo_tiposervicio_editar").val(data.tar_tipo).trigger("change")
  $("#cbm_estatus_editar").select2().val(data.tar_estatus).trigger('change.select2');
  $('.form-control').removeClass("is-invalid").removeClass("is-valid");
})

function AbrirModalRegistroTarifa(){
    $("#modal_registro_tarifa").modal({backdrop:'static',keyboard:false})
    $("#modal_registro_tarifa").modal('show');
    document.getElementById('txt_nombre').value="";
    document.getElementById('txt_agua').value="0";
    document.getElementById('txt_desague').value="0";
    document.getElementById('txt_precio').value="0";
    $('.form-control').removeClass("is-invalid").removeClass("is-valid");    
}
function ValidacionInput(txt_nombre,txt_agua,txt_desague,txt_precio){
  Boolean($("#"+txt_nombre).val().length>0) ? $("#"+txt_nombre).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_nombre).removeClass('is-valid').addClass("is-invalid"); 
  Boolean($("#"+txt_agua).val().length>0) ? $("#"+txt_agua).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_agua).removeClass('is-valid').addClass("is-invalid"); 
  Boolean($("#"+txt_desague).val().length>0) ? $("#"+txt_desague).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_desague).removeClass('is-valid').addClass("is-invalid"); 
  Boolean($("#"+txt_precio).val().length>0) ? $("#"+txt_precio).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_precio).removeClass('is-valid').addClass("is-invalid"); 
}
function Registrar_Tarifa(){
    let tarifa   = document.getElementById('txt_nombre').value;
    let agua     = document.getElementById('txt_agua').value;
    let desague  = document.getElementById('txt_desague').value;
    let precio   = document.getElementById('txt_precio').value;
    let servicio = document.getElementById('combo_tiposervicio').value;
    if (precio.length==0 || precio=="" || precio=="0") {
      $("#txt_precio").removeClass('is-valid').addClass("is-invalid"); 
      return Swal.fire("Mensaje de Advertencia","El precio total tiene que ser <b>mayor a 0</b>","warning");
    }
    if(tarifa.length==0 || agua.length==0 || desague.length==0 || precio.length==0){
      ValidacionInput('txt_nombre','txt_agua','txt_desague','txt_precio');
      return Swal.fire("Mensaje de Advertencia","Llene los campos vac&iacute;os","warning");
    }
    $.ajax({
        "url":"../controller/tarifa/controlador_registrar_tarifa.php",
        type:'POST',
        data:{
            tarifa:tarifa,
            agua:agua,
            desague:desague,
            precio:precio,
            servicio:servicio
        }
    }).done(function(resp){
        if(resp>0){  
          if (resp==1) {
            Swal.fire("Mensaje de Confirmaci\u00F3n","Datos correctamente registrados, <b>nueva tarifa registrada</b>","success")
            .then ( ( value ) =>  {
                tbl_tarifa.ajax.reload();
                $("#modal_registro_tarifa").modal('hide');
            }); 
          }
          if (resp==2) {
            Swal.fire("Mensaje de Advertencia","El <b>tipo de servicio</b><b style='color:#9B0000'> "+ servicio+"</b> ya cuenta con el nombre de tarifa <b style='color:#9B0000'>" +tarifa+"</b> en nuestra base de datos","warning");  
          }            
        }else{
            Swal.fire("Mensaje de Error","Lo sentimos, no se pudo completar el registro","error");
        }
    })
}

function Modificar_Tarifa(){
  let id       = document.getElementById('txtidtarifa').value;
  let tarifa    = document.getElementById('txt_nombre_editar').value;
  let estatus  = document.getElementById('cbm_estatus_editar').value;
  let agua     = document.getElementById('txt_agua_editar').value;
  let desague  = document.getElementById('txt_desague_editar').value;
  let precio   = document.getElementById('txt_precio_editar').value;
  let servicio = document.getElementById('combo_tiposervicio_editar').value;
  if (precio.length==0 || precio=="" || precio=="0") {
    $("#txt_precio_editar").removeClass('is-valid').addClass("is-invalid"); 
    return Swal.fire("Mensaje de Advertencia","El precio total tiene que ser <b>mayor a 0</b>","warning");
  }
  if(tarifa.length==0 || agua.length==0 || desague.length==0 || precio.length==0){
    ValidacionInput('txt_nombre_editar','txt_agua_editar','txt_desague_editar','txt_precio_editar');
    return Swal.fire("Mensaje de Advertencia","Llene los campos vac&iacute;os","warning");
  }
  $.ajax({
      "url":"../controller/tarifa/controlador_modificar_tarifa.php",
      type:'POST',
      data:{
          id:id,
          tarifa:tarifa,
          estatus:estatus,
          agua:agua,
          desague:desague,
          precio:precio,
          servicio:servicio
      }
  }).done(function(resp){
      if(resp>0){
          if (resp==1) {
            Swal.fire("Mensaje de Confirmaci\u00F3n","Datos correctamente actualizados, <b>datos de la tarifa modificados</b>","success")
            .then ( ( value ) =>  {
                tbl_tarifa.ajax.reload();
                $("#modal_editar_tarifas").modal('hide');
            }); 
          }
          if (resp==2) {
            Swal.fire("Mensaje de Advertencia","El <b>tipo de servicio</b><b style='color:#9B0000'> "+ servicio+"</b> ya cuenta con el nombre de tarifa <b style='color:#9B0000'>" +tarifa+"</b> en nuestra base de datos","warning");  
          }
      }else{
          Swal.fire("Mensaje de Error","Lo sentimos, no se pudo completar la actualizaci\u00F3n","error");
      }
  })
}