#pragma checksum "E:\Ashok Work\CompassTutor\CompassTutor\Views\Student\Index.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "e6c645a52c0869e1eeca7c1539c1a6e006d7d352"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Student_Index), @"mvc.1.0.view", @"/Views/Student/Index.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Student/Index.cshtml", typeof(AspNetCore.Views_Student_Index))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "E:\Ashok Work\CompassTutor\CompassTutor\Views\_ViewImports.cshtml"
using CompassTutor;

#line default
#line hidden
#line 2 "E:\Ashok Work\CompassTutor\CompassTutor\Views\_ViewImports.cshtml"
using CompassTutor.Models;

#line default
#line hidden
#line 3 "E:\Ashok Work\CompassTutor\CompassTutor\Views\_ViewImports.cshtml"
using CompassTutor.Models.AccountViewModels;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"e6c645a52c0869e1eeca7c1539c1a6e006d7d352", @"/Views/Student/Index.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"7b8643078c59f04625b5bdf35b5bbe1bdea04e4d", @"/Views/_ViewImports.cshtml")]
    public class Views_Student_Index : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<dynamic>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("type", new global::Microsoft.AspNetCore.Html.HtmlString("text/javascript"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/jquery.dataTables.min.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        #line hidden
        #pragma warning disable 0169
        private string __tagHelperStringValueBuffer;
        #pragma warning restore 0169
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperExecutionContext __tagHelperExecutionContext;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner __tagHelperRunner = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperRunner();
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __backed__tagHelperScopeManager = null;
        private global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager __tagHelperScopeManager
        {
            get
            {
                if (__backed__tagHelperScopeManager == null)
                {
                    __backed__tagHelperScopeManager = new global::Microsoft.AspNetCore.Razor.Runtime.TagHelpers.TagHelperScopeManager(StartTagHelperWritingScope, EndTagHelperWritingScope);
                }
                return __backed__tagHelperScopeManager;
            }
        }
        private global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper;
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
            BeginContext(0, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 2 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Student\Index.cshtml"
  
    ViewData["Title"] = "Users";
    ViewBag.pagename = "HomeIndex";

#line default
#line hidden
            BeginContext(80, 1986, true);
            WriteLiteral(@"<link rel=""stylesheet"" href=""https://cdn.datatables.net/1.10.20/css/jquery.dataTables.min.css"">
<link rel=""stylesheet"" href=""https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.css"">
<script src=""https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.min.js""></script>
<style>
    th, td {
        padding: 10px !important;
    }

    .btn-primary a {
        color: white;
    }

    #datatable1_wrapper, #datatable_wrapper {
        margin-top: 15px !important;
    }

    #datatable_filter, #datatable1_filter {
        display: inline-block;
        float: right;
    }

    #datatable_length, #datatable1_length {
        display: inline;
    }

   
    input[type=radio] {
        display: none;
    }

    input:checked + label {
        background-color: orange;
        color: white;
    }

    input label {
        border: 2px solid orange
    }

    .left_select_radio {
        border: 2px solid orange;
        padding: 5px 10px;
       ");
            WriteLiteral(@" border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
        margin-right: -3px;
    }

    .right_select_radio {
        border: 2px solid orange;
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
        padding: 5px 10px;
        margin: 0px;
    }

    .filter-row .btn {
        border-radius: 0;
        padding: 4px 10px;
        text-transform: uppercase;
        border-radius: 4px;
    }

    .nav-tabs > li.active > a, .nav-tabs > li.active > a:focus, .nav-tabs > li.active > a:hover {
        color: #fff;
        background-color: #ffa500;
        border-radius: 5px 5px 0px 0px;
        font-weight: bold;
    }

    .nav-tabs > li {
        width: 10%;
        text-align: center;
    }
   
</style>

<h2>Users</h2>

<div class=""tab"">


</div>


<div class=""main-wrapper"">


    <div class=""page-wrapper"">
        <div class=""content container-fluid"">

");
            EndContext();
            BeginContext(2746, 108, true);
            WriteLiteral("            <div class=\"row\">\r\n                <div class=\"col-sm-6\">\r\n                    <h3 class=\"left\">");
            EndContext();
            BeginContext(2855, 14, false);
#line 112 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Student\Index.cshtml"
                                Write(ViewBag.status);

#line default
#line hidden
            EndContext();
            BeginContext(2869, 351, true);
            WriteLiteral(@"</h3>
                </div>
                <div class=""col-sm-6"" style=""padding-left: 483px;"">
                    <a href=""/Home""><button class=""btn-warning"">Back</button></a>
                </div>
            </div>
            <div class=""row"">
                <div class=""col-md-12"">
                    <div class=""table-responsive"">
");
            EndContext();
            BeginContext(3351, 632, true);
            WriteLiteral(@"                        <table id=""datatable"" align=""center"" class=""table text-center table-striped table-bordered"" style=""background-color:white;"">
                            <thead style=""color: #337ab7;"">
                                <tr>
                                    <th class=""text-center"">Id</th>
                                    <th class=""text-center"">Firstname</th>
                                    <th class=""text-center"">Lastname</th>
                                    <th class=""text-center"">Email</th>
                                    <th class=""text-center"" id=""nosorting_View"">View</th>
");
            EndContext();
            BeginContext(4084, 270, true);
            WriteLiteral(@"                                </tr>
                            </thead>
                            <tbody></tbody>
                        </table>

                    </div>
                </div>
            </div>
        </div>

    </div>

</div>
");
            EndContext();
            BeginContext(4413, 76, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "e6c645a52c0869e1eeca7c1539c1a6e006d7d3528429", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(4489, 95, true);
            WriteLiteral("\r\n\r\n<script type=\"text/javascript\">\r\n    $(document).ready(function () {\r\n\r\n        var sts = \'");
            EndContext();
            BeginContext(4585, 14, false);
#line 150 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Student\Index.cshtml"
              Write(ViewBag.Status);

#line default
#line hidden
            EndContext();
            BeginContext(4599, 2438, true);
            WriteLiteral(@"';
        //alert(sts);
        $.ajax({
            type: ""GET"",
            url: '/Student/GetStudents/?status='+sts,
           // url: '/Student/GetStudents/',
           // data: {status:sts},
        //data: JSON.stringify(student),
        dataType: 'json',
        contentType: 'application/json; charset=utf-8',
        success: function (data) {
            $(""#datatable"").show();
            $('#datatable').DataTable().destroy();
            $('#datatable tbody tr').remove();
            var student/* = ""<tr><th> Id</th><th>Firstname</th> <th>Lastname</th><th>Email</th><th>View</th><th>Approve</th></tr >""*/;
            $.each(data, function () {

                student += ""<tr><td>"" + this.id + ""</td><td>"" + this.firstName + ""</td>"";
                student += ""<td>"" + this.lastName + ""</td>"";
                student += ""<td>"" + this.email + ""</td>"";
                //student += ""<td>"" + ""<button class='btn btn-primary btn-sm' type='button' ><a href='/Tutor/StudentProfileView/""");
            WriteLiteral(@" + this.id +""'>ProfileView</a></button>"" + ""</td>"";
                student += ""<td>"" + ""<button class='btn btn-primary btn-sm clickable-row' type='button' ><a target='_blank' href='/Tutor/StudentProfileView/"" + this.id + ""'>ProfileView</a></button>"" + ""</td>"";
                //if (this.isApproved == true) {
                //    student += ""<td>"" + ""<button class='fa btn btn-primary' style='display: none'   id='tick_"" + this.id + ""' onclick='Approved("" + this.id + "")'><i style='font - size: 24px' class='fa'>&#x2714;</i></button>"" + ""<button class='fa btn btn-primary'  id='cross_"" + this.id + ""' onclick='NotApproved("" + this.id + "")'><i style='font - size: 24px' class='fa'>&#x2716;</i></button>"" + ""</td ></tr > "";
                //}
                //else {
                //    student += ""<td>"" + ""<button class='fa btn btn-primary'  id='tick_"" + this.id + ""' onclick='Approved("" + this.id + "")'><i style='font - size: 24px' class='fa'>&#x2714;</i></button>"" + ""<button class='fa btn btn-primary' style=");
            WriteLiteral(@"'display: none'  id='cross_"" + this.id + ""' onclick='NotApproved("" + this.id + "")'><i style='font - size: 24px' class='fa'>&#x2716;</i></button>"" + ""</td ></tr > "";
                //}
            });

            $('#datatable tbody').append(student);

            $('#datatable').DataTable();

            $('#datatable1').hide();
        }
    });


    });
</script>


");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<dynamic> Html { get; private set; }
    }
}
#pragma warning restore 1591
