#pragma checksum "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "369d3839cdc1b0c63c79f48f76f62a77b683c922"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Tutor_StudentProfileView), @"mvc.1.0.view", @"/Views/Tutor/StudentProfileView.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Tutor/StudentProfileView.cshtml", typeof(AspNetCore.Views_Tutor_StudentProfileView))]
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
#line 1 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
using Data.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"369d3839cdc1b0c63c79f48f76f62a77b683c922", @"/Views/Tutor/StudentProfileView.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"7b8643078c59f04625b5bdf35b5bbe1bdea04e4d", @"/Views/_ViewImports.cshtml")]
    public class Views_Tutor_StudentProfileView : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<Student>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("avatar"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/user.jpg"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("alt", new global::Microsoft.AspNetCore.Html.HtmlString(""), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 3 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
  
    ViewData["Title"] = "List";

#line default
#line hidden
            BeginContext(76, 626, true);
            WriteLiteral(@"<style>
    .contact_infor ul li {
        width: 49%;
        display: inline-block;
    }

    .card-title {
        margin-bottom: 10px !important;
        font-weight: 600;
    }

    .card-box {
        border-radius: 0px;
        border-top: 1px solid #949494 !important;
        box-shadow: none;
        border: 0px;
    }

    .pl_4 {
        padding-left: 4px !important;
    }

    .card-box {
        padding: 10px 20px !important;
    }
</style>
<div class=""page-wrapper"" style=""min-height: 638px;padding-top:0px;"">
    <div class=""content container-fluid"">
        <div class=""row"">
");
            EndContext();
#line 35 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
             if (ViewData["studentprofile"] == null)
            {

#line default
#line hidden
            BeginContext(771, 124, true);
            WriteLiteral("                <div class=\"col-sm-8\">\r\n                    <h4 class=\"page-title\">My Profile</h4>\r\n                </div>\r\n");
            EndContext();
#line 40 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
            }
            else
            {

#line default
#line hidden
            BeginContext(941, 25, true);
            WriteLiteral(" <div class=\"col-sm-8\">\r\n");
            EndContext();
            BeginContext(1030, 24, true);
            WriteLiteral("                </div>\r\n");
            EndContext();
#line 45 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
            }

#line default
#line hidden
            BeginContext(1069, 341, true);
            WriteLiteral(@"

        </div>
        <div class=""card-box bio_infor"" style=""height:190px;border-top:0px !important;"">
            <div class=""row"">
                <div class=""col-md-12"">
                    <div class=""profile-view"">
                        <div class=""profile-img-wrap"">
                            <div class=""profile-img"">
");
            EndContext();
#line 55 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                 if (!String.IsNullOrEmpty(Model.Profile))
                                {


#line default
#line hidden
            BeginContext(1523, 67, true);
            WriteLiteral("                                    <a href=\"#\"><img class=\"avatar\"");
            EndContext();
            BeginWriteAttribute("src", " src=\"", 1590, "\"", 1610, 1);
#line 58 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
WriteAttributeValue("", 1596, Model.Profile, 1596, 14, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(1611, 14, true);
            WriteLiteral(" alt=\"\"></a>\r\n");
            EndContext();
#line 59 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                }
                                else
                                {

#line default
#line hidden
            BeginContext(1733, 48, true);
            WriteLiteral("                                    <a href=\"#\">");
            EndContext();
            BeginContext(1781, 48, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "369d3839cdc1b0c63c79f48f76f62a77b683c9228015", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(1829, 6, true);
            WriteLiteral("</a>\r\n");
            EndContext();
#line 63 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"

                                }

#line default
#line hidden
            BeginContext(1872, 369, true);
            WriteLiteral(@"
                            </div>
                        </div>
                        <div class=""profile-basic"">
                            <div class=""row"">
                                <div class=""col-md-5"">
                                    <div class=""profile-info-left"">
                                        <h3 class=""user-name m-t-0 m-b-0"">");
            EndContext();
            BeginContext(2242, 15, false);
#line 72 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                                                     Write(Model.FirstName);

#line default
#line hidden
            EndContext();
            BeginContext(2257, 1, true);
            WriteLiteral(" ");
            EndContext();
            BeginContext(2259, 14, false);
#line 72 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                                                                      Write(Model.LastName);

#line default
#line hidden
            EndContext();
            BeginContext(2273, 77, true);
            WriteLiteral("</h3>\r\n\r\n                                        <ul class=\"personal-info\">\r\n");
            EndContext();
            BeginContext(2652, 275, true);
            WriteLiteral(@"                                            <li></li>
                                            <li>
                                                <span class=""title"" style=""width:15px;"">Email:</span>
                                                <span class=""text"">");
            EndContext();
            BeginContext(2928, 11, false);
#line 82 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                                              Write(Model.Email);

#line default
#line hidden
            EndContext();
            BeginContext(2939, 111, true);
            WriteLiteral("</span>\r\n                                            </li>\r\n\r\n                                        </ul>\r\n\r\n");
            EndContext();
            BeginContext(3184, 399, true);
            WriteLiteral(@"                                    </div>
                                </div>
                                <div class=""col-md-7"">
                                    <ul class=""personal-info"">
                                        <li>
                                            <span class=""title"">MobileNumber:</span>
                                            <span class=""text"">");
            EndContext();
            BeginContext(3584, 18, false);
#line 94 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                                          Write(Model.MobileNumber);

#line default
#line hidden
            EndContext();
            BeginContext(3602, 247, true);
            WriteLiteral(" </span>\r\n                                        </li>\r\n                                        <li>\r\n                                            <span class=\"title\">Address:</span>\r\n                                            <span class=\"text\">");
            EndContext();
            BeginContext(3850, 13, false);
#line 98 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                                          Write(Model.Address);

#line default
#line hidden
            EndContext();
            BeginContext(3863, 245, true);
            WriteLiteral("</span>\r\n                                        </li>\r\n                                        <li>\r\n                                            <span class=\"title\">Gender:</span>\r\n                                            <span class=\"text\">");
            EndContext();
            BeginContext(4109, 12, false);
#line 102 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                                          Write(Model.Gender);

#line default
#line hidden
            EndContext();
            BeginContext(4121, 733, true);
            WriteLiteral(@"</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class=""card-box contact_infor"" style=""border-top:0px !important;"">
            <h3 class=""card-title pl_4"">Contact Information</h3>
            <div class=""card-box"" style=""margin-bottom:0px ;"">
                <div class=""row"">
                    <ul class=""personal-info"">
                        <li>
                            <span class=""title"">Country:</span>
                            <span class=""text"">");
            EndContext();
            BeginContext(4855, 18, false);
#line 120 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                          Write(Model.Country.Name);

#line default
#line hidden
            EndContext();
            BeginContext(4873, 180, true);
            WriteLiteral("</span>\r\n                        </li>\r\n                        <li>\r\n                            <span class=\"title\">State:</span>\r\n                            <span class=\"text\">");
            EndContext();
            BeginContext(5054, 16, false);
#line 124 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                          Write(Model.State.Name);

#line default
#line hidden
            EndContext();
            BeginContext(5070, 179, true);
            WriteLiteral("</span>\r\n                        </li>\r\n                        <li>\r\n                            <span class=\"title\">City:</span>\r\n                            <span class=\"text\">");
            EndContext();
            BeginContext(5250, 15, false);
#line 128 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                          Write(Model.City.Name);

#line default
#line hidden
            EndContext();
            BeginContext(5265, 183, true);
            WriteLiteral("</span>\r\n                        </li>\r\n                        <li>\r\n                            <span class=\"title\">TimeZone:</span>\r\n                            <span class=\"text\">");
            EndContext();
            BeginContext(5449, 19, false);
#line 132 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                          Write(Model.TimeZone.Name);

#line default
#line hidden
            EndContext();
            BeginContext(5468, 182, true);
            WriteLiteral("</span>\r\n                        </li>\r\n                        <li>\r\n                            <span class=\"title\">Address:</span>\r\n                            <span class=\"text\">");
            EndContext();
            BeginContext(5651, 13, false);
#line 136 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                          Write(Model.Address);

#line default
#line hidden
            EndContext();
            BeginContext(5664, 182, true);
            WriteLiteral("</span>\r\n                        </li>\r\n                        <li>\r\n                            <span class=\"title\">ZipCode:</span>\r\n                            <span class=\"text\">");
            EndContext();
            BeginContext(5847, 13, false);
#line 140 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                          Write(Model.ZipCode);

#line default
#line hidden
            EndContext();
            BeginContext(5860, 472, true);
            WriteLiteral(@"</span>
                        </li>
                    </ul>

                </div>
            </div>
            <h3 class=""card-title pl_4"">Additional Information</h3>
            <div class=""card-box"" style=""margin-bottom:0px ;"">
                <div class=""row"">

                    <ul class=""personal-info"">
                        <li>
                            <span class=""title"">School:</span>
                            <span class=""text"">");
            EndContext();
            BeginContext(6333, 27, false);
#line 153 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                          Write(Model.StudentPreviousSchool);

#line default
#line hidden
            EndContext();
            BeginContext(6360, 190, true);
            WriteLiteral("</span>\r\n                        </li>\r\n                        <li>\r\n                            <span class=\"title\">Education Level:</span>\r\n                            <span class=\"text\">");
            EndContext();
            BeginContext(6551, 20, false);
#line 157 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                          Write(Model.EducationLevel);

#line default
#line hidden
            EndContext();
            BeginContext(6571, 135, true);
            WriteLiteral("</span>\r\n                        </li>\r\n                        <li>\r\n                            <span class=\"title\">Subject:</span>\r\n");
            EndContext();
            BeginContext(6780, 47, true);
            WriteLiteral("                            <span class=\"text\">");
            EndContext();
            BeginContext(6828, 19, false);
#line 162 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                          Write(ViewBag.SubjectName);

#line default
#line hidden
            EndContext();
            BeginContext(6847, 181, true);
            WriteLiteral("</span>\r\n                        </li>\r\n                        <li>\r\n                            <span class=\"title\">Reason:</span>\r\n                            <span class=\"text\">");
            EndContext();
            BeginContext(7029, 12, false);
#line 166 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                          Write(Model.Reason);

#line default
#line hidden
            EndContext();
            BeginContext(7041, 40, true);
            WriteLiteral("</span>\r\n                        </li>\r\n");
            EndContext();
#line 168 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                         if (@Model.Reason == "For Other Reasons" && @Model.OtherReason != null)
                        {

#line default
#line hidden
            BeginContext(7206, 159, true);
            WriteLiteral("                            <li>\r\n                                <span class=\"title\">Other Reason:</span>\r\n                                <span class=\"text\">");
            EndContext();
            BeginContext(7366, 17, false);
#line 172 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                              Write(Model.OtherReason);

#line default
#line hidden
            EndContext();
            BeginContext(7383, 44, true);
            WriteLiteral("</span>\r\n                            </li>\r\n");
            EndContext();
#line 174 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                        }

#line default
#line hidden
            BeginContext(7454, 360, true);
            WriteLiteral(@"                    </ul>

                </div>
            </div>
            <h3 class=""card-title pl_4"">Subjects</h3>
            <div class=""card-box mb_0"">
                <div class=""row addl_infor"">

                    <ul class=""personal-info"">
                        <li>
                            <span class=""title"">Subject:</span>
");
            EndContext();
            BeginContext(7888, 47, true);
            WriteLiteral("                            <span class=\"text\">");
            EndContext();
            BeginContext(7936, 19, false);
#line 187 "E:\Ashok Work\CompassTutor\CompassTutor\Views\Tutor\StudentProfileView.cshtml"
                                          Write(ViewBag.SubjectName);

#line default
#line hidden
            EndContext();
            BeginContext(7955, 117, true);
            WriteLiteral("</span>\r\n                        </li>\r\n                    </ul>\r\n\r\n                </div>\r\n\r\n\r\n            </div>\r\n");
            EndContext();
            BeginContext(9319, 38, true);
            WriteLiteral("        </div>\r\n\r\n    </div>\r\n</div>\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<Student> Html { get; private set; }
    }
}
#pragma warning restore 1591
