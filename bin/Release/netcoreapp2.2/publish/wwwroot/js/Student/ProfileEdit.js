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
    if ($("#timeZone").val() == "") {
        $(".timeZone1").after('<p class="field-validation-error text-danger" data - valmsg -for= "timeZone data - valmsg - replace= "true" > The timeZone field is required.</p >')
        i++;
    }
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
    var subject = $("#subject").val();

    if (tutorreturn != undefined && tutorreturn != 0) {
        id = tutorreturn.id;
    }

    var Student = {

        id: id,
        email: email,
        password: password,
        profile: profile,
        firstName: firstName,
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
        subject: subject



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
                toastr.success('Saved Successfully.', 'Success Alert', { timeOut: 5000 })
                // alert("Success");
            }, error: function (error) {
                //alert(Student)
                toastr.error('Saved Failed', 'Inconceivable!', { timeOut: 50000 })
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
                toastr.success('Updated Successfully.', 'Success Alert', { timeOut: 5000 })
                //alert("Success");
            }, error: function (error) {
                toastr.error('Updated Failed', 'Inconceivable!', { timeOut: 50000 })
                //alert(Student)
            }
        });
    }

}

