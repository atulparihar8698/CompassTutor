var time;
var date;
var tdIndexa; 
var filterdata;
var datatimezones;
var timezonetitle;
var rowIndex;
var tdIndex;
var scheduletime;
var note;
var subid;
var subtypeid;
$(function () {
    //$('#popupDatepicker').datepick();
    var date = new Date();
    date.setDate(date.getDate());
    var tempoMonth = (date.getMonth() + 1);
    var tempoDate = (date.getDate());
    if (tempoDate < 10) tempoDate = '0' + tempoDate;
    if (tempoMonth < 10) tempoMonth = '0' + tempoMonth;
    var futDate = tempoMonth + "/" + tempoDate + "/" + date.getFullYear();
    $('#popupDatepicker').val(futDate);
    var date = new Date();
    date.setDate(date.getDate()+7);
    var tempoMonth = (date.getMonth() + 1);
    var tempoDate = (date.getDate());
    if (tempoDate < 10) tempoDate = '0' + tempoDate;
    if (tempoMonth < 10) tempoMonth = '0' + tempoMonth;
    var futDate = tempoMonth + "/" + tempoDate + "/" + date.getFullYear();
    $('#popupDatepicker2').val(futDate);
    $('#filter').click(); 
    //$('#popupDatepicker').datepick({ onSelect: showDate, minDate: new Date() });
    $('.test').datetimepicker({
        //onSelect: showDate, minDate: new Date(),
        format: 'MM/DD/YYYY',
       

        minDate:  moment().subtract(1, 'd'),
       
    });
    $('.test').on("dp.change", function () {
        console.log("testing");
        var startdate = $('#popupDatepicker').val();
        showDate(startdate);
    });



    $("#subject").select2({
        placeholder: "Select a Subject",
        allowClear: true
    });
    $("#subjecttype").select2({
        placeholder: "Select a Topic",
        allowClear: true
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


$('#popupDatepicker').bind('dpClosed', function (e, selectedDates) {
    var d = selectedDates[0];
    if (d) {
        d = new Date(d);
        $('#popupDatepicker2').dpSetStartDate(d.addDays(1).asString()).dpSetSelected(d.asString()).val($(this).val());
    }
});


$("#filter").click(function () {
    if ($('#popupDatepicker').val() == "") {
        toastr.error('Please Select the From Date', 'Inconceivable!', { timeOut: 5000 });
        return false;
    }



    var startdate = $('#popupDatepicker').val();
    var enddate = $('#popupDatepicker2').val();

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
            $("#slotdata").show();
            //var someRow = "<tr class='someClass'><th id='day0'></th><th id='day1'></th><th id='day2'></th><th id='day3'></th><th id='day4'></th><th id='day5'></th><th id='day6'></th><th id='day7'></th></tr>"; // add resources
            var someRow1 = "<tr class='someClass'><th id='header0'></th><th id='header1'></th><th id='header2'></th><th id='header3'></th><th id='header4'></th><th id='header5'></th><th id='header6'></th><th id='header7'></th></tr>"; // add resources
            var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            //$("#slotdata").append(someRow);


            $("#slotdata").append(someRow1);
            var date = $('#popupDatepicker').val();
            var a = new Date(date);

            var wee = weekday[a.getDay()];
            $(".specialClass").text(wee);
            $("#header0").text(date);



            var header1 = new Date(date);
            header1.setDate(header1.getDate() + 1);
            var tempoMonth = (header1.getMonth() + 1);
            var tempoDate = (header1.getDate());
            if (tempoDate < 10) tempoDate = '0' + tempoDate;
            if (tempoMonth < 10) tempoMonth = '0' + tempoMonth;
            var futDate = tempoMonth + "/" + tempoDate + "/" + header1.getFullYear();
            var a = new Date(futDate);
            var wee = weekday[a.getDay()];
            $("#day1").text(wee);
            $("#header1").text(futDate);


            var header2 = new Date(date);
            header2.setDate(header2.getDate() + 2);
            var tempoMonth2 = (header2.getMonth() + 1);
            var tempoDate2 = (header2.getDate());
            if (tempoDate2 < 10) tempoDate2 = '0' + tempoDate2;
            if (tempoMonth2 < 10) tempoMonth2 = '0' + tempoMonth2;
            var fulldate = tempoMonth2 + "/" + tempoDate2 + "/" + header2.getFullYear();
            //var a = new Date(fulldate);
            //var wee = weekday[a.getDay()];
            //$("#day2").text(wee);
            $("#header2").text(fulldate);


            var header3 = new Date(date);
            header3.setDate(header3.getDate() + 3);
            var tempoMonth3 = (header3.getMonth() + 1);
            var tempoDate3 = (header3.getDate());
            if (tempoDate3 < 10) tempoDate3 = '0' + tempoDate3;
            if (tempoMonth3 < 10) tempoMonth3 = '0' + tempoMonth3;
            var fulldate3 = tempoMonth3 + "/" + tempoDate3 + "/" + header3.getFullYear();
            //var a = new Date(fulldate3);
            //var wee = weekday[a.getDay()];
            //$("#day3").text(wee);
            $("#header3").text(fulldate3);



            var header4 = new Date(date);
            header4.setDate(header4.getDate() + 4);
            var tempoMonth4 = (header4.getMonth() + 1);
            var tempoDate4 = (header4.getDate());
            if (tempoDate4 < 10) tempoDate4 = '0' + tempoDate4;
            if (tempoMonth4 < 10) tempoMonth4 = '0' + tempoMonth4;
            var fulldate4 = tempoMonth4 + "/" + tempoDate4 + "/" + header4.getFullYear();
            //var a = new Date(fulldate4);
            //var wee = weekday[a.getDay()];
            //$("#day4").text(wee);
            $("#header4").text(fulldate4);


            var header5 = new Date(date);
            header5.setDate(header5.getDate() + 5);
            var tempoMonth5 = (header5.getMonth() + 1);
            var tempoDate5 = (header5.getDate());
            if (tempoDate5 < 10) tempoDate5 = '0' + tempoDate5;
            if (tempoMonth5 < 10) tempoMonth5 = '0' + tempoMonth5;
            var fulldate5 = tempoMonth5 + "/" + tempoDate5 + "/" + header5.getFullYear();
            //var a = new Date(fulldate5);
            //var wee = weekday[a.getDay()];
            //$("#day5").text(wee);
            $("#header5").text(fulldate5);

            var header6 = new Date(date);
            header6.setDate(header6.getDate() + 6);
            var tempoMonth6 = (header6.getMonth() + 1);
            var tempoDate6 = (header6.getDate());
            if (tempoDate6 < 10) tempoDate6 = '0' + tempoDate6;
            if (tempoMonth6 < 10) tempoMonth6 = '0' + tempoMonth6;
            var fulldate6 = tempoMonth6 + "/" + tempoDate6 + "/" + header6.getFullYear();
            var a = new Date(fulldate6);
            var wee = weekday[a.getDay()];
            $("#day6").text(wee);
            $("#header6").text(fulldate6);
            var header7 = new Date(date);
            header7.setDate(header7.getDate() + 7);
            var tempoMonth7 = (header7.getMonth() + 1);
            var tempoDate7 = (header7.getDate());
            if (tempoDate7 < 10) tempoDate7 = '0' + tempoDate7;
            if (tempoMonth7 < 10) tempoMonth7 = '0' + tempoMonth7;
            var fulldate7 = tempoMonth7 + "/" + tempoDate7 + "/" + header7.getFullYear();
            //var a = new Date(fulldate7);
            //var wee = weekday[a.getDay()];
            //$("#day7").text(wee);
            $("#header7").text(fulldate7);







             //var data = [
    //    { "time": "09:00:00.000", "title": "9 AM" },
    //    { "time": "09:30:00.000", "title": "9.30 AM" },
    //    { "time": "10:00:00.000", "title": "10 AM" },
    //    { "time": "10:30:00.000", "title": "10.30 AM" },
    //    { "time": "11:00:00.000", "title": "11 AM" },
    //    { "time": "11:30:00.000", "title": "11.30 AM" }
    //];

    $.each(datatimezones, function (i, item) {

        
        $("#slotdata").append("<tr><td><button type='button' class='btn btn-outline-primary empty' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-primary empty' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-primary empty' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-primary empty' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-primary empty' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-primary empty' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-primary empty' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-primary empty' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td></tr>");
       //$("#slotdata").append("<tr><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + "</button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td><td><button type='button' class='btn btn-outline-success' style='padding:5px;width: 80px;' href='#' data-toggle='popover'>" + datatimezones[i].title + " </button></td></tr>");


    })

            $('#subject').on('change', function () {
                var subjectid = $(this).val();
                if (subjectid) {
                    $.ajax({
                        type: "GET",
                        url: "/tutor/GetSubjectTypes/" + subjectid,
                        success: function (data) {
                            $('#subjecttype').html("");
                            $('#subjecttype').append('<option value="">Select</option>');

                            $.each(data, function (index, value) {
                                $('#subjecttype').append('<option value="' + value.id + '">' + value.name + '</option>');
                            });
                            $("#subjecttype").val($("#subjecttype").attr("subjectTopicId")).change();
                            $("#subjecttype").removeAttr("subjectTopicId")
                        }
                    });
                } else {
                    $('#subjecttype').append('<option value="">Select</option>');

                }
            });

            $('#slotdata tbody td').click(function () {

                rowIndex = $(this).parent().index('#slotdata tbody tr');
                tdIndex = $(this).index('#slotdata tbody tr:eq(' + rowIndex + ') td');

                tdIndexa = $('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).text().substring(0, 10);
                tdIndexa.trim();

                date = $("#header" + tdIndex).text()

                $.each(datatimezones, function (i, item) {

                    if (tdIndexa.trim() == datatimezones[i].title) {
                        time = datatimezones[i].times;
                        scheduletime = $("#header" + tdIndex).text() + " " + datatimezones[i].times;
                    }

                })
                // alert(scheduletime);

                $("#time").text(tdIndexa);
                $("#date").text(date);
                if ($(this).find('button').hasClass('empty')) {
                    $('#myModal').modal();
                    $("#btnSubmit").show();
                    $("#btnCancel").hide();
                    $('#subject').html("");
                    $('#subjecttype').html("");
                    $('#subject').append('<option value="">Select</option>');
                    $('#subjecttype').append('<option value="">Select</option>');
                    //$("#subject").val("").change();
                    //$("#subjecttype").val("").change();
                    //$("#subject option").val("").change();
                    // $("#subjecttype option").val("").change();
                    //$("#subject option[value='']").remove();
                    // $("#subjecttype option[value='']").remove();

                    $('#message').val("");


                    //$.ajax({
                    //    type: "GET",
                    //    url: "/tutor/GetSubjects",
                    //    success: function (data) {
                    //        console.log(data);
                    //        $.each(data, function (index, value) {
                    //            $("#subject").append('<option value="' + value.id + '">' + value.name + '</option>');
                    //        });

                    //    }
                    //});
                    $.ajax({
                        type: "GET",
                        url: "/tutor/GetTutorSubjects",
                        success: function (data) {
                            console.log(data);
                            $.each(data, function (index, value) {
                                $("#subject").append('<option value="' + value.id + '">' + value.name + '</option>');
                            });

                        }
                    });


                }
                else if ($(this).find('button').hasClass('full')) {
                    $('#myModal').modal();
                    $("#btnSubmit").hide();
                    $("#btnCancel").show();
                    $('#subject').html("");
                    $('#subjecttype').html("");
                    $('#subject').append('<option value="">Select</option>');
                    $('#subjecttype').append('<option value="">Select</option>');
                    //$("#subject").val("").change();
                    //$("#subjecttype").val("").change();
                    //$("#subject option").val("").change();
                    //$("#subjecttype option").val("").change();

                    subid = $(this).attr('subjectId');
                    subtypeid = $(this).attr('subjectTopicId');
                    note = $(this).attr('notes');

                    $("#message").val(note);
                    // $("#subject").remove();
                    // $("#subjecttype").remove();
                    var startDateTime = scheduletime;
                    var startTime = time;




                    $.ajax({
                        url: '/Tutor/GetBookingTutorSlots',
                        dataType: "json",
                        type: "GET",
                        data: { startDateTime: startDateTime, startTime: startTime },
                        contentType: 'application/json; charset=utf-8',
                        //async: true,
                        //processData: false,
                        //cache: false,
                        success: function (sdata) {
                            $("#message").val(sdata.notes);

                            // alert(data);
                            $.ajax({
                                type: "GET",
                                url: "/tutor/GetSubjects",
                                success: function (datasub) {
                                    console.log(datasub);
                                    $.each(datasub, function (index, value) {
                                        $("#subject").append('<option value="' + value.id + '">' + value.name + '</option>');

                                    });
                                    $("#subject").val(sdata.subjectId).change();
                                    $('#subjecttype').attr("subjectTopicId", sdata.subjectTopicId);
                                    // $("#subject").val(slotdata.subjectId).change();
                                    //$("#subject > [value=" + data.subjectId + "]").attr("selected", "true");

                                }
                            });
                            //$.ajax({
                            //    type: "GET",
                            //    url: "/tutor/GetSubjectTypes/ " + sdata.subjectId,
                            //    success: function (datatopic) {
                            //        $.each(datatopic, function (index, value) {
                            //            $('#subjecttype').append('<option value="' + value.id + '">' + value.name + '</option>');
                            //        });

                            //        $("#subjecttype").val(sdata.subjectTopicId).change();
                            //    }
                            //});
                        },
                        error: function (xhr) {
                            alert('error');
                        }
                    });


                }


                else if ($(this).find('button').hasClass('btn_student_book')) {
                    $('#myModal').modal();
                    $("#btnSubmit").hide();
                    $("#btnCancel").show();
                    // $("#message").val(note);
                    $('#subject').html("");
                    $('#subjecttype').html("");
                    $('#subject').append('<option value="">Select</option>');
                    $('#subjecttype').append('<option value="">Select</option>');

                    var startDateTime = scheduletime;
                    var startTime = time;

                    $.ajax({
                        url: '/Tutor/GetBookingTutorSlots',
                        dataType: "json",
                        type: "GET",
                        data: { startDateTime: startDateTime, startTime: startTime },
                        contentType: 'application/json; charset=utf-8',
                        //async: true,
                        //processData: false,
                        //cache: false,
                        success: function (slotdata) {
                            $("#message").val(slotdata.notes);
                            // alert(data);
                            $.ajax({
                                type: "GET",
                                url: "/tutor/GetSubjects",
                                success: function (subdata) {
                                    console.log(data);
                                    $.each(subdata, function (index, value) {
                                        $("#subject").append('<option value="' + value.id + '">' + value.name + '</option>');

                                    });
                                    $('#subjecttype').attr("subjectTopicId", slotdata.subjectTopicId);
                                    $("#subject").val(slotdata.subjectId).change();
                                    // $("#subject > [value=" + data.subjectId + "]").attr("selected", "true");

                                }
                            });
                            //$.ajax({
                            //    type: "GET",
                            //    url: "/tutor/GetSubjectTypes/ " + slotdata.subjectId,
                            //    success: function (subtypedata) {
                            //        $.each(subtypedata, function (index, value) {
                            //            $('#subjecttype').append('<option value="' + value.id + '">' + value.name + '</option>');
                            //        });
                            //        $("#subjecttype").val(slotdata.subjectTopicId).change();
                            //       // $("#subjecttype > [value=" + data.subjectTopicId + "]").attr("selected", "true");
                            //    }
                            //});
                        },
                        error: function (xhr) {
                            alert('error');
                        }
                    });
                }

            });

            $.ajax({
                url: '/Tutor/GetDates',
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
                    $.each(filterdata, function (i, item) {
                        var header1 = new Date(filterdata[i].scheduleDateTime);
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
                            $('#slotdata tr:nth(1)').find('td').eq(value).find("button").removeClass("btn-outline-primary empty");
                            $('#slotdata tr:nth(1)').find('td').eq(value).find("button").addClass("btn btn-primary full");
                            $('#slotdata tr:nth(1)').find('td').eq(value).find("button").attr('subjectId', filterdata[i].subjectId);
                            $('#slotdata tr:nth(1)').find('td').eq(value).find("button").attr('subjectTopicId', filterdata[i].subjectTopicId);
                            $('#slotdata tr:nth(1)').find('td').eq(value).find("button").attr('notes', filterdata[i].notes);



                        }
                        else if (filterdata[i].time == datatimezones[1].times && $("#header" + [value]).text() == futDate) {
                            $('#slotdata tr:nth(2)').find('td').eq(value).find("button").removeClass("btn-outline-primary empty");
                            $('#slotdata tr:nth(2)').find('td').eq(value).find("button").addClass("btn btn-primary full");
                            $('#slotdata tr:nth(2)').find('td').eq(value).find("button").attr('subjectId', filterdata[i].subjectId);
                            $('#slotdata tr:nth(2)').find('td').eq(value).find("button").attr('subjectTopicId', filterdata[i].subjectTopicId);
                            $('#slotdata tr:nth(2)').find('td').eq(value).find("button").attr('notes', filterdata[i].notes);

                        }
                        else if (filterdata[i].time == datatimezones[2].times && $("#header" + [value]).text() == futDate) {
                            $('#slotdata tr:nth(3)').find('td').eq(value).find("button").removeClass("btn-outline-primary empty");
                            $('#slotdata tr:nth(3)').find('td').eq(value).find("button").addClass("btn btn-primary full");
                            $('#slotdata tr:nth(3)').find('td').eq(value).find("button").attr('subjectId', filterdata[i].subjectId);
                            $('#slotdata tr:nth(3)').find('td').eq(value).find("button").attr('subjectTopicId', filterdata[i].subjectTopicId);
                            $('#slotdata tr:nth(3)').find('td').eq(value).find("button").attr('notes', filterdata[i].notes);

                        }
                        else if (filterdata[i].time == datatimezones[3].times && $("#header" + [value]).text() == futDate) {
                            $('#slotdata tr:nth(4)').find('td').eq(value).find("button").removeClass("btn-outline-primary empty");
                            $('#slotdata tr:nth(4)').find('td').eq(value).find("button").addClass("btn btn-primary full");
                            $('#slotdata tr:nth(4)').find('td').eq(value).find("button").attr('subjectId', filterdata[i].subjectId);
                            $('#slotdata tr:nth(4)').find('td').eq(value).find("button").attr('subjectTopicId', filterdata[i].subjectTopicId);
                            $('#slotdata tr:nth(4)').find('td').eq(value).find("button").attr('notes', filterdata[i].notes);

                        }
                        else if (filterdata[i].time == datatimezones[4].times && $("#header" + [value]).text() == futDate) {
                            $('#slotdata tr:nth(5)').find('td').eq(value).find("button").removeClass("btn-outline-primary empty");
                            $('#slotdata tr:nth(5)').find('td').eq(value).find("button").addClass("btn btn-primary full");
                            $('#slotdata tr:nth(5)').find('td').eq(value).find("button").attr('subjectId', filterdata[i].subjectId);
                            $('#slotdata tr:nth(5)').find('td').eq(value).find("button").attr('subjectTopicId', filterdata[i].subjectTopicId);
                            $('#slotdata tr:nth(5)').find('td').eq(value).find("button").attr('notes', filterdata[i].notes);

                        }
                        else if (filterdata[i].time == datatimezones[5].times && $("#header" + [value]).text() == futDate) {
                            $('#slotdata tr:nth(6)').find('td').eq(value).find("button").removeClass("btn-outline-primary empty");
                            $('#slotdata tr:nth(6)').find('td').eq(value).find("button").addClass("btn btn-primary full");
                            $('#slotdata tr:nth(6)').find('td').eq(value).find("button").attr('subjectId', filterdata[i].subjectId);
                            $('#slotdata tr:nth(6)').find('td').eq(value).find("button").attr('subjectTopicId', filterdata[i].subjectTopicId);
                            $('#slotdata tr:nth(6)').find('td').eq(value).find("button").attr('notes', filterdata[i].notes);

                        }





                    });




                    $.ajax({
                        url: '/Tutor/GetStudentBookedDates',
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
                                    $('#slotdata tr:nth(1)').find('td').eq(value).find("button").removeClass("btn-outline-primary btn-primary full").prop('disabled', false).show();
                                    $('#slotdata tr:nth(1)').find('td').eq(value).find("button").addClass("btn_student_book")

                                }
                                else if (filterdata[i].time == datatimezones[1].times && $("#header" + [value]).text() == futDate) {
                                    $('#slotdata tr:nth(2)').find('td').eq(value).find("button").removeClass("btn-outline-primary btn-primary full").prop('disabled', false).show();
                                    $('#slotdata tr:nth(2)').find('td').eq(value).find("button").addClass("btn_student_book")

                                }
                                else if (filterdata[i].time == datatimezones[2].times && $("#header" + [value]).text() == futDate) {
                                    $('#slotdata tr:nth(3)').find('td').eq(value).find("button").removeClass("btn-outline-primary btn-primary full").prop('disabled', false).show();

                                    $('#slotdata tr:nth(3)').find('td').eq(value).find("button").addClass("btn_student_book")

                                }
                                else if (filterdata[i].time == datatimezones[3].times && $("#header" + [value]).text() == futDate) {
                                    $('#slotdata tr:nth(4)').find('td').eq(value).find("button").removeClass("btn-outline-primary btn-primary full").prop('disabled', false).show();
                                    $('#slotdata tr:nth(4)').find('td').eq(value).find("button").addClass("btn_student_book")

                                }
                                else if (filterdata[i].time == datatimezones[4].times && $("#header" + [value]).text() == futDate) {
                                    $('#slotdata tr:nth(5)').find('td').eq(value).find("button").removeClass("btn-outline-primary btn-primary full").prop('disabled', false).show();
                                    $('#slotdata tr:nth(5)').find('td').eq(value).find("button").addClass("btn_student_book")

                                }
                                else if (filterdata[i].time == datatimezones[5].times && $("#header" + [value]).text() == futDate) {
                                    $('#slotdata tr:nth(6)').find('td').eq(value).find("button").removeClass("btn-outline-primary btn-primary full").prop('disabled', false).show();
                                    $('#slotdata tr:nth(6)').find('td').eq(value).find("button").addClass("btn_student_book")

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

        },
        error: function (xhr) {
            alert('error');
        }
    });


    $('#btnSubmit').click(function () {
       
        
        if ($('#subject').val() == "" ) {
            toastr.error('Please Select the Subject', 'Inconceivable!', { timeOut: 200 });
            return false;
        }
        if ($('#subjecttype').val() == "") {
            toastr.error('Please Select the Topic', 'Inconceivable!', { timeOut: 200 });
            return false;
        }



        var _data = {
            ScheduleDateTime: scheduletime,
            Time: time,
            TutorId: 2,
            SubjectId: $("#subject").val(),
            SubjectTopicId: $("#subjecttype").val(),
            Notes:$("#message").val(),
        };

        $.ajax({
            cache: false,

            type: "POST",
            async: false,
            url: "/Tutor/AddandRemoveSchedule",
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
                    $('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).find("button").removeClass("empty");
                    $('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).find("button").addClass("btn-primary full")
                    $("[data-toggle=popover]").popover('hide');
                    $('#myModal').modal('hide');


                }
                else {
                    toastr.error('Booked Failed', 'Inconceivable!', { timeOut: 5000 })
                }
            },
            error: function () {
                //alert("Error occured!!")
            }
        });
    });
    $('#btnCancel').click(function () {
        if ($('#slotdata tbody td').find('button').hasClass('btn btn_student_book')) {
            swal({
                title: "Are you sure?",
                text: "Once cancelled, you will not be able to recover the slot!",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
                .then((willDelete) => {

                    if (willDelete) {
                        var _data = {
                            ScheduleDateTime: scheduletime,
                            Time: time,
                            TutorId: 2,
                            SubjectId: $("#subject").val(),
                            SubjectTopicId: $("#subjecttype").val(),
                            Notes: $("#message").val(),
                        };

                        $.ajax({
                            cache: false,

                            type: "POST",
                            async: false,
                            url: "/Tutor/AddandRemoveSchedule",
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
                                    $('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).find("button").removeClass("btn-primary full");
                                    $('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).find("button").removeClass("btn_student_book");
                                    $('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).find("button").addClass("btn-outline-primary empty")
                                    $("[data-toggle=popover]").popover('hide');
                                    $('#myModal').modal('hide');
                                }
                            },
                            error: function () {
                                //alert("Error occured!!")
                            }
                        });
                        swal("Successfully Cancelled", {

                            icon: "success",
                        });
                    } else {
                        swal("Slot not cancelled");
                        $('#myModal').modal('hide');
                    }
                });
        }
        else {
            var _data = {
                ScheduleDateTime: scheduletime,
                Time: time,
                TutorId: 2,
                SubjectId: $("#subject").val(),
                SubjectTopicId: $("#subjecttype").val(),
                Notes: $("#message").val(),
            };

            $.ajax({
                cache: false,

                type: "POST",
                async: false,
                url: "/Tutor/AddandRemoveSchedule",
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
                        $('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).find("button").removeClass("btn-primary full");
                        $('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).find("button").removeClass("btn_student_book");
                        $('#slotdata tr:nth(' + rowIndex + ')').find('td').eq(tdIndex).find("button").addClass("btn-outline-primary empty")
                        $("[data-toggle=popover]").popover('hide');
                        $('#myModal').modal('hide');
                    }
                },
                error: function () {
                    //alert("Error occured!!")
                }
            });
        }
       
    });

});




