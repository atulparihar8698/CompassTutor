using Microsoft.AspNetCore.Http;
using System;
using System.Collections.Generic;
using System.Text;

namespace Data.Models
{
    public class Student
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string MobileNumber { get; set; }
        public string Password { get; set; }
        public string Token { get; set; }

        public DateTime CreatedDate { get; set; }
        public DateTime UpdatedDate { get; set; }
        public string Subject { get; set; }
        public string Gender { get; set; }        
        public string Address { get; set; }
        public string EducationLevel { get; set; }
        public int? TimeZoneId { get; set; }
        public int? CountryId { get; set; }
        public int? StateId { get; set; }
        public int? CityId { get; set; }
        public string Profile { get; set; }

        public string IdentityId { get; set; } 
        public int? IsAddtionalDetailsFilled { get; set; }


        public Country Country { get; set; }
        public State State { get; set; }
        public City City { get; set; }
        public TimeZones TimeZone { get; set; }
        public bool? IsApproved { get; set; }

        public string ZipCode { get; set; }
        public string StudentPreviousSchool { get; set; }
        public string Reason { get; set; }
        public string OtherReason { get; set; }
    }

}
