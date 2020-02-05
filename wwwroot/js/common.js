$(document).ready(function () {


    $.ajax({
        type: "GET",
        url: "/common/GetTimeZones",
        success: function (data) {
            console.log(data);
            $.each(data, function (index, value) {
                $("#timezone").append('<option value="' + value.id + '">' + value.name + '</option>');
            });
            $("#timezone").val($("#timezone").attr("timeZoneId")).change();
            $("#timezone").removeAttr("timeZoneId")
        }
    });
    $.ajax({
        type: "GET",
        url: "/common/getcountries",
        success: function (data) {
            console.log(data);
            $.each(data, function (index, value) {
                $("#country").append('<option value="' + value.id + '">' + value.name + '</option>');
            });
            $("#country").val($("#country").attr("countryId")).change();
            //$("#country option[value='" + 231 + "']").prop("selected", true).change();
            $("#country").removeAttr("countryId")
        }
    });
  


    $('#country').on('change', function () {
        var countryID = $(this).val();
        if (countryID) {
            $.ajax({
                type: "GET",
                url: "/common/getstates/" + countryID,
                success: function (data) {
                    $('#state').html("");
                    $('#state').append('<option value="">Select</option>');
                    $('#city').html("");
                    $('#city').append('<option value="">Select</option>');
                    $.each(data, function (index, value) {
                        $('#state').append('<option value="' + value.id + '">' + value.name + '</option>');
                    });

                    $("#state").val($("#state").attr("stateId")).change();
                    $("#state").removeAttr("stateId")
                }
            });
        } else {
            $('#state').append('<option value="">Select</option>');
            $('#city').append('<option value="">Select</option>');
        }
    });

    $('#state').on('change', function () {
        var stateID = $(this).val();
        if (stateID != null && stateID != '') {
            $('#addNewCity').show();
        }
        else {
            $('#addNewCity').hide();
        }
        //$('#addNewCity').show();
        if (stateID) {
            $.ajax({
                type: "GET",
                url: "/common/getcities/" + stateID,
                success: function (data) {
                    $('#city').html("");
                    $('#city').append('<option value="">Select</option>');
                    $.each(data, function (index, value) {
                        $('#city').append('<option value="' + value.id + '">' + value.name + '</option>');
                    });
                    $("#city").val($("#city").attr("cityId")).change();
                    $("#city").removeAttr("cityId")
                }
            });
        } else {
            $('#city').append('<option value="">Select</option>');
        }
    });

  
    $.ajax({
        type: "GET",
        url: "/tutor/GetSubjects",
        success: function (data) {
            console.log(data);
            $.each(data, function (index, value) {
                $("#subject").append('<option value="' + value.id + '">' + value.name + '</option>');
            });

            //$("#subject").val($("#subject").attr("subjectId")).change();
            var dataa = $("#subject").attr("subjectId");
            $.each(dataa.split(","), function (i, e) {
                $("#subject option[value='" + e + "']").prop("selected", true);

            });
            $("#subject").removeAttr("subjectId")
        }
    });
    $('#subject').on('change', function () {
        var subjectids = $('#subject :selected').toArray().map(item => item.value).join();
        //alert(subjectids)
        //var subjectid = $(this).val();
        //if (subjectid) {
        if (subjectids) {
            $.ajax({
                type: "GET",
                //url: "/tutor/GetSubjectTypes/" + subjectid,
                url: "/tutor/GetSubjectTypes/" + subjectids,
                success: function (data) {
                    $('#subjecttype').html("");
                    $('#subjecttype').append('<option value="">Select</option>');

                    $.each(data, function (index, value) {
                        $('#subjecttype').append('<option value="' + value.id + '">' + value.name + '</option>');
                    });

                    //var dataa1 = $("#subjecttype").attr("subjectTypeId");
                    //$.each(dataa1.split(","), function (i, e) {
                    //    $("#subjecttype option[value='" + e + "']").prop("selected", true);

                    //});
                    //$("#subjecttype").removeAttr("subjectTypeId")

                }
            });
        } else {
            $('#subjecttype').append('<option value="">Select</option>');

        }
    });



});