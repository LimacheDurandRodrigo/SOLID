
function Generar_pdf_personal() {

    window.open("../MPDF/listado_personal.php");
    
}



var table;
function listar_studen(){
    table = $("#tabla_studen").DataTable({
//Aca comienza para la Exportacion de los botones 
    "ordering":false,
      dom: 'Bfrtip',
      "bLengthChange":true,
      "searching": { "regex": false },
      "lengthMenu": [ [10, 25, 50, 100, -1], [10, 25, 50, 100, "All"] ],
      "pageLength": 10,
      "destroy":true,
      "async": false ,
      "processing": true,
      //Aca comienza para la Exportacion de los botones 

	//	"ordering":false,   
     //   "pageLength":10,
    //    "destroy":true,
    //    "async": false ,
    //    "responsive": true,
    //	"autoWidth": false,
   
        "ajax":{
            "method":"POST",
    		"url":"../controller/studen/controlador_studen_listar.php",
        },
        "columns":[
            {"defaultContent":""},
            {"data":"STUDENTID"},
            {"data":"studen"},
            {"data":"cli_movil"},
            {"data":"cli_email"},
            {"data":"cli_direccion"},
            {"data":"cli_estatus",
            	render: function (data, type, row ) {
            		if(data=='INACTIVO'){
            			return '<span class="badge bg-danger bg-lg">'+data+'</span>';
            		}else{
            			return '<span class="badge bg-success bg-lg">'+data+'</span>';
            		}
                }
            },
            {"data":null,
    			render: function (data, type, row ) {
    			    return "<button class='editar btn btn-primary  btn-sm' type='button' ><i class='fa fa-edit'></i><b></b></button>";
    			}
		    }
        ],
        "fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
            $($(nRow).find("td")[0]).css('text-align', 'center' );
            $($(nRow).find("td")[3]).css('text-align', 'center' );
            $($(nRow).find("td")[4]).css('text-align', 'center' );
            $($(nRow).find("td")[6]).css('text-align', 'center' );
            $($(nRow).find("td")[7]).css('text-align', 'center' );
        },





//Aca comienza para la Exportacion de los botones 

        buttons: [
        {
          extend: 'pdfHtml5',
          //orientation: 'landscape',
          text: "Exportar&nbsp;&nbsp;<img src='img/pdf.png'>",
          className: 'btn',
          pageSize: 'LEGAL',
          title: 'Listado de Personal',
          exportOptions: {
              columns: [0,1,2,3,4,5] //exportar solo la primera y segunda columna
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
          title: 'Listado de Personal',
          exportOptions: {
              columns: [0,1,2,3,4,5] //exportar solo la primera y segunda columna
          },
          extend: 'excelHtml5',
                  //title: tituloexcel,
          text: "Exportar&nbsp;&nbsp;<img src='img/excel.png'>",
          footer:true,
          sheetName:'Listado de Clientes',
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

//Fin de los botones 





        "language":idioma_espanol,
        select: true
	});
	table.on( 'draw.dt', function () {
        var PageInfo = $('#tabla_studen').DataTable().page.info();
        table.column(0, { page: 'current' }).nodes().each( function (cell, i) {
            cell.innerHTML = i + 1 + PageInfo.start;
        } );
    } );
}








$('#tabla_studen').on('click','.editar',function(){
    var data = table.row($(this).parents('tr')).data();//Detecta a que fila hago click y me captura los datos en la variable data.
    if(table.row(this).child.isShown()){//Cuando esta en tamaño responsivo
        var data = table.row(this).data();
    }

    $('.form-control').removeClass("is-invalid").removeClass("is-valid");
    $("#modal_editar").modal('show');
    $("#txt_idpersona_editar").val(data.ID);
    $("#txt_nombre_editar").val(data.FIRSTNAME);
    $("#txt_apepat_editar").val(data.MNAME);
    $("#txt_apemat_editar").val(data.LASTNAME);
    $("#txt_fechanacimiento_editar").val(data.cli_fechanacimiento);
    $("#txt_nrodocumento_editar").val(data.STUDENTID);
    $("#txt_movil_editar").val(data.cli_movil);
    $("#txt_email_editar").val(data.cli_email);
    $("#txt_direccion_editar").val(data.cli_direccion);
    $("#cbm_estatus").val(data.cli_estatus).trigger("change");
   

})




function Registrar_studen(){
    var nombre = $("#txt_nombre").val();
    var apepat = $("#txt_apepat").val();
    var apemat = $("#txt_apemat").val();
    var fechanacimiento = $("#txt_fechanacimiento").val();
    var nrodocumento = $("#txt_nrodocumento").val();
    var movil = $("#txt_movil").val();
    var direccion = $("#txt_direccion").val();
    var email = $("#txt_email").val();

	if(nombre.length==0 || apepat.length==0 || apemat.length==0 || fechanacimiento.length==0 || nrodocumento.length==0 || movil.length==0 || direccion.length==0 || email.length==0){
		ValidacionInput("txt_nombre","txt_apepat","txt_apemat","txt_fechanacimiento","txt_nrodocumento","txt_movil","txt_direccion","txt_email");
		return Swal.fire("Mensaje de advertencia","Tiene algunos campos vac&iacute;os","warning");
	}

   
      
 //Inicio valdacion
 var fechaactual = new Date();//Trae la fecha actual
 var anio = fechaactual.getFullYear();//Captura el año de la fecha actual
 var fecha = fechanacimiento.split('-');//divide el año y lo guarda en arreglos

 var edad =  anio - fecha[0];//restas el año actual con el año seleccionado del date
 //fin
	if(edad<18){
		return   Swal.fire("Mensaje de Advertencia","El empleado debe ser mayor de edad","warning");
	}
	if (validar_email(email)) {
	}else{
	  return Swal.fire("Mensaje de Error","Lo sentimos, formato de email ingresado no es valido.", "error");
	}
    //=======================
    let formato = $("#txtformato").val();
    var form_data = new FormData();
        form_data.append("txt_archivo", $('#txt_archivo_registrar')[0].files[0]);
        form_data.append("nombre", nombre);
        form_data.append("apepat", apepat);
        form_data.append("apemat", apemat);
        form_data.append("fechanacimiento", fechanacimiento);
        form_data.append("nrodocumento", nrodocumento);
        form_data.append("movil", movil);
        form_data.append("direccion", direccion);
        form_data.append("email", email);
        form_data.append("formato", formato);
    $.ajax({
        "url":"../controller/studen/controlador_studen_registro.php",
        type:'POST',
        data:form_data,
        contentType:false,
        processData:false,
    })
    .done(function(resp){
        if(resp>0){
                if(resp==1){
					LimpiarCampos();
                    Swal.fire("Mensaje de Confirmaci\u00F3n","Datos correctamente registrados, <b>Nuevo Personal registrado</b>","success")
                    .then((value) => {
                        listar_studen();
                        $("#modal_registro").modal('hide');
                    });
                    
                }else{
                    //LimpiarCampos();
                    Swal.fire("Mensaje de Advertencia","El nro de documento ya esta registrado en nuestra base de datos","warning");  
                }
        }else{
            Swal.fire("Mensaje de Error","Lo sentimos el registro no se pudo completar","error");
        }
    })		
}



function Modificar_Studen(){

    var idpersonaeditar = $("#txt_idpersona_editar").val();
    var nombre = $("#txt_nombre_editar").val();
    var apepat = $("#txt_apepat_editar").val();
    var apemat = $("#txt_apemat_editar").val();
    var fechanacimiento = $("#txt_fechanacimiento_editar").val();
    var nrodocumento = $("#txt_nrodocumento_editar").val();
    var movil = $("#txt_movil_editar").val();
    var direccion = $("#txt_direccion_editar").val();
    var email = $("#txt_email_editar").val();
    var estatus = $("#cbm_estatus").val(); 
    

	if(nombre.length==0 || apepat.length==0 || apemat.length==0 || nrodocumento.length==0 || movil.length==0 || direccion.length==0 || email.length==0 || estatus.length==0){
		ValidacionInput("txt_nombre_editar","txt_apepat_editar","txt_apemat_editar","txt_nrodocumento_editar","txt_movil_editar","txt_direccion_editar","txt_email_editar","cbm_estatus");
	  return   Swal.fire("Mensaje de Advertencia","Porfavor llene los campos vac&iacute;os","warning");
	}
    
 //Inicio valdacion
 var fechaactual = new Date();//Trae la fecha actual
 var anio = fechaactual.getFullYear();//Captura el año de la fecha actual
 var fecha = fechanacimiento.split('-');//divide el año y lo guarda en arreglos
 var edad =  anio - fecha[0];//restas el año actual con el año seleccionado del date
 //fin
	
    
	if(edad<18){
		return   Swal.fire("Mensaje de Advertencia","El empleado debe ser mayor de edad","warning");
	}
	
	  $.ajax({
		url:'../controller/studen/controlador_studen_editar.php',
		type:'POST',
		data:{
            id:idpersonaeditar,
            nombre:nombre,
            apepat:apepat,
            apemat:apemat,
            fechanacimiento:fechanacimiento,
            nrodocumento:nrodocumento,
            movil:movil,
            direccion:direccion,
            email:email,
            estado:estatus

		}
	})
	.done(function(resp){
		if (resp > 0) {
            
		  if (resp==1) {	  	
            Swal.fire("Mensaje de Confirmaci\u00F3n","Datos correctamente actualizados, <b>datos del Personal modificados</b>","success")
            .then((value) => {
                listar_studen();
                $("#modal_editar").modal('hide');
            });
		  }else {
            Swal.fire("Mensaje de Advertencia","El nro de documento ya se encuentra en la base de datos","warning");      		
		  }
		}else{
		  Swal.fire("Mensaje de Error","Lo sentimos, no se pudo completar el registro","error")
		}
	})	
	
}

function ValidacionInput(txt_nombre,txt_apepat,txt_apemat,txt_fechanacimiento,txt_nrodocumento,txt_movil,txt_direccion){
    Boolean($("#"+txt_nombre).val().length>0) ? $("#"+txt_nombre).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_nombre).removeClass('is-valid').addClass("is-invalid"); 

    Boolean($("#"+txt_apepat).val().length>0) ? $("#"+txt_apepat).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_apepat).removeClass('is-valid').addClass("is-invalid"); 

    Boolean($("#"+txt_apemat).val().length>0) ? $("#"+txt_apemat).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_apemat).removeClass('is-valid').addClass("is-invalid"); 



    Boolean($("#"+txt_nrodocumento).val().length>0) ? $("#"+txt_nrodocumento).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_nrodocumento).removeClass('is-valid').addClass("is-invalid"); 

    Boolean($("#"+txt_movil).val().length>0) ? $("#"+txt_movil).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_movil).removeClass('is-valid').addClass("is-invalid"); 

    Boolean($("#"+txt_direccion).val().length>0) ? $("#"+txt_direccion).removeClass('is-invalid').addClass("is-valid") : $("#"+txt_direccion).removeClass('is-valid').addClass("is-invalid"); 

    
}

function LimpiarCampos(){
    $("#txt_nombre").val("");
    $("#txt_apepat").val("");
    $("#txt_apemat").val("");
    $("#txt_fechanacimiento").val("");
    $("#txt_nrodocumento").val("");
    $("#txt_movil").val("");
    $("#txt_direccion").val("");
    $("#txt_email").val("");
    $('.form-control').removeClass("is-invalid").removeClass("is-valid");
    
}

function AbrirModalRegistro(){
    LimpiarCampos();
    $('.form-control').removeClass("is-invalid").removeClass("is-valid");
    $("#modal_registro").modal('show');
}

