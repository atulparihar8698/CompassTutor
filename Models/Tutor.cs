using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Data.Models
{
    public class Tutor
    {    
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string MiddleName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public DateTime? DOB { get; set; }
        public string Gender { get; set; }
        public int? CountryId { get; set; }
        public int? StateId { get; set; }
        public int? CityId { get; set; }
        public int TimeZoneId { get; set; }        
        public string Address { get; set; }
        public string PhoneNumber { get; set; }
        public string EducationLevel { get; set; }
        public string Experience { get; set; }
        //[Required]
        //[Display(Name = "Full Name")]
        public int? Age { get; set; }
        public string AvailableDays { get; set; }
        public decimal HourlyRate { get; set; }
        public string AvailableType { get; set; }
        public string ProfilePic { get; set; }       
        public bool IsActive { get; set; }
        public string IdentityId { get; set; }
        public Country Country { get; set; }
        public State State { get; set; }
        public City City { get; set; }
        public TimeZones TimeZone { get; set; }
        public bool? IsApproved { get; set; }

        public string Description { get; set; }
        public string SubjectId { get; set; }
        public string SubjectTypeId { get; set; }

        public string Education { get; set; }


        public string ProfileHeadLine { get; set; }
    }
}

