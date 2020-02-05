var time;
var date;
var tdIndexa;
var filterdata;
var filterdata1;
var scheduletime1;

$(document).ready(function () {




    //$('#popupDatepicker').datepick({ onSelect: showDate, minDate: new Date() });
    $('.test').datetimepicker({
      
        format: 'MM/DD/YYYY',
        
       // maxDate: new Date()
       // minDate: new Date(),

    });
    //$('.test').on("dp.change", function () {
    //    //console.log("testing");
    //    var startdate = $('#popupDatepicker').val();
    //    showDate(startdate);
    //});
    
    $('.test1').datetimepicker({
        //onSelect: showDate, minDate: new Date(),
        format: 'MM/DD/YYYY',

        // maxDate: new Date()
        // minDate: new Date(),

    });
    $("#Bookedslotdata").hide();
    
   

});
    function showDate(date) {

        var date = new Date(date);
        date.setDate(date.getDate() + 7);
        var tempoMonth = (date.getMonth() + 1);
        var tempoDate = (date.getDate());
        if (tempoDate < 10) tempoDate = '0' + tempoDate;
        if (tempoMonth < 10) tempoMonth = '0' + tempoMonth;
        var futDate = tempoMonth + "/" + tempoDate + "/" + date.getFullYear();
        $('#popupDatepicker2').val(futDate);

    }
 

    $('#filter').click(function () {
        if ($('#popupDatepicker').val() == "") {
            toastr.error('Please Select the From Date', 'Inconceivable!', { timeOut: 50000 });
                return false;
        }
        if ($('#popupDatepicker2').val() == "") {
            toastr.error('Please Select the To Date', 'Inconceivable!', { timeOut: 50000 });
            return false;
        }
       
        var startdate = $('#popupDatepicker').val();
        var enddate = $('#popupDatepicker2').val();


      






        $.ajax({
            url: '/Tutor/GetBookedslots',
            dataType: "json",
            type: "GET",
            data: { startdate: startdate, enddate: enddate },
            contentType: 'application/json; charset=utf-8',
            //async: true,
            //processData: false,
            //cache: false,
            success: function (data) {
                $("#Bookedslotdata").show();
                $('#Bookedslotdata').DataTable().destroy();
                $('#Bookedslotdata tbody tr').remove();
                var tutor;
                $.each(data, function () {

                    //tutor += "<tr><td>" + this.studentId + "</td><td>" + this.date + "</td>";
                    var header1 = new Date(this.date);
                    header1.setDate(header1.getDate());
                    var tempoMonth = (header1.getMonth() + 1);
                    var tempoDate = (header1.getDate());
                    if (tempoDate < 10) tempoDate = '0' + tempoDate;
                    if (tempoMonth < 10) tempoMonth = '0' + tempoMonth;
                    var futDate = tempoMonth + "/" + tempoDate + "/" + header1.getFullYear();
                    tutor += "<tr><td>" + this.createdBy + "</td>";
                    tutor += "<td>" + futDate + "</td>";
                    
                    tutor += "<td>" + this.time.substring(5, this.time) +"AM"+ "</td>";
                    
                    tutor += "<td>" + "<button class='btn btn-primary btn-sm' type='button' ><a href='/Tutor/StudentProfileView/"+this.studentId+"'>ProfileView</a></button>" + "</td>";
                    
                });
                $('#Bookedslotdata tbody').append(tutor);
               // $('#Bookedslotdata tbody').append(tutor);
                $('#Bookedslotdata').DataTable();
              
                
                //$('#Bookedslotdata').append(tutor);
            },
            error: function (xhr) {
                alert('error');
            }
        });

      
      
     


      
       
    });




