$(document).ready(function () {
    $("#SubjectName").blur(function () {
        var sname = $('#SubjectName').val();
        var sid = 0;
        $.ajax({
            type: "GET",
            url: '/Subject/CheckDuplicate_Subject/',
            data: { s_name: sname, id: sid },
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (Duplicate) {
                if (Duplicate == true) {
                    //$('.error_city').hide();
                    $('.error_duplicate').show();
                    $('#btnSaveSubject').prop('disabled', true);
                }
                else {
                    $('.error_duplicate').hide();
                    $('#btnSaveSubject').prop('disabled', false);
                }
            }
        });
    })

    $("#psubjectName").blur(function () {
        var sname = $('#psubjectName').val();
        var sid = $('#psubjectId').val();
        $.ajax({
            type: "GET",
            url: '/Subject/CheckDuplicate_Subject/',
            data: { s_name: sname, id: sid },
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (Duplicate) {
                if (Duplicate == true) {
                    //$('#subjectRequired').hide();
                    $('.perror_duplicate').show();
                    $('#btnUpdateSubject').prop('disabled', true);
                }
                else {
                    $('.perror_duplicate').hide();
                    $('#btnUpdateSubject').prop('disabled', false);
                }
            }
        });
    })

    //Subject Index
    $.ajax({

        type: "GET",
        url: '/Subject/Pagination_Subject/',
        //data: student,
        //data: JSON.stringify(student),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            $("#subjectDetailsData").show();
            //$('#subjectDetailsData').DataTable().destroy();
            $('#subjectDetailsData tbody tr').remove();
            var subject;
            $.each(data, function () {

                subject += "<tr><td class='text-left'>" + this.name + "</td>";
                //subject += "<td class='text-left'>" + this.subjectTopicName + "</td>";
                //subject += "<td class='text-left'>" + "<button class='btn btn-primary btn-sm clickable-row' type='button' ><a target='_blank' href='/Subject/Edit/" + this.subjectId + "'>Edit</a></button>" + "</td>";
                subject += "<td class='text-left'>" + "<button class='fa btn btn-primary'  onclick='UpdateSubject(" + this.id + ")'>Edit</button>" + "</td>";

                //subject += "<td class='text-left subjectEdit'>" + "<button class='btn btn-primary btn-sm clickable-row subjectEdit' type='button' onclick='open(" + this.subjectId + ")'  id='UpdateSubject_" + this.subjectId + "'>Edit</button>" + "</td>";
            });


            $('#subjectDetailsData tbody').append(subject);

            $('#subjectDetailsData').DataTable();


        }
    });
});
function Save() {
    var i = 0;
    
    if ($("#SubjectName").val() == "") {
        $(".SubjectName1").after('<p class="field-validation-error text-danger" data - valmsg -for= "SubjectName data - valmsg - replace= "true" > The Subject Name field is required.</p >')
        i++;
    }
    //if ($("#SubjectTopic").val() == "") {
    //    $(".SubjectTopic1").after('<p class="field-validation-error text-danger" data - valmsg -for= "SubjectTopic data - valmsg - replace= "true" > The Subject Topic field is required.</p >')
    //    i++;
    //}
    if (i != 0) {
        return;
    }
   
    debugger;
    var subject_name = $("#SubjectName").val();
    //var subject_topic = $("#SubjectTopic").val();

    //var subjectTypeData = {
    //    Name: subject_topic
    //}
    var objSubject = {
        Name: subject_name,
        //subjectType: subjectTypeData,
    };

    if (i == 0) {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            //url: '/Subject/Create?subjectName=' + subject_name + '&subjectTopic=' + subject_topic,
            url: '/Subject/Create?subjectName=' + subject_name,
           // data: objSubject,
            data: JSON.stringify(objSubject),
            success: function (data) {
                if (data == true) {
                  
                    //swal({
                    //    title: "Subject Added Successfully",
                    //    //text: "Your Account is waiting for administrator approval.",
                    //    icon: "success",
                    //    button: "OK",
                    //});
                 
                    //window.location.reload();
                    toastr.success('Subject Added Successfully', 'Success!', { timeOut: 1000 });
                    window.location.href = "/Subject";
                }
                else {
                    toastr.error('Save Failed', 'Inconceivable!', { timeOut: 1000 })
                }
              //window.location.href = "@Url.Action("Index","Subject")";
               
                
            }, error: function (error) {
               
                toastr.error('Save Failed', 'Inconceivable!', { timeOut: 1000 })
            }
        });
    }


}
//Update subject modal popup
function UpdateSubject(id) {
    //alert(id);
    var sid = id;

    $.ajax({

        type: "GET",
        url: '/Subject/GetSubject/?id=' + sid,
        //data: JSON.stringify(student),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            $('#SubjectModal').modal('show');
            $('#psubjectId').val(data.id);
            $('#psubjectName').val(data.name);
        },
    });
   
   


}
//Update functionality

function Update() {
    var sidValue = $('#psubjectId').val();
    //alert(sidValue);
    var i = 0;

    if ($("#psubjectName").val() == "") {
        // $(".SubjectName1").after('<p class="field-validation-error text-danger" data - valmsg -for= "SubjectName data - valmsg - replace= "true" > The Subject Name field is required.</p >')
        $('#subjectRequired').html("Subject Name Required");
        i++;
    }
    //if ($("#SubjectTopic").val() == "") {
    //   // $(".SubjectTopic1").after('<p class="field-validation-error text-danger" data - valmsg -for= "SubjectTopic data - valmsg - replace= "true" > The Subject Topic field is required.</p >')
    //    $('#subjecttopicRequired').html("Subject Topic Required");
    //    i++;
    //}
    if (i != 0) {
        return;
    }

    debugger;
    var subject_name = $("#psubjectName").val();
    if (i == 0) {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            url: '/Subject/Edit?subjectName=' + subject_name + '&sid=' + sidValue,
          //  data: JSON.stringify(objSubject),
            success: function (data) {
                if (data == true) {
                    $('#SubjectModal').modal('hide');
                   
                    //swal({
                    //    title: "Subject Added Successfully",
                    //    //text: "Your Account is waiting for administrator approval.",
                    //    icon: "success",
                    //    button: "OK",
                    //});

                    //window.location.reload();
                    toastr.success('Subject Updated Successfully', 'Success!', { timeOut: 2000 });
                    window.location.href = "/Subject";
                 
                }
                else {
                    toastr.error('Update Failed', 'Inconceivable!', { timeOut: 2000 })
                }
                //window.location.href = "@Url.Action("Index","Subject")";


            }, error: function (error) {

                toastr.error('Update Failed', 'Inconceivable!', { timeOut: 2000 })
            }
        });
    }


}






  

