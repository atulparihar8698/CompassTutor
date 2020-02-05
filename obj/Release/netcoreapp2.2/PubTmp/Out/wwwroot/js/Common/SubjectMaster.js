$(document).ready(function () {
   

});
function Save() {
    alert("Hi");
    var i = 0;
   
    if ($("#subject").val() == "") {
        $(".subject").after('<p class="field-validation-error text-danger" data - valmsg -for= "subject data - valmsg - replace= "true" > The subject field is required.</p >')
        i++;
    }

    if ($("#topics").val() == "") {
        $(".topic").after('<p class="field-validation-error text-danger" data - valmsg -for= "timeZone data - valmsg - replace= "true" > The topic field is required.</p >')
        i++;
    }
    
    if (i != 0) {
        return;
    }
   
    if ($("#id").val() == "") {
        var id = 0;
    }
    else {
        var id = $("#id").val();
    }
    var subject = $("#subject").val();
    
    var topic = $("#topics").val();
   
    if (tutorreturn != undefined && tutorreturn != 0) {
        id = tutorreturn.id;
    }
    var SubjectMaster = {

        id: id,

        subject: subject,
        topic:topic,

    };
    if (tutorreturn == undefined && id == 0) {


        $.ajax({
            type: "POST",
            url: '/api/SubjectMaster',
            //data: student,
            data: JSON.stringify(Student),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                tutorreturn = data;
                $("#layoutpic").attr('src', tutorreturn.profile);
               
                swal({
                    title: "Subject added Successfully",
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
            //type: "PUT",
            //url: '/api/Student/' + id,
            ////data: student,
            //data: JSON.stringify(Student),
            //dataType: 'json',
            //contentType: 'application/json; charset=utf-8',
            //success: function (data) {
            //    tutorreturnedit = data;
            //    $("#layoutpic").attr('src', tutorreturnedit.profile);
            //    toastr.success('Updated Successfully.', 'Success Alert', { timeOut: 2000 })
            //    //alert("Success");
            //}, error: function (error) {
            //    toastr.error('Update Failed', 'Inconceivable!', { timeOut: 2000 })
            //    //alert(Student)
            //}
        });
    }

}
