$(document).ready(function () {
    // Student1();
    $("#datatable").hide();
    $('#datatable1').hide();

});
var role;
function Student1() {

    //$("#student").removeClass("btn-primary");
    //$("#student").addClass("btn-warning1");
    //$("#tutor").removeClass("btn-warning1");
    //$("#tutor").addClass("btn-primary");
    $("#active_tutor").removeClass("active");
    $("#active_student").addClass("active");
    $('#datatable1').hide();
    $('#datatable1').DataTable().destroy();
    $("#sdetails").show();
    $("#tdetails").hide();
   
    role = "Student",
        $.ajax({
            type: "GET",
            url: '/api/Student',
            //data: student,
            //data: JSON.stringify(student),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                $("#datatable").show();
                $('#datatable').DataTable().destroy();
                $('#datatable tbody tr').remove();
                var student/* = "<tr><th> Id</th><th>Firstname</th> <th>Lastname</th><th>Email</th><th>View</th><th>Approve</th></tr >"*/;
                $.each(data, function () {

                    student += "<tr><td>" + this.id + "</td><td>" + this.firstName + "</td>";
                    student += "<td>" + this.lastName + "</td>";
                    student += "<td>" + this.email + "</td>";
                    //student += "<td>" + "<button class='btn btn-primary btn-sm' type='button' ><a href='/Tutor/StudentProfileView/" + this.id +"'>ProfileView</a></button>" + "</td>";
                    student += "<td>" + "<button class='btn btn-primary btn-sm clickable-row' type='button' ><a target='_blank' href='/Tutor/StudentProfileView/" + this.id + "'>ProfileView</a></button>" + "</td>";
                    if (this.isApproved == true) {
                        student += "<td>" + "<button class='fa btn btn-primary' style='display: none'   id='tick_" + this.id + "' onclick='Approved(" + this.id + ")'><i style='font - size: 24px' class='fa'></i> Inactive</button>" + "<button class='fa btn btn-primary'  id='cross_" + this.id + "' onclick='NotApproved(" + this.id + ")'><i style='font - size: 24px' class='fa'></i> Active</button>" + "</td ></tr > ";
                    }
                    else {
                        student += "<td>" + "<button class='fa btn btn-primary'  id='tick_" + this.id + "' onclick='Approved(" + this.id + ")'><i style='font - size: 24px' class='fa'></i> Inactive</button>" + "<button class='fa btn btn-primary' style='display: none'  id='cross_" + this.id + "' onclick='NotApproved(" + this.id + ")'><i style='font - size: 24px' class='fa'></i> Active</button>" + "</td ></tr > ";
                    }
                });

                $('#datatable tbody').append(student);

                $('#datatable').DataTable();

                $('#datatable1').hide();
            }
        });
}

function Tutor1() {

    //$("#tutor").removeClass("btn-primary");
    //$("#tutor").addClass("btn-warning1");
    //$("#student").removeClass("btn-warning1");
    //$("#student").addClass("btn-primary");
    $("#active_student").removeClass("active");
    $("#active_tutor").addClass("active");
    $("#datatable").hide();
    $('#datatable').DataTable().destroy();
    $("#tdetails").show();
    $("#sdetails").hide();
    role = "Tutor",
        $.ajax({
            type: "GET",
            url: '/api/Tutor',
            //data: tutor,
            //data: JSON.stringify(tutor),
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            success: function (data) {
                console.log();
                $("#datatable1").show();
                $('#datatable1').DataTable().destroy();
                $('#datatable1 tbody tr').remove();
                var tutor/* = "<tr><th> Id</th><th>Firstname</th> <th>Lastname</th><th>Email</th><th>View</th><th>Approve</th></tr >"*/;
                $.each(data, function () {

                    tutor += "<tr><td>" + this.id + "</td><td>" + this.firstName + "</td>";
                    tutor += "<td>" + this.lastName + "</td>";
                    tutor += "<td>" + this.email + "</td> ";
                    //tutor += "<td>" + "<button class='btn btn-primary btn-sm' type='button' ><a href='/Tutor/ProfileView/" + this.id + "'>ProfileView</a></button>" + "</td>";
                    tutor += "<td>" + "<button class='btn btn-primary btn-sm' type='button' ><a target='_blank' href='/Tutor/ProfileView/" + this.id + "'>ProfileView</a></button>" + "</td>";
                    if (this.isApproved == true) {
                        tutor += "<td>" + "<button class='fa btn btn-primary' style='display: none'   id='tick_" + this.id + "' onclick='Approved(" + this.id + ")'><i style='font - size: 24px' class='fa'></i> Inactive</button>" + "<button class='fa btn btn-primary'  id='cross_" + this.id + "' onclick='NotApproved(" + this.id + ")'><i style='font - size: 24px' class='fa'></i> Active</button>" + "</td ></tr > ";
                    }
                    else {
                        tutor += "<td>" + "<button class='fa btn btn-primary'  id='tick_" + this.id + "' onclick='Approved(" + this.id + ")'><i style='font - size: 24px' class='fa'></i> Inactive</button>" + "<button class='fa btn btn-primary' style='display: none'  id='cross_" + this.id + "' onclick='NotApproved(" + this.id + ")'><i style='font - size: 24px' class='fa'></i> Active </button>" + "</td ></tr > ";
                    }
                    //tutor += "<td>" + "<button class='fa' id='isd_" + this.id + "' onclick='Approved(" + this.id + ")'><i style='font - size: 24px' class='fa'>&#x2714;</i></button>" + "<button class='fa' id='isd1_" + this.id + "' onclick='NotApproved(" + this.id + ")' ><i style='font - size: 24px' class='fa'>&#x2716;</i></button>" + "</td ></tr > "; 
                });


                $('#datatable1 tbody').append(tutor);

                $('#datatable1').DataTable();

                $('#datatable').hide();
            }
        });
}

function Approved(id) {
    debugger;
    $('#tick_' + id).hide();
    $('#cross_' + id).show();

    //$('#isd_' + id).show();
    //$('#isd1_' + id).hide();

    $(id).hide();
    var id = id;

    var isApproved = true;
    var student = {
        id: id,

        isApproved: isApproved
    };
    if (role == "Student") {

        $.ajax({
            type: "PUT",
            url: '/api/Student/' + id,
            data: JSON.stringify(student),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //alert(data.id);
                swal("Account Activated Successfully", "", "success")

            }, error: function (error) {
                swal("Account Activation Failed", "Please Contact Administrator", "error")
            }
        });
    }
    else {
        $.ajax({
            type: "PUT",
            url: '/api/Tutor/' + id,
            data: JSON.stringify(student),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //alert(data.id);
                swal("Account Activated Successfully", "", "success")

            }, error: function (error) {
                swal("Account Activation Failed", "Please Contact Administrator", "error")
            }
        });

    }

}
function NotApproved(id) {
    debugger;
    //  $('#isd_' + id).show();
    $('#tick_' + id).show();
    $('#cross_' + id).hide();
    //$('#isd1_' + id).show();
    var id = id;

    var isApproved = false;
    var tutor = {

        id: id,

        isApproved: isApproved
    };
    if (role == "Tutor") {
        $.ajax({
            type: "PUT",
            url: '/api/Tutor/' + id,
            data: JSON.stringify(tutor),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                //swal("Account Activated Successfully", "Now you feel free to login your account!", "success")
                swal("Account De-Activated Successfully", "", "success")
                //alert(data.id);

            }, error: function (error) {
                //alert(Tutor)
                //swal("Account De-Activated  Successfully", "Contact Administrator to Activate your Account", "error")
                swal("Account De-Activation Failed", "Please Contact Administrator", "error")
            }
        });
    }
    else {
        $.ajax({
            type: "PUT",
            url: '/api/Student/' + id,
            data: JSON.stringify(tutor),
            dataType: 'json',
            contentType: 'application/json',
            success: function (data) {
                // alert(data.id);
                //swal("Account Activation Approved Successfully", "Now you feel free to login your account!", "success")
                swal("Account De-Activated Successfully", "", "success")

            }, error: function (error) {
                swal("Account De-Activation Failed", "Please Contact Administrator", "error")
            }
        });
    }

}

//$('#datatable tr th#nosorting_View').click(function () {
//    var viewid=$(this).attr('id')
//    alert(viewid);
//});

//$('#datatable tr th#nosorting_View').removeClass('sorting');


