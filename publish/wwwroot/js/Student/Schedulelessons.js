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

    $('#filter').click();

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
   // var id = $("#tutorid").val();
    var startdate = $('#popupDatepicker').val();
    var enddate = $('#popupDatepicker2').val();
    $("#filter").html("<i class='fa fa-spinner fa-spin'></i>" + '');




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


                //$("#slotdata").append("<tr><td> <h2> <button type='button'    class='btn btn-outline-success' style='width:80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " <span></span></button></h2></td><td> <h2> <button type='button' class='btn btn-outline-success' style='width:80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " <span></span></button></h2></td><td> <h2> <button type='button' class='btn btn-outline-success' style='width:80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " <span></span></button></h2></td><td> <h2> <button type='button' class='btn btn-outline-success' style='width:80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " <span></span></button></h2></td><td> <h2> <button type='button' class='btn btn-outline-success' style='width:80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " <span></span></button></h2></td><td> <h2> <button type='button' class='btn btn-outline-success' style='width:80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " <span></span></button></h2></td><td> <h2> <button type='button' class='btn btn-outline-success' style='width:80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " <span></span></button></h2></td><td> <h2> <button type='button' class='btn btn-outline-success' style='width:80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " <span></span></button></h2></td></tr>");

                $("#slotdata").append("<tr><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + "</button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td></tr>");

            })
            $('body').click(function (e) {
            $('[data-toggle=popover]').each(function () {
                    // hide any open popovers when the anywhere else in the body is clicked
                    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.success').has(e.target).length === 0) {
                        $(this).popover('hide');
                    }
                });
            });
            $('#slotdata tbody td').click(function () {
                // $("#foo").bind("mouseenter mouseleave", function () {
                //rowIndex = $(this).parent().index('#slotdata tbody tr');
                //tdIndex = $(this).index('#slotdata tbody tr:eq(' + rowIndex + ') td');
                var tname = $(this).find('button').attr('tutorname');
                var tsubject = $(this).find('button').attr('tutorsubject');

                //tdIndexa = $('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).text().substring(1, 10);
                //tdIndexa.trim();


                //date = $("#header" + tdIndex).text()

                //$.each(data, function (i, item) {

                //    if (tdIndexa.trim() == data[i].title) {
                //        time = data[i].time;
                //        scheduletime = $("#header" + tdIndex).text() + " " + data[i].time;

                //    }

                //})



                //var idd = $(this).index('#slotdata tbody tr:eq(' + rowIndex + ') td');







                // $("#slotid").val(idd);

                $("#tname").val(tname);
                $("#tsubject").val(tsubject);

                //$('[data-toggle=popover]').each(function () {
                //    // hide any open popovers when the anywhere else in the body is clicked
                //    if (!$(this).is(e.target) && $(this).has(e.target).length === 0 && $('.success').has(e.target).length === 0) {
                //        $(this).popover('hide');
                //    }
                //});

            });

            $("[data-toggle=popover]").popover({
                trigger: "click",
                // trigger: "focus",
                placement: 'bottom',
                html: true,
                content: $('#mySlot').html()
            }).on('click', function (e) {


                $('[data-toggle=popover]').not(this).popover('hide');

            })
       





















            $.ajax({
                url: '/Student/GetSchedulelessonsDates',
                dataType: "json",
                type: "GET",
                data: { startdate: startdate, enddate: enddate },
                contentType: 'application/json; charset=utf-8',
                //async: true,
                //processData: false,
                //cache: false,
                success: function (data) {
                    // alert(data);
                    filterdata = data;
                    var datetime = [];
                    $('#slotdata tr').find('td').find("button").removeClass('btn-outline-success');
                    $('#slotdata tr').find('td').find("button").addClass('btn-warning').prop('disabled', true);
                    $.each(filterdata, function (i, item) {
                        var header1 = new Date(filterdata[i].date);
                        header1.setDate(header1.getDate());
                        var tempoMonth = (header1.getMonth() + 1);
                        var tempoDate = (header1.getDate());
                        if (tempoDate < 10) tempoDate = '0' + tempoDate;
                        if (tempoMonth < 10) tempoMonth = '0' + tempoMonth;
                        var futDate = tempoMonth + "/" + tempoDate + "/" + header1.getFullYear();
                        datetime.push(futDate);
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
                            $('#slotdata tr:nth(1)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
                            $('#slotdata tr:nth(1)').find('td').eq(value).find("button").addClass("btn-success");
                            $('#slotdata tr:nth(1)').find('td').eq(value).find("button").attr('tutorname', filterdata[i].createdBy);
                            $('#slotdata tr:nth(1)').find('td').eq(value).find("button").attr('tutorsubject', filterdata[i].updatedBy);

                        }
                        else if (filterdata[i].time == datatimezones[1].times && $("#header" + [value]).text() == futDate) {
                            $('#slotdata tr:nth(2)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
                            $('#slotdata tr:nth(2)').find('td').eq(value).find("button").addClass("btn-success");
                            $('#slotdata tr:nth(2)').find('td').eq(value).find("button").attr('tutorname', filterdata[i].createdBy);
                            $('#slotdata tr:nth(2)').find('td').eq(value).find("button").attr('tutorsubject', filterdata[i].updatedBy);

                        }
                        else if (filterdata[i].time == datatimezones[2].times && $("#header" + [value]).text() == futDate) {
                            $('#slotdata tr:nth(3)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
                            $('#slotdata tr:nth(3)').find('td').eq(value).find("button").addClass("btn-success");
                            $('#slotdata tr:nth(3)').find('td').eq(value).find("button").attr('tutorname', filterdata[i].createdBy);
                            $('#slotdata tr:nth(3)').find('td').eq(value).find("button").attr('tutorsubject', filterdata[i].updatedBy);

                        }
                        else if (filterdata[i].time == datatimezones[3].times && $("#header" + [value]).text() == futDate) {
                            $('#slotdata tr:nth(4)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
                            $('#slotdata tr:nth(4)').find('td').eq(value).find("button").addClass("btn-success");
                            $('#slotdata tr:nth(4)').find('td').eq(value).find("button").attr('tutorname', filterdata[i].createdBy);
                            $('#slotdata tr:nth(4)').find('td').eq(value).find("button").attr('tutorsubject', filterdata[i].updatedBy);

                        }
                        else if (filterdata[i].time == datatimezones[4].times && $("#header" + [value]).text() == futDate) {
                            $('#slotdata tr:nth(5)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
                            $('#slotdata tr:nth(5)').find('td').eq(value).find("button").addClass("btn-success");
                            $('#slotdata tr:nth(5)').find('td').eq(value).find("button").attr('tutorname', filterdata[i].createdBy);
                            $('#slotdata tr:nth(5)').find('td').eq(value).find("button").attr('tutorsubject', filterdata[i].updatedBy);

                        }
                        else if (filterdata[i].time == datatimezones[5].times && $("#header" + [value]).text() == futDate) {
                            $('#slotdata tr:nth(6)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
                            $('#slotdata tr:nth(6)').find('td').eq(value).find("button").addClass("btn-success");
                            $('#slotdata tr:nth(6)').find('td').eq(value).find("button").attr('tutorname', filterdata[i].createdBy);
                            $('#slotdata tr:nth(6)').find('td').eq(value).find("button").attr('tutorsubject', filterdata[i].updatedBy);

                        }





                    });




                    $("#slotdata").show();
                    $('#filter').html("Show");




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











































    //$.ajax({
    //    url: '/Student/GetSchedulelessonsDates',
    //    dataType: "json",
    //    type: "GET",
    //    data: { startdate: startdate, enddate: enddate },
    //    contentType: 'application/json; charset=utf-8',
    //    //async: true,
    //    //processData: false,
    //    //cache: false,
    //    success: function (data) {
    //        // alert(data);
    //        filterdata = data;
    //        var datetime = [];
    //        $('#slotdata tr').find('td').find("button").removeClass('btn-outline-success');
    //        $('#slotdata tr').find('td').find("button").addClass('btn-warning').prop('disabled', true);
    //        $.each(filterdata, function (i, item) {
    //            var header1 = new Date(filterdata[i].date);
    //            header1.setDate(header1.getDate());
    //            var tempoMonth = (header1.getMonth() + 1);
    //            var tempoDate = (header1.getDate());
    //            if (tempoDate < 10) tempoDate = '0' + tempoDate;
    //            if (tempoMonth < 10) tempoMonth = '0' + tempoMonth;
    //            var futDate = tempoMonth + "/" + tempoDate + "/" + header1.getFullYear();
    //            datetime.push(futDate);
    //            var value;
    //            //for (var i = 1; i <= 7; i++) {

    //            if (futDate == $("#header0").text()) {
    //                value = 0;
    //            }
    //            else
    //                if (futDate == $("#header1").text()) {
    //                    value = 1;
    //                }
    //                else if (futDate == $("#header2").text()) {
    //                    value = 2;
    //                }
    //                else if (futDate == $("#header3").text()) {
    //                    value = 3;
    //                }
    //                else if (futDate == $("#header4").text()) {
    //                    value = 4;
    //                }
    //                else if (futDate == $("#header5").text()) {
    //                    value = 5;
    //                }
    //                else if (futDate == $("#header6").text()) {
    //                    value = 6;
    //                }
    //                else if (futDate == $("#header7").text()) {
    //                    value = 7;
    //                }
    //            //}


    //            if (filterdata[i].time == "09:00:00.000" && $("#header" + [value]).text() == futDate) {
    //                $('#slotdata tr:nth(1)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
    //                $('#slotdata tr:nth(1)').find('td').eq(value).find("button").addClass("btn-success");
    //                $('#slotdata tr:nth(1)').find('td').eq(value).find("button").attr('tutorname', filterdata[i].createdBy);
    //                $('#slotdata tr:nth(1)').find('td').eq(value).find("button").attr('tutorsubject', filterdata[i].updatedBy);

    //            }
    //            else if (filterdata[i].time == "09:30:00.000" && $("#header" + [value]).text() == futDate) {
    //                $('#slotdata tr:nth(2)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
    //                $('#slotdata tr:nth(2)').find('td').eq(value).find("button").addClass("btn-success");
    //                $('#slotdata tr:nth(2)').find('td').eq(value).find("button").attr('tutorname', filterdata[i].createdBy);
    //                $('#slotdata tr:nth(2)').find('td').eq(value).find("button").attr('tutorsubject', filterdata[i].updatedBy);

    //            }
    //            else if (filterdata[i].time == "10:00:00.000" && $("#header" + [value]).text() == futDate) {
    //                $('#slotdata tr:nth(3)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
    //                $('#slotdata tr:nth(3)').find('td').eq(value).find("button").addClass("btn-success");
    //                $('#slotdata tr:nth(3)').find('td').eq(value).find("button").attr('tutorname', filterdata[i].createdBy);
    //                $('#slotdata tr:nth(3)').find('td').eq(value).find("button").attr('tutorsubject', filterdata[i].updatedBy);

    //            }
    //            else if (filterdata[i].time == "10:30:00.000" && $("#header" + [value]).text() == futDate) {
    //                $('#slotdata tr:nth(4)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
    //                $('#slotdata tr:nth(4)').find('td').eq(value).find("button").addClass("btn-success");
    //                $('#slotdata tr:nth(4)').find('td').eq(value).find("button").attr('tutorname', filterdata[i].createdBy);
    //                $('#slotdata tr:nth(4)').find('td').eq(value).find("button").attr('tutorsubject', filterdata[i].updatedBy);

    //            }
    //            else if (filterdata[i].time == "11:00:00.000" && $("#header" + [value]).text() == futDate) {
    //                $('#slotdata tr:nth(5)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
    //                $('#slotdata tr:nth(5)').find('td').eq(value).find("button").addClass("btn-success");
    //                $('#slotdata tr:nth(5)').find('td').eq(value).find("button").attr('tutorname', filterdata[i].createdBy);
    //                $('#slotdata tr:nth(5)').find('td').eq(value).find("button").attr('tutorsubject', filterdata[i].updatedBy);

    //            }
    //            else if (filterdata[i].time == "11:30:00.000" && $("#header" + [value]).text() == futDate) {
    //                $('#slotdata tr:nth(6)').find('td').eq(value).find("button").removeClass("btn-warning").prop('disabled', false);
    //                $('#slotdata tr:nth(6)').find('td').eq(value).find("button").addClass("btn-success");
    //                $('#slotdata tr:nth(6)').find('td').eq(value).find("button").attr('tutorname', filterdata[i].createdBy);
    //                $('#slotdata tr:nth(6)').find('td').eq(value).find("button").attr('tutorsubject', filterdata[i].updatedBy);

    //            }





    //        });




    //        $("#slotdata").show();
    //        $('#filter').html("Show");




    //    },
    //    error: function (xhr) {
    //        alert('error');
    //    }
    //});








});

