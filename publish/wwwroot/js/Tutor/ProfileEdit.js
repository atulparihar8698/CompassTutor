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
        $(".firstName1").after('<p class="field-validation-error text-danger" data - valmsg -for= "firstName data - valmsg - replace= "true" > The First Name field is required.</p >')
        i++;
    }
    if ($("#middleName").val() == "") {
        $(".middleName1").after('<p class="field-validation-error text-danger" data - valmsg -for= "middlename data - valmsg - replace= "true" > The Middle Name field is required.</p >')
        i++;
    }
    if ($("#lastName").val() == "") {
        $(".lastName1").after('<p class="field-validation-error text-danger" data - valmsg -for= "lastName data - valmsg - replace= "true" > The Last Name field is required.</p >')
        i++;
    }
    if ($("#headline").val() == "") {
        $(".headline1").after('<p class="field-validation-error text-danger" data - valmsg -for= "headline data - valmsg - replace= "true" > The Profile Head Line field is required.</p >')
        i++;
    }
    if ($("#email").val() == "") {
        $(".email1").after('<p class="field-validation-error text-danger" data - valmsg -for= "email data - valmsg - replace= "true" > The Email field is required.</p >')
        i++;
    }
    if ($("#dob").val() == "") {
        $(".dob1").after('<p class="field-validation-error text-danger" data - valmsg -for= "dob data - valmsg - replace= "true" > The DOB field is required.</p >')
        i++;
    }
    if ($("#gender").val() == "") {
        $(".gender1").after('<p class="field-validation-error text-danger" data - valmsg -for= "gender data - valmsg - replace= "true" > The Gender field is required.</p >')
        i++;
    }
    if ($("#country").val() == "") {
        $(".country1").after('<p class="field-validation-error text-danger" data - valmsg -for= "country data - valmsg - replace= "true" > The Country field is required.</p >')
        i++;
    }
    if ($("#state").val() == "") {
        $(".state1").after('<p class="field-validation-error text-danger" data - valmsg -for= "state data - valmsg - replace= "true" > The State field is required.</p >')
        i++;
    }
    if ($("#city").val() == "") {
        $(".city1").after('<p class="field-validation-error text-danger" data - valmsg -for= "city data - valmsg - replace= "true" > The City field is required.</p >')
        i++;
    }
    if ($("#timezone").val() == "") {
        $(".timezone1").after('<p class="field-validation-error text-danger" data - valmsg -for= "timeZone data - valmsg - replace= "true" > The Time Zone field is required.</p >')
        i++;
    }
    if ($("#address").val() == "") {
        $(".address1").after('<p class="field-validation-error text-danger" data - valmsg -for= "address data - valmsg - replace= "true" > The address field is required.</p >')
        i++;
    }
    if ($("#phoneNo").val() == "") {
        $(".phoneNo1").after('<p class="field-validation-error text-danger" data - valmsg -for= "phoneNO data - valmsg - replace= "true" > The PhoneNo field is required.</p >')
        i++;
    }
    if ($("#educationLevel").val() == "") {
        $(".educationLevel1").after('<p class="field-validation-error text-danger" data - valmsg -for= "educationLevel data - valmsg - replace= "true" > The Education Level field is required.</p >')
        i++;
    }
    if ($("#teachingExperience").val() == "") {
        $(".teachingExperience1").after('<p class="field-validation-error text-danger" data - valmsg -for= "teachingExperience data - valmsg - replace= "true" > The Teaching Experience field is required.</p >')
        i++;
    }
    if ($("#age").val() == "") {
        $(".age1").after('<p class="field-validation-error text-danger" data - valmsg -for= "age data - valmsg - replace= "true" > The Age field is required.</p >')
        i++;
    }
    if ($("#availableOn").val() == "") {
        $(".availableOn1").after('<p class="field-validation-error text-danger" data - valmsg -for= "availableOn data - valmsg - replace= "true" > The AvailableOn field is required.</p >')
        i++;
    }
    if ($("#hourlyRate").val() == "") {
        $(".hourlyRate1").after('<p class="field-validation-error text-danger" data - valmsg -for= "hourlyRate data - valmsg - replace= "true" > The Hourly Rate field is required.</p >')
        i++;
    }
    if ($("#availableType").val() == "") {
        $(".availableType1").after('<p class="field-validation-error text-danger" data - valmsg -for= "availability data - valmsg - replace= "true" > The Options to Connect field is required.</p >')
        i++;
    }
    if ($("#subject").val() == "") {

        $(".subject1").after('<p class="field-validation-error text-danger" data - valmsg -for= "subject data - valmsg - replace= "true" > The Subject field is required.</p >')
        i++;
    }
    if ($("#subjecttype").val() == "") {
        $(".subjecttype1").after('<p class="field-validation-error text-danger" data - valmsg -for= "subject data - valmsg - replace= "true" > The Specify Subject Topic field is required.</p >')
        i++;
        //$("#err_msg").show();
    }
    if ($("#education").val() == "") {
        $(".education1").after('<p class="field-validation-error text-danger" data - valmsg -for= "education data - valmsg - replace= "true" > The Education field is required.</p >')
        i++;
    }
    if ($("#description").val() == "") {
        $(".description1").after('<p class="field-validation-error text-danger" data - valmsg -for= "description data - valmsg - replace= "true" > The Description field is required.</p >')
        i++;
    }
    if ($("#experience").val() == "") {
        $(".experience1").after('<p class="field-validation-error text-danger" data - valmsg -for= "description data - valmsg - replace= "true" > The Experience field is required.</p >')
        i++;
    }
    if ($("#availableOn").val() == "") {
        $(".availableOn1").after('<p class="field-validation-error text-danger" data - valmsg -for= "description data - valmsg - replace= "true" > The Available On field is required.</p >')
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
    //var subject = $("#subject").val();
    var subject = $('#subject :selected').toArray().map(item => item.value).join();
    var subjecttype = $('#subjecttype :selected').toArray().map(item => item.value).join();
    var education = $("#education").val();
    var description = $("#description").val();
    var timeZone = $("#timezone").val();
    var address = $("#address").val();
    var phoneNo = $("#phoneNo").val();
    var educationLevel = $('#educationLevel :selected').text();
    var teachingExperience = $('#experience :selected').text();
    var age = parseInt($("#age").val());
    var availableOn = $('#availableOn :selected').toArray().map(item => item.text).join();
    var hourlyRate = $("#hourlyRate").val();
    var isapproved = $("#isapproved").val();
    var isapproved = $("#isapproved").val();
    var profileheadline = $("#headline").val();
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
        isapproved: isapproved,
        gender: gender,
        countryId: country,
        stateId: state,
        cityId: city,
        subjectid: subject,
        subjecttypeid: subjecttype,
        timeZoneId: timeZone,
        address: address,
        phoneNumber: phoneNo,
        educationLevel: educationLevel,
        experience: teachingExperience,
        age: age,
        availableDays: availableOn,
        hourlyRate: hourlyRate,
        availableType: availability,
        isActive: false,
        education: education,
        description: description,
        profileheadline: profileheadline,

    };

    if (tutorreturn == undefined && Id == 0) {
        var url = $("#RedirectTo").val();


        $.ajax({
            type: "POST",
            url: '/api/Tutor',
            //data: student,
            data: JSON.stringify(Tutor),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                tutorreturn = data;
                $("#layoutpic").attr('src', tutorreturn.profilePic);
                //toastr.success('Saved Successfully.', 'Success Alert', { timeOut: 5000 })
                //window.location.href ="/Common/RegistrationSuccess"
                swal({
                    title: "Registration Completed Successfully",
                    text: "Your Account is waiting for administrator approval.",
                    icon: "success",
                    button: "OK",
                });
                //window.location.href = '@Url.Action("Index", "LandingPage")';
               // location.href = url;       
            }, error: function (error) {
                toastr.error('Save Failed', 'Inconceivable!', { timeOut: 2000 })
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
                toastr.success('Updated Successfully.', 'Success Alert', { timeOut: 2000 })
               location.href = url;
            },
            error: function (data) {
                toastr.error('Update Failed', 'Inconceivable!', { timeOut: 2000 })
            }


        });
    }


    //console.log(tutor)

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
                    $('#addNewCity').trigger('click');
                    $('#city').html("");
                    $('#city').append('<option value="">Select</option>');
                    $.each(newCitydata, function (index, value) {
                        $('#city').append('<option value="' + value.id + '">' + value.name + '</option>');
                    });
                    $('#city option[value=' + city_id + ']').attr("selected", "selected");

                }
            });
        }
    });
    $('#btnCancel').click(function () {
        $('#addNewCity').trigger('click')
    })
    //$('html').on('click', function (e) {
    //    if (typeof $(e.target).data('original-title') == 'undefined' &&
    //        !$(e.target).parents().is('.popover.in')) {
    //        $('[data-original-title]').popover('hide');
    //    }
    //});
})
