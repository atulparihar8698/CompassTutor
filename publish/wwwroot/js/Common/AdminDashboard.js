//$(document).ready(function () {
//    var sts='@viewBag'
//    $.ajax({
//        type: "GET",
//        url: '/Student/Index/?status=',
//        //data: student,
//        //data: JSON.stringify(student),
//        dataType: 'json',
//        contentType: 'application/json; charset=utf-8',
//        success: function (data) {
//            $("#datatable").show();
//            $('#datatable').DataTable().destroy();
//            $('#datatable tbody tr').remove();
//            var student/* = "<tr><th> Id</th><th>Firstname</th> <th>Lastname</th><th>Email</th><th>View</th><th>Approve</th></tr >"*/;
//            $.each(data, function () {

//                student += "<tr><td>" + this.id + "</td><td>" + this.firstName + "</td>";
//                student += "<td>" + this.lastName + "</td>";
//                student += "<td>" + this.email + "</td>";
//                //student += "<td>" + "<button class='btn btn-primary btn-sm' type='button' ><a href='/Tutor/StudentProfileView/" + this.id +"'>ProfileView</a></button>" + "</td>";
//                student += "<td>" + "<button class='btn btn-primary btn-sm clickable-row' type='button' ><a target='_blank' href='/Tutor/StudentProfileView/" + this.id + "'>ProfileView</a></button>" + "</td>";
//                //if (this.isApproved == true) {
//                //    student += "<td>" + "<button class='fa btn btn-primary' style='display: none'   id='tick_" + this.id + "' onclick='Approved(" + this.id + ")'><i style='font - size: 24px' class='fa'>&#x2714;</i></button>" + "<button class='fa btn btn-primary'  id='cross_" + this.id + "' onclick='NotApproved(" + this.id + ")'><i style='font - size: 24px' class='fa'>&#x2716;</i></button>" + "</td ></tr > ";
//                //}
//                //else {
//                //    student += "<td>" + "<button class='fa btn btn-primary'  id='tick_" + this.id + "' onclick='Approved(" + this.id + ")'><i style='font - size: 24px' class='fa'>&#x2714;</i></button>" + "<button class='fa btn btn-primary' style='display: none'  id='cross_" + this.id + "' onclick='NotApproved(" + this.id + ")'><i style='font - size: 24px' class='fa'>&#x2716;</i></button>" + "</td ></tr > ";
//                //}
//            });

//            $('#datatable tbody').append(student);

//            $('#datatable').DataTable();

//            $('#datatable1').hide();
//        }
//    });

//});
//var role;
//function Student1() {

//    $("#sdetails").show();
//    //$("#tdetails").hide();


//        $.ajax({
//            type: "GET",
//            url: '/Student/Index/?status=',
//            //data: student,
//            //data: JSON.stringify(student),
//            dataType: 'json',
//            contentType: 'application/json; charset=utf-8',
//            success: function (data) {
//                $("#datatable").show();
//                $('#datatable').DataTable().destroy();
//                $('#datatable tbody tr').remove();
//                var student/* = "<tr><th> Id</th><th>Firstname</th> <th>Lastname</th><th>Email</th><th>View</th><th>Approve</th></tr >"*/;
//                $.each(data, function () {

//                    student += "<tr><td>" + this.id + "</td><td>" + this.firstName + "</td>";
//                    student += "<td>" + this.lastName + "</td>";
//                    student += "<td>" + this.email + "</td>";
//                    //student += "<td>" + "<button class='btn btn-primary btn-sm' type='button' ><a href='/Tutor/StudentProfileView/" + this.id +"'>ProfileView</a></button>" + "</td>";
//                    student += "<td>" + "<button class='btn btn-primary btn-sm clickable-row' type='button' ><a target='_blank' href='/Tutor/StudentProfileView/" + this.id + "'>ProfileView</a></button>" + "</td>";
//                    //if (this.isApproved == true) {
//                    //    student += "<td>" + "<button class='fa btn btn-primary' style='display: none'   id='tick_" + this.id + "' onclick='Approved(" + this.id + ")'><i style='font - size: 24px' class='fa'>&#x2714;</i></button>" + "<button class='fa btn btn-primary'  id='cross_" + this.id + "' onclick='NotApproved(" + this.id + ")'><i style='font - size: 24px' class='fa'>&#x2716;</i></button>" + "</td ></tr > ";
//                    //}
//                    //else {
//                    //    student += "<td>" + "<button class='fa btn btn-primary'  id='tick_" + this.id + "' onclick='Approved(" + this.id + ")'><i style='font - size: 24px' class='fa'>&#x2714;</i></button>" + "<button class='fa btn btn-primary' style='display: none'  id='cross_" + this.id + "' onclick='NotApproved(" + this.id + ")'><i style='font - size: 24px' class='fa'>&#x2716;</i></button>" + "</td ></tr > ";
//                    //}
//                });

//                $('#datatable tbody').append(student);

//                $('#datatable').DataTable();

//                $('#datatable1').hide();
//            }
//        });
//}




