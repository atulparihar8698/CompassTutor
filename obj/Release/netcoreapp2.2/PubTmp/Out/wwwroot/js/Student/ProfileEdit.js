$(document).ready(function () {

});
var tutorreturn;
var tutorreturnedit;
var imagebase64 = "";
function readFile(element) {

    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        document.getElementById("profile_pic").src = reader.result;

        imagebase64 = reader.result;
        //alert(imagebase64);
    }
    reader.readAsDataURL(file);
}
function Save() {
    var i = 0;
    $("p").remove();
    if ($("#firstName").val() == "") {
        $(".firstName1").after('<p class="field-validation-error text-danger" data - valmsg -for= "firstName data - valmsg - replace= "true" > The firstName field is required.</p >')
        i++;
    }
    if ($("#lastName").val() == "") {
        $(".lastName1").after('<p class="field-validation-error text-danger" data - valmsg -for= "lastName data - valmsg - replace= "true" > The lastName field is required.</p >')
        i++;
    }

    if ($("#email").val() == "") {
        $(".email1").after('<p class="field-validation-error text-danger" data - valmsg -for= "email data - valmsg - replace= "true" > The email field is required.</p >')
        i++;
    }
    if ($("#gender").val() == "") {
        $(".gender1").after('<p class="field-validation-error text-danger" data - valmsg -for= "gender data - valmsg - replace= "true" > The gender field is required.</p >')
        i++;
    }
    if ($("#country").val() == "") {
        $(".country1").after('<p class="field-validation-error text-danger" data - valmsg -for= "country data - valmsg - replace= "true" > The country field is required.</p >')
        i++;
    }
    if ($("#state").val() == "") {
        $(".state1").after('<p class="field-validation-error text-danger" data - valmsg -for= "state data - valmsg - replace= "true" > The state field is required.</p >')
        i++;
    }
    if ($("#city").val() == "") {
        $(".city1").after('<p class="field-validation-error text-danger" data - valmsg -for= "city data - valmsg - replace= "true" > The city field is required.</p >')
        i++;
    }
  
    //if ($("#timeZone").val() == "") {
    //    $(".timeZone1").after('<p class="field-validation-error text-danger" data - valmsg -for= "timeZone data - valmsg - replace= "true" > The timeZone field is required.</p >')
    //    i++;
    //}
    if ($("#address").val() == "") {
        $(".address1").after('<p class="field-validation-error text-danger" data - valmsg -for= "address data - valmsg - replace= "true" > The address field is required.</p >')
        i++;
    }
    if ($("#mobileNumber").val() == "") {
        $(".mobileNumber1").after('<p class="field-validation-error text-danger" data - valmsg -for= "mobileNumber data - valmsg - replace= "true" > The mobileNumber field is required.</p >')
        i++;
    }
    if ($("#educationLevel").val() == "") {
        $(".educationLevel1").after('<p class="field-validation-error text-danger" data - valmsg -for= "educationLevel data - valmsg - replace= "true" > The educationLevel field is required.</p >')
        i++;
    }
    if ($("#subject").val() == "") {
        $(".subject1").after('<p class="field-validation-error text-danger" data - valmsg -for= "subject data - valmsg - replace= "true" > The subject field is required.</p >')
        i++;
        //$("#err_msg").show();
    }



    if ($("#timezone").val() == "") {
        $(".timezone1").after('<p class="field-validation-error text-danger" data - valmsg -for= "timeZone data - valmsg - replace= "true" > The timeZone field is required.</p >')
        i++;
    }

    if ($("#zipcode").val() == "") {
        $(".zipcode1").after('<p class="field-validation-error text-danger" data - valmsg -for= "educationLevel data - valmsg - replace= "true" > The ZipCode field is required.</p >')
        i++;
    }
    if ($("#studentpreviousschool").val() == "") {
        $(".studentpreviousschool1").after('<p class="field-validation-error text-danger" data - valmsg -for= "educationLevel data - valmsg - replace= "true" > The School field is required.</p >')
        i++;
    }


    if (i != 0) {
        return;
    }
    debugger;
    //var Id = sessionStorage.getItem("ID");
    //var Email = sessionStorage.getItem("Email");
    //var Password = sessionStorage.getItem("Password");
    if ($("#id").val() == "") {
        var id = 0;
    }
    else {
        var id = $("#id").val();
    }

    if (imagebase64 == "") {
        var profile = $("#profile_pic").attr('src');
    }
    else {
        var profile = imagebase64;
    }
    //var id = $("#id").val();
    var password = $("#password").val();
    //var profile = imagebase64; /*$("#profile").val();*/
    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();
    var gender = $("#gender").val();
    var mobileNumber = $("#mobileNumber").val();
    var country = parseInt($("#country").val());
    var state = parseInt($("#state").val());
    var city = parseInt($("#city").val());
    //var locality = $("#Locality").val();
    var address = $("#address").val();
    var timeZoneId = $("#timezone").val();
    var countryId = $("#country").val();
    var stateId = $("#state").val();
    var cityId = $("#city").val();
    var educationLevel = $("#educationLevel").val();
    // var subject = $("#subject").val();
    var subjects = $('#subject :selected').toArray().map(item => item.value).join();
    var isapproved = $("#isapproved").val();

    var ORS = $("input[name='reason']:checked").val();
    var OtherReasonText;
    if (ORS == "For Other Reasons") {
        OtherReasonText = $("#otherreasons").val();
    }
    else {
        OtherReasonText = "";
    }



    if (tutorreturn != undefined && tutorreturn != 0) {
        id = tutorreturn.id;
    }
    var Student = {

        id: id,
        email: email,
        password: password,
        profile: profile,
        firstName: firstName,
        isapproved: isapproved,
        lastName: lastName,
        gender: gender,
        mobileNumber: mobileNumber,
        //country: country,
        //state: state,
        //city: city,
        //locality: locality,
        address: address,
        timeZoneId: timeZoneId,
        countryId: countryId,
        stateId: stateId,
        cityId: cityId,
        educationLevel: educationLevel,
        subject: subjects,

        ZipCode: $("#zipcode").val(),
        StudentPreviousSchool: $("#studentpreviousschool").val(),
        Reason: $("input[name='reason']:checked").val(),
        // OtherReason: $("#otherreasons").val(),
        OtherReason: OtherReasonText

    };
    if (tutorreturn == undefined && id == 0) {


        $.ajax({
            type: "POST",
            url: '/api/Student',
            //data: student,
            data: JSON.stringify(Student),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                tutorreturn = data;
                $("#layoutpic").attr('src', tutorreturn.profile);
                //$("#layoutpic").src();
                //toastr.success('Saved Successfully.', 'Success Alert', { timeOut: 5000 })
                //swal("Success!", "Hi, Your Registration is Successfully Completed.but wait for Adminstrator Approval... ", "success").then((value) => {
                //    //window.location = "/Common/RegistrationSuccess";
                //});
                swal({
                    title: "Registration Completed Successfully",
                    text: "Your Account is waiting for administrator approval.",
                    icon: "success",
                    button: "OK",
                });
                // window.location.href = "/Common/RegistrationSuccess"
                // alert("Success");
            }, error: function (error) {
                //alert(Student)
                toastr.error('Save Failed', 'Inconceivable!', { timeOut: 2000 })
            }
        });
    }

    else {

        $.ajax({
            type: "PUT",
            url: '/api/Student/' + id,
            //data: student,
            data: JSON.stringify(Student),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                tutorreturnedit = data;
                $("#layoutpic").attr('src', tutorreturnedit.profile);
                toastr.success('Updated Successfully.', 'Success Alert', { timeOut: 2000 })
                //alert("Success");
            }, error: function (error) {
                toastr.error('Update Failed', 'Inconceivable!', { timeOut: 2000 })
                //alert(Student)
            }
        });
    }

}

//City Tool tip

$("#addNewCity").popover({
    trigger: "click",
    // trigger: "focus",
    placement: 'left',
    html: true,
    content: $('#CityTip').html()
}).on('click', function (e) {

    //Check Duplicate City name
    $('#new_city').blur(function () {
        //var enteredstateid = $('#dd_state :selected').val();
        var enteredstateid = $('#state :selected').val();
        var enteredCityname = $('#new_city').val();
        $.ajax({
            type: "GET",
            url: '/common/CheckDuplicate_City/',
            data: { c_name: enteredCityname, s_id: enteredstateid },
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (Duplicate) {
                if (Duplicate == true) {
                    $('.error_city').hide();
                    $('.error_duplicate').show();
                    $('#btnSaveCity').prop('disabled', true);
                }
                else {
                    $('.error_duplicate').hide();
                    $('#btnSaveCity').prop('disabled', false);
                }
            }
        });
    })
    $('#btnSaveCity').click(function () {

        //var stateid = $('#dd_state :selected').val();
        var stateid = $('#state :selected').val();
        var cityname = $('#new_city').val();
        //  alert(stateid);
        var IsValid = true;
        if (cityname == null || cityname == '') {
            $('.error_city').show();
            IsValid = false
        }
        else {
            $('.error_city').hide();
            //IsValid = false
        }
        if (stateid == null || stateid == '') {
            $('.error_state').show();
            IsValid = false
        }
        else {
            $('.error_state').hide();
            //IsValid = false
        }
        if (IsValid) {
            $.ajax({
                type: "GET",
                url: '/common/AddNewCity/',
                data: { cname: cityname, sid: stateid },
                dataType: 'json',
                contentType: 'application/json; charset=utf-8',
                success: function (newCitydata) {
                    // $("#city").val($("#city").attr("cityId")).change();
                    // alert();

                    var city_id = newCitydata[0].id;
                    // alert(city_id);
                    //var state_id = newCitydata[0].stateId;
                    //$('#addNewCity').trigger('click');
                   // $("[data-toggle='popover']").popover('hide');
                    setTimeout(function () {
                        $('#addNewCity').popover('hide');
                    }, 1000);
                    $('#city').html("");
                    $('#city').append('<option value="">Select</option>');
                    $.each(newCitydata, function (index, value) {
                        $('#city').append('<option value="' + value.id + '">' + value.name + '</option>');
                    });
                    $('#city option[value=' + city_id + ']').attr("selected", "selected");
                    toastr.success("New City Added Successfully","success");
                }
            });
        }
    });
    $('#btnCancel').click(function () {
        $('#addNewCity').trigger('click')
    })
    $('html').on('click', function (e) {
        if (typeof $(e.target).data('original-title') == 'undefined' &&
            !$(e.target).parents().is('.popover.in')) {
            $('[data-original-title]').popover('hide');
        }
    });
})

