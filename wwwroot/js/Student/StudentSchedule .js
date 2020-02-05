var time;
var date;
var tdIndexa;
var filterdata;
var filterdata1;
var scheduletime1;
var datatimezones;
var timezonetitle;

var rowIndex;
var tdIndex;
var scheduletime;
var note;
var subid;
var subtypeid;
$(document).ready(function () {

    var date = new Date();
    date.setDate(date.getDate());
    var tempoMonth = (date.getMonth() + 1);
    var tempoDate = (date.getDate());
    if (tempoDate < 10) tempoDate = '0' + tempoDate;
    if (tempoMonth < 10) tempoMonth = '0' + tempoMonth;
    var futDate = tempoMonth + "/" + tempoDate + "/" + date.getFullYear();
    $('#popupDatepicker').val(futDate);
    var date = new Date();
    date.setDate(date.getDate() + 7);
    var tempoMonth = (date.getMonth() + 1);
    var tempoDate = (date.getDate());
    if (tempoDate < 10) tempoDate = '0' + tempoDate;
    if (tempoMonth < 10) tempoMonth = '0' + tempoMonth;
    var futDate = tempoMonth + "/" + tempoDate + "/" + date.getFullYear();
    $('#popupDatepicker2').val(futDate);
    $("#subject").select2({
        placeholder: "Select a Subject",
        allowClear: true
    });
    $("#subjecttype").select2({
        placeholder: "Select a Topic",
        allowClear: true
    });

    //$('#popupDatepicker').datepick({ onSelect: showDate, minDate: new Date() });
    $('.test').datetimepicker({
        //onSelect: showDate, minDate: new Date(),
        format: 'MM/DD/YYYY',
        minDate: moment().subtract(1, 'd'),

    });
    $('.test').on("dp.change", function () {
        //console.log("testing");
        var startdate = $('#popupDatepicker').val();
        showDate(startdate);
    });
    $("#slotdata").hide();
    $("#btnCancel").hide()

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
        toastr.error('Please Select the From Date', 'Inconceivable!', { timeOut: 5000 });
        return false;
    }
    if ($('#subject').val() == "") {
        toastr.error('Please Select the Subject', 'Inconceivable!', { timeOut: 5000 });
        return false;
    }
    if ($('#subjecttype').val() == "") {
        toastr.error('Please Select the Topic', 'Inconceivable!', { timeOut: 5000 });
        return false;
    }
    var id = $("#tutorid").val();
    var startdate = $('#popupDatepicker').val();
    var enddate = $('#popupDatepicker2').val();
    var subject = $('#subject').val();
    var subjecttype = $('#subjecttype').val();




    $.ajax({
        url: '/Tutor/GetTimesBasedonTimezones',
        dataType: "json",
        type: "GET",
        //data: { startdate: startdate, enddate: enddate },
        contentType: 'application/json; charset=utf-8',
        //async: true,
        //processData: false,
        //cache: false,
        success: function (datatimezoness) {
            datatimezones = datatimezoness;

            $("#slotdata").find("tr").remove();

            var someRow = "<tr class='someClass' ><th id='header0' ></th><th id='header1'></th><th id='header2'></th><th id='header3'></th><th id='header4'></th><th id='header5'></th><th id='header6'></th><th id='header7'></th></tr>"; // add resources
            $("#slotdata").append(someRow);
            var date = $('#popupDatepicker').val();
            $("#header0").text(date);

            var header1 = new Date(date);
            header1.setDate(header1.getDate() + 1);
            var tempoMonth = (header1.getMonth() + 1);
            var tempoDate = (header1.getDate());
            if (tempoDate < 10) tempoDate = '0' + tempoDate;
            if (tempoMonth < 10) tempoMonth = '0' + tempoMonth;
            var futDate = tempoMonth + "/" + tempoDate + "/" + header1.getFullYear();
            $("#header1").text(futDate);


            var header2 = new Date(date);
            header2.setDate(header2.getDate() + 2);
            var tempoMonth2 = (header2.getMonth() + 1);
            var tempoDate2 = (header2.getDate());
            if (tempoDate2 < 10) tempoDate2 = '0' + tempoDate2;
            if (tempoMonth2 < 10) tempoMonth2 = '0' + tempoMonth2;
            var fulldate = tempoMonth2 + "/" + tempoDate2 + "/" + header2.getFullYear();
            $("#header2").text(fulldate);


            var header3 = new Date(date);
            header3.setDate(header3.getDate() + 3);
            var tempoMonth3 = (header3.getMonth() + 1);
            var tempoDate3 = (header3.getDate());
            if (tempoDate3 < 10) tempoDate3 = '0' + tempoDate3;
            if (tempoMonth3 < 10) tempoMonth3 = '0' + tempoMonth3;
            var fulldate3 = tempoMonth3 + "/" + tempoDate3 + "/" + header3.getFullYear();
            $("#header3").text(fulldate3);



            var header4 = new Date(date);
            header4.setDate(header4.getDate() + 4);
            var tempoMonth4 = (header4.getMonth() + 1);
            var tempoDate4 = (header4.getDate());
            if (tempoDate4 < 10) tempoDate4 = '0' + tempoDate4;
            if (tempoMonth4 < 10) tempoMonth4 = '0' + tempoMonth4;
            var fulldate4 = tempoMonth4 + "/" + tempoDate4 + "/" + header4.getFullYear();
            $("#header4").text(fulldate4);


            var header5 = new Date(date);
            header5.setDate(header5.getDate() + 5);
            var tempoMonth5 = (header5.getMonth() + 1);
            var tempoDate5 = (header5.getDate());
            if (tempoDate5 < 10) tempoDate5 = '0' + tempoDate5;
            if (tempoMonth5 < 10) tempoMonth5 = '0' + tempoMonth5;
            var fulldate5 = tempoMonth5 + "/" + tempoDate5 + "/" + header5.getFullYear();
            $("#header5").text(fulldate5);

            var header6 = new Date(date);
            header6.setDate(header6.getDate() + 6);
            var tempoMonth6 = (header6.getMonth() + 1);
            var tempoDate6 = (header6.getDate());
            if (tempoDate6 < 10) tempoDate6 = '0' + tempoDate6;
            if (tempoMonth6 < 10) tempoMonth6 = '0' + tempoMonth6;
            var fulldate6 = tempoMonth6 + "/" + tempoDate6 + "/" + header6.getFullYear();
            $("#header6").text(fulldate6);
            var header7 = new Date(date);
            header7.setDate(header7.getDate() + 7);
            var tempoMonth7 = (header7.getMonth() + 1);
            var tempoDate7 = (header7.getDate());
            if (tempoDate7 < 10) tempoDate7 = '0' + tempoDate7;
            if (tempoMonth7 < 10) tempoMonth7 = '0' + tempoMonth7;
            var fulldate7 = tempoMonth7 + "/" + tempoDate7 + "/" + header7.getFullYear();
            $("#header7").text(fulldate7);




            $.each(datatimezones, function (i, item) {


                $("#slotdata").append("<tr><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + "</button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td></tr>");


            })





            $('#slotdata tbody td').click(function (e) {

                rowIndex = $(this).parent().index('#slotdata tbody tr');
                tdIndex = $(this).index('#slotdata tbody tr:eq(' + rowIndex + ') td');
                var idd = $(this).find('button').attr('id');
                tdIndexa = $('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).text().substring(0, 10);
                tdIndexa.trim();


                date = $("#header" + tdIndex).text()

                $.each(datatimezones, function (i, item) {

                    if (tdIndexa.trim() == datatimezones[i].title) {
                        time = datatimezones[i].times;
                        scheduletime = $("#header" + tdIndex).text() + " " + datatimezones[i].times;

                    }

                })



                //var idd = $(this).index('#slotdata tbody tr:eq(' + rowIndex + ') td');







                $("#slotid").val(idd);

                // $("#time").val(tdIndexa);
                //  $("#date").val(date);
                $("#time").text(tdIndexa);
                $("#date").text(date);
                //$('[data-toggle=popover]').each(function () {
                //    // hide any open popovers when the anywhere else in the body is clicked
                //    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.success').has(e.target).length === 0) {
                //        $(this).popover('hide');
                //    }
                //});    


            });





            //$('#slotdata tbody td').find('button').click(function (e) {
            //    $('#myModal').modal();
            //    subid = $(this).attr('subjectId');
            //    subtypeid = $(this).attr('subjectTopicId');
            //    note = $(this).attr('notes');


            //    $("#getsubject").text(subid);
            //    $("#getsubtopic").text(subtypeid);
            //    $("#notesmessage").val(note);
            //    $('#notesmessage').attr('readonly', 'true');
            //    if ($(this).hasClass('btn btn-primary btn-success')) {
            //        //alert('bingo');
            //        $("#btnSubmit").hide();
            //        $("#btnCancel").show();
            //    };
            //    if ($(this).hasClass('btn btn-primary')) {
            //        //alert('bingo');
            //        $("#btnSubmit").show();
            //        $("#btnCancel").hide();

            //        $("#selecttest").val("");
            //        $("#message").val("");


            //    };



            //    if ($(this).hasClass('btn btn-success')) {
            //        //alert('bingo');
            //        $("#btnSubmit").hide();
            //        $("#btnCancel").show();

            //        $.ajax({
            //            url: '/Student/GetSubjectinschedule',
            //            dataType: "json",
            //            type: "GET",
            //            data: { Slotid: $(this).attr('id') },
            //            contentType: 'application/json; charset=utf-8',
            //            //async: true,
            //            //processData: false,
            //            //cache: false,
            //            success: function (data) {
            //                //$("#selecttest").val(data.subjectId);
            //                $("#getsubject").text(data.subjectId);
            //                $("#getsubtopic").text(data.subjectTopicId);
            //                $("#notesmessage").val(data.updatedBy);
            //                $("#message").val(data.message);
            //            },
            //            error: function (xhr) {
            //                alert('error');
            //            }
            //        });
            //    };



            //});

            $('#slotdata tbody td').find('button').click(function (e) {
                $('#myModal').modal();
                subid = $(this).attr('subjectId');
                subtypeid = $(this).attr('subjectTopicId');
                note = $(this).attr('notes');


                $("#getsubject").text(subid);
                $("#getsubtopic").text(subtypeid);
                $("#notesmessage").val(note);
                $('#notesmessage').attr('readonly', 'true');
                if ($(this).hasClass('btn btn-primary')) {
                    //alert('bingo');
                 
                    $("#btnSubmit").hide();
                    $("#btnCancel").show();
                };
                if ($(this).hasClass('btn btn-success')) {
                    //alert('bingo');
                  
                    $("#btnSubmit").show();
                    $("#btnCancel").hide();

                    $("#selecttest").val("");
                    $("#message").val("");


                };



                if ($(this).hasClass('btn btn-success')) {
                    //alert('bingo');
                   
                    $("#btnSubmit").show();
                   
                    $("#btnCancel").hide();

                    $.ajax({
                        url: '/Student/GetSubjectinschedule',
                        dataType: "json",
                        type: "GET",
                        data: { Slotid: $(this).attr('id') },
                        contentType: 'application/json; charset=utf-8',
                        //async: true,
                        //processData: false,
                        //cache: false,
                        success: function (data) {
                            //$("#selecttest").val(data.subjectId);
                            $("#getsubject").text(data.subjectId);
                            $("#getsubtopic").text(data.subjectTopicId);
                            $("#notesmessage").val(data.updatedBy);
                            $("#message").val(data.message);
                        },
                        error: function (xhr) {
                            alert('error');
                        }
                    });
                };



            });


            $.ajax({
                url: '/Student/GetDates',
                dataType: "json",
                type: "GET",
                data: { startdate: startdate, enddate: enddate, id: id, subject: subject, subjecttype: subjecttype },
                contentType: 'application/json; charset=utf-8',
                //async: true,
                //processData: false,
                //cache: false,
                success: function (data) {
                    // alert(data);
                    $('#slotdata tr').find('td').find("button").removeClass('btn-outline-success');

                    $('#slotdata tr').find('td').find("button").prop('disabled', true);
                    $('#slotdata tr').find('td').find("button").addClass('btn-warning').prop('disabled', true);

                    filterdata = data;
                    $.each(filterdata, function (i, item) {
                        var header1 = new Date(filterdata[i].scheduleDateTime);
                        header1.setDate(header1.getDate());
                        var tempoMonth = (header1.getMonth() + 1);
                        var tempoDate = (header1.getDate());
                        if (tempoDate < 10) tempoDate = '0' + tempoDate;
                        if (tempoMonth < 10) tempoMonth = '0' + tempoMonth;
                        var futDate = tempoMonth + "/" + tempoDate + "/" + header1.getFullYear();
                        //datetime.push(futDate);
                        var value;
                        //for (var i = 1; i <= 7; i++) {

                        if (futDate == $("#header0").text()) {
                            value = 0;
                        }
                        else
                            if (futDate == $("#header1").text()) {
                                value = 1;
                            }
                            else if (futDate == $("#header2").text()) {
                                value = 2;
                            }
                            else if (futDate == $("#header3").text()) {
                                value = 3;
                            }
                            else if (futDate == $("#header4").text()) {
                                value = 4;
                            }
                            else if (futDate == $("#header5").text()) {
                                value = 5;
                            }
                            else if (futDate == $("#header6").text()) {
                                value = 6;
                            }
                            else if (futDate == $("#header7").text()) {
                                value = 7;
                            }
                        //}


                        if (filterdata[i].time == datatimezones[0].times && $("#header" + [value]).text() == futDate) {

                            $('#slotdata tr:nth(1)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false).show();
                            //$('#slotdata tr:nth(1)').find('td').eq(value).find("button").addClass("btn-primary");
                            $('#slotdata tr:nth(1)').find('td').eq(value).find("button").addClass("btn-success");
                            $('#slotdata tr:nth(1)').find('td').eq(value).find("button").attr('id', filterdata[i].id);
                            $('#slotdata tr:nth(1)').find('td').eq(value).find("button").attr('subjectId', filterdata[i].subjectId);
                            $('#slotdata tr:nth(1)').find('td').eq(value).find("button").attr('subjectTopicId', filterdata[i].subjectTopicId);
                            $('#slotdata tr:nth(1)').find('td').eq(value).find("button").attr('notes', filterdata[i].notes);
                        }
                        else if (filterdata[i].time == datatimezones[1].times && $("#header" + [value]).text() == futDate) {
                            $('#slotdata tr:nth(2)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false).show();
                            //$('#slotdata tr:nth(2)').find('td').eq(value).find("button").addClass("btn-primary");
                            $('#slotdata tr:nth(2)').find('td').eq(value).find("button").addClass("btn-success");
                            $('#slotdata tr:nth(2)').find('td').eq(value).find("button").attr('id', filterdata[i].id);
                            $('#slotdata tr:nth(2)').find('td').eq(value).find("button").attr('subjectId', filterdata[i].subjectId);
                            $('#slotdata tr:nth(2)').find('td').eq(value).find("button").attr('subjectTopicId', filterdata[i].subjectTopicId);
                            $('#slotdata tr:nth(2)').find('td').eq(value).find("button").attr('notes', filterdata[i].notes);

                        }
                        else if (filterdata[i].time == datatimezones[2].times && $("#header" + [value]).text() == futDate) {
                            $('#slotdata tr:nth(3)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false).show();
                            //$('#slotdata tr:nth(3)').find('td').eq(value).find("button").addClass("btn-primary");
                            $('#slotdata tr:nth(3)').find('td').eq(value).find("button").addClass("btn-success");
                            $('#slotdata tr:nth(3)').find('td').eq(value).find("button").attr('id', filterdata[i].id);
                            $('#slotdata tr:nth(3)').find('td').eq(value).find("button").attr('subjectId', filterdata[i].subjectId);
                            $('#slotdata tr:nth(3)').find('td').eq(value).find("button").attr('subjectTopicId', filterdata[i].subjectTopicId);
                            $('#slotdata tr:nth(3)').find('td').eq(value).find("button").attr('notes', filterdata[i].notes);
                            // $('#slotdata th:nth(1) tbody td').append("<tr><td> <h2> <button type='button' class='btn btn-outline-success' href='#' data-toggle='popover'>" + 10.30 + " <span>AM</span></button></td></tr>");
                        }
                        else if (filterdata[i].time == datatimezones[3].times && $("#header" + [value]).text() == futDate) {
                            //$("#slotdata").append("<tr><td> <h2> <button type='button'    class='btn btn-outline-success' href='#' data-toggle='popover'>" + 10.30  + " <span>AM</span></button></td></tr>");

                            $('#slotdata tr:nth(4)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false).show();
                            //$('#slotdata tr:nth(4)').find('td').eq(value).find("button").addClass("btn-primary");
                            $('#slotdata tr:nth(4)').find('td').eq(value).find("button").addClass("btn-success");
                            $('#slotdata tr:nth(4)').find('td').eq(value).find("button").attr('id', filterdata[i].id);
                            $('#slotdata tr:nth(4)').find('td').eq(value).find("button").attr('subjectId', filterdata[i].subjectId);
                            $('#slotdata tr:nth(4)').find('td').eq(value).find("button").attr('subjectTopicId', filterdata[i].subjectTopicId);
                            $('#slotdata tr:nth(4)').find('td').eq(value).find("button").attr('notes', filterdata[i].notes);
                            // $('#slotdata th:nth(1) tbody td').append("<tr><td> <h2> <button type='button' class='btn btn-outline-success' href='#' data-toggle='popover'>" + 10.30 + " <span>AM</span></button></td></tr>");

                        }
                        else if (filterdata[i].time == datatimezones[4].times && $("#header" + [value]).text() == futDate) {
                            $('#slotdata tr:nth(5)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false).show();
                            //$('#slotdata tr:nth(5)').find('td').eq(value).find("button").addClass("btn-primary");
                            $('#slotdata tr:nth(5)').find('td').eq(value).find("button").addClass("btn-success");
                            $('#slotdata tr:nth(5)').find('td').eq(value).find("button").attr('id', filterdata[i].id);
                            $('#slotdata tr:nth(5)').find('td').eq(value).find("button").attr('subjectId', filterdata[i].subjectId);
                            $('#slotdata tr:nth(5)').find('td').eq(value).find("button").attr('subjectTopicId', filterdata[i].subjectTopicId);
                            $('#slotdata tr:nth(5)').find('td').eq(value).find("button").attr('notes', filterdata[i].notes);

                        }
                        else if (filterdata[i].time == datatimezones[5].times && $("#header" + [value]).text() == futDate) {
                            $('#slotdata tr:nth(6)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false).show();
                            //$('#slotdata tr:nth(6)').find('td').eq(value).find("button").addClass("btn-primary");
                            $('#slotdata tr:nth(6)').find('td').eq(value).find("button").addClass("btn-success");
                            $('#slotdata tr:nth(6)').find('td').eq(value).find("button").attr('id', filterdata[i].id);
                            $('#slotdata tr:nth(6)').find('td').eq(value).find("button").attr('subjectId', filterdata[i].subjectId);
                            $('#slotdata tr:nth(6)').find('td').eq(value).find("button").attr('subjectTopicId', filterdata[i].subjectTopicId);
                            $('#slotdata tr:nth(6)').find('td').eq(value).find("button").attr('notes', filterdata[i].notes);

                        }





                    });
                    var subject = $("#subject :selected").text();
                    var topic = $("#subjecttype :selected").text();
                    $.ajax({
                        url: '/Student/GetDatesinSchedule',
                        dataType: "json",
                        type: "GET",
                        data: { startdate: startdate, enddate: enddate, id: id, subject: subject, topic: topic },
                        contentType: 'application/json; charset=utf-8',
                        //async: true,
                        //processData: false,
                        //cache: false,
                        success: function (data) {
                            // alert(data);
                            // $('#slotdata tr').find('td').find("button").addClass("btn btn-success").hide();
                            filterdata1 = data;
                            $.each(filterdata1, function (i, item) {
                                var header1 = new Date(filterdata1[i].date);
                                header1.setDate(header1.getDate());
                                var tempoMonth = (header1.getMonth() + 1);
                                var tempoDate = (header1.getDate());
                                if (tempoDate < 10) tempoDate = '0' + tempoDate;
                                if (tempoMonth < 10) tempoMonth = '0' + tempoMonth;
                                var futDate1 = tempoMonth + "/" + tempoDate + "/" + header1.getFullYear();
                                //datetime.push(futDate);
                                var value;
                                //for (var i = 1; i <= 7; i++) {

                                if (futDate1 == $("#header0").text()) {
                                    value = 0;
                                }
                                else
                                    if (futDate1 == $("#header1").text()) {
                                        value = 1;
                                    }
                                    else if (futDate1 == $("#header2").text()) {
                                        value = 2;
                                    }
                                    else if (futDate1 == $("#header3").text()) {
                                        value = 3;
                                    }
                                    else if (futDate1 == $("#header4").text()) {
                                        value = 4;
                                    }
                                    else if (futDate1 == $("#header5").text()) {
                                        value = 5;
                                    }
                                    else if (futDate1 == $("#header6").text()) {
                                        value = 6;
                                    }
                                    else if (futDate1 == $("#header7").text()) {
                                        value = 7;
                                    }
                                //}


                                if (filterdata1[i].time == datatimezones[0].times && $("#header" + [value]).text() == futDate1) {
                                    $('#slotdata tr:nth(1)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
                                    //$('#slotdata tr:nth(1)').find('td').eq(value).find("button").removeClass("btn-primary");
                                    // $('#slotdata tr:nth(1)').find('td').eq(value).find("button").addClass("btn-success").show();
                                    $('#slotdata tr:nth(1)').find('td').eq(value).find("button").removeClass("btn-success");
                                    $('#slotdata tr:nth(1)').find('td').eq(value).find("button").addClass("btn-primary").show();
                                    $('#slotdata tr:nth(1)').find('td').eq(value).find("button").attr('id', filterdata1[i].slotId);

                                }
                                else if (filterdata1[i].time == datatimezones[1].times && $("#header" + [value]).text() == futDate1) {
                                    $('#slotdata tr:nth(2)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
                                    //$('#slotdata tr:nth(2)').find('td').eq(value).find("button").removeClass("btn-primary");
                                    //$('#slotdata tr:nth(2)').find('td').eq(value).find("button").addClass("btn-success").show();
                                    $('#slotdata tr:nth(2)').find('td').eq(value).find("button").removeClass("btn-success");
                                    $('#slotdata tr:nth(2)').find('td').eq(value).find("button").addClass("btn-primary").show();
                                    $('#slotdata tr:nth(2)').find('td').eq(value).find("button").attr('id', filterdata1[i].slotId);

                                }
                                else if (filterdata1[i].time == datatimezones[2].times && $("#header" + [value]).text() == futDate1) {
                                    $('#slotdata tr:nth(3)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
                                    //$('#slotdata tr:nth(3)').find('td').eq(value).find("button").removeClass("btn-primary");
                                    //$('#slotdata tr:nth(3)').find('td').eq(value).find("button").addClass("btn-success").show();
                                    $('#slotdata tr:nth(3)').find('td').eq(value).find("button").removeClass("btn-success");
                                    $('#slotdata tr:nth(3)').find('td').eq(value).find("button").addClass("btn-primary").show();
                                    $('#slotdata tr:nth(3)').find('td').eq(value).find("button").attr('id', filterdata1[i].slotId);
                                    // $('#slotdata th:nth(1) tbody td').append("<tr><td> <h2> <button type='button' class='btn btn-outline-success' href='#' data-toggle='popover'>" + 10.30 + " <span>AM</span></button></td></tr>");
                                }
                                else if (filterdata1[i].time == datatimezones[3].times && $("#header" + [value]).text() == futDate1) {
                                    $('#slotdata tr:nth(4)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
                                    //$('#slotdata tr:nth(4)').find('td').eq(value).find("button").removeClass("btn-primary");
                                    //$('#slotdata tr:nth(4)').find('td').eq(value).find("button").addClass("btn-success").show();
                                    $('#slotdata tr:nth(4)').find('td').eq(value).find("button").removeClass("btn-success");
                                    $('#slotdata tr:nth(4)').find('td').eq(value).find("button").addClass("btn-primary").show();
                                    //$("#slotdata").append("<tr><td> <h2> <button type='button'    class='btn btn-outline-success' href='#' data-toggle='popover'>" + 10.30  + " <span>AM</span></button></td></tr>");


                                    $('#slotdata tr:nth(4)').find('td').eq(value).find("button").attr('id', filterdata1[i].slotId);

                                    // $('#slotdata th:nth(1) tbody td').append("<tr><td> <h2> <button type='button' class='btn btn-outline-success' href='#' data-toggle='popover'>" + 10.30 + " <span>AM</span></button></td></tr>");

                                }
                                else if (filterdata1[i].time == datatimezones[4].times && $("#header" + [value]).text() == futDate1) {
                                    $('#slotdata tr:nth(5)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
                                    //$('#slotdata tr:nth(5)').find('td').eq(value).find("button").removeClass("btn-primary");
                                    //$('#slotdata tr:nth(5)').find('td').eq(value).find("button").addClass("btn-success").show();
                                    $('#slotdata tr:nth(5)').find('td').eq(value).find("button").removeClass("btn-success");
                                    $('#slotdata tr:nth(5)').find('td').eq(value).find("button").addClass("btn-primary").show();
                                    $('#slotdata tr:nth(5)').find('td').eq(value).find("button").attr('id', filterdata1[i].slotId);

                                }
                                else if (filterdata1[i].time == datatimezones[5].times && $("#header" + [value]).text() == futDate1) {
                                    $('#slotdata tr:nth(6)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
                                    //$('#slotdata tr:nth(6)').find('td').eq(value).find("button").removeClass("btn-primary");
                                    //$('#slotdata tr:nth(6)').find('td').eq(value).find("button").addClass("btn-success").show();
                                    $('#slotdata tr:nth(6)').find('td').eq(value).find("button").removeClass("btn-success");
                                    $('#slotdata tr:nth(6)').find('td').eq(value).find("button").addClass("btn-primary").show();
                                    $('#slotdata tr:nth(6)').find('td').eq(value).find("button").attr('id', filterdata1[i].slotId);

                                }





                            });
                            $("#slotdata").show();
                        },
                        error: function (xhr) {
                            alert('error');
                        }
                    });









                },
                error: function (xhr) {
                    alert('error');
                }
            });



        },
        error: function (xhr) {
            alert('error');
        }
    });



    $("#selecttest").typeahead({
        minLength: 1,
        source: function (request, response) {
            //alert($('#selecttest').val());
            $.ajax({
                url: "/Tutor/SearchTutorSubject/",
                data: {
                    //"term": $('#select').val()
                    "term": request,
                    // "id": $("#tutorid").val()
                },
                type: "GET",
                contentType: "json",
                success: function (data) {
                    items = [];
                    map = {};
                    $.each(data, function (i, item) {
                        var id = item.id;
                        var name = item.name;
                        map[name] = {
                            id: id,
                            name: name
                        };
                        items.push(name);
                        //alert($('#searchtermid').val(data[i].id));
                        //  alert($('#selecttest').val(data[i].name));
                    });
                    response(items);
                },
                error: function (response) {
                    alert(response.responseText);
                },
                failure: function (response) {
                    alert(response.responseText);
                }
            });
        },
        updater: function (item) { //If simultaneously want to update value somewhere else
            $("#update").val(map[item].id); return item;
        },

    });

    $('#btnSubmit').click(function () {

        if ($("#selecttest").val() == "") {
            toastr.error('Subject is required..', 'Inconceivable!', { timeOut: 5000 });
            return false;
        }



        var _data = {
            Date: scheduletime,
            Time: time,
            SlotId: $("#slotid").val(),
            SubjectId: $('#getsubject').text(),
            SubjectTopicId: $('#getsubtopic').text(),
            Message: $('#message').val()
        };

        $.ajax({
            cache: false,

            type: "POST",
            async: false,
            url: "/Student/AddandRemoveSchedule",
            dataType: "json",
            data: _data,
            success: function (data) {
                //alert(data.id);
                if (data.success == true) {
                    //$.toast({
                    //    heading: 'Positioning',
                    //    text: 'Use the predefined ones, or specify a custom position object.',
                    //    position: 'top-center',
                    //    stack: false
                    //})
                    toastr.success('Successfully Booked .', 'Success Alert', { timeOut: 5000 })
                    //rowIndex, tdIndex; btn btn-danger
                    //$('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).find("button").removeClass("btn-primary");
                    //$('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).find("button").addClass("btn-success")
                    $('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).find("button").addClass("btn-primary");
                    $('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).find("button").removeClass("btn-success")
                    $("[data-toggle=popover]").popover('hide');
                    $('#myModal').modal('hide');


                }
                else if (data.success == false) {
                    toastr.error('Booked Failed', 'Inconceivable!', { timeOut: 5000 })
                }
                else if (data.success.id != null) {
                    swal("Sorry", "Hi,Your Already Booked for another tutor please choose another one", "error");

                }
            },
            error: function () {
                //alert("Error occured!!")
            }
        });
    });
    $('#btnCancel').click(function () {
        var _data = {
            Date: scheduletime,
            Time: time,
            SlotId: $("#slotid").val()
        };

        $.ajax({
            cache: false,

            type: "POST",
            async: false,
            url: "/Student/AddandRemoveSchedule",
            dataType: "json",
            data: _data,
            success: function (data) {
                //alert(data.id);
                if (data.success == true) {
                    toastr.error('Cancel Failed', 'Inconceivable!', { timeOut: 5000 })



                }
                else {
                    toastr.success('Successfully Cancelled .', 'Success Alert', { timeOut: 5000 })
                    //rowIndex, tdIndex; btn btn-danger
                    //$('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).find("button").removeClass("btn-success");
                    //$('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).find("button").addClass("btn-primary")
                    $('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).find("button").addClass("btn-success");
                    $('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).find("button").removeClass("btn-primary")
                    $("[data-toggle=popover]").popover('hide');
                    $('#myModal').modal('hide');
                }
            },
            error: function () {
                //alert("Error occured!!")
            }
        });
    });





    $("[data-toggle=popover]").popover({
        trigger: "click",
        // trigger: "focus",
        placement: 'bottom',
        html: true,
        content: $('#mySlot').html()
    }).on('click', function (e) {
        if ($(this).hasClass('btn btn-primary btn-success')) {
            //alert('bingo');
            $("#btnSubmit").hide();
            $("#btnCancel").show();
        };


        $('[data-toggle=popover]').not(this).popover('hide');

    })






});

