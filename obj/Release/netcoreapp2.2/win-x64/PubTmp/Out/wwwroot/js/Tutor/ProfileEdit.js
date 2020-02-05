var tutorreturn;
var tutorreturnedit;
var imagebase64 = "";
function readFile(element) {
    var file = element.files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        document.getElementById("profile_pic").src = reader.result;
        //document.getElementById("profile").src = reader.result;
        imagebase64 = reader.result;
        //alert(imagebase64);
    }
    reader.readAsDataURL(file);
}



function updateTutorData() {
    var i = 0;
    $("p").remove();
    if ($("#firstName").val() == "") {
        $(".firstName1").after('<p class="field-validation-error text-danger" data - valmsg -for= "firstName data - valmsg - replace= "true" > The firstName field is required.</p >')
        i++;
    }
    if ($("#middleName").val() == "") {
        $(".middleName1").after('<p class="field-validation-error text-danger" data - valmsg -for= "middlename data - valmsg - replace= "true" > The middlename field is required.</p >')
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
    if ($("#dob").val() == "") {
        $(".dob1").after('<p class="field-validation-error text-danger" data - valmsg -for= "dob data - valmsg - replace= "true" > The dob field is required.</p >')
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
    if ($("#phoneNo").val() == "") {
        $(".phoneNo1").after('<p class="field-validation-error text-danger" data - valmsg -for= "phoneNO data - valmsg - replace= "true" > The phoneNo field is required.</p >')
        i++;
    }
    if ($("#educationLevel").val() == "") {
        $(".educationLevel1").after('<p class="field-validation-error text-danger" data - valmsg -for= "educationLevel data - valmsg - replace= "true" > The educationLevel field is required.</p >')
        i++;
    }
    if ($("#teachingExperience").val() == "") {
        $(".teachingExperience1").after('<p class="field-validation-error text-danger" data - valmsg -for= "teachingExperience data - valmsg - replace= "true" > The teachingExperience field is required.</p >')
        i++;
    }
    if ($("#age").val() == "") {
        $(".age1").after('<p class="field-validation-error text-danger" data - valmsg -for= "age data - valmsg - replace= "true" > The age field is required.</p >')
        i++;
    }
    if ($("#availableOn").val() == "") {
        $(".availableOn1").after('<p class="field-validation-error text-danger" data - valmsg -for= "availableOn data - valmsg - replace= "true" > The availableOn field is required.</p >')
        i++;
    }
    if ($("#hourlyRate").val() == "") {
        $(".hourlyRate1").after('<p class="field-validation-error text-danger" data - valmsg -for= "hourlyRate data - valmsg - replace= "true" > The hourlyRate field is required.</p >')
        i++;
    }
    if ($("#availability").val() == "") {
        $(".availability1").after('<p class="field-validation-error text-danger" data - valmsg -for= "availability data - valmsg - replace= "true" > The availability field is required.</p >')
        i++;
    }
    if (i != 0) {
        return;
    }

    debugger;
    if ($("#id").val() == "") {
        var Id = 0;
    }

    else {
        var Id = $("#id").val();
    }
   
    if (imagebase64 == "") {
        var profile = $("#profile_pic").attr('src');
    }
    else {
        var profile = imagebase64;
    }
    //var profile = imagebase64; /*$("#profile").val().replace('/', '\\/');*/
    var firstName = $("#firstName").val();
    var middleName = $("#middleName").val();
    var lastName = $("#lastName").val();
    var email = $("#email").val();
    var d = $("#dob").val().split("/");
    var dob = new Date(d[2], d[1] - 1, d[0]).toDateString("MM/dd/yyyy");
    //var dob = new Date($("#dob").val()); /*Date.parse($("#dob").val());*/
    var gender = $("#gender").val();
    var country = $("#country").val();
    var state = $("#state").val();
    var city = $("#city").val();
    var timeZone = $("#timezone").val();
    var address = $("#address").val();
    var phoneNo = $("#phoneNo").val();
    var educationLevel = $('#educationLevel :selected').text();
    var teachingExperience = $('#experience :selected').text();
    var age = parseInt($("#age").val());
    var availableOn = $('#availableOn :selected').toArray().map(item => item.text).join();
    var hourlyRate = $("#hourlyRate").val();
    var availability = $('#availableType :selected').toArray().map(item => item.text).join();/* $('#availableType :selected').text();*/
    //$('#availableOn :selected').each(function (i, sel) {
    //    alert($(sel).val());

    //});

    if (tutorreturn != undefined && tutorreturn != 0) {
        Id = tutorreturn.id;
    }
    


    var Tutor = {

        id: Id,
        profilePic: profile,
        firstName: firstName,
        middleName: middleName,
        lastName: lastName,
        email: email,
        dOB: dob,
        gender: gender,
        countryId: country,
        stateId: state,
        cityId: city,
        timeZoneId: timeZone,
        address: address,
        phoneNumber: phoneNo,
        educationLevel: educationLevel,
        experience: teachingExperience,
        age: age,
        availableDays: availableOn,
        hourlyRate: hourlyRate,
        availableType: availability,
        isActive: false

    };

    if (tutorreturn == undefined && Id == 0) {



        $.ajax({
            type: "POST",
            url: '/api/Tutor',
            //data: student,
            data: JSON.stringify(Tutor),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                tutorreturn = data;
                toastr.success('Saved Successfully.', 'Success Alert', { timeOut: 5000 })
            }, error: function (error) {
                toastr.error('Saved Failed', 'Inconceivable!', { timeOut: 50000 })
            }
        });
    }

    else {


        $.ajax({
            type: "PUT",
            url: "/api/Tutor/" + Id,
            data: JSON.stringify(Tutor),
            dataType: "json",
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                tutorreturnedit = data;
                $("#layoutpic").attr('src', tutorreturnedit.profilePic);
                toastr.success('Updated Successfully.', 'Success Alert', { timeOut: 5000 })
            },
            error: function (data) {
                toastr.error('Updated Failed', 'Inconceivable!', { timeOut: 50000 })
            }


        });
    }


    //console.log(tutor)

}

