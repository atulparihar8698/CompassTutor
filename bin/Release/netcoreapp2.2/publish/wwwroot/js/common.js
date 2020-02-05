$(document).ready(function () {
    $.ajax({
        type: "GET",
        url: "/common/getcountries",
        success: function (data) {
            console.log(data);
            $.each(data, function (index, value) {
                $("#country").append('<option value="' + value.id + '">' + value.name + '</option>');
            });

        }
    });
    $.ajax({
        type: "GET",
        url: "/common/GetTimeZones",
        success: function (data) {
            console.log(data);
            $.each(data, function (index, value) {
                $("#timezone").append('<option value="' + value.id + '">' + value.name + '</option>');
            });

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
                }
            });
        } else {
            $('#state').append('<option value="">Select</option>');
            $('#city').append('<option value="">Select</option>');
        }
    });

    $('#state').on('change', function () {
        var stateID = $(this).val();
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
                }
            });
        } else {
            $('#city').append('<option value="">Select</option>');
        }
    });
});