#pragma checksum "E:\PGI_GIT\CompassTutor\CompassTutor\Views\Tutor\List.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "d72bf4bcb8abc5a0e8f5628614cb2bdbc16d429d"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Tutor_List), @"mvc.1.0.view", @"/Views/Tutor/List.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Tutor/List.cshtml", typeof(AspNetCore.Views_Tutor_List))]
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
#line 1 "E:\PGI_GIT\CompassTutor\CompassTutor\Views\_ViewImports.cshtml"
using CompassTutor;

#line default
#line hidden
#line 2 "E:\PGI_GIT\CompassTutor\CompassTutor\Views\_ViewImports.cshtml"
using CompassTutor.Models;

#line default
#line hidden
#line 3 "E:\PGI_GIT\CompassTutor\CompassTutor\Views\_ViewImports.cshtml"
using CompassTutor.Models.AccountViewModels;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"d72bf4bcb8abc5a0e8f5628614cb2bdbc16d429d", @"/Views/Tutor/List.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"7b8643078c59f04625b5bdf35b5bbe1bdea04e4d", @"/Views/_ViewImports.cshtml")]
    public class Views_Tutor_List : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<List<Data.Models.Tutor>>
    {
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_0 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("style", new global::Microsoft.AspNetCore.Html.HtmlString("border-radius:50%;width:60px;height:50px;"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_1 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("class", new global::Microsoft.AspNetCore.Html.HtmlString("inline-block"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_2 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("id", new global::Microsoft.AspNetCore.Html.HtmlString(""), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_3 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("src", new global::Microsoft.AspNetCore.Html.HtmlString("~/img/user.jpg"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
        private static readonly global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute __tagHelperAttribute_4 = new global::Microsoft.AspNetCore.Razor.TagHelpers.TagHelperAttribute("alt", new global::Microsoft.AspNetCore.Html.HtmlString("user"), global::Microsoft.AspNetCore.Razor.TagHelpers.HtmlAttributeValueStyle.DoubleQuotes);
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
#line 2 "E:\PGI_GIT\CompassTutor\CompassTutor\Views\Tutor\List.cshtml"
  
    ViewData["Title"] = "List";

#line default
#line hidden
            BeginContext(72, 224, true);
            WriteLiteral("<div class=\"page-wrapper\">\r\n    <div class=\"content container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-xs-4\">\r\n                <h4 class=\"page-title\">Tutors</h4>\r\n            </div>\r\n\r\n        </div>\r\n");
            EndContext();
            BeginContext(1713, 42, true);
            WriteLiteral("        <div class=\"row staff-grid-row\">\r\n");
            EndContext();
#line 44 "E:\PGI_GIT\CompassTutor\CompassTutor\Views\Tutor\List.cshtml"
             for (int i = 0; i < Model.Count(); i++)
            {

#line default
#line hidden
            BeginContext(1856, 87, true);
            WriteLiteral("                <div class=\"col-md-4 col-sm-4 col-xs-6 col-lg-3\">\r\n                    ");
            EndContext();
            BeginContext(1944, 28, false);
#line 47 "E:\PGI_GIT\CompassTutor\CompassTutor\Views\Tutor\List.cshtml"
               Write(Html.HiddenFor(m => m[i].Id));

#line default
#line hidden
            EndContext();
            BeginContext(1972, 85, true);
            WriteLiteral("\r\n                    <div class=\"profile-widget\">\r\n                        <div>\r\n\r\n");
            EndContext();
#line 52 "E:\PGI_GIT\CompassTutor\CompassTutor\Views\Tutor\List.cshtml"
                             if (!String.IsNullOrEmpty(Model[i].ProfilePic))
                            {

#line default
#line hidden
            BeginContext(2293, 81, true);
            WriteLiteral("<img style=\"border-radius:50%;width:60px;height:50px;\" class=\"inline-block\" id=\"\"");
            EndContext();
            BeginWriteAttribute("src", " src=\"", 2374, "\"", 2418, 1);
#line 53 "E:\PGI_GIT\CompassTutor\CompassTutor\Views\Tutor\List.cshtml"
WriteAttributeValue("", 2380, Html.DisplayFor(m => m[i].ProfilePic), 2380, 38, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(2419, 14, true);
            WriteLiteral(" alt=\"user\">\r\n");
            EndContext();
#line 54 "E:\PGI_GIT\CompassTutor\CompassTutor\Views\Tutor\List.cshtml"

                            }
                            else
                            {


#line default
#line hidden
            BeginContext(2533, 32, true);
            WriteLiteral("                                ");
            EndContext();
            BeginContext(2565, 114, false);
            __tagHelperExecutionContext = __tagHelperScopeManager.Begin("img", global::Microsoft.AspNetCore.Razor.TagHelpers.TagMode.StartTagOnly, "d72bf4bcb8abc5a0e8f5628614cb2bdbc16d429d7559", async() => {
            }
            );
            __Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper = CreateTagHelper<global::Microsoft.AspNetCore.Mvc.Razor.TagHelpers.UrlResolutionTagHelper>();
            __tagHelperExecutionContext.Add(__Microsoft_AspNetCore_Mvc_Razor_TagHelpers_UrlResolutionTagHelper);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_0);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_1);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_2);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_3);
            __tagHelperExecutionContext.AddHtmlAttribute(__tagHelperAttribute_4);
            await __tagHelperRunner.RunAsync(__tagHelperExecutionContext);
            if (!__tagHelperExecutionContext.Output.IsContentModified)
            {
                await __tagHelperExecutionContext.SetOutputContentAsync();
            }
            Write(__tagHelperExecutionContext.Output);
            __tagHelperExecutionContext = __tagHelperScopeManager.End();
            EndContext();
            BeginContext(2679, 2, true);
            WriteLiteral("\r\n");
            EndContext();
#line 60 "E:\PGI_GIT\CompassTutor\CompassTutor\Views\Tutor\List.cshtml"
                            }

#line default
#line hidden
            BeginContext(2712, 28, true);
            WriteLiteral("                            ");
            EndContext();
            BeginContext(2835, 141, true);
            WriteLiteral("\r\n\r\n                        </div>\r\n\r\n                        <h4 class=\"user-name m-t-10 m-b-0 text-ellipsis\"><a href=\"client-profile.html\">");
            EndContext();
            BeginContext(2977, 36, false);
#line 65 "E:\PGI_GIT\CompassTutor\CompassTutor\Views\Tutor\List.cshtml"
                                                                                                  Write(Html.DisplayFor(m => m[i].FirstName));

#line default
#line hidden
            EndContext();
            BeginContext(3013, 121, true);
            WriteLiteral(" &nbsp;</a></h4>\r\n                        <h5 class=\"user-name m-t-10 m-b-0 text-ellipsis\"><a href=\"client-profile.html\">");
            EndContext();
            BeginContext(3135, 32, false);
#line 66 "E:\PGI_GIT\CompassTutor\CompassTutor\Views\Tutor\List.cshtml"
                                                                                                  Write(Html.DisplayFor(m => m[i].Email));

#line default
#line hidden
            EndContext();
            BeginContext(3167, 11, true);
            WriteLiteral("</a></h5>\r\n");
            EndContext();
            BeginContext(3247, 26, true);
            WriteLiteral("                        <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 3273, "\"", 3328, 2);
            WriteAttributeValue("", 3280, "/Student/Schedule/", 3280, 18, true);
#line 68 "E:\PGI_GIT\CompassTutor\CompassTutor\Views\Tutor\List.cshtml"
WriteAttributeValue("", 3298, Html.DisplayFor(m => m[i].Id), 3298, 30, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(3329, 85, true);
            WriteLiteral(" class=\"btn btn-default btn-sm m-t-10\">View Schedules</a>\r\n                        <a");
            EndContext();
            BeginWriteAttribute("href", " href=\"", 3414, "\"", 3470, 2);
            WriteAttributeValue("", 3421, "/Tutor/ProfileView/", 3421, 19, true);
#line 69 "E:\PGI_GIT\CompassTutor\CompassTutor\Views\Tutor\List.cshtml"
WriteAttributeValue("", 3440, Html.DisplayFor(m => m[i].Id), 3440, 30, false);

#line default
#line hidden
            EndWriteAttribute();
            BeginContext(3471, 109, true);
            WriteLiteral(" class=\"btn btn-default btn-sm m-t-10\">View Profile</a>\r\n                    </div>\r\n                </div>\r\n");
            EndContext();
#line 72 "E:\PGI_GIT\CompassTutor\CompassTutor\Views\Tutor\List.cshtml"
            }

#line default
#line hidden
            BeginContext(3595, 11441, true);
            WriteLiteral(@"        </div>
    </div>
    <div class=""notification-box"">
        <div class=""msg-sidebar notifications msg-noti"">
            <div class=""topnav-dropdown-header"">
                <span>Messages</span>
            </div>
            <div class=""drop-scroll msg-list-scroll"">
                <ul class=""list-box"">
                    <li>
                        <a href=""chat.html"">
                            <div class=""list-item"">
                                <div class=""list-left"">
                                    <span class=""avatar"">R</span>
                                </div>
                                <div class=""list-body"">
                                    <span class=""message-author"">Richard Miles </span>
                                    <span class=""message-time"">12:28 AM</span>
                                    <div class=""clearfix""></div>
                                    <span class=""message-content"">Lorem ipsum dolor sit amet, consectetur adipiscing</s");
            WriteLiteral(@"pan>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href=""chat.html"">
                            <div class=""list-item new-message"">
                                <div class=""list-left"">
                                    <span class=""avatar"">J</span>
                                </div>
                                <div class=""list-body"">
                                    <span class=""message-author"">John Doe</span>
                                    <span class=""message-time"">1 Aug</span>
                                    <div class=""clearfix""></div>
                                    <span class=""message-content"">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                  ");
            WriteLiteral(@"      <a href=""chat.html"">
                            <div class=""list-item"">
                                <div class=""list-left"">
                                    <span class=""avatar"">T</span>
                                </div>
                                <div class=""list-body"">
                                    <span class=""message-author""> Tarah Shropshire </span>
                                    <span class=""message-time"">12:28 AM</span>
                                    <div class=""clearfix""></div>
                                    <span class=""message-content"">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href=""chat.html"">
                            <div class=""list-item"">
                                <div class=""list-left"">
                                    <span cl");
            WriteLiteral(@"ass=""avatar"">M</span>
                                </div>
                                <div class=""list-body"">
                                    <span class=""message-author"">Mike Litorus</span>
                                    <span class=""message-time"">12:28 AM</span>
                                    <div class=""clearfix""></div>
                                    <span class=""message-content"">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href=""chat.html"">
                            <div class=""list-item"">
                                <div class=""list-left"">
                                    <span class=""avatar"">C</span>
                                </div>
                                <div class=""list-body"">
                                    <span class=""message-author""> Ca");
            WriteLiteral(@"therine Manseau </span>
                                    <span class=""message-time"">12:28 AM</span>
                                    <div class=""clearfix""></div>
                                    <span class=""message-content"">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href=""chat.html"">
                            <div class=""list-item"">
                                <div class=""list-left"">
                                    <span class=""avatar"">D</span>
                                </div>
                                <div class=""list-body"">
                                    <span class=""message-author""> Domenic Houston </span>
                                    <span class=""message-time"">12:28 AM</span>
                                    <div class=""clearfix""></div>
            ");
            WriteLiteral(@"                        <span class=""message-content"">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href=""chat.html"">
                            <div class=""list-item"">
                                <div class=""list-left"">
                                    <span class=""avatar"">B</span>
                                </div>
                                <div class=""list-body"">
                                    <span class=""message-author""> Buster Wigton </span>
                                    <span class=""message-time"">12:28 AM</span>
                                    <div class=""clearfix""></div>
                                    <span class=""message-content"">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                </div>
                            </di");
            WriteLiteral(@"v>
                        </a>
                    </li>
                    <li>
                        <a href=""chat.html"">
                            <div class=""list-item"">
                                <div class=""list-left"">
                                    <span class=""avatar"">R</span>
                                </div>
                                <div class=""list-body"">
                                    <span class=""message-author""> Rolland Webber </span>
                                    <span class=""message-time"">12:28 AM</span>
                                    <div class=""clearfix""></div>
                                    <span class=""message-content"">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href=""chat.html"">
                            <div class=""list-item"">");
            WriteLiteral(@"
                                <div class=""list-left"">
                                    <span class=""avatar"">C</span>
                                </div>
                                <div class=""list-body"">
                                    <span class=""message-author""> Claire Mapes </span>
                                    <span class=""message-time"">12:28 AM</span>
                                    <div class=""clearfix""></div>
                                    <span class=""message-content"">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href=""chat.html"">
                            <div class=""list-item"">
                                <div class=""list-left"">
                                    <span class=""avatar"">M</span>
                                </div>
                    ");
            WriteLiteral(@"            <div class=""list-body"">
                                    <span class=""message-author"">Melita Faucher</span>
                                    <span class=""message-time"">12:28 AM</span>
                                    <div class=""clearfix""></div>
                                    <span class=""message-content"">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href=""chat.html"">
                            <div class=""list-item"">
                                <div class=""list-left"">
                                    <span class=""avatar"">J</span>
                                </div>
                                <div class=""list-body"">
                                    <span class=""message-author"">Jeffery Lalor</span>
                                    <span class=""message-time""");
            WriteLiteral(@">12:28 AM</span>
                                    <div class=""clearfix""></div>
                                    <span class=""message-content"">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href=""chat.html"">
                            <div class=""list-item"">
                                <div class=""list-left"">
                                    <span class=""avatar"">L</span>
                                </div>
                                <div class=""list-body"">
                                    <span class=""message-author"">Loren Gatlin</span>
                                    <span class=""message-time"">12:28 AM</span>
                                    <div class=""clearfix""></div>
                                    <span class=""message-content"">Lorem ipsum dolor sit amet, consectetu");
            WriteLiteral(@"r adipiscing</span>
                                </div>
                            </div>
                        </a>
                    </li>
                    <li>
                        <a href=""chat.html"">
                            <div class=""list-item"">
                                <div class=""list-left"">
                                    <span class=""avatar"">T</span>
                                </div>
                                <div class=""list-body"">
                                    <span class=""message-author"">Tarah Shropshire</span>
                                    <span class=""message-time"">12:28 AM</span>
                                    <div class=""clearfix""></div>
                                    <span class=""message-content"">Lorem ipsum dolor sit amet, consectetur adipiscing</span>
                                </div>
                            </div>
                        </a>
                    </li>
                </ul>
       ");
            WriteLiteral("     </div>\r\n            <div class=\"topnav-dropdown-footer\">\r\n                <a href=\"chat.html\">See all messages</a>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n");
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
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<List<Data.Models.Tutor>> Html { get; private set; }
    }
}
#pragma warning restore 1591
