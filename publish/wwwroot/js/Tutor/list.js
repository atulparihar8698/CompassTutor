 $(function () {  
    
      
     $("#listsubjects").select2();
     
   
     $.ajax({
         type: "GET",
         url: "/tutor/GetSubjects",
         success: function (data) {
            
             console.log(data);

             $.each(data, function (index, value) {
                 $('#listsubjects').append('<option value="' + value.id + '">' + value.name + '</option>');
             });
             var dataa = $("#subjectbag").val();
             $.each(dataa.split(","), function (i, e) {
                 $("#listsubjects option[value='" + e + "']").prop("selected", true);
                 $("#listsubjects").val(dataa.split(",")).change();
             });
         }
     });
     var subjecttype = $("#subjectbag").val();


     $.ajax({
         url: '/Tutor/GetSearchTutors',
         dataType: "json",
         type: "GET",
         data: { ids: subjecttype },
         contentType: 'application/json; charset=utf-8',
         //async: true,
         //processData: false,
         //cache: false,
         success: function (data) {
             if (data.length == 0) {
                 $("#norecordsfound").html('');
                 var appendnorecordshtml = '';
                 var errorMsg = "No Tutors Found with Search Result";
                 appendnorecordshtml += '<div class="card-box" style="width:500px:padding-left:30px">' + errorMsg + '</div >';
                 $("#norecordsfound").show();

                 $("#norecordsfound").append(appendnorecordshtml);
                 $("#aftersearchusers").hide();
                 $("#beforesearchusers").hide();
                 $("#aftersearchusers").html('');
             }
             else {
                 $("#norecordsfound").hide();
                 $("#norecordsfound").html('');
                 $("#beforesearchusers").hide();
                 $("#aftersearchusers").hide();
                 $("#aftersearchusers").html('');

                 var appendhtml = '';

                 for (var i = 0; i < data.length; i++) {


                     // appendhtml=''

                     appendhtml += '<div class="col-md-4 col-sm-4 col-xs-6 col-lg-3">';

                     appendhtml += '<div class="profile-widget"><div>'


                     if (data[i].profilePic != null || "") {
                         appendhtml += '<img style="border-radius:50%;width:60px;height:60px;" class="inline-block" id="" href="/Tutor/ProfileView/" src="' + data[i].profilePic + '" alt="user">';
                     }
                     else {
                         appendhtml += ' <img style="border-radius:50%;width:60px;height:60px;" class="inline-block" id="" src="~/img/user.jpg" alt="user">';
                     }

                     appendhtml += '</div>  <h4 class="user-name m-t-10 m-b-0 text-ellipsis">' + data[i].firstName + ' </h4>';

                     appendhtml += '<h5 class="user-name m-t-10 m-b-0 text-ellipsis">' + data[i].email + '</h5>';
                     appendhtml += '<h5 class="user-name m-t-10 m-b-0 text-ellipsis">' + data[i].subjectId + '</h5>';
                    // appendhtml += '<div class="mb_5"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></div>';
                     appendhtml += '<a href="/Student/Schedule/' + data[i].id + '" class="btn btn-default btn-sm m-t-10"><i class="far fa-calendar-alt"></i> Schedules</a>';
                     appendhtml += '<a href="/Tutor/ProfileView/' + data[i].id + '" class="btn btn-default btn-sm m-t-10"><i class="fas fa-user"></i> Profile</a> </div> </div>';

                 }

                 $("#aftersearchusers").append(appendhtml);

                 $("#aftersearchusers").show();




             }



         },
         error: function (xhr) {
             alert('error');
         }
     });

   //  $("#search").trigger('click'); 
 })  


$("#search").click(function () {
    //alert($('#update').val());

   
    
    var subjecttype = $('#listsubjects :selected').toArray().map(item => item.value).join();
    var id = $('#update').val();
     if (subjecttype == "") {
        toastr.error('Subject is required..', 'Inconceivable!', { timeOut: 5000 });
        return false;
    }
 
    $.ajax({
        url: '/Tutor/GetSearchTutors',
        dataType: "json",
        type: "GET",
        data: { ids: subjecttype },
        contentType: 'application/json; charset=utf-8',
        //async: true,
        //processData: false,
        //cache: false,
        success: function (data) {
            if (data.length == 0) {
                $("#norecordsfound").html('');
                var appendnorecordshtml = '';
                var errorMsg = "No Tutors Found with Search Result";
                appendnorecordshtml += '<div class="" style="width:500px:padding-left:30px">' + errorMsg + '</div >';
                $("#norecordsfound").show();
               
                $("#norecordsfound").append(appendnorecordshtml);
                $("#aftersearchusers").hide();
                $("#beforesearchusers").hide();
                $("#aftersearchusers").html('');
            }
            else {
                $("#norecordsfound").hide();
                $("#norecordsfound").html('');
                $("#beforesearchusers").hide();
                $("#aftersearchusers").hide();
                $("#aftersearchusers").html('');

                var appendhtml = '';

                for (var i = 0; i < data.length; i++) {


                    // appendhtml=''

                    appendhtml += '<div class="col-md-4 col-sm-4 col-xs-6 col-lg-3">';

                    appendhtml += '<div class="profile-widget"><div>'


                    if (data[i].profilePic != null || "") {
                        appendhtml += '<img style="border-radius:50%;width:60px;height:60px;" class="inline-block" id="" src="' + data[i].profilePic + '" alt="user">';
                    }
                    else {
                        appendhtml += ' <img style="border-radius:50%;width:60px;height:60px;" class="inline-block" id="" src="~/img/user.jpg" alt="user">';
                    }

                    appendhtml += '</div>  <h4 class="user-name m-t-10 m-b-0 text-ellipsis">' + data[i].firstName + ' &nbsp;</h4>';
                    appendhtml += '<h5 class="user-name m-t-10 m-b-0 text-ellipsis">' + data[i].email + '</h5>';
                    appendhtml += '<h5 class="user-name m-t-10 m-b-0 text-ellipsis">' + data[i].subjectId + '</h5>';
                    appendhtml += '<div class="mb_5"><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span><span class="fa fa-star checked"></span></div>';
                    appendhtml += '<a href="/Student/Schedule/' + data[i].id + '" class="btn btn-default btn-sm m-t-10">View Schedules</a>';
                    appendhtml += '<a href="/Tutor/ProfileView/' + data[i].id + '" class="btn btn-default btn-sm m-t-10">View Profile</a> </div> </div>';

                }

                $("#aftersearchusers").append(appendhtml);

                $("#aftersearchusers").show();




            }
         


        },
        error: function (xhr) {
            alert('error');
        }
    });



});






$("#select").typeahead({
    minLength: 1,
    source: function (request, response) {
        $.ajax({
            url: "/Tutor/SearchTutorSubject/",
            data: {
                "name": request
            },
            type: "GET",
            contentType: "json",
            success: function (data) {
                items = [];
                map = {};
                $.each(data, function (i, item) {
                    var id = item.Name;
                    var name = item.Name;
                    map[name] = {
                        id: id,
                        name: name
                    };
                    items.push(name);
                });
                response(items);
            },
            error: function (response) {
                alert(response.responseText);
            },
            failure: function (response) {
                alert(response.responseText);
            }
        });
    },
//    updater: function (item) { //If simultaneously want to update value somewhere else
//         $("#update").val(map[item].id); return item;
    //}, 
});    
