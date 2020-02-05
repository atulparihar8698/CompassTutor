$(document).ready(function () {
   // loadloadSubjectdata();
    //Get Subject Dropdown in Topic Create
    $.ajax({
        type: "GET",
        url: "/SubjectTopic/GetSubjects",
        success: function (data) {
            console.log(data);
            $.each(data, function (index, value) {
                $("#subjectdd").append('<option value="' + value.id + '">' + value.name + '</option>');
            });
        }
    });

    //Duplicate Check with subject and topic name
    $("#SubjectTopic").blur(function () {
        var stname = $('#SubjectTopic').val();
        var sid = $('#subjectdd option:selected').val();
        var stid = 0;
        $.ajax({
            type: "GET",
            url: '/SubjectTopic/CheckDuplicate_SubjectTopic/',
            data: { st_name: stname, s_id: sid, st_id: stid },
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (Duplicate) {
                if (Duplicate == true) {
                    $('.error_duplicate').show();
                    $('#btnSaveSubjectTopic').prop('disabled', true);
                }
                else {
                    $('.error_duplicate').hide();
                    $('#btnSaveSubjectTopic').prop('disabled', false);
                }
            }
        });
    })

    //Duplicate Check with subject and topic name in Modal Popup
    $("#pSubjectTopic").blur(function () {
        var stname = $('#pSubjectTopic').val();
        var sid = $('#psubjectdd option:selected').val();
        var stid = $('#psubjectTpoicId').val();
        $.ajax({
            type: "GET",
            url: '/SubjectTopic/CheckDuplicate_SubjectTopic/',
            data: { st_name: stname, s_id: sid, st_id: stid },
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (Duplicate) {
                if (Duplicate == true) {
                    $('.perror_duplicate').show();
                    $('#btnUpdateSubjectTopic').prop('disabled', true);
                }
                else {
                    $('.perror_duplicate').hide();
                    $('#btnUpdateSubjectTopic').prop('disabled', false);
                }
            }
        });
    })

    //Subject Topic Index
    $.ajax({

        type: "GET",
        url: '/SubjectTopic/Pagination_SubjectTopic/',
        //data: student,
        //data: JSON.stringify(student),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            $("#subjectTopicDetailsData").show();
            //$('#subjectDetailsData').DataTable().destroy();
            $('#subjectTopicDetailsData tbody tr').remove();
            var subjectTopic;
            $.each(data, function () {

                subjectTopic += "<tr><td class='text-left'>" + this.name + "</td>";
                //subject += "<td class='text-left'>" + this.subjectTopicName + "</td>";
                //subject += "<td class='text-left'>" + "<button class='btn btn-primary btn-sm clickable-row' type='button' ><a target='_blank' href='/Subject/Edit/" + this.subjectId + "'>Edit</a></button>" + "</td>";
                subjectTopic += "<td class='text-left'>" + "<button class='fa btn btn-primary'  onclick='UpdateSubjectTopic(" + this.id + ")'>Edit</button>" + "</td>";

                //subject += "<td class='text-left subjectEdit'>" + "<button class='btn btn-primary btn-sm clickable-row subjectEdit' type='button' onclick='open(" + this.subjectId + ")'  id='UpdateSubject_" + this.subjectId + "'>Edit</button>" + "</td>";
            });


            $('#subjectTopicDetailsData tbody').append(subjectTopic);

            $('#subjectTopicDetailsData').DataTable();


        }
    });
});
//Subject Topic Save Functionality
function Save() {
    var sid = $('#subjectdd option:selected').val();
    var i = 0;

    if (sid == "" || sid == null) {
        $(".subjectdd1").after('<p class="field-validation-error text-danger" data - valmsg -for= "SubjectName data - valmsg - replace= "true" >The Subject Name field is required.</p >')
        i++;
    }
    if ($("#SubjectTopic").val() == "") {
        $(".SubjectTopic1").after('<p class="field-validation-error text-danger" data - valmsg -for= "SubjectTopic data - valmsg - replace= "true" > The Specify Subject Topic field is required.</p >')
        i++;
    }
    if (i != 0) {
        return;
    }

    debugger;
    var stname = $('#SubjectTopic').val();
    var sid = $('#subjectdd option:selected').val();

    if (i == 0) {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            url: '/SubjectTopic/Create?st_name=' + stname + '&s_id=' + sid,
            //data: JSON.stringify(objSubject),
            success: function (data) {
                if (data == true) {
                    //swal({
                    //    title: "Subject Added Successfully",
                    //    //text: "Your Account is waiting for administrator approval.",
                    //    icon: "success",
                    //    button: "OK",
                    //});
                    toastr.success('Specify Subject Topic Added Successfully', 'Success!', { timeOut: 2000 });
                    window.location.href = "/SubjectTopic";
                }
                else {
                    toastr.error('Save Failed', 'Inconceivable!', { timeOut: 2000 })
                }
            }, error: function (error) {

                toastr.error('Save Failed', 'Inconceivable!', { timeOut: 2000 })
            }
        });
    }


}
function loadloadSubjectdata() {
    $.ajax({
        type: "GET",
        url: "/SubjectTopic/GetSubjects",
        success: function (data) {
            console.log(data);
            $.each(data, function (index, value) {
                $("#psubjectdd").append('<option value="' + value.id + '">' + value.name + '</option>');
            });
        }
    });
}
//Update subject Topic modal popup
function UpdateSubjectTopic(id) {
    
    //alert(id);
    var stid = id;
    
    //bind subject dropdown
    //$.ajax({
    //    type: "GET",
    //    url: "/SubjectTopic/GetSubjects",
    //    success: function (data) {
    //        console.log(data);
    //        $.each(data, function (index, value) {
    //            $("#psubjectdd").append('<option value="' + value.id + '">' + value.name + '</option>');
    //        });
    //    }
    //});

    $.ajax({

        type: "GET",
        url: '/SubjectTopic/GetSubjectTopic/?id=' + stid,
        //data: student,
        //data: JSON.stringify(student),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
          
            $("#psubjectdd option[value='" + data.subjectId + "']").prop('selected', 'selected');
            $('#pSubjectTopic').val(data.name)
            $('#psubjectTpoicId').val(data.id)
            $('#SubjectTopicModal').modal('show');
          

        },
    });

}


//Subject Topic Update functionality

function Update() {
    var st_id = $('#psubjectTpoicId').val();
    var s_id = $('#psubjectdd option:selected').val();
    //alert(sidValue);
    var i = 0;

    if ($("#pSubjectTopic").val() == "") {
        // $(".SubjectName1").after('<p class="field-validation-error text-danger" data - valmsg -for= "SubjectName data - valmsg - replace= "true" > The Subject Name field is required.</p >')
        $('#subjecttopicRequired').html("Specify Subject Topic Name Required");
        i++;
    }
    if (s_id == null || s_id == "") {
        $('#subjectRequired').html("Subject Required");
        i++;
    }
    if (i != 0) {
        return;
    }

    debugger;
    var st_name = $("#pSubjectTopic").val();
    if (i == 0) {
        $.ajax({
            type: 'POST',
            dataType: 'json',
            contentType: "application/json; charset=utf-8",
            url: '/SubjectTopic/Edit?sid=' + s_id + '&stid=' + st_id + '&stname=' + st_name,
            //  data: JSON.stringify(objSubject),
            success: function (data) {
                if (data == true) {
                    $('#SubjectTopicModal').modal('hide');

                    //swal({
                    //    title: "Subject Added Successfully",
                    //    //text: "Your Account is waiting for administrator approval.",
                    //    icon: "success",
                    //    button: "OK",
                    //});

                    //window.location.reload();
                    toastr.success('Specify Subject Topic Updated Successfully', 'Success!', { timeOut: 2000 });
                    window.location.href = "/Subjecttopic";

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