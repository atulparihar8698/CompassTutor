#pragma checksum "E:\Ashok Work\CompassTutor\CompassTutor\Views\Subject\Create.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "a9dad33d83aac2ed55dda05138d89c58a2a4c219"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Subject_Create), @"mvc.1.0.view", @"/Views/Subject/Create.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Subject/Create.cshtml", typeof(AspNetCore.Views_Subject_Create))]
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
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"a9dad33d83aac2ed55dda05138d89c58a2a4c219", @"/Views/Subject/Create.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"7b8643078c59f04625b5bdf35b5bbe1bdea04e4d", @"/Views/_ViewImports.cshtml")]
    public class Views_Subject_Create : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<CompassTutor.Models.Subject>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/js/Subject/SubjectMaster.js"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
            BeginContext(36, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 3 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Subject\Create.cshtml"
  
    ViewData["Title"] = "Create";
    ViewBag.Pagename = "Subject";


#line default
#line hidden
            BeginContext(117, 414, true);
            WriteLiteral(@"
<link rel=""stylesheet"" href=""https://cdnjs.cloudflare.com/ajax/libs/sweetalert/1.1.3/sweetalert.css"">

<script src=""https://cdnjs.cloudflare.com/ajax/libs/jquery-circle-progress/1.1.3/circle-progress.min.js""></script>
<script src=""https://unpkg.com/sweetalert/dist/sweetalert.min.js""></script>
<div class=""page-wrapper"" style=""min-height: 638px;padding-top:0px;"">
    <div class=""content container-fluid"">
");
            EndContext();
            BeginContext(707, 1041, true);
            WriteLiteral(@"
        <div class=""card-box"" style=""padding-bottom:0px !important"">
            <div class=""panel"">
                <div class=""panel-heading"" style=""background-color:darkgrey;""><h3 class=""card-title"" style=""margin-bottom:0px !important;font-size:20px;color:white"">Add New Subject</h3></div>
                <div class=""panel-body"">

                   
                    <div class=""row"" style=""margin-top:10px;"">
                        <div class=""col-md-6"">
                            <div class=""form-group form-focus SubjectName1"" style=""margin-bottom:0px;"">
                                <label class=""control-label"" for=""SubjectName"">Subject Name</label>
                                <input type=""text"" id=""SubjectName"" class=""form-control floating"" value="""" required>
                            </div>
                            <span class=""error_duplicate"" style=""display:none;color:red"">Subject Already Exist</span>
                        </div>
                    </div>
          ");
            WriteLiteral("          <div>\r\n");
            EndContext();
            BeginContext(1915, 176, true);
            WriteLiteral("                        <button class=\"btn btn-primary btn-lg\" style=\"width:100px;\" onclick=\"Save()\" type=\"button\" id=\"btnSaveSubject\">Save</button>\r\n                        <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 2091, "\"", 2128, 1);
#line 39 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Subject\Create.cshtml"
WriteAttributeValue("", 2098, Url.Action("Index","Subject"), 2098, 30, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(2129, 409, true);
            WriteLiteral(@" style=""width:100px;"" class=""btn btn-danger btn-lg"">Cancel</a>
                    </div>
                   

                </div>
            </div>


        </div>
       
    </div>

</div>
<link href=""//cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/css/toastr.min.css"" rel=""stylesheet"">
<script src=""https://cdnjs.cloudflare.com/ajax/libs/toastr.js/latest/js/toastr.min.js""></script>
");
            EndContext();
            BeginContext(2538, 53, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("script", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagAndEndTag, "a9dad33d83aac2ed55dda05138d89c58a2a4c2196772", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2591, 6, true);
            WriteLiteral("\r\n\r\n\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<CompassTutor.Models.Subject> Html { get; private set; }
    }
}
#pragma warning restore 1591