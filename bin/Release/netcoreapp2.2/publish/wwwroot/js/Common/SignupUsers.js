$(document).ready(function () {

    $("#datatable").hide();
    $('#datatable1').hide();
});
var role;
function Student1() {
    $('#datatable1').hide();
    $('#datatable1').DataTable().destroy();
    debugger;
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
                    student += "<td>" + "<button class='btn btn-primary btn-sm' type='button' ><a href='/Tutor/StudentProfileView/" + this.id + "'>ProfileView</a></button>" + "</td>";
                    student += "<td>" + "<button class='fa' onclick='Approved(" + this.id + ")'><i style='font - size: 24px' class='fa'>&#x2714;</i></button>" + "<button class='fa' onclick='NotApproved(" + this.id + ")'><i style='font - size: 24px' class='fa'>&#x2716;</i></button>" + "</td ></tr > ";

                });
                $('#datatable tbody').append(student);
               
                $('#datatable').DataTable();
                
                $('#datatable1').hide();
            }
        });
}

function Tutor1() {
    $("#datatable").hide();
    $('#datatable').DataTable().destroy();
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
                    tutor += "<td>" + "<button class='btn btn-primary btn-sm' type='button' ><a href='/Tutor/ProfileView/" + this.id + "'>ProfileView</a></button>" + "</td>";
                    tutor += "<td>" + "<button class='fa' onclick='Approved(" + this.id + ")'><i style='font - size: 24px' class='fa'>&#x2714;</i></button>" + "<button class='fa' onclick='NotApproved(" + this.id + ")' ><i style='font - size: 24px' class='fa'>&#x2716;</i></button>" + "</td ></tr > ";
                });
                $('#datatable1 tbody').append(tutor);
                
                $('#datatable1').DataTable();
              
                $('#datatable').hide();
            }
        });
}

function Approved(id) {
    debugger;

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
                alert(data.id);

            }, error: function (error) {

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
                alert(data.id);

            }, error: function (error) {

            }
        });

    }

}
function NotApproved(id) {
    debugger;
    //alert(id);
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
                alert(data.id);

            }, error: function (error) {
                //alert(Tutor)
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
                alert(data.id);

            }, error: function (error) {

            }
        });
    }

}          
